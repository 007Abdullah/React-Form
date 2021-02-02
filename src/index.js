import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import './index.css';


function Form() {
  const [name1, setName1] = useState('');
  const [fname, setFullName1] = useState('');
  const [name2, setName2] = useState('');
  const [lname, setFullName2] = useState('');

  function submitData(event) {
    event.preventDefault();
    setFullName1(name1);
    setFullName2(name2);
  }
  function InputEvent1(event) {
    setName1(event.target.value);
  }
  function InputEvent2(event) {
    setName2(event.target.value)
  }


  return (
    <>
      <form onSubmit={submitData} style={{ textAlign: "center", margin: "20px" }}>

        <label>Name :</label>
        <input type="text" onChange={InputEvent1} value={name1} required />
        <br />
        <br />
        <label>lame :</label>

        <input type="text" onChange={InputEvent2} value={name2} required />
        <br />
        <br />
        <button>Submit</button>
      </form>
      <h1 style={{ textAlign: "center" }}>{fname} {lname}</h1>
    </>
  )
}

ReactDOM.render(<Form />, document.querySelector('#root'));
