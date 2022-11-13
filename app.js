const express = require('express');
const hbs = require('hbs');
const mongoose = require('mongoose'); //Importing Mongoose
const Blog = require('./models/blog');
const Detail = require('./models/Detail');
const Slider = require('./models/Slider');
const app = express();

/*
//Processing request and sending response
//This is a route
//We should make a different section for all the routes
app.get("/", (req, res) => { //Sending response to home page
    res.send('wow this is data from server');
});
*/

//Connecting to database
const dbURI = 'mongodb+srv://sainyam:test1234@website1.jcg5tgf.mongodb.net/node1?retryWrites=true&w=majority';
mongoose.connect(dbURI, {useNewUrlParser : true, useUnifiedTopology : true})
.then((result) => {
    app.listen(process.env.PORT | 5556, () => {
        console.log('Server Started');
    });
    /*Slider.create([
        {
            title : "Learn Java in very easy manner",
            subTitle : "Java is one of the most important language",
            imageUrl : "/static/images/s1.jpg",
            class : "active"
        },
        {
            title : "What is Django in python?",
            subTitle : "Django is most famous web framework of python prohgramming",
            imageUrl : "/static/images/s2.jpg"
        },
        {
            title : "What about Node js?",
            subTitle : "Node Js is runtime environment to execute javascript outside the brouser",
            imageUrl : "/static/images/s3.jpg"
        }
    ]);*/
   /* Detail.create({
        brandName : "Info Technical Solutions",
        brandIconUrl : "https://yt3.ggpht.com/ytc/AMLnZu_vx2QaoABpOD1MFk3nvLibUr8EDUv_Z_xyvOAk6A=s176-c-k-c0x00ffffff-no-rj",
        links : [
            {
                label : "Home",
                url : "/"
            },
            {
                label : "Services",
                url : "/services"
            },
            {
                label : "Gallery",
                url : "/gallery"
            },
            {
                label : "About",
                url : "/about"
            },
            {
                label : "Contact Us",
                url : "/contact-us"
            }
        ]
    });*/
})
.catch((err) => {
    console.log(err);
});

/*
app.get('/add-blog', (req, res) => {
    const blog = new Blog({
        title : 'blog 1',
        snippet : 'about blog 1',
        body : 'more about blog 1'
    });
    blog.save().then((result) => {
        res.send(result);
    }).catch((err) => {
        console.log(err);
    });
});
*/

//Importing routes -> main.js file here
const routes = require('./routes/main.js');

app.use('', routes); //Here we are declaring that after running blank all the routes will be executed
//If we put /users then after running users all the routes will execute.

//Displaying static files on webpage
app.use('/static', express.static('public')); //Declaring that all the static files are in public folder. 
// /static keyword is used to tell that we can access statc files after running /static on webpage

//Templating Engine - HBS
app.set('view engine', 'hbs'); //Setting up templating engine
app.set('views', 'views');  //Setting the position of templating engines (We are not using dirname here because views folder is the parent of app.js. If views folder is parallel to the app.js then we use dirname here)

//Registering Partials 
hbs.registerPartials('views/partials');

/*
//Listening to requests
app.listen(process.env.PORT | 5556, () => {  //process.env file provides the PORT number and if it does not provide then we give PORT number manually using pipe function
    console.log('Server Started');
});*/