import React, { useState, useRef, useLayoutEffect } from 'react';
import { Button } from 'react-bootstrap';
import { useSearchParams } from 'react-router-dom';
import Text from './Text';
import html2canvas from 'html2canvas';

const Edit = () => {
  const [params] = useSearchParams();
  const [count, setCount] = useState(0);
  const memeRef = useRef(null);
  const memeContentRef = useRef(null);
  const [containerHeight, setContainerHeight] = useState(0);

  const addText = () => {
    setCount(count + 1);
  };

  const saveMeme = () => {
    html2canvas(memeRef.current, {
      scale: 2,
      useCORS: true,
    })
      .then((canvas) => {
        const dataUrl = canvas.toDataURL('image/jpeg', 0.95);
        const link = document.createElement('a');
        link.download = 'meme.jpeg';
        link.href = dataUrl;
        link.click();
      })
      .catch((error) => {
        console.error('Screenshot failed:', error);
      });
  };

  // Adjust container height smoothly whenever count changes
  useLayoutEffect(() => {
    if (memeContentRef.current) {
      const newHeight = memeContentRef.current.scrollHeight;
      setContainerHeight(newHeight);
    }
  }, [count]);

  return (
    <div
      style={{
        height: '100vh',
        overflow: 'hidden',
        background: 'linear-gradient(to right, #a1c4fd, #c2e9fb)',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '20px',
      }}
    >
      <div
        ref={memeRef}
        style={{
          width: '600px',
          height: 'containerHeight',
          overflowX:'auto',
          overflowY:'auto',
          transition: 'height 0.5s ease-in-out',
          position: 'relative',
          border: '3px solid #000',
          backgroundColor: 'white',
          padding: '10px',
          borderRadius: '10px',
        }}
      >
        <div ref={memeContentRef}>
          <img
            src={params.get('url')}
            alt="meme"
            style={{ width: '100%', height: 'auto', display: 'block' }}
          />
          {Array.from({ length: count }, (_, idx) => (
            <Text key={idx} />
          ))}
        </div>
      </div>

      <div
        style={{
          marginTop: '20px',
          display: 'flex',
          gap: '15px',
          justifyContent: 'center',
        }}
      >
        <Button onClick={addText}>Add Text</Button>
        <Button variant="success" onClick={saveMeme}>
          Save
        </Button>
      </div>
    </div>
  );
};

export default Edit;
