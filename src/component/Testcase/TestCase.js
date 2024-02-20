import React from 'react'
import './TestCase.scss'

function TestCase({data,index}) {
    // console.log(index);
  return (
   <div className="testcase">
    <div className="inner_test_case">
        <h3 className='name'>{data?.name}</h3>
      
        <div className='type'> <p>{data?.type}</p></div>
    </div>
   </div>
  )
}

export default TestCase