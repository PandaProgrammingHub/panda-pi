import React, { Component } from 'react';

class Leftbar extends Component {
    myFunction = prop => () => {
        var x = document.getElementById(prop);
        if (x.className.indexOf("w3-show") === -1) {
            x.className += " w3-show";
            x.previousElementSibling.className += " w3-theme-d1";
        } else { 
            x.className = x.className.replace("w3-show", "");
            x.previousElementSibling.className = 
            x.previousElementSibling.className.replace(" w3-theme-d1", "");
        }
    }
  render() {
    // const {classes} = this.props;
    return (
        <div className="w3-col m3">
          <div className="w3-card w3-round w3-white">
            <div className="w3-container">
             <h4 className="w3-center">My Profile</h4>
             <p className="w3-center"><img  src="https://www.w3schools.com/w3images/avatar3.png" className="w3-circle" style={{"height":"106px","width":"106px"}} alt="Avatar"/></p>
             <hr />
             <p><i className="fa fa-pencil fa-fw w3-margin-right w3-text-theme"></i> Designer, UI</p>
             <p><i className="fa fa-home fa-fw w3-margin-right w3-text-theme"></i> London, UK</p>
             <p><i className="fa fa-birthday-cake fa-fw w3-margin-right w3-text-theme"></i> April 1, 1988</p>
            </div>
          </div>
          <br />
          <div className="w3-card w3-round">
            <div className="w3-white">
              <button onClick={this.myFunction('Demo1')} className="w3-button w3-block w3-theme-l1 w3-left-align"><i className="fa fa-circle-o-notch fa-fw w3-margin-right"></i> My Groups</button>
              <div id="Demo1" className="w3-hide w3-container">
                <p>Some text..</p>
              </div>
              <button onClick={this.myFunction('Demo2')} className="w3-button w3-block w3-theme-l1 w3-left-align"><i className="fa fa-calendar-check-o fa-fw w3-margin-right"></i> My Events</button>
              <div id="Demo2" className="w3-hide w3-container">
                <p>Some other text..</p>
              </div>
              <button onClick={this.myFunction('Demo3')} className="w3-button w3-block w3-theme-l1 w3-left-align"><i className="fa fa-users fa-fw w3-margin-right"></i> My Photos</button>
              <div id="Demo3" className="w3-hide w3-container">
             <div className="w3-row-padding">
             <br />
               <div className="w3-half">
                 <img alt="" src="https://www.w3schools.com/w3images/lights.jpg" style={{"width":"100%"}} className="w3-margin-bottom" />
               </div>
               <div className="w3-half">
                 <img alt="" src="https://www.w3schools.com/w3images/nature.jpg" style={{"width":"100%"}} className="w3-margin-bottom" />
               </div>
               <div className="w3-half">
                 <img alt="" src="/w3images/mountains.jpg" style={{"width":"100%"}} className="w3-margin-bottom" />
               </div>
               <div className="w3-half">
                 <img alt="" src="https://www.w3schools.com/w3images/forest.jpg" style={{"width":"100%"}} className="w3-margin-bottom" />
               </div>
               <div className="w3-half">
                 <img alt="" src="https://www.w3schools.com/w3images/nature.jpg" style={{"width":"100%"}} className="w3-margin-bottom" />
               </div>
               <div className="w3-half">
                 <img alt="" src="https://www.w3schools.com/w3images/snow.jpg" style={{"width":"100%"}} className="w3-margin-bottom" />
               </div>
             </div>
              </div>
            </div>      
          </div>
          <br />
        </div>
    );
  }
}

export default Leftbar;
