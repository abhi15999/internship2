import React from 'react';
import './App.css';
import { BootstrapTable, TableHeaderColumn } from 'react-bootstrap-table';
import Data from './Data.json';

var products = ['Product 1', 'Product 2', 'Product 3'];

function customerNameValidator (name) {
  if (name === '') {
    return 'This should not be empty';
  }
  return true;
}

function validateEmail (email) {
  var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(email);
}

function customerEmailValidator (email) {
  const check = validateEmail(email);
  if (!check) {
    return 'This is not a valid email';
  }
  return true;
}

function quantityValidator (quantity) {
  if (quantity === '') {
    return 'This should not be empty';
  }
  const check = isNaN(quantity);
  if (check) {
    return 'This should be an integer';
  }
  return true;
}

const cellEditProp = {
  mode: 'dbclick',
  blurToSave: true
};

const options = {
  insertText: 'Create New Order', // custom insert text
  deleteText: 'Delete Order'
};

// If you want to enable deleteRow, you must enable row selection also.
const selectRowProp = {
  mode: 'checkbox'
};

function App () {
  return (
    <div className="App">
      <BootstrapTable data={ Data } insertRow={ true } cellEdit={ cellEditProp }
        deleteRow={ true } selectRow={ selectRowProp } pagination={ true }
        search={ true } options={ options } version='4'>
        <TableHeaderColumn isKey={ true } dataField='id'>Order ID</TableHeaderColumn>
        <TableHeaderColumn dataField='customer_name' editable={ { validator: customerNameValidator } }>Customer Name</TableHeaderColumn>
        <TableHeaderColumn dataField='customer_email' editable={ { validator: customerEmailValidator } }>Customer Email</TableHeaderColumn>
        <TableHeaderColumn dataField='product' editable={ { type: 'select', options: { values: products } } }>Product</TableHeaderColumn>
        <TableHeaderColumn dataField='quantity' editable={ { validator: quantityValidator } }>Quantity</TableHeaderColumn>
      </BootstrapTable>
    </div>
  );
}

export default App;
