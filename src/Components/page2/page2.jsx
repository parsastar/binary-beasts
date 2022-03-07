import React, { Component } from 'react';
import "./page2.css"
class Lpage2 extends Component {
    state = {  }
    render() { 
        return ( 
            <React.Fragment>
            <div className="row lp2  ">
                <h1 className="col-12 text-center lp2m lp2m1 m-3"> ویژگی ها </h1>
                <h2 className="col-12 text-center lp2m2">  تیم کنکور یک سرویس مشاوره درسی و کنکوری انلاین است که دارای ویژگی های زیر است </h2>
                <div className="cards row px-5">
     
                    <div class="ccard  mx-auto card card1">
                        <img src={require("../../images/icons/card1.png").default} class="card-img-top cardImage" alt="..."/>
                        <div class="card-body">
                            <p class="card-text  text-center">حد اکثر بحره وری از مشاوره</p>
                            <div className="borderbottom1"/>
                        </div>
                    </div>
                    <div class="ccard  mx-auto card card2">
                        <img src={require("../../images/icons/card2.png").default} class="card-img-top cardImage" alt="..."/>
                        <div class="card-body">
                            <p class="card-text  text-center">انالیز دیتا و داده ها</p>
                            <div className="borderbottom2"/>
                        </div>
                    </div>
                    <div class="ccard  mx-auto  card card3 float-end ">
                        <img src={require("../../images/icons/card3.png").default} class="card-img-top cardImage" alt="..."/>
                        <div class="card-body">
                            <p class="card-text  text-center">هزینه کمتر</p>
                            <div className="borderbottom3"/>
                        </div>
                    </div>
                    <div class="ccard  mx-auto  card card4 float-end">
                        <img src={require("../../images/icons/card6.png").default} class="card-img-top cardImage" alt="..."/>
                        <div class="card-body">
                            <p class="card-text  text-center">صرفه جویی در وقت</p>
                            <div className="borderbottom4"/>
                        </div>
                    </div>
                    <div className="   bcard card5">
                        <div className="maintitle">متناسب با شرایط کرونایی</div>
                        <div className="botborder"></div>
                        <div className="sectitle">درین شرایط سخت کرونایی ما تمام 
                                تلاش خود را میکنیم که بهترین 
                            مشاور برسد  </div>
                        </div>
                    <div className="bcard card6">
                        <div className="maintitle">دسترسی به بهترین مشاور ها</div>
                        <div className="botborder"></div>
                        <div className="sectitle">با تیم کنکور به بهترین مشاور های درسی و برترین های کشور دسترسی پیدا خواهید کرد تا برنامه منظم برای پیشرفت شما سازمان دهی  کنند</div>
                    </div>

                </div>
                </div>
            </React.Fragment>

         );
    }
}
 
export default Lpage2;



