import React, { useEffect, useState } from 'react';
import Player from '../Player/Player';
import Team from '../Team/Team';
import './Players.css'

const Players = () => {
    const [players, setPlayers] = useState([]);
    const [team, setTeam] = useState([])

    useEffect(() => {
        fetch('./players.JSON')
            .then(res => res.json())
            .then(data => setPlayers(data))
    }, []);

    const handleTeamAdd = (player) => {
        const newTeam = [...team, player];
        setTeam(newTeam)
    }

    return (
        <div className='main'>
            <div className="players-area row g-4">
                {
                    players.map(player => <Player
                        key={player.nickname}
                        handleTeamAdd = {handleTeamAdd}
                        player={player}></Player>)
                }
            </div>
            <div className="team-area">
               <Team team={team}></Team>
            </div>
        </div>
    );
};

export default Players;