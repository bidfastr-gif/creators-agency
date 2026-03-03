import { useEffect } from 'react';

const SEO = ({ title, description, keywords, canonicalUrl, canonicalPath }) => {
  const siteTitle = 'The Creators Marketing Agency';
  const fullTitle = title ? `${title} | ${siteTitle}` : siteTitle;
  const resolvedDescription =
    description ||
    'The Creators Marketing Agency is a leading digital marketing agency offering SEO, PPC, social media marketing, and web development services.';

  const siteDomain = 'https://digitalpro-agency.com';

  const resolvedCanonicalUrl =
    canonicalUrl || (canonicalPath ? `${siteDomain}${canonicalPath}` : undefined);

  useEffect(() => {
    const setMetaByName = (name, content) => {
      const safeContent = content ?? '';
      let el = document.querySelector(`meta[name="${name}"]`);
      if (!el) {
        el = document.createElement('meta');
        el.setAttribute('name', name);
        document.head.appendChild(el);
      }
      el.setAttribute('content', safeContent);
    };

    const removeMetaByName = (name) => {
      const el = document.querySelector(`meta[name="${name}"]`);
      if (el) el.remove();
    };

    const setMetaByProperty = (property, content) => {
      const safeContent = content ?? '';
      let el = document.querySelector(`meta[property="${property}"]`);
      if (!el) {
        el = document.createElement('meta');
        el.setAttribute('property', property);
        document.head.appendChild(el);
      }
      el.setAttribute('content', safeContent);
    };

    const removeMetaByProperty = (property) => {
      const el = document.querySelector(`meta[property="${property}"]`);
      if (el) el.remove();
    };

    const setLinkRel = (rel, href) => {
      const el = document.querySelector(`link[rel="${rel}"]`);
      if (!href) {
        if (el) el.remove();
        return;
      }

      let linkEl = el;
      if (!linkEl) {
        linkEl = document.createElement('link');
        linkEl.setAttribute('rel', rel);
        document.head.appendChild(linkEl);
      }
      linkEl.setAttribute('href', href);
    };

    document.title = fullTitle;

    setMetaByName('title', fullTitle);
    setMetaByName('description', resolvedDescription);
    setMetaByName('robots', 'index, follow');

    if (keywords) setMetaByName('keywords', keywords);
    else removeMetaByName('keywords');

    setLinkRel('canonical', resolvedCanonicalUrl);

    setMetaByProperty('og:type', 'website');
    setMetaByProperty('og:title', fullTitle);
    setMetaByProperty('og:description', resolvedDescription);
    if (resolvedCanonicalUrl) setMetaByProperty('og:url', resolvedCanonicalUrl);
    else removeMetaByProperty('og:url');

    setMetaByProperty('twitter:card', 'summary_large_image');
    setMetaByProperty('twitter:title', fullTitle);
    setMetaByProperty('twitter:description', resolvedDescription);
  }, [fullTitle, resolvedDescription, keywords, resolvedCanonicalUrl]);

  return null;
};

export default SEO;
