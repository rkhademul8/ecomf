import React from 'react';
import ImageHelper from './helper/ImageHelper';
import {Redirect} from "react-router-dom"
import { addItemToCart, removeItemFromCart } from './helper/CartHelper';

// ToDO Deal with this later
const isAuthenticated=true


const Card = ({
    product,
    addtoCart=true,
    removeFromCart=false
}) => {
    const cartTitle=product ? product.name : "Hello"
    const cartDescription=product ? product.description : "description"
    const cartPrice=product ? product.price : "Default"
    

const addToCart= () => {
    addItemToCart(product, ()=>{})
    if(isAuthenticated){
        console.log("Added to cart");
    }
    else{
        console.log("Login please!");
    }
};

const getAredirect=redirect =>{
    if (redirect){
        return <Redirect to="/cart" />
    }
}

 const showaddTocart=addToCart=>{
     return(
         addToCart && (
            <button onClick={addToCart}
            className="btn btn-block btn-outline-success mt-2 mb-2"
            > Add to cart

            </button>
         )
     )
 }

 const showRemoveFromCart=removeFromCart=>{
     return (
        removeFromCart &&(
            <button
            onClick={()=>{
                removeItemFromCart(product.id)
                console.log("product remove from cart");
            }}
            className="btn btn-block btn-outline-success mt-2 mb-2"
            >
                Remove from cart
            </button>
        ) 
     )
 }
    return (
        <div className="card text-white bg-dark border border-info">
           <div className="card-header lead">{cartTitle}</div> 
           <div className="card-body">
                <ImageHelper product={product}/> 
                    <p className="lead bg-success font-weight-normal text-wrap">{cartDescription}</p>
                    <p className="btn btn-success rounded btn-sm px-4">${cartPrice}</p>
                    <div className="row">
                        <div className="col-12">
                           {showaddTocart(addToCart)}
                        </div>
                        <div className="col-12">
                           {showRemoveFromCart(removeFromCart)}
                        </div>

                    </div>
                
           </div>
        </div>
    );
};

export default Card;