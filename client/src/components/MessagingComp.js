import React, { Fragment} from "react";
import "./extrastyles.css";
import Nico from '../Icons/Niko Bellic.jpg';
import Michael from '../Icons/Michael De Santa.jpg';
import Jaqcueline from '../Icons/Jaqcueline.jpg';
import Trevor from '../Icons/Trevor Philips.jpg';
import Franklin from '../Icons/Franklin Clinton.jpg';
import Tracey from '../Icons/Tracey Townley.jpg'; 

const Messaging = () => {

    return(
        <Fragment>
            <div class ="Navbar">
                <a href="#top" class="appName">Baat</a>
                <img src ={Nico} class="myProfile" alt="" />
            </div>

            <div className="column lg-3 md-3" id="largeContacts">
                <ul>
                  <li>
                      <img src = {Michael} alt ="" />
                      <a href="/chatwindow">  Michael De Santa </a> </li>
                  <li>
                      <img src = {Jaqcueline} alt ="" />
                      <a href="/chatwindow">  Jaqcueline</a>  </li>
                  <li>
                      <img src = {Trevor} alt ="" />
                      <a href="/chatwindow">  Trevor Philips</a>  </li>
                  <li>
                      <img src = {Franklin} alt ="" />
                      <a href="/chatwindow">  Franklin Clinton</a>   </li>
                  <li>
                      <img src = {Tracey} alt ="" />
                      <a href="/chatwindow">  Tracey Townley </a>  </li>
                </ul>
            </div>

            <div className="column sm-9" id ="smallContacts">
              <div class="miniNavbar">
                    <div class="navbarOptions">
                      <a href="/messaging" class="messaging left active">Messaging</a>
                      <a href="/calls" class="calls">Calls</a>
                      <a href="/stories" class="stories right">Stories</a>
                    </div>
              </div>
                <ul>
                    <li>
                        <img src = {Michael} alt ="" />
                        <a href="/chatwindow">  Michael De Santa </a> </li>
                    <li>
                        <img src = {Jaqcueline} alt ="" />
                        <a href="/chatwindow">  Jaqcueline</a>  </li>
                    <li href="/chatwindow">
                        <img src = {Trevor} alt ="" />
                        <a href="/chatwindow">  Trevor Philips</a>  </li>
                    <li>
                        <img src = {Franklin} alt ="" />
                        <a href="/chatwindow">  Franklin Clinton</a>   </li>
                    <li>
                        <img src = {Tracey} alt ="" />
                        <a href="/chatwindow">  Tracey Townley </a>  </li>
                </ul>
            </div>
        </Fragment>
    );
}

export default Messaging;