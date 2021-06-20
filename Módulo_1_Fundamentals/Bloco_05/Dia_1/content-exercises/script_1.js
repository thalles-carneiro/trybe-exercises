//Exercício de Fixação - Parte II - Seletores de Elementos

//Para fixar - getElementById
let paragraph = document.getElementById("paragraph");
paragraph.style.color = "red";

//1. Recupere o elemento que contém o título da página e faça algo com ele, como alterá-lo para o nome do seu filme favorito.
let favoriteFilm = document.getElementById("page-title");
favoriteFilm.innerText = "À Procura da Felicidade";

//2. Agora recupere o segundo parágrafo e use sua criatividade para alterá-lo.
let secondParagraph = document.getElementById("second-paragraph");
secondParagraph.innerText = "Em À Procura da Felicidade, Chris Gardner (Will Smith) é um pai de família que enfrenta sérios problemas financeiros. Apesar de todas as tentativas em manter a família unida, Linda (Thandie Newton), sua esposa, decide partir. Chris agora é pai solteiro e precisa cuidar de Christopher (Jaden Smith), seu filho de apenas 5 anos. Ele tenta usar sua habilidade como vendedor para conseguir um emprego melhor, que lhe dê um salário mais digno. Chris consegue uma vaga de estagiário numa importante corretora de ações, mas não recebe salário pelos serviços prestados. Sua esperança é que, ao fim do programa de estágio, ele seja contratado e assim tenha um futuro promissor na empresa. Porém seus problemas financeiros não podem esperar que isto aconteça, o que faz com que sejam despejados. Chris e Christopher passam a dormir em abrigos, estações de trem, banheiros e onde quer que consigam um refúgio à noite, mantendo a esperança de que dias melhores virão.";
secondParagraph.style.color = "blue";

//3. Por fim, recupere o subtítulo e altere-o também.
let subtitle = document.getElementById("subtitle");
subtitle.innerText = "Sinopse".toUpperCase();
subtitle.style.textDecoration = "underline";

//Para fixar - getElementsByClassName e getElementsByTagName

//1. Adicione uma classe igual para os dois parágrafos.
//R: Foi adicionada a classe 'paragraphs' aos dois parágrafos.

//2. Recupere os seus parágrafos via código JavaScript , usando a função getElementsByClassName.
let paragraphs = document.getElementsByClassName("paragraphs");


//3. Altere algum estilo do primeiro deles.
paragraphs[0].innerText = "Título original: The Pursuit of Happyness";
paragraphs[0].style.color = "violet";
paragraphs[0].style.border = "thin dotted orange";


//4. Recupere o subtítulo e altere a cor dele usando a função getElementsByTagName.
let subtitleText = document.getElementsByTagName("h4")[0];
subtitleText.style.color = "green";
