const express= require("express");
const app = express();
const bodyParser = require("body-parser");
const { urlencoded } = require("body-parser");
const mongoose= require("mongoose");
mongoose.set("strictQuery",true);
mongoose.connect('mongodb://127.0.0.1:27017/portfolio',{useNewUrlParser: true});
var contactSchema = new mongoose.Schema({
    name:String,
    phone:String,
    email:String,
    address:String,
    
  })
  
var contact = mongoose.model('contact', contactSchema);
app.use(bodyParser.urlencoded({extended:true}))
app.get("/",function(req,res){
    const params = {};
    res.status(200).render('index.html', params);
})
app.get('/contact', (req, res) => 
{
    console.log("Rachit is a good boy")
    const params = {};
    res.status(200).render('contact.html', params);
});

app.post('/contact', (req, res) => {

    const myData2 = new contact(req.body)
    myData2.save().then(()=>{
        res.redirect("/");
    })
    res.status(200).render('about.html', params);
    /*const params = {};
     res.status(200).render('about.html', params);
    /*res.status(200).render('Contact.pug', params);
    */
});

 app.get('/about', (req, res) => {
     const params = {};
     res.status(200).render('about.html', params);
 })   

 app.post('/about', (req, res) => {
     console.log(req.body);
     const params = {};
     res.status(200).render('about.html', params);
 });
 app.get('/project', (req, res) => {
    const params = {};
    res.status(200).render('project.html', params);
})   

app.post('/project', (req, res) => {
    console.log(req.body);
    const params = {};
    res.status(200).render('project.html', params);
});
app.get('/skills', (req, res) => {
    const params = {};
    res.status(200).render('skills.html', params);
})   

app.post('/skills', (req, res) => {
    console.log(req.body);
    const params = {};
    res.status(200).render('skills.html', params);
});
 

app.listen("3000", () => {
    console.log("Rachit Ranjan");
});


