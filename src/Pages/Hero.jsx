import { useEffect, useRef, useState } from "react";
import "./Hero.css";

const Hero = () => {
  const sloganRef = useRef(null);
  const [isAnimated, setIsAnimated] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const sloganTop = sloganRef.current.offsetTop;

      if (scrollTop > sloganTop - window.innerHeight / 2) {
        setIsAnimated(true);
        sloganRef.current.classList.add("fade-in");
      } else {
        setIsAnimated(false);
        sloganRef.current.classList.remove("fade-in");
      }
    };

    window.addEventListener("scroll", handleScroll);

    // Clean up event listener
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="hero w-full" id="home">
      <img src="assets/logo/logo.png" alt="Logo" className="logo" />
      {/* <h1 className="title">Exploring Ideas</h1> */}
      <p ref={sloganRef} className={`slogan ${isAnimated ? "animated" : ""}`}>
        Innovate, Create, Elevate
      </p>
    </div>
  );
};

export default Hero;
