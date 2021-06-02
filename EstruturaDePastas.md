# Estrutura da Pagina WEB

## Commo codificar subdiretorios em HMTL, JS e CSS

Muitas vezes paramos para perguntar como seguir o caminho das Indias, digo, das pastas em um pagina HTML, fica uma grande barafunda de pontos e barras para la e ca.

Antes de avançarmos lembre-se que em HTML  usamos a */* 

Uma duvida a menos, agora vamos a proxima parte como diria Jack, o Estripador, piadas ruins a parte, 
quando inserimos arquivos externos tais como  Imagens, Videos, Audios, *CSS* e *JS* e etc, precisamos acessar os diretórios do sistema, nessa hora começa a confusao:  **“..”** ou **“./”**

### Afinal o que significa estes símbolos?

Em linhas gerais, podemos falar que é uma forma que o servidor usa para acessar arquivos e pastas que não estão no próprio arquivo do projeto. Esta definiçao foi herdada so *Sistema UNIX*, que eram as maquinas dominates nos primordios da Internet, la no seculo passado, que se mantem até nossos dias, lembre-se é diferente da maneira usada no Sistema Windows *(MS-DOS)*

Pois bem, então precisamos mudar de diretório por via destes símbolos: *.* *..* */* *./* *../* etc


### Descrevo cada um deles:

1. *../*  Com este símbolo podemos voltar um diretório, ou seja, se você está em um diretório x dentro de y, com os .. você voltaria para o y, podendo acessar os arquivos que estão a partir de lá;

2. *./*  Acessando arquivos desta forma você está querendo acessar os arquivos que estão no diretório atual, ou seja, você tem acesso a todos os arquivos que estão na pasta deste arquivo;

3. */*  Utilizando o símbolo de barra você está indo até a raiz do projeto, ou seja, onde você terá acesso a todas as pastas/diretórios e arquivos do mesmo;

4. *../diretorio1*  Com esta instrução, você está voltando um diretório e acessando o diretorio1 na raiz do projeto;

5. */css/index.css*  Com esta instrução você está acessando a raiz do projeto, depois a pasta de arquivos CSS e o arquivo de CSS chamado index.css;

6. */diretorio1/diretorio2*  A partir da raiz do projeto, você está acessando a pasta1 e depois a pasta2;

7. *../../*  Com esta sequência você está voltando duas pastas/diretórios;

#### Importante estes sao apenas alguns exemplos.

Infelizmente em nosso dia a dia poderemos encontrar inumeras outras combinaçao, tudo a depender da imaginaçao do criador, nos exemplos listei as mais comuns de sequências/comandos para acessarem arquivos e diretorios do projeto.

### Bonus, mais exemplos

Ficou meio nebuloso né? Que tal vermos mais detalhes, com exemplos praticos:

- <link rel="stylesheet" type="text/css" href="../CSS/styles.css">
Neste exemplo, voltamos uma diretorio e acessamos a diretorio CSS e por fim o arquivo que queremos linkar no projeto

- <link rel="stylesheet" type="text/css" href="../styles.css">
No codigo acessamos o arquivo CSS que está um diretório acima deste arquivo que estamos editando

- <img class="user-photo" src="img/avatar4.png">
No codigo o diretorio de imagens está no mesmo diretório do arquivo que editamos, assim só é necessário acessar ela normalmente sem símbolos, e acessar a imagem

- <script type="text/javascript" src="../js/scripts.js"></script>
Neste codigo voltamos um diretório, para acessar o diretório JS e seu arquivo scripts.js

### Conclusão

Neste artigo espero ter ajudado a clarificar como utilizar o caminho para acesso de diretorios e arquivos numa pagina HTML de um projeto WEB.

Tivemos uma noçao do UNIX e seu sistema de navegaçao em diretorios, que foi legado a WEB e as paginas HTML (JS CSS) e gera algumas confusoes nos codificadores de origem MS Windows.

Duvidas deixe nos comentarios.