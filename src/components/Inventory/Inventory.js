import React from 'react';
import { Button } from 'react-bootstrap';
import fakeData from '../../fakeData'
const Inventory = () => {
     const handleAddProduct = () => {
         const product = {};
         fetch('http://localhost:4000/addPost', {
             method: 'POST',
             headers: { 'Content-Type': 'application/json'},
             body: JSON.stringify(product)
         })
     }
    return (
        <div>
            <form action="">
                <p><span>Name : </span><input type="text"/></p>
                <p><span>Price : </span><input type="text"/></p>
                <p><span>Quantity : </span><input type="text"/></p>
                <p><span>Image</span><input type="file"/></p>
            <Button onClick={handleAddProduct}>Add Product</Button>
            </form>
        </div>
    );
};

export default Inventory;