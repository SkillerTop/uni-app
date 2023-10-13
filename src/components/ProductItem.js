import React, { useState } from 'react';

function ProductItem({ product, onSelect }) {
  const [isChecked, setIsChecked] = useState(false);

  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
    onSelect(product.id, !isChecked);
  };

  return (
    <div>
      <input
        type="checkbox"
        checked={isChecked}
        onChange={handleCheckboxChange}
      />
      {product.name}
    </div>
  );
}

export default ProductItem;
