
import AdminSidebar from '../../../Components/Admin/AdminSidebar';
import { useDispatch, useSelector } from 'react-redux';
// import {  } from '../'
import { useEffect, useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';


import { createSetting, updateSetting, getSetting, } from '../../../Redux/ActionCreators/SettingActionCreators';


export default function AdminSettingPage() {
  let [data, setData] = useState({
    siteName: '',
    address: '',
    map1: '',
    map2: '',
    email: '',
    phone: '',
    whatsapp: '',
    facebook: '',
    twitter: '',
    instagram: '',
    linkedin: '',
    youtube: '',
  })

  function getInputData(e) {
    let { name, value } = e.target
    setData({ ...data, [name]: value })
  }
  function postData(e) {
    e.preventDefault()
    let item = { ...data }
    if (SettingStateData.length)
      dispatch(updateSetting(item))
    else
      dispatch(createSetting(item))
    toast('your record has been updated!!!')
  }

  let SettingStateData = useSelector(state => state.SettingStateData)
  let dispatch = useDispatch()


  useEffect(() => {
    (() => {
      dispatch(getSetting())
      if (SettingStateData.length) {
        setData({ ...data, ...SettingStateData[0] })

      }
    })()
  }, [SettingStateData.length])

  return 
  <ToastContainer />
  (
    
    <div className="container-fluid">
      <div className="row">
        <div className="col-md-3">
          <AdminSidebar />
        </div>

        <div className="col-md-9">
          <h5 className="bg-primary text-light text-center p-2">
            Setting

          </h5>
          <form action="">
            <div className='col-12 mb-3'>
              <label >Map1</label>
              <input type='url' name='map1' value={data.map1} onChange={getInputData}
                placeholder='Map1' className='form-control border-primary' />
            </div>
            <div className='col-12 mb-3'>
              <label >Map2</label>
              <input type='url' name='map2' value={data.map2} onChange={getInputData}
                placeholder='Map2' className='form-control border-primary' />
            </div>
            <div className='col-12 mb-3'>
              <label >Address</label>
              <textarea name='address' value={data.address} onChange={getInputData}
                placeholder='Address' className='form-control border-primary' />
            </div>
            <div className='col-12 mb-3'>
              <label >Facebook profile url</label>
              <input type='url' name='facebook profile url' value={data.map1} onChange={getInputData}
                placeholder='facebook profile url' className='form-control border-primary' />
            </div>
            <div className='col-md-6 mb-3'>
              <label >SiteName</label>
              <input type='url' name='sitename' value={data.sitename} onChange={getInputData}
                placeholder='StiteName' className='form-control border-primary' />
            </div>
            <div className='col-md-6 mb-3'>
              <label >email</label>
              <input type='url' name='email' value={data.email} onChange={getInputData}
                placeholder='email' className='form-control border-primary' />
            </div>
            <div className='col-md-6 mb-3'>
              <label >phone</label>
              <input type='url' name='phone' value={data.phone} onChange={getInputData}
                placeholder='Phone' className='form-control border-primary' />
            </div>
            <div className='col-md-6 mb-3'>
              <label >Whatsaap Number</label>
              <input type='url' name='whatspp' value={data.whatsapp} onChange={getInputData}
                placeholder='whatsapp' className='form-control border-primary' />
            </div>
            <div className='col-12 mb-3'>
              <label >Instagram Profile Url</label>
              <input type='url' name='instagram' value={data.facebook} onChange={getInputData}
                placeholder='facebook' className='form-control border-primary' />
            </div>
            <div className='col-12 mb-3'>
              <label >LinkedIn</label>
              <input type='url' name='linkedin' value={data.linkedin} onChange={getInputData}
                placeholder='linkedin' className='form-control border-primary' />
            </div>
            <div className='col-12 mb-3'>
              <label >youtube</label>
              <input type='url' name='youtube' value={data.youtube} onChange={getInputData}
                placeholder='youtube' className='form-control border-primary' />
            </div>
<div className="col-12"></div>
<button onClick={}>submit</button>


          </form>


        </div>
      </div>
    </div >
  )
}