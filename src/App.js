import React, { useState } from 'react';
import './App.css';
import Header from './components/Header';
import Body from './components/Body';
import Footer from './components/Footer';
import Menu from './components/Menu';
import ProductItem from './components/ProductItem';
import ProductDetails from './components/ProductDetails';
import useStatus from './hooks/useStatus';
import useConsoleLog from './hooks/useConsoleLog';

function App() {
    const handleClick = () => {
        alert('Кнопка була натиснута!');
    };

    const [selectedProducts, setSelectedProducts] = useState([]);
    const [status, updateStatus] = useStatus('');

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

    const handleCommentSubmit = (productId, comment) => {
        const newStatus = `Коментар до товару ${productId}: ${comment}`;
        updateStatus(newStatus);
        console.log(newStatus);
    };

    useConsoleLog(status);

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
                    {selectedProducts.length === 1 && (
                        <ProductDetails
                            product={products.find((p) => p.id === selectedProducts[0])}
                            onCommentSubmit={handleCommentSubmit}
                        />
                    )}
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
