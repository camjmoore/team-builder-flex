import React from 'react';

const TeamList = (props) => {

  return(
    <div>
      {props.displayTeam.map( entry => {
        return(
          <div className="entry" key={entry.id}>
            <h2>{entry.firstName}</h2>
            <p>{entry.email}</p>
            <p>{entry.role}</p>
          </div>
        )
      })}

    </div>
  );
}

export default TeamList;