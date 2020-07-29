

/*nemműxik alert
let sendButton = document.querySelector("form .btn");
sendButton.onclick= function() {
    alert ("sorry, send email function is not working on this page in this time")
};
*/

//email küldése
/*nemműxik
let sendMail = document.querySelector("form .btn")

sendMail.addEventListener("click", function(){

let transporter = sendMail.createTransport({
  service: 'gmail',
  auth: {
    user: 'youremail@gmail.com',
    pass: 'yourpassword'
  }});

let mailOptions = {
  #email: 'youremail@gmail.com',
  #mailto: 'zhi.steampunk.jewellery@gmail.com',
  #blabla: 'That was easy!'
}});

transporter.sendMail(mailOptions, function(error, info){
  if (error) {
    console.log(error);
  } else {
    console.log('Email sent: ' + info.response);
  }
});
*/


/*nem műxik
var sendMail = require('sendMail');

var transporter = sendMail.createTransport({
  service: 'gmail',
  auth: {
    user: 'youremail@gmail.com',
    pass: 'yourpassword'
  }
});

var mailOptions = {
  email: 'youremail@gmail.com',
  mailto: 'zhi.steampunk.jewellery@gmail.com',
  blabla: 'That was easy!'
};

transporter.sendMail(mailOptions, function(error, info){
  if (error) {
    console.log(error);
  } else {
    console.log('Email sent: ' + info.response);
  }
});
*/

/*nemműxik
function sendMail() {
    var link = "mailto:zhi.steampunk.jewellery@gmail.com"
             + "?cc=myCCaddress@example.com"
             + "&name" + escape("username")
             + "&blabla=" + escape(document.getElementById('blabla').value)
    ;

    window.location.href = link;
}
*/

/*nemműxik
let sendMail=document.querySelector("form .btn");
sendMail.addEventListener ("click", function(){


    sendMail = "zhi.steampunk.jewellery@gmail.com"
             + "email"
             + "username" + escape("username")
             + "blabla" + escape(document.getElementById('blabla').value)
    ;

    window.location.href = link;
});
*/