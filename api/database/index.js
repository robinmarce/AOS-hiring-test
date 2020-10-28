const mongoose = require('mongoose');
mongoose.connect('mongodb+srv://robin:aqszed@cluster0.ckymx.mongodb.net/account?retryWrites=true&w=majority')
    .then( () => console.log('connexion db ok!'))
    .catch( err => console.log(err));


