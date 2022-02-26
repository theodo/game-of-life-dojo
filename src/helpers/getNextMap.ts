import getCellId from "@/helpers/getCellId";
import type { CellMap } from "@/types";

const getNextMap = (
  rowCount: number,
  columnCount: number,
  aliveCellMap: CellMap
): CellMap => {
  return {};
};

const getAliveNeighboursCount = (
  row: number,
  column: number,
  aliveCellsMap: CellMap
): number => {
  return 0;
};

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
  return false;
};

export default getNextMap;
