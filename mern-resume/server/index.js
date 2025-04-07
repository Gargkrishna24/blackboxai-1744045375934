require('dotenv').config();
const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const contactRouter = require('./routes/contact');
const portfolioRouter = require('./routes/portfolio');

const app = express();
app.use(cors({ origin: 'http://localhost:3000' }));
app.use(express.json());

// Connect to MongoDB
mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.error(err));

// Routes
app.use('/api/contact', contactRouter);
app.use('/api/portfolio', portfolioRouter);

app.listen(process.env.PORT, () => console.log(`Server running on port ${process.env.PORT}`));