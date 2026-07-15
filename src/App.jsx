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

import AdminBrandPage from "./Pages/Admin/Brand/AdminBrandPage";
import AdminCreateBrandPage from "./Pages/Admin/Brand/AdminCreateBrandPage";
import AdminUpdateBrandPage from "./Pages/Admin/Brand/AdminUpdateBrandPage";

import AdminFeaturePage from "./Pages/Admin/Feature/AdminFeaturepage";
import AdminCreateFeaturePage from "./Pages/Admin/Feature/AdminCreateFeaturePage";
import AdminUpdateFeaturePage from "./Pages/Admin/Feature/AdminUpdateFeaturePage";

import AdminServicePage from "./Pages/Admin/Service/AdminServicepage";
import AdminCreateServicePage from "./Pages/Admin/Service/AdminCreateServicePage";
import AdminUpdateServicePage from "./Pages/Admin/Service/AdminUpdateServicePage";
import AdminFaqPage from "./Pages/Admin/Faq/AdminFaqpage";
import AdminCreateFaqPage from "./Pages/Admin/Faq/AdminCreateFaqPage";
import AdminUpdateFaqPage from "./Pages/Admin/Faq/AdminUpdateFaqPage";

import AdminCarPage from "./Pages/Admin/Car/AdminCarpage";
import AdminCreateCarPage from "./Pages/Admin/Car/AdminCreateCarPage";
import AdminUpdateCarPage from "./Pages/Admin/Car/AdminUpdateCarPage";

import AdminSettingPage from "./Pages/Admin/Setting/Adminsettingpage";




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

        <Route path='/admin/brand' element={< AdminBrandPage />} />
        <Route path='/admin/brand/create' element={< AdminCreateBrandPage/>} />
        <Route path='/admin/brand/update/:id' element={< AdminUpdateBrandPage />} />

        <Route path='/admin/feature' element={< AdminFeaturePage />} />
        <Route path='/admin/feature/create' element={< AdminCreateFeaturePage/>} />
        <Route path='/admin/feature/update/:id' element={< AdminUpdateFeaturePage />} />

        <Route path='/admin/service' element={< AdminServicePage />} />
        <Route path='/admin/service/create' element={< AdminCreateServicePage/>} />
        <Route path='/admin/service/update/:id' element={< AdminUpdateServicePage />} />
        
        <Route path='/admin/faq' element={< AdminFaqPage />} />
        <Route path='/admin/faq/create' element={< AdminCreateFaqPage/>} />
        <Route path='/admin/faq/update/:id' element={< AdminUpdateFaqPage />} />

        <Route path='/admin/car' element={< AdminCarPage />} />
        <Route path='/admin/car/create' element={< AdminCreateCarPage/>} />
        <Route path='/admin/car/update/:id' element={< AdminUpdateCarPage />} />

        <Route path='/admin/setting' element={< AdminSettingPage />} />


         <Route path='/*' element={< Errorpage />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  )
}
