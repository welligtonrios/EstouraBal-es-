var timeId = null; // variavel que armazena a chamada da dunsao timeout


function inicioJogo(){
       //alert('jogo iniciado');
       //var url = window.location; // recebendo a url da pagina referenciada 
       var url = window.location.search; // rebendo so a parte da coristring, dos paremeros..., so o que está  aprtir do sinal de interrogação
       
       var nivel_jogo = url.replace("?", ""); // o replace serve para encontrar um caractere e substuir, no caso esta por nada
       
       alert('Nivel ' + nivel_jogo );

       var tempo_jogo = 0 ;

       if (nivel_jogo == 1) { // nivel normal 120seg
       		tempo_jogo = 70;
       }
       if (nivel_jogo == 2) { // nivel medium 60 seg
       		tempo_jogo = 59;
       }

       if (nivel_jogo == 3) { // dificil 30 seg
       		tempo_jogo = 40;
       }

       //inserindo segundos no span 

       document.getElementById('cronometro').innerHTML = tempo_jogo; // ele fara com que o atributo seja passado pro meu span atraves da tag, ele passa ou recebe o conteudo da tag


       // quantidade de balões 

       var quant_baloes = 80; 
    
    criaBaloes(quant_baloes);

    // baloescheios 

    document.getElementById('baloesCheios').innerHTML = quant_baloes;

    // baloesEstourados

    document.getElementById('baloesEstourados').innerHTML = quant_baloes = 0;

//cronometro

 contagem_tempo(tempo_jogo+1);


}

// ftempo baloes

function contagem_tempo(segundos){

              segundos = segundos -1; // fazendo com que a minha quantidade de segundos decremente 

              if (segundos == -1 ) {
              	clearTimeout(timeId); // limpa e para a função do setTimeout
              	game_over();
              	return false;
              }
         
 		 document.getElementById('cronometro').innerHTML = segundos; //adicionando ao mes span cronometro os segundos

         timeId = setTimeout("contagem_tempo("+ segundos +")" , 1000); // essa funçao serve pra chamar uma outra função por milesegundos, aqui ela esta chamando a função a cada seg 
    // ou seja a cada um segundo essa função vai ser chamda, e assim se for 30 segundos ela vai ser chamada trinta vezes
}


// função cria baloes
function criaBaloes(quant_baloes){

			
			for (var i = 1; i<= quant_baloes; i++) {

				var balao = document.createElement("img"); // metodo do Dom, essa função cria uma tag um  elemento dentro da minha pagina, e no caso eu quero criar uma imagem
			    
			    balao.src ='imagens/balao_azul_pequeno.png'; // passo ao atributo a imagem que quero que ele receba
				balao.style.margin = '10px';

				document.getElementById('baloesCenarios').appendChild(balao); // a funcao appendChild coloca vai colocar essas tags img dentro do nosso elemento div, criando uma relçao de parentesco quando isntancidas, ou seja ela nao vai preencher a div e sim adicionar a div como se fosse um filho da div

				balao.id = 'b' + i; // criando id diferentes para cada balao, para que assim eu possa estourar;
			   balao.onclick = function(){estourarBaloes(this)} // chamando a funsao estourar baloes a partir do click do mouse

			}
       
}


//fim de jogo
function game_over(){
	alert('Fim de jogo Tente novamente');
}

// funsão estourar baloes
function estourarBaloes(e){ // o é vai ser o this ou seja recebe o proprio elemento
	
	var id_balao = e.id; // adicionado o elemento passado por parametro ao id 

//passando o id do balao passando, ou seja, vou receber o balao com tal id, "this", ele vai ser pasamento como parametro com o "e"
// vou adiconar a variavel "id_balao" o id do balao passado, vou passar pro id balao a outra imagem, ou seja essa variavel 
// "id_balao" vai sevir como auxiliar para mudar a imagem, o que vai mudar é o atributo src do elemento 

	document.getElementById(id_balao).src = 'imagens/balao_azul_pequeno_estourado.png'; 
   
   pontuacao(-1);
   
}


// funçao pontução 
function pontuacao(acao){

// recuperando o conteuedo da tag

var baloesCheios = document.getElementById('baloesCheios').innerHTML; // recureprando o valor , conteudo da tag pelo innerHML
var baloesEstourados = document.getElementById('baloesEstourados').innerHTML; // recureprando o valor da tag

// transfromando em valores em numericos  para fazer os calculos 

baloesCheios = parseInt(baloesCheios);

baloesEstourados = parseInt(baloesEstourados);

baloesCheios = baloesCheios + acao; // baloes cheios mais a acao ele diminui, pois a funcao pontucao foi passada pra funcao estarar recebendo -1 e cada vez que a funcao estou for chamada a pontucao recebe menos 1
baloesEstourados = baloesEstourados - acao;

//passando os valores pro id dos elementos

document.getElementById('baloesCheios').innerHTML = baloesCheios;
document.getElementById('baloesEstourados').innerHTML = baloesEstourados;

situacaoJogo(baloesCheios);


}

function situacaoJogo(baloescheios){

if (baloescheios == 0 ) {
   alert('Parabéns');
   paraJogo();
}
}

function paraJogo(){
clearTimeout(timeId);
}













