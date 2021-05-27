/* eslint-disable react/prop-types */
import React from 'react'
import { DataGrid} from '@material-ui/data-grid';

const DataGridWrapper = React.memo( (props) => {

  return (
    <DataGrid
        rows={props.rows}
        columns={props.columns} 
        showColumnRightBorder={true}
        showCellRightBorder={true}
        // disableSelectionOnClick={true}
        autoHeight={true}
        pageSize={9}
        // autoPageSize={true}
        // rowsPerPageOptions={[5,10,25,50,75,100]}
        pagination={true}
    />
  )
})

DataGridWrapper.displayName = 'DataGridWrapper'

export default DataGridWrapper