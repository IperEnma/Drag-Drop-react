import React, { useState, useRef } from 'react';
import './App.css';

const App = () => {
  const dragItem = useRef();
  const dragOverItem = useRef();
  const [list, setList] = useState([{content: '', id: 1}, {content: '', id: 2}, {content: '', id: 3}, {content: '1', id: 1}, {content: '2', id: 2}, {content: '3', id: 3}]);

  const dragEnter = (e, position) => {
      dragItem.current = position;
  };

  const dragStart = (e, position) => {
      dragOverItem.current = position;
  };

  const drop = () => {
    if (true) {
      const copyListItems = [...list]; // copio la lista original
      const dragItemContent = copyListItems[dragItem.current]; //obtengo la posicion
      const dragOverItemContent = copyListItems[dragOverItem.current + 3]; //obtengo la posicion de los elementos de abajo, se puede mejorar para que sea dinamico
      copyListItems.splice(dragItem.current, 1, dragOverItemContent); // se copia el contenido del cuadro de abajo al de arriba
      copyListItems.splice(dragOverItem.current + 3, 1, dragItemContent); // se copia el contenido del cuadro de arriba al de abajo
      dragItem.current = null; 
      dragOverItem.current = null;
    }
  };

  // separo en dos divs
  const upperItems = list.slice(0, 3); //draggable
  const lowerItems = list.slice(3); //no draggable

  return (
    <div className="container">
      <div className="upper-container">
        {upperItems.map((item, index) => (
          <div
            className="item"
            key={index}
            onDragEnter={(e) => dragEnter(e, index)} // al entrar en la zona
            draggable={false}
          >
            {item.content}
          </div>
        ))}
      </div>
      <div className="lower-container">
        {lowerItems.map((item, index) => (
          <div
            className="item"
            key={index}
            onDragStart={(e) => dragStart(e, index)} // al empezar a arrastrar
            onDragEnd={drop} // al soltar
            draggable={true} // solo arrastrar los de abajo
          >
            {item.content}
          </div>
        ))}
      </div>
    </div>
  );
};

export default App;
