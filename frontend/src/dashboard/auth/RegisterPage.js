import React, { Fragment, useEffect, useRef, useState } from 'react'
import LoginPage from './LoginPage'
import { useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import axios from 'axios';

function RegisterPage() {

    const [data, setData] = useState({});
    const [userdata, setUserData] = useState([]);
    const navigate = useNavigate();
    const inputref = useRef();

    // const { register, handleSubmit, formState: { errors } } = useForm();

    // const focus = () => {
    //     inputref.current.focus();
    // }



    // const onsubmit = (mydata) => {
    //     console.log(mydata);
    // }

    // const register = () => {
    //     if (data.username && data.email && data.password) {
    //         userdata.push(data);
    //         localStorage.setItem('userdata', JSON.stringify(userdata));
    //         alert('registration successful');
    //         navigate('/');
    //     } else {
    //         alert('all fields are required');
    //     }

    // };

    // useEffect(() => {
    //     focus();
    // }, []);

    const getdata = (event) => {
        setData({
            ...data,
            [event.target.name]: event.target.value
        });
        console.log(data);
    };

    const register = async () => {
        try{
            const response = await axios.post('http://localhost:3500/register', data);
            alert(response.data.message);
        }catch(e){
            console.log(e);
        };
    };

    return (
        <Fragment>
            <h3 className='bg-warning p-3 text-center'>REGISTER PAGE</h3>
            <div className='container-fluid'>
                <div className='row justify-content-center'>
                    <div className='col-lg-4'>

                        <input type='text' className='form-control m-2' placeholder='enter username' name='username' onInput={getdata} />
                        <input type='text' className='form-control m-2' placeholder='enter email' name='email' onInput={getdata} />
                        <input type='text' className='form-control m-2' placeholder='enter mobile' name='mobile' onInput={getdata} />
                        <input type='text' className='form-control m-2' placeholder='enter address' name='address' onInput={getdata} />
                        <input type='text' className='form-control m-2' placeholder='enter password' name='password' onInput={getdata} />
                        <button type="button" class="btn btn-warning w-100 m-2" onClick={register}>REGISTER</button>
                    </div>
                </div>
                {/* <div className='row justify-content-center'>
                    <div className='col-lg-4'>
                        <form onSubmit={handleSubmit(onsubmit)}>
                            <input type='text' className='form-control' placeholder='username'{...register('userName', { required: true })} />
                            {errors.userName && <p className='text-danger'>*username is required.</p>}
                            <input type='text' className='form-control m-2' placeholder='enter email' name='email' onInput={getdata} />
                            <input type='text' className='form-control m-2' placeholder='enter mobile' name='mobile' onInput={getdata} />
                            <input type='text' className='form-control m-2' placeholder='enter address' name='address' onInput={getdata} />
                            <input type='text' className='form-control m-2' placeholder='enter password' name='password' onInput={getdata} />
                            <input type='submit' className='btn btn-warning w-100 m-2' />
                        </form>
                    </div>
                </div */}
            </div>
        </Fragment>
    )
}

export default RegisterPage