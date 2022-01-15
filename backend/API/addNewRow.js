const models = require('../DB/models');
const Row = models.row;
module.exports = async (data) => {
  const newRow = await Row.create(data)
  await newRow.save()
  return true
}
