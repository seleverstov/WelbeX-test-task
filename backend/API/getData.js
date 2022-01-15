const { Op } = require('sequelize');
const models = require('../DB/models');
const Row = models.row;
module.exports = async (query) => {
  const offset = query.offset;
  const orderBy = query.orderBy;
  const direction = query.direction.toUpperCase();
  console.log(direction, orderBy);
  return await Row.findAll({
    order: [
      [orderBy, direction],
      ['name', 'ASC'],
    ],
    offset: Number(offset - 10),
    limit: 10
  })
}
