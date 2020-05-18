import React from 'react';

import tempData from './TempPeople.json';
import PersonTile from './PersonTile';

function renderPeople() {
  const output = [];
  // eslint-disable-next-line array-callback-return
  tempData.map((data) => {
    output.push(
      <PersonTile name={data.name} role={data.role} photo={data.photo} />
    );
  });
  return output;
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
