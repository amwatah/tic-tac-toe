import React, { useState } from "react";

import Card from "./Card";

const Board = () => {
  return (
    <div className="  grid grid-cols-3 w-fit gap-1">
      <Card cardNumber={1} />
      <Card cardNumber={2} />
      <Card cardNumber={3} />
      <Card cardNumber={4} />
      <Card cardNumber={5} />
      <Card cardNumber={6} />
      <Card cardNumber={7} />
      <Card cardNumber={8} />
      <Card cardNumber={9} />
    </div>
  );
};

export default Board;
