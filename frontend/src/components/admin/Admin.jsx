import React, { useState } from 'react'
import './Admin.css'
import { useAuth } from '../../context/ContextProvider'
const Admin = () => {
    const [credentials, setCredentials] = useState({ username: '', password: '' });
    const { login, loading } = useAuth();
    const handleChange = (e) => {
        const { name, value } = e.target;
        setCredentials({ ...credentials, [name]: value });
      };
    console.log(credentials)
      const handleSubmit = (e) => {
        e.preventDefault();
        login(credentials);
      };
  return (
    <div className='admin-container'>
        <div className="content">
            <div className="form-container">
                <h3>Welcome Admin</h3>
                <div className="input-box">
                    <input type="email" name="username" placeholder='exp@gmail.com' id=""onChange={handleChange} />
                </div>
                <div className="input-box">
                    <input type="password" name="password" placeholder='Password' id="" onChange={handleChange}/>
                </div>
                <div className="input-box">
                    <button type='submit'onClick={handleSubmit}>Submit</button>
                </div>
            </div>
            
            
        </div> 
      
    </div>
  )
}

export default Admin
