# Múltiplos Backgrounds com CSS3

[Código](https://www.origamid.com/codex/category/codigo/) | 11.831 | 29 de junho de 2016

![Múltiplos Backgrounds com CSS3](https://www.origamid.com/codex/wp-content/uploads/2016/06/multi-bg.png)

É possível adicionar múltiplos backgrounds em um único elemento com CSS.

<iframe allowfullscreen="true" allowpaymentrequest="true" allowtransparency="true" class="cp_embed_iframe " frameborder="0" height="400" width="100%" name="cp_embed_1" scrolling="no" src="https://codepen.io/origamid/embed/ezvjaO?height=400&amp;theme-id=24256&amp;slug-hash=ezvjaO&amp;default-tab=result&amp;user=origamid&amp;embed-version=2&amp;editable=true&amp;name=cp_embed_1" title="CodePen Embed" loading="lazy" id="cp_embed_ezvjaO" style="margin: 0px; padding: 0px; border: 0px; vertical-align: baseline; width: 720px; overflow: hidden; display: block;"></iframe>



No exemplo acima eu utilizei 3 backgrounds diferentes e animei posições as suas posições para criar um efeito de Parallax.

Tudo isso foi possível ser feito utilizando uma única div, mantendo assim a nossa marcação limpa.

É bem simples, basta adicionar uma vírgula após os valores da propriedade background e iniciar valores do próximo background.

```css
.multiplos-bgs {
  background: url('img-1.png'), url('img-2.png') no-repeat;
}
```

Neste exemplo apenas a imagem 2 não se repetira, já que os valores adicionados após a vírgula serão aplicados apenas no segundo background.

Eles também são úteis quando você quer adicionar um gradient e uma pattern por cima dele. Exemplo:

```css
.planos {
  background: url('../img/pattern.png'), linear-gradient(135deg, #01a7ec, #0186bd);
}
```

No [novo curso de UX Design](https://www.origamid.com/cursos/ux-design-heuristicas/) eu utilizo o exemplo acima para criar o background do VanBook.