import React from 'react';

import Ironhacker from './Ironhacker';

class Ironhackers extends React.Component {
    
    setName = () => {
        this.props.getName('Joss')
    }
    
    render() {
        return(
            <div>
                <button onClick={() => this.props.getName('Joss')}>Cambiar nombre</button>
            </div>
            // <Ironhacker name={props.name} age={props.age} />
        )
    }
}

export default Ironhackers;