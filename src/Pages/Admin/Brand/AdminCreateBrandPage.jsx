// import React from 'react'

import { useEffect, useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import { useDispatch, useSelector } from "react-redux"

import ImageValidator from "../../../FormValidator/ImageValidator"

import TextValidator from "../../../FormValidator/TextValidator"
import AdminSidebar from "../../../Components/Admin/AdminSidebar"

import { createBrand, getBrand } from "../../../Redux/ActionCreators/BrandActionCreators"

export default function AdminCreateBrandPage() {

    let [data, setData] = useState({
        name: '',
        pic: '',
        status: true
    })
    let [errorMessage, setErrorMessage] = useState({
        name: 'name field is mendatory',
        pic: 'pic field is mendatory'
    })

    let [show, setShow] = useState(false)
    let BrandStateData = useSelector(state => state.BrandStateData)
    let dispatch = useDispatch()
    let navigate = useNavigate()

    function getInputData(e) {
        let name = e.target.name
    let value = name === "pic" ? "brand/" + e.target.files[0].name : e.target.value

        // file input: store the selected File object
        // let value = name === 'pic' ? 'Brand/'+ e.target.files?.length ? e.target.files[0] 
            // : e.target.value

        setData({
            ...data, [name]: name === 'status' ? (value === '1' ? true : false) : value
        })

        setErrorMessage({ ...errorMessage, [name]: name === 'pic' ? ImageValidator(e) : TextValidator(e) })
    }
    function postData(e) {
        e.preventDefault()
        let error = Object.values(errorMessage).find(x => x !== "")
        if (error)
            setShow(true)
        else {
            let item =BrandStateData.find(x => x.name?.toLocaleLowerCase() === data.name?.toLocaleLowerCase())
            if (item) {
                setShow(true)
                setErrorMessage({ ...errorMessage, name: "Brand with name is already exist" })

                return
            }
            
            dispatch(createBrand({ ...data }))

            // // dispatch multipart form-data because pic is a File
            // let formData = new FormData()
            // formData.append("name", data.name)
            // formData.append("pic", data.pic)
            // formData.append("status", data.status ? 1 : 0)

            // dispatch(createBrand(formData))

            navigate("/admin/brand")
        }
    }
    useEffect(() => {
        dispatch(getBrand())
    }, [BrandStateData.length])


    return (

        <>
            <div className="container-fluid" >
                <div className="row" >
                    <div className="col-md-3"><AdminSidebar /></div>
                    <div className="col-md-9">
                        <h5 className='bg-primary text-light text-center'> Create Brand
                            <Link to="/admin/brand">
                                <i className="bi bi-arrow-left text-light float-end"></i>
                            </Link>
                        </h5>
                        <form onSubmit={postData}>
                            <div className="row">
                                <div className="col-12 mb-3">
                                    <label >Name*</label>
                                    <input type='text' name='name' onChange={getInputData} placeholder='Brand name' className={`form-control ${show && errorMessage.name ? 'border-danger' : "border-dark"}`} />
                                    {show && errorMessage.name ? <p className='text-danger text-capitalize'>{errorMessage.name}</p> : null}
                                </div>
                                <div className="col-md-6 mb-3">
                                    <label >Pic*</label>
                                    <input type='file' name='pic' onChange={getInputData} placeholder='upload file' 
                                    className={`form-control ${show && errorMessage.pic ? 'border-danger' : "border-dark"}`} />
                                    {show && errorMessage.pic ? <p className='text-danger text-capitalize'>{errorMessage.pic}</p> : null}
                                </div>
                                <div className="col-md-6 mb-3">
                                    <label >Status*</label>
                                    <select name="status" className="form-select border-dark" onChange={getInputData}>
                                        <option value='1'>Active</option>
                                        <option value='0'>inActive</option>

                                    </select>

                                </div>


                                <div className="col-12 mb-3">
                                    <button type='submit' className="btn btn-primary w-100 ">create</button>

                                </div>

                            </div>
                        </form>

                    </div>
                </div>
            </div>
        </>
    )
}


