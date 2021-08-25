# Mini Curso de CSS3 Animation

[Código](https://www.origamid.com/codex/category/codigo/) | 10.851 | 21 de julho de 2016

![Mini Curso de CSS Animation](https://www.origamid.com/codex/wp-content/uploads/2016/07/animation.png)

Uma das principais revoluções do CSS3 certamente são as animações. Dê uma olhada em uma simples animação abaixo (não recomendo cegar os seus usuário com esse tipo de animação, rsrsrs.)

<iframe allowfullscreen="true" allowpaymentrequest="true" allowtransparency="true" class="cp_embed_iframe " frameborder="0" height="300" width="100%" name="cp_embed_1" scrolling="no" src="https://codepen.io/origamid/embed/KroxwP?height=300&amp;theme-id=24256&amp;slug-hash=KroxwP&amp;default-tab=css%2Cresult&amp;user=origamid&amp;embed-version=2&amp;editable=true&amp;name=cp_embed_1" title="CodePen Embed" loading="lazy" id="cp_embed_KroxwP" style="margin: 0px; padding: 0px; border: 0px; vertical-align: baseline; width: 720px; overflow: hidden; display: block;"></iframe>



O que antes só era possível ser feito com JavaScript, agora você consegue facilmente fazer com CSS exigindo menos do seu browser.

Não se engane, até as animações com JavaScript eram / são feitas manipulando o CSS. Por exemplo, se você quisesse que um item fosse de top: 0px; para top: 50px;, você iria adicionar 1px ao top a cada milissegundo (ou algo do tipo).

Com o CSS Animation, surgiu a nova regra @keyframes. E agora você pode animar assim:

```css
@keyframes nomeAnimacao {
 0% {
   top: 0px;
 }
 100% {
   top: 50px;
 }
}

.animar {
 animation: nomeAnimacao 1s;
}
```

Com @keyframes você define o inicio e fim (meio também) da animação. É possível adicionar quantos keyframes você quiser. Cada keyframe possui o momento em que ele deve começar (ex: 50%).

Seguido pelas propriedades que você deseja naquele momento (ex: 50% { top: 50px; }). Você pode utilizar quantas propriedades quiser também.

Lembrando que existem propriedades e valores que não são possíveis ser animados. Como os gradientes por exemplo, mas vamos falar disso mais tarde.

É necessário nomear a sua animação, para isso basta adicionar um nome único antes da primeira abertura das chaves.

Não são apenas os keyframes que um item precisa para ser animado. É necessário também definir algumas das propriedades de animation como:

- animation-name
- animation-duration
- animation-timing-function
- animation-delay
- animation-iteration-count
- animation-direction
- animation-fill-mode
- animation-play-state

Usando apenas o nome animation é possível declarar os valores de cada uma delas, ele é apenas um corta caminho para declarar os valores das propriedades acima (como margin é um corta caminho para margin-top, margin-bottom e etc).

O mini curso será feito em postagens aqui no Codex e no Facebook. O link de todas elas serão encontrados aqui mesmo (ao final do curso). Caso não queira perder nenhuma postagem e discutir cada uma delas em tempo real, assine o [feed de notícias da página no Facebook](https://www.facebook.com/origamid/).

Durante ele vamos explorar as propriedades que são possíveis serem animadas, assim como todas as propriedades do animation e como utilizar elas. Eu vou explicar melhor o funcionamento dos @keyframes também.