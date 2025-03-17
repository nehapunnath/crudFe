import React, { useContext } from 'react'
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { addEmployeeApi } from '../Services/allApis';
import { addResponseContext } from '../context/ContextApi';

function Add() {
  const [show, setShow] = useState(false);

  const {addresonse,setAddresponse}=useContext(addResponseContext)

  const [emp,setEmp]=useState({
    name:"",department:"",salary:"",phone:""
  })

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleSubmit=async()=>{
    console.log(emp)
    const{name,department,salary,phone}=emp
    if(!name || !department || !salary || !phone){
      alert("Enter Valid Inputs!!")
    }
    else{
      const result=await addEmployeeApi(emp)
      if(result.status==200){
        alert("Employee Added!!!")
        handleClose()
        setEmp({
           name:"",department:"",salary:"",phone:""
        })
        setAddresponse(result)
      }
      else{
        alert("Something Went Wrong!!")

      }
    }
  }

  return (
    <>
    <button className='btn btn-success' onClick={handleShow}>Add Employee</button>
    <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Add Employee</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div>
            <input type="text" placeholder='Enter Name' onChange={(e)=>setEmp({...emp,name:e.target.value})} className="form-control mb-3" />
            <input type="number" placeholder='Enter salary' onChange={(e)=>setEmp({...emp,salary:e.target.value})}  className="form-control mb-3" />
            <input type="tel" placeholder='Enter Phone Number' onChange={(e)=>setEmp({...emp,phone:e.target.value})}  className="form-control mb-3" />
            <select name="department" className='form-control' id="" onChange={(e)=>setEmp({...emp,department:e.target.value})} >
              <option value="" disabled selected>Select a Department</option>
              <option value="Accounts">Accounts</option>
              <option value="IT">IT</option>
              <option value="Business Development">Business Development</option>
              <option value="HR">HR</option>

            </select>

          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleSubmit}>Save</Button>
        </Modal.Footer>
      </Modal>

    </>
  )
}

export default Add