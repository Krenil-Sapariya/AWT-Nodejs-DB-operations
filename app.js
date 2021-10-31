const express = require('express');
const app = express();

const exhbs = require('express-handlebars');

app.engine('hbs', exhbs({
    defaultLayout: 'main',
    extname: '.hbs'
}));

// app.set('views', path.join(__dirname,'handlebars'));
app.set('view engine', 'hbs');

app.get('/', function (req, res) {
    res.render('home', {
        data: [
            {
                msg: "Welcome to sign in page"
		name: "Krenil Sapariya"
		id: "19CE125"
                topic: "Handlebars"
            }
        ]
    });
});

app.listen(5500, () => {
    console.log('listening on 5500');
})