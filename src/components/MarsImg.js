import React from 'react'

export const MarsImg = (data) => {
    return (
        <div className="col-sm-3 col-md-3 col-lg-3 mt-3 mb-3">
            <img style={{ width:"50%"}} src={ data.data.img_src } />
        </div>
    )
}
