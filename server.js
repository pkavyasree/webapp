const express = require('express');
const app = express();
const path = require('path');
const router = express.Router();

router.get('/',function(req,res){
  res.sendFile(path.join(__dirname+'/dailyShop/index.html'));
  //__dirname : It will resolve to your project folder.
});

//add the router
app.use('/public', express.static(path.join(__dirname, '/dailyShop/public')));
app.use('/public/img', express.static(path.join(__dirname, '/dailyShop/public/img')));
app.use('/public/img/electronics', express.static(path.join(__dirname, '/dailyShop/public/img/electronics')));
app.use('/public/img/fashion', express.static(path.join(__dirname, '/dailyShop/public/img/fashion')));
app.use('/public/img/flag', express.static(path.join(__dirname, '/dailyShop/public/img/flag')));
app.use('/public/img/man', express.static(path.join(__dirname, '/dailyShop/public/img/man')));
app.use('/public/img/slider', express.static(path.join(__dirname, '/dailyShop/public/img/slider')));
app.use('/public/img/sports', express.static(path.join(__dirname, '/dailyShop/public/img/sports')));
app.use('/public/img/view-slider', express.static(path.join(__dirname, '/dailyShop/public/img/view-slider')));
app.use('/public/img/women', express.static(path.join(__dirname, '/dailyShop/public/img/women')));
app.use('/public/js', express.static(path.join(__dirname, '/dailyShop/public/js')));
//Store all JS and CSS in Scripts folder.
app.use('/', router);

app.listen(process.env.port || 3000);

console.log('Running at Port 3000');