// import React from 'react'
// import loginImage from '../assets/group-of-dogs.jpg'
// import { Link } from 'react-router-dom';




// function Auth(register) {
//   console.log(register);

  
//   return (
//     <div className='p-5 mx-5'>
//         <div className="row row border border-1 shadowntext-light m-2 rounded p-5">
//           <div className="col-6">
//             <img src={loginImage} width={'100%'} alt="" />
//           </div>

//           <div className="col-6">
//             <h4>Sign {register ? "Up" : "In"}</h4>

//             <form>
//               {
//                 register &&
//                 <input type="text" className='form-control mb-3' placeholder='Username' />
//               }
//               <input type="text" className='form-control mb-3' placeholder='Email' />
//               <input type="password" className='form-control mb-3' placeholder='Password' />
//             </form>
//             {
//               register ? 

//               <div><button className='btn btn-outline-info'>Sign Up</button>
//               <p>Already Registered? <Link to={'./login'}>Login Here... </Link></p>
//               </div>
              

//               :
//               <button className='btn btn-outline-info'>Sign In</button>
//             }

//           </div>
//         </div>
//     </div>
//   )
// }

// export default Auth