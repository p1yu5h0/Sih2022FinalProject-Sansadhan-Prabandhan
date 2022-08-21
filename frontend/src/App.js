import { QueryClient, QueryClientProvider } from "react-query";
import { Routes, Route } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import Login from "./pages/Login";
import 'react-toastify/dist/ReactToastify.css';
import SavedItems from "./pages/SavedItems";
import Status from "./pages/Status";
import Signup from "./pages/Signup";
import Resources from "./pages/Resources";
import Resource from "./pages/Resource";
import EditProfile from "./pages/EditProfile";
import Requests from "./pages/Requests";
import Inbox from "./pages/Inbox";
import SendRequest from "./pages/SendRequest";
import RecievedRequest from "./pages/RecievedRequest";
import ProtectedRoute from "./components/ProtectedRoute";
import { ToastContainer } from "react-toastify";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { checkAuth } from "./store/auth/actions";
import ProfileV2 from "./pages/ProfileV2";
import NotFound from "./pages/404";
import RequestStatus from "./pages/Status/RequestStatus";
import StatusV2 from "./pages/Status/StatusV2";
import Contracts from "./pages/Contracts";
import Auth from "./pages/Admin/Auth";



export default function App() {
  const dispatch = useDispatch();
  useEffect(()=>{
    dispatch(checkAuth());
  }, [])
  return (
    <>
      <Routes>
        {/* <Route exact path="/" element={<ProtectedRoute access="private" scope={"institute"} restricted={true} />}><Dashboard /></Route> */}
        <Route exact path="/profile" element={<ProtectedRoute access="private"  scope={"institute"} />} >
        <Route exact path='/profile' element={<ProfileV2 />} /></Route>
        {/* <Route exact path="/profilev2" element={<ProtectedRoute access="private"  scope={"institute"} />} >
        <Route exact path='/profilev2' element={<ProfileV2 />} /></Route> */}
        <Route
          exact
          path="/edit-profile"
          element={
            <ProtectedRoute access="private"  scope={"institute"} />
          }
        >
          <Route exact path='/edit-profile' element={<EditProfile />} />
        </Route>
        <Route
          exact
          path="/"
          element={
            <ProtectedRoute access="private"  scope={"institute"} />
          }
        >
          <Route exact path='/' element={<Dashboard />} />
        </Route>

        <Route
          exact
          path="/status"
          element={
            <ProtectedRoute access="private"  scope={"institute"} />
          }
          
        >
          <Route exact path='/status' element={<StatusV2 />} />
        </Route>
        <Route
          exact
          path="/contracts"
          element={
            <ProtectedRoute access="private"  scope={"institute"} />
          }
          
        >
          <Route exact path='/contracts' element={<Contracts />} />
        </Route>
        <Route
          exact
          path="/status/:id"
          element={
            <ProtectedRoute access="private"  scope={"institute"} />
          }
          
        >
          <Route exact path='/status/:id' element={<RequestStatus />} />
        </Route>
        <Route
          exact
          path="/saved-items"
          element={
            <ProtectedRoute access="private"  scope={"institute"} />
          }
        >
        <Route exact path='/saved-items' element={<SavedItems />} />
        </Route>
        <Route
          exact
          path="/login"
          element={<ProtectedRoute access="public" restricted={true} />}
        >
          <Route exact path='/login' element={<Login />} />
        </Route>
        <Route
          exact
          path="/signup"
          element={<ProtectedRoute access="public" restricted={true} />}
        >
          <Route exact path='/signup' element={<Signup />} />
        </Route>

        <Route
          exact
          path="/resources"
          element={
            <ProtectedRoute access="private"  scope={"institute"} />
          }
        >
          <Route exact path='/resources' element={<Resources />} />
        </Route>
        <Route
          exact
          path="/resource/:id"
          element={
            <ProtectedRoute access="private"  scope={"institute"} />
          }
        >
         <Route exact path='/resource/:id' element={<Resource />} />
        </Route>

        <Route
          exact
          path="/requests"
          element={
            <ProtectedRoute access="private"  scope={"institute"} />
          }
        >
          <Route exact path='/requests' element={<Requests />} />
        </Route>
        <Route
          exact
          path="/inbox"
          element={
            <ProtectedRoute access="private"  scope={"institute"} />
          }
        >
          <Route exact path='/inbox' element={<Inbox />} />
        </Route>
        <Route
          exact
          path="/send-request/:id"
          element={
            <ProtectedRoute access="private"  scope={"institute"} />
          }
        >
          <Route exact path='/send-request/:id' element={<SendRequest />} />
        </Route>
        <Route
          exact
          path="/recieved-request"
          element={
            <ProtectedRoute access="private"  scope={"institute"} />
          }
        >
          <Route exact path='/recieved-request' element={<RecievedRequest />} />
        </Route>

        {/* Extra Routes */}
        <Route exact path="/not-found" element={<NotFound/>}></Route>

        {/* Admin Routes */}
        <Route exact path="/admin/auth" element={<Auth/>}></Route>

      </Routes>
      <ToastContainer position="top-right"/>
      </>
  );
}
