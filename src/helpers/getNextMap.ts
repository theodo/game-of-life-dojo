import getCellId from "@/helpers/getCellId";
import type { CellMap } from "@/types";

const getNextMap = (
  rowCount: number,
  columnCount: number,
  aliveCellMap: CellMap
): CellMap => {
  const newAliveCellMap: CellMap = {};

  for (let row = 0; row < rowCount; row++) {
    for (let column = 0; column < columnCount; column++) {
      const cellId = getCellId(row, column);
      const isCellAlive = aliveCellMap[cellId];
      const aliveNeighbourCount = getAliveNeighboursCount(
        row,
        column,
        aliveCellMap
      );
      newAliveCellMap[cellId] = getCellNextState(
        isCellAlive,
        aliveNeighbourCount
      );
    }
  }

  return newAliveCellMap;
};

const getAliveNeighboursCount = (
  row: number,
  column: number,
  aliveCellsMap: CellMap
): number =>
  getNeighbours(row, column)
    .map((index) => aliveCellsMap[index])
    .filter((isAlive) => isAlive)
    .reduce((count) => count + 1, 0);

const getNeighbours = (row: number, column: number): string[] => [
  getCellId(row - 1, column - 1),
  getCellId(row - 1, column),
  getCellId(row - 1, column + 1),
  getCellId(row, column - 1),
  getCellId(row, column + 1),
  getCellId(row + 1, column - 1),
  getCellId(row + 1, column),
  getCellId(row + 1, column + 1),
];

const getCellNextState = (
  isAlive: boolean,
  aliveNeighbourCount: number
): boolean => {
  if (aliveNeighbourCount === 3) {
    return true;
  } else if (isAlive && aliveNeighbourCount === 2) {
    return true;
  } else {
    return false;
  }
};

export default getNextMap;
