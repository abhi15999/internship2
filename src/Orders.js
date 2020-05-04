import React, { useEffect } from 'react';
import './App.css';
import { BootstrapTable, TableHeaderColumn } from 'react-bootstrap-table';
import Data from './Data.json';
import UserInfo from './UserInfo';
import { useCookies } from 'react-cookie';
import Title from './Title';

const Orders = (props) => {
    const [cookies, setCookies] = useCookies();

    useEffect(() => {
        // console.log(cookies);
        if (cookies.email === undefined) {
            props.history.push('/');
        }
    }, []);

    var products = ['Product 1', 'Product 2', 'Product 3'];

    const customerNameValidator = (name) => {
        if (name === '') {
            return 'This should not be empty';
        }
        return true;
    };

    const validateEmail = (email) => {
        var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(email);
    };

    const customerEmailValidator = (email) => {
        const check = validateEmail(email);
        if (!check) {
            return 'This is not a valid email';
        }
        return true;
    };

    const quantityValidator = (quantity) => {
        if (quantity === '') {
            return 'This should not be empty';
        }
        const check = isNaN(quantity);
        if (check) {
            return 'This should be an integer';
        }
        return true;
    };

    const cellEditProp = {
        mode: 'dbclick',
        blurToSave: true
    };

    const options = {
        insertText: 'Create New Order', // custom insert text
        deleteText: 'Delete Order'  // custom delete text
    };

    // enable select row
    const selectRowProp = {
        mode: 'checkbox'
    };

    return (
        <React.Fragment>
            { Title('Orders') }
            <div className="page-wrapper chiller-theme toggled">
                <UserInfo name={ cookies.name } email={ cookies.email } imageUrl={ cookies.imageUrl } />

                <main className="page-content">
                    <div className="container pt-5">
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
                    </div>
                </main>
            </div>
        </React.Fragment>
    );
};

export default Orders;
