# Círculos com CSS

[Código](https://www.origamid.com/codex/category/codigo/) | 25.898 | 31 de dezembro de 2016

No exemplo abaixo eu mostro círculos criados com CSS:

<iframe allowfullscreen="true" allowpaymentrequest="true" allowtransparency="true" class="cp_embed_iframe " frameborder="0" height="300" width="100%" name="cp_embed_1" scrolling="no" src="https://codepen.io/origamid/embed/mPGRBj?height=300&amp;theme-id=24256&amp;slug-hash=mPGRBj&amp;default-tab=css%2Cresult&amp;user=origamid&amp;embed-version=2&amp;pen-title=css-circulo&amp;editable=true&amp;name=cp_embed_1" title="css-circulo" loading="lazy" id="cp_embed_mPGRBj" style="margin: 0px; padding: 0px; border: 0px; vertical-align: baseline; width: 720px; overflow: hidden; display: block;"></iframe>



Bordas arredondadas eram criadas a partir de imagens e hacks bizarros feitos com CSS. O surgimento da propriedade border-radius acabou com essa gambiarra.

Basta adicionar border-radius: 5px; para arredondar as bordas com CSS.

E o que acontece se arredondarmos ao máximo as bordas de um quadrado? Ele vai virar um círculo.
Então basta adicionarmos border-radius: 50%; para transformamos um elemento que possui height e width iguais, em um círculo.

O valor precisa ter um valor igual ou maior que 50% do valor do width/height. Por exemplo um quadrado de 100px de largura e 100px de altura precisa de 50px de border-radius. (Basta usar sempre o 50%, assim você não precisa ficar dividindo esse valor).

```css
.circulo {
width: 100px;
height: 100px;
border-radius: 50%;
}
```

Se você adicionar a propriedade overflow: hidden; as imagens que estiverem dentro dos círculos terão as pontas das suas bordas escondidas e ficarão contidas no círculo.

É assim que são criadas as maiorias das fotos de profile, dos aplicativos Web hoje em dia.

Os círculos podem ser usados de maneiras criativas, aqui no contato do meu site, eu uso eles para marcar os itens https://www.origamid.com/contato/