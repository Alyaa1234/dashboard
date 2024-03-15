import React from 'react'
import { GridComponent, ColumnsDirective, ColumnDirective, Page, Selection, Inject , Edit, Toolbar, Sort, Filter } from '@syncfusion/ej2-react-grids';
import { customersData , customersGrid } from '../data/dummy';
import { Header } from '../components'

const Customers = () => {
  return (
    <div className='m-2 md:m-10 p-2  md:p-10 bg-white rounded-3xl'>
    <Header category="Page"  title="Customers" />

    <GridComponent
      dataSource={customersData} //data you wanna show it inside the table
      allowPaging //to make pagination and notshowing all elements
      allowSorting //to allow making filteration
      toolbar={['Delete']} //to show delete sign
      editSettings={{
        allowDeleting: true, //we able to delete any user in this table
        allowEditing: true, //so we can edit value ofthings inside this table
      }}
      width='auto'
    >
      <ColumnsDirective>
          {customersGrid.map((item , index)=>(
            <ColumnDirective key={index} {...item}/>
          ))}
      </ColumnsDirective>

      <Inject services={[ Page , Selection , Toolbar , Edit , Sort, Filter ]} />

    </GridComponent>
  </div>
  )
}

export default Customers