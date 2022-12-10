import React from 'react'
import './content.css'

export default function content() {
  return (
    <div className='contentRoot'>
        <div className='header'>
          <p>Simple and Testy Recipes</p>
        </div>
        <div className='paragraph'>
         <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi earum eum, est consequuntur, expedita aperiam aliquid ab incidunt ex, laudantium dolorem a temporibus? Vel recusandae quaerat laboriosam fugiat cupiditate dolor?</p>
        </div>
        <div className='avatar'>
          <img src='https://i.pinimg.com/originals/82/a1/88/82a188d47fed928f11e994eb448dfe74.jpg' width='50px' height='50px'/>
          <p><b>By:Mr.Teng</b></p>
        </div>
    </div>
  )
}
