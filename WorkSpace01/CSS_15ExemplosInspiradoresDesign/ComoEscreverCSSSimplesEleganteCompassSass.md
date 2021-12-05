# Como escrever CSS simples e elegante com Compass & Sass

Muitos designers usam algum tipo de pré-processador CSS, seja ele [Sass](http://sass-lang.com/) , [MENOS](http://lesscss.org/) ou [Estilete](https://learnboost.github.io/stylus/) . Se você já usou algum desses recursos, provavelmente também está ciente de que o Compass é um framework construído com base no Sass e, embora sua instalação possa ser desanimadora, uma vez que você o utiliza, você descobrirá rapidamente que é uma das melhores web designer pode aprender.

Se você nunca usou o Sass antes, eu recomendo que você dê uma olhada no WDD [introdução ao Sass.](https://pt.odwebdesign.net/the-beginners-guide-to-sass/)

Bússola funciona como uma estrutura para o seu CSS. Quando você está trabalhando em um projeto grande, é fácil para as coisas saírem do controle e, freqüentemente, encontrar coisas em seu próprio CSS é um desafio. A Compass tenta resolver esses problemas, com o benefício adicional de trabalhar com prefixos de fornecedores.



## O que é a bússola?

Como eu disse acima, o Compass é um framework para o seu CSS que resolve alguns dos problemas com o idioma. Também inclui algumas ferramentas para tornar o desenvolvimento mais rápido e fácil:

- como o Sass, o Compass suporta variáveis, mixins e aninhamento;
- Ele fornece toda uma gama de funções auxiliares para imagens, cores, tipografia e muito mais;
- suporta cálculos matemáticos;
- Isso ajuda a garantir a compatibilidade entre navegadores.

Como o Sass e o LESS, o Compass é apenas uma ferramenta para simplificar o design do site.



## Como instalar o Compass

Compass é uma jóia Ruby, então para instalá-lo você precisa ter o Ruby instalado em sua máquina. Felizmente a instalação do Ruby é simples, no Windows você só precisa baixar [Instalador Ruby para Windows](http://rubyinstaller.org/) , no Mac / Linux, siga as instruções no [Site Ruby.](https://www.ruby-lang.org/en/downloads/)

Depois de instalar o Ruby, instalar a bússola é tão fácil quanto isto:

```css
gem install compass
```

Isso instalará o Compass e o Sass.

Se você quiser criar um projeto Compass, digite:

```css
compass create /path/to/projectcd /path/to/projectcompass watch
```

Essas três linhas de código significam que sempre que você alterar um arquivo Sass, elas serão automaticamente compiladas no CSS.

Como alternativa, você poderia usar [Codekit](http://incident57.com/codekit/) (Mac) ou [Prepros](http://alphapixels.com/prepros/) (Windows) para compilar o Sass quando é salvo.



## Começando com o Compass

A bússola é dividida em módulos e, para começar a usar seus utilitários, primeiro precisamos importar o módulo desejado para o nosso arquivo .scss principal. Por exemplo, para importar o módulo CSS3, usamos:

```css
@import "compass/css3";
```

Agora podemos começar a usar os utilitários e mixins que o Compass oferece para as novas propriedades que vêm com o CSS3. A melhor coisa sobre isso é que não temos que digitar os prefixos do fornecedor repetidas vezes, o que sempre foi um problema quando se trata de CSS3.

Veja um exemplo, se quisermos criar um layout simples de 3 colunas com uma medianiz de 20px, no CSS precisaríamos digitar:

```css
div{-webkit-column-count:3;-moz-column-count:3;column-count:3;-webkit-column-gap:20px;-moz-column-gap:20px;column-gap:20px;}
```

Você pode ver quão incontrolável isso faz rapidamente o nosso código. Com a ajuda do Compass e do Sass, tudo o que precisamos é isto:

```css
div{@include column-count(3);@include column-gap(20px);}
```

Como você pode ver, removemos os prefixos de fornecedores e o que levou 6 linhas de CSS em apenas 2.

Outro exemplo de CSS que requer muita digitação é gradientes. Aqui está como nós escrevemos um gradiente simples de branco para preto em CSS:

```css
.gradient{background-image: -webkit-gradient(linear, 50% 0%, 50% 100%, color-stop(0%, #ffffff), color-stop(100%, #000000));background-image: -webkit-linear-gradient(#ffffff, #000000);background-image: -moz-linear-gradient(#ffffff, #000000);background-image: -o-linear-gradient(#ffffff, #000000);background-image: linear-gradient(#ffffff, #000000);}
```

Criar o mesmo efeito com o Compass é tão simples quanto:

```css
.gradient{@include background-image(linear-gradient(#fff, #000));}
```

Isso não apenas reduz significativamente a quantidade de código, mas se você quiser alterar as cores, na versão Compass você só precisa alterá-las uma vez.

Existe uma lista completa dos [propriedades CSS3 encurtadas aqui.](http://compass-style.org/reference/compass/css3/)

Bússola também inclui alguns ajudantes para links, um dos quais é uma economia de tempo real. Primeiro, precisamos incluir o modelo de tipografia como o início do nosso arquivo principal do Sass:

```css
@import "compass/typography"
```

O módulo de tipografia tem uma grande abreviação para estilizar cores, assim:

```css
a{// link colors (normal, hover, active, visited, focus)@include link-colors(red, blue, grey, red, blue);}
```

Essa é a melhor coisa do Compass; pega o código que usamos diariamente e nos dá versões abreviadas.



## Conclusão

Este artigo foi apenas uma rápida introdução ao Compass, mas se você achou o assunto tão excitante quanto eu, então eu recomendo fortemente que você [confira o site deles](http://compass-style.org/reference/compass/) e explorar mais os utilitários disponíveis.

Espero que você considere o uso de Compass e Sass em seus projetos, porque eles realmente são adições incríveis para a caixa de ferramentas do web designer.



***Você usa Compass ou Sass?*** ***Você prefere um pré-processador diferente?*** ***Deixe-nos saber nos comentários.***

*Imagem em destaque / miniatura,* [*imagem da bússola*](http://www.shutterstock.com/pic-140887993/stock-vector-vector-minimal-design-compass.html) *via Shutterstock.*