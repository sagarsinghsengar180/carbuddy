import AdminSidebar from "../../Components/Admin/AdminSidebar";


export default function AdminHomePage() {
  return (
    <div className='container-fluid my-3'>
      <div className="row"> 
        <div className="col-md-3"><AdminSidebar /></div>
        <div className="col-md-9">
          <h5 className="bg-primary p-2 text-light text-center">Admin</h5>
          <table className="table table-bordered text-dark">
            <tbody >
              <tr>
                <th>admin</th>
                <td >sagar singh</td>
              </tr>
              <tr>
                <th>username</th>
                <td >sagarsingh</td>
              </tr>
              <tr>
                <th>phone</th>
                <td >8466797926</td>
              </tr>
              <tr>
                <th>role</th>
                <td >Admin</td>
              </tr>
            </tbody>
          </table>
        </div></div>
    </div>
  )
}
