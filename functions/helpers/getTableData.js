//カルテを取得する
//要変更

const { table, tableFrame } = require("./airtable");
const formattedReturn = require("./formattedReturn");
// module.exports = async (event) => {
//   try {
//     const records = await table.select().firstPage();
//     const formattedRecords = records.map((record) => ({
//       id: record.id,
//       ...record.fields,
//     }));
//     return formattedReturn(200, formattedRecords);
//   } catch (err) {
//     console.error(err);
//     return formattedReturn(500, {});
//   }
// };

const usableCharts = async (event) => {
  try {
    const charts = await table.select().firstPage();
    const formattedCharts = charts.map((chart) => ({
      id: chart.id,
      ...chart.fields,
    }));
    return formattedReturn(200, formattedCharts);
  } catch (err) {
    console.error(err);
    return formattedReturn(500, {});
  }
};

const usableFrames = async (event) => {
  try {
    const frames = await tableFrame.select().firstPage();
    const formattedFrames = frames.map((frame) => ({
      id: frame.id,
      ...frame.fields,
    }));
    return formattedReturn(200, formattedFrames);
  } catch (err) {
    console.error(err);
    return formattedReturn(500, {});
  }
};

module.exports = { usableCharts, usableFrames };
