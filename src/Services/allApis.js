import base_url from "./base_urls";
import commonApi from "./commonApi";

export const addEmployeeApi=async(data)=>{
    return await commonApi(`${base_url}/addemp`,"POST","",data)
}

export const getEmployeeApi=async()=>{
    return await commonApi(`${base_url}/emplist`,"GET","","")
}

export const deleteEmployeeApi=async(id)=>{
    return await commonApi(`${base_url}/delemp/${id}`,"DELETE","",{})
}

export const updateEmployeeApi=async(data,id)=>{
    return await commonApi(`${base_url}/updateemp/${id}`,"PUT","",data)
}