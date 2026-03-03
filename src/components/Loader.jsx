import React from 'react';
import { motion } from 'framer-motion';

const Loader = () => {
  const Motion = motion;
  const _MOTION = motion;
  return (
    <Motion.div
      className="fixed inset-0 z-50 flex items-center justify-center bg-gradient-to-br from-brand-primary to-brand-accent"
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="relative flex flex-col items-center">
        <Motion.div
          className="w-16 h-16 border-4 border-white border-t-transparent rounded-full"
          animate={{ rotate: 360 }}
          transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
        />
        <Motion.h2
          className="mt-4 text-white text-xl font-bold tracking-wider"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
        >
          LOADING...
        </Motion.h2>
      </div>
    </Motion.div>
  );
};

export default Loader;
