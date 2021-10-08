import React from 'react'
import './Header.css'


function Header() {
    return (
        <div className='header'>
           <h1 style= {{color: 'white', fontSize: '30px', textAlign: 'center', paddingTop: '10px'}}>
            New Task
           </h1>
           
        <div class="ui form">
                <div class="grouped fields" style={{margin: '20px'}}>
                    <label style={{color:'wheat', margin:'21px', fontSize:'20px'}}>Select Task Type:</label>
                    <div class="field">
                    <div class="ui radio checkbox">
                        <input type="radio" name="example2" checked="checked"></input>
                        <label style={{color:'white', fontSize:'15px'}}>In person</label>
                    </div>
                    </div>
                    <div class="field">
                    <div class="ui radio checkbox">
                        <input type="radio" name="example2"></input>
                        <label style={{color:'white', fontSize:'15px'}}>Online</label>
                    </div>
                    </div>
                    
  </div>
</div>
        </div>
    )
}

export default Header
