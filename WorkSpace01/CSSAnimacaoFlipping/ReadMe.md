# Criando animação flipping com CSS

Publicado em: 08/10/2014



Crédito: essa matéria é uma tradução e foi escrita por [David Walsh](https://davidwalsh.name/).
URL do original: https://davidwalsh.name/css-flip

## Introdução

Você pediu e eu estou atendendo: suporte para o Internet Explorer! Por incrível que pareça o suporte é obtido simplesmente rotacionando individualmente os elementos frente e verso em lugar de rotacionar seu container. [Vá direto para essa seção](https://www.maujor.com/tutorial/criando-animacao-flipping-com-css.php#ieflip) se você quiser consultar o código para o Internet Explorer. Mas, esteja ciente que o suporte é para os IE10+, pois IE9 não suporta animação CSS.

Criar animações com CSS é muito divertido. O legal das animações é que com algumas poucas propriedades é possível criar-se praticamente qualquer coisa, desde simples efeitos de esmaecimento (fade) até complexas e estonteantes animações. Um efeito de animação CSS bem legal é o efeito flip (virar). Para obtê-lo se insere em um container dois conteúdos; um na frente e outro no verso e mostra-se um ou outro conteúdo segundo uma animação. Este tutorial se propõe a mostrar como criar esa animação de uma forma a mais simples possível.

*Nota: este não é um totorial inédito sobre esse efeito de animação, mas eu considero que os outros tutoriais existentes que conheço são super-complicados. Eles usam estilização adicional nos exemplos que obrigam os leitores a decifrar quais são necessárias e quais não são. Este tutorial evita esta prática, usando somente a estilização necessária para obter o efeito, ficando por conta do leitor estilizar como bem entender a frente e o verso do container.*

[Ver exemplo](https://www.maujor.com/tutorial/exemplo-flipping.php)

## HTML

A marcação HTML para criar a frente e verso de um container é conforme mostrada a seguir:

HTML

```markup
<div class="flip-container"
ontouchstart="this.classList.toggle('hover');">  	
  <div class="flipper">  		
    <div class="front">  			
      <!-- Conteúdo da frente -->  		
    </div>  		
    <div class="back">  			
      <!-- Conteúdo do verso -->  		
    </div>  	
  </div>  
</div>
```

Existem dois containers `.front` e `.back` como era de se esperar. Esses dois containers estão contidos no container `.flipper` e o container geral é `.flip-container`. A função destes dois containers gerais fica clara quando examinamos as regras CSS criadas para obtenção do efeito. Notar ainda o atributo `ontouchstart` que faz com que a animação seja possível em telas sensíveis ao toque. Obviamente você poderá retirar aquele código JavaScript da marcação HTML e colocá-lo em arquivo separado se assim preferir.

## CSS

Deixando de lado os prefixos proprietários observe como algumas poucas regras CSS são suficientes para obter o efeito:

CSS

```css
/* O container geral define a perspectiva */  
.flip-container { perspective: 1000; }  	

/* vira os containers frente e verso quando o mouse passa em cima */
.flip-container:hover .flipper, .flip-container.hover .flipper {  		
  transform: rotateY(180deg);  	
}    
.flip-container, .front, .back {  	
  width: 320px;  	
  height: 480px;  
}

/* define a velocidade da transição */
.flipper {  	
  transition: 0.6s;  	
  transform-style: preserve-3d;    	
  position: relative;  
}
    
/* esconde o verso durante a animação */
.front, .back {  	
  backface-visibility: hidden;    	
  position: absolute;  	
  top: 0;  	
 left: 0;  
}
    
/* frente posicionada sobre o verso */
.front { z-index: 2;  }    

/* verso inicialmente escondido */
.back { transform: rotateY(180deg); }
```

A seguir uma breve explicação do processo de animação:

- O container geral `.flip-container` define a área de animação [perspective](https://developer.mozilla.org/en-US/docs/CSS/perspective)
- Os containers `.front` e `.back` são os elementos que se movimentam rotacionando de 180o. quando o container `.flipper` recebe o ponteiro do mouse sobre ele. É para esse container que se define também a velocidade da transição. Definindo a rotação para -180o. inverte-se a direção da animação.
- Os containers para a frente e verso são posicionados de forma absoluta de modo que um fique sobre o outro na mesma posição. [backface-visibility](https://developer.mozilla.org/en-US/docs/CSS/backface-visibility) é definida como `hidden` para que o verso do elemento virado não seja mostrado durante a animação.
- O elemento da frente possui um `z-index` maior do que o elemento do verso possibilitando a que o elemento da frente conste em primeiro na marcação HTML, mas seja renderizado na frente do verso.
- O elemento do verso é rotacionado de 180o. de modo a que ele atue efetimente como se estivesse no verso.

Isso é tudo! Crie a estrutura com mostrado e estiliza cada lado, frente e verso, como bem entender!!

### Nota sobre animação CSS pela expert em animação Ana Tudor

> [Aplicando determinados pares propriedade/valor](https://dev.w3.org/csswg/css-transforms/#transform-style-property) (tal como `overflow: hidden`) nos elementos frente ou verso desabilitam transformações 3D em seus elementos-filho. Eu creio que isso é importante, pois já tive problemas com `overflow: hidden` nestes casos, nos quais todos os elementos-filho do elemento transformado estavam no mesmo plano exceto um ou outro que tinham sido rotacionados de 180o..

## Flip CSS toggle

Se você prefere disparar a animação com uso da JavaScript a simples adição de um atributo classe resolve o problema, como mostrado a seguir:

CSS

```css
.flip-container:hover .flipper, 
.flip-container.hover .flipper, 
.flip-container.flip .flipper {  	
  transform: rotateY(180deg);  
}
```

Adicionando a classe *flip* ao elemento container cria a animação ao comando da JavaScript -- sem necessidade de mouse over do usuário. O seguinte código é suficiente: `document.querySelector("#myCard").classList.toggle("flip")`

## Flip CSS na vertical

Para criar a animação no sentido vertical basta mudar a posição do eixo de rotação aplicando a ele a propriedade `transform-origin`. Observe as regras CSS a seguir:

CSS

```css
.vertical.flip-container { position: relative; }    	
.vertical .back { transform: rotateX(180deg); }    	
.vertical.flip-container .flipper {  		
  transform-origin: 100% 213.5px; /* metade da altura */
}    	
.vertical.flip-container:hover .flipper { transform: rotateX(-180deg); }
```

Agora o eixo de rotação é o eixo X e não o eixo Y.

## Suporte para o Internet Explorer

O Internet Explorer ainda não implementou todas as funcionalidades para as propriedades CSS de transformação. Para que ele suporte essa animação é necessário que se faça modificações nas CSS mostradas anteriormente. Tais modificações consistem em se definir a transformação para ambos os elementos de frente e de verso ao mesmo tempo:

CSS

```css
/* continua a declaração de perspectiva para o container geral */
.flip-container { 
perspective: 1000; 
transform-style: preserve-3d; 
}  	

/*  MODIFICADO! vira os containers frente e verso quando o mouse passa em cima */
.flip-container:hover .back { transform: rotateY(0deg); }  	
.flip-container:hover .front { transform: rotateY(180deg); }    
.flip-container, .front, .back { 
  width: 320px;  
  height: 480px; 
}    

/* define a velocidade da animação */
.flipper {  	
  transition: 0.6s;  	
  transform-style: preserve-3d;    	
  position: relative;  
}    

/* esconde o verso durante a animação */
.front, .back { 
backface-visibility: hidden;  	
transition: 0.6s;  	
transform-style: preserve-3d;    	
position: absolute;  	
top: 0;  	
left: 0;  
}    

/*  MODIFICADO! frente posicionada sobre o fundo */
.front {  	
z-index: 2;  	
transform: rotateY(0deg);  
}    

/* verso inicialmente escondido *
.back { transform: rotateY(-180deg); }    

/* modificações para flip vertical   */
.vertical.flip-container { position: relative; }    	
.vertical .back { transform: rotateX(180deg); }    	
.vertical.flip-container:hover .back { transform: rotateX(0deg); }    	
.vertical.flip-container:hover .front { transform: rotateX(180deg);}
```

Aplicando as CSS mostradas o IE10 animará como esperado!

[Ver exemplo](https://www.maujor.com/tutorial/exemplo-flipping.php)

O efeito de animação do tipo flip é um exemplo clássico do que é possível fazer com animações CSS e em menor escala com animações CSS 3D. O mais interessante é que são poucas as regras CSS necessárias para se obter o efeito. Trata-se de um efeito bem legal para games desenvolvidos com a HTML5 e como efeito para virar cartas é perfeito. Você consegue pensar em algo interessante que possa ser feito com esse efeito?