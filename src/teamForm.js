import React, { useState } from 'react';

const TeamForm = (props) => {
  
  const [teamMember, setTeamMember] = useState({firstName: '', email: '', role: ''})

  const onInputChange = e => {
    setTeamMember({...teamMember, [e.target.name]: e.target.value})
  }
  //[what the name attr was on the JSX input]: the input value typed by the user

  const submission = (e) => {
    e.preventDefault();
    const newMemberEntry = {
      ...teamMember,          //means "whatever/all properties teamMember had"
      id: Date.now()          // and this new one
    };
    props.addNewMember(newMemberEntry)
  }

  return(
    <form onSubmit={submission}>
      <label>
        Name:
        <input 
          name='firstName'
          onChange={onInputChange}
          type='text'
        />
      </label>

      <label>
        Email:
        <input 
          name='email'
          onChange={onInputChange}
          type='text'
        />
      </label>

      <label>
        Role:
        <input 
          name='role' //name attr is a property of this JSX object, it is what is being referenced in the properties in state
          onChange={onInputChange}
          type='text'
        />
      </label>

      <button>Submit</button>

    </form>
  )

}

export default TeamForm;
