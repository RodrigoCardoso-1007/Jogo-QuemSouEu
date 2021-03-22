var proximaPP = document.querySelector('#proxima'); // Botão que faz com que se passe para a próxima "fase", escolhendo outra mulher
var botaoPD = document.querySelector('#botao'); // botão para adicionar nova dica
var perguntasP = document.querySelector('#dicas'); // Div onde serão inseridas as dicas
var mostraP = document.querySelector("#placar"); // Título de quarto nível que retrata a pontuação para o usuário
var carts = document.querySelectorAll('.cart');
var contadorM = 0; // É a variável utilizada para acessar as diferentes posições do vetor de objetos que contém as informações que dão base ao jogo
var contadorD = 0; // É a variável utilizada para acessar as diferentes posições dos vetores que contêm as dicas sobre cada mulher
var pontos = 0;    // É a váriavel que armazena os pontos
var alteraCor = 0; // É a váriavel que armazena os pontos para troca de cor
var correta; 
var min=0;
var pergunta;
// Vetor com as informações das ciêntistas 
let mulheresInfo = [{
    nome: "Marie Curie",
    dicas: ['Nasci na polônia, em 1867', 
      '1. Fui prêmiada com o Nobel da química pela descoberta de elementos químicos',
      '2. Juntamente com meu marido, desenvolvi estudos sobre a radioatividade',
      '3. Tive uma morte estreitamente relacionada aos meus estudos',
      '4. Estudei na universidade de Sourbonne, na França',
    ],
    info: "Nascida em Varsóvia, na Polônia, Marie Curie foi uma cientista e física renomada, tendo descoberto o Polônio e o Rádio. Fez pesquisas importantíssimas sobre a radioatividade e por esse motivo foi a primeira mulher a ganhar o Prêmio Nobel e hoje é considerada a cientista mais conhecida da Terra. ",
    link: "https://267557-830227-raikfcquaxqncofqfm.stackpathdns.com/wp-content/uploads/2019/01/quem-foi-marie-curie-667x400.jpg",
  },

  {
    nome: "Carol Shaw",
    dicas: ['Cresci na costa Oeste dos EUA, proxima ao tecnopolo do vale do silício',
      '1. Trabalhei para a Atari, para a Tandem Computers e para a  Activision',
      '2. Tenho graduação em engenharia elétrica e ciências da computação',
      '3. Fui a primeira mulher a desenvolver um jogo eletrônico',
      '4. Desenvolvi os jogos Tic-Tac-Toe e o famoso "River Raid" ',
    ],
    info: "A americana crescida nos arredores do vale do silício, Carol Shaw foi pioneira no mercado de desenvolvimento de games. Como engenheira de software, trabalhou no desenvolvimento de diversos jogos, dentre eles o 3-D Tic-Tac-Toe e o famoso River Raid",
    link: "https://i.imgur.com/KNcGG.jpg",
  },

  {
    nome: "Ada Lovelace",
    dicas: ['Vivi no século XIX',
      '1. Me desenvolvi muito na área de lógica e matemática',
      '2. Fui tutelada por Augustus De Morgan',
      '3.Trabalhei no desenvolvimento da máquina analítica com Charles Babbage',
      '4. Fui a primeira pessoa da história a desenvolver um algoritmo, programa de computador',
    ],
    info: "A Condessa de Lovelace foi uma matemática e escritora inglesa. Escreveu o primeiro algoritmo a ser processado por uma máquina: a máquina analítica de Charles Babbage, sendo assim considerada a primeira programadora de todos os tempos.",
    link: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTlMY3oltiBldz6XjTPu-0wVoE6x3lMJMUF2g&usqp=CAU",
  },

  {
    nome: "Rosalind Franklin",
    dicas: ['Nasci 1920, em londres',
      '1. Desenvolvi importantes materiais sobre as microestruturas do carvão e do grafite',
      '2. Fui pioneira na área de biologia molecular',
      '3. Estudei em Cambridge, onde conquistei um doutorado em química',
      '4. Descobri qual era a estrutura do DNA',
    ],
    info: "Foi uma química britânica que descobriu a dupla hélice do DNA, assim como a estrutura molecular do carvão e do grafite. ",
    link: "https://london.ac.uk/sites/default/files/styles/promo_mobile/public/2018-01/rosalind-franklin.png?itok=3JmBRIuf",
  },

  {
    nome: "Barbara McClintock",
    dicas: ['Sou uma das pessoas mais importantes que já estiveram no meio da genética', 
      '1. Pela descoberta dos elementos genéticos móveis, venci o prêmio Nobel de Medicina de 1983 ',
      '2. Na faculdade estudei botânica, e através dela, a genética',
      '3. Muito trabalhei na análise cromossômica do milho',
      '4. Descobri os genes saltadores, responsáveis pelo fenômeno de transposição genética',
    ],
    info: "Nascida nos EUA, Barbara foi uma citogeneticista responsável pela descoberta dos elementos genéticos que causam a transposição genética, além de ter demonstrado o conceito da recombinação genética por crossing-over. ",
    link: "https://cdn.britannica.com/19/151119-050-6AAFA850/Barbara-McClintock-laboratory-Cold-Spring-Harbor-New-March-26-1947.jpg",
  },

  {
    nome: "Lise Meitner",
    dicas: ['Nasci na Áustria, em 1878',
      '1. Recebi o prêmio Enrico Fermi junto a Hahn e Fritz Straßmann ',
      '2. Obtive doutorado em física na Universidade de Viena',
      '3. Trabalhei com o químico Otto Hahn, que posteriormente foi premiado com o Nobel da química pelo nosso trabalho',
      '4. Fiz cálculos e pesquisas diversas e pude explicar o processo de fissão nuclear',
    ],
    info: "Lise foi uma física austríaca que fez a descoberta da fissão nuclear. Meitner também descobriu, em 1923, o efeito Auger, um fenômeno em que a emissão de um elétron de um átomo causa a emissão de um segundo elétron.",
    link: "https://aventurasnahistoria.uol.com.br/media/_versions/lise_meitner_widexl.jpg",
  },

  {
    nome: "Katherine Johnson",
    dicas: ['Nasci nos EUA e, aos dez anos de idade já estava no ensino médio',
      '1. Morri no início de janeiro de 2020',
      '2. Me formei em 1937 com exelência nas matérias de matemática e francês',
      '3. Trabalhei com cálculos na área computacional e aeroespacial da NASA, calculando a traux2etória da missão Apollo 11',
      '4.  Recebi a medalha presidencial da Liberdade e tive minha história retratada no longa "Estrelas Além do Tempo".',
    ],
    info: "Foi matemática, física e cientista espacial estadunidense. Contribuiu significativamente para a aeronáutica, principalmente nas aplicações de computação da NASA: ela calculava traux2etórias, janelas de lançamento e caminhos de retorno emergencial para vários voos de missões.",
    link: "https://www.nasa.gov/sites/default/files/thumbnails/image/1966-l-06717.jpeg",
  },

  {
    nome: "Chien-Shiung Wu",
    dicas: ['Sou Física, especialista em radioatividade, apelidadada de "Marie Curie Chinesa"',
      '1. Trabalhei no projeto Manhattan .',
      '2. Fui a primeira mulher a ter um doutorado honorado em física na universidade de princeton',
      '3. Meus experimentos desmnentiram a lei da Paridade, da mecânica quântica',
      '4. Ganhei diversos prêmios como: a Medalha John Price Wetherill do Instituto Franklin (1962) e o prêmio Wolf em Física (1978)  ',
    ],
    info: " Foi uma física de origem chinesa que fez grandes contribuições para a física nuclear. Trabalhou no Projeto Manhattan, criando o processo de separação do urânio em urânio-235 e urânio-238 por meio de difusão gasosa e também conduziu o Experimento de Wu. Foi a primeira a ganhar o prêmio Wolf de física em 1978.",
    link: "https://www.atomicheritage.org/sites/default/files/styles/profile_page_image/public/Wu_250.jpg?itok=Ygx6DFzQ",
  },

  {
    nome: "Rita Levi-Montalcini",
    dicas: ['Nasci na Itália, em 1909', 
      '1. Meus trabalhos muito auxiliaram na compreenção de variadas condições de saúde .',
      '2. Conduzi minhas pesquisas em segredo durante as perseguições facistas e invasões nazistas ',
      '3. Pesquisei sobre o crescimento das células neurais"',
      '4. Recebi o prêmio Nobel de Medicina e Fisiologia de 1986',
    ],
    info: " De origem italiana, Rita foi uma médica neurologista agraciada com o Prêmio Novel de Fisiologia ou Medicina de 1986 pela descoberta de uma substância do corpo que estimula o desenvolvimento de células nervosas, o que ampliou os conhecimentos sobre diversas doenças neurológicas.",
    link: "https://media.gettyimages.com/photos/italian-scientist-rita-levimontalcini-wearing-a-white-gown-sitting-at-picture-id141551270?s=612x612",
  },

  {
    nome: "Margaret Hamilton",
    dicas: ['Sou uma matemática estadunidense',
      '1. Partes do código desenvolvido por minha equipe foram utilizadas ainda na "Skylab" e no programa do ônibus espacial',
      '2. Com apenas 24 começei a trabalhar como programadora para o MIT ',
      '3.  Fui a primeira mulher a integrar o projeto Apollo da NASA',
      '4. Liderou a equipe que desenvolveu o software que levou o homem à lua',
    ],
    info: " De origem italiana, Rita foi uma médica neurologista agraciada com o Prêmio Novel de Fisiologia ou Medicina de 1986 pela descoberta de uma substância do corpo que estimula o desenvolvimento de células nervosas, o que ampliou os conhecimentos sobre diversas doenças neurológicas.",
    link: "https://thumbs-prod.si-cdn.com/weqZ43XJySpW31fOQIKRVcCKl_U=/800x600/filters:no_upscale():focal(939x447:940x448)/https://public-media.si-cdn.com/filer/c6/1f/c61f96b5-8da2-4715-a792-e3e6bda15714/margaret_hamilton_-_restoration.jpg",
  },

];

//Vetor com as cores de fundo as dicas
var coresVetor = ["#DDA0DD", "#EE82EE", "#DA70D6", "#BA55D3", "#FF00FF", "#A020F0"];



function mostraPlacar() {  
  mostraP.innerHTML = ` ${pontos} Pontos`;  
}

function exibePergunta() {  
  pergunta = document.createElement('h2'); // Funciona criando elementos e adicionando-os ao HTML
  perguntasP.appendChild(pergunta);
  pergunta.classList.add('caixas');
  pergunta.style.backgroundColor = `${coresVetor[alteraCor]}`; 
  pergunta.style.borderRadius = '10px';
  if (contadorD <= 4) {    
    pergunta.innerHTML = `${mulheresInfo[contadorM].dicas[contadorD]}`;    
    if (contadorD >= 1) {
      pontos--;      
    }  
    contadorD++; 
    alteraCor++;   
    
  } else {
    pergunta.innerHTML = "Acabaram as dicas :()";
  }
  mostraPlacar();  
  
}


$( "#botao" ).click(function() {
  exibePergunta();
});


function sorteia(){
  var sorteados = []; 
  var aux1, aux2 = 0; 
  
  sorteados.push(contadorM); 
  aux1 = Math.floor(Math.random() * (3 - 0)) + 0;

  correta = carts[aux1];
  correta.lastElementChild.innerHTML = `${mulheresInfo[contadorM].info}`;
  correta.firstElementChild.src = `${mulheresInfo[contadorM].link}`;
  correta.childNodes[3].innerHTML = `${mulheresInfo[contadorM].nome}`
  
  var num= 0;
  var max = 9;

  for (var i = 0; i < 4; i++) {
    if (carts[i] == correta) {
      i += 1;
    }
    while (aux2 == 0) {    
      num = Math.floor(Math.random() * 9) + 0;  
      if (sorteados.indexOf(num) == -1) {
        sorteados.push(num);        
        aux2 = 1;
      }
    }
    
    carts[i].lastElementChild.innerHTML = `${mulheresInfo[num].info}`;
    carts[i].firstElementChild.src = `${mulheresInfo[num].link}`;
    carts[i].childNodes[3].innerHTML = `${mulheresInfo[num].nome}`;
    aux2 = 0;    
    
  }
}


//Função que confere se a mulher clicada foi aquela que é a resposta correta
function geraConfere(e) {  
  
  var clicado = e.currentTarget;
  var mensagemA = document.querySelector("#msg1"); // Span para dizar se acertou ou errou
  var mulher = document.querySelector("#nomeia"); // Span para adicionar o nome da mulher que foi clicada, na janela modal
  var informacao = document.querySelector("#informacoes");  
  var mensagemE = document.querySelector("#msg2"); // Span para dizar paragenizar ou pedir que o usuário tente novamente  
  var mostraPontos = document.querySelector("#mostraPontuacao"); // Campo para apresentar a pontuação na janela modal

  if (clicado == correta) {
    min++; // Para aquela mulher não aparecer denovo 
    
    mensagemA.style= "display: show;";
    mensagemE.style = "display: none";
    mensagemA.innerHTML = "Você acertou! ";
    mulher.innerHTML = `${clicado.childNodes[3].innerHTML}`;
    mensagemA.innerHTML = "PARABÉNS! ";
    informacao.innerHTML = ` ${clicado.lastElementChild.innerText}`;
    mostraPontos.innerHTML = `+5 Pontos`;
    proximaPP.style = "display: inline-block;";

    $('#exampleModalCenter').modal('show');
    contadorM++;
       
    
    
   

  } else { // Caso a pessoa tenha errado, exibe uma janela modal com as informações da mulher na qual o usuário clicou
    proximaPP.style = "display: none;";
    mensagemA.style= "display: none;";
    mensagemE.style = "display: show";
    mensagemE.innerHTML = "Você errou! ";
    mulher.innerHTML = `${clicado.childNodes[3].innerHTML}`;
    informacao.innerHTML = ` ${clicado.lastElementChild.innerText}.`;
    mensagemE.innerHTML = "Tente novamente!";
    mostraPontos.innerHTML ="";
    $('#exampleModalCenter').modal('show');

  }


}
function fimdeJogo(){
  if(pontos >= 25){
    window.location.replace("venceu.html");    
  }else if(contadorM==10){
    window.location.replace("perdeu.html");

  }
  
}





sorteia();
exibePergunta()

for (var i = 0; i < carts.length; i++) {
  carts[i].addEventListener("click", geraConfere )// Adiciona um evento em cada uma das divs "cart" para que se possa conferir a resposta
}



$( "#proxima" ).click(function() {
  contadorD=0;
  alteraCor=0;
  pontos += 5;
  fimdeJogo();   
  mostraPlacar();
  $("h2").remove(".caixas"); 
  sorteia();
  exibePergunta();
  
});
