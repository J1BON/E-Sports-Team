import React from 'react';
import './Team.css';

const Team = (props) => {
    const { team } = props;
    let total = 0;
    let name = []
    for (const player of team) {
        total = total + player.score;
        name = (name + ' ' + player.nickname+ ',');
    }
    
    return (
        <div >
            <h1 className='mb-4'>Team Statistics</h1>
            <h4 className='mb-4'>Added: <small> {name}</small>
            </h4>
            <h4>Team member added total: {props.team.length}</h4>
            <h4>Total skill : {total}</h4>
        </div>
    );
};

export default Team;