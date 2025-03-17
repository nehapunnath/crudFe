import React, { useEffect } from 'react'
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { updateEmployeeApi } from '../Services/allApis';
import { useContext } from 'react';
import { editResponseContext } from '../context/ContextApi';

function Edit({emp}) {
      const [show, setShow] = useState(false);
    
      const handleClose = () => setShow(false);
      const handleShow = () => setShow(true);

      const[editemp,setEditemp]=useState({
         name:emp.name,department:emp.department,salary:emp.salary,phone:emp.salary
      })

      const {setEditres}=useContext(editResponseContext)

   

      const handleEdit=async()=>{
        console.log(editemp)
        const {name,department,salary,phone}=editemp
        if(!name || !department || !salary || !phone){
              alert("Enter Valid Inputs!!")
            }
            else{
              const result=await updateEmployeeApi(emp._id,editemp)
              // console.log(result)
              if(result.status==200){
                alert("Employee updated!!!")
                handleClose()
                setEditres(result)
              }
              else{
                alert("Something Went Wrong!!")
        
              }
            }
          
        
      }
  return (
    <>
        <button className="btn" onClick={handleShow}>
            <i className="fa-solid fa-pen-to-square text-warning"></i>
         </button>
        <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Edit Employee</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div>
            <input type="text" defaultValue={emp.name} placeholder='Enter Name' onChange={(e)=>setEditemp({...editemp,name:e.target.value})} className="form-control mb-3" />
            <input type="number" defaultValue={emp.salary}  placeholder='Enter salary' onChange={(e)=>setEditemp({...editemp,salary:e.target.value})} className="form-control mb-3" />
            <input type="tel" defaultValue={emp.phone}  placeholder='Enter Phone Number' onChange={(e)=>setEditemp({...editemp,phone:e.target.value})} className="form-control mb-3" />
            <select name="department" defaultValue={emp.department}  className='form-control' id="" onChange={(e)=>setEditemp({...editemp,department:e.target.value})}>
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
          <Button variant="primary" onClick={handleEdit}>Update</Button>
        </Modal.Footer>
      </Modal>
    </>
  )
}

export default Edit