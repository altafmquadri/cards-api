import React, { useMemo } from 'react';
import './Card.css'


// class Card extends Component {
//     constructor(props) {
//         super(props);
//         let angle = Math.random() * 90 - 45
//         let xPos = Math.random() * 40 - 20
//         let yPos = Math.random() * 40 - 20
//         this._transform = `translate(${xPos}px, ${yPos}px) rotate(${angle}deg)`
//     }
//     render() {
//         return (<img style={{ transform: this._transform }} className="Card" alt={this.props.name} src={this.props.cardImg} />);
//     }
// }



const getStyle = () => {
    let angle = Math.random() * 90 - 45
    let xPos = Math.random() * 40 - 20
    let yPos = Math.random() * 40 - 20
    let transform = `translate(${xPos}px, ${yPos}px) rotate(${angle}deg)`
    return transform
}



const Card = (props) => {
    let current = useMemo(getStyle, [])
    return (
        <img style={{ transform: current }} className="Card" alt={props.name} src={props.cardImg} />
    )
}

export default Card;