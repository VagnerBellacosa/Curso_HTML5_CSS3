![botao-animado](https://programandosolucoes.dev.br/wp-content/uploads/2021/05/botao-animado.png)

# Botão animado com HTML e CSS puro

Veja nesse artigo



[Introdução](https://programandosolucoes.dev.br/2021/05/18/botao-animado-html-css/#Introducao)[HTML](https://programandosolucoes.dev.br/2021/05/18/botao-animado-html-css/#HTML)[Estilo do botão](https://programandosolucoes.dev.br/2021/05/18/botao-animado-html-css/#Estilo_do_botao)[Colocando a seta (entidades CSS)](https://programandosolucoes.dev.br/2021/05/18/botao-animado-html-css/#Colocando_a_seta_entidades_CSS)[Efeito ao passar o mouse](https://programandosolucoes.dev.br/2021/05/18/botao-animado-html-css/#Efeito_ao_passar_o_mouse)[Vídeo tutorial](https://programandosolucoes.dev.br/2021/05/18/botao-animado-html-css/#Video_tutorial)[Código completo](https://programandosolucoes.dev.br/2021/05/18/botao-animado-html-css/#Codigo_completo)[Este conteúdo te ajudou de alguma forma?](https://programandosolucoes.dev.br/2021/05/18/botao-animado-html-css/#Este_conteudo_te_ajudou_de_alguma_forma)

## Introdução

O Botão é um elemento presente em praticamente todos os sites e sistemas na web.

Há botões de diversas formas, diversos estilos, com ícones, sem ícones, com dropdown, com efeitos, com animações e por ai vai.

Normalmente os frameworks como [Bootstrap](https://getbootstrap.com/) trazem botões padrões, porém é importante saber como criar diferentes tipos de botão, isso porque pode ser que você precise criar um diferente do fornecido para alguma ação específica.

Criando um, também é possível entender como alguns elementos e propriedades do CSS funcionam.

Vamos lá, ver como criar este botão animado somente com HTML e CSS.

![botao 1](https://programandosolucoes.dev.br/wp-content/uploads/2021/05/botao-animado1.gif)

## HTML

No HTML serão utilizados dois elementos, um `button` e um `span`, o `button` irá englobar o `span` que conterá o texto.

Terá uma classe button também, somente para não aplicar o estilo diretamente no elemento.

```
<``body``>``  ``<``h2``>Botao animado</``h2``>` `  ``<``button` `class``=``"button"``><``span``>Hover </``span``></``button``>``</``body``>
```

## Estilo do botão

O CSS será incorporado no mesmo arquivo para ficar mais fácil a manipulação neste exemplo.

Terá basicamente um estilo padrão com cores, tamanhos de fonte e background, espaçamento interno e um cursos pointer para indicar que é clicável:

```
.button {``  ``border-radius``: ``4px``;``  ``background-color``: ``#f4511e``;``  ``border``: ``none``;``  ``color``: ``white``;``  ``text-align``: ``center``;``  ``font-size``: ``28px``;``  ``padding``: ``20px``;``  ``width``: ``200px``;``  ``cursor``: ``pointer``;``  ``margin``: ``5px``;``}
```

Para o span do `button` será adicionado um `position` `relative`, para depois encaixar a seta e um `transition` de 0.5 para deixar o efeito mais suave.

```
.button span {``  ``position``: ``relative``;``  ``transition``: ``0.5``s;``}
```

Utilizando o `button`, espaço e depois o `span`, significa que será aplicado o estilo em todos os `span`, que estão dentro do `button`, como nesse caso só há um, só irá aplicar a esse.

## Colocando a seta (entidades CSS)

Para a seta, poderia ter sido utilizado uma biblioteca de ícones, ou até mesmo colocar uma imagem, porém outra forma de fazer isso é utilizar as entidades do HTML.

As entidades são utilizadas para colocar caracteres especiais dentro do HTML e garantir que o navegador irá entender esse caractere.

Por exemplo, o sinal de menor “<” ele também é o sinal de tag de abertura, caso não utilize a entidade para declarar esse sinal, pode ser que o navegador não entenda e não consiga renderizar.

As entidades são basicamente códigos que quando o HTML renderiza, troca pelo caractere desejado, veja uma [lista aqui](https://www.w3schools.com/cssref/css_entities.asp) com todas as entidades HTML.

```
.button span:after {``  ``content``: ``"\00bb"``;``  ``position``: ``absolute``;``  ``opacity``: ``0``;``  ``top``: ``0``;``  ``right``: ``-20px``;``  ``transition``: ``0.5``s;``}
```

Foi utilizado o pseudo elemento `::after` para colocar a seta, e o conteúdo que é a setinha em si, é a entidade colocada na propriedade `content`.

O `::after` é utilizado para quando quiser colocar algum conteúdo adicional ao elemento, sem precisar criar um outro.

O `position` `absolute` permite posicionar a seta onde quiser dentro do elemento, sem isso o posicionamento poderia ficar incorreto.

Começa com uma opacidade 0 para não aparecer inicialmente.

## Efeito ao passar o mouse

Para fazer o efeito de aparecer, primeiramente é necessário adicionar um espaçamento no texto ao passar o mouse por cima (hover), ele é necessário para dar lugar a seta que irá aparecer.

```
.button:hover span {``  ``padding-right``: ``25px``;``}
```

E quando o usuário passar o mouse por cima do botão, é possível trocar a opacidade colocada inicialmente como 0 para o ::afer, passando para 1, dessa forma a seta irá ser mostrada.

```
.button:hover span:after {``  ``opacity``: ``1``;``  ``right``: ``0``;``}
```

Só com isso irá fazer o efeito corretamente.

## Vídeo tutorial

https://youtu.be/vm7ZkgB3-lQ

## Código completo

```
<!DOCTYPE html>``<html>`` ``<head>``  ``<meta name=``"viewport"` `content=``"width=device-width, initial-scale=1"` `/>``  ``<style>``   ``.button {``    ``border-radius``: ``4px``;``    ``background-color``: ``blue``;``    ``border``: ``none``;``    ``color``: ``white``;``    ``text-align``: ``center``;``    ``font-size``: ``28px``;``    ``padding``: ``20px``;``    ``width``: ``200px``;``    ``cursor``: ``pointer``;``    ``margin``: ``5px``;``   ``}` `   ``.button span {``    ``position``: ``relative``;``    ``transition``: ``0.5``s;``   ``}` `   ``.button span:after {``    ``content``: ``"\00bb"``;``    ``position``: ``absolute``;``    ``opacity``: ``0``;``    ``top``: ``0``;``    ``right``: ``-20px``;``    ``transition``: ``0.5``s;``   ``}` `   ``.button:hover span {``    ``padding-right``: ``25px``;``   ``}` `   ``.button:hover span:after {``    ``opacity``: ``1``;``    ``right``: ``0``;``   ``}``  ``</style>`` ``</head>`` ``<body>``  ``<h``2``>Botao animado</h``2``>` `  ``<button class=``"button"``><span>Hover </span></button>`` ``</body>``</html>
```

Caso queira ver o exemplo completo e brincar com esse exemplo, ir trocando as cores e os efeitos, acesse o link do meu [CodeSandbox](https://codesandbox.io/s/button-hover-effect-fwk8c?file=/index.html).

Para ver outros canais onde o posto conteúdo, veja os [Links do Programando Soluções.](https://programandosolucoes.dev.br/links-uteis/)

**Referências**:

https://www.w3schools.com/cssref/sel_element_element.asp

https://www.w3schools.com/cssref/css_entities.asp