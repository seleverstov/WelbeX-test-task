const models = require('../DB/models');
const Row = models.row;
module.exports = async () => {
  const rows = await Row.findAndCountAll()
  const count = rows.count
  console.log(count);
  return { count: count }
}
