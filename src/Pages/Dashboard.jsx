import React, { useContext, useEffect, useState } from 'react'
import Add from '../components/Add'
import Edit from '../components/Edit'
import { deleteEmployeeApi, getEmployeeApi } from '../Services/allApis'
import { addResponseContext, editResponseContext } from '../context/ContextApi'


function Dashboard() {
    const[emplist,setEmplist]=useState([])

    const {addresponse,setAddresponse}=useContext(addResponseContext)

    const {editRes}=useContext(editResponseContext)

    useEffect(()=>{
        getData()
    },[addresponse,editRes])

    const getData=async()=>{
        const result=await getEmployeeApi()
        console.log(result)
        if(result.status=200){
            setEmplist(result.data)
        }

    }

    const deleteemployee=async(id)=>{
        const result=await deleteEmployeeApi(id)
        if(result.status==200){
            getData()
          }
          else{
            toast.error("Deletion Failed!!!...Something Went Wrong!!!")
            console.log(result)
          }
    }
  return (
    <>
    <div className="p-3">
        <h1>Dashboard</h1>
        <Add/>
        {
            emplist.length>0 ?
            <table className='table table-dark table-bordered '>
            <thead>
               <tr>
                <th>ID</th>
                <th>Name</th>
                <th>Department</th>
                <th>Salary</th>
                <th>Phone Number</th>
                <th></th>
               </tr>
            </thead>
            <tbody>
                {
                    emplist.map((item,index)=>(
                        <tr>
                        <td>{index+1}</td>
                        <td>{item.name}</td>
                        <td>{item.department}</td>
                        <td>{item.salary}</td>
                        <td>{item.phone}</td>
    
                        <td>
                            <Edit emp={item}/>
                            <button className="btn" onClick={()=>{deleteemployee(item._id)}}>
                            <i className="fa-solid fa-trash text-danger"></i>
                            </button>
    
                        </td>
    
                    </tr>
                        
                    ))
                }


            </tbody>
        </table>
        :
        <h2 className='text-danger text-center'>No Employees Available!!!</h2>
        }

    </div>
    
    </>
  )
}

export default Dashboard