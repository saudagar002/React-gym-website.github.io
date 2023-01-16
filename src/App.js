import React from 'react'


import Navbar from './Components/Navbar'
import { BrowserRouter as Router,Routes, Route } from 'react-router-dom';
import About from './Components/About';
import Home from './Components/Home';
import Blog from './Components/Blog';
import Pricing from './Components/Pricing';
import Member from './Components/Member';
import Footer from './Components/Footer';
//  import Login from './Components/Login'
// import Login from './Components/login';
//  import Data from './Components/Data';
// import Routs from './Components/Routs';

import Login from './Components/Login';



function App() {


  // const{ productItems} = data;
  return (
    
    <>
    {/* const{produItems} = data; */}

    <Router>
      
      <Navbar/>
      
      {/* const{ productItems} = data; */}
      

       <Routes>


      {/* <Route path='/' elements={<Home/>}/>
      <Route path='/about' elements={<About/>}/> */}
      <Route path='/' element={<Home/>}/>
      <Route path='/about' element={<About/>}/>
      {/* <Route path='/class' element={<Class/>}/> */}
     <Route path='/blog' element={<Blog/>}/>
     {/* <Route path='/pricing' element={<pricing/>}/> */}
     <Route path='/pricing' element={<Pricing/>}/>
     {/* <Route path='/member' element={<Member/>}/> */}
     <Route path='/member' element={<Member/>}/>  
     {/* <Footer/> */}
     <Route path='/footer' element={<Footer/>}/>
     {/* <Route path='/login' element={<Login/>}/> */}
     {/* <Route path='/login' element={<Login/>}/> */}
     <Route path='/Login' element={<Login/>}/>
     

   </Routes>
   
   
      </Router>
      
    
    
    </>
  );


}

export default App;