


import React, { useState } from 'react';


function ShowHide() {
  const [isHidden, setIsHidden] = useState(false);

  const toggleVisibility = () => {
    setIsHidden(!isHidden);
  };

  return (
    <div>
      {!isHidden && <p>Hide Me</p>}
      <button onClick={toggleVisibility}>
        {isHidden ? 'Show' : 'Hide'}
      </button>
    </div>
  );
}

export default ShowHide;