import React, { useEffect, useState } from 'react';
import "./sidebar.scss"
import imagefile from './ssulss.jpg';
import {TelephoneFill, EnvelopeFill, Github} from 'react-bootstrap-icons';
import { Link } from 'react-router-dom';


    // for(let list of document.getElementsByName("list-linked")){
    //         if(list.href===nowLocation){
    //             list.className = "linked"
    //         }
    //         else{
    //             list.className = "list-link"
    //         }
    //     }
function SideBar() {

    // FIXME: 기존 코드는 url로 접근시 해당 메뉴 list가 active 되지 않음

    return(
        <div className="main">
            <div className="container">
                <img src={imagefile} alt="profile"/>
            </div>
            <div className="container">
                <div className="menutitle">Contact</div>
                <div className="flex-container">
                    <div className="bt-container">
                        <button><TelephoneFill id="icon"/></button> <span className="bt-text"> 010-4334-5174</span>
                    </div>
                    <div className="bt-container">
                        <button><EnvelopeFill id="icon"/></button> <span className="bt-text"> thflthdi@gmail.com</span>
                    </div>
                    <div className="bt-container">
                        <button><Github id="icon"/></button><span className="bt-text"> github.com/thflthdi</span> 
                    </div>
                </div>
                
            </div>

            <div className="container" >
                <div className="menutitle">List</div>
                <div className="list-container">
                    <Link className="list-link" name="list-linked" to="/">About</Link>
                </div>
                <div className="list-container">
                <Link className="list-link"  name="list-linked" to="/skill">Skill</Link>
                </div>
                <div className="list-container">
                <Link className="list-link"  name="list-linked" to="/project">Project</Link>
                </div>
                <div className="list-container">
                <Link className="list-link"  name="list-linked" to="/education">Education</Link>
                </div>
            </div>
            <div className="container">
                <button id="down-btn" title="PDF로 이력서 다운로드">Download</button>
            </div>
        
        </div>        
    )
}
export default SideBar;