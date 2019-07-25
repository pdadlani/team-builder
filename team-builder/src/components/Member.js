import React from 'react';

const Member = props => {
  const {member, editMember} = props;
  return (
    <div className='team-member'>
      <h2>Name: {member.name}</h2>
      <h4> Email: {member.email}</h4>
      <h4> Role: {member.role}</h4>
      <button onClick={() => editMember(member)} className='edit-button'>Edit</button>
    </div>
  )
}

export default Member;