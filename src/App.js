import React from 'react';
import "./App.css";
import Button from "./components/Button";

function App() {
  const handleClick = () => {
    alert('Кнопка була натиснута!');
  };

  return (
    <div class="header-div">
      <header>
        <h1>Вітаю вас на своєму сайті!</h1>
      </header>
      <main>
        <p>Це приклад самої простої сторінки на React</p>
        <button  type="submit" className="my-button">Нажми на мене</button>
        <Button label="Нажми мене" onClick={handleClick}/>
      </main>
    </div>
  );
}

export default App;
