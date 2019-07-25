import React, { useState } from 'react';
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
  role: '',
  id: null
}

function App() {

  const [member, setMember] = useState(emptyForm);
  const [membersList, setMembersList] = useState(data);
  const [isEditing, setIsEditing] = useState(false);
  // console.log(membersList);

  const handleChange = event => {
    setMember({ ...member, [event.target.name]: event.target.value });
    // setMember( [...membersList, member])
    console.log('rossle set', member);
  }

  const handleSubmit = memberId => {
    // console.log('member as newMember', memberId);
    console.log(isEditing);
    if (isEditing) {
      console.log('membersList', membersList);
      const updatedList = membersList.map(item => {
        console.log('item.id', item.id)
        console.log('memberId.id', memberId);
        if (item.id === memberId) {
          setIsEditing(false);
          return member;
        } else {
          return item;
        }
        // console.log('item in handleSubmit isEditing', item);
      })
      console.log('updatedList', updatedList);
      setMembersList(updatedList)
    } else {
      setMembersList([ ...membersList, {...member, id: membersList.length}])
    }
    setMember(emptyForm)
  }

  const [memberToEdit, setMemberToEdit] = useState();
  const editMember = member => {
    setMemberToEdit(member)
    setIsEditing(true)
    setMember(member)
    console.log('this wants to be edited', member)
  }

  return (
    <div className="App">
      <HeaderStyle>Sign up to be part of the team!</HeaderStyle>
      <Form 
        handleChange={handleChange}
        handleSubmit={handleSubmit}
        member={member}
        isEditing={isEditing}
        // setMember={setMember}
        // membersList={membersList}
        // setMembersList={setMembersList}
      />
      <div className='team-members'>
        <h1>List of members</h1>
        {membersList && membersList.map((member, index) => {
          return (
            <Member 
              key={index}
              id={index}
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
