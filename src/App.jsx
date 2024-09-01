// import { BrowserRouter,Routes,Route } from "react-router-dom"
// import Layout from "./Layout"
// import Home from "./pages/Home"
// import Insert from "./pages/Insert"
// import Display from "./pages/Display"
// import Search from "./pages/Search"
// import Update from "./pages/Update"
// import Contact from "./pages/Contact"
// const App=()=>{
//   return(
//     <>
//     <BrowserRouter>
//       <Routes>
//       <Route path="/" element={<Layout/>}>
//       <Route index element={<Home/>}/>
//       <Route path="home" element={<Home/>}/>
//       <Route path="insert" element={<Insert/>}/>
//       <Route path="display" element={<Display/>}/>
//       <Route path="search" element={<Search/>}/>
//       <Route path="update" element={<Update/>}/>
//       <Route path="contact" element={<Contact/>}/>
//       </Route>
//       </Routes>
//     </BrowserRouter>
//     </>
//   )
// }
// export default App;


// -------------------------------graph-------------------------------


// import React from 'react';
// // import graph from './Graph'; // Adjust the import path as needed
// import Graph from './graph';
// const App = () => {
//   return (
//     <div>
//       <h1>My React App</h1>
//       <Graph />
//     </div>
//   );
// };

// export default App;

// -------------------------------------------------------------------------


// src/App.js
import React from 'react';
import PieChartComponent from './graph';

const App = () => (
  <div>
    <h1>Pie Chart Example</h1>
    <PieChartComponent />
  </div>
);

export default App;

