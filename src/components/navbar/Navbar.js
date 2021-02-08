import React from 'react';

class Navbar extends React.Component{

    renderElement = (tag) =>{
         const navLinkEl = [];
         this.props.children.forEach(children => {
             if(children.type.name === tag){
                 navLinkEl.push(children);
             }
         });
        return navLinkEl;
    }
    render(){
        return (
            <nav className="navbar navbar-expand-sm navbar-dark bg-dark">
            <div className="container">
              <a className="navbar-brand" href="#">{this.props.title}</a>
              <div className="collapse navbar-collapse" >
                <ul className="navbar-nav mr-auto">
                    {this.renderElement("NavItem")}
                </ul>
                    {this.renderElement("FormInput")}
              </div>
            </div>
          </nav>
        );
    }
}

export default Navbar;