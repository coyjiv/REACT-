import React from 'react';

const Favourites = (props) => {
    const entries = localStorage.entries();
    console.log(entries);
    return(
    <h2>Favourites</h2>
    )
};

export default Favourites;