import React from 'react'
import "./IdCard.css"

const Student = ({college}) => {
    return (
        <div className='header'>
            <table className='table'>
                <tbody className='abcd'>
                    <tr>{college}</tr>
                    <tr>
                        <th>Name</th>
                        <th>Ashish Kumar Singh</th>
                        
                    </tr>

                    <tr>
                    <th>Branch</th>
                    <th>CSE </th>
                    </tr>

                    <tr>
                    <th>Section</th>
                    <th>A </th>
                    </tr>
                    
                </tbody>
            </table>
        </div>
    )
}

export default Student