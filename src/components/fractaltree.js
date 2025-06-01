import "../styles/fractaltree.css";

import React, { useEffect, useRef } from "react";

const FractalTree = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    //const dpr = window.devicePixelRatio || 1;
    const ctx = canvas.getContext("2d");
    const canvasWidth = 400; // Adjusted for better aspect ratio
    const canvasHeight = 400;
    const extent = 20; // Increased extent to zoom out the tree
    const nGen = 4; // More iterations for detail
    const multiplicity = 4; // Fixed to 5
    const ratio = 0.7; // Reduced ratio for smaller branches
    let requestId;

    const draw = (multi, r, theta) => {
      ctx.clearRect(0, 0, canvasWidth, canvasHeight);
      ctx.beginPath();
      ctx.strokeStyle = "#FFFFFF";
      ctx.lineWidth = 1;

      // Adjusted scaling functions for better fitting
      const xScale = (val) => Math.round((canvasWidth / extent) * val + canvasWidth / 2);
      const yScale = (val) => Math.round((-canvasHeight / extent) * val + canvasHeight - 20); // Moved down

      const branchAngles = Array.from({ length: multi }, (_, i) => -theta + (2 * theta * i) / (multi - 1));

      const xInit = 0;
      const yInit = 5; // Moved tree base downward
      const rotInit = 0;

      let thisGen = [{ xEnd: xInit, yEnd: yInit, rot: rotInit }];
      ctx.moveTo(xScale(0), yScale(-3)); // Set trunk position
      ctx.lineTo(xScale(xInit), yScale(yInit));

      let changedCol = false;

      for (let i = 0; i < nGen; i++) {
        let lastGen = thisGen;
        let nLastGen = lastGen.length;
        thisGen = Array(multi * nLastGen).fill(null);

        let len = Math.pow(r, i + 1) * 3; // Scaled length

        if (!changedCol && i > 2) {
          changedCol = true;
          ctx.stroke();
          ctx.beginPath();
          ctx.strokeStyle = "#FFFFFF"; // Green for leaves
        }

        for (let j = 0; j < nLastGen; j++) {
          let parent = lastGen[j];
          let xStart = parent.xEnd;
          let yStart = parent.yEnd;
          let rotParent = parent.rot;

          for (let k = 0; k < multi; k++) {
            let rot = rotParent + branchAngles[k];
            let xEnd = xStart + len * Math.sin(rot);
            let yEnd = yStart + len * Math.cos(rot);

            ctx.moveTo(xScale(xStart), yScale(yStart));
            ctx.lineTo(xScale(xEnd), yScale(yEnd));

            if (i < nGen - 1) {
              thisGen[j * multi + k] = { xEnd, yEnd, rot };
            }
          }
        }
      }

      ctx.stroke();
    };

    const animate = (time) => {
      const angleDeg = time / 25;
      const angle = (angleDeg * Math.PI) / 180;
      draw(multiplicity, ratio, angle);
      requestId = requestAnimationFrame(animate);
    };

    const startAnimation = () => {
      requestId = requestAnimationFrame(animate);
    };

    const stopAnimation = () => {
      if (requestId) {
        cancelAnimationFrame(requestId);
      }
    };

    startAnimation();

    return () => stopAnimation(); // Cleanup animation on unmount

  }, []);

  return <canvas ref={canvasRef} width={400} height={400} />;
};

export default FractalTree;

