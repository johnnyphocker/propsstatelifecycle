import React, {Component} from 'react';


class Ironhacker extends Component {

    render() {
        return(
            <h1>{this.props.name} y tengo {this.props.age}</h1>
        )
    }
}

export default Ironhacker;