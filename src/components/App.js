import React from 'react';
import Header from './Header';
import Inventory from './Inventory';
import Order from './Order';


class App extends React.Component {
    state = {
        fishes: {},
        order: {}
    }
    render() {
        return (
            <div className="catch-of-the-day">
                <div className="menu">
                    <Header tagline="Toby is a Boss" age={500} cool={true}/>
                </div>
                <Order/>
                <Inventory/>
            </div>
        );
    }
}

export default App;
