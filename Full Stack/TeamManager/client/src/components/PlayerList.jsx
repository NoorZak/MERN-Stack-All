  
//Dependency imports
import React from 'react';

const PlayerList = props => {
    const {players, handleDelete} = props;

    return (
        <div >
            <table>
                <thead>
                    <tr>
                        <th>Team Name</th>
                        <th>Preferred Position</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        players.map((player, index) => {
                            return (
                                <tr key={index}>
                                    <td>{player.name}</td>
                                    <td>{player.preferredPosition}</td>
                                    <td>
                                        <button
                                            onClick={() => handleDelete(player._id)}
                                        >Delete</button>
                                    </td>
                                </tr>
                            );
                        })
                    }
                </tbody>
            </table>
        </div>
    );
}

export default PlayerList;