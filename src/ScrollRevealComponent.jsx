import React, { useRef, useEffect, useState } from "react";

const ScrollRevealComponent = ({ children }) => {
  const componentRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  const handleIntersection = (entries) => {
    const entry = entries[0];
    setIsVisible(entry.isIntersecting);
  };

  useEffect(() => {
    const options = {
      root: null,
      rootMargin: "0px",
      threshold: 0.5, // Adjust the threshold as needed
    };

    const observer = new IntersectionObserver(handleIntersection, options);

    if (componentRef.current) {
      observer.observe(componentRef.current);
    }

    // Cleanup the observer on component unmount
    return () => observer.disconnect();
  }, []);

  return <div ref={componentRef}>{isVisible && children}</div>;
};

export default ScrollRevealComponent;
