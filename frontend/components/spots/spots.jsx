import React, { Component } from 'react';
import Rheostat from 'rheostat';


const Spots = () => {
  return (<div>
    <Rheostat className="rheostat"
      min={1}
      max={100}
      values={[1, 100]}
      />
    </div>);
};

export default Spots;
