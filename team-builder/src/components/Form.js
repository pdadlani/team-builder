import React from 'react';

// Form function

export default function Form(props) {
  // const {handleChange, handleSubmit, teamMember, setTeamMember, membersList, setMembersList} = props;
  const { handleChange, handleSubmit, teamMember} = props;

  // console.log('teamMember in Form', teamMember)

  // const handleChange = (event) => {
  //   setTeamMember({ ...teamMember, [event.target.name]: event.target.value });
  //   console.log('role set', teamMember);
  // }

  // const handleSubmit = (event) => {
  //   event.preventDefault();
  //   console.log('role', teamMember);
  // }
  return (
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
              value={teamMember.name}
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
              value={teamMember.email} 
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
              value={teamMember.role} 
              onChange={handleChange}
            />
          </label>
        </div>
        <button>Add Member!</button>
      </fieldset>
    </form>
  )
}