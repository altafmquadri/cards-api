import React from 'react';

const Card = (props) => {
    return (
        <div className="Card">
            <img alt={props.name} src={props.cardImg} />
        </div>
    )
}

export default Card