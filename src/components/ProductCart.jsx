import React, { useState } from 'react';
import './ProductCart.css';
import Cart1 from "../images/product-1.jpg";

const ProductCart = () => {
  const [cartItems, setCartItems] = useState([
    { id: 1, name: 'Capsicum', price: 10.99, quantity: 2 },
    { id: 2, name: 'Onions', price: 15.49, quantity: 1 },
    { id: 3, name: 'Tomato', price: 7.79, quantity: 3 },
    // Add more products as needed
  ]);

  const calculateTotal = () => {
    return cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
  };

  return (
    <div>
      <nav style={{ backgroundColor: 'green', padding: '5px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', color: 'white' }}>
        <h3>Product Image</h3>
        <h3>Product Name</h3>
        <h3>Price</h3>
        <h3>Quantity</h3>
        <h3>Total</h3>
      </nav>
      <table style={{ borderCollapse: 'collapse', width: '100%' }}>
        <tbody>
          {cartItems.map((item) => (
            <tr key={item.id} style={{ borderBottom: '1px solid #ccc' }}>
              <td style={{ padding: '10px' }}>
                {/* Add product image here */}
                <img src={Cart1} alt="Product" style={{ width: '80px', height: '80px', objectFit: 'cover', borderRadius: '5px' }} />
                
              </td>
              <td style={{ padding: '10px' }}>{item.name}</td>
              <td style={{ padding: '10px'}}>${item.price.toFixed(2)}</td>
              <td style={{ padding: '10px' }}>{item.quantity}</td>
              <td style={{ padding: '10px' }}>${(item.price * item.quantity).toFixed(2)}</td>
            </tr>
          ))}
          <tr style={{ borderTop: '2px solid #000' }}>
            <td colSpan={4} style={{ padding: '10px', textAlign: 'right' }}>
              Total:
            </td>
            <td style={{ padding: '10px' }}>${calculateTotal().toFixed(2)}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default ProductCart;

