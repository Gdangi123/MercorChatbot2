const express = require('express');
const bodyParser = require('body-parser');
const { MongoClient } = require('mongodb');



const app = express();
const port = 5000;

const MONGO_URL = 'mongodb://localhost:27017';
const DB_NAME = 'mental_health_support';

app.use(bodyParser.json());

// Replace this with actual responses and NLP processing
const botResponses = [
  "I'm here to listen and support you.",
  "It's okay to feel this way. Remember to take care of yourself.",
  "Have you tried taking deep breaths when you feel anxious?",
  "Seeking help from a professional can be beneficial.",
  "Remember to practice self-compassion and be kind to yourself."
];

app.post('/api/chat', (req, res) => {
  const userMessage = req.body.message;

  // Simulate processing time (replace this with actual NLP processing)
  setTimeout(() => {
    const botMessage = botResponses[Math.floor(Math.random() * botResponses.length)];
    res.json({ botMessage });
  }, 1000);
});

MongoClient.connect(MONGO_URL, { useUnifiedTopology: true }, (err, client) => {
  if (err) {
    console.error('Error connecting to MongoDB:', err);
    return;
  }

  const db = client.db(DB_NAME);

  // Additional database setup (if required)

  app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
  });
});
