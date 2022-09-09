var dayjs = require('dayjs');

module.exports = (data) => {
  const result = data.sort().map((m) => {
    return {
      date: m._timestamp,
      dateDisplay: dayjs(m._timestamp, "YYYY-MM-DD").format("MMMM YYYY"),
      stats: {}
    }
  }).filter((arr, index, self) =>
    index === self.findIndex((t) => (t.date === arr.date))).reverse();

  data.forEach((record) => {
    result.find(f => f.date === record._timestamp)
    .stats[record.dataType.replaceAll('-', '_')] = record.count;
  })

  return result;
};
