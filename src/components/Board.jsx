import React from 'react'

import { Box } from "./Box"
import "../css/Board.css"

export const Board = ({ board, onClick }) => {
  return (
    <div className="board h-[50px] w-[50px] text-xl text-white">
      {
        board.map((value, idx) => {
          return <Box value={value} onClick={() => value === null && onClick(idx)} />;
        })
      }
    </div>
  )
}
