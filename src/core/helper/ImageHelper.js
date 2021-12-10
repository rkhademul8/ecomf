import React from 'react';

const ImageHelper = ({product}) => {
    const imageurl=product ? product.images : `https://scontent.fdac136-1.fna.fbcdn.net/v/t1.6435-9/158149856_1513546792181398_9162302480282835999_n.jpg?_nc_cat=100&ccb=1-5&_nc_sid=09cbfe&_nc_eui2=AeGpetSNDVPSTl_-DbIbQj2l5HjzzGZqxhrkePPMZmrGGqU00U0nGavnBBuccYRy14yr_o9kvpXggkqh2gE7jnsx&_nc_ohc=EC5dah1E1GAAX-BHp_a&_nc_ht=scontent.fdac136-1.fna&oh=0bd5cd1d6beb7d84412089a55d1a3df5&oe=61D4B5D2`
    return (
        <div className="rounder border border-success p-2">
            <img src={imageurl} alt="something" style={{maxWidth:"100%", maxHeight:"100%"}} className="mb-3 rounded" />
              
            
        </div>
    );
};

export default ImageHelper;