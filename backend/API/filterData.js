const { Op } = require('sequelize');
const models = require('../DB/models');
const Row = models.row;
module.exports = async (filters) => {
  let operator
  console.log(filters);
  console.log((filters.page - 1) * 10);
  if (filters.condition === '>') {
    operator = Op.gt;
  }
  if (filters.condition === '<') {
    operator = Op.lt;
  }
  if (filters.condition === '||') {
    operator = Op.substring;
  }
  if (filters.condition === '=') {
    operator = Op.like;
  }
  const filtred = await Row.findAndCountAll({
    where: {
      [filters.column]: {
        [operator]: filters.value
      }
    },
    offset: Number(filters.offset) - 1,
    limit: 10
  });
  return filtred;
}
