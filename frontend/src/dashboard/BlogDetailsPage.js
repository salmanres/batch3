import React, { Fragment, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import img1 from './images/tm2.avif'
import axios from 'axios';

function BlogDetailsPage() {

    const [data, setdata] = useState([]);
    
    const {title} = useParams();
    console.log('the title is', title);
    const getdata = async () => {
        try {
            const response = await axios.get('https://jsonplaceholder.typicode.com/posts');
            // const dd = await response.json();
            console.log(response.data);
            setdata(response.data);
        } catch (err) {
            console.log(err);
        };
    };

    useEffect(() => {
        getdata();
    }, []);

    return (
        <Fragment>
            <h1>details</h1>
            <img src={img1}  height={300}/>
            <h5>{data.title}</h5>
            <p>{data.body}</p>
        </Fragment>
    )
}

export default BlogDetailsPage