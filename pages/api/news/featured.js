import axios from "axios";

const NEWS_BASE_URL = "http://newsapi.org/v2/top-headlines";
const NEWS_API_KEY = process.env.NEWSAPI_API_KEY;

export default async (req, res) => {
  try {
    const response = await axios.get(NEWS_BASE_URL, {
      params: {
        pageSize: 9,
        country: "us",
        category: "business",
        apiKey: NEWS_API_KEY,
      },
      headers: {
        "Content-Type": "application/json",
      },
    });

    const { articles } = response.data;
    res.status(200).json(articles);
  } catch (error) {
    res.status(500).json({ error });
  }
};
