
var btn = document.querySelector('.show-or-hide')
var div = document.querySelector ('.botchat')

btn.addEventListener ('click', function (){


if (div.style.display === 'block') {

div.style.display = 'none' ;
div.style.transition = '1.2';
} else {

    div.style.display = 'block' ;
}


});

var close = document.querySelector('.saibamais')

close.addEventListener ('click', function(){


if (div.style.display === 'block') {

    div.style.display = 'none';
}



});


const btnenviar = document.getElementById('bottonenviar');
const inpUser = document.getElementById('duvida');
const respUser = document.getElementById('resposta');
const answerDiv = document.getElementById('answerDiv');
const ret = document.getElementById('retorno')
const userchat = document.getElementById('usuariochat')

btnenviar.addEventListener('click', function() {
 
    const userInput = inpUser.value;

    if (userchat.style.display === 'block') {

        userchat.style.display = 'none' ;
       
        } else {
        
            userchat.style.display = 'block' ;
        }
    

     if (ret.style.display === 'block') {

        ret.style.display = 'none' ;
        ret.style.transition = '1.2';
        } else {
        
            ret.style.display = 'block' ;
        };
    
    
    respUser.textContent = userInput;


const respostas = {
    1: "1° China, com 10.1 milhões de toneladas.2° EUA com, 6.9 milhões de toneladas. \n 3° Índia, com 3.2 milhões de toneladas. 4° Japão, com 2.5 milhões de toneladas. \ 5° Brasil, com 2.1 milhões de toneladas.",
    2: "Não existe uma lei específica para lixo eletrônico, mas ele faz parte dos resíduos sólidos, onde existe a lei federal 12.305/2010, que prêve uma multa a quem fizer descarte irregular. O valor da multa é definido por Leis municipais que versam sobre o tema, e a arrecadação é destinada para programas de coleta seletiva e a destinação final ambientalmente adequada dos resíduos.",
    3: "O lixo eletrônico é um termo que se refere a qualquer equipamento eletrônico que tenha chegado ao fim de sua vida útil e não pode mais serusado. Isso inclui celulares, computadores, tablets, televisores, impressoras, câmeras fotográficas e outros dispositivos eletrônicos. Esses materiais contêm substâncias tóxicas, como mercúrio, chumbo e cádmio, que podem ser prejudiciais à saúde humana e ao meio ambiente se não forem descartados de forma responsável.",
    4: "O descarte incorreto de lixo eletrônico impacta a saúde humana pela contaminação provocada por metais pesados, gera danos ao meio ambiente através da contaminação de solos, lençóis freáticos e os organismos da fauna e da flora e, além disso, reduz o tempo de vida dos aterros sanitários..",
    5: "Existem diversos tipos como: Linha Branca: refrigeradores e congeladores, fogões, lavadoras de roupa e louça, secadoras, condicionadores de ar Linha Marrom: monitores e televisores de tubo, plasma, LCD e LED, aparelhos de DVD e VHS, equipamentos de áudio, filmadoras Linha Azul: batedeiras, liquidificadores, ferros elétricos, furadeiras, secadores de cabelo, espremedores de frutas, aspiradores de pó, cafeteirasLinha Verde: computadores desktop e laptops, acessórios de informática, tablets e telefones celulares",
    6: "Para reduzir essa quantidade de lixo, devemos reduzir o uso desenfreado de aparelhos. Criar maneiras de reutilizar ao invés de descartar. Incentivar as empresas a fazer o reúso de alguns componentes\ne também criar produtos com uma durabilidade maior.",
    7: "Devemos ensinar nas escolas, que é aonde tem a maioria dos jovens, mostrar a todos os impactos na natureza e na nossa vida, ensinar maneiras de reutilizar Dar preferência a empresas que preocupam com os impactos ambientais E ensinar a todos a maneira certa de fazer o descarte e aprender a doar.",
   
  
};
    const questionNumber = parseInt(inpUser.value);
    
    if (questionNumber >= 1 && questionNumber <= 7) {
      
        answerDiv.textContent = respostas[questionNumber];
    } else {
        
        answerDiv.textContent = "Por favor, insira um número válido entre 1 e 7.";
    }
    if (questionNumber === 0) {
        div.style.display = 'none' ;
    }
    if (questionNumber === 1){

    respostas[questionNumber].join("\n");

    }
});
 











