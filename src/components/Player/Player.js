import React from 'react';
import './Player.css'

const Player = (props) => {
    // console.log(props);
    const { nickname, name, age, born, img, score } = props.player;

    return (
        // Player Card
        <div className='player col-4 mx-3'>
            <img className='img-fluid' src={img} alt="" />
            <h3 className='my-3'><i className="fab fa-steam"></i> {nickname}</h3>
            <h5 className='text-muted'>Name: {name}</h5>
            <h5 className='text-muted'>Age: {age}</h5>
            <h5 className='text-muted'>Born in: {born}</h5>
            <h5 className='text-muted'>Skill: {score}</h5>
            <button
                onClick={()=> props.handleTeamAdd(props.player)}
                className='btn-warning rounded-3'> <i className="fas fa-cart-plus me-2"></i> Add to team</button>
            <a href="#"><i className="fab fa-youtube mx-4 yt"></i></a>
            <a href="#"><i className="fab fa-twitter twitter"></i></a>
        </div>
    );
};

export default Player;