import { Routes, Route } from 'react-router-dom';
import './globals.css';
import SigninForm from './_auth/forms/signinForm';
import SignupForm from './_auth/forms/signupForm';
import { Home } from './_root/pages';
import AuthLayout from './_auth/AuthLayout';
import RootLayout from './_root/RootLayout';
function App() {
  return (
    <main className='flex h-screen'>
         <Routes>
            {/* Public */ }
            <Route element={<AuthLayout />}>
                <Route path="/sign-in" element={<SigninForm />} />
                <Route path="/sign-up" element={<SignupForm />} />
            </Route>
            

            {/* Private */}
            <Route element={<RootLayout />}>
                <Route index element={<Home />} />
            </Route>
            <Route index element={<Home />} />
         </Routes>
    </main>
  )
}

export default App