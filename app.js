const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser');

const videoRoutes = require('./routes/videoRoutes');
const commentRoutes = require('./routes/commentRoutes');
const productRoutes = require('./routes/productRoutes');

const app = express();

app.use(cors());
app.use(bodyParser.json());

mongoose.connect('mongodb://localhost:27017/tokopedia_clone', {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

app.use('/videos', videoRoutes);
app.use('/comments', commentRoutes);
app.use('/products', productRoutes);

app.listen(5000, () => console.log('Server is running on port 5000'));