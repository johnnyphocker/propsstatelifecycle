import React, {Component} from "react";
// import "./App.css";
import Ironhackers from './components/Ironhackers';
  

class App extends Component {
    

    state = {
        name: 'JP',
        clickCount: 0,
        ironhacker: ''
    }

    setName = () => {
        this.setState({name:'Germán'})
    }

    clickHandler = () => {
        this.setState({
        clickCount: this.state.clickCount+1
        })

    }

    getName = (name) => {
        this.setState({ironhacker:name})
    }

    render() {
        return (
        //     <div className="App">
        //     <h1> Hello Ironhackers! </h1>
        //     <p>Count is: {this.state.clickCount}</p>
        //     <button onClick={this.clickHandler}>Click me</button>
            
        //     <User theColor={this.state.backColor} firstName={this.state.userA.firstName} lastName={this.state.userA.lastName} image={this.state.userA.avatarUrl} />
        //     <User firstName={this.state.userB.firstName} lastName={this.state.userB.lastName} image={this.state.userB.avatarUrl} />     
        // </div>

        <div>
            <h1>Mi nombre es {this.state.ironhacker}</h1>

            <Ironhackers getName={this.getName} {...this.state} />

            <button onClick={this.setName} >Click</button>
            <button onClick={this.clickHandler} >Sumar</button>
        </div>
        );
    }





}



export default App;