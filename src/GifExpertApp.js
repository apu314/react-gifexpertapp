import React, { Fragment, useState } from 'react'
import { AddCategory } from './components/AddCategory';
import { GifGrid } from './components/GifGrid';

const GifExpertApp = () => {

    const [categories, setCategories] = useState(['Friends'])

    /* const addCategory = () => {
        // setCategories([...categories, '4']);
        setCategories(cats => [ ...cats, 'cuatro' ]);
    } */

    return (
        <Fragment>
            <h4>Gifs App</h4>
            <AddCategory setCategories={ setCategories } />
            <hr />
            {
                categories.map(category => (
                    <GifGrid
                        key={ category }
                        category={ category }
                    />
                ))
            }
        </Fragment>
    )
}

export default GifExpertApp;