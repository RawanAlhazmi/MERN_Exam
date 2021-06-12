const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/Pirates', {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
    .then(() => console.log('connected to the Pirates DB'))
    .catch(err => console.log('Something went wrong', err));
