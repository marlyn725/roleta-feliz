import React, { useState } from "react";

export default function SetupScreen({ onStart }) {
  const [orientation, setOrientation] = useState("");
  const [player1, setPlayer1] = useState({ name: "", gender: "" });
  const [player2, setPlayer2] = useState({ name: "", gender: "" });

  const isFormValid =
    orientation && player1.name && player1.gender && player2.name && player2.gender;

  const handleSubmit = () => {
    if (!isFormValid) return;
    onStart({
      orientation,
      players: [{ ...player1, points: 0 }, { ...player2, points: 0 }],
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-black via-gray-900 to-black text-white flex items-center justify-center p-4">
      <div className="bg-gray-800 rounded-2xl shadow-2xl p-6 w-full max-w-md">
        <h1 className="text-3xl font-bold text-center mb-6">🎲 Roleta Feliz</h1>
        <div className="mb-4">
          <label className="block mb-1 font-semibold">Orientação:</label>
          <select
            className="w-full rounded-md p-2 text-black"
            value={orientation}
            onChange={(e) => setOrientation(e.target.value)}
          >
            <option value="">Selecione</option>
            <option value="heterossexual">Heterossexual</option>
            <option value="homossexual">Homossexual</option>
          </select>
        </div>
        <div className="mb-4">
          <label className="block mb-1 font-semibold">Nome do Jogador 1:</label>
          <input
            className="w-full rounded-md p-2 text-black"
            type="text"
            placeholder="Digite o nome"
            value={player1.name}
            onChange={(e) => setPlayer1({ ...player1, name: e.target.value })}
          />
          <select
            className="w-full mt-2 rounded-md p-2 text-black"
            value={player1.gender}
            onChange={(e) => setPlayer1({ ...player1, gender: e.target.value })}
          >
            <option value="">Gênero</option>
            <option value="masculino">Masculino</option>
            <option value="feminino">Feminino</option>
          </select>
        </div>
        <div className="mb-4">
          <label className="block mb-1 font-semibold">Nome do Jogador 2:</label>
          <input
            className="w-full rounded-md p-2 text-black"
            type="text"
            placeholder="Digite o nome"
            value={player2.name}
            onChange={(e) => setPlayer2({ ...player2, name: e.target.value })}
          />
          <select
            className="w-full mt-2 rounded-md p-2 text-black"
            value={player2.gender}
            onChange={(e) => setPlayer2({ ...player2, gender: e.target.value })}
          >
            <option value="">Gênero</option>
            <option value="masculino">Masculino</option>
            <option value="feminino">Feminino</option>
          </select>
        </div>
        <button
          className={`w-full rounded-full p-3 font-bold ${
            isFormValid ? "bg-pink-600 hover:bg-pink-700" : "bg-gray-500 cursor-not-allowed"
          } transition duration-300`}
          disabled={!isFormValid}
          onClick={handleSubmit}
        >
          Começar Jogo
        </button>
      </div>
    </div>
  );
}
