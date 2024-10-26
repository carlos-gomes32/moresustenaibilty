var btn = document.querySelector('#show-or-hide2')
var div2 = document.querySelector ('.div-df')

btn.addEventListener ('click', function (){


if (div2.style.display === 'block') {

div2.style.display = 'none' ;

} else {

    div2.style.display = 'block' ;
}


});