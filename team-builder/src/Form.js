import React from 'react';

// Form function

export default function Form(props) {
  const [teamMember, setTeamMember] = props;

  console.log('teamMember in Form', teamMember)

  const handleChange = (event) => {
    setTeamMember({ ...teamMember, [event.target.name]: event.target.value });
    console.log('role set', teamMember);
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('role', teamMember);
  }
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

        <button>Submit!</button>
      </fieldset>
    </form>
  )
}