import axios from 'axios';

export default async function getCount() {
  const response = await axios('/api/getCount');
  return response.data.count;
}
