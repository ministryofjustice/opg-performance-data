var dayjs = require("dayjs");

module.exports = (date) => {
  return `${dayjs(date, "YYYY-MM-DD").format("D MMMM YYYY")}`;
};
