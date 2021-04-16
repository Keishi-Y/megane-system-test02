const formattedReturn = require("./helpers/formattedReturn");
const getRecords = require("./helpers/getRecords");
const createRecord = require("./helpers/createRecord");
const deleteRecord = require("./helpers/deleteRecord");
const updateRecord = require("./helpers/updateRecord");
exports.handler = async (event) => {
  if (event.httpMethod === "GET") {
    return await getRecords(event);
  } else if (event.httpMethod === "POST") {
    return await createRecord(event);
  } else if (event.httpMethod === "PUT") {
    return await updateRecord(event);
  } else if (event.httpMethod === "DELETE") {
    return await deleteRecord(event);
  } else {
    return formattedReturn(405, {});
  }
};
