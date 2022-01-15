import axios from 'axios';

export default async function addNewRow(data) {
  const response = await axios.post('/api/addNewRow/', data);
  return response.data;
}
