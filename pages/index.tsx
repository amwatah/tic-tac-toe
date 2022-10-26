import { Button } from "@mantine/core";
import { openConfirmModal } from "@mantine/modals";
import { useAtom } from "jotai";
import { useRouter } from "next/router";
import React from "react";
import Board from "../components/Board";
import {
  activePlayerAtom,
  clearAllAtom,
  gameWonAtom,
  PlayerOneMovesAtom,
  PlayerTwoMovesAtom,
} from "../store";

const Home = () => {
  const [activePlayer, setActivePlayer] = useAtom(activePlayerAtom);
  const [gameWon, setGameWon] = useAtom(gameWonAtom);
  const [playerOneMoves, setPlayerOneMoves] = useAtom(PlayerOneMovesAtom);
  const [playerTwoMoves, setPlayerTwoMoves] = useAtom(PlayerTwoMovesAtom);
  const router = useRouter();
  return (
    <div className=" w-screen h-screen flex flex-col items-center justify-center">
      <>
        <Board />
      </>

      {gameWon && (
        <>
          {openConfirmModal({
            title: "GAME OVER",
            children: (
              <>
                <h1>
                  {activePlayer === 1 ? "PLAYER X WINS" : "PLAYER O WINS"}
                </h1>
              </>
            ),
            labels: { confirm: "PLAY AGAIN", cancel: "EXIT" },
            onCancel: () => console.log("Cancel"),
            onConfirm: () => {
              setPlayerOneMoves([]);
              setPlayerTwoMoves([]);
              router.reload();
              setGameWon(false);
            },
            centered: true,
          })}
        </>
      )}
    </div>
  );
};

export default Home;
