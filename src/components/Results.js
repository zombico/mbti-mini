import React, { Component } from 'react';

class Results extends Component {
 state={}

 

 render(){
  const testData = {
    ie: 'E',
    sn: 'S',
    tf: 'T',
    jp: 'P'
  }
   const data = testData;   
   return(
    <section className="results-container">
      <section className="left-side">
        <h2 className="result-title">Your Perspective</h2>
        <p>Your perspective type is {data.ie}{data.sn}{data.tf}{data.jp}</p>
      </section>
      <section className="right-side">
        
        <div className="table-container">
          <span className="result">Introversion (I)</span>        
          { data.ie === 'I' && 
          <><div className="result-box-active"/> <div className="result-box"/></>
          }
          { data.ie === 'E' && 
          <><div className="result-box"/> <div className="result-box-active"/></>
          }                                
          <span className="result">Extraversion (E)</span>
        </div>

        <div className="table-container">
          <span className="result">Sensing (S)</span>        
          { data.sn === 'S' && 
          <><div className="result-box-active"/> <div className="result-box"/></>
          }
          { data.sn === 'N' && 
          <><div className="result-box"/> <div className="result-box-active"/></>
          }                                
          <span className="result">Intuition (N)</span>
        </div>

        <div className="table-container">
          <span className="result">Thinking (T) </span>        
          { data.tf === 'T' && 
          <><div className="result-box-active"/> <div className="result-box"/></>
          }
          { data.stfn === 'F' && 
          <><div className="result-box"/> <div className="result-box-active"/></>
          }                                
          <span className="result">Feeling (F)    </span>
        </div>

        <div className="table-container">
          <span className="result">Judging (J)</span>        
          { data.jp === 'J' && 
          <><div className="result-box-active"/> <div className="result-box"/></>
          }
          { data.jp === 'P' && 
          <><div className="result-box"/> <div className="result-box-active"/></>
          }                                
          <span className="result">Perceiving (P)</span>
        </div>
      </section>
    </section>
   )
 }
}

export default Results