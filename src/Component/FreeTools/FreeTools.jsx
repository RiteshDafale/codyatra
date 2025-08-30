import React,{useState} from 'react'
import '../FreeTools/FreeTools.css';

function FreeTools() {
      useState(()=>{
        document.title="Free Tools - Codyatra"
      })
    return (
        <div>
            <div  style={{height:"100vh"}}>
                <h3 className='text-danger text-center my-4'>Free tools are Comming soon ---  under Maintainance</h3>
            </div>
        </div>
    )
}

export default FreeTools
