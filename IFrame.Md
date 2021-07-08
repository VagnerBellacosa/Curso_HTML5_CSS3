# Html 5

## Iframe HTML: tudo o que você precisa saber

### Iframe HTML

Você provavelmente já visualizou um iframe HTML em diversas páginas da internet. Mas você sabe o que são?

Neste artigo vamos entender o que são os iframes e como utilizá-los no documento HTML. Portanto, os tópicos desse artigo são:

- O Que é um iframe?
- A sintaxe do iframe HTML
- Atributos do iframe HTML
- Iframe HTML interativo com target links
- Incluindo vídeos do YouTube em suas páginas
- Cuidados com o iframe HTML
- Conclusões sobre os iframes HTML

## O Que é um iframe?

Um iframe é um elemento do HTML utilizado para incorporar outra página da web na página atual. Ou seja, com ele você pode incluir conteúdos de outras páginas na sua própria página.

O iframe é um elemento HTML muito poderoso. Através da tag <iframe>, é possível incluir vídeos, imagens e conteúdos de outras páginas. Também é muito utilizado para incorporar elementos de publicidade na página. Ele pode integrar o conteúdo em qualquer parte do seu layout, sem interferir na estrutura do seu site. Dessa forma, podemos estilizá-lo diretamente através do CSS. Sendo assim, ele possui o comportamento de um elemento HTML tradicional e pode ser modificado a fim de se adequar ao layout da sua página.

Portanto, imagine o iframe como parte do conteúdo, porém lembre-se que não faz parte da sua página. Quando encontramos vídeos do YouTube incorporados dentro de uma página, esses elementos foram integrados utilizando o iframe HTML. Da mesma forma, os mapas do Google geralmente também são incluídos através de um iframe HTML.

## A sintaxe do iframe HTML

Para poder incorporar um iframe ao seu código HTML, basta utilizar a tag <iframe>. Vejamos o exemplo abaixo, exemplificando a tag iframe:

```
<iframe src="https://www.homehost.com.br"></iframe>
```

Desta forma teremos o resultado conforme a imagem abaixo:

Exemplo de uma caixa de IFrame simples 

Apesar da maioria dos navegadores atuais suportarem esse elemento sem problemas, algumas versões mais antigas ainda podem encontrar dificuldades. Para incluir uma mensagem caso o navegador não tenha suporte, basta acrescentar um conteúdo dentro das tags <iframe>. Assim, caso o navegador não suporte o iframe, será mostrada a mensagem. Por outro lado, se o navegador renderizar corretamente o iframe, a mensagem não será mostrada. Podemos incluir apenas uma mensagem, ou ainda incluir um código HTML. Vejamos então os exemplos abaixo:

```
<iframe src="https://www.homehost.com.br">
Seu navegador não possui Suporte para este recurso...
</iframe>
```

```
<iframe src="https://www.homehost.com.br"> 
<p>Seu navegador não possui Suporte para este recurso...</p> 
<img src="imagens/iframe_naosuporta.png">
</iframe>
```

## Atributos do iframe HTML

O iframe HTML suporta bem qualquer atributo global, assim como atributos de evento. Porém, existem alguns atributos que são mais utilizados, vamos explicar abaixo os principais deles:

### O atributo src

Conforme o exemplo anterior, podemos notar o uso do atributo src.  Esse atributo é utilizado para indicar qual página será renderizada no iframe. No nosso exemplo, a página renderizada será a página inicial da HomeHost.

```
<iframe src="https://www.homehost.com.br"></iframe>
```

Você também pode utilizar a URL de uma página pertencente ao seu domínio ou servidor, ou seja, uma URL local. Por exemplo: digamos que eu queira incluir o conteúdo de uma página “sobre.html” do meu site, na página inicial, de forma que ambas se encontram na mesma pasta do servidor. Posso simplesmente utilizar o código do exemplo abaixo:

```
<iframe src="sobre.html"></iframe>
```

### Atributo de altura e largura

Para poder modificar as dimensões do nosso iframe, podemos utilizar o CSS. Porém também temos atributos para definir essas medidas. São eles: width (para largura) e  height (para altura). Vejamos o exemplo abaixo onde vamos definir uma largura de 300px e uma altura de 200px para nosso iframe HTML:

```
<iframe width="300px" height="200px" src="https://www.homehost.com.br/"></iframe>
```

Dessa forma, o resultado será um iframe HTML como na imagem abaixo:

Exemplo de Iframe com largura e altura definida

Como dissemos anteriormente, podemos estilizar o iframe através do CSS. Portanto, o mesmo resultado poderia ser obtido com o exemplo abaixo:

```
<iframe src="https://www.homehost.com.br/" style="width:300px;height:200px;"></iframe>
```

### O atributo allowfullscreen

Alguns quadros de iframes permitem a utilização de tela cheia, como por exemplo, iframes de vídeos do YouTube. Podemos utilizar a propriedade allowfullscreen para permitir que o usuário utilize a opção de abrir o quadro em tela cheia. Veja o código de exemplo abaixo:

```
<iframe src="https://www.youtube.com/embed/9P15WoXIzV4" allowfullscreen></iframe>
```

### O atributo name

O atributo name define um nome para o quadro de iframe. Esse recurso é muito útil para utilizar o iframe HTML interagindo com links HTML. Portanto, vejamos então o exemplo abaixo atribuindo um nome para o nosso iframe:

```
<iframe src="" name="meu_iframe"></iframe>
```

### Outros atributos

Além dos atributos globais, de evento e os atributos acima, o iframe suporta outros atributos. Ademais, caso utilize um iframe de algum elemento diferente, como um vídeo, é possível utilizar atributos próprios para esses recursos. Por exemplo, ao incluir um iframe de um vídeo do YouTube, podemos setar atributos que permitem utilizar alguns recursos de vídeo, através do allow, como no exemplo abaixo:

```
<iframe width="853" height="480" src="https://www.youtube.com/embed/9P15WoXIzV4" 
allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
```

Você também pode ver outros atributos do Iframe HTML através da documentação apresentada na W3CSchool sobre esta tag.

### Iframe HTML interativo com target links

Além de um iframe com conteúdo fixo já definido, podemos ainda utilizar os recursos dos links HTML para torná-lo interativo. Para isso vamos inicialmente atribuir um nome ao iframe, através do atributo name:

```
<iframe src="" name="meu_iframe"></iframe>
```

Posteriormente podemos também já definir uma URL ao atributo src, que será a página renderizada inicialmente. Vejamos então o exemplo abaixo:

```
<iframe src="https://www.homehost.com.br/" name="meu_iframe"></iframe>
```

Agora, vamos incluir as tags de interação através dos links HTML, ou seja, da tag <a>. Para isso, vamos colocar uma url no atributo href, e vamos atribuir um target ao link. Para que o link seja renderizado no iframe, o target deve ser exatamente o mesmo que o nome atribuído ao iframe. Portanto, vejamos o exemplo abaixo:

```
<iframe src="https://www.homehost.com.br/" name="meu_iframe"></iframe>
<p><a href="https://www.homehost.com.br/" target="meu_iframe">HomeHost</a></p>
<p><a href="https://www.homehost.com.br/blog" target="meu_iframe">Blog HomeHost</a></p>
<p><a href="https://www.w3schools.com" target="meu_iframe">W3Schools</a></p>
```

No exemplo acima, criamos três links, onde ao clicar em qualquer um deles, o iframe renderizará a página selecionada. Você pode também conferir o exemplo disponibilizado pelo W3C Schools na plataforma de testes.

### Incluindo vídeos do YouTube em suas páginas

Existem algumas maneiras de incluir um vídeo do YouTube diretamente em suas páginas HTML. A mais fácil é a utilização de iframes. Por isso, vamos explicar passo a passo como você pode conseguir o código de incorporação diretamente no YouTube.

Inicialmente, abra a página inicial do YouTube. Posteriormente, escolha o vídeo que deseja inserir em sua página, no caso, utilizaremos como exemplo o vídeo “O que é WordPress” do canal da HomeHost. Assim que encontrar o vídeo que deseja, clique com o botão direito do mouse no vídeo, e aparecerá uma lista opções conforme a imagem abaixo:

### Copiar código de incorporação através do youtube

Na caixa de opções, selecione “Copiar código de incorporação“:

### Copiar Código de Incorporação do Youtube

Pronto, agora o código já estará copiado, basta abrir o seu editor de texto e colar o código. Utilizando o vídeo do nosso exemplo, ao colar no editor de texto resulta o seguinte código do iframe HTML:

```
<iframe width="853" height="480" src="https://www.youtube.com/embed/9P15WoXIzV4" frameborder="0" 
allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe&gt;
```

Observe que o código de incorporação já traz algumas opções e atributos definidos. Você pode editar conforme suas necessidades, inclusive a altura e a largura do mesmo. Também recomendamos que a estilização do quadro iframe HTML seja feita através do CSS. Enfim, o código de incorporação acima resultou na renderização do nosso documento HTML conforme a imagem abaixo:

### Iframe HTML do YouTube incorporado em nossa página

Você pode ler mais a respeito dos recurso de API do iframe do YouTube na documentação desta API disponibilizada pelo Google.

### Cuidados com o Iframe HTML

Apesar de ser muito útil, o uso de iframe HTML deve ser bem planejado, pois a sua utilização aumenta o tempo de carregamento de uma página.

Além disso, deve-se verificar bem o tipo de conteúdo que será integrado. O elemento iframe HTML não representa nenhum risco de segurança. Porém, ele permite inserir conteúdo e materiais provenientes de outras páginas. Portanto, é necessário ter bastante atenção quando adicionar um iframe de outra página, especialmente quando a mesma é de um site não confiável. Ao utilizar um iframe de uma página suspeita, isso pode comprometer a segurança da sua própria página, assim como a dos seus leitores.

Portanto, se você não tiver certeza quanto à segurança de um site, não recomendamos utilizar iframes. Utilize o iframe apenas de páginas confiáveis ou que você tenha conhecimento quanto aos padrões de segurança utilizados.

### Conclusões sobre os iframes HTML

Não há duvidas de que o iframe HTML é um recurso muito útil e que permitem incluir uma variedade de conteúdos em suas páginas web. Porém, ainda assim, esse recurso tem algumas desvantagens. Dentre eles, conforme citado anteriormente, os iframes podem aumentar o tempo de carregamento da sua página. Por isso, recomendamos que evitem o uso de muitos iframes dentro da mesma página.

Claro que você pode utilizar outros recursos para diminuir o tempo de carregamento da página. Para isso você deve carregar apenas os elementos que deverão ficar visíveis na tela inicialmente, e os demais, seriam carregados posteriormente. Porém, ainda assim, recomendamos não utilizar excessivamente os iframes de outras páginas. Utilize-os apenas se realmente for necessário, até para não perder a originalidade da sua própria página.

Agora que você já sabe como utilizar os iframes em seus documentos HTML, recomendamos que pratique e utilize os códigos exemplificados neste artigo. Também recomendamos que teste alterar os atributos, assim como criar uma estilização para seus iframes. Por fim, experimente incluí-los na sua página HTML. Com isso, você já estará pronto para utilizar os iframes HTML no desenvolvimento de páginas web.


[Artigo original](https://www.homehost.com.br/blog/tutoriais/iframe-html/)