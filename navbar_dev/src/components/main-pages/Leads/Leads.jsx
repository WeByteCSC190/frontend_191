import React, { useMemo, useEffect, useState } from 'react';
import MOCK_DATA from "../../test-data/MOCK_DATA.json"


/* Renders the content of the Leads page */
export default function LeadsPage(){
    const [leadsData, setLeadsData] = useState([]);
    
    useEffect(() => {
    fetch('http://127.0.0.1:8000/api/leads-list/')
      .then(response => response.json())
      .then(data => {
        setLeadsData(data);
      })
      .catch(err => {
        console.log(err);
      });
  }, []);

    return (
    <>
    <div style={divStyle}>
    <h1>Leads</h1>
    <table className="table table-stripped">
      <thead>
        <tr>
          <th>First Name</th>
          <th>Last name</th>
          <th>Status</th>
          <th>Email</th>
          <th>Credit Score</th>
          <th>Date</th>
          <th>Phone Number</th>
        </tr>
      </thead>
      <tbody>
        {DisplayData}
      </tbody>
    </table>
  </div >
  </> 
);
}
/* End of code for LeadsPage() */ 

/* Uses MOCK_DATA to render results on Leads Page */ 
const DisplayData = MOCK_DATA.map(
    (info) => {
      return (
        <tr>
          <td>{info.first_name}</td>
          <td>{info.last_name}</td>
          <td>{info.status}</td>
          <td>{info.email}</td>
          <td>{info.credit_score}</td>
          <td>{info.date}</td>
          <td>{info.phone_num}</td>
        </tr>
      )
    }
  )

  const divStyle = {
    overflowY: 'scroll',
    overflowX: 'scroll',
    border: '1 px solid black',
    height: '100%',
    float: 'left',
    width: '100%',
    position: 'relative',
  };