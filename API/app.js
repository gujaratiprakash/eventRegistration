const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const passport = require('passport');

const instituteRoutes = require('./routes/instituteRoutes');
const participatesRoutes = require('./routes/participatesRoutes');
const categoryRoutes = require('./routes/categoryRoutes');
const departmentRoutes = require('./routes/departmentRoutes');
const eventRoutes = require('./routes/eventRoutes');

const app = express();
const port = 3000;
app.use(bodyParser.json());

// Initialize Passport.js middleware
app.use(passport.initialize());

mongoose.connect('mongodb+srv://imbuesoftworld:mqmMHkuWGMtCCXlo@cluster0.sozqsp2.mongodb.net/avsar',
    {
        useNewUrlParser: true,
        useUnifiedTopology: true
    }
);


app.use('/participates', participatesRoutes);
app.use('/institute', instituteRoutes);
app.use('/category', categoryRoutes);
app.use('/department', departmentRoutes);
app.use('/event', eventRoutes);

app.listen(port, () => {
    console.log('Server is running on port ' + port);
});

