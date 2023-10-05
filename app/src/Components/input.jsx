import React from 'react';

function Input({ label, name, type, placeholder }) {
  return (
    <div>
      <label>
        {label}
        <input
          name={name}
          type={type}
          placeholder={placeholder}
        />
      </label>
    </div>
  );
}

export default Input;
