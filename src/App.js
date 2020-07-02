import React from 'react';

import './App.css';
import Modal from './Modal';


function App() {
  const modalRef=React.useRef();
  const openModal=()=>{
    modalRef.current.openModal()
  }
  return (
    <div className="App">
      <button onClick={openModal}>Open Modal</button>
      <Modal ref={modalRef}>
        <h1>Modal Header</h1>
        <p>
          <span>

            lhlklfgsghasghagagh
          </span>
        </p>
        <button onClick={()=>modalRef.current.close()}>Close Modal</button>
      </Modal>
    </div>
  );
}

export default App;
