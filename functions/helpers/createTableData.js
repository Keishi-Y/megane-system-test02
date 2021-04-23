//カルテを作成する
//要変更

const { table, tableFrame } = require("./airtable");
const formattedReturn = require("./formattedReturn");
// module.exports = async (event) => {
//   const fields = JSON.parse(event.body);
//   try {
//     const createdChart = await table.create([{ fields }]);
//     return formattedReturn(200, createdChart);
//   } catch (err) {
//     console.error(err);
//     return formattedReturn(500, {});
//   }
// };

const createCharts = async (event) => {
  const fields = JSON.parse(event.body);
  try {
    const createdChart = await table.create([{ fields }]);
    return formattedReturn(200, createdChart);
  } catch (err) {
    console.error(err);
    return formattedReturn(500, {});
  }
};

const createFrames = async (event) => {
  const fields = JSON.parse(event.body);
  try {
    const createdFrame = await tableFrame.create([{ fields }]);
    return formattedReturn(200, createdFrame);
  } catch (err) {
    console.error(err);
    return formattedReturn(500, {});
  }
};

module.exports = { createCharts, createFrames };
