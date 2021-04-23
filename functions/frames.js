const formattedReturn = require("./helpers/formattedReturn");
// const getRecords = require("./helpers/getRecords");
const { usableFrames } = require("./helpers/getTableData");
const { createFrames } = require("./helpers/createTableData");
const deleteTableData = require("./helpers/deleteTableData");
const updateTableData = require("./helpers/updateTableData");
exports.handler = async (event) => {
  if (event.httpMethod === "GET") {
    return await usableFrames(event);
  } else if (event.httpMethod === "POST") {
    return await createFrames(event);
  } else if (event.httpMethod === "PUT") {
    return await updateTableData(event);
  } else if (event.httpMethod === "DELETE") {
    return await deleteTableData(event);
  } else {
    return formattedReturn(405, {});
  }
};
