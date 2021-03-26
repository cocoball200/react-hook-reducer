import React, { useState, useEffect } from "react";

function Product() {
  const [target, setTarget] = useState(null);

  useEffect(() => {
    let observer;
    if (target) {
      observer = new IntersectionObserver(_onIntersect, { threshold: 1 });
      observer.observe(target);
    }
    return () => {
      observer && observer.disconnect();
    };
  }, [target]);
  return <div></div>;
}

export default Product;
