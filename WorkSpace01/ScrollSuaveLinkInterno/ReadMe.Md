# Scroll Suave para Link Interno

[Código](https://www.origamid.com/codex/category/codigo/) | 52.066 | 14 de setembro de 2016

![Scroll Suave para Link Interno](https://www.origamid.com/codex/wp-content/uploads/2016/09/scroll-suave.png)

A web é um emaranhado de links. Um tipo de link muito comum é a ancora, que seria um link interno. Basta adicionar ao href uma cerquilha (jogo da velha #) seguida por um nome único ex: href=”#contato” e atribuir um id=”contato” ao elemento na página.

Assim ao clicar no link, o scroll automaticamente vai “pular” para onde está o elemento com o id.

O objetivo desse tutorial é mudarmos esse pulo, para um scroll suave. Isso garante que o usuário entenda o contexto em que ele está, e em qual local na página esse conteúdo se encontra.

<iframe allowfullscreen="true" allowpaymentrequest="true" allowtransparency="true" class="cp_embed_iframe " frameborder="0" height="380" width="100%" name="cp_embed_1" scrolling="no" src="https://codepen.io/origamid/embed/XjXYjk?height=380&amp;theme-id=24256&amp;slug-hash=XjXYjk&amp;default-tab=js%2Cresult&amp;user=origamid&amp;embed-version=2&amp;editable=true&amp;name=cp_embed_1" title="CodePen Embed" loading="lazy" id="cp_embed_XjXYjk" style="margin: 0px; padding: 0px; border: 0px; vertical-align: baseline; width: 720px; overflow: hidden; display: block;"></iframe>



Vamos usar JavaScript para isso, com a ajuda das funções de jQuery para facilitar a escrita.

A lógica é simples:

- 1 – Identificar o momento em que o usuário clica no link
- 2 – Verificar o valor de href do link e encontrar o elemento com este ID na página
- 3 – Calcular a distância entre o elemento e o topo da página
- 4 – Animar o scroll até o local do elemento

```javascript
$('.nav a[href^="#"]').on('click', function(e) {
  e.preventDefault();
  var id = $(this).attr('href'),
  targetOffset = $(id).offset().top;
    
  $('html, body').animate({ 
    scrollTop: targetOffset - 100
  }, 500);
});
```

Agora vamos por partes:

1 – Primeiro eu quero identificar o momento em que alguém clica em um link que comece com #, assim eu posso criar no mesmo menu links internos e externos. Pois caso o link não comece com #, o seu comportamento será padrão.

```javascript
// o a[href^="#"] seleciona apenas links com href="#"
// atribuímos a função on e passamos o parâmetro click nela
$('.nav a[href^="#"]').on('click', function(e) {
```

2 – Agora eu preciso identificar o valor de href do link que eu cliquei

```javascript
// o preventDefault(); serve para prevenir que o link funcione da forma padrão
// que no caso seria "pulando" para o elemento com o id
e.preventDefault();

// crio um variável id e coloco o valor do atributo (attr) href nela.
// eu quero o valor referente ao link que eu cliquei, por isso o $(this)
var id = $(this).attr('href'),

// crio outra variável com o valor offset do elemento que possui id
// com o mesmo valor do link. Esse offset é a distância entre o elemento
// e o topo da página, por isso o offset().top
targetOffset = $(id).offset().top;
```

3 – Agora eu posso criar a animação do scroll até o local do id, já que possuo a distância.

```javascript
  // Seleciono os elementos html e body (por motivo de inconsistência entre browsers)
  // e atribuo a eles a função animate do CSS
  $('html, body').animate({
    
    // eu quero animar o scrollTop com o valor do meu offset
    // o - 100 serve para criar uma distância de 100px entre
    // o destino e o topo da página, assim o meu menu fixo não
    // cobre o conteúdo ao final do scroll. Esse valor vai depender
    // do tamanho do seu menu (e se você tem menu fixo ou não)
    scrollTop: targetOffset - 100

  // por último eu defino a velocidade da animação, neste caso 500ms
  }, 500);
});
```

Você não precisa se limitar a animação apenas, você pode por exemplo adicionar uma classe ativo ao item do menu, dependendo da área do site em que ele esteja.

## Mais Dicas