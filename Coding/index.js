const express = require('express');

const mongoose = require('mongoose');
const app = express();
const port = 3000;

const equipment = require('./routes/equipment.route');
const exercises = require('./routes/exercises.route');
const muscles = require('./routes/muscles.route');
const positions = require('./routes/positions.route');

require('dotenv').config();

// Connection string
mongoose.connect(process.env.MONGODB_URI)
    .then(
        () => { console.log("Connection with Database established") },
        error => { console.log("Failed to connect to MongoDB", error) }
    );

app.use('/api/equipment', equipment);
app.use('/api/exercises', exercises);
app.use('/api/muscles', muscles);
app.use('/api/positions', positions);

app.listen(port, () => {
    console.log('Listening on port 3000');
})