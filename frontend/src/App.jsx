import { Navigate, Route, Routes } from "react-router-dom";
import "./App.css";
import Login from "./pages/login/Login";
import SignUp from "./pages/signup/SignUp";
import { Toaster } from "react-hot-toast";
import { useAuthContext } from "./context/AuthContext";
import Page1 from "./pages/Page1/Page1";
import Page2 from "./pages/Page2/Page2";

function App() {
	const { authUser } = useAuthContext();
	return (
		<div className='p-4 h-screen flex items-center justify-center'>
			<Routes>
				<Route path='/' element={authUser ? <Page1 /> : <Navigate to={"/signup"} />} />
				<Route path='/login' element={authUser ? <Navigate to='/' /> : <Login />} />
				<Route path='/signup' element={authUser ? <Navigate to='/' /> : <SignUp />} />
				<Route path = '/submissions' element={authUser?  <Page2 /> : <Navigate to='/' />} />
			</Routes>
			<Toaster />
		</div>
	);
}

export default App;
