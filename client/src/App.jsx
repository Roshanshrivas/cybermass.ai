import React, { useEffect } from 'react'
import Home from './pages/Home'
import { Route, Routes } from 'react-router-dom'
import Login from './pages/Login'
import Signup from './pages/Signup'
import AiAcademy from './pages/AiAcademy'
import BlogPost from './components/PageComponents/AIAcademy/BlogPost'
import BlogDetail from './components/PageComponents/AIAcademy/BlogDetail'
import AiSolutions from './pages/AiSolutions'
import Contact from './pages/Contact'
import AITools from './pages/AITools'
import ForgotPassword from './pages/ForgotPassword'
import VerifyOtp from './pages/VerifyOtp'
import ProtectedRoute from './components/core/ProtectedRoute'
import SubscriptionPlan from './pages/SubscriptionPlan'
import Error from './pages/Error'

const App = () => {


  return (
    <div>
        <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/login' element={ <Login />} />
            <Route path='/signup' element={<Signup />} />
            <Route path='/aiacademy' element={<AiAcademy />} />
            <Route path='/blog' element={<BlogPost />} />
            <Route path='/blog/:id' element={<BlogDetail />} />
            <Route path='/aisolutions' element={<AiSolutions />} />
            <Route path='/contact' element={<Contact />} />
            <Route path='/aitools' element={<ProtectedRoute><AITools /></ProtectedRoute>} />
            <Route path='/forgot-password' element={<ForgotPassword />} />
            <Route path='/verify' element={<VerifyOtp />} />
            <Route path='/subscription-plans' element={<SubscriptionPlan />} />
            <Route path="*" element={<Error />} />
            
        </Routes>

    </div> 
  )
}

export default App




