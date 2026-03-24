import { useEffect } from 'react';

/**
 * FRHomeClone page component
 * Renders the static FR Home Page clone (converted from MHTML) inside a full-page iframe.
 * This bypasses React Router's SPA routing while keeping the page accessible as a route.
 */
function FRHomeClone() {
  useEffect(() => {
    // Hide any scrollbar on the parent while iframe is displayed
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = '';
    };
  }, []);

  return (
    <iframe
      src="/fr-home-clone.html"
      title="Innoscripta FR Home Page"
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100vw',
        height: '100vh',
        border: 'none',
        zIndex: 9999,
      }}
    />
  );
}

export default FRHomeClone;
