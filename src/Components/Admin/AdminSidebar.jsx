import { Link } from "react-router-dom";


export default function AdminSidebar() {
  return (
    <>
    <div className="list-group">
  <Link to="/admin" className="mb-1 list-group-item list-group-item-action active" aria-current="true">
    <i className="bi bi-house-door  fs-5"></i><span className="float-end">Home</span>
  </Link>
  <Link to="/admin/category" className="mb-1 list-group-item list-group-item-action active" aria-current="true">
    <i className="bi bi-list fs-5"></i><span className="float-end">Category</span>
    </Link>

    <Link to="/admin/brand" className="mb-1 list-group-item list-group-item-action active" aria-current="true">
    <i className="bi bi-list fs-5"></i><span className="float-end">Brand</span>
  </Link>

  <Link to="/admin/car" className="mb-1 list-group-item list-group-item-action active" aria-current="true">
    <i  className="fas fa-car-alt fs-5"></i><span className="float-end">Car</span>
  </Link>
  
 <Link to="/admin/feature" className="mb-1 list-group-item list-group-item-action active" aria-current="true">
    <i className="bi bi-tags fs-5"></i><span className="float-end">Feature</span>
  </Link>

  <Link to="/admin/service" className="mb-1 list-group-item list-group-item-action active" aria-current="true">
    <i className="bi bi-tags fs-5"></i><span className="float-end">Service</span>
  </Link>


  <Link to="/admin/faq" className="mb-1 list-group-item list-group-item-action active" aria-current="true">
    <i className="bi bi-question-circle fs-5"></i><span className="float-end">Faq</span>
  </Link>
  
  <Link to="/admin/setting" className="mb-1 list-group-item list-group-item-action active" aria-current="true">
    <i className="bi bi-gear fs-5"></i><span className="float-end">Setting</span>
  </Link>

  <Link to="/admin/newsletter" className="mb-1 list-group-item list-group-item-action active" aria-current="true">
    <i className="bi bi-envelope fs-5"></i><span className="float-end">NewsLetter</span>
  </Link>
  
  <Link to="/admin/contact" className="mb-1 list-group-item list-group-item-action active" aria-current="true">
    <i className="bi bi-telephone fs-5"></i><span className="float-end">ContactUS</span>
  </Link>
  
  <Link to="/admin/user" className="mb-1 list-group-item list-group-item-action active" aria-current="true">
    <i className="bi bi-people fs-5"></i><span className="float-end">User</span>
  </Link>

</div>
    </>
  )
}
