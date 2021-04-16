//カルテを作成する
//要変更

const { table } = require("./airtable");
const formattedReturn = require("./formattedReturn");
module.exports = async (event) => {
  const fields = JSON.parse(event.body);
  try {
    const createdRecord = await table.create([{ fields }]);
    return formattedReturn(200, createdRecord);
  } catch (err) {
    console.error(err);
    return formattedReturn(500, {});
  }
};
