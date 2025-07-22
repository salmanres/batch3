import React, { Fragment, useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import axios from 'axios';

function ApiPage() {


    const [data, setdata] = useState();
    const getdata = async () => {
        try {
            const response = await axios.get('http://localhost:3500/userdata');
            console.log(response);
            setdata(response.data.data);
            console.log(response.data.data);
            // alert(response.data.message);
        } catch (e) {
            console.log(e);
        };
    };

    useEffect(() => {
        getdata();
    }, []);

    return (
        <Fragment>
            <h5 className='bg-warning p-2 text-uppercase text-center'>api page</h5>
            {
                data && data.map((d) => (
                    <div>
                        <h6>roll no : {d.rollno}</h6>
                        <h6>student name : {d.name}</h6>
                        <h6>class : {d.class}</h6>
                        <hr/>
                    </div>
                ))
            }
        </Fragment>
    )
}

export default ApiPage