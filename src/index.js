import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
//import App from './App';
import reportWebVitals from './reportWebVitals';
//import SignUp from './Pages/SignUp';
import SignIn from './Pages/SignIn';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>

      <Routes>
      <Route index={true}  element={<SignIn />} />
      <Route path="/signup" element={<SignUp/>}/>
      <Route path="/signup" element={<SignUp/>}/>
      <Route path="/DashBoard" element={<Dashboard/>}/>



      </Routes>

    
    </BrowserRouter>
    {/* <App /> */
    }

   
    <SignIn/>

  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
