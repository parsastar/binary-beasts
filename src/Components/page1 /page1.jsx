import React, { Component } from 'react';
import "./page1.css"
class Lpage1 extends Component {
    state = { 
        adress:require("../../images/images/pmg.png").default,
     }
    changeimage =() => {
        window.onresize = () => {
            var w = window.innerWidth;
            var lp1image1 = document.getElementById("lp1image1")
            if(w <= 770){
                lp1image1.src=require("../../images/images/lp1.jpg").default
            }
            if(w >= 770){
                lp1image1.src=require("../../images/images/pmg.png").default
            }
     }

    }
    check =() => {
            window.onload = ()=> {
            var w = window.innerWidth;
            var lp1image1 = document.getElementById("lp1image1")
            if(w <= 770){
                lp1image1.src=require("../../images/images/lp1.jpg").default
            }
     }

    }
    render() { 
     
        this.check()
        this.changeimage();
   
        return ( 
            

            <React.Fragment>
                <div className="row page1">
                    <img id="lp1image1"src={require("../../images/images/pmg.png").default} className=" row p1image"/>
                    <h1 className=" lp1matn text-justify-center  ">تیم  کنکور</h1>
                    <h2 className=" lp1matn2 ">با تیم کنکور بهترین مشاوره درسی را به خانه های خود اورید</h2>
                    <div className="lp1b btn  ml-auto text-center-center rounded-pill border border-dark">
                        ثبت نام دانش اموز
                    </div>
                    <div className="lp1b2 lp1b btn  ml-auto text-center-center rounded-pill border border-dark">
                        ثبت نام مشاور
                    </div>
                </div>

            </React.Fragment>
         );
    }
}
 
export default Lpage1;