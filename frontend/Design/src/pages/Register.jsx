import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function RegisterForm() {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: ''
  });
  const [message, setMessage] = useState('');
  const navigate=useNavigate() 

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    
  try {
    const response = await fetch('http://127.0.0.1:8000/auth/register/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(formData)
    });

    const data = await response.json();
     if (response.ok) {
        setMessage('Login successful!');
        navigate('/dashboard'); 
      } else {
        setMessage(data?.errors || 'Invalid credentials');
      }
    }catch {
    setMessage('Server connection failed');
  }


  };
  const nav = useNavigate();
  const go =()=>{
    nav("/dashboard")
  }
  

  return (
    <div className="p-7 h-96  max-w-sm mx-auto rounded-sm mt-36 shadow-sm shadow-black">
      <h1 className="text-xl font-bold mb-4">Register</h1>
      <form onSubmit={handleSubmit} className="space-y-3">
        <input
          type="text"
          placeholder="Username"
          value={formData.username}
          onChange={(e) => setFormData({...formData, username: e.target.value})}
          className="w-full p-2 border rounded"
          required
        />
        <input
          type="email"
          placeholder="Email"
          value={formData.email}
          onChange={(e) => setFormData({...formData, email: e.target.value})}
          className="w-full p-2 border rounded"
          required
        />
        <input
          type="password"
          placeholder="Password"
          value={formData.password}
          onChange={(e) => setFormData({...formData, password: e.target.value})}
          className="w-full p-2 border rounded"
          required
        />
        <button 
          type="submit" 
          className="w-full bg-slate-800 text-white p-2 cursor-pointer rounded hover:bg-blue-500"    
        >
          Register
        </button>
      </form>
      {message && <p className="mt-3 text-center">{message}</p>}
      <div className='flex' >
      <p>Already have an account ?</p><a className='text-blue-800 font-bold cursor-pointer ' onClick={go}>LOGIN</a></div>
    </div>
  );
}