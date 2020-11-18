const express = require('express');
const helmet = require('helmet');
const morgan = require('morgan');
const cors = require('cors');
const dotenv = require('dotenv');
dotenv.config();

const app = express();
const  PORT  = process.env.PORT || 3333;


app.use("/api", require('./src/routes/router'));
app.use(helmet());
app.use(cors());
app.use(morgan('tiny'))
app.use(express.json());

// require('./src/configs/db.configs');

app.get('*', (req, res) => {
    res.json({
        message: "Hello dev trau",
    });
});

app.get('/', (req, res) => {
    res.json({
        message: "Hello dev trau",
    });
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

