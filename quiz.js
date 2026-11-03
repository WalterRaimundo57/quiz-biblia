// Banco de perguntas: [pergunta, [4 alternativas], índice da correta, referência]
const BANK=[
["Quem construiu a arca para sobreviver ao dilúvio?",["Noé","Moisés","Abraão","Davi"],0,"Gênesis 6"],
["Quantos livros tem a Bíblia protestante?",["73","66","72","39"],1,"39 do Antigo Testamento + 27 do Novo"],
["Quem foi lançado na cova dos leões?",["Daniel","Elias","Jeremias","Ezequiel"],0,"Daniel 6"],
["Qual é o primeiro livro da Bíblia?",["Êxodo","Salmos","Gênesis","Mateus"],2,"Gênesis 1:1"],
["Quem derrotou o gigante Golias?",["Saul","Davi","Sansão","Josué"],1,"1 Samuel 17"],
["Quantos apóstolos Jesus escolheu?",["7","10","12","70"],2,"Lucas 6:13"],
["Em que cidade Jesus nasceu?",["Nazaré","Jerusalém","Belém","Cafarnaum"],2,"Mateus 2:1"],
["Quem foi engolido por um grande peixe?",["Jonas","Paulo","Pedro","Jó"],0,"Jonas 1:17"],
["Qual é o último livro da Bíblia?",["Judas","Apocalipse","Malaquias","Atos"],1,"Apocalipse"],
["Qual apóstolo negou Jesus três vezes?",["João","Tiago","André","Pedro"],3,"Lucas 22:54-62"],
["Quem foi o primeiro homem criado por Deus?",["Adão","Abel","Sete","Enoque"],0,"Gênesis 2:7"],
["Quem liderou os israelitas na saída do Egito?",["Josué","Moisés","Arão","Calebe"],1,"Êxodo 12–14"],
["Qual juiz de Israel tinha a força ligada ao cabelo?",["Gideão","Sansão","Otniel","Eúde"],1,"Juízes 16"],
["Qual foi o primeiro milagre de Jesus, em Caná?",["Multiplicou os pães","Curou um cego","Transformou água em vinho","Andou sobre o mar"],2,"João 2:1-11"],
["Quem escreveu a maior parte dos Salmos?",["Salomão","Moisés","Asafe","Davi"],3,"Atribuídos a Davi, 73 salmos"],
["Quantos dias e noites durou a chuva do dilúvio?",["7","40","12","100"],1,"Gênesis 7:12"],
["Qual discípulo traiu Jesus?",["Judas Iscariotes","Tomé","Filipe","Mateus"],0,"Mateus 26:14-16"],
["Qual filho de Jacó foi vendido pelos irmãos?",["Benjamim","Judá","José","Rúben"],2,"Gênesis 37"],
["Em qual Evangelho está o Sermão do Monte?",["Marcos","Lucas","João","Mateus"],3,"Mateus 5–7"],
["Quem foi a mãe do profeta Samuel?",["Ana","Rute","Sara","Débora"],0,"1 Samuel 1"],
["Quem foi o pai de Isaque?",["Abraão","Jacó","Noé","Ló"],0,"Gênesis 21:3"],
["Quem foi a esposa de Abraão?",["Rebeca","Sara","Raquel","Lia"],1,"Gênesis 17:15"],
["Qual filho de Abraão quase foi sacrificado?",["Ismael","Jacó","Isaque","Esaú"],2,"Gênesis 22"],
["Quem era o irmão gêmeo de Jacó?",["Esaú","Rúben","Levi","Judá"],0,"Gênesis 25:24-26"],
["Quem foi a esposa de Isaque?",["Raquel","Lia","Débora","Rebeca"],3,"Gênesis 24"],
["Quantas tribos vieram dos filhos de Jacó?",["10","12","7","14"],1,"Gênesis 35:22"],
["Qual cidade foi destruída com fogo e enxofre junto com Gomorra?",["Sodoma","Babel","Jericó","Nínive"],0,"Gênesis 19"],
["Quem virou uma estátua de sal?",["Sara","A esposa de Ló","Miriã","Agar"],1,"Gênesis 19:26"],
["Qual torre os homens tentaram construir para alcançar o céu?",["Torre de Siloé","Torre de Babel","Torre de Penuel","Torre de Davi"],1,"Gênesis 11"],
["Quem interpretou os sonhos do faraó no Egito?",["Moisés","Daniel","José","Arão"],2,"Gênesis 41"],
["Quantas pragas Deus enviou ao Egito?",["7","12","10","40"],2,"Êxodo 7–12"],
["Em que monte Moisés recebeu os Dez Mandamentos?",["Sinai","Carmelo","Hermom","Sião"],0,"Êxodo 19–20"],
["Por quantos anos os israelitas peregrinaram no deserto?",["12","70","40","100"],2,"Números 14:33"],
["Qual irmão de Moisés serviu como sumo sacerdote?",["Calebe","Arão","Josué","Hur"],1,"Êxodo 28"],
["Qual alimento caía do céu no deserto?",["Pão asmo","Mel","Maná","Figos"],2,"Êxodo 16"],
["Quem liderou Israel na conquista de Jericó?",["Moisés","Gideão","Davi","Josué"],3,"Josué 6"],
["Quem escondeu os espias israelitas em Jericó?",["Raabe","Dalila","Jezabel","Tamar"],0,"Josué 2"],
["Qual juíza e profetisa liderou Israel junto com Baraque?",["Ester","Débora","Rute","Ana"],1,"Juízes 4"],
["Com quantos homens Gideão derrotou os midianitas?",["10.000","32.000","300","1.000"],2,"Juízes 7"],
["Qual moabita seguiu a sogra Noemi até Belém?",["Rute","Orfa","Raabe","Bate-Seba"],0,"Rute 1"],
["Com quem Rute se casou em Belém?",["Elimeleque","Boaz","Obede","Jessé"],1,"Rute 4"],
["Quem foi o primeiro rei de Israel?",["Davi","Salomão","Saul","Samuel"],2,"1 Samuel 10"],
["Quem ungiu Davi como rei?",["Natã","Elias","Eli","Samuel"],3,"1 Samuel 16"],
["Qual era o nome do pai de Davi?",["Jessé","Obede","Boaz","Quis"],0,"1 Samuel 16:1"],
["Quem era o grande amigo de Davi, filho de Saul?",["Absalão","Jônatas","Joabe","Abner"],1,"1 Samuel 18"],
["Quem sucedeu Davi como rei?",["Roboão","Absalão","Salomão","Adonias"],2,"1 Reis 1–2"],
["Qual rei é famoso pela sabedoria e construiu o templo?",["Salomão","Josias","Ezequias","Acabe"],0,"1 Reis 6"],
["Qual rainha visitou Salomão para testar sua sabedoria?",["Rainha de Sabá","Jezabel","Ester","Atalia"],0,"1 Reis 10"],
["Qual profeta desafiou os profetas de Baal no monte Carmelo?",["Eliseu","Elias","Isaías","Amós"],1,"1 Reis 18"],
["Quem foi levado ao céu num redemoinho?",["Enoque","Moisés","Elias","Eliseu"],2,"2 Reis 2:11"],
["Quem recebeu o manto de Elias?",["Giazi","Jeú","Obadias","Eliseu"],3,"2 Reis 2:13"],
["Qual rainha era esposa do rei Acabe?",["Jezabel","Atalia","Vasti","Herodias"],0,"1 Reis 16:31"],
["Qual comandante sírio foi curado da lepra no rio Jordão?",["Hazael","Naamã","Ben-Hadade","Sísera"],1,"2 Reis 5"],
["Qual jovem judia se tornou rainha da Pérsia?",["Ester","Rute","Débora","Judite"],0,"Ester 2"],
["Quem era o primo e tutor de Ester?",["Hamã","Neemias","Mardoqueu","Esdras"],2,"Ester 2:7"],
["Quem reconstruiu os muros de Jerusalém?",["Esdras","Zorobabel","Ageu","Neemias"],3,"Neemias 2–6"],
["Quem perdeu tudo, mas permaneceu fiel a Deus?",["Jó","Jeremias","Jonas","Habacuque"],0,"Jó 1–2"],
["Qual livro da Bíblia vem logo depois de Gênesis?",["Levítico","Êxodo","Números","Josué"],1,"Êxodo"],
["Qual salmo começa com “O Senhor é o meu pastor”?",["Salmo 1","Salmo 51","Salmo 23","Salmo 91"],2,"Salmo 23:1"],
["Quem é tradicionalmente apontado como autor de grande parte de Provérbios?",["Davi","Salomão","Moisés","Esdras"],1,"Provérbios 1:1"],
["Qual profeta viu serafins no templo e disse “Eis-me aqui, envia-me”?",["Jeremias","Ezequiel","Isaías","Oseias"],2,"Isaías 6"],
["Qual profeta é tradicionalmente chamado de “profeta chorão”?",["Jeremias","Isaías","Daniel","Miqueias"],0,"Jeremias 9:1"],
["Qual profeta viu o vale de ossos secos?",["Isaías","Joel","Ezequiel","Zacarias"],2,"Ezequiel 37"],
["Quais três jovens foram lançados na fornalha ardente?",["Daniel, José e Davi","Sadraque, Mesaque e Abede-Nego","Mardoqueu, Hamã e Esdras","Josué, Calebe e Gideão"],1,"Daniel 3"],
["Qual rei da Babilônia mandou erguer uma estátua de ouro?",["Dario","Ciro","Nabucodonosor","Belsazar"],2,"Daniel 3"],
["Qual rei viu uma mão escrever na parede durante um banquete?",["Belsazar","Dario","Ciro","Artaxerxes"],0,"Daniel 5"],
["Qual profeta foi enviado à cidade de Nínive?",["Obadias","Jonas","Naum","Sofonias"],1,"Jonas 1:2"],
["Quantos dias Jonas ficou dentro do grande peixe?",["1","7","40","3"],3,"Jonas 1:17"],
["Qual profeta era pastor de ovelhas e cultivava sicômoros?",["Amós","Oseias","Miqueias","Naum"],0,"Amós 7:14"],
["Qual profeta se casou com Gômer?",["Joel","Oseias","Abdias","Habacuque"],1,"Oseias 1"],
["Quem foi a mãe de Jesus?",["Isabel","Marta","Maria","Maria Madalena"],2,"Lucas 1:30-31"],
["Quem foi o pai adotivo de Jesus?",["José","Zacarias","Simeão","Tiago"],0,"Mateus 1:20"],
["Qual anjo anunciou a Maria que ela daria à luz Jesus?",["Miguel","Gabriel","Rafael","Uriel"],1,"Lucas 1:26-31"],
["Quem batizou Jesus no rio Jordão?",["Pedro","Elias","Paulo","João Batista"],3,"Mateus 3:13"],
["Quem foi a mãe de João Batista?",["Isabel","Ana","Maria","Salomé"],0,"Lucas 1:57"],
["Quantos dias Jesus jejuou no deserto?",["7","21","40","30"],2,"Mateus 4:2"],
["Quem visitou o menino Jesus guiado por uma estrela?",["Pastores","Magos do Oriente","Escribas","Fariseus"],1,"Mateus 2:1-2"],
["Qual rei tentou matar o menino Jesus?",["Herodes","Pilatos","César","Agripa"],0,"Mateus 2:16"],
["Qual cobrador de impostos se tornou discípulo e escreveu um Evangelho?",["Pedro","Natanael","Mateus","Judas"],2,"Mateus 9:9"],
["Qual cobrador de impostos subiu numa árvore para ver Jesus?",["Zaqueu","Levi","Simão","Nicodemos"],0,"Lucas 19:1-4"],
["Quem Jesus ressuscitou depois de quatro dias no túmulo?",["Jairo","Lázaro","Dorcas","Êutico"],1,"João 11"],
["Quantos pães e peixes Jesus usou para alimentar cerca de 5.000 pessoas?",["7 pães e alguns peixes","5 pães e 2 peixes","12 pães e 3 peixes","3 pães e 5 peixes"],1,"Mateus 14:17-21"],
["Sobre qual mar Jesus andou?",["Mar Vermelho","Mar Morto","Mar da Galileia","Mar Mediterrâneo"],2,"Mateus 14:25"],
["Qual discípulo tentou andar sobre as águas?",["João","André","Tiago","Pedro"],3,"Mateus 14:29"],
["Qual discípulo duvidou até ver as marcas nas mãos de Jesus?",["Tomé","Filipe","Bartolomeu","Tadeu"],0,"João 20:24-29"],
["Qual irmã de Lázaro ficou ouvindo Jesus sentada aos seus pés?",["Marta","Maria de Betânia","Salomé","Joana"],1,"Lucas 10:39"],
["Em qual parábola um homem ajuda um ferido na estrada de Jericó?",["Filho Pródigo","Bom Samaritano","Semeador","Talentos"],1,"Lucas 10:25-37"],
["Em qual parábola um filho gasta a herança e depois volta para o pai?",["Filho Pródigo","Bom Samaritano","Dez Virgens","Joio e Trigo"],0,"Lucas 15:11-32"],
["Qual oração Jesus ensinou aos discípulos?",["Credo","Pai Nosso","Magnificat","Salmo 23"],1,"Mateus 6:9-13"],
["Como é chamada a última refeição de Jesus com os discípulos?",["Última Ceia","Banquete de Caná","Festa de Levi","Jantar em Betânia"],0,"Lucas 22"],
["Em qual jardim Jesus orou antes de ser preso?",["Éden","Getsêmani","Horto de Arimateia","Betânia"],1,"Mateus 26:36"],
["Quem lavou as mãos declarando-se inocente da morte de Jesus?",["Herodes","Caifás","Pôncio Pilatos","Anás"],2,"Mateus 27:24"],
["Qual prisioneiro foi libertado no lugar de Jesus?",["Barrabás","Dimas","Gestas","Simão"],0,"Mateus 27:21"],
["Como se chamava o lugar da crucificação de Jesus?",["Getsêmani","Betesda","Siloé","Gólgota"],3,"João 19:17"],
["Quem pediu o corpo de Jesus para sepultá-lo?",["Nicodemos","José de Arimateia","Pedro","Tomé"],1,"Mateus 27:57-58"],
["Quem foi a primeira a ver Jesus ressuscitado?",["Maria Madalena","Marta","Salomé","Joana"],0,"João 20:14"],
["Em qual festa o Espírito Santo desceu sobre os discípulos?",["Páscoa","Tabernáculos","Pentecostes","Purim"],2,"Atos 2"],
["Quem foi o primeiro mártir cristão, apedrejado?",["Estêvão","Tiago","Barnabé","Filipe"],0,"Atos 7"],
["Qual perseguidor dos cristãos se converteu no caminho de Damasco?",["Silas","Saulo (Paulo)","Barnabé","Timóteo"],1,"Atos 9"],
["Quem acompanhou Paulo na primeira viagem missionária?",["Timóteo","Silas","Lucas","Barnabé"],3,"Atos 13"],
["Em qual cidade Paulo e Silas estavam presos quando houve um terremoto?",["Filipos","Éfeso","Corinto","Atenas"],0,"Atos 16"],
["Quem escreveu o livro de Atos?",["Marcos","Lucas","João","Pedro"],1,"Atos 1:1"],
["Qual é o Evangelho mais curto?",["Mateus","João","Marcos","Lucas"],2,"Marcos"],
["Qual Evangelho começa com “No princípio era o Verbo”?",["João","Mateus","Marcos","Lucas"],0,"João 1:1"],
["Qual apóstolo escreveu o Apocalipse?",["Pedro","Paulo","Tiago","João"],3,"Apocalipse 1:1"],
["Em qual ilha João recebeu as visões do Apocalipse?",["Creta","Malta","Patmos","Chipre"],2,"Apocalipse 1:9"],
["Quantas igrejas recebem cartas no Apocalipse?",["12","7","10","3"],1,"Apocalipse 2–3"],
["Qual carta de Paulo traz o capítulo sobre o amor (“o amor é paciente”)?",["Romanos","Gálatas","1 Coríntios","Efésios"],2,"1 Coríntios 13"],
["Em qual carta aparece o fruto do Espírito (amor, alegria, paz…)?",["Gálatas","Filipenses","Colossenses","Tiago"],0,"Gálatas 5:22-23"],
["Qual jovem discípulo de Paulo recebeu duas cartas?",["Tito","Timóteo","Filemom","Silas"],1,"1 e 2 Timóteo"],
["Quem foi o primeiro filho de Adão e Eva?",["Abel","Sete","Caim","Enoque"],2,"Gênesis 4:1"],
["Quem Caim matou?",["Abel","Sete","Lameque","Enos"],0,"Gênesis 4:8"],
["Em que dia da criação Deus descansou?",["Sexto","Sétimo","Quinto","Oitavo"],1,"Gênesis 2:2"],
["Como se chamava o jardim onde viveram Adão e Eva?",["Getsêmani","Éden","Canaã","Betânia"],1,"Gênesis 2:8"],
["Qual sinal Deus deu como promessa de que não haveria outro dilúvio?",["Arco-íris","Estrela","Fogo","Nuvem"],0,"Gênesis 9:13"],
["Qual ave Noé enviou e voltou com um ramo de oliveira?",["Corvo","Águia","Pomba","Andorinha"],2,"Gênesis 8:11"],
["Quantos livros tem o Novo Testamento?",["27","39","24","66"],0,"Novo Testamento"],
["Qual livro da Bíblia tem o maior número de capítulos?",["Isaías","Gênesis","Jeremias","Salmos"],3,"Salmos tem 150 capítulos"],
["Quem é chamado de “pai da fé”?",["Moisés","Abraão","Davi","Noé"],1,"Romanos 4:16"],
["Qual era a profissão de Pedro e André antes de seguirem Jesus?",["Carpinteiros","Pescadores","Pastores","Cobradores de impostos"],1,"Mateus 4:18-19"]
];

const $ = id => document.getElementById(id);
const N = 10;      // perguntas no modo padrão
const LIVES = 3;   // chances de erro no modo sem fim
let mode, qs, i, score, lives, done;

const shuffle = a => {
  a = a.slice();
  for (let k = a.length - 1; k > 0; k--) {
    const j = Math.floor(Math.random() * (k + 1));
    [a[k], a[j]] = [a[j], a[k]];
  }
  return a;
};
const plural = (n, um, varios) => n + " " + (n === 1 ? um : varios);

function show(id) {
  ["menu", "game", "end"].forEach(s => $(s).classList.toggle("hide", s !== id));
}

function start(m) {
  mode = m;
  qs = shuffle(BANK);
  if (mode === "padrao") qs = qs.slice(0, N);
  i = 0; score = 0; lives = LIVES;
  $("progwrap").classList.toggle("hide", mode !== "infinito");
  $("lives").classList.toggle("hide", mode !== "infinito");
  show("game");
  render();
}

function updateStatus() {
  $("count").textContent = mode === "padrao" ? "Pergunta " + (i + 1) + " de " + N : "Pergunta " + (i + 1);
  $("pts").textContent = plural(score, "acerto", "acertos");
  $("lives").textContent = "♥".repeat(lives) + "♡".repeat(LIVES - lives);
  $("lives").setAttribute("aria-label", plural(lives, "chance restante", "chances restantes"));
  if (mode === "padrao") $("prog").style.width = (i / N * 100) + "%";
}

function render() {
  const [q, alts, ok] = qs[i];
  done = false;
  updateStatus();
  $("q").textContent = q;
  $("fb").classList.add("hide");
  $("next").classList.add("hide");
  const list = $("opts");
  list.innerHTML = "";
  shuffle(alts.map((t, k) => ({ t, right: k === ok }))).forEach((o, k) => {
    const li = document.createElement("li"), b = document.createElement("button");
    b.className = "opt";
    b.innerHTML = "<b>" + "ABCD"[k] + "</b><span></span>";
    b.lastChild.textContent = o.t;
    b.dataset.right = o.right;
    b.onclick = () => pick(b);
    li.appendChild(b);
    list.appendChild(li);
  });
}

function pick(b) {
  if (done) return;
  done = true;
  const right = b.dataset.right === "true";
  if (right) score++;
  else if (mode === "infinito") lives--;

  document.querySelectorAll(".opt").forEach(x => {
    x.disabled = true;
    if (x.dataset.right === "true") x.classList.add("ok");
    else if (x === b) x.classList.add("bad");
    else x.classList.add("dim");
  });

  let title;
  if (right) title = "Resposta certa!";
  else if (mode === "padrao") title = "Não foi dessa vez.";
  else title = lives > 0 ? "Resposta errada. Restam " + plural(lives, "chance.", "chances.") : "Resposta errada. Suas chances acabaram.";

  const fb = $("fb");
  fb.innerHTML = "<strong></strong><span></span>";
  fb.firstChild.textContent = title;
  fb.lastChild.textContent = "Referência: " + qs[i][3];
  fb.classList.remove("hide");
  updateStatus();

  const last = mode === "padrao" ? i === N - 1 : (lives === 0 || i === qs.length - 1);
  $("next").textContent = last ? "Ver resultado" : "Próxima pergunta";
  $("next").classList.remove("hide");
  $("next").focus();
}

function next() {
  i++;
  const over = mode === "padrao" ? i >= N : (lives === 0 || i >= qs.length);
  if (over) finish(); else render();
}

function finish() {
  show("end");
  $("mode-name").textContent = mode === "padrao" ? "Modo padrão" : "Modo sem fim";
  let msg, record = "";
  if (mode === "padrao") {
    $("final").textContent = score + " de " + N;
    msg = score >= 9 ? "Excelente! Você conhece muito bem as Escrituras."
        : score >= 6 ? "Muito bom! Mais uma rodada para fechar com chave de ouro?"
        : "Bom começo. Jogue de novo para fixar as respostas.";
  } else {
    $("final").textContent = plural(score, "acerto", "acertos");
    msg = i >= qs.length && lives > 0 ? "Incrível! Você respondeu todas as perguntas do banco."
        : score >= 20 ? "Impressionante! Poucos chegam tão longe."
        : score >= 10 ? "Muito bom! Veja até onde consegue chegar na próxima."
        : "Boa tentativa. Cada rodada ajuda a fixar as respostas.";
    try {
      const best = parseInt(localStorage.getItem("quiz-recorde-sem-fim"), 10) || 0;
      if (score > best) { localStorage.setItem("quiz-recorde-sem-fim", score); record = score > 0 ? "Novo recorde!" : ""; }
      else record = "Seu recorde: " + plural(best, "acerto", "acertos");
    } catch (e) { /* armazenamento indisponível */ }
  }
  $("msg").textContent = msg;
  $("record").textContent = record;
  $("record").classList.toggle("hide", !record);
}

$("m-padrao").onclick = () => start("padrao");
$("m-infinito").onclick = () => start("infinito");
$("next").onclick = next;
$("again").onclick = () => start(mode);
$("to-menu").onclick = () => show("menu");
$("quit").onclick = () => show("menu");
