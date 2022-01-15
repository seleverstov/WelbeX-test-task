import axios from 'axios';

export default async function filterData(filters) {
  const response = await axios(`/api/filterData?column=${filters.column}&condition=${filters.condition}&value=${filters.value}&offset=${filters.page}`);
  return response.data;
}
