import React, { useEffect, useState } from 'react'
import './TableData.css'
import {csv, filter} from 'd3'
import {Button }from '@material-ui/core'
function TableData() {
    const [data,setData]=useState([])
    const [isActiveSerbia,setIsActiveSerbia]=useState(false)
    const [isActivegGermany, setIsActiveGermany] = useState(false);
    const [isActiveFran,setIsActiveFran]=useState(false)
    const [isActiveVele, setIsActiveVele] = useState(false);
    const [isActiveMalo, setIsActiveMalo] = useState(false);
    const [filterData,setFilterData]=useState(data)
    
var activeDrzave=[]
var activeTipovi=[]
    let statesDrzave = [
      {
        state: isActiveSerbia,
        name: "Srbija",
        tip: "Drzava",
      },
      {
        state: isActivegGermany,
        name: "Nemacka",
        tip: "Drzava",
      }]
      let statesTipovi=[
      {
        state: isActiveFran,
        name: "Fransiza",
        tip: "Tip radnje",
      },
      {
        state: isActiveVele,
        name: "Veleprodaja",
        tip:'Tip radnje'
      },
      {
        state: isActiveMalo,
        name: "Maloprodaja",
        tip: "Tip radnje",
      },
    ];
  
    useEffect(() => {
      csv(
        "https://bitbucket.org/sstojanovic/fetest/raw/80774e9308e47fdcd142102b21d639e227eca9f4/resources/_IMPORTS/radnje.csv"
      ).then((data) => {
        setData(data);
      });
    }, [
     
    ]);
 useEffect(() => {
  activeDrzave=[]
  activeTipovi=[]
   statesDrzave.map((active) => {
     if (active.state) {
      
       activeDrzave.push(active)
       
     }
     
   });
   console.log('duzina drzava je ' + activeDrzave.length)
    statesTipovi.map((active) => {
      if (active.state) {
        console.log(JSON.stringify(active));
        activeTipovi.push(active);
       
      }
    });
  console.log("duzina tipova je " + activeTipovi.length);
   
 }, [
   [isActiveFran, isActiveMalo, isActiveSerbia, isActivegGermany, isActiveVele],
 ]);

 console.log(data);
 useEffect(() => {
   var filterArray = [];
   var filterDrzavearray=[]
   var filterFinishedArray=[]
   for (let i = 0; i < data.length; i++) {
     if(activeTipovi.length===0){
     for (let j = 0; j < activeDrzave.length; j++) {
       
     
         if(data[i].Drzava === activeDrzave[j].name &&
           Object.getOwnPropertyNames(data[i])[0] === activeDrzave[j].tip ) {
        
       
         filterArray.push(data[i]);
         
         
       }
     } setFilterData(filterArray);}
    
    if(activeDrzave.length===0){
      for (let z = 0; z < activeTipovi.length; z++) {
        if (
          data[i]["Tip radnje"] === activeTipovi[z].name &&
          Object.getOwnPropertyNames(data[i])[1] === activeTipovi[z].tip
        ) {
          filterArray.push(data[i]);
        
        }
      }
       setFilterData(filterArray);
    }
    if(activeTipovi.length>0 &&activeDrzave.length>0){
      
      
        for (let  k= 0; k < activeDrzave.length; k++) {
          
         if(data[i].Drzava === activeDrzave[k].name &&
           Object.getOwnPropertyNames(data[i])[0] === activeDrzave[k].tip ){
              filterDrzavearray.push(data[i])
           }
          
        
    }
    console.log('tjt '+JSON.stringify(filterDrzavearray))
    
   }
  }
  if(activeTipovi.length>0 &&activeDrzave.length>0){
 for (let p = 0; p < filterDrzavearray.length; p++) {
   for (let l = 0; l < activeTipovi.length; l++) {
     if (
       filterDrzavearray[p]["Tip radnje"] === activeTipovi[l].name &&
       Object.getOwnPropertyNames(filterDrzavearray[p])[1] ===
         activeTipovi[l].tip
     ) {
       filterFinishedArray.push(filterDrzavearray[p]);
       console.log("udje ovdje puno puta");
     }
   }
 }
 setFilterData(filterFinishedArray);}
 
   
   filterArray=[]
   filterFinishedArray=[]
   filterDrzavearray=[]
   
 }, [
   isActiveFran,
   isActiveMalo,
   isActiveSerbia,
   isActivegGermany,
   isActiveVele,
 ]);

 console.log('filtriranih data je ' +filterData.length)
 console.log('ovo je filterdata  ' +filterData)
    return (
      <div className="tableData">
        <div
          className="table__buttons"
          style={{ width: `${document.getElementById('tableData__table')?.offsetWidth}` }}
        >
          <div className="country__button">
            <button
              className={!isActiveSerbia ? "btn" : "btn-active"}
              onClick={() => setIsActiveSerbia(!isActiveSerbia)}
            >
              Srbija
            </button>
            <button
              className={!isActivegGermany ? "btn" : "btn-active"}
              onClick={() => setIsActiveGermany(!isActivegGermany)}
            >
              Nemačka
            </button>
          </div>
          <div className="tip__buttons">
            <button
              className={!isActiveFran ? "btn" : "btn-active"}
              onClick={() => setIsActiveFran(!isActiveFran)}
            >
              Franšiza
            </button>
            <button
              className={!isActiveVele ? "btn" : "btn-active"}
              onClick={() => setIsActiveVele(!isActiveVele)}
            >
              Veleprodaja
            </button>
            <button
              className={!isActiveMalo ? "btn" : "btn-active"}
              onClick={() => setIsActiveMalo(!isActiveMalo)}
            >
              Maloprodaja
            </button>
          </div>
        </div>
        <div className="tableData__table">
          <table>
            <tbody>
              <tr>
                <th>Država</th>
                <th>Tip</th>
                <th>Broj telefona</th>
                <th>Adresa</th>
              </tr>
              {(filterData.length > 0 ? filterData : data).map(
                (item, index) => {
                  return (
                    <tr
                      key={
                        Date.now().toString(36) +
                        Math.random().toString(36).substr(2)
                      }
                    >
                      <td>{item.Drzava}</td>
                      <td>{item["Tip radnje"]}</td>
                      <td>{item["Broj telefona"]}</td>
                      <td style={{ paddingRight: "0" }}>{item.Ulica}</td>
                      <hr />
                    </tr>
                  );
                }
              )}
            </tbody>
          </table>
        </div>
        <div className="tableDate__info">
          <h1>Maecenas tempor tincidunt luctus</h1>
          <h4>Nun sodales gravida odio</h4>
          <button>MAIN CTA</button>
        </div>
      </div>
    );
}

export default TableData
