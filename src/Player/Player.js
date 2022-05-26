import React from 'react';
import './Player.css'

const Player = (props) => {
    const { name, img, role, salary } = props.player;
    return (
        <div className='player-container'>
            <div className="image">
                <img src={img} alt="" />
            </div>
            <div className="info">
                <h2>{name}</h2>
                <h3>{role}</h3>
                <h3>Cost: ${salary}</h3>
                <button type="button" class="btn btn-success" onClick={() => 
                    { props.handleCart(props.player) }}
                    >Add Player</button>

            </div>

        </div>
    );
};

export default Player;