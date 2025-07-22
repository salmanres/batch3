import React, { Fragment } from 'react'
import tm2 from './images/tm2.avif';

function MidSection() {
    return (
        <Fragment>
            <div className='cotnainer-fluid'>
                <div className='row'>
                    <div className='col-lg-12 bg-warning my-3  p-3 text-center'>
                        <h4>SELECT ROOMS</h4>
                    </div>
                </div>
                <div className='row'>
                    <div className='col-lg-3 col-md-6 col-sm-12 col-12'>
                        <div className="card">
                            <img src={tm2} className="card-img-top" alt="..." />
                            <div className="card-body">
                                <h5 className="card-title">Guest Room</h5>
                                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card’s content.</p>
                                <a href="#" className="btn btn-primary w-100">BOOK NOW</a>
                            </div>
                        </div>
                    </div>
                    <div className='col-lg-3 col-md-6 col-sm-12 col-12'>
                        <div className="card">
                            <img src="https://cache.marriott.com/content/dam/marriott-renditions/DELDM/deldm-twin-guest-6106-hor-clsc.jpg?output-quality=70&interpolation=progressive-bilinear&downsize=1140px:*" className="card-img-top" alt="..." />
                            <div className="card-body">
                                <h5 className="card-title">Guest Room</h5>
                                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card’s content.</p>
                                <a href="#" className="btn btn-primary w-100">BOOK NOW</a>
                            </div>
                        </div>
                    </div>
                    <div className='col-lg-3 col-md-6 col-sm-12 col-12'>
                        <div className="card">
                            <img src="https://cache.marriott.com/content/dam/marriott-renditions/DELDM/deldm-twin-guest-6106-hor-clsc.jpg?output-quality=70&interpolation=progressive-bilinear&downsize=1140px:*" className="card-img-top" alt="..." />
                            <div className="card-body">
                                <h5 className="card-title">Guest Room</h5>
                                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card’s content.</p>
                                <a href="#" className="btn btn-primary w-100">BOOK NOW</a>
                            </div>
                        </div>
                    </div>
                    <div className='col-lg-3 col-md-6 col-sm-12 col-12'>
                        <div className="card">
                            <img src="https://cache.marriott.com/content/dam/marriott-renditions/DELDM/deldm-twin-guest-6106-hor-clsc.jpg?output-quality=70&interpolation=progressive-bilinear&downsize=1140px:*" className="card-img-top" alt="..." />
                            <div className="card-body">
                                <h5 className="card-title">Guest Room</h5>
                                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card’s content.</p>
                                <a href="#" className="btn btn-primary w-100">BOOK NOW</a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='row'>
                    <div className='col-lg-6'>
                        <div className="card text-bg-dark">
                            <img src="https://cache.marriott.com/is/image/marriotts7prod/stock-family-sandy-beach-1073304:Pano-Hor" className="card-img" alt="..." />
                            <div className="card-img-overlay">
                                <h5 className="card-title">Card title</h5>
                                <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                                <p className="card-text"><small>Last updated 3 mins ago</small></p>
                            </div>
                        </div>
                    </div>
                    <div className='col-lg-6'>
                         <div className="card text-bg-dark">
                            <img src="tm1.avif" className="card-img" alt="..." />
                            <div className="card-img-overlay">
                                <h5 className="card-title">Card title</h5>
                                <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                                <p className="card-text"><small>Last updated 3 mins ago</small></p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Fragment>
    )
}

export default MidSection