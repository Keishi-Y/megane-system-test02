//カルテを取得する
//要変更

const { table } = require("./airtable");
const formattedReturn = require("./formattedReturn");
module.exports = async (event) => {
  try {
    const records = await table.select().firstPage();
    const formattedRecords = records.map((record) => ({
      id: record.id,
      ...record.fields,
    }));
    return formattedReturn(200, formattedRecords);
  } catch (err) {
    console.error(err);
    return formattedReturn(500, {});
  }
};
