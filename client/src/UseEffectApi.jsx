import React, { useEffect, useState } from 'react'

const UseEffectApi = () => {

    const [users, setUsers] = useState([]);


    const getUsers = async () => {
        const response = await fetch('https://api.github.com/users');
        setUsers(await response.json());
        // console.log(data)
    }

    useEffect(() => {
        getUsers();
    }, [])



    return (
        <>
            <h2>Github Users</h2>
            <div className="container-fluid md-5">
                <div className="row text-center">
                    {
                        users.map((i) => {
                            return (
                                <div>

                                    <div className="col-10 col-md-4 mt-5">
                                        <div className="card p-2">
                                            <div className="d-flex aligh-items-center">
                                                <div className="image">
                                                    <img src={i.avatar_url} alt="img" className='rounded' width="155" />
                                                </div>
                                                <div className="ml-3 w-100">
                                                    <h4 className='mb-0 mt-0 textLeft' >{i.login}</h4><span className="textLeft">{i.url}</span>

                                                </div>
                                                <div className="p-2 mt-2 bg-primary d-flex justify-content-between rounded text-white stats ">
                                                    <div className="d-flex flex-column"><span className='articles'>Articles</span><span className='number1'>07</span></div>
                                                    <div className="d-flex flex-column"><span className='followers'>followers</span><span className='number1'>{i.followers_url}</span></div>
                                                    <div className="d-flex flex-column"><span className='rating'>rating</span><span className='number1'>07</span></div>

                                                </div>

                                            </div>

                                        </div>
                                    </div>
                                </div>

                            )
                        })

                    }
                </div>


            </div>
        </>
    )
}

export default UseEffectApi