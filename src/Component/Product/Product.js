import React  from 'react';
import './Product.css'
import lunch from '../fakeData/dataLunch';
import { useState } from 'react';
import Lunch from '../Lunch/Lunch';

const Product = () => {

   const lunchFood = lunch;
   const[lunchs, setLunch] = useState(lunchFood);
    return (
        
        <div className="main">
            
            {
                lunchs.map(lf=><Lunch lunch={lf}></Lunch>)
            }
        
        </div>
    );
};

export default Product;