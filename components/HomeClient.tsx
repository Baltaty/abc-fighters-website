"use client";
import { useState } from "react";
import GameAlertModal from "@/components/GameAlertModal";

export default function HomeClient() {
  const [gameAlertOpen, setGameAlertOpen] = useState(false);
  return <GameAlertModal isOpen={gameAlertOpen} onClose={() => setGameAlertOpen(false)} />;
}
