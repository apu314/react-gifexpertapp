import React, { /* useState, useEffect,  */Fragment } from 'react';

import { useFetchGifs } from '../hooks/useFetchGifs';

import { GifGridItem } from './GifGridItem';

export const GifGrid = ({ category }) => {

    const { data: images, loading } = useFetchGifs(category); // custom hook

    return (
        <Fragment>
            <h3 className="animate__animated animate__fadeInDown animate__slow">{ category }</h3>
            { loading && <p>Loading</p> }
            <div className="card-grid">
                {
                    images.map(img => (
                        <GifGridItem
                            key={ img.id }
                            { ...img }
                        />
                    ))
                }
            </div>
        </Fragment>
    )
}
