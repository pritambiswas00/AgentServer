import { useState, useRef, useEffect } from "react";
import DOTS from "vanta/dist/vanta.dots.min";

const Background = (props) => {
  const [vantaEffect, setVantaEffect] = useState(0);
  const myRef = useRef(null);
  useEffect(() => {
    if (!vantaEffect) {
      setVantaEffect(
        DOTS({
          el: myRef.current
        })
      );
    }
    return () => {
      if (vantaEffect) vantaEffect.destroy();
    };
  }, [vantaEffect]);
  return <div ref={myRef}>{props.children}</div>;
};

export default Background;
