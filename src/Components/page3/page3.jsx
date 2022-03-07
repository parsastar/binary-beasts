import React, { Component } from 'react';
import "./page3.css"
class Lpage3 extends Component {
    state = {  }
     ciclehoevr = () => {
         
         
         
        
        window.onload = function () {
            
            const mainc1 = document.getElementById("mainc1")
            const mainc2 = document.getElementById("mainC2")
            const mainc3 = document.getElementById("mainC3")
            const mainc4 = document.getElementById("mainC4")
            const ro = document.getElementById("ro")
            const vbmain = document.getElementById("vbmain")
            const vbsec = document.getElementById("vbsec")
            const vbnum = document.getElementById("vbnum")
            const vbback = document.getElementById("vbback")
            const mainc5 = document.getElementById("mainC5")
            var flag = 1;
            mainc1.onmouseover = function () {
                mainc1.className="mainC on"
            }
            mainc1.onmouseout = function () {
                if(flag!=1){
                mainc1.className="mainC off"
                }
            }
            mainc2.onmouseover = function () {
                mainc2.className="mainC on"
                
            }
            mainc2.onmouseout = function () {
                if(flag!=2){
                mainc2.className="mainC off"
                }
            }
            mainc3.onmouseover = function () {
                mainc3.className="mainC on"
                
            }
            mainc3.onmouseout = function () {
                if(flag!=3){
                mainc3.className="mainC off"
            }
            }
            mainc4.onmouseover = function () {
                mainc4.className="mainC on"
                
            }
            mainc4.onmouseout = function () {
                if(flag!=4){
                mainc4.className="mainC off"
                }
            }
            mainc5.onmouseover = function () {
                mainc5.className="mainC on"
                
            }
            mainc5.onmouseout = function () {
                if(flag!=5){
                mainc5.className="mainC off"
                }
            }
            mainc1.onclick = function () {
                ro.className="ro on"
                setTimeout(() => {
                    ro.className="ro off"
                }, 800);
                setTimeout(() => {
                    vbback.className = "vbback c1"
                    vbnum.innerHTML="01"
                    vbmain.innerHTML="ثبت نام"
                    vbsec.innerHTML="با تیم کنکور به بهترین مشاور های درسی و برترین های کشور دسترسی پیدا خواهید کرد تا برنامه منظم برای پیشرفت شما سازمان دهی  کنندبا تیم کنکور به بهترین مشاور های درسی و برترین های کشور دسترسی پیدا خواهید کرد تا برنامه منظم برای پیشرفت شما سازمان دهی  کنند"
                }, 600);
                mainc1.className="mainC on"
                mainc2.className="mainC off"
                mainc3.className="mainC off"
                mainc4.className="mainC off"
                mainc5.className="mainC off"
                flag = 1;
                return flag
            }
            mainc2.onclick = function () {
                ro.className="ro on"
                setTimeout(() => {
                    ro.className="ro off"
                }, 800);
                setTimeout(() => {
                    vbback.className = "vbback c2"
                    vbnum.innerHTML="02"
                    vbmain.innerHTML=" انتخاب مقطع و رشته"
                    vbsec.innerHTML="با تیم کنکور به بهترین مشاور های درسی و برترین های کشور دسترسی پیدا خواهید کرد تا برنامه منظم برای پیشرفت شما سازمان دهی  کنندبا تیم کنکور به بهترین مشاور های درسی و برترین های کشور دسترسی پیدا خواهید کرد تا برنامه منظم برای پیشرفت شما سازمان دهی  کنند"
                  
                }, 600);
                flag = 2;
                mainc2.className="mainC on"

                mainc1.className="mainC off"
                mainc3.className="mainC off"
                mainc4.className="mainC off"
                mainc5.className="mainC off"
                return flag
            }
            mainc3.onclick = function () {
                ro.className="ro on"
                setTimeout(() => {
                    ro.className="ro off"
                }, 800);
               setTimeout(() => {
                vbback.className = "vbback c3"
                vbnum.innerHTML="03"
                vbmain.innerHTML=" انتخاب مقطع و رشته"
                vbsec.innerHTML="با تیم کنکور به بهترین مشاور های درسی و برترین های کشور دسترسی پیدا خواهید کرد تا برنامه منظم برای پیشرفت شما سازمان دهی  کنندبا تیم کنکور به بهترین مشاور های درسی و برترین های کشور دسترسی پیدا خواهید کرد تا برنامه منظم برای پیشرفت شما سازمان دهی  کنند"
               
               }, 600);
                 flag = 3;
                 mainc3.className="mainC on"

                mainc1.className="mainC off"
                mainc2.className="mainC off"
                mainc4.className="mainC off"
                mainc5.className="mainC off"
                return flag
            }
            mainc4.onclick = function () {
                ro.className="ro on"
                setTimeout(() => {
                    ro.className="ro off"
                }, 800);
                setTimeout(() => {
                    vbback.className = "vbback c4"
                    vbnum.innerHTML="04"
                    vbmain.innerHTML=" انتخاب مقطع و رشته"
                    vbsec.innerHTML="با تیم کنکور به بهترین مشاور های درسی و برترین های کشور دسترسی پیدا خواهید کرد تا برنامه منظم برای پیشرفت شما سازمان دهی  کنندبا تیم کنکور به بهترین مشاور های درسی و برترین های کشور دسترسی پیدا خواهید کرد تا برنامه منظم برای پیشرفت شما سازمان دهی  کنند"
                   
                   }, 600);
                   flag = 4;
                   mainc4.className="mainC on"

                mainc1.className="mainC off"
                mainc3.className="mainC off"
                mainc2.className="mainC off"
                mainc5.className="mainC off"
                return flag
            }
            mainc5.onclick = function () {
                ro.className="ro on"
                setTimeout(() => {
                    ro.className="ro off"
                }, 800);
                setTimeout(() => {
                    vbback.className = "vbback c5"
                    vbnum.innerHTML="05"
                    vbmain.innerHTML=" انتخاب مقطع و رشته"
                    vbsec.innerHTML="با تیم کنکور به بهترین مشاور های درسی و برترین های کشور دسترسی پیدا خواهید کرد تا برنامه منظم برای پیشرفت شما سازمان دهی  کنندبا تیم کنکور به بهترین مشاور های درسی و برترین های کشور دسترسی پیدا خواهید کرد تا برنامه منظم برای پیشرفت شما سازمان دهی  کنند"
                   
                   }, 600);
                flag = 5;
                mainc5.className="mainC on"

                mainc1.className="mainC off"
                mainc3.className="mainC off"
                mainc2.className="mainC off"
                mainc4.className="mainC off"
                return flag
            }
        }
    }

    render() { 
        this.ciclehoevr()
        return (

            <React.Fragment>
                <div className="Lp3 row">
                    <h1 className="lp3m1 text-end "> چطوری شروع کنم</h1>
                    <h2 className="lp3m2 text-end "> تیم کنکور یک سرویس مشاوره درسی و کنکوری انلاین است  که دارای ویژگی های زیر است</h2>
                    <div className="stepsH ">
                        
                        <div className="steps step1">
                            <div id="mainc1"className="mainC on">
                                <div className="mainCB off"></div>
                                <div className="mainCM1 on">01</div>
                                <div className="mainCL on"></div>
                                <div className="mainCM2 on">ثبت نام</div>
                            </div>
                            <div className="pointC"></div>
                        </div>
                        <div className="steps step2">
                            <div id="mainC2" className="mainC off">
                                <div className="mainCB on"></div>
                                <div className="mainCM1 off">02</div>
                                <div className="mainCL off"></div>
                                <div className="mainCM2 off">ثبت نام</div>
                            </div>
                            <div className="pointC"></div>
                        </div>
                        <div className="steps step3">
                            <div id="mainC3" className="mainC off">
                                <div className="mainCB on"></div>
                                <div className="mainCM1 off">03</div>
                                <div className="mainCL off"></div>
                                <div className="mainCM2 off">ثبت نام</div>
                            </div>
                            <div className="pointC"></div>
                        </div>
                        <div className="steps step4">
                            <div id="mainC4" className="mainC off">
                                <div className="mainCB on"></div>
                                <div className="mainCM1 off">04</div>
                                <div className="mainCL off"></div>
                                <div className="mainCM2 off">ثبت نام</div>
                            </div>
                            <div className="pointC"></div>
                        </div>
                        <div className="steps step5">
                            <div id="mainC5" className="mainC off">
                                <div className="mainCB on"></div>
                                <div className="mainCM1 off">05</div>
                                <div className="mainCL off"></div>
                                <div className="mainCM2 off">ثبت نام</div>
                            </div>
                            <div className="pointC"></div>
                        </div>
                    <div className="viewbox">
                        <h1 id="vbmain"className="vbmain">ثبت نام</h1>
                        <div className="vbl"></div>
                        <h2  id="vbsec" className="vbsec text-justify">با تیم کنکور به بهترین مشاور های درسی و برترین های کشور دسترسی پیدا خواهید کرد تا برنامه منظم برای پیشرفت شما سازمان دهی  کنندبا تیم کنکور به بهترین مشاور های درسی و برترین های کشور دسترسی پیدا خواهید کرد تا برنامه منظم برای پیشرفت شما سازمان دهی  کنند</h2>
                        <div id="vbback"className="vbback"></div>
                        <div id="vbnum" className="vbnum">01</div>
                        <div className="vbnl1"></div>
                        <div className="vbnl2"></div>
                        <div id="ro" className="ro off"></div>
                    </div>

                    </div>
                </div>
            </React.Fragment>

          );
    }
}
 
export default Lpage3;