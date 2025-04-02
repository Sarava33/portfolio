import React from "react";
import "../styles/intro.css";

export default function FadeInSection(props) {
  const [isVisible, setVisible] = React.useState(false);
  const domRef = React.useRef();

  React.useEffect(() => {
    // Create the intersection observer
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          setVisible(true); // Set visible when element intersects
        }
      });
    });

    // Ensure the element exists before observing
    if (domRef.current) {
      observer.observe(domRef.current);
    }

    // Cleanup function to unobserve the element when the component is unmounted
    return () => {
      if (domRef.current) {
        observer.unobserve(domRef.current);
      }
    };
  }, []); // Empty dependency array ensures it only runs once

  return (
    <div
      className={`fade-in-section ${isVisible ? "is-visible" : ""}`}
      style={{ transitionDelay: `${props.delay}` }}
      ref={domRef}
    >
      {props.children}
    </div>
  );
}
