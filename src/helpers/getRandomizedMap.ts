import getCellIdFromIndex from "@/helpers/getCellIdFromIndex";
import type { CellMap } from "@/types";

const PROBABILITY_OF_BEING_DEAD = 0.7;

const getRandomizedMap = (rowCount: number, columnCount: number): CellMap => {
  const cellCount = rowCount * columnCount;
  const aliveCellsMap: CellMap = {};

  for (let index = 0; index < cellCount; index++) {
    if (Math.random() > PROBABILITY_OF_BEING_DEAD) {
      const cellId = getCellIdFromIndex(index, columnCount);
      aliveCellsMap[cellId] = true;
    }
  }

  return aliveCellsMap;
};

export default getRandomizedMap;
