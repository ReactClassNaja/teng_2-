import React from 'react'
import './card.css'
export default function card() {
    const arr =[
    {id: 1,name:"burgers and sandwiches", cal: 60,time: 20,port: 2},
    {id: 2,name:"burgers and sandwiches", cal: 150,time: 30,port: 3},
    {id: 3,name:"burgers and sandwiches", cal: 120,time: 80,port: 1},
    {id: 4,name:"burgers and sandwiches", cal: 150,time: 70,port: 4},
    {id: 5,name:"burgers and sandwiches", cal: 280,time: 90,port: 6},
]
    // const arr =[1,2,3,4,5]
  return (
    <div className='container'>
        {arr.map( row =>
        <div className='box'>
          <div className='image'>
             <img src='https://www.dairyqueen.com/dA/90a12bd600/fileAsset/DQ-Original-Cheeseburger-Single.png' width='90%' height='100%'/>
          </div>
          <div>
      <h3>{row.name}</h3>
      <p style={{color:"red"}}>{row.cal} calories</p>
      </div>
      <div className='cardfooter'>
        <div>
            <div>Time</div>
            <div>{row.time}</div>
        </div>
        <div 
         style={{
             flex:1,
             display:"flex",
             flexDirection:"column",
             textAlign:"end"
         }}
        >

        </div>
        <div>
            <div>Portion</div>
            <div>{row.port}</div>
        </div>
            </div>
      </div> 
      )}
    </div>
   
  )
}
