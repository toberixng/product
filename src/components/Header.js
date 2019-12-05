import React, { Component } from 'react';

const Header = ({tagline}) =>  (
        <header className="top">
            <h1>Catch 
                <span className="ofThe"></span>
                <span className="of">Of</span>
                <span className="the">The</span>
                Day
            </h1>
            <h3 className="tagline">
            <span>{tagline}</span>
            </h3>
        </header>
    )


// class Header extends Component {
//     render() {
//         return (
//             <header className="top">
//                 <h1>Catch 
//                     <span className="ofThe"></span>
//                     <span className="of">Of</span>
//                     <span className="the">The</span>
//                     Day
//                 </h1>
//                 <h3 className="tagline">
//                 <span>{this.props.tagline}</span>
//                 </h3>
//             </header>
//         )
//     }
// }
export default Header;
