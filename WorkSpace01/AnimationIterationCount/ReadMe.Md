# Animation Iteration Count e Direction

[Código](https://www.origamid.com/codex/category/codigo/) | 6.554 | 5 de setembro de 2016

![animation-iteration-count](https://www.origamid.com/codex/wp-content/uploads/2016/09/animation-iteration-count.png)

Com a propriedade animation-iteration-count você define quantas vezes essa animação será repetida.

<iframe allowfullscreen="true" allowpaymentrequest="true" allowtransparency="true" class="cp_embed_iframe " frameborder="0" height="300" width="100%" name="cp_embed_1" scrolling="no" src="https://codepen.io/origamid/embed/WGbrQd?height=300&amp;theme-id=24256&amp;slug-hash=WGbrQd&amp;default-tab=css%2Cresult&amp;user=origamid&amp;embed-version=2&amp;editable=true&amp;name=cp_embed_1" title="CodePen Embed" loading="lazy" id="cp_embed_WGbrQd" style="margin: 0px; padding: 0px; border: 0px; vertical-align: baseline; width: 720px; overflow: hidden; display: block;"></iframe>



Você pode colocar um número qualquer ou a palavra-chave infinite. Com o infinite a animação será repetida infinitamente. Este valor será bem vindo quando estivermos criando uma animação de loading como no exemplo acima.

Sem mistério, ou você define um número ou se ela será infinita.

Outra propriedade de animação é a animation-direction. Ela é responsável por definir qual a direção em que a animação vai ocorrer.

Os seguintes valores são possíveis com ela:

- normal
- reverse
- alternate
- alternate-reverse

O normal é o valor padrão. No exemplo do loading acima, ficaria bem ruim apenas com o normal, pois a animação iria ocorrer com as bolinhas caindo, porém ao final elas resetariam para a posição inicial.

O reverse muda a ordem da sua animação. Então se você está animando de 100px para 0px, ele passa a animar de 0px para 100px, sem a necessidade de você alterar os @keyframes.

Para animações infinitas, geralmente o alternate é a melhor opção. Com ele a animação vai e volta. O que isso significa, que a primeira animação será normal, a segunda reverse e assim por diante. Criando uma ilusão de vai e volta.

O alternate-reverse funciona da mesma maneira que o alternate, porém ele começa pela posição contrária da animação definida nos @keyframes.