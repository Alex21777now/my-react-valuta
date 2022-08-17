import React, { Component } from "react";
import Table1 from './Table1';
import Data from './Data';
import {BootstrapTable,
       TableHeaderColumn} from 'react-bootstrap-table';
import Table from 'react-table';
import styled from 'styled-components';
import '../../node_modules/react-bootstrap-table/css/react-bootstrap-table.css';

const data = [
  {id: 1, name: 'Loh', value: '2'},
  {id: 2, name: 'Buster', value: '5'},
  {id: 3, name: 'George Michael', value: '4'}
];

const posts = [
  {id: 1, name: 'Loh', value: '2'},
  {id: 2, name: 'Buster', value: '5'},
  {id: 3, name: 'George Michael', value: '4'},
  {id: 4, name: 'Simon', value: '10'},
  {id: 5, name: 'Neil', value: '11'},
  {id: 6, name: 'Vincent', value: '14'},
  {id: 7, name: 'Mark', value: '47'}
];

const Styles = styled.div`
  padding: 1rem;

  table {
    border-spacing: 0;
    border: 1px solid white;

    tr {
      :last-child {
        td {
          border-bottom: 0;
        }
      }
    }

    th,
    td {
      margin: 0;
      padding: 1rem;
      border-bottom: 1px solid white;
      border-right: 1px solid white;

      :last-child {
        border-right: 0;
      }
    }
  }
`

const Kurs = props => (
  <div>
  { props.cc &&
    <div>
    <p>{<div><p>&nbsp;&nbsp;&nbsp;</p></div>}</p>
    <p>Сокращенное имя валюты: <strong>{props.cc}</strong></p>
    <p>Дата: {props.exchangedate}</p>
    <p>Код валюты: {props.r030}</p>
    <p>Курс: <strong>{props.rate}</strong></p>
    <p>Название валюты: {props.txt}</p>
    <p>______________________________________________</p>
    <p>&emsp;&emsp;</p>
    <p>Таблица <strong>изменения курса</strong>: &nbsp; {props.txt}&nbsp; <strong>({props.cc})</strong></p>

{/* <p> &emsp;&ensp;&emsp;&emsp;&emsp;   Дата  &emsp;&ensp;  &emsp;&ensp;   Курс  &emsp;&ensp; </p>
    <p> &emsp;&ensp;   {props.exchangedate}  &emsp;&ensp; | &emsp;&ensp;   {props.rate}  &emsp;&ensp; </p>
    <p>__________________________________</p>
    <p>                                              </p>
    <p>______________________________________________</p>
    <p className="Table-header">ТАБЛИЦА</p>
        <Table1 data={Data}/>  */}

{/*<Styles>
  <table>
    <thead>

      <tr>
        <th><h3>Дата</h3></th>
        <th><h3>Курс</h3></th>
      </tr>

    </thead>
    <tbody>

      <tr>
        <td>{props.exchangedate}</td>
        <td><strong>{props.rate}</strong></td>
      </tr>
      <tr>
        <td>Jacob</td>
        <td><strong>Thornton</strong></td>
      </tr>

    </tbody>
  </table>
</Styles>*/}

<Styles>
  <table>
    <thead>

      <tr>
        <th><h3>Дата</h3></th>
        <th><h3>Курс</h3></th>
      </tr>

    </thead>
    <tbody>

{
  posts.map(post => (
                <tr>
                   <td>{post.name}</td>
                   <td><strong>{post.value}</strong></td>
                </tr>
                    )
           )
}



    </tbody>
  </table>
</Styles>

    </div>
  }
  <p>{ props.error }</p>
  </div>
);

export default Kurs;
