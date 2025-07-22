import React, { useState } from "react";
import SetupScreen from "./SetupScreen";
import GameScreen from "./GameScreen";

export default function App() {
  const [config, setConfig] = useState(null);
  return config ? <GameScreen config={config} /> : <SetupScreen onStart={setConfig} />;
}
