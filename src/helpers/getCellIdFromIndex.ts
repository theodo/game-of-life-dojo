import getCellId from "./getCellId";

const getCellIdFromIndex = (
  cellIndex: number,
  columnsCount: number
): string => {
  const row = Math.floor((cellIndex - 1) / columnsCount);
  const column = (cellIndex - 1) % columnsCount;

  return getCellId(row, column);
};

export default getCellIdFromIndex;
