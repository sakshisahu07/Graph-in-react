// import { useState,useEffect } from "react";
// import axios from "axios";
// import Table from 'react-bootstrap/Table';


// const Update=()=>{
//   const [mydata,setMydata]=useState([])

//   const loadData=()=>{

//     let url="http://localhost:3000/student"
//     axios.get(url).then((res)=>{
//       setMydata(res.data)
//     })
//   }
//   useEffect(()=>{
//     loadData()
//   },[])

//   const mydel=(myid)=>{
//     let url=`http://localhost:3000/student/${myid}`
//     axios.delete(url).then((res)=>{
//       alert("Deleted")
//       loadData()
//     })
//   }

//   const ans=mydata.map((key)=>{
//     return(
//       <>
//       <tr>
//         <td>{key.rollno}</td>
//         <td>{key.name}</td>
//         <td>{key.city}</td>
//         <td>{key.fees}</td>
//         <td><button onClick={()=>{mydel(key.id)}}>Delete</button></td>
//       </tr>
//       </>
//     )
//   })
//     return(
//       <>
//       <h1>Update page</h1>
//       <Table striped bordered hover>
//       <thead>
//         <tr>
//           <th>Roll No</th>
//           <th>Name</th>
//           <th>City</th>
//           <th>Fees</th>
//         </tr>
//       </thead>
//       <tbody>
//         {ans}
//       </tbody>
//       </Table>
//       </>
//     )
//   }
//   export default Update;

import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";
import Table from 'react-bootstrap/Table';
import Img from "../../public/e1.png"
import Imgdel from "../../public/e2.png"

const Update=()=>{
  const [mydata,setMydata]=useState([]);
  const [editData, setEditData]=useState({});

  const loadData=()=>{
    let url="http://localhost:3000/student";
    axios.get(url).then((res)=>{
      setMydata(res.data);
    })
  }
  useEffect(()=>{
    loadData();
  },[])

  const myDel=(myid)=>{
    let url=`http://localhost:3000/student/${myid}`
    axios.delete(url).then(()=>{
      alert("Record successfuly Deleted!!");
      loadData();
    })
  }

  const myEdit=(myid)=>{
    let url=`http://localhost:3000/student/${myid}`;
    axios.get(url).then((res)=>{
      setEditData(res.data);
      console.log(res.data);
    });
  }

  const handleInput=(e)=>{
    let name=e.target.name;
    let value=e.target.value;
    setEditData(values=>({...values, [name]:value}));
  }

  const handleSubmit=()=>{
    let url=`http://localhost:3000/student/${editData.id}`;
    axios.put(url,editData).then(()=>{
      alert("Record Successfully updated!!!");
      loadData();
    })
  }
  const ans=mydata.map((key)=>{
    return(
      <>
      <tr>
        <td>{key.rollno}</td>
        <td>{key.name}</td>
        <td>{key.city}</td>
        <td>{key.fees}</td>
         <td>
          <a href="#">
            <img src={Img} width={60} onClick={()=>{myEdit(key.id)}} />
            </a>

            <a href="#">
            <img src={Imgdel} width={60} onClick={()=>{myDel(key.id)}} />
            </a>

            </td>
      </tr>
      </>
    )
  })
  return(
    <>
    <h1>Update Students Record</h1>
    <Table striped bordered hover>
      <thead>
        <tr>
          <th>sakshi</th>
          <th>Name</th>
          <th>City</th>
          <th>Fees</th>
        </tr>
      </thead>
      <tbody>
        {ans}
      </tbody>
      </Table>
      <br/>
      Edit Rollno<input type="text" name="rollno" value={editData.rollno} onChange={handleInput}></input>
      <br/>
      Edit Name<input type="text" name="name" value={editData.name} onChange={handleInput}></input>
      <br/>
      Edit City<input type="text" name="city" value={editData.city} onChange={handleInput}></input>
      <br/>
      Edit Fees<input type="text" name="fees" value={editData.fees} onChange={handleInput}></input>
      <br/>
      <button onClick={handleSubmit}>Update Save!!</button>
    </>
  )
}
export default Update;


