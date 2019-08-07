import React from 'react';


const star= ({ className }) => {
    return (
      <svg className={`star ${className}`} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 13 12" width="13" height="13">
        <path
        
          d="M6.5 0l1.46 4.491h4.722l-3.82 2.776 1.459 4.492L6.5 8.983l-3.82 2.776 1.459-4.492-3.82-2.776H5.04L6.5 0z"
        />
      </svg>
    );
  }
  
  export default star;