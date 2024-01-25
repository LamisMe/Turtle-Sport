
import React, { useEffect, useState } from 'react';

const OldPathTracker = ({ onOldPathChange }) => {
  const [oldPath, setOldPath] = useState('');

  useEffect(() => {
    const handlePopstate = () => {
      const newPath = window.location.pathname;
      setOldPath(newPath);
      onOldPathChange && onOldPathChange(newPath);
    };

    window.addEventListener('popstate', handlePopstate);

    return () => {
      window.removeEventListener('popstate', handlePopstate);
    };
  }, [onOldPathChange]);

  return null;
};

export default OldPathTracker;