// require('dotenv').config(); // Load environment variables

// const express = require('express');
// const mongoose = require('mongoose');
// const bodyParser = require('body-parser');
// const cors = require('cors');
// const itemRoutes = require('./routes'); // Main routes file

// const app = express();
// const port = process.env.PORT || 8080;

// app.use(bodyParser.json());
// app.use(cors({
//     origin: "*",
//     methods: ["GET", "PUT", "POST", "DELETE"],
// }));

// mongoose.connect(process.env.DB_URL, { useNewUrlParser: true, useUnifiedTopology: true })
//     .then(() => console.log('Connected to MongoDB Atlas'))
//     .catch(err => console.error('connection error:', err));

// app.use('/', itemRoutes); // Use the routes defined in routes.js

// app.listen(port, () => {
//     console.log(`Server is running on http://localhost:${port}`);
// });


require('dotenv').config(); // Load environment variables

const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
const itemRoutes = require('./routes'); // Main routes file

const app = express();
const port = process.env.PORT || 8080;

app.use(bodyParser.json());
app.use(cors({
    origin: "*",
    methods: ["GET", "PUT", "POST", "DELETE"],
}));

console.log('DB_URL:', process.env.DB_URL); // Add this line for debugging

mongoose.connect(process.env.DB_URL, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('Connected to MongoDB Atlas'))
    .catch(err => console.error('connection error:', err));

app.use('/api', itemRoutes); // Use the routes defined in routes.js with /api prefix

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});

