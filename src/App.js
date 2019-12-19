import React, { useState } from 'react';
import TeamForm from './teamForm';
import TeamList from './teamList';
import './App.css';


function App() {

  const [savedMembers, setSavedMembers] = useState([{firstName: '', email: '', role: ''}])

  const saveNewMember = newMember => {
    setSavedMembers([...savedMembers, newMember])
  }

  const clearTeam = () => {
    setSavedMembers([{}])
  }

  return (
    <div className="App">
      <TeamForm addNewMember={saveNewMember} clearList={clearTeam}/>
      <TeamList displayTeam={savedMembers} />
    </div>
  );
}

export default App;
