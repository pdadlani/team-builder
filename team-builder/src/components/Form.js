import React from 'react';

// Form function

export default function Form(props) {
  // const {handleChange, handleSubmit, member, setMember, membersList, setMembersList} = props;
  const { handleChange, handleSubmit, member, isEditing} = props;

  const myOnSubmit = (event) => {
    // const newMember = {...member, ...event.target}
    event.preventDefault();
    console.log('event', event);
    handleSubmit(member.id)
  }

  return (
    <form onSubmit={ (formData) => myOnSubmit(formData)}>
      <fieldset>
        <legend>Sign-up</legend>
        <div className='name'>
          <label>
            Name:
            <input
              type='text'
              name='name'
              placeholder='Name'
              value={member.name}
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
              value={member.email} 
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
              value={member.role} 
              onChange={handleChange}
            />
          </label>
        </div>
        <button>{isEditing ? 'Edit Member!' : 'Add Member!'}</button>
      </fieldset>
    </form>
  )
}