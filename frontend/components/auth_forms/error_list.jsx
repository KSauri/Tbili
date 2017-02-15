import React from 'react';

export default function({ errors }) {
  if (!errors) return null;
  const errorItems = errors.map((error, idx) =>
    <li  className="form-errors" key={ idx }>{ error }</li> // generate a list of errors
  );
  return (
    <ul>
      { errorItems }
    </ul>
  );
}
