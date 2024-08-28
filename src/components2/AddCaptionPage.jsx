import React, { useEffect, useRef } from 'react';
import { Canvas, Textbox, Rect, Circle, Triangle, Image } from 'fabric';  // Adjust the imports based on your needs
import "./AddCaptionPage.css"

function AddCaptionPage() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = new Canvas(canvasRef.current);

    // Sample: Adding an image
    Image.fromURL('https://example.com/image.jpg', (img) => {
      img.scale(0.5);
      canvas.add(img);
      canvas.renderAll();
    });

    // Adding text
    const addText = () => {
      const text = new Textbox('Your caption here', {
        left: 50,
        top: 50,
        width: 200,
        fontSize: 20,
      });
      canvas.add(text);
    };

    // Adding shapes
    const addShape = (shapeType) => {
      let shape;
      switch (shapeType) {
        case 'Rectangle':
          shape = new Rect({ width: 100, height: 100, fill: 'red' });
          break;
        case 'Circle':
          shape = new Circle({ radius: 50, fill: 'green' });
          break;
        case 'Triangle':
          shape = new Triangle({ width: 100, height: 100, fill: 'blue' });
          break;
        default:
          break;
      }
      shape && canvas.add(shape);
    };

    // Event listeners
    document.getElementById('addText').addEventListener('click', addText);
    document.getElementById('addRectangle').addEventListener('click', () => addShape('Rectangle'));
    document.getElementById('addCircle').addEventListener('click', () => addShape('Circle'));
    document.getElementById('addTriangle').addEventListener('click', () => addShape('Triangle'));

    // Download the canvas as an image
    document.getElementById('download').addEventListener('click', () => {
      const dataURL = canvas.toDataURL({
        format: 'png',
        quality: 1,
      });
      const link = document.createElement('a');
      link.href = dataURL;
      link.download = 'image-with-captions.png';
      link.click();
    });

    return () => {
      canvas.dispose(); // Clean up the canvas when the component is unmounted
    };
  }, []);

  return (
    <div>
      <canvas ref={canvasRef} width={500} height={500} />
      <div>
        <button id="addText">Add Text</button>
        <button id="addRectangle">Add Rectangle</button>
        <button id="addCircle">Add Circle</button>
        <button id="addTriangle">Add Triangle</button>
        <button id="download">Download</button>
      </div>
    </div>
  );
}

export default AddCaptionPage;


