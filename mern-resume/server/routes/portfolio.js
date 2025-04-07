const express = require('express');
const router = express.Router();

const portfolioData = [
  {
    image: "https://images.pexels.com/photos/3761509/pexels-photo-3761509.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    title: "E-commerce App",
    description: "Full-stack e-commerce platform with payment integration.",
  },
  {
    image: "https://images.pexels.com/photos/1181677/pexels-photo-1181677.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    title: "Task Management App",
    description: "Collaborative task management system with real-time updates.",
  },
];

router.get('/', (req, res) => {
  res.json(portfolioData);
});

module.exports = router;