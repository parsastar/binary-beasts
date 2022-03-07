import React, { Component } from "react";
import Lheader from "./Components/header/header";
import Lpage1 from "./Components/page1 /page1";
import Lpage2 from "./Components/page2/page2";
import Lpage3 from "./Components/page3/page3";
import Lpage4 from "./Components/page4/page4";
import Lpage5 from "./Components/page5/page5";
import Lpage6 from "./Components/page6/page6";
import Lfooter from "./Components/footer/footer";
import "./landing.css"
class Landing extends Component {
  state = {};
  render() {
    return(
    <React.Fragment>
        <Lheader/>
        <Lpage1/>
        <Lpage2/>
        <Lpage3/>
        <Lpage4/>
        <Lpage5/>
        <div className="lcolor">
        <Lpage6/>
        <Lfooter/>
        </div>
    </React.Fragment>
    )
  }
}

export default Landing;
