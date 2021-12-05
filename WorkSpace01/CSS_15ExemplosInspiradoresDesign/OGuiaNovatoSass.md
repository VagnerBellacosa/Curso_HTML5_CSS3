# O guia do novato para Sass

Você pode ter ouvido falar de pré-processamento de CSS e estar se perguntando sobre o que é todo esse burburinho. Você pode até ter ouvido falar de [Sass](http://sass-lang.com/) ou [MENOS](http://lesscss.org/) .

Em suma, o pré-processamento do seu CSS permite que você escreva folhas de estilo mais concisas, formatadas de forma agradável e que requerem técnicas menos repetitivas, comumente encontradas ao escrever códigos CSS. O resultado é um estilo mais dinâmico e uma grande quantidade de tempo economizado ao desenvolver sites ou aplicativos.

Se você já escreve CSS, então você pode facilmente aprender a pré-processar seu CSS. Depois de entender o escopo do Sass, você se perguntará por que não mudou mais cedo.



## Como o Sass é diferente do CSS?

O Sass é parecido com o CSS, mas tem suas diferenças óbvias quando você mergulha. Há duas maneiras de escrever o Sass e cabe a você decidir qual estilo você prefere. Eu uso o estilo recuado e entre colchetes (.scss) em meus projetos porque gosto de visualizar realmente onde um bloco termina e começa quando um monte de código fica aninhado. Uma vez processado, o código Sass é compilado automaticamente para o CSS tradicional usando um mecanismo de pré-processamento.

Existem muitos aplicativos disponíveis que permitem pré-compilar o seu Sass para ser fácil e direto. Para instalar, você pode usar a linha de comando, desde que você tenha o Ruby instalado em sua máquina. Se você não está confortável com a linha de comando, existem outras opções (mais sobre isso abaixo) e se isso for sobre sua cabeça, visite Sass-lang.com para aprender como fazer isso em um formato passo-a-passo simples. No final, usando qualquer método, seja a linha de comando ou o aplicativo, a instalação do Sass assistirá às suas alterações e compilará automaticamente para o CSS tradicional para você.

Eu recomendo usar aplicativos como [Codekit](http://incident57.com/codekit/) , [LiveReload](http://livereload.com/) ou [Mistura](http://mixture.io/) que ajuda você a configurar um projeto Sass em um Mac a partir do zero ou se você é um usuário do Windows eu recomendo [PrePros](http://alphapixels.com/prepros/) . O Codekit, minha opção de pré-processador, me ajuda a pré-processar meu Sass, além de validar e reduzir seu código para permitir que seu site seja executado de maneira rápida e eficaz. (A capacidade de criar [Bússola](http://compass-style.org/) ou [Bourbon](http://bourbon.io/) projetos baseados no Codekit também é um recurso incrível, mas está além do escopo deste artigo.) Depois de se familiarizar com o Sass, confira como usar o Compass eo Bourbon em seus projetos Sass.



## Então, o que é Sass?

Sass significa Syntactically Awesome Stylesheets e foi criado por [Hampton Catlin](http://www.hamptoncatlin.com/) . O Sass introduz novos conceitos como variáveis, mixins e aninhamento no código CSS que você já conhece e adora. Estes conceitos, em última análise, tornam o seu CSS impressionante, mais fácil de escrever e mais dinâmico. Todos esses recursos combinados aceleram o fluxo de trabalho de qualquer projetista ou desenvolvedor.

O que comumente confunde as pessoas são as formas alternativas de escrever Sass. Você verá outros tutoriais ou explicações do Sass usando o .SCSS ou a extensão .Sass para seus arquivos Sass. Isso é aparente porque existem duas maneiras de escrever o código que produzem a mesma saída. O mais comum que já vi e o método que uso atualmente é a versão entre colchetes conhecida como .SCSS. Outro método é a extensão .Sass, que depende mais do recuo do que de elementos pontuais e depende do espaço em branco. Com essa sintaxe, não há necessidade de ponto-e-vírgula ou parênteses, como você vê no CSS e na sintaxe .SCSS.

Confira o exemplo abaixo.

### .CSS

```css
#container {width:960px;margin:0 auto;}#container p {color: black;}
```

### .SCSS

```php
/* Same as CSS but has variables and nesting. */$black: #000000;#container {width:960px;margin:0 auto;p {color :$black;}}
```

### .Sass

```php
/* Same as SCSS without semicolons, brackets, and more dependent on indentation. */$black: #000000#containerwidth:960pxmargin: 0 autopcolor:$black
```



## Estrutura

Ok, então agora você provavelmente está se perguntando como obter a configuração do Sass para seus próprios projetos. O processo é muito fácil, especialmente se você usar o Codekit ou um aplicativo semelhante para ajudá-lo ao longo do caminho.

Uma típica estrutura de arquivos de um projeto Sass se parece com o esquema abaixo. Isso pode parecer assustador, mas prometo que seu fluxo de trabalho irá melhorar quando você entender como as coisas funcionam juntas. No final, todo o seu Sass é compilado em um arquivo CSS, que será o arquivo incluído nos seus documentos de trabalho, seja HTML, PHP, etc…

```css
stylesheets/||-- modules/ # Common modules| |-- _all.scss # Global level styles| |-- _utility.scss # Basic utility styles| |-- _colors.scss # Global Colors| ...||-- partials/ # Partials - use these to target specific styles and @import on _base.scss| |-- _base.scss # imports for all mixins + global project variables| |-- _buttons.scss # buttons| |-- _figures.scss # figures| |-- _grids.scss # grids| |-- _typography.scss # typography| |-- _reset.scss # reset| ...||-- vendor/ # CSS or Sass from other projects| |-- _colorpicker.scss| |-- _jquery.ui.core.scss| ...||-- main.scss # primary Sass file - where your main Sass code will likely be.
```

Como você define sua estrutura depende de você. Comece com uma estrutura básica e ajuste suas próprias necessidades e fluxo de trabalho.



## @Importar

O Sass estende a regra CSS *@import* para permitir a importação de arquivos Sass e SCSS. Todos os arquivos importados são mesclados em um único arquivo CSS de saída. Além disso, quaisquer variáveis ou mixins definidos em arquivos importados são transferidos para o arquivo principal, o que significa que você pode misturar e combinar virtualmente qualquer arquivo e ter certeza de que todos os seus estilos permanecerão em um nível global.

@import leva um nome de arquivo para importar. Como último recurso, os arquivos Sass ou SCSS serão importados por meio do nome de arquivo de sua escolha. Se não houver nenhuma extensão, o Sass tentará encontrar um arquivo com esse nome e a extensão .scss ou .Sass e importá-lo.

Se você tiver uma configuração típica do projeto Sass, observará algumas regras @import dentro de um arquivo base. Isso simplesmente permite que você tenha vários arquivos que são sincronizados de forma eficaz depois de compilados, por exemplo:

```css
@import "main.scss";
```

ou:

```css
@import "main";@Partials
```

Se você tiver um arquivo SCSS ou Sass que deseja importar, mas não compilar para CSS, poderá adicionar um sublinhado ao início do nome do arquivo, que também é conhecido como Partial. Como o código está compilando, o Sass irá ignorar parciais ao processar o CSS. Por exemplo, você pode ter o arquivo _buttons.scss, no _buttons.css e então você pode *@importar “botões”;*

A melhor prática é criar um diretório parcial e colocar todos os seus arquivos Sass parciais dentro dele. Fazendo isso, você não terá nenhum nome de arquivo duplicado que o Sass não permita, por exemplo, os _buttons.scss parciais e o arquivo buttons.scss não podem existir no mesmo diretório. Usar parciais é uma ótima maneira de se manter organizado em nível global. Enquanto você @importar o arquivo, o Sass que você escreve é utilizável durante todo o projeto. Normalmente dentro de parciais eu crio mixins ou variáveis para usar em todo o meu projeto. Eu os nomeio com base em seu conteúdo e nos elementos que eles estão denominando.



## Variáveis

Variáveis em CSS são um avanço no desenvolvimento web moderno. Com Sass você pode criar variáveis para coisas como fontes, cores, tamanhos, margem, preenchimento, etc ... A lista é interminável. Se você escrever JavaScript ou PHP, o conceito é bastante semelhante em termos de definição de variáveis e convenções.

Então, por que usar variáveis? Fácil, as variáveis permitem que você use um elemento mais de uma vez, semelhante a uma classe em HTML ou uma variável em JavaScript. Por exemplo, digamos que você defina vários divs com uma cor de plano de fundo específica. Você pode usar a variável que é mais fácil de lembrar em vez do tradicional código hexadecimal ou cálculo RGB. Fazer uma variável com um nome fácil de lembrar permite menos cópias e colagens e um fluxo de trabalho mais produtivo. O mesmo conceito aplica-se sempre que uma variável pode ser implementada, e com o Sass que é virtualmente em qualquer lugar, por exemplo, este .scss:

```php
#container {/* Here we define our variables */$basetextsize: 12px;$container-space: 10px;$red: #C0392B;/* Variables are applied */font-size: $basetextsize;padding: $container-space;color : $red;}
```

resultará neste arquivo .css:

```css
#container {font-size: 12px;padding: 10px;color: #C0392B;}
```



## Operações e funções

A parte legal sobre variáveis é que elas são extremamente semelhantes àquelas usadas em linguagens de script. Variáveis dentro do Sass podem ser usadas dentro de operações e funções. As operações matemáticas padrão (+, -, *, / e%) são suportadas para números. Para cores, existem funções incorporadas ao Sass, que visam a luminosidade, matiz, saturação e muito mais.

Ter essa funcionalidade torna seu código mais dinâmico do que nunca. Por exemplo, se você quiser alterar a cor geral do link do seu site, basta alterar a variável, recompilar e o site será atualizado dinamicamente. Confira outro exemplo abaixo para uma lista de navegação reutilizável, esta .scss:

```php
nav{$nav-width: 900px;$nav-links: 5;$nav-color: #ce4dd6;width: $nav-width;li{float: left;width: $nav-width/$nav-links - 10px;background-color:lighten($nav-color, 20%);&:hover{background-color:lighten ($nav-color, 10%);}  }} 
resultará neste .css:
nav {width: 900px;}nav li {float:left;width: 170px;background-color: #E5A0E9;}nav li:hover {background-color: #D976E0;}
```



## `Aninhamento`

```
O aninhamento é uma enorme razão pela qual eu amo o Sass. Você escreve menos linhas de código no final e todo o seu código é fácil de ler devido à formatação aninhada. (O mesmo conceito de aninhamento também é encontrado em LESS.)
Existem dois tipos de aninhamento:
```

### `Aninhamento seletor`

```
O aninhamento de seleção no Sass é semelhante a como você aninharia HTML:
Main ContentSidebar Content
A versão Sass do aninhamento:
#container {.main {width:600px;h1 {color: $red;}}.sidebar {width: 300px;h3 {margin: 0;}}}
resultaria no seguinte CSS:
#container .main {width: 960px;}#container .main h1 {color: #C0392B;}#container .sidebar {width: 300px;}#container .sidebar h3 {margin: 0;}
```

### `Aninhamento de propriedades`

```
O segundo tipo de aninhamento é o aninhamento de propriedades. Você pode aninhar propriedades com o mesmo prefixo para melhorar os elementos de destino, o que resulta em menos linhas de código, por exemplo:
#container {.main {font:weight: bold;size: 12px;.intro {font:size: 20px;}}}
resultaria neste CSS:
#container .main {font-weight:bold;font-size: 12px;}#container .main .intro {font-size:20px;}
```



## `Mixins`

```
De todos os recursos do Sass, os Mixins têm que ser os mais poderosos. Mixins são semelhantes a uma variável, mas em esteróides. Você pode definir um estilo completo de um elemento e reutilizar esses estilos em todo o seu projeto.
Mixins são definidos usando a diretiva *@mixin* , que pega um bloco de estilos que você criou antes e o aplica ao seletor de sua escolha usando a diretiva *@include* . Abaixo está um padrão CSS comum usado para criar um menu de navegação horizontal. Em vez de escrever o mesmo código para cada instância de navegação, basta usar um mixin e depois incluí-lo quando necessário. Este conceito pode ser feito para qualquer coisa que você use repetidamente, como botões, tipografia, gradientes, etc ...
/* Here we define the styles */@mixin navigate {list-style-type:none;padding:0;margin:0;overflow:hidden;> li {display:block;float:left;&:last-child{margin-right:0px;}}}
E aqui nós incluímos o mixin com uma linha de código:
ul.navbar {@include navigate;}
o que resulta neste CSS compilado:
ul.navbar {list-style-type: none;padding:0;margin:0;overflow: hidden;}ul.navbar li {display: block;float: left;}ul.navbar li:last-child {margin-right: 0px;}
Você pode até ir além de criar mixins personalizáveis que usam argumentos para atualizar dinamicamente. Além disso, você pode incluir mixins dentro de outros mixins ou criar funções usando mixins e muito mais. O poder por trás disso é absolutamente enorme.
Existem algumas coleções mixin pré-definidas populares nas quais eu mencionei anteriormente, chamadas Compass e Bourbon. Com um simples *@import* em seu projeto, você pode ter acesso a mixins já gerados, comumente usados em toda a web. Há tantas opções que é difícil cobrir tudo o que está disponível, mas é definitivamente divertido experimentar e sujar as mãos criando animações ou transições personalizadas com algumas linhas de código em vez de uma tela cheia. Os mixins tornam o desenvolvimento de vários navegadores muito fácil se você não quiser digitar os prefixos definidos pelo navegador repetidamente dentro do seu CSS.
Por exemplo, aqui nós criamos um mixin com argumentos que permitem que ele seja personalizado.
@mixin my-border($color, $width) {border: {color: $color;width: $width;style: $dashed;}}p { @include my-border (blue, lin); }
que nos dá este CSS quando é compilado:
p {border-color: blue;border-width: lin;border-style: dashed;}
```



## `Resumo`

```
Enquanto Sass tem uma curva de aprendizado, eu realmente acredito que uma vez que você entenda os métodos e a sintaxe, você nunca mais vai querer voltar a escrever CSS padrão novamente.
Sass é extremamente poderoso e eu só cobri o básico aqui. Com o CSS tradicional, todos nós encontramos a cópia e a colagem ou encontramos e substituímos tarefas que gastam tanto tempo no estágio de desenvolvimento do seu projeto. Experimente o Sass e descubra como criar um fluxo de trabalho eficaz em seus projetos futuros.
```



```
***Você usa o Sass ou favorece um pré-processador CSS diferente?*** ***Você tem um mixin favorito?*** ***Deixe-nos saber nos comentários.***
*Imagem em destaque / miniatura, usa zero para imagem de herói* *via Shutterstock.*
```