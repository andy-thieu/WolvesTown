"use client";

import { useState } from 'react';
import axios from "axios";

const Home = () => {
  const [lobbyId, setLobbyId] = useState('');
  const [playerName, setPlayerName] = useState('');
  const [createdLobbyId, setCreatedLobbyId] = useState('');

  const createLobby = async () => {
    await axios.post('/api/create-lobby').then((res) => {
        let data = res.data;
        setCreatedLobbyId(data.id);
    });
  };

  const joinLobby = async () => {
    await axios.post('/api/join-lobby', { lobbyId: lobbyId, playerName: playerName }).then((res) => {
        let data = res.data;
        console.log('Joined lobby:', data.players);
    });
  };

  return (
      <div>
        <h1>Werewolf Game</h1>

        <button onClick={createLobby}>Create Lobby</button>
        {createdLobbyId && <p>Created Lobby ID: {createdLobbyId}</p>}

        <input
            type="text"
            placeholder="Enter Lobby ID"
            value={lobbyId}
            onChange={(e) => setLobbyId(e.target.value)}
        />
        <input
            type="text"
            placeholder="Enter Your Name"
            value={playerName}
            onChange={(e) => setPlayerName(e.target.value)}
        />
        <button onClick={joinLobby}>Join Lobby</button>
      </div>
  );
};

export default Home;
