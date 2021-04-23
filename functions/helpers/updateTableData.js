//カルテを更新する
//要変更

const { table } = require("./airtable");
const formattedReturn = require("./formattedReturn");
module.exports = async (event) => {
  const { id, ...fields } = JSON.parse(event.body);
  try {
    const updatedChart = await table.update([{ id, fields }]);
    return formattedReturn(200, updatedChart);
  } catch (err) {
    console.error(err);
    return formattedReturn(500, {});
  }
};
