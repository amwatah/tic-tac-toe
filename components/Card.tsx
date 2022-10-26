import { Button } from "@mantine/core";
import React, { useState } from "react";
import { ImCross } from "react-icons/im";
import { BsCircle } from "react-icons/bs";
import { useAtom } from "jotai";
import {
  activePlayerAtom,
  clearAllAtom,
  gameWonAtom,
  PlayerOneMovesAtom,
  PlayerTwoMovesAtom,
} from "../store";
interface Props {
  cardNumber: number;
}
const Card = ({ cardNumber }: Props) => {
  const [activePlayer, setActivePlayer] = useAtom(activePlayerAtom);
  const [playerOneMoves, setPlayerOneMoves] = useAtom(PlayerOneMovesAtom);
  const [playerTwoMoves, setPlayerTwoMoves] = useAtom(PlayerTwoMovesAtom);
  const [gameWon, setGameWon] = useAtom(gameWonAtom);
  const [clearAll, setClearAll] = useAtom(clearAllAtom);
  const [iconToShow, setIconToShow] = useState<"x" | "0">("x");
  const [tileClicked, setTileClicked] = useState(false);

  clearAll ? setTileClicked(false) : null;
  function checkWinner(moves: number[]) {
    const orderedMoves = moves.sort((a, b) => {
      return a - b;
    });
    const movesMatchWin = (playedMoves: number[], winningCombo: number[]) =>
      winningCombo.every((number) => playedMoves.includes(number));
    movesMatchWin(orderedMoves, [1, 2, 3]) ? setGameWon(true) : null;
    movesMatchWin(orderedMoves, [4, 5, 6]) ? setGameWon(true) : null;
    movesMatchWin(orderedMoves, [7, 8, 9]) ? setGameWon(true) : null;
    movesMatchWin(orderedMoves, [1, 4, 7]) ? setGameWon(true) : null;
    movesMatchWin(orderedMoves, [2, 5, 8]) ? setGameWon(true) : null;
    movesMatchWin(orderedMoves, [3, 6, 9]) ? setGameWon(true) : null;
    movesMatchWin(orderedMoves, [1, 5, 9]) ? setGameWon(true) : null;
    movesMatchWin(orderedMoves, [3, 5, 7]) ? setGameWon(true) : null;
  }

  function tileLogic() {
    checkWinner(playerOneMoves);
    checkWinner(playerTwoMoves);

    if (tileClicked === false && gameWon === false) {
      checkWinner(playerOneMoves);
      checkWinner(playerTwoMoves);

      activePlayer === 1 ? setIconToShow("x") : setIconToShow("0");

      activePlayer === 1
        ? setPlayerOneMoves([...playerOneMoves, cardNumber])
        : setPlayerTwoMoves([...playerTwoMoves, cardNumber]);
      checkWinner(playerOneMoves);
      checkWinner(playerTwoMoves);
      setActivePlayer(activePlayer === 1 ? 2 : 1);
      setTileClicked(true);
    }
    checkWinner(playerOneMoves);
    checkWinner(playerTwoMoves);
  }

  return (
    <Button onClick={tileLogic} className=" w-32 h-32">
      {tileClicked && (
        <>
          {iconToShow === "x" ? (
            <ImCross className=" text-7xl" />
          ) : (
            <BsCircle className=" text-7xl" />
          )}
        </>
      )}
    </Button>
  );
};

export default Card;
