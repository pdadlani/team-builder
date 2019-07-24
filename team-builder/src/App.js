import React, { useState } from 'react';
// import logo from './logo.svg';
import './App.css';
import Form from './Form.js';

import data from './data.js';
import styled from 'styled-components';

const HeaderStyle = styled.h1`
  color: white;
  background-color: #282c34;
  font-family: Georgia;
  padding: 20px;
`;

function App() {

  const [teamMember, setTeamMember] = useState({
    name: '',
    email: '',
    role: ''
  });
  const [membersList, setMembersList] = useState(data);
  console.log(membersList);
  // const [teamMember, setTeamMember] = useState('');

  const handleChange = (event) => {
    setTeamMember({ ...teamMember, [event.target.name]: event.target.value });
    // setTeamMember( [...membersList, teamMember])
    console.log('role set', teamMember);
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('role', teamMember);
    setMembersList([ ...membersList, teamMember])
  }



  return (
    <div className="App">
      {/* <header className="App-header"> */}
        <HeaderStyle>Sign up to be part of the team!</HeaderStyle>
        {/* <Form teamMember={teamMember} setTeamMember={setTeamMember} /> */}
      {/* </header> */}
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
                onChange={handleChange}
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
                onChange={handleChange}
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
                onChange={handleChange}
              />
            </label>
          </div>
          <button>Add Member!</button>
        </fieldset>
      </form> 
      <div className='team-members'>
        <h1>List of members</h1>
        {membersList && membersList.map((member, index) => {
          return (
            <div key={index} className='team-member'>
              <h2>Name: {member.name}</h2>
              <h4> Email: {member.email}</h4>
              <h4> Role: {member.role}</h4>
            </div>
          )
        })}
      </div>
    </div>         
  );
}

export default App;
