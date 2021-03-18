import React, { useEffect, useState } from 'react'
import { MarsImg } from './MarsImg'

export const Mars = () => {
    const [data, setData] = useState([])

    const url = "https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=1000&api_key=LPzAvbxG9rkOPhhk2bZatlZZldfPo9N5ycnb0ZGS"
    useEffect(() => {
        fetch(url)
            .then(res => res.json())
            .then(d => {
                setData(d.photos);
                console.log(data);
            })
    }, [])

    return (
        <div className="container">

        <div className="row">
            {

            data.map( d => (
                <MarsImg key={ d.id } data={ d }/>
            ))

            }
        </div>
        </div>

    )
}
