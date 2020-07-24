import React, { Fragment } from "react";
import "./extrastyles.css";
import Nico from '../Icons/Niko Bellic.jpg';
import Michael from '../Icons/Michael De Santa.jpg';
import Jaqcueline from '../Icons/Jaqcueline.jpg';
import Trevor from '../Icons/Trevor Philips.jpg';
import Franklin from '../Icons/Franklin Clinton.jpg';
import Tracey from '../Icons/Tracey Townley.jpg';
import chatWindow from './ChatWindowComp';

const Messaging = () => {

    return(
        <Fragment>

        <body>
            <div class ="Navbar">
                <a href="#top" class="Name">Baat</a>
                <img src ={Nico} class="myProfile" alt="" />
            </div>
            <div class="row">
            <div className="column lg-3 md-3" id="largeContacts">
                    <ul>
                    <li>
                        <img src = {Michael} alt ="" />
                      <a>  Michael De Santa </a> </li>
                    <li>
                        <img src = {Jaqcueline} alt ="" />
                      <a>  Jaqcueline</a>  </li>
                    <li>
                        <img src = {Trevor} alt ="" />
                      <a>  Trevor Philips</a>  </li>
                    <li>
                        <img src = {Franklin} alt ="" />
                      <a>  Franklin Clinton</a>   </li>
                    <li>
                        <img src = {Tracey} alt ="" />
                      <a>  Tracey Townley </a>  </li></ul>
            </div>
            <div className="column lg-6 md-6" id="largeChatWindow">
              <div navbar></div>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec auctor tempus felis a porta. 
                   Fusce finibus lobortis ante. Vivamus at luctus dolor. Nam laoreet, quam ac faucibus finibus, 
                   quam ex rhoncus tellus, ut tempor justo urna sed ipsum. Ut dignissim iaculis nibh, vitae fringilla
                   est interdum eget. Vivamus id nisl ultricies, tempor elit ut, tempus nisi. Donec elit felis, tincidunt
                   nec quam in, consectetur tincidunt dui. Duis volutpat cursus ante ut congue.
                   Donec efficitur nunc ac est commodo congue. Donec suscipit turpis in leo ultricies pharetra. Nulla facilisi.
                   Cras efficitur dignissim leo maximus iaculis. Sed tincidunt pharetra turpis, vitae efficitur 
                   libero sollicitudin eget. Morbi hendrerit ex a blandit porta. Duis vitae volutpat arcu, eu tempus lectus.
                   Vivamus quis nisl placerat, commodo sapien eget, cursus lacus. Vestibulum vitae dui at velit porttitor laoreet.
                  Ut pharetra rhoncus porttitor. Nullam libero enim, commodo quis mauris quis, convallis condimentum ligula.
                    Donec malesuada diam diam. In ornare sed lorem et suscipit. Integer eu mattis erat. Integer rhoncus ipsum 
                    a mauris pulvinar auctor. Nam fermentum urna et sem porta consequat. Pellentesque nec dui sodales, varius orci ut,
                     euismod lectus. Mauris auctor metus quis molestie sodales. Donec rutrum nec arcu eget maximus.
                      Quisque molestie in tellus vitae efficitur. Pellentesque egestas lectus id laoreet finibus.
                      Donec malesuada diam diam. In ornare sed lorem et suscipit. Integer eu mattis erat. Integer rhoncus ipsum 
                    a mauris pulvinar auctor. Nam fermentum urna et sem porta consequat. Pellentesque nec dui sodales, varius orci ut,
                     euismod lectus. Mauris auctor metus quis molestie sodales. Donec rutrum nec arcu eget maximus.
                      Quisque molestie in tellus vitae efficitur. Pellentesque egestas lectus id laoreet finibus.</p>
                    <div class="inputs">
                    <textarea class="textInput" placeholder="Send a message"></textarea>
                    <button><i className="ms-Icon ms-Icon--Add"></i></button>
                    <button><i className="ms-Icon ms-Icon--ChevronRightSmall"></i></button>
                    </div>
            </div>
            </div>
            

            <div className="column sm-9" id ="Small">
                <div class="miniNavbar">
                    <a href="#abc" class="messaging">Messaging </a>
                    <a href='./CallsView.js' class="calls">Calls </a>
                    <a href='./ProfileView.js' class="stories">Stories </a>
                </div>
                <ul>
                    <li>
                        <img src = {Michael} alt ="" />
                      <a>  Michael De Santa </a> </li>
                    <li>
                        <img src = {Jaqcueline} alt ="" />
                      <a>  Jaqcueline</a>  </li>
                    <li>
                        <img src = {Trevor} alt ="" />
                      <a>  Trevor Philips</a>  </li>
                    <li>
                        <img src = {Franklin} alt ="" />
                      <a>  Franklin Clinton</a>   </li>
                    <li>
                        <img src = {Tracey} alt ="" />
                      <a>  Tracey Townley </a>  </li></ul>
            </div>
        </body>
        </Fragment>
    );
}

export default Messaging;