import React, { Component } from 'react';
import {BootstrapTable,
       TableHeaderColumn} from 'react-bootstrap-table';
/*import '../css/Table.css';*/ /* import 'bootstrap/scss/_tables.scss'; */
import '../../node_modules/react-bootstrap-table/css/react-bootstrap-table.css';
import Data from './Data';


class Table1 extends Component {
  render() {
    return (
      <div>
      <BootstrapTable data={this.props.data}>
          <TableHeaderColumn isKey dataField='id'>
            ID
          </TableHeaderColumn>
          <TableHeaderColumn dataField='name'>
            Дата
          </TableHeaderColumn>
          <TableHeaderColumn dataField='value'>
            Курс
          </TableHeaderColumn>
        </BootstrapTable>

      </div>
    );
  }
}

export default Table1;
