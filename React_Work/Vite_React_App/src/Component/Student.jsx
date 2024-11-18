import React from 'react'
import "./IdCard.css"

const Student = ({ data }) => {
    return (
        <div className='header'>
            <table className='table'>
                <tbody className='abcd'>
                    <img src="https://images.crunchbase.com/image/upload/c_pad,f_auto,q_auto:eco,dpr_1/dmzf8yle9vzdqyo2emwt" />
                    {/* <tr className='college'>{college}</tr>
                    <tr>Student Details: </tr>
                    <tr>
                        <th className='head'>Name</th>
                        <th>{name}</th>
                        
                    </tr>
                    <tr>
                    <th className='head'>Branch</th>
                    <th>{branch} </th>
                    </tr>

                    <tr>
                    <th className='head'>Section</th>
                    <th>{sec} </th>
                    </tr> */}

                    <tr className='college'>{data.college}</tr>
                    <tr>Student Details: </tr>
                    <tr>
                        <th className='head'>Name</th>
                        <th>{data.name}</th>

                    </tr>
                    <tr>
                        <th className='head'>Branch</th>
                        <th>{data.branch} </th>
                    </tr>

                    <tr>
                        <th className='head'>Section</th>
                        <th>{data.sec} </th>
                    </tr>

                </tbody>
            </table>
        </div>
    )
}

Student.defaultProps = {
    college: "Ashish public school"
}

export default Student