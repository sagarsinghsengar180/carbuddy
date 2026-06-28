import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import Homepage from "./Pages/Homepage";
import Aboutpage from "./Pages/Aboutpage";
import Featurepage from "./Pages/Featurepage";
import Servicepage from "./Pages/Servicepage";
import Carpage from "./Pages/Car";
import Carrdetailspage from "./Pages/Carrdetails";
import Testimonialpage from "./Pages/testimonialpage";
import Contactuspage from "./Pages/Contactuspage";
import Privacypolicypage from "./Pages/Privacypolicypage";
import TermandConpage from "./Pages/TermandConpage";
import Errorpage from "./Pages/Errorpage";
import AdminHomePage from "./Pages/Admin/AdminHomePage";
import AdminCategoryPage from "./Pages/Admin/Category/AdminCategoryPage";
import AdminCreateCategoryPage from "./Pages/Admin/Category/AdminCreateCategoryPage";
import AdminUpdateCategoryPage from "./Pages/Admin/Category/AdminUpdateCategoryPage";




export default function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>

        <Route path='/' element={<Homepage />} />
        <Route path='/about' element={< Aboutpage />} />
        <Route path='/feature' element={< Featurepage />} />
        <Route path='/service' element={< Servicepage />} />
        <Route path='/car' element={< Carpage />} />
        <Route path='/car/:id' element={< Carrdetailspage />} />
        <Route path='/testimonials' element={< Testimonialpage />} />
        <Route path='/contact' element={< Contactuspage />} />
        <Route path='/privacypolicy' element={< Privacypolicypage />} />
        <Route path='/termandCon' element={< TermandConpage />} />

        {/* admin routes */}
        <Route path='/admin' element={< AdminHomePage />} />

        <Route path='/admin/category' element={< AdminCategoryPage />} />
        <Route path='/admin/category/create' element={< AdminCreateCategoryPage />} />
        <Route path='/admin/category/update/:id' element={< AdminUpdateCategoryPage />} />

         <Route path='/*' element={< Errorpage />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  )
}
