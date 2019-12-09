import React from 'react';
import Header from './Header';
import Inventory from './Inventory';
import Order from './Order';
import samplefishes from '../sample-fishes'
import Fish from './Fish';


class App extends React.Component {
    state = {
        fishes: {},
        order: {}
    }
    addFish = fish => {
        // 1. Take a copy of the existing state
        const fishes = { ...this.state.fishes };
        //2. Add new fish to the fishes variable
        fishes[`fish${Date.now()}`] = fish;
        //3. update the state with the new fishes
        this.setState({ fishes });
    };

    loadSampleFishes = () => {
        this.setState({ fishes: samplefishes });
    };

    render() {
        return (
            <div className="catch-of-the-day">
                <div className="menu">
                    <Header tagline="Toby is a Boss" age={500} cool={true}/>
                    <ul className="fishes">
        {Object.keys(this.state.fishes).map(key => <Fish key={key} details={this.state.fishes[key]}/>)}
                    </ul>
                </div>
                <Order/>
                <Inventory 
                addFish={this.addFish} 
                loadSampleFishes={this.loadSampleFishes} 
                />
            </div>
        );
    }
}

export default App;
