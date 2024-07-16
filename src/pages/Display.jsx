// import { useEffect, useState } from "react";
// import Table from 'react-bootstrap/Table';
// import axios from "axios";

// const Display=()=>{

//   const [mydata,setMydata]=useState([]);

//   const loadData=()=>{
//     let url='http://localhost:3000/student'
//     axios.get(url).then((res)=>{
//       setMydata(res.data)
//     })
//   }
//   useEffect(()=>{
//     loadData();
//   },[]);

//   const ans=mydata.map((key)=>{
//     return(
//       <>
//       <tr>
//         <td>{key.rollno}</td>
//         <td>{key.name}</td>
//         <td>{key.city}</td>
//         <td>{key.fees}</td>

//       </tr>
//       </>
//     )
//   })
//   return(
//     <>
//     <h1>This is display page</h1>
//     <Table striped bordered hover>
//       <thead>
//         <tr>
//           <th>Roll No</th>
//           <th> Name</th>
//           <th>City</th>
//           <th>Fees</th>
//         </tr>
//       </thead>
//       <tbody>
//         {ans}
//         </tbody>
//       </Table>
//     </>
//   )
// }
// export default Display;




import { useEffect} from "react";
import { useState } from "react";
import axios from "axios";
import Table from 'react-bootstrap/Table';
const Display=()=>{
  const[mydata,setMydata]=useState([]);

  const loadData=()=>{
    let url='http://localhost:3000/student';
    axios.get(url).then((res)=>{
      setMydata(res.data)
    })
  }
   useEffect(()=>{
      loadData();
    },[]);
  
  const ans=mydata.map((key)=>{
    return(
      <>
      <tr>
        <td>{key.rollno}</td>
        <td>{key.name}</td>
        <td>{key.city}</td>
        <td>{key.fees}</td>

      </tr>
      </>
    )
  })
  return(
    <>
     <Table striped bordered hover>
      <thead>
        <tr>
          <th>#</th>
          <th>First Name</th>
          <th>Last Name</th>
          <th>Username</th>
        </tr>
      </thead>
      <tbody>
        {ans}
      </tbody>
      </Table>
    </>
  )
}
export default Display;