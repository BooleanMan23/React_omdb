import React from 'react';

class FormInput extends React.Component{
    state = {keyword: ''};
    onInputChange = (event) =>{
        this.setState({keyword:event.target.value});
    }
    
    onClickButton = (event) =>{
        event.preventDefault();
        this.props.onSubmit(this.state.keyword);
    }

    onClickButtonTwo= (event) =>{
        event.preventDefault();
        console.log("on click button two");
    }
    render(){
        return (
            <form className="form-inline my-2 my-lg-0">
                <input className="form-control mr-sm-2" onChange={this.onInputChange} placeholder={this.props.placeholder} />
                <button className="btn btn-outline-success my-2 my-sm-0" onClick= {this.onClickButton} type="submit">{this.props.buttonText}</button>
                
            </form>
        );
    }
}

export default FormInput;