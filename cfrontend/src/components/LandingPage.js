import React, { Component } from 'react'
import '../App.css';
export default class LandingPage extends Component {
  render() {
    return (
      <div>
        <h1 className='title'>Electricity Payment App</h1>  
        <div className="flex flex-col container">

 <div>

        <div>
        <label for="username"> User Name: </label>
        <input type="text" placeholder='Enter Your User Name' className='inputs'/>
        </div>
        <div>
        <label for="email"> Email: </label>
        <input type="text" placeholder='Enter Your User Email' className='inputs2' />
        </div>


</div>
     

<div>

       <div>
       <label for="password">Password: </label>
       <input type="text" placeholder='Enter Your Password' className='inputs3'/>
       </div>
       <div>
       <label for="meternumber">   Meter Number: </label>
       <input type="text" placeholder='Enter Your Meter Number' className='inputs4'/>
       </div>
       <div>


</div>
      
       <label for="amount">  Amount: </label>
       <input type="text" placeholder='Enter the Amount of Money' className='inputs5'/>
       </div>
       <div >  
       <input type="submit" className="submit-button"/>
       </div>
        
        </div>
        
    </div>
     
    )
  }
}
