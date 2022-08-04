import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import ProtectedRoute from './components/ProtectedRoute';
import Login from './containers/Login';
import Register from './containers/Register';
import NoMatch from './containers/NoMatch';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
    <BrowserRouter>
        <Routes>
            <Route path="/" element={
                // <ProtectedRoute>
                <App />
                // </ProtectedRoute>
            } />
            <Route path="login" element={
                <ProtectedRoute loginOnly={false}>
                    <Login />
                </ProtectedRoute>} />
            <Route path="register" element={
                <ProtectedRoute loginOnly={false}>
                    <Register />
                </ProtectedRoute>} />
            <Route path="*" element={<NoMatch />} />
            {/* <Route path="moviedetail" element={
                <ProtectedRoute loginOnly={true}>
                    <MovieDetail />
                </ProtectedRoute>
            } /> */}
        </Routes>
    </BrowserRouter>
    //   <BrowserRouter>
    //     <Routes>
    //       <Route path="/" element={
    //           <App />
    //       } />
    //     </Routes>
    //   </BrowserRouter>
);

reportWebVitals();
