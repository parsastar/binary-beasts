import react from 'react';
import React, { Component } from 'react';
import "./header.css"
class Lheader extends Component {
    state = {  }
    render() { 
        return ( 
            <react.Fragment>
            <div className="LheaderH row">
            <div className="Hitems special  text-center">ورود</div>
            <div className="Hitems  text-center ">قیمت</div>
            <div className="Hitems   text-center ">وبلاگ</div>
            <div className="Hitems   text-center ">درباره ما</div>

            
            <div className="headerI   text-center"> 
            تیم کنکور
              <div className="headerIi ">
                
              </div>
            </div>


            </div>
         
            </react.Fragment>

         );
    }
}
 
export default Lheader;