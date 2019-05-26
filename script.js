function start(){
    document.querySelector('.para1').style.display = 'none';
    document.querySelector('.para2').style.display = 'none';
    document.querySelector('.para3').style.display = 'none';
    document.querySelector('.image').style.display = 'none';
    document.querySelector('#try').style.display = 'none';
}

start();

var check = document.querySelector('.input').value;
var random = Math.floor(Math.random() * 10) + 1;
var x = 'the number was';
var y = 'try next time';

document.querySelector('#submit').addEventListener('click', function(){

    if(check === random)
{
    document.querySelector('.para3').style.display = 'block';
    document.querySelector('.image').style.display = "block";
}
else
{
   document.querySelector('.para1').style.display = 'block';
   document.querySelector('.para2').style.display = 'block';
   document.querySelector('#try').style.display = 'block';  
}

});