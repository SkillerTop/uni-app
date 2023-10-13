import React, { useState } from 'react';
import './App.css';
import Header from './components/Header';
import Body from './components/Body';
import Footer from './components/Footer';
import Menu from './components/Menu';
import ProductItem from './components/ProductItem';

function App() {
  const handleClick = () => {
    alert('Кнопка була натиснута!');
  };
  const [selectedProducts, setSelectedProducts] = useState([]);
  const products = [
    { id: 1, name: 'Товар 1' },
    { id: 2, name: 'Товар 2' },
    { id: 3, name: 'Товар 3' },
  ];

  const handleProductSelect = (productId, selected) => {
    if (selected) {
      setSelectedProducts([...selectedProducts, productId]);
    } else {
      setSelectedProducts(selectedProducts.filter((id) => id !== productId));
    }
  };

  return (
    <div className="header-div">
      <Header />
      <Body>
        <Menu />
        <div>
          {products.map((product) => (
            <ProductItem
              key={product.id}
              product={product}
              onSelect={handleProductSelect}
            />
          ))}
        <button type="submit" className="my-button" onClick={handleClick}>
          Нажми на мене
        </button>
        </div>
      </Body>
      <Footer />
    </div>
  );
}

export default App;
