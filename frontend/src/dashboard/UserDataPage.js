import React, { Fragment, useEffect, useState } from "react";
import axios from "axios";
import { ToastContainer, toast } from 'react-toastify';

function UserDataPage() {

    const [data, setdata] = useState();
    const [loading, setLoading] = useState(false);

    const hadlegetdata = async () => {
        try {
            const response = await axios.get('http://localhost:3500/alluserdata');
            console.log(response.data);
            setdata(response.data);
            setLoading(!loading);
        } catch (e) {
            console.log(e);
        };
    };

    const handledelete = async (id) => {
        try {
            console.log(id);
            const response = await axios.delete(`http://localhost:3500/deleteuser/${id}`);
            toast.success(response.data.message);
        } catch (e) {
            console.log(e);
        };
    };

    useEffect(() => {
        hadlegetdata();
    }, [loading]);

    return (
        <Fragment>
            <table className="table table-striped table-hover w-100">
                <thead className="w-100">
                    <tr className="w-100">
                        <td>id</td>
                        <td>username</td>
                        <td>email</td>
                        <td>mobile</td>
                        <td>password</td>
                        <td>actions</td>
                    </tr>
                </thead>
                <tbody>
                    {data && data.map((data) => (
                        <tr>
                            <td>{data._id}</td>
                            <td>{data.name}</td>
                            <td>{data.email}</td>
                            <td>{data.mobile}</td>
                            <td>{data.password}</td>
                            <td><button className="btn btn-warning btn-sm mx-2">edit</button>
                                <button className="btn btn-warning btn-sm" onClick={() => handledelete(data._id)}>delete</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
            <ToastContainer />
        </Fragment>
    )
};

export default UserDataPage;