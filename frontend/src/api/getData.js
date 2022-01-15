import axios from 'axios';

export default async function getData(offset, sorting) {
  const response = await axios(`/api/getData?offset=${offset}&orderBy=${sorting.orderBy}&direction=${sorting.direction}`);
  return response.data;
}
