import React, { Fragment, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function LoginPage() {

  const [data, setdata] = useState();
  const navigate = useNavigate();

  const getdata = (event) => {
    setdata({
      ...data,
      [event.target.name] : event.target.value
    });
    console.log(data);
  };

  const handlelogin = async () => {
    try{
      const response = await axios.post('http://localhost:3500/login', data);
      console.log(response);
      alert(response.data.message);
      if(response.status == 244){
        navigate('/register');
      }
    }catch(err){
      console.log(err);
    };
  };

  return (
    <Fragment>
      <h5 className='bg-warning p-2 text-center'>LOGIN HERE</h5>
      <div className='continer-fluid'>
        <div className='row justify-content-center'>
          <div className='col-lg-4 col-md-5 col-sm-7 col-12'>
            <input type='email' className='form-control mb-2 mt-3' placeholder='enter uername/email' name='email' onInput={getdata} />
            <input type='password' className='form-control mb-2' placeholder='enter password' name='password' onInput={getdata}/>
            <button className='btn btn-warning w-100' onClick={handlelogin}>LOGIN</button>
          </div>
        </div>
      </div>
    </Fragment>
  )
}

export default LoginPage