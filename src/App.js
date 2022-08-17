import React, { useEffect } from 'react';
import Select from 'react-select';
import Info from "./components/info";
import Form from "./components/form";
import Kurs from "./components/Kurs";
//import Data from "./components/Data";
import KursVse from "./components/KursVse";
//import Header from "./components/Header";

import logo from './logo.svg';
import './App.css';

//const API_KEY = "f5592d25-aba4-472c-85d9-1bc22b67a509";
/*const data1 =  new Array();*/
/*const items1 =  new Array();*/
//const data1 = 0;
class App extends React.Component {

  state = {
    cc: undefined,
    exchangedate: undefined,
    r030: undefined,
    rate: undefined,
    txt: undefined,
    error: undefined
  }

  state = {
    cc1: undefined,
    exchangedate1: undefined,
    r0301: undefined,
    rate1: undefined,
    txt1: undefined,
    data1: undefined,
    error: undefined

  }

gettingKurs1 = async (e1) => {
  e1.preventDefault();
  const api_url1 = await fetch(`https://bank.gov.ua/NBUStatService/v1/statdirectory/exchange?json`);
  const data1 = await api_url1.json();
  console.log(data1);

  this.setState({
    cc1: data1[4].cc,
    exchangedate1: data1[4].exchangedate,
    r0301: data1[4].r030,
    rate1: data1[4].rate,
    txt1: data1[4].txt,
    data1: data1,
    error: ""
  });
  /*const items1 = data1.map((dat1) => <li>{dat1}</li>);*/
  /*console.log(items1);*/

}

gettingKurs2 = async (e2) => {
  e2.preventDefault();
  const valuta2 = e2.target.elements.valuta.value;
  const date2 = e2.target.elements.date.value;
  const api_url2 = await fetch(`https://bank.gov.ua/NBUStatService/v1/statdirectory/exchange?valcode=${valuta2}&date=${date2}&json`);
  const data2 = await api_url2.json();
  const api_url1 = await fetch(`https://bank.gov.ua/NBUStatService/v1/statdirectory/exchange?json`);
  const data1 = await api_url1.json();
  /*const table2 = data1.map(dat1 => (<h1>{dat1.cc={valuta2}}</h1>));*/
/*  for (i=date2 to i=(date2-25) i--)
       for (k=1 to k=25 k--)
  const api_url22 = await fetch(`https://bank.gov.ua/NBUStatService/v1/statdirectory/exchange?valcode=${valuta2}&date=${i}&json`);
  const data22[k] = await api_url22.json();
} */
  /*console.log(data22);*/
  console.log(data2);

  /*console.log(data1);*/


  this.setState({
    cc: data2[0].cc,
    exchangedate: data2[0].exchangedate,
    r030: data2[0].r030,
    rate: data2[0].rate,
    txt: data2[0].txt,
    data1: data1,
    error: ""
  });
 console.log(this.state.rate);
}

  render() {
     return (
       <div className="wrapper">
        <Info />
        <Form kursMethod2={this.gettingKurs2}
              kursMethod1={this.gettingKurs1}
              data1={this.state.data1}
         />
        <Kurs
           cc={this.state.cc}
           exchangedate={this.state.exchangedate}
           r030={this.state.r030}
           rate={this.state.rate}
           txt={this.state.txt}
           error={this.state.error}
                data1={this.state.data1} /*ЭТО НЕ НУЖНО ЗДЕСЬ РЕАЛЬНО*/
           />

          <KursVse
           cc1={this.state.cc1}
           exchangedate1={this.state.exchangedate1}
           r0301={this.state.r0301}
           rate1={this.state.rate1}
           txt1={this.state.txt1}
           error={this.state.error}
              data1={this.state.data1}
              /*items1={items1}*/
           />
       </div>
     );
  }
}

export default App;
