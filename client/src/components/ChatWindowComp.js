import React, { Fragment} from "react";
import "./extrastyles.css";
import Nico from '../Icons/Niko Bellic.jpg'



const ChatWindow = () => {

    return(
        <Fragment>
            <div class="textContainer">
            <div class ="Navbar">
                <a href="#top" class="appName">Baat</a>
                <img src ={Nico} class="myProfile" alt="" />
            </div>

            <div className="column lg-6 md-6" id="largeChatWindow">
              
              <div class="userNavbar">
              <span class="userNameBig">User</span>
              <i className="ms-Icon ms-Icon--GlobalNavButton right"></i>
              </div>

              <div class="box-input leftTriangle">
                
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc mollis facilisis luctus. Nullam augue ante, varius vel tellus in, finibus elementum tellus. Maecenas faucibus aliquam orci, eget fermentum tortor tempus eget. Integer ut venenatis nulla. Aenean efficitur, neque in finibus aliquet, urna sapien consectetur justo, et cursus velit quam ut orci.
                
                </div>

              <div class="box-output rightTriangle">
                
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc mollis facilisis luctus. Nullam augue ante, varius vel tellus in, finibus elementum tellus. Maecenas faucibus aliquam orci, eget fermentum tortor tempus eget. Integer ut venenatis nulla. Aenean efficitur, neque in finibus aliquet, urna sapien consectetur justo, et cursus velit quam ut orci.
                
                </div>

              <div class="userInputs">
                <textarea class="textInput" type = "text" placeholder="Type a message" />
              </div>
              <div class="userButtons">
                <button class="primary_blue dlevel2 sendButton">Send</button> 
              </div>
            </div>

            <div className="column sm-9" id ="smallChatWindow">
            <div class="userNavbar">
            <i className="ms-Icon ms-Icon--ReplyAlt left"></i>
            <span class="userNameSmall">User</span>
            <i className="ms-Icon ms-Icon--GlobalNavButton right"></i>
            </div>

            <div class="box-input leftTriangle">
                
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc mollis facilisis luctus. Nullam augue ante, varius vel tellus in, finibus elementum tellus. Maecenas faucibus aliquam orci, eget fermentum tortor tempus eget. Integer ut venenatis nulla. Aenean efficitur, neque in finibus aliquet, urna sapien consectetur justo, et cursus velit quam ut orci.
                
                </div>

              <div class="box-output rightTriangle">
                
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc mollis facilisis luctus. Nullam augue ante, varius vel tellus in, finibus elementum tellus. Maecenas faucibus aliquam orci, eget fermentum tortor tempus eget. Integer ut venenatis nulla. Aenean efficitur, neque in finibus aliquet, urna sapien consectetur justo, et cursus velit quam ut orci.
                
                </div>

              <div class="userInputs">
                <textarea class="textInput" type = "text" placeholder="Type a message" />
              </div>
              <div class="userButtons">
                <button class="primary_blue dlevel2 sendButton">Send</button> 
              </div>

            </div>
          </div>
        </Fragment>
    );

}

export default ChatWindow;