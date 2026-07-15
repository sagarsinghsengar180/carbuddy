// import React from 'react'

import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { Link, useNavigate, useParams } from "react-router-dom"

import AdminSidebar from "../../../Components/Admin/AdminSidebar"

import ImageValidator from "../../../FormValidator/ImageValidator"
import TextValidator from "../../../FormValidator/TextValidator"

import { updateBrand, getBrand } from "../../../Redux/ActionCreators/BrandActionCreators"

export default function AdminUpdateBrandPage() {
    let {id} = useParams()

    let [data, setData] = useState({
        name: '',
        // keep the selected file object here (multipart upload will use it)
        pic: '',
        status: true
    })
    let [errorMessage, setErrorMessage] = useState({
        name: '',
        pic: ''
    })

    let [show, setShow] = useState(false)
    let BrandStateData = useSelector(state => state.BrandStateData)
    let dispatch = useDispatch()
    let navigate = useNavigate()

    function getInputData(e) {
        let name = e.target.name
    let value = name === "pic" ? "brand/" + e.target.files[0].name : e.target.value

        // file input: store the selected File object
        // let value = name === 'pic'
        //     ? (e.target.files?.length ? e.target.files[0] : null)
        //     : e.target.value

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
            let item = BrandStateData.find(x => x.id !== id && x.name?.toLocaleLowerCase() === data.name?.toLocaleLowerCase())
            if (item) {
                setShow(true)
                setErrorMessage({ ...errorMessage, name: "Brand with name is already exist" })

                return
            }
            dispatch(updateBrand({ ...data }))

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
        if(BrandStateData.length) {
            let item = BrandStateData.find(x=> x.id===id)
            if(item)
                setData ({...data, ...item})
            else
                navigate("/admin/brand")
        }
    }, [BrandStateData.length ])


    return (

        <>
            <div className="container-fluid" >
                <div className="row" >
                    <div className="col-md-3"><AdminSidebar /></div>
                    <div className="col-md-9">
                        <h5 className='bg-primary text-light text-center'> Update Brand
                            <Link to="/admin/brand/">
                                <i className="bi bi-arrow-left text-light float-end"></i>
                            </Link>
                        </h5>
                        <form onSubmit={postData}>
                            <div className="row">
                                <div className="col-12 mb-3">
                                    <label >Name*</label>
                                    <input type='text' name='name' value={data.name} onChange={getInputData} placeholder='Brand name' className={`form-control ${show && errorMessage.name ? 'border-danger' : "border-dark"}`} />
                                    {show && errorMessage.name ? <p className='text-danger text-capitalize'>{errorMessage.name}</p> : null}
                                </div>
                                <div className="col-md-6 mb-3">
                                    <label >Pic*</label>
                                    <input type='file' name='pic' onChange={getInputData} placeholder='upload file' className={`form-control ${show && errorMessage.pic ? 'border-danger' : "border-dark"}`} />
                                    {show && errorMessage.pic ? <p className='text-danger text-capitalize'>{errorMessage.pic}</p> : null}
                                </div>
                                <div className="col-12 md-6 mb-3">
                                    <label >Status*</label>
                                    <select name="status" value={data.status ? "1" : "0"} className="form-select border-dark" onChange={getInputData}>
                                        <option value='1'>Active</option>
                                        <option value='0'>inActive</option>

                                    </select>

                                </div>


                                <div className="col-12 mb-3">
                                    <button type='submit' className="btn btn-primary w-100 ">Update</button>

                                </div>

                            </div>
                        </form>

                    </div>
                </div>
            </div>
        </>
    )
}





