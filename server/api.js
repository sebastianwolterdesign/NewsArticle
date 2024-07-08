const fetch = require('node-fetch');

const getSentimentAnalysis = async (text) => {
  const apiKey = process.env.API_KEY;
  const apiURL = `https://api.meaningcloud.com/sentiment-2.1?key=${apiKey}&lang=en&txt=${text}`;

  try {
    const response = await fetch(apiURL);
    const data = await response.json();

    // You can handle and transform the data here if needed
    return data;
  } catch (error) {
    console.error("Error fetching data from API:", error);
    throw error;
  }
};

module.exports = getSentimentAnalysis;