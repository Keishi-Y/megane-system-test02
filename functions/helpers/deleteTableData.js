//カルテを削除する
//要変更

const { table } = require("./airtable");
const formattedReturn = require("./formattedReturn");
module.exports = async (event) => {
  const { id } = JSON.parse(event.body);
  try {
    const deletedChart = await table.destroy(id);
    return formattedReturn(200, deletedChart);
  } catch (err) {
    console.error(err);
    return formattedReturn(500, {});
  }
};
