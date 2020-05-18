import React from 'react';

import tempData from './TempPeople.json';
import PersonTile from './PersonTile';

function renderPeople() {
  return tempData.map(({ photo, name, role }) => (
    <PersonTile 
      key={photo} 
      name={name} 
      role={role} 
      photo={photo}
    />
  ));
}

export default function People() {
  return (
    <div className="container">
      <div className="row justify-content-center">
        {renderPeople()}
      </div>
    </div>
  );
}
