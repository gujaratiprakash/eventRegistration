const fs = require('fs');
const https = require('https');
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const passport = require('passport');
const cors = require('cors');

const instituteRoutes = require('./routes/instituteRoutes');
const participatesRoutes = require('./routes/participatesRoutes');
const categoryRoutes = require('./routes/categoryRoutes');
const departmentRoutes = require('./routes/departmentRoutes');
const eventRoutes = require('./routes/eventRoutes');

const app = express();

// Define custom CORS function
const corsOptions = {
  origin: (origin, callback) => {
    const allowedOrigins = ['https://example.com']; // Replace with your allowed origins
    
    if (allowedOrigins.includes(origin) || !origin) {
      callback(null, true);
    } else {
      callback(new Error('Not allowed by CORS'));
    }
  },
};

app.use(cors(corsOptions));

const port = 5000;
app.use(bodyParser.json());

// Initialize Passport.js middleware
app.use(passport.initialize());

mongoose.connect('mongodb+srv://imbuesoftworld:mqmMHkuWGMtCCXlo@cluster0.sozqsp2.mongodb.net/avsar', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

app.use('/participates', participatesRoutes);
app.use('/institute', instituteRoutes);
app.use('/category', categoryRoutes);
app.use('/department', departmentRoutes);
app.use('/event', eventRoutes);

const serverOptions = {
  key: fs.readFileSync('server.key'),
  cert: fs.readFileSync('server.cert'),
};

const server = https.createServer(serverOptions, app);

server.listen(port, () => {
  console.log('Server is running on port ' + port);
});
