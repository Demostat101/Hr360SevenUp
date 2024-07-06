import React, { useState } from 'react'


const Admin = () => {

  const [CreateUser, setCreateUser] = useState({
    username : '',
    email: '',
    imageUrl : ''
  });

  const {username, email,imageUrl} = CreateUser


  const handleSubmit = (e)=>{
      e.preventDefault();


  }

  const handleChange = (e)=>{

    const {value, name, files} = e.target;
    setCreateUser((prev)=>({
      ...prev, [name]: name === 'imageUrl'? URL.createObjectURL(files[0]):value
    
    
  }))}

  return (
    <div>
      <form action="" onSubmit={handleSubmit}>
        <input type="text" placeholder='username' name='username' value={username} onChange={handleChange}/>

         <br /> <br />

        <input type="email" placeholder='your email' name='email' value={email} onChange={handleChange} /> 

        <br /> <br />

        <input type="file" name='imageUrl' onChange={handleChange}/> 

        {imageUrl && <img src={imageUrl} alt='images'/>}

       


        <br /> <br />

        <button>Create user</button>
      </form>
    </div>
  )
  
}

export default Admin
