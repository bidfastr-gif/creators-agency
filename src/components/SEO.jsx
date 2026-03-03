import { Helmet } from 'react-helmet-async';

const SEO = ({ title, description, keywords, canonicalUrl, canonicalPath }) => {
  const siteTitle = 'The Creators Marketing Agency';
  const fullTitle = title ? `${title} | ${siteTitle}` : siteTitle;
  const resolvedDescription =
    description ||
    'The Creators Marketing Agency is a leading digital marketing agency offering SEO, PPC, social media marketing, and web development services.';

  // Use a hardcoded domain for consistent SEO canonical URLs, or fallback to window.location.origin
  const siteDomain = 'https://digitalpro-agency.com'; 
  
  const resolvedCanonicalUrl =
    canonicalUrl ||
    (canonicalPath
      ? `${siteDomain}${canonicalPath}`
      : undefined);

  return (
    <Helmet>
      <title>{fullTitle}</title>
      <meta name="title" content={fullTitle} />
      <meta name="description" content={resolvedDescription} />
      <meta name="robots" content="index, follow" />
      {keywords && <meta name="keywords" content={keywords} />}
      
      {resolvedCanonicalUrl && <link rel="canonical" href={resolvedCanonicalUrl} />}

      <meta property="og:type" content="website" />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={resolvedDescription} />
      {resolvedCanonicalUrl && <meta property="og:url" content={resolvedCanonicalUrl} />}

      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:title" content={fullTitle} />
      <meta property="twitter:description" content={resolvedDescription} />
    </Helmet>
  );
};

export default SEO;
