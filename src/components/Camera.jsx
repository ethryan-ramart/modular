'use client'

import React, { useRef, useEffect, useState } from 'react';
import Webcam from 'react-webcam';

const Camera = () => {
  const webcamRef = useRef(null);
  const [windowSize, setWindowSize] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });

  const capture = () => {
    const imageSrc = webcamRef.current.getScreenshot();
    // Aquí puedes hacer algo con la imagen capturada, como mostrarla en otra parte de la interfaz o enviarla a un servidor.
  };

  useEffect(() => {
    const handleResize = () => {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <>
      <Webcam
        audio={false}
        height={windowSize.height - 400}
        ref={webcamRef}
        screenshotFormat="image/jpeg"
        // width={windowSize.width - 200}
      />
      <button onClick={capture}>Capturar Foto</button>
    </>
  );
};

export default Camera;