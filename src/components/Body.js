import React from 'react';

function Body({ children }) {
  return (
    <main>
        <p>Основний контент сторінки</p>
      {children}
    </main>
  );
}

export default Body;
