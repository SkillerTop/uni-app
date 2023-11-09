import React, { useState } from 'react';

function ProductDetails({ product, onCommentSubmit }) {
    const [comment, setComment] = useState('');

    const handleCommentChange = (e) => {
        setComment(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        onCommentSubmit(product.id, comment);
        setComment('');
    };

    return (
        <div>
            <h2>{product.name}</h2>
            <p>Детальний опис товару...</p>
            <form onSubmit={handleSubmit} acceptCharset="UTF-8">
                <label>
                    Додати коментар:
                    <input type="text" value={comment} onChange={handleCommentChange} />
                </label>
                <button type="submit">Додати коментар</button>
            </form>
        </div>
    );
}

export default ProductDetails;
