import React, { useState } from 'react';
// import logo from './logo.svg';
import './App.css';
import Form from './components/Form.js';
import Member from './components/Member.js';

import data from './data.js';
import styled from 'styled-components';

const HeaderStyle = styled.h1`
  color: white;
  background-color: #282c34;
  font-family: Georgia;
  padding: 20px;
`;

const emptyForm = {
  name: '',
  email: '',
  role: ''
}

function App() {

  const [teamMember, setTeamMember] = useState(emptyForm);
  const [membersList, setMembersList] = useState(data);
  console.log(membersList);
  // const [teamMember, setTeamMember] = useState('');

  const handleChange = event => {
    setTeamMember({ ...teamMember, [event.target.name]: event.target.value });
    // setTeamMember( [...membersList, teamMember])
    console.log('role set', teamMember);
  }

  const handleSubmit = event => {
    event.preventDefault();
    // console.log('role', teamMember);
    setMembersList([ ...membersList, teamMember])
    setTeamMember(emptyForm)
  }

  const [memberToEdit, setMemberToEdit] = useState();
  const editMember = event => {
    // setMemberToEdit(member)
    setTeamMember(event)
    console.log('this wants to be edited', event)
  }

  return (
    <div className="App">
      <HeaderStyle>Sign up to be part of the team!</HeaderStyle>
      <Form 
        handleChange={handleChange}
        handleSubmit={handleSubmit}
        teamMember={teamMember}
        // setTeamMember={setTeamMember}
        // membersList={membersList}
        // setMembersList={setMembersList}
      />
      <div className='team-members'>
        <h1>List of members</h1>
        {membersList && membersList.map((member, index) => {
          return (
            <Member 
              key={index}
              member={member}
              editMember={editMember}
            />
          )
        })}
      </div>
    </div>         
  );
}

export default App;
