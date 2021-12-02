# CSS moderno explicado para dinossauros

Publicado em: 03/03/2018



Crédito: essa matéria é uma tradução e foi escrita por [Peter Jang](https://medium.com/@peterxjang).
URL do original: [Modern CSS Explained For Dinosaurs](https://medium.com/actualize-network/modern-css-explained-for-dinosaurs-5226febe3525)

![img](https://www.maujor.com/tutorial/css-moderno/dino1.jpg)

Crédito das imagens neste artigo: [Dinosaur Comics](https://www.qwantz.com/) by [Ryan North](https://twitter.com/ryanqnorth)

## Introdução

Por mais estranho que pareça, CSS é considerada uma linguagem de aprendizado muito fácil e ao mesmo tempo muito difícil. É, sem dúvida uma linguagem cujo aprendizado inicial é fácil —  você começa definindo propriedades e valores a serem aplicadas a determinado elemento e isso é praticamente tudo o que você precisa para começar! Contudo as coisas começam a ficar enrroladas e complicadas quando se trata de organizar as CSS de forma lógica para projetos maiores. Alteração feita em uma linha das CSS destinada a estilizar um elemento em determinada página em geral resulta em alterações indesejadas em elementos de outras páginas.

Para lidar com a complexidade das CSS, foram estabelecidos diversos tipos de *boas práticas*. O problema é que, entre tantas *boas práticas*, não há um consenso em torno do que sejam realmente as melhores práticas, e assim, muitas delas parecem completamente contraditórias. Se você está tentando aprender CSS pela primeira vez, isso pode ser atordoante para dizer o mínimo.

O objetivo deste artigo é fornecer um contexto histórico de como as abordagens e ferramentas das CSS evoluíram para o que são hoje em 2018. Ao entender essa história, será mais fácil entender cada abordagem e como usá-las em seu benefício. Vamos começar!

### Usando CSS para estilização básica

Cosidere um web site simples constituido de um arquivo **index.html** linkado a um arquivo css denominado **index.css** conforme marcação HTML mostrada a seguir:

HTML

```markup
<!DOCTYPE html>
<html lang="pt-br">
<head>
  <meta charset="utf-8">
  <title>CSS moderno</title>
  <link rel="stylesheet" href="index.css">
</head>
<body>
  <header>Este é o cabeçalho do site</header>
  <main>
    <h1>Este é conteúdo principal</h1>
    <p>Lorem ipsum...</p>
  </main>
  <nav>
    <h4>Esta é a seção de navegação</h4>
    <p>Lorem ipsum...</p>
  </nav>
  <aside>
    <h4>Esta é a seção auxiliar</h4>
    <p>Lorem ipsum...</p>
  </aside>
  <footer>Este é o rodapé do site</footer>
</body>
</html>
```

Não usamos os atributos `class` e nem `id` na marcação HTML, somente [elementos semânticos](https://developer.mozilla.org/en-US/docs/Web/HTML/Element#Content_sectioning) (link abre em nova janela).

Sem nenhuma CSS aplicada o website renderiza conforme mostrado a seguir (usando texto placeholder: Lorem ipsum...):

![screenshot do layout](https://www.maujor.com/tutorial/css-moderno/layout-basico.jpg)

Ver online o  [layout básico](https://www.maujor.com/tutorial/css-moderno/layout-basico.html) (link abre em nova janela)

 

Funcional, mas sem qualquer apelo visual. Vamos escrever regras de estilos no arquivo **index.css** para melhorar a tipografia básica:

### Estilos para tipografia básica

Baseado no tema CSS hospedado em https://github.com/oxalorg/sakura

CSS

```css
html {
  font-size: 62.5%;
  font-family: serif;
}
 body {
  font-size: 1.8rem;
  line-height: 1.618;
  max-width: 38em;
  margin: auto;
  color: #4a4a4a;
  background-color: #f9f9f9;
  padding: 13px;
}
@media (max-width: 684px) {
 body {
    font-size: 1.53rem;
  }
}
@media (max-width: 382px) {
 body {
    font-size: 1.35rem;
  }
}
h1, h2, h3, h4, h5, h6 {
  line-height: 1.1;
  font-family: Verdana, Geneva, sans-serif;
  font-weight: 700;
  overflow-wrap: break-word;
  word-wrap: break-word;
  -ms-word-break: break-all;
  word-break: break-word;
  -ms-hyphens: auto;
  -moz-hyphens: auto;
  -webkit-hyphens: auto;
  hyphens: auto;
}
h1 {
  font-size: 2.35em;
}
h2 {
  font-size: 2em;
}
h3 {
  font-size: 1.75em;
}
h4 {
  font-size: 1.5em;
}
h5 {
  font-size: 1.25em;
}
h6 {
  font-size: 1em;
}
```

As regras de estilo criadas contemplam a tipografia (tamanhos de fontes, altura de linha, etc.), algumas cores e criam um layout centrado. Você teria que ter conhecimentos de design para decidir sobre os valores CSS mais indicados para cada uma dessas propriedades tipográficas e cores (os estilos aqui apresentados são da folha de estilos [sakura.css](https://github.com/oxalorg/sakura) ), mas de qualquer modo as regras CSS mostradas não são muito complicadas de se ler e entender. O resultado da aplicação da folha de estilo é mostrado a seguir:

![screenshot do layout](https://www.maujor.com/tutorial/css-moderno/layout-tipografia.jpg)

Ver online o  [layout com tipografia básica](https://www.maujor.com/tutorial/css-moderno/layout-tipografia.html) (link abre em nova janela)

 

Que diferença! Esta é a finalidade das CSS — uma maneira simples de aplicarar estilos a um documento, sem necessidade de programação ou lógica complexa. Infelizmente, as coisas começam a ficar "cabeludas" quando usamos CSS para mais do que apenas tipografia e cores (é o que abordaremos a seguir).

### Usando CSS para layout

Na década de 1990, antes que as CSS fossem amplamente usadas, não havia muitas opções para criar o layout da página. A HTML foi originalmente concebida como uma linguagem para criar documentos simples e não sites dinâmicos com barras laterais, colunas, etc. Nos primeiros dias, o layout geralmente era feito usando tabelas HTML — toda a página web era criada dentro de uma tabela, que era usada para organizar os conteúdos em linhas e colunas. Esta abordagem funcionou, mas a desvantagem foi a mistura de conteúdo com apresentação — se você quisesse alterar o layout de um site, teria que alterar quantidades significativas da marcação HTML.

Quando as CSS entraram em cena, houve um forte empurrão para manter o conteúdo (escrito na HTML) separado da apresentação (escrita na CSS). Assim, encontraram-se maneiras de mover todo o código para criação do layout para as CSS e a HTML ficou livre das tabelas. É importante notar que, tal como a HTML, as CSS também não foram projetadas para formatar conteúdo em uma página, então as tentativas iniciais, com a separação de funções, foram difíceis de alcançar de maneira graciosa.

Vejamos como isso funciona na prática com base no nosso exemplo anterior. Antes de definir qualquer layout CSS, primeiro vamos sobrescrever as propriedades nativas para `margin` e `padding` (que afetam os cálculos de layout), bem como definir cores distintas para as seções do layout (não para torná-lo bonito, mas para distinguir visualmente cada seção).

### Estilos para resetar e aplicar cores

CSS

```css
body {    
  margin: 0;    
  padding: 0;    
  max-width: inherit;    
  background: #fff;    
  color: #4a4a4a;    
}
  header, footer {    
  font-size: large;    
  text-align: center;    
  padding: 0.3em 0;    
  background-color: #4a4a4a;    
  color: #f9f9f9;    
}
nav {    
  background: #eee;    
}
main {    
  background: #f9f9f9;    
}
aside {    
  background: #eee;    
}
```

Agora o site tem o aspecto mostrado a seguir:

![screenshot do layout](https://www.maujor.com/tutorial/css-moderno/layout-reset-e-cores.jpg)

Ver online o  [layout com reset e cores](https://www.maujor.com/tutorial/css-moderno/layout-reset-e-cores.html) (link abre em nova janela)

 

Agora, estamos prontos para usar CSS na criação de layout para os conteúdo da página. Examinaremos três abordagens diferentes em ordem cronológica, começando com os layouts clássicos baseados em boxes flutuados.

## Layout com boxes flutuados

A propriedade CSS `float` foi criada com a finalidade de flutuar uma imagem à esquerda ou à direita de um bloco de texto (um arranjo que é frequentemente usado em jornais). Os desenvolvedores web no início dos anos 2000 aproveitaram o fato de que você poderia flutuar não apenas imagens, mas qualquer elemento, para criar a ilusão de linhas e colunas ao se flutuar boxes de conteúdos. Mas, a propriedade `float` não foi projetada para este propósito, então criar a ilusão mencionada foi difícil de se conseguir de forma consistente.

Em 2006, o site [A List Apart](https://alistapart.com/) (abre em nova janela) publicou o popular artigo [In Search of the Holy Graal](https://alistapart.com/article/holygrail) (link abre em nova janela), que delineou uma abordagem detalhada e completa para criar o que era conhecido como o layout do Santo Graal — um cabeçalho, três colunas e um rodapé. Nos dias atuais soa bastante estranho chamar um layout tão simples e direto de Santo Graal, mas àquela época era muito díficil criar um layout consistente, como o proposto, usando CSS puro.



Observe a seguir as regras CSS para criar um layout baseado em elementos flutuatos e de acordo com a técnica descrita naquele artigo do site A List Apart:

CSS

```css
/* LAYOUT BASEADO EM FLOATS */
body {    
  padding-left: 200px;    
  padding-right: 190px;    
  min-width: 240px;    
}
header, footer {    
  margin-left: -200px;    
  margin-right: -190px;       
}
main, nav, aside {    
  position: relative;    
  float: left;    
}
main {    
  padding: 0 20px;    
  width: 100%;    
}
nav {    
  width: 180px;    
  padding: 0 10px;    
  right: 240px;    
  margin-left: -100%;    
}
aside {    
  width: 130px;    
  padding: 0 10px;    
  margin-right: -100%;    
}
footer {    
  clear: both;    
}
* html nav {    
  left: 150px;    
}
```

Observando a CSS, você pode notar a existência de alguns hacks que são necessários para criar o layout proposto (margens negativas, declaração `clear: both`, cálculos de largura, etc.) — o artigo explica detalhadamente cada uma das declarações CSS.

Observe a seguir o layout com floats:

![screenshot do layout](https://www.maujor.com/tutorial/css-moderno/layout-floats.jpg)

Ver online o  [layout com floats](https://www.maujor.com/tutorial/css-moderno/layout-floats.html) (link abre em nova janela)

 

Isso é bom, mas você pode observar, graças as cores de fundo, que as três colunas não são iguais em altura, e a página não preenche a altura da tela. Essas inconsistências são próprias da abordagem baseada em boxes flutuados. Um box flutuado simplesmente posiciona seu conteúdo à esquerda ou à direita da sua seção — a CSS não tem como intrinsicamente calcular as alturas do conteúdo das outras seções. Este problema, durante muitos anos, não teve solução direta até aparecer o layout baseado em flexbox.

#### Layout baseado em flexbox

A especificação CSS para Flexbox foi proposta pela primeira vez em 2009, mas não obteve uma implementação generalizada pelos navegadores até 2015. Flexbox foi projetado para definir como o espaço é distribuído em uma única coluna ou linha, o que torna um excelente candidato para criar um layout em comparação com o uso de floats. Isso significou que, após cerca de uma década de uso de layouts baseados em boxes flutuados, os desenvolvedores web finalmente conseguiram usar o CSS para layout sem a necessidade dos hacks que eram indispensáveis para criação de layouts com uso de floats.

Observe a seguir a marcação HTML e as CSS para criar um layout baseado em flexbox, conforme a ténica descrita no site [Solved by Flexbox](https://philipwalton.github.io/solved-by-flexbox/demos/holy-grail/) (abre em nova janela) — um site popular que mostra diferentes exemplos de flexbox. Observe que, para que o Flexbox funcione, precisamos de um elemento `div` extra, na marcação HTML, que serve de container para as três colunas do site.

HTML

```markup
<!DOCTYPE html>
<html lang="pt-br">
<head>
  <meta charset="utf-8">
  <title>CSS moderno</title>
  <link rel="stylesheet" href="index.css">
</head>
<body>
  <header>Este é o cabeçalho do site</header>
  <div class="container">  <!-- DIV EXTRA --> 
  <main>
    <h1>Este é conteúdo principal</h1>
    <p>Lorem ipsum...</p>
  </main>
  <nav>
    <h4>Esta é a seção de navegação</h4>
    <p>Lorem ipsum...</p>
  </nav>
  <aside>
    <h4>Esta é a seção auxiliar</h4>
    <p>Lorem ipsum...</p>
  </aside>
  </div> <!-- FIM DIV EXTRA -->   
  <footer>Este é o rodapé do site</footer>
</body>
</html>
```

CSS

```css
/* LAYOUT BASEADO EM FLEXBOX */
body {    
  min-height: 100vh;    
  display: flex;    
  flex-direction: column;    
}
.container {    
  display: flex;    
  flex: 1;    
}
main {    
  flex: 1;    
  padding: 0 20px;    
}
nav {    
  flex: 0 0 180px;    
  padding: 0 10px;    
  order: -1;    
}
aside {    
  flex: 0 0 130px;    
  padding: 0 10px;    
}
```

É isso, código CSS mais compacto em comparação com a abordagem de layout baseada em boxes flutuados! As propriedades e os valores de flexbox são um pouco confusos à primeira vista, mas o uso dessa técnica elimina a necessidade de muitos hacks como margens negativas que eram necessárias em layouts baseados em boxes flutuados — uma enorme vitória.

Observe a seguir o layout com flexbox:

![screenshot do layout](https://www.maujor.com/tutorial/css-moderno/layout-flexbox.jpg)

Ver online o  [layout com flexbox](https://www.maujor.com/tutorial/css-moderno/layout-flexbox.html) (link abre em nova janela)

 

Muito melhor! As colunas são de altura igual e ocupam a altura total da página. Em certo sentido, isso parece perfeito, mas há algumas pequenas desvantagens para essa abordagem. A primeira é o suporte oferecido pelo navegador — atualmente, todo navegador moderno suporta flexbox, mas alguns navegadores mais antigos nunca suportarão. Felizmente, os fabricantes de navegadores estão se empenhando em acabar com o suporte para os navegadores mais antigos, tornando a experiência de desenvolvimento mais consistente para os web designers. Outra desvantagem é a necessidade de se adicionar o elemento extra `<div class="container">` na marcação HTML — seria bom se isso não fosse necessário. Em um mundo ideal, qualquer layout CSS não exigiria alterar a marcação HTML.



A maior desvantagem é o próprio código CSS — Flexbox elimina muitos hacks de floats, mas o código para definir o layout não é nada intuitivo. É difícil ler a CSS para flexbox e visualizar o layout, a disposição dos elementos na página. Isso leva a muita suposição e verificação ao escrever layouts baseados em flexbox.

É importante repetir que Flexbox foi projetado para posicionar elementos dentro de uma única coluna ou linha — não foi projetado para o layout de uma página inteira! Mesmo que ele faça um trabalho útil (muito melhor do que os layouts baseados em floats), uma especificação diferente foi criada para a criação de layouts de múltiplas linhas e colunas. Esta especificação é conhecida como CSS Grid Layout.

#### Layout baseado em CSS Grid Layout

A especificação para CSS Grid Layout foi proposta pela primeira vez em 2011 (não muito tempo após a proposta para flexbox), mas demorou muito para ser implementada nos navegadores. A partir do início de 2018, essa tecnologia foi implementada pela maioria dos navegadores modernos (uma grande melhoria em relação a um ou dois atrás).

Abaixo mostramos um layout baseado em CSS Grid Layout inspirado no método mostrado no artigo hospedado em [CSS tricks article](https://css-tricks.com/css-grid-one-layout-multiple-ways/) (link abre em nova janela). Notar que, neste exemplo, não houve necessidade do `<div class="container">` que normalmente adicionamos para criar um layout baseado em flexbox — aqui usamos simplesmente a marcação HTML original sem modificação.

Observe as CSS:

CSS

```css
/* LAYOUT BASEADO EM CSS GRID LAYOUT */
body {    
  display: grid;    
  min-height: 100vh;    
  grid-template-columns: 200px 1fr 150px;    
  grid-template-rows: min-content 1fr min-content;    
}
header {    
  grid-row: 1;    
  grid-column: 1 / 4;    
}
nav {    
  grid-row: 2;    
  grid-column: 1 / 2;    
  padding: 0 10px;    
}
main {    
  grid-row: 2;    
  grid-column: 2 / 3;    
  padding: 0 20px;    
}
aside {    
  grid-row: 2;    
  grid-column: 3 / 4;    
  padding: 0 10px;    
}
footer {    
  grid-row: 3;    
  grid-column: 1 / 4;    
}
```

O resultado é visualmente idêntico ao layout baseado em flexbox. No entanto, a CSS aqui é melhor no sentido de que ela expressa claramente o layout desejado. O tamanho e a forma das colunas e das linhas são definidos no seletor `body` e cada item do grid é definido diretamente em função da sua posição.

Uma propriedade que pode ser confusa é `grid-column-property`, destinada a definir o ponto inicial e o ponto final da coluna. Pode ser confuso porque, neste exemplo, existem 3 colunas, mas os números variam de 1 a 4. Torna-se mais claro quando você observa a imagem a seguir:

![screenshot do layout](https://www.maujor.com/tutorial/css-moderno/layout-grid.png)

Ver online o  [layout com grid](https://www.maujor.com/tutorial/css-moderno/layout-grid.html) (link abre em nova janela)

 

A primeira coluna começa em 1 e termina em 2, a segunda coluna começa a 2 e termina em 3, e a terceira coluna começa em 3 e termina em 4. Para o cabeçalho o valor de `grid-column` é 1 / 4 ou seja começa em 1 e termina em 4 de modo a abranger toda a página, para a seção de navegação o valor de `grid-column` é 1 / 2 ou seja ocupa a primeira coluna, e assim por diante.



Depois que você se acostuma com a sintaxe de Grid Layout constatará que se trata da maneira ideal de expressar o layout com uso de CSS. A única desvantagem real para um layout baseado em Grid Layout é o suporte oferecido pelos navegadores, que felizmente melhorou muito no ano passado. É difícil superestimar a importância do Grid Layout como sendo a primeira ferramenta CSS que foi realmente projetada para layout. Os web designers sempre tiveram que ser muito conservadores quando se trata de projetar layouts criativos uma vez que as ferramentas CSS, até agora, eram limitadas e impunham a utilização de vários hacks e soluções alternativas. Agora que temos à disposição as funcionalidades de Grid Layout, criou-se a possibilidades de se desenvolver projetos de layouts muito mais criativos que não seriam viáveis no passado — tempos excitantes!

![img](https://www.maujor.com/tutorial/css-moderno/dino2.jpg)

## Nova sintaxe com uso de pré-processadores CSS

Até agora, mostramos o uso de CSS para estilização básica, bem como para layout. Agora vamos apresentar as ferramentas criadas para ajudar a melhorar a experiência de escrever CSS como uma linguagem em si, começando com os pré-processadores CSS.

Um pré-processador CSS permite que você escreva CSS usando uma linguagem diferente para ser convertida nas CSS que o navegador entenda. No passado tal conversão foi problemática em função da lentidão dos fabricantes de navegadores em implementar novas funcionalidades. O primeiro grande pré-processador CSS foi o SASS , lançado em 2006. Ele apresentou uma nova sintaxe bem concisa (indentação em vez de colchetes, sem ponto e vírgula, etc.) e adicionou características avançadas não disponíveis nas CSS, como variáveis, funções auxiliares e cálculos.

Observe a seguir a declaração de cores do nosso exemplo anterior definida segundo o uso de variáveis e sintaxe SASS:

#### SASS

```css
$dark-color: #4a4a4a    
  $light-color: #f9f9f9    
  $side-color: #eee
  
body    
  color: $dark-color    
      
header, footer    
  background-color: $dark-color    
  color: $light-color    
      
main    
  background: $light-color

nav, aside    
  background: $side-color
```

Notar a definição das variáveis com uso do símbolo $ e a sua reutilização, colchetes e ponto-e-vírgulas são eliminados, criando uma sintaxe de aparência mais limpa. A sintaxe mais limpa no SASS é agradável e o uso de variáveis foi uma criação revolucionária na época, pois abriram-se novas possibilidades para escrever CSS limpo e de fácil manutenção.

Para usar SASS, você precisa instalar Ruby, a linguagem de programação utilizada para compilar o código SASS para CSS regular. A seguir você precisaria instalar a gem SASS e depois executar um comando na linha de comando para converter seus arquivos .sass em arquivos .css.



Observe a seguir o comando na CLI:

#### SASS

```css
sass --watch index.sass index.css
```

Esse comando converte a sintaxe SASS escrita no arquivo index.sass para a sintaxe CSS escrita no arquivo index.css (o argumento  `--watch` faz com que que toda vez que o arquivo index.sass for salvo em razão de uma alteração nele feita imediatamente as alterações sejam convertidas em sintaxe CSS regular e automaticamente salvas no arquivo index.css).

Este processo é conhecido "build step" (nota do tradutor: conversão de código em linguagem capaz de ser interpretada pelo navegador), e foi uma barreira difícil de ser transposta nos idos de 2006. Se você estiver acostumado a linguagens de programação como o Ruby, o processo é bastante direto. Mas muitos desenvolvedores frontend àquela época só trabalhavam com HTML e CSS, o que não exigia nenhuma dessas ferramentas. Então, foi um grande desafio para alguém aprender um ecossistema inteiro para obter os recursos oferecidos por um pré-processador CSS.



Em 2009, o pré-processador LESS CSS foi lançado. Também foi escrito em Ruby, e ofereceu recursos semelhantes ao SASS. A diferença principal foi a sintaxe, que foi projetada para ser tão próxima do CSS quanto possível. Isso significa que qualquer código CSS é válido na sintaxe LESS.

Observe a seguir o mesmo código anterior escrito com sintaxe LESS:

#### LESS

```css
@dark-color: #4a4a4a;    
@light-color: #f9f9f9;    
@side-color: #eee;

body {    
  color: @dark-color;    
}    
      
header, footer {    
  background-color: @dark-color;    
  color: @light-color;    
}    
      
main {    
  background: @light-color;    
}
nav, aside {    
  background: @side-color;    
}
```

A sintaxe LESS é semelhante à sintaxe SASS ( usa o prefixo @ em vez do símbolo $ para variáveis ), mas não tão bonita como a sintaxe SASS, usa ainda colchetes e ponto e vírgula tal como a sintaxe CSS. No entanto, o fato de ser uma sintaxe mais parecida com a sintaxe CSS tornou-se mais fácil para os desenvolvedores adotá-la. Em 2012, LESS foi reescrito para usar JavaScript (especificamente Node.js ) em vez de Ruby para compilação. Isso tornou LESS mais rápido do que suas contrapartes Ruby, e tornou mais atraente para os desenvolvedores que já estavam usando Node.js em seus fluxos de trabalho.

Para converter código LESS em código CSS regular, primeiro você precisará instalar Node.js e a seguir instalar LESS

Depois basta executar o seguinte comando na CLI:

#### LESS

```css
lessc index.less index.css
```

Este comando irá converter código LESS escrito em um arquivo chamado index.less para código escrito em CSS regular em um arquivo chamado index.css. Observe que o comando `lessc` não vem requer um argumento para converter a sintaxe (ao contrário do comando sass com o argumento `--watch`), o que significa que você não precisa instalar uma ferramenta diferente para monitorar e compilar arquivos .less automaticamente, adicionando um pouco mais de complexidade ao processo. Ressalte-se que isso não é difícil para programadores que estão acostumados a usar ferramentas de linha de comando, mas é uma barreira significativa para a entrada daqueles que simplesmente querem usar um pré-processador CSS.

À medida que LESS ganhou notoriedade, os desenvolvedores da SASS se adaptaram e adicionaram uma nova sintaxe chamada [SCSS](https://sass-lang.com/documentation/file.SASS_CHANGELOG.html#SCSS__Sassy_CSS_) (link abre em nova janela) em 2010 (que é um superconjunto de CSS semelhante a LESS). Eles também lançaram a [LibSass](https://sass-lang.com/libsass) (link abre em nova janela) , uma porta C / C ++ do motor Ruby Sass, que tornou mais rápido e capaz de ser usado em vários idiomas.

Outra alternativa de pré-processador CSS é o [Stylus](https://stylus-lang.com/) (link abre em nova janela), que surgiu em 2010, escrito em Node.js, e se concentra em sintaxe mais limpa em comparação com SASS ou LESS. Normalmente, as escolhas de pré-processadores CSS se concentram nesses três como os mais populares (SASS, LESS e Stylus). No final, eles são bastante semelhantes em termos dos recursos que oferecem, então você não fará uma má escolha se escolher qualquer um deles.

No entanto, algumas pessoas argumentam que os pré-processadores CSS estão se tornando desnecessários, já que os navegadores estão finalmente começando a implementar recursos avançados das CSS (como variáveis e cálculos). Além disso, há uma abordagem diferente conhecida como pós-processamento CSS que tem o potencial de tornar os pré-processadores CSS obsoletos (obviamente, sem controvérsia) e que veremos a seguir.

### Usando pós-processadores CSS para funcionalidades de transformação

Um pós-processador CSS usa JavaScript para analisar e transformar seu CSS em CSS válido. Nesse sentido, é bastante semelhante a um pré-processador CSS — você pode pensar nisso como uma abordagem diferente para resolver o mesmo problema. A diferença fundamental é que, enquanto um pré-processador CSS usa sintaxe especial para identificar o que precisa ser transformado, um pós-processador CSS pode analisar CSS regular e transformá-lo sem neessidade de qualquer sintaxe especial. Isto é melhor ilustrado com um exemplo.

Considere um trecho CSS que foi escrito para definir estilo para as tags de cabeçalho conforme mostrado a seguir:

CSS

```css
h1, h2, h3, h4, h5, h6 {    
   -ms-hyphens: auto;    
  -moz-hyphens: auto;    
  -webkit-hyphens: auto; 
  hyphens: auto;    
}
```

As três primeiras declarações usam os chamados prefixos proprietários. Prefixos proprietários são implementados pelos fabricantes e usados pelos navegadores para adicionar e testar novos recursos CSS, propiciando uma maneira para que os desenvolvedores usem essas novas propriedades CSS enquanto a implementação está sendo finalizada. O prefixo `-ms` é para o Microsoft Internet Explorer, o prefixo `-moz` é para o Mozilla Firefox e o prefixo `-webkit` é para navegadores usando o mecanismo de renderização do webkit (como o Google Chrome, o Safari e versões mais recentes do Opera).

É muito irritante lembrar de colocar todos esses diferentes prefixos de fornecedores para usar uma propriedades CSS em fase de teste. Seria bom ter uma ferramenta que colocasse automaticamente os prefixos dos fornecedores conforme necessário. Podemos fazer isso com os pré-processadores CSS. Por exemplo, você poderia fazer algo com SCSS conforme mostrado a seguir:

#### LESS

```css
h1, h2, h3, h4, h5, h6 {    
@mixin hyphens($value) {    
  -ms-hyphens: $value;    
  -moz-hyphens: $value;    
  -webkit-hyphens: $value;    
  hyphens: $value;    
}

h1, h2, h3, h4, h5, h6 {
  @include hyphens(auto);    
}
```

Aqui estamos usando [Sass’ mixin feature](https://sass-lang.com/guide#topic-6) (link abre em nova janela), uma funcionalidade de Less que permite definir um bloco de código uma vez e reutilizá-lo em outros lugares. Quando este arquivo é compilado para CSS regular, quaisquer declarações `@include` serão transformadas em sintaxe CSS correspondente ao bloco de código do `@mixin`. Em geral, esta não é uma solução ruim, mas você precisa definir o *mixin* para toda propriedade CSS que exija prefixos proprietários. Os *mixins* exigirão manutenção, pois você poderá querer remover prefixos proprietários específicos que você não irá precisar mais, pois os navegadores atualizam seus suporte para as CSS.

Em vez de usar *mixins*, seria bom simplesmente escrever CSS normal e ter uma ferramenta capaz de identificar e adicionar automaticamente prefixos os proprietários nas propriedades CSS que o requerem. Um pós-processador CSS é capaz de fazer exatamente isso. Por exemplo, se você usar o [PostCSS](https://postcss.org/) (link abre em nova janela) com o [autoprefixer plugin](https://github.com/postcss/autoprefixer) (link abre em nova janela), você pode escrever CSS regular sem prefixos proprietários e deixar o pós-processador fazer o resto do trabalho:

#### LESS

```css
h1, h2, h3, h4, h5, h6 { 
  hyphens: auto;   
}
```

Quando você executa o pós-processador CSS no código mostrado anteriormente, o resultado é que a linha `hyphens: auto;` é substituída por todos os prefixos proprietários apropriados (conforme definido no plugin autoprefixex, o qual você não precisa alterar diretamente). Isso significa que você pode escrever CSS regular sem ter que se preocupar com nenhuma compatibilidade ou sintaxe especial, o que é bom!

Existem outros plugins para o PostCSS que permitem que você faça coisas realmente legais. O plugin [cssnext](https://cssnext.io/) (link abre em nova janela) permite que você use as funcionalidades CSS que se encontram em fase experimental. O plug-in [CSS modules](https://github.com/css-modules/css-modules) (link abre em nova janela) muda automaticamente as classes para evitar conflitos de nomes. O plugin [stylelint](https://stylelint.io/) (link abre em nova janela) identifica erros e convenções inconsistentes em seu CSS. Essas ferramentas realmente começaram a decolar no último ano ou dois, possibilitando fluxos de trabalho do desenvolvedor que nunca foram possível antes!



No entanto, há um preço a pagar por todo esse progresso. Instalar e usar um pós-processador CSS como o PostCSS é mais complicado que instalar e usar um pré-processador CSS. Não basta instalar e executar a ferramenta usando a linha de comando, você precisa instalar e configurar plugins individuais e definir um conjunto de regras mais complexas (tais como, quais navegadores você está servindo, etc.) Em vez de executar o PostCSS diretamente na linha de comando, muitos desenvolvedores o integram em sistemas de compilação configuráveis como [Grunt](https://github.com/postcss/postcss#runners) (link abre em nova janela), [Gulp](https://github.com/postcss/postcss#gulp) (link abre em nova janela), ou [webpack](https://github.com/postcss/postcss#webpack) (link abre em nova janela), que ajudam a gerenciar todas as diferentes ferramentas de compilação que você pretende usar em seu fluxo de trabalho de frontend.

> **Nota**: Pode ser bastante tentador aprender todas as técnicas e tecnologias necessárias para projetar um "build system work" moderno se você nunca usou um antes. Se você quer começar do zero, confira meu artigo [Modern JavaScript Explained For Dinosaurs](https://medium.com/the-node-js-collection/modern-javascript-explained-for-dinosaurs-f695e9747b70) (link abre em nova janela), que faz um apanhado geral de todas as ferramentas JavaScript necessárias para aproveitar as funcionalidades modernas disponíveis para o desenvolvedor de frontend.

Vale a pena ressaltar que há debates sobre os pós-processadores CSS. Alguns argumentam que a terminologia é confusa ( [um dos argumentos](https://css-tricks.com/the-trouble-with-preprocessing-based-on-future-specs/) — link abre em nova janela — é que todos deveriam ser chamados de pré-processadores CSS, [outro argumento](https://medium.com/@ddprrt/deconfusing-pre-and-post-processing-d68e3bd078a3) (link abre em nova janela) é que eles deveriam ser simplesmente chamados de processadores CSS, etc.). Alguns acreditam que os pós-processadores CSS eliminam completamente a necessidade de pré-processadores CSS, alguns acreditam que devem ser usados em conjunto. De qualquer forma, é claro que aprender a usar um pós-processador CSS vale a pena se você estiver interessado em dar um passo adiante no que é possível de se fazer com a CSS.

![img](https://www.maujor.com/tutorial/css-moderno/dino3.jpg)

## Metodologias CSS para manutenção

Ferramentas como pré-processadores CSS e pós-processadores CSS ajudam a melhorar a experiência de desenvolvimento CSS. Mas essas ferramentas por si só não são suficientes para resolver o problema de manter grandes bases de código CSS. Para resolver isso, as pessoas começaram a documentar diferentes diretrizes sobre como escrever CSS, geralmente designadas como metodologias CSS.

Antes de mergulhar em qualquer metodologia CSS particular, é importante entender o que torna o CSS difícil de manter ao longo do tempo. A questão chave é a natureza global do CSS — todos os estilos que você define são aplicados globalmente em todas as partes da página. Isso exige trabalho para criar uma convenção sintática detalhada com a finalidade de manter nomes de classe únicos e também para lidar com [regras de especificidade](https://www.smashingmagazine.com/2007/07/css-specificity-things-you-should-know/) (link abre em nova janela) determinando com precisão qual estilo será aplicado a qual elemento. As metodologias CSS fornecem uma maneira organizada de escrever CSS para evitar esses pontos nevrálgicos em bases de código grandes. Vamos dar uma olhada em algumas das metodologias populares em ordem cronológica.

### OOCSS

[OOCSS](https://github.com/stubbornella/oocss/wiki) (link abre em nova janela) - Object Oriented CSS foi apresentado pela primeira vez em 2009 como uma metodologia organizada em torno de dois princípios básicos. O primeiro princípio é o da separação da estrutura e apresentação (skin). Isso significa que a CSS destinada a definir a estrutura (como layout) e não deve ser misturada com a CSS destinada a definir a apresentação (como cores, fontes, etc.). Isso torna mais fácil alterar somente a apresentação (re-skin) do aplicativo, maqntendo sua estrutura. O segundo princípio é o da separação do container e conteúdos. Isso significa pensar e projetar elementos como objetos reutilizáveis, com a idéia-chave de que um objeto deve parecer o mesmo independentemente de onde está na página.

O OOCSS fornece diretrizes bem pensadas, mas não é muito prescritivo quanto às especificidades da abordagem. Abordagens posteriores, como o SMACSS, tomaram os conceitos básicos e adicionaram mais detalhes para facilitar o estudo e entendimento da metodologia.

### SMACSS

[SMACSS](https://smacss.com/) (link abre em nova janela) - (Scalable and Modular Architecture for CSS) foi introduzido em 2011 como uma metodologia baseada na escrita das CSS em 5 categorias distintas —  **regras básicas**, **regras de layout**, **módulos**, **regras do estado** e **regras do tema**. A metodologia SMACSS também recomenda algumas convenções sintáticas. Para regras de layout, prefira nomes de classe com uso do prefixo *l-* ou *layout-*. Para regras do estado, prefira nomes de classes que descrevem o estado, como *is-hidden* ou *is-collapsed*.

O SMACSS tem muito mais detalhes em sua abordagem em relação ao OOCSS, mas ainda requer algum pensamento cuidadoso ao decidir quais regras CSS devem entrar em qual categoria. Abordagens posteriores, como o BEM, retiraram algumas dessas decisões para torná-lo ainda mais fácil de adotar.

### BEM

[BEM](https://en.bem.info/) (link abre em nova janela) - (Block, Element, Modifier) foi introduzido em 2010 como uma metodologia organizada em torno da idéia de dividir a interface do usuário em blocos independentes. Um **bloco** é um componente reutilizável (um exemplo seria um formulário de pesquisa, definido como *<form class="search-form"></form>*). Um **elemento** é uma parte menor de um bloco que não pode ser reutilizado por conta própria (um exemplo seria um botão no formulário de pesquisa, definido como *<button class="search-form__button">Search</button>*). Um **modificador** é uma entidade que define a aparência, o estado ou o comportamento de um bloco ou elemento (um exemplo seria um botão de formulário de pesquisa desativado, definido como *<button class="search-form__button search-form__button--disabled">Search</button>*).

A metodologia BEM é simples de se entender, com uma convenção sintática específica que permite que os recém-chegados a apliquem sem ter que tomar decisões complexas. A desvantagem para alguns é que os nomes das classes podem ser bastante detalhados e não seguem as regras tradicionais para [escrever nomes de classes semânticas](https://css-tricks.com/semantic-class-names/) (link abre em nova janela). Abordagens posteriores, como o CSS Atomic, levariam essa abordagem não tradicional a um outro nível!

### Atomic CSS

[Atomic CSS](https://www.smashingmagazine.com/2013/10/challenging-css-best-practices-atomic-approach/) (link abre em nova janela) — também conhecido como CSS Funcional foi introduzido em 2014 como uma metodologia organizada em torno da idéia de criar pequenas classes com propósito único e nomes baseados na sua função visual. Esta abordagem está em completa oposição com OOCSS, SMACSS e BEM — em vez de tratar elementos na página como objetos reutilizáveis, o CSS Atomic ignora completamente esses objetos e usa classes de propósito único reutilizáveis para modelar cada elemento. Então, em vez de algo parecido *<button class="search-form__button">Search</button>*, você teria algo como *<button class="f6 br3 ph3 pv2 white bg-purple hover-bg-light-purple">Search</button>.*

Se a sua primeira reação a este exemplo é recuar em horror, você não está sozinho — muitas pessoas consideraram essa metodologia como uma violação completa das boas práticas recomendadas para as CSS. No entanto, tem havido muita discussão e questionamentos sobre a eficácia das chamadas boas práticas em diferentes cenários. [Este artigo](https://adamwathan.me/css-utility-classes-and-separation-of-concerns/) (link abre em nova janela) faz uma ótima reflexão, destacando como a separação tradicional de funções acaba criando CSS que depende da HTML (mesmo quando se utilizam metodologias como BEM), enquanto uma abordagem atômica ou funcional é sobre a criação de HTML dependente da CSS. Não é errado, mas, após minuciosa análise, você constatará que uma verdadeira separação de funções entre CSS e HTML nunca é totalmente alcançável!



Outras metodologias CSS como o CSS no JS realmente adotam a noção de que CSS e HTML sempre dependerão um do outro, levando a uma das metodologias mais controversa ainda ...

### CSS em JS

[CSS em JS](https://blog.vjeux.com/2014/javascript/react-css-in-js-nationjs.html) (link abre em nova janela) foi introduzido em 2014 como uma metodologia organizada em torno da definição de estilos CSS não em uma folha de estilo separada, mas diretamente em cada componente. Foi introduzido como uma abordagem para a estrutura do [React JavaScript framework](https://reactjs.org/) (link abre em nova janela) que adotou a abordagem controversa de definir a HTML para um componente diretamente com JavaScript em vez de em um arquivo HTML separado. Originalmente, a metodologia usava estilos inline, mas as implementações posteriores usavam a JavaScript para gerar CSS (com nomes de classes únicos baseados no componente) e inseri-la no documento com uso da tag `<style>`.

A CSS da metodologia JS, uma vez mais, vai completamente contra as melhores práticas CSS estabelecidas com relação a separação de funções. Isso ocorre porque a maneira como usamos a web mudou dramaticamente ao longo do tempo. Originalmente, a web consistiu principalmente em sites estáticos — aqui a separação do conteúdo HTML da apresentação CSS faz muito sentido. Atualmente, a web é usada para criar aplicações web dinâmicas — aqui faz sentido separar as coisas por componentes reutilizáveis.

O objetivo da CSS na metodologia JS é poder definir componentes com limites rígidos que consistem em seus próprios HTML / CSS / JS encapsulados, de modo que o CSS em um componente não tenha chance de afetar outros componentes. React foi um dos primeiros frameworks amplamente adotados que adotaram a abordagem de componentes rígidos, influenciando outros frameworks importantes como Angular, Ember e Vue.js. É importante notar que a CSS na metodologia JS é relativamente nova, e há muita experimentação nesse campo, já que os desenvolvedores tentam estabelecer novas práticas recomendadas para CSS na era dos componentes para aplicativos da web.

É fácil ficar-se sobrecarregado com as muitas metodologias CSS diferentes que estão por aí, mas é importante ter em mente que não há uma abordagem certa — você deve pensar nelas como diferentes ferramentas possíveis que você pode usar quando você possui um CSS suficientemente complexo. Ter diferentes opções bem-pensadas para escolher, conta muito a seu favor, e toda a experimentação recente que acontece neste campo beneficia todos os desenvolvedores a longo prazo!

## Conclusão

Então, isso é a CSS moderna em poucas palavras. Cobrimos os assuntos **usando CSS para estilização básica** com propriedades tipográficas, **usando CSS para layout** usando float, flexbox e grid, **usando pré-processadores CSS para nova sintaxe**, como variáveis e mixins, **usando pós-processador CSS para funcionalidades de transformação**, tais como a adição de prefixos proprietários, e **usando metodologias CSS para manutenção** para lidar com a natureza global dos estilos CSS. Não tivemos a chance de explorar muitos outros recursos que a CSS oferece, como seletores, transições, animações, formas e variáveis dinâmicas avançadas — a lista continua. Há muito terreno para cobrir com CSS — qualquer um que diga que é fácil provavelmente não conhece a metade!

A CSS moderna definitivamente pode ser frustrante para trabalhar, pois continua a mudar e evoluir em ritmo acelerado. Mas é importante lembrar o contexto histórico de como a web evoluiu ao longo do tempo, e é bom saber que existem muitas pessoas inteligentes que estão dispostas a criar ferramentas e metodologias concretas para ajudar as melhores práticas CSS a evoluir junto com a web . É um momento emocionante para os desenvolvedores, e espero que esta informação possa servir de roteiro para ajudá-lo na sua jornada!

![img](https://www.maujor.com/tutorial/css-moderno/dino4.jpg)

*Expresso mais uma vez meus agradecimentos a [@ryanqnorth](https://twitter.com/ryanqnorth)’s  [Dinosaur Comics](https://www.qwantz.com/), que nos brinda com seu fino humor do absurdo desde 2003 (época em que os dinossauros habitavam a web).*

## Nota do tradutor

![img](https://www.maujor.com/tutorial/css-moderno/dino5.jpg)

O crédito para essa imagem é para um colaborador do site do Maujor.

Eu pertenço a família *Maujorsauro Rex* dos dinossauros. Trata-se de uma família de dinossauros "modernos" que ao contrário do dinossauro verde que ilustra esta matéria, usa, acredita, acha maravilhosa e divulga as CSS modernas. ![smile](https://www.maujor.com/.smileys/smiley2.gif)