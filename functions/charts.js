const formattedReturn = require("./helpers/formattedReturn");
// const getRecords = require("./helpers/getRecords");
const { usableCharts } = require("./helpers/getTableData");
const { createCharts } = require("./helpers/createTableData");
const deleteTableData = require("./helpers/deleteTableData");
const updateTableData = require("./helpers/updateTableData");
exports.handler = async (event) => {
  if (event.httpMethod === "GET") {
    return await usableCharts(event);
  } else if (event.httpMethod === "POST") {
    return await createCharts(event);
  } else if (event.httpMethod === "PUT") {
    return await updateTableData(event);
  } else if (event.httpMethod === "DELETE") {
    return await deleteTableData(event);
  } else {
    return formattedReturn(405, {});
  }
};
