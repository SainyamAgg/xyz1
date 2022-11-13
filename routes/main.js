const express = require('express');
const routes = express.Router();  //Creating an object of router

const Detail = require('../models/Detail'); //Requiring Detail model
const Slider = require('../models/Slider');

//Now we use routes.get() instead of app.get()

/*
//Making route for home page 
//Processing request and sending response for home page
routes.get("/", (req, res) => {
    res.send('This is message from routes');
});
*/

//Now we are sending back hbs pages in response
routes.get('/', async (req, res) => { //MAking this method synchronous
    const details = await Detail.findOne({"_id":"636d0aa28d4d35600cc44072"});  //Now, this method will run first, then bottom lines will execute.
    const slides = await Slider.find();
    //console.log(details);  
    //console.log(slides);
    res.render('index', {
        details : details,  //Passing these details in the view page (index page)
        slides : slides
    });
});

//Making route for gallery page
routes.get("/gallery", async (req, res) => {
    const details = await Detail.findOne({});
    res.render('gallery', {
        details : details
    });
});

//Exporting this code in app.js file
module.exports = routes;