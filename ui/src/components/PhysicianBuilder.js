import React, { useEffect, useState } from "react";
import SearchComponent from './SearchComponent'
import DataGridWrapper from './DataGridWrapper'

const PhysicianBuilder = () => {

  const [defaultRows, setDefaultRows] = useState([])
  const [rows, setRows] = useState([]);

  // const getUserData = 'https://run.mocky.io/v3/c9370a6f-f4cc-48fb-a097-51fb7c71f4bf'
  const getUserData = 'https://run.mocky.io/v3/4c3416bf-f81f-4f3e-b851-6cf1c625b1a7'

  const transformTask = (user) => {
    return (
      {
        id: user.id,
        name: user.name,
        email: user.email,
        phoneNumber: user.phoneNumber
      }
    )
  }

  const transform = (json) => {
    return json.map(task => transformTask(task))
  }

  const transformAndStore = (json) => {
    let myRows = [];
    const transformedTasks = transform(json);
    transformedTasks.forEach( (task) => {
      myRows.push(task);
    });
    return JSON.parse(JSON.stringify(myRows))
  }

  const getMainData = () => {
    fetch(getUserData, {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({
        RequestType: 'getdata'
      })
    })
    .then((response) => {
      return response.json()
    })
    .then(json => { 
        const transformedRows = transformAndStore(JSON.parse(json.Result))
        console.log("Transformed rows:",transformedRows)
        setRows(transformedRows)
        setDefaultRows(transformedRows)
    })
    .catch(err => {console.log(err);})
  }

  useEffect( () => {
    getMainData()
  }, [])

  const columns = [
    { field: 'id', headerName: 'ID', width: 140 },
    { field: 'name', headerName: 'Name', width: 400 },
    { field: 'email', headerName: 'Email ID', width: 410 },
    { field: 'phoneNumber', headerName: 'Phone Number', width: 380 },
  ];

  return (
    <>
      <SearchComponent rows={rows} setRows={setRows} defaultRows={defaultRows} />

      <DataGridWrapper 
       rows={rows}
       columns={columns} 
      />
    </>
  );
}

export default PhysicianBuilder