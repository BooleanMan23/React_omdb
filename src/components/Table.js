import React from 'react';

class Table extends React.Component{
    
    render(){
        console.log(this.props.movie);
        return (
            <table class="table table-bordered">
                <tbody>
                    <tr>
                        <th scope="row">Title</th>
                        <td>{this.props.movie.Title}</td>
                        </tr>
                    <tr>
                        <th scope="row">Released Date</th>
                        <td>{this.props.movie.Released}</td>
                    </tr>
                    <tr>
                        <th scope="row">Plot</th>
                        <td>{this.props.movie.Plot}</td>
                    </tr>
                    <tr>
                        <th scope="row">Actor</th>
                        <td>{this.props.movie.Actors}</td>
                    </tr>
                </tbody>
                </table>
        );
    }
}

export default Table;