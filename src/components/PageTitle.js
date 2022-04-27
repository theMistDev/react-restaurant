import React from 'react';

function PageTitle(props) {
  return (
    <div className='bg-purple-200 py-3 font-bold px-3 text-4xl shadow-md'>
      <p>{props.title}</p>
    </div>
  );
}

export default PageTitle;
