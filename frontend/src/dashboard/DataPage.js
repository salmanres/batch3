import React, { Fragment, useState } from 'react'
import rdata from './Data'
import { data } from 'react-router-dom';

function DataPage() {
    console.log(rdata);
    const [rest, setrest] = useState(rdata);

    return (
        <Fragment>
            <h1 className='p-3 text-center bg-warning'>Restaurant Data</h1>
            <div className='container-fluid'>
                <div className='row'>
                    {rest.length > 0 ? rest.map((item) => (
                        <div className='col-lg-3'>
                            <div class="card">
                                <img src={item.image} class="card-img-top" alt="..." />
                                <div class="card-body">
                                    <h5 class="card-title">{item.title}</h5>
                                    <p class="card-text">{ }</p>
                                    <a href="#" class="btn btn-primary">Go somewhere</a>
                                </div>
                            </div>
                        </div>
                    )) : <div class="spinner-border text-center text-warning" role="status">
                        <span class="visually-hidden">Loading...</span>
                    </div>
                    }
                </div>
            </div>
        </Fragment>
    )
}

export default DataPage