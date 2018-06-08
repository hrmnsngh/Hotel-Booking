var express = require('express'),
    bodyParser = require('body-parser'),
    Hotel = require('./models/hotelModel'),
    db = require('./dbconnection').default;
var app = express();
var port = process.env.PORT || 3000;
var hotelRouter = express.Router();


app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// function userSearch(username) {
//     sqlSearch = "Select username FROM Users WHERE username='" + username + "'";
//     db.query(sqlSearch, function (err, result, fields) {

//         if (err) {
//             throw err;
//         } else if (result[0] != null) {
//             // console.log(result, fields);
//             // console.log('Database result : ', result[0].username);
//             userSearchResult = result[0].username;
//         }
//     });
// }    
var sqlQuery = "Select * from hotels";
// db.connect((err) => {
//     if (err) {
//         console.log(err);
//     } else {
        console.log('Database connected');
        let sqlSearch = 'Select * FROM Hotels';
        db.query(sqlQuery, function (err, result, fields) {
            if (err) {
                res.status(500).send(err);
            } else {

                hotelRouter.route('/:hotels')
                    .get((req, res) => {
                        // Hotel.find((err, hotels) => {
                        //     if (err)
                        //         console.log(err);
                        //     else
                        //         res.json(books);
                        // })
                        // var query = {};

                        // if (req.query.nightrate) {
                        //     query.nightrate = req.query.nightrate;
                        // }

                        res.json(result);
                    });
            }
        })

//     }
// });

// hotelRouter.route('/hotels')
//     .get((req, res) => {
//         var responseJson = { hello: "This is hotel booking app" };
//         res.json(responseJson);
//     });
app.use('/app', hotelRouter);
// respond with "hello world" when a GET request is made to the homepage
app.get('/', (req, res) => {
    res.send('Hotel Booking Server is up');

})

app.listen(port, () => console.log('Gulp running app on port: ' + port));