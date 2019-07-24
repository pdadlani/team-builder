import React, { useState } from 'react';
// import logo from './logo.svg';
import './App.css';

import data from './data.js';

function App() {

  // const [teamMember, setTeamMember] = useState({
  //   name: '',
  //   email: '',
  //   role: ''
  // });

  const [teamMember, setTeamMember] = useState('');

  const handleNewMember = (event) => {
    setTeamMember({ ...teamMember, [event.target.name]: event.target.value });
    console.log('role set', teamMember);
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('role', teamMember);
  }

  return (
    <div className="App">
      <header className="App-header">
        <p>This is a test</p>
        <form onSubmit={handleSubmit}>
          <fieldset>
            <legend>Sign-up</legend>
            <div className='name'>
              <label>
                Name:
                <input 
                  type='text'
                  name='name'
                  placeholder='Name'
                  onChange={handleNewMember}
                />
              </label>
            </div>
            <div className='email'>
              <label>
                Email:
                <input 
                  type='text'
                  name='email'
                  placeholder='Email Address'
                  onChange={handleNewMember}
                />
              </label>
            </div>
            <div className='role'>
              <label>
                Role:
                <input
                  type='text'
                  name='role'
                  placeholder='What is Your Role?'
                  // id='role' 
                  // value={teamMember} 
                  onChange={handleNewMember}
                />
              </label>
            </div>
            
            <button>Submit!</button>
          </fieldset>
        </form>
      </header>
    </div>
  );
}

export default App;
