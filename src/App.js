import React, { useState } from 'react'
import SingleColor from './SingleColor'

import Values from 'values.js'

function App() {
  const [color, setColor] = useState('');
  const[error, setError] = useState(false);
  const [list, setList] = useState([]);

  // handling the form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('hello form');
  }

  return ( 
    <> 
      <section className='container'>
      <h3>color generator App</h3>
      <form onSubmit={handleSubmit}>
        <input type='text'
        value={color}
        onChange={(e) => setColor(e.target.value)} 
        placeholder='#15025'
        />
        <button className='btn' type='submit'>submit</button>
      </form>
    </section>
    <section className='colors'>
      <h4>list goes here</h4>
    </section>
    </>
  )
}

export default App
