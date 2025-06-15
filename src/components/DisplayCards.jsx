import React from "react";
import { Card } from "./Card";

export const DisplayCards = () => {
  return (
    <div className="flex-col">
      <h2 className="text-5xl text-secondary font-bold justify-center text-center">
        New Crochet Patterns!
      </h2>
      <div className="card-content">
        <Card title="Mini Bag" />
        <Card title="Amigurumi" />
        <Card title="Crop Top" />
      </div>
    </div>
  );
};
