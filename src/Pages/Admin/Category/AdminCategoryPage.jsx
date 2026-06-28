
import AdminSidebar from '../../../Components/Admin/AdminSidebar';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
// import {  } from '../'
import { useEffect, useState } from 'react';
import DataTable from 'datatables.net-dt';
import "datatables.net-dt/css/DataTables.DataTables.min.css";
import { getCategory, deleteCategory } from '../../../Redux/ActionCreators/CategoryActionCreators';


export default function AdminCategoryPage() {
  let [data, setData] = useState([])

  let CategoryStateData = useSelector(state => state.CategoryStateData)
  let dispatch = useDispatch()

  function deleteRecord(id) {
    if (window.confirm("Are you sure you want to delete that record")) {
      dispatch(deleteCategory({ id: id }))
      setData(data.filter(x => x.id !== id))
    }
  }
  useEffect(() => {
    let time = (() => {
      dispatch(getCategory())
      if (CategoryStateData.length) {
        setData(CategoryStateData)
        return setTimeout(() => new DataTable('#myTable'), 500)
      }
    })()
    return () => clearTimeout(time)
  }, [CategoryStateData.length])

  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-md-3">
          <AdminSidebar />
        </div>

        <div className="col-md-9">
          <h5 className="bg-primary text-light text-center p-2">
            Category
            <Link to="/admin/category/create">
              <i className="bi bi-plus text-light float-end"></i>
            </Link>
          </h5>
          <div className="table-responsive">
            <table id='myTable' className='table table-bordered text-dark'>
              <thead>
                <tr>
                  <th>id </th>
                  <th>name</th>
                  <th>pic</th>
                  <th>status</th>
                  <th></th>
                  <th></th>
                </tr>
              </thead>
              <tbody>
                {data.map(item => {
                  
                  return <tr key={item.id}>
                    <td>{item.id}</td>
                    <td>{item.name}</td>
                    
                    <td>
                      <Link to={`${import.meta.env.VITE_APP_IMAGE_SERVER}${item.pic}`} target='_blank'>
                        <img src={`${import.meta.env.VITE_APP_IMAGE_SERVER}${item.pic}`} height={60} width={70} alt=''></img>
                      </Link>
                    </td>
                    <td>{item.status ? "active" : "inactive"}</td>
                    <td><Link to={`/admin/category/update/${item.id}`} className='btn btn-primary'><i className='bi bi-pencil-square'></i></Link></td>
                    <td ><button onClick={() => deleteRecord(item.id)} className='btn btn-daanger'><i className='bi bi-x'></i></button></td>
                  </tr>
                })}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div >
  )
}