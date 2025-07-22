import React, { Fragment, useContext } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { decrement, increment, incrementbyvalue, } from './redux/CounterSlice';
import MyContextPage from './MyContextPage';

function ReduxPage() {
    const {value} = useContext(MyContextPage);
    const count = useSelector((state)=>state.counter.value);
    const dispatch = useDispatch();
    const decrementfunctio = () => {
        dispatch(decrement());
    };
  return (
    <Fragment>
        <h1>redux page</h1>
        <h1>counter is : {count}</h1>
        <button onClick={()=>dispatch(increment())}>increment</button>
        <button onClick={decrementfunctio}> decrement</button>
        <button onClick={()=> dispatch( incrementbyvalue(1200))}>increase by value</button>


    </Fragment>
  )
}

export default ReduxPage