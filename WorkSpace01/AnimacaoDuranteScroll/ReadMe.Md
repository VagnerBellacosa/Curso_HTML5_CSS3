# Animação Durante o Scroll

[Código](https://www.origamid.com/codex/category/codigo/) | 25.674 | 5 de setembro de 2016

![Animar durante o scroll](https://www.origamid.com/codex/wp-content/uploads/2016/09/animar-durante-scroll.png)

Eu acreditava ser super complexo criar aquelas animações de introdução de conteúdo nos sites. Procurava por plugins, pesquisava por nomes diferentes e nada conseguia me mostrar de forma simples como fazer as mesmas.

Veja o exemplo abaixo:

<iframe allowfullscreen="true" allowpaymentrequest="true" allowtransparency="true" class="cp_embed_iframe " frameborder="0" height="380" width="100%" name="cp_embed_1" scrolling="no" src="https://codepen.io/origamid/embed/vXEmQJ?height=380&amp;theme-id=24256&amp;slug-hash=vXEmQJ&amp;default-tab=js%2Cresult&amp;user=origamid&amp;embed-version=2&amp;editable=true&amp;name=cp_embed_1" title="CodePen Embed" loading="lazy" id="cp_embed_vXEmQJ" style="margin: 0px; padding: 0px; border: 0px; vertical-align: baseline; width: 720px; overflow: hidden; display: block;"></iframe>



Agora que compreendi a lógica, ficou tudo mais simples e claro. Você vai precisar das seguintes funções:

- 1 – Identificar quando o usuário utiliza o scroll
- 2 – Calcular a distância entre o topo da página e o scroll
- 3 – Calcular a distância entre o topo da página e o elemento que deseja animar
- 4 – Comparar as duas distâncias anteriores
- 5 – Adicionar uma classe com css animation ou transition ao elemento animado

Toda a lógica será criada com JavaScript. Eu vou usar a biblioteca de funções jQuery para facilitar a explicação e o desenvolvimento. Então não se esqueça de adicionar o jQuery antes de adicionar o código abaixo.

```markup
var root = document.documentElement;
root.className += ' js';

function boxTop(idBox) {
  var boxOffset = $(idBox).offset().top;
  return boxOffset;
}

$(document).ready(function() {
  var $target = $('.anime'),
      animationClass = 'anime-init',
      windowHeight = $(window).height(),
      offset = windowHeight - (windowHeight / 4);

  function animeScroll() {
    var documentTop = $(document).scrollTop();
    $target.each(function() {
      if (documentTop > boxTop(this) - offset) {
        $(this).addClass(animationClass);
      } else {
        $(this).removeClass(animationClass);
      }
    });
  }
  animeScroll();

  $(document).scroll(function() {
    animeScroll();
  });
});
```

Não fique com medo do código acima. Ele está um pouco mais complexo por ter sido feito pensando na reutilização. Isso significa que você não vai precisar escrever mais nada, independente da quantidade de elementos que você deseja animar.

Agora vamos por partes:

1 – O código abaixo serve apenas para adicionarmos uma classe .js ao <html> do site. Assim podemos estilizar o conteúdo do nosso site sabendo que o JavaScript estará ativo. Dessa forma, caso o cliente esteja com o JS desativado, o conteúdo não será animado porém não ficará escondido para o usuário.

```javascript
var root = document.documentElement;
root.className += ' js';
```

2 – Agora criamos uma função chamada boxTop. Essa função é responsável por calcular a distância entre cada elemento que adicionarmos a classe anime e o topo da página.

```javascript
function boxTop(idBox) {
  // o .offset() retorna os valores de left e top dentro do
  // elemento que selecionarmos em $(idBox). Como queremos
  // o topo usamos ao final o .top
  var boxOffset = $(idBox).offset().top;
  return boxOffset;
}
```

3 – O próximo passo é identificarmos se o documento já está pronto, $(document).ready(). Dentro dele iniciamos uma função. A primeira parte da função é a definição das variáveis que vamos utilizar para definir a animação.

```javascript
$(document).ready(function() {
      // $target define qual elemento vamos animar. Neste caso, todos aqueles que tiverem a classe .anime
  var $target = $('.anime'),
      // animationClass é a classe com as propriedades da animação que será adicionada durante o scroll
      animationClass = 'anime-init',
      // windowHeight define a altura total da janela do browser. Isso serve para garantirmos que a
      // tela não fique em branco. Este valor será utilizado junto a comparação entre o elemento e o scroll
      windowHeight = $(window).height(),
      offset = windowHeight - (windowHeight / 4);
```

4 – Essa é a função animeScroll(). Ela que será responsável por fazer o cálculo final e definir se a classe anime-init deve ser adicionada ou não no elemento.

```javascript
function animeScroll() {
  // documentTop vai pegar a distância do total do scroll e o topo da página.
  // Isso em relação ao $(document).
  var documentTop = $(document).scrollTop();
  // $target é a variável que contem a classe que será animada. Queremos verificar cada uma
  // delas por isso temos o .each(), para selecionarmos cada uma individualmente.
  $target.each(function() {
    // Essa é a principal mágica, se o total de documentTop, for maior que boxTop(this) - offset,
    // adicione a classe ao elemento. Estamos se referindo ao elemento $target como this.
    if (documentTop > boxTop(this) - offset) {
      $(this).addClass(animationClass);
    // Caso contrário, remova a classe. Você pode deletar todo o else,
    // caso deseje que a animação ocorra uma única vez.
    } else {
      $(this).removeClass(animationClass);
    }
  });
}
```

5 – Por último, mas não menos importante, iniciamos a função animeScroll() mesmo antes do usuário der scroll. Isso serve para ativar aqueles elementos que já cabem na tela inicial do usuário (evitando assim um grande espaço vazio). Após isso criamos o evento $(document).scroll() que irá disparar novamente a função animeScroll() toda vez que o usuário der scroll na página.

```javascript
  // Ativa a função animeScroll()
  animeScroll();
  // Sempre que o usuário der scroll, ative novamente a função animeScroll()
  $(document).scroll(function() {
    animeScroll();
  });
});
```

Se você é totalmente novo em JS, uma parte ou outra pode parecer mágica. Mas fica de olho que vou lançar um curso focado em quem não sabe nada, para que ao final do curso você compreenda 100% o código acima.

Abaixo tem o código completo, com tudo funcionando e 100% comentado.

<iframe allowfullscreen="true" allowpaymentrequest="true" allowtransparency="true" class="cp_embed_iframe " frameborder="0" height="380" width="100%" name="cp_embed_2" scrolling="no" src="https://codepen.io/origamid/embed/EgaXvW?height=380&amp;theme-id=24256&amp;slug-hash=EgaXvW&amp;default-tab=js%2Cresult&amp;user=origamid&amp;embed-version=2&amp;editable=true&amp;name=cp_embed_2" title="CodePen Embed" loading="lazy" id="cp_embed_EgaXvW" style="margin: 0px; padding: 0px; border: 0px; vertical-align: baseline; width: 720px; overflow: hidden; display: block;"></iframe>

## Mais Dicas