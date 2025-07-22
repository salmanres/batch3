import React, { Fragment } from 'react'

function SliderPage() {
    return (
        <Fragment>
            <div id="carouselExampleAutoplaying" className="carousel slide" data-bs-ride="carousel">
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <img src="https://cache.marriott.com/content/dam/marriott-renditions/DELDM/deldm-lobby-7038-hor-pano.jpg?output-quality=70&interpolation=progressive-bilinear&downsize=1600px:*" className="d-block w-100" alt="..." />
                    </div>
                    <div className="carousel-item">
                        <img src="https://cache.marriott.com/content/dam/marriott-renditions/DELDM/deldm-lobby-7038-hor-pano.jpg?output-quality=70&interpolation=progressive-bilinear&downsize=1600px:*" className="d-block w-100" alt="..." />
                    </div>
                    <div className="carousel-item">
                        <img src="https://cache.marriott.com/content/dam/marriott-renditions/DELDM/deldm-lobby-7038-hor-pano.jpg?output-quality=70&interpolation=progressive-bilinear&downsize=1600px:*" className="d-block w-100" alt="..." />
                    </div>
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>
        </Fragment>
    )
}

export default SliderPage