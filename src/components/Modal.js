import React from 'react';

class Modal extends React.Component{
   
    render(){
     
        return (
            <div class="modal fade" id="movieModal">
                <div class="modal-dialog" >
                    <div class="modal-content">
                        <div class="modal-header">
                            <h5 class="modal-title" >{this.props.title}</h5>
                            <button type="button" class="close" data-dismiss="modal">
                            <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div class="modal-body">
                            {this.props.children}
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Modal;