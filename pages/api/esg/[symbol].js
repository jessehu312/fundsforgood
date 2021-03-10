import axios from 'axios';

const API =
  'https://esg-environmental-social-governance-data.p.rapidapi.com/search';

const RAPID_API_KEY = '26af613598msh63a95fd741b6504p13a49ajsnb7e539028a2c';
const RAPID_API_HOST =
  'esg-environmental-social-governance-data.p.rapidapi.com';

export default async (req, res) => {
  const {
    query: { symbol }
  } = req;

  const resp = await axios.get(API, {
    params: {
      q: symbol
    },
    headers: {
      'x-rapidapi-key': RAPID_API_KEY,
      'x-rapidapi-host': RAPID_API_HOST
    }
  });

  res.json(resp.data);
};
