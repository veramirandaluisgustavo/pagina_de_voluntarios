function Login() {
    
    return (
        <>
    <div className="w-full max-w-xs m-auto">
      {/* {error &&  <p>{error}</p>} */}
      
      <form
       
        className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"
      >
      <div className="mb-4">

      <label htmlFor='email' className="block text-gray-700 text-sm font-bold mb-2">Email</label>
      <input type='email' name='email' placeholder='ejemplo@gmail.com' className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"/>

      </div>

      <div className="mb-4">
      <label htmlFor='password' className="block text-gray-700 text-sm font-bold mb-2">Password</label>
      <input type='password' name='password' id='password'  placeholder='******'  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"/>
      </div>

      <div className='flex items-center justify-between'> 
        <button type='submit'             className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
        >Sign in</button>
        <a href='#!' className="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800" >Cambiar contrasena</a>
      </div>

    </form>
    <button   className="bg-slate-50 hover:bg-slate-200 text-black  shadow rounded border-2 border-gray-300 py-2 px-4 w-full">Google Login</button>
    <p className="my-4 text-sm flex justify-between px-3">
        ¿No tienes una cuenta?
        
      </p>
    </div></>
    )
}

export default Login;