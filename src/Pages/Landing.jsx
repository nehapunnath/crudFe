import React from 'react'
import { Link } from 'react-router-dom'

function Landing() {
  return (
    <>
    <div className="d-flex justify-content-center align-items-center bg-info" style={{height:'100vh'}}>
        <div className="w-75 p-5 border shadow bg-warning">
            <h1>Crud App Company</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus asperiores nostrum dolorum nam suscipit est odio illo, nemo illum voluptate cumque quisquam neque dolores, accusamus dicta officiis tenetur atque rem.</p>
            <Link to={'/dash'} className='btn btn-success' >Go to Dashboard</Link>
        </div>
    </div>
    </>
  )
}

export default Landing