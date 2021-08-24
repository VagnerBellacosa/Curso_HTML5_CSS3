# CSS Animation

[Código](https://www.origamid.com/codex/category/codigo/) | 8.586 | 2 de agosto de 2016

![animation-name e animation-duration propriedades de CSS](https://www.origamid.com/codex/wp-content/uploads/2016/08/animation-name.png)

Após definirmos os [@keyframes da nossa animação](https://www.origamid.com/codex/css-keyframes/), é necessário adicionarmos a propriedade animation no elemento que queremos animar.

<iframe allowfullscreen="true" allowpaymentrequest="true" allowtransparency="true" class="cp_embed_iframe " frameborder="0" height="300" width="100%" name="cp_embed_1" scrolling="no" src="https://codepen.io/origamid/embed/jAvmmN?height=300&amp;theme-id=24256&amp;slug-hash=jAvmmN&amp;default-tab=css%2Cresult&amp;user=origamid&amp;embed-version=2&amp;editable=true&amp;name=cp_embed_1" title="CodePen Embed" loading="lazy" id="cp_embed_jAvmmN" style="margin: 0px; padding: 0px; border: 0px; vertical-align: baseline; width: 720px; overflow: hidden; display: block;"></iframe>



animation é apenas um atalho para as seguintes propriedades:

- animation-name
- animation-duration
- animation-timing-function
- animation-delay
- animation-iteration-count
- animation-direction
- animation-fill-mode
- animation-play-state

Então esse código

```css
.flash {
    animation-name: bordasombra;
    animation-duration: .5s;
    animation-timing-function: linear;
    animation-delay: 0s;
    animation-iteration-count: infinite;
    animation-direction: alternate;
    animation-fill-mode: both;
    animation-play-state: running;
}
```

Pode ser escrito assim:

```css
.flash {
    animation: bordasombra .5s linear 0s infinite alternate both running;
}
```

Não se preocupe ainda com essa lista de propriedades, pois vamos falar de cada uma delas nas aulas seguintes.

Você pode adicionar mais de uma animação, basta colocar uma vírgula e começar a adicionar os outros valores. Exemplo:

```css
.flash {
    animation: bordasombra .5s, pisca 1s;
}
```

O primeiro valor da animation é referente a propriedade animation-name. Basta você informar o nome que você deu aos @keyframes e ele já será atribuído ao elemento que você deseja animar.

O segundo valor é o animation-duration, é nele que definimos em quanto tempo os keyframes vão sair de 0% para 100%. Se você definir 1s ele irá animar a transição de 0% para 100% durante 1s e vai adicionar todas as etapas necessárias para que essa transição seja percebida de forma suave.

É possível utilizar valores em ms e também 0.5s (você pode tirar o zero e manter apenas .5s) por exemplo. O segundo é o mais comum.

Para qualquer animação funcionar é necessário no mínimo indicar essas duas propriedades, o nome e a duração. Após elas o restante é opcional.

Vamos falar mais sobre as outras propriedades nas próximas aulas desse mini curso.

Ícone No Flash por Arthur Shlain from the Noun Project

Todas as postagens sobre animações com CSS: