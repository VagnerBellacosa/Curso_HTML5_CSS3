![encurtador de links](https://programandosolucoes.dev.br/wp-content/uploads/2021/10/encurtador-de-links-900x500.png)

# Encurtador de Links com HTML, CSS e Javascript

Veja nesse artigo



[Introdução](https://programandosolucoes.dev.br/2021/10/12/encurtador-de-links/#Introducao)[Preview](https://programandosolucoes.dev.br/2021/10/12/encurtador-de-links/#Preview)[Elementos HTML](https://programandosolucoes.dev.br/2021/10/12/encurtador-de-links/#Elementos_HTML)[Estilização dos elementos](https://programandosolucoes.dev.br/2021/10/12/encurtador-de-links/#Estilizacao_dos_elementos)[Funcionamento do encurtador de links](https://programandosolucoes.dev.br/2021/10/12/encurtador-de-links/#Funcionamento_do_encurtador_de_links)[Vídeo](https://programandosolucoes.dev.br/2021/10/12/encurtador-de-links/#Video)[Código fonte](https://programandosolucoes.dev.br/2021/10/12/encurtador-de-links/#Codigo_fonte)[Conclusão](https://programandosolucoes.dev.br/2021/10/12/encurtador-de-links/#Conclusao)[Referências](https://programandosolucoes.dev.br/2021/10/12/encurtador-de-links/#Referencias)[Este conteúdo te ajudou de alguma forma?](https://programandosolucoes.dev.br/2021/10/12/encurtador-de-links/#Este_conteudo_te_ajudou_de_alguma_forma)

## Introdução

Nesse post veja como criar um encurtador de links como bit.ly e outros somente com HTML, CSS e Javascript.

Você vai ver como colocar os elementos na tela, estilizar elementos com CSS, utilizar API Fetch do Javascript, selecionar elementos e entre outras dicas.



Criar projetos é sempre muito bom para treinar alguma linguagem que esteja aprendendo, e o encurtador de links é um projeto pequeno e que da para treinar muitos conceitos.

## Preview

<video controls="" loop="" src="https://programandosolucoes.dev.br/wp-content/uploads/2021/10/preview.mp4" style="box-sizing: inherit; display: inline-block; vertical-align: baseline; width: 755.953px;"></video>

## Elementos HTML

Primeiramente crie um diretório no seu computador e abra ele no seu editor de código preferido, eu usei o VsCode e criei um diretório chamado encurtador de links.

Com o diretório vazio aberto no VsCode, crie um arquivo chamado `index.html`, nele terão todos os elementos HTML.

A estrutura base vai ficar assim:

```
<!``DOCTYPE` `html> ``<!-- index.html -->``<``html` `lang``=``"pt-br"``>``<``head``>``  ``<``meta` `charset``=``"UTF-8"``>``  ``<``meta` `http-equiv``=``"X-UA-Compatible"` `content``=``"IE=edge"``>``  ``<``meta` `name``=``"viewport"` `content``=``"width=device-width, initial-scale=1.0"``>``  ``<``title``>Encurtador de Links</``title``>` `  ``<``link` `rel``=``"preconnect"` `href``=``"https://fonts.googleapis.com"``>``  ``<``link` `rel``=``"preconnect"` `href``=``"https://fonts.gstatic.com"` `crossorigin>``  ``<``link` `href``=``"https://fonts.googleapis.com/css2?family=Open+Sans:wght@600&display=swap"` `rel``=``"stylesheet"``>` `  ``<``link` `rel``=``"stylesheet"` `href``=``"style.css"` `/>``</``head``>``<``body``>``  ``<``div` `class``=``"box"``>``    ``<``h2` `class``=``"title"``>Encurtador de Links</``h2``>``    ``<``div` `class``=``"box-input"``>``      ``<``input` `class``=``"input-url"` `id``=``"input-url"` `type``=``"text"` `placeholder``=``"Coloque sua URL aqui"` `/>``      ``<``button` `class``=``"btn btn-short"` `onclick``=``"encurtarUrl()"``>Encurtar</``button``>``      ``<``button` `class``=``"btn btn-copy"` `onclick``=``"copiar()"``>Copiar</``button``>``    ``</``div``>``  ``</``div``>` `  ``<``script` `src``=``"script.js"``></``script``>``</``body``>``</``html``>
```

Nas linhas 9, 10 e 11, fiz a importação da fonte [Open Sans](https://fonts.google.com/specimen/Open+Sans) do Google para o projeto, depois vou utilizar essa fonte no CSS.



Vamos centralizar todo o conteúdo que tiver dentro do `body`, para o encurtador de links ficar centralizado.

O encurtador de links tem duas linhas, a primeira é o título e a segunda é o campo e os botões de ação.

E a classe `box` vai servir exatamente para criarmos esse comportamento, e vamos fazer utilizando o flexbox.

Por isso também que o input e os botões de ação tem que ficar dentro de uma div, para que todos eles fiquem na mesma linha.

## Estilização dos elementos

Para estilizar crie o arquivo style.css, ele já foi importado dentro do HTML, então todo o CSS escrito dentro desse arquivo já irá refletir no HTML.

Primeiramente vamos fazer um reset no estilo padrão do navegador, importar a fonte dentro do `body`, e centralizar todo o conteúdo do `body` com o flexbox, dessa forma:

```
* {``  ``padding``: ``0``;``  ``margin``: ``0``;``  ``border``: ``0``;``  ``box-sizing``: ``border-box`` ``}` `body {``  ``font-family``: ``'Open Sans'``, ``sans-serif``;``  ``display``: ``flex``;``  ``align-items``: ``center``;``  ``justify-content``: ``center``;``  ``background-color``: ``#1E272E``;``  ``width``: ``100``vw;``  ``height``: ``100``vh;``}
```



As linhas 10, 11 e 12 centralizam um conteúdo com flexbox.

As linhas 14 e 15 indicam para o `body` ocupar o tamanho total da tela, e com isso garante que o conteúdo do encurtador de links sempre estará ao centro.

Agora vamos estilizar a classe box, e criar o comportamento para ficar o título em cima, e os botões com o `input` na linha abaixo.

```
.box {``  ``display``: ``flex``;``  ``align-items``: ``center``;``  ``justify-content``: ``center``;``  ``flex-direction``: column;``  ``width``: ``80%``;``  ``height``: ``300px``;``  ``margin-top``: ``-100px``;``}
```

Além da centralização padrão do flexbox como vimos antes, agora tem o atributo `flex-direction`.

Esse atributo é utilizado para definir o direcionamento dos elementos, no caso defini como `column`, e então todos os elementos irão ficar um em cada linha.

Caso o `input` e os botões não tivessem dentro de uma `div`, iria ficar o `input` e cada botão em uma linha diferente, e por querer deixar tudo na mesma linha, por isso coloquei a `div` em volta deles.

Agora vamos criar a estilização do título, `input` e botões.

```
.title {``  ``font-size``: ``35px``;``  ``margin-bottom``: ``30px``;``  ``color``: ``#FFF``;``}` `.box-input {``  ``width``: ``100%``;``  ``display``: ``flex``;``  ``justify-content``: ``center``;``}` `.input-``url` `{``  ``padding``: ``12px` `20px``;``  ``text-align``: ``center``;``  ``outline``: ``transparent``;``  ``width``: ``40%``;``  ``border-radius``: ``50px``;``  ``font-size``: ``20px``;``  ``color``: ``#1E272E``;``}` `.btn {``  ``padding``: ``15px` `20px``;``  ``width``: ``170px``;``  ``margin-left``: ``10px``;``  ``border-radius``: ``50px``;``  ``background-color``: ``#FFD32A``;``  ``font-size``: ``20px``;``  ``color``: ``#1E272E``;``}` `.btn:hover {``  ``transition``: .``5``s;``  ``background-color``: ``#fac800``;``}
```



Com isso o encurtador de links ficará com o estilo mostrado no preview.

## Funcionamento do encurtador de links

Para o funcionamento utilizaremos o Javascript, crie um arquivo chamado `script.js`. Ele também já foi linkado dentro do HTML.

Também vamos precisar utilizar um serviço externo que será responsável por encurtar os links e devolver o link encurtado.

O serviço que vou utilizar é o [rebrand.ly](https://www.rebrandly.com/), eles tem um plano gratuito, é preciso criar uma conta para acessar o serviço deles via API.

Você pode criar uma conta normalmente, ou vincular com a conta do Google, irá funcionar normal, depois que criar a conta, vá para a dashboard.

Na dashboard, clique no menu “perfil” no canto superior direito, em cima do avatar da conta e depois clique em “api keys”.

Vai abrir um modal, clique em “Generate new API key”, e ele vai gerar uma chave, será uma sequência de caracteres aleatórios, copie essa chave.

Agora vamos criar a função para encurtar, o código dela fica assim:

```
function` `encurtarUrl() { ``//script.js``  ``//validar se a url existe``  ``let` `url = document.getElementById(``"input-url"``).value;``  ``if``(!url){``    ``alert(``"É preciso inserir uma URL para encurtar"``);``    ``return``;``  ``}` `  ``//encurtador de links``  ``let` `headers = {``    ``"Content-Type"``: ``"application/json"``,``    ``"apikey"``: ``"cole a sua API key aqui"``,``  ``}` `  ``let` `linkRequest = {``    ``destination: document.getElementById(``"input-url"``).value,``    ``domain: { fullName: ``"rebrand.ly"` `}``   ``}` `  ``fetch(``"https://api.rebrandly.com/v1/links"``, {``    ``method: ``"POST"``,``    ``headers: headers,``    ``body: JSON.stringify(linkRequest)``  ``}).then(response => response.json()).then(json => { ``    ``let` `input = document.getElementById(``"input-url"``);``    ``input.value = json.shortUrl;``   ``});``}
```



Na linha 4, primeiramente fazemos a validação para caso o usuário não tenha colocado nenhum link para encurtar, o código não prossegue.

Na linha 10 criamos uma variável para ter as informações que são necessárias para solicitar um link na API do rebrand.ly, o Content-Type para dizer que vamos transitar dados JSON, e a API key, coloque o código que foi gerado no painel.

Essa API key é necessária para o serviço deles criar um link encurtado para a sua conta.

Na linha 15 tem os dados da url que será encurtada, no caso peguei o valor que foi digitado no input pelo usuário, que vai ser a url longa, e vou mandar para a API do rebrand.ly.

O domain essa é a chave com o valor padrão deles. Caso você tenha um link personalizado, ai vai precisar criar o domínio no painel deles, mas para o exemplo, pode deixar esse valor mesmo.

A linha 20 para baixo é utilizada para fazer a requisição para a API do rebrand.ly, mandando os dados corretos para encurtar o link.

Essa requisição é feita nativamente pelo Javascript com a API Fetch, com ela você pode configurar os dados da requisição para fazer, e ele irá fazer a requisição e trazer o retorno, exatamente como fizemos nas variáveis headers e linkRequest (os dados para enviar na requisição).

O retorno da requisição é capturado dentro do then, e dentro dele pegamos esse retorno, e colocamos novamente no input, para ter o link encurtado com sucesso.

Agora vamos fazer a função de copiar, para isso o código é:

```
function` `copiar() {``  ``var` `copyText = document.getElementById(``"input-url"``);`` ` `  ``copyText.select();``  ``copyText.setSelectionRange(0, 99999);`` ` `  ``navigator.clipboard.writeText(copyText.value);` `  ``alert(``"URL copiada: "` `+ copyText.value);`` ``}
```

Basicamente quando o usuário clicar em copiar, irá ser copiado o link encurtado e o usuário pode apertar ctrl + v para colar o link onde quiser.

E se a pessoa colar esse link encurtado no navegador, será redirecionado para o link original.

## Vídeo

https://youtu.be/MEeLeXfEIaA

https://youtu.be/j3gcgBbwcck

## Código fonte

O código fonte está no meu Github, [neste link](https://github.com/VitorCeron/encurtador-url).

Para ver outros canais onde o posto conteúdo sobre HTML, CSS e Javascript, veja os [Links do Programando Soluções.](https://programandosolucoes.dev.br/links-uteis/)

## Conclusão

Com esse código é possível criar um encurtador de links simples com HTML, CSS e Javascript. É um excelente projeto para treinar programação e ter no portfólio.

## Referências

https://fonts.google.com/specimen/Open+Sans

https://www.rebrandly.com/