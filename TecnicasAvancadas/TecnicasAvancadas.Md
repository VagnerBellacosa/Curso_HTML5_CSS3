ti-enxame.com

/[home](https://www.ti-enxame.com/)/[português](https://www.ti-enxame.com/pt/)/[html](https://www.ti-enxame.com/pt/html/)/Espaço de tabulação em vez de vários espaços sem quebra ("nbsp")?



# Espaço de tabulação em vez de vários espaços sem quebra ("nbsp")?

É possível inserir um caractere de tabulação em HTML em vez de digitar ` ` quatro vezes?

**[html](https://www.ti-enxame.com/pt/html/)**

 893

15 de out. de 2009[Roch](https://stackoverflow.com/users/83475/roch)







É muito mais limpo usar CSS. Tente `padding-left:5em` ou `margin-left:5em` conforme apropriado.

 539

15 de out. de 2009[Alohci](https://stackoverflow.com/users/42585/alohci)



Depende de qual conjunto de caracteres você deseja usar.

Não existe uma entidade de separador definida no HTML ISO-8859-1, mas existem alguns caracteres de espaço em branco diferentes de ` ` como ` `, ` ` e ` `.

Em ASCII, `	` é uma guia.

[Aqui](https://dev.w3.org/html5/html-author/charref) é uma listagem completa de entidades HTML e [uma discussão útil de espaços em branco na Wikipedia](https://en.wikipedia.org/wiki/Space_(punctuation)#Spaces_in_Unicode) .

 1217

15 de out. de 2009[kristian](https://stackoverflow.com/users/20377/kristian)

Não, [Tab](https://wikipedia.org/wiki/Tab_key#Tab_characters) é apenas [espaço em branco](https://wikipedia.org/wiki/Whitespace_character) no que diz respeito ao HTML. Eu recomendaria um [**em-espaço** ](https://wiktionary.org/wiki/em_space)em vez disso, que é tão grande (→ | | ←) ... [normalmente](http://jkorpela.fi/chars/spaces.html#adj) **4 espaços de largura** - e é entrada como**` `**.

Você pode até conseguir usar o Unicode [character](https://codepoints.net/U+2003) ("` `") para isso, se tiver sorte.

- Aqui está uma lista de [**caracteres de espaço e "espaços de largura zero" em Unicode** ](http://jkorpela.fi/chars/spaces.html).

 217

15 de out. de 2009[Will Robertson](https://stackoverflow.com/users/4161/will-robertson)

> **& emsp;** é a resposta.

No entanto, eles não serão tão funcionais quanto se espera se você estiver acostumado a usar tabulações horizontais em processadores de texto, por exemplo. Word, Wordperfect, Open Office, Wordworth, etc. Eles são de largura fixa e não podem ser personalizados.

O CSS oferece muito mais controle e fornece uma alternativa até que o W3C forneça uma solução oficial.

**Exemplo:**

```default
padding-left:4em 
```

..ou..

```default
margin-left:4em 
```

..como apropriado

Depende de qual conjunto de caracteres você deseja usar.

Você pode configurar algumas tags de guia e usá-las de maneira semelhante à forma como você usaria as tags h.

```default
<style>
    tab1 { padding-left: 4em; }
    tab2 { padding-left: 8em; }
    tab3 { padding-left: 12em; }
    tab4 { padding-left: 16em; }
    tab5 { padding-left: 20em; }
    tab6 { padding-left: 24em; }
    tab7 { padding-left: 28em; }
    tab8 { padding-left: 32em; }
    tab9 { padding-left: 36em; }
    tab10 { padding-left: 40em; }
    tab11 { padding-left: 44em; }
    tab12 { padding-left: 48em; }
    tab13 { padding-left: 52em; }
    tab14 { padding-left: 56em; }
    tab15 { padding-left: 60em; }
    tab16 { padding-left: 64em; }
</style>
```

... e usá-los assim:

```default
<!DOCTYPE html>

<html>
    <head>
        <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
        <title>Tabulation example</title>

        <style type="text/css">
            dummydeclaration { padding-left: 4em; } /* Firefox ignores first declaration for some reason */
            tab1 { padding-left: 4em; }
            tab2 { padding-left: 8em; }
            tab3 { padding-left: 12em; }
            tab4 { padding-left: 16em; }
            tab5 { padding-left: 20em; }
            tab6 { padding-left: 24em; }
            tab7 { padding-left: 28em; }
            tab8 { padding-left: 32em; }
            tab9 { padding-left: 36em; }
            tab10 { padding-left: 40em; }
            tab11 { padding-left: 44em; }
            tab12 { padding-left: 48em; }
            tab13 { padding-left: 52em; }
            tab14 { padding-left: 56em; }
            tab15 { padding-left: 60em; }
            tab16 { padding-left: 64em; }

        </style>

    </head>

    <body>
        <p>Non tabulated text</p>

        <p><tab1>Tabulated text</tab1></p>
        <p><tab2>Tabulated text</tab2></p>
        <p><tab3>Tabulated text</tab3></p>
        <p><tab3>Tabulated text</tab3></p>
        <p><tab2>Tabulated text</tab2></p>
        <p><tab3>Tabulated text</tab3></p>
        <p><tab4>Tabulated text</tab4></p>
        <p><tab4>Tabulated text</tab4></p>
        <p>Non tabulated text</p>
        <p><tab3>Tabulated text</tab3></p>
        <p><tab4>Tabulated text</tab4></p>
        <p><tab4>Tabulated text</tab4></p>
        <p><tab1>Tabulated text</tab1></p>
        <p><tab2>Tabulated text</tab2></p>

    </body>

</html>
```

Execute o snippet acima para ver um exemplo visual.

**Discussão extra**

Não há entidades de tabulação horizontal definidas no HTML ISO-8859-1, no entanto, existem alguns outros caracteres de espaço em branco disponíveis do que o usual `&nbsp`, por exemplo; ` `, ` ` e o ` ` acima mencionado.

Também vale a pena mencionar que em ASCII e Unicode, `	` é uma tabulação horizontal.

 183

17 de nov. de 2013[Knickerless-Noggins](https://stackoverflow.com/users/1271898/knickerless-noggins)

**Tente** ` `

É equivalente a quatro ` `s.

 66

5 de mai. de 2016[Abhishek Goel](https://stackoverflow.com/users/2439715/abhishek-goel)



Realmente não existe uma maneira fácil de inserir vários espaços dentro (ou no meio) de um parágrafo. Aqueles que sugerem que você use CSS estão faltando o ponto. Você pode nem sempre estar tentando recuar um parágrafo de um lado, mas, na verdade, tentando colocar espaços extras em um determinado ponto dele.

Em essência, neste caso, os espaços se tornam *o conteúdo* e **não** o estilo. Não sei por que tantas pessoas não veem isso. Eu acho que a rigidez com que eles tentam impor a separação de estilo e conteúdo regra (HTML foi projetado para fazer as duas coisas desde o início - não há nada errado com ocasionalmente definir o estilo de um *unique* usando tags apropriadas sem ter que dedicar muito mais tempo à criação de folhas de estilo CSS e não há absolutamente nada ilegível quando usado com moderação. Também há algo a ser dito sobre a capacidade de fazer algo rapidamente. Isso se traduz em como eles só podem considerar o espaço em branco caracteres como sendo usados apenas para estilo e recuo.

E quando não há nenhuma maneira elegante de inserir espaços sem ter que confiar nas tags ` ` e ` `, eu argumentaria que o código resultante se torna muito mais ilegível do que se houvesse uma tag apropriadamente chamada que permitisse inserir rapidamente um grande número de espaços (ou se, você sabe, espaços não foram desnecessariamente consumidos em primeiro lugar).

No entanto, como foi dito acima, sua melhor aposta seria usar ` ` para inserir no lugar correto.

 50

15 de jun. de 2011[GonzoKnight](https://stackoverflow.com/users/661282/gonzoknight)

Abaixo estão as 3 maneiras diferentes fornecidas pelo HTML para inserir espaço vazio

1. Digite ` ` para adicionar um único espaço.
2. Digite ` ` para adicionar 2 espaços.
3. Digite ` ` para adicionar 4 espaços.

 45

2 de jul. de 2018[sanjeev51](https://stackoverflow.com/users/1359002/sanjeev51)

É melhor usar a tag **pre** . A tag **pre** define o texto pré-formatado.

```default
<pre>
 This is
preformatted text.
It preserves      both spaces

and line breaks.

</pre>
```

saiba mais sobre pre tag em [este link](https://www.w3schools.com/tags/tag_pre.asp)

 44

29 de ago. de 2013[Srikanth Muttavarapu](https://stackoverflow.com/users/2417132/srikanth-muttavarapu)

Eu me deparei com isso enquanto procurava por um método e acabei descobrindo o meu próprio que parece funcionar facilmente para o que é desejado. Eu sou novo para postar aqui, então espero que isso funcione ... Mas tem isso em CSS:

```default
span.tab{
    padding: 0 80px; /* Or desired space*/
}
```

Então, no seu HTML, essa é a sua "aba longa" no meio da frase, como eu precisava:

```default
<span class="tab"></span>
```

Economiza da quantidade de ` ` ou ` ` que você precisa.

Espero que isso ajude alguém, felicidades!

 40

26 de out. de 2012[Rob](https://stackoverflow.com/users/1777812/rob)

**` `**,**` `**,**` `**ou**` `**pode ser usado.

W3 diz ...

```default
The character entities &ensp; and &emsp; denote an en space and an em space respectively, where an en space is half the point size and an em space is equal to the point size of the current font. 
```

[Leia mais em W3.org para HTML3](https://www.w3.org/MarkUp/html3/specialchars.html)

[Leia mais em W3.org para HTML4](https://www.w3.org/TR/html4/sgml/entities.html)

Ainda mais em [Wikipedia](https://en.wikipedia.org/wiki/Template_talk:Space)

 18

15 de mai. de 2014[shyammakwana.me](https://stackoverflow.com/users/2219158/shyammakwana-me)



AFAIK, a única maneira é usar

```default
&nbsp;
```

Se você pode usar CSS, então você pode usar preenchimento ou margem. Consulte*[modelo de caixa](https://www.w3.org/TR/CSS2/box.html)*, e para o Internet Explorer, também ler*[erro de modelo de caixa do Internet Explorer](https://en.wikipedia.org/wiki/Internet_Explorer_box_model_bug)*.

 15

15 de out. de 2009[rahul](https://stackoverflow.com/users/47738/rahul)

Se o espaço em branco se tornar *que* importante, pode ser melhor usar texto pré-formatado e a tag <pre>.

 8

15 de out. de 2009[pavium](https://stackoverflow.com/users/153545/pavium)

A tag <tab> nunca entrou nos navegadores, apesar de ter sido introduzida no HTML3. Sempre achei uma pena porque a vida seria muito mais fácil em muitas circunstâncias, se a tivéssemos disponível. Mas você pode facilmente remediar isso para fornecer uma tag <tab> falsa. Adicione o seguinte no cabeçalho do seu HTML ou então (sem as tags de estilo) no seu CSS:

```default
<style>
    tab { padding-left: 4em; }
</style>
```

A partir daí, quando você precisar de uma guia no documento, coloque <tab> lá. Não é uma tabulação verdadeira porque não está alinhada a marcas de tabulação, mas funciona para a maioria das necessidades, sem ter que alternar com entidades ou espaços de caractere desajeitados. Isso torna muito fácil verificar a sua fonte, e uma coisa fácil para formatar coisas simples, onde você não quer ir para o incômodo de tabelas ou outras "soluções" mais complexas.

Um aspecto interessante desta solução é que você pode fazer uma rápida pesquisa/substituição de um documento de texto para substituir todos os TABs pela tag <tab>.

Você pode ser capaz de definir um monte de verdadeiras abas de posição absoluta, então use a aba apropriada (por exemplo, <tab2> ou <tab5> ou qualquer outra) onde for necessário, mas eu não encontrei uma maneira de fazer isso sem recuar linhas subseqüentes .

 8

19 de ago. de 2014[user1388236](https://stackoverflow.com/users/1388236/user1388236)

Se você está procurando apenas recuar a primeira frase em um parágrafo, você pode fazer isso com um pequeno truque de CSS:

```default
p:first-letter {
    margin-left: 5em;
}
```

 7

15 de out. de 2009[peirix](https://stackoverflow.com/users/59242/peirix)

Você pode usar uma tabela e aplicar um atributo `width` ao primeiro `<td>`.

> Código:

```default
<table>
    <tr>
        <td width="100">Content1</td>
        <td>Content2</td>
    </tr>
    <tr>
        <td>Content3</td>
        <td>Content4</td>
    </tr>
</table>
```

> Resultado

```default
Content1       Content2
Content3       Content4
```

 6

12 de set. de 2013[mangkokorix](https://stackoverflow.com/users/2772046/mangkokorix)



Eu usei um espaço com o estilo de linha. Eu tive que fazer isso como eu como o processamento de uma string de texto simples e precisa substituir o\t com 4 espaços (appx). Eu não pude usar ` `, já que no processo eles estavam sendo interpretados para que a marcação final tivesse espaços sem conteúdo.

HTML:

```default
<span style="padding: 0 40px">&nbsp;</span>
```

Eu usei isso em uma função php assim:

```default
$message = preg_replace('/\t/', '<span style="padding: 0 40px">&nbsp;</span>', $message);
```

 5

15 de nov. de 2012[Gordy](https://stackoverflow.com/users/1826672/gordy)

Se você precisava apenas de uma guia, o seguinte funcionou para mim.

```default
<style>
  .tab {
    position: absolute;
    left: 10em;
   }
</style>
```

com o HTML algo como:

```default
<p><b>asdf</b> <span class="tab">99967</span></p>
<p><b>hjkl</b> <span class="tab">88868</span></p> 
```

Você pode adicionar mais "guias" adicionando estilos "tab" adicionais e alterando o HTML, como:

```default
<style>
  .tab {
    position: absolute;
    left: 10em;
   }
  .tab1 {
    position: absolute;
    left: 20em;
   }
</style>
```

com o HTML algo como:

```default
<p><b>asdf</b> <span class="tab">99967</span><span class="tab1">hear</span></p>
<p><b>hjkl</b> <span class="tab">88868</span><span class="tab1">here</span></p>
```

 4

24 de nov. de 2013[StrangeDucks](https://stackoverflow.com/users/608741/strangeducks)

```default
<span style="margin-left:64px"></span>  
```

Considere assim: uma guia é igual a 64 pixels. Então este é o espaço que podemos dar por CSS.

 3

12 de jun. de 2014[Mateen](https://stackoverflow.com/users/3156006/mateen)

Se você estiver usando CSS, sugiro o seguinte:

```
p:first-letter { text-indent:1em; }
```

Isso irá recuar a primeira linha como nas publicações tradicionais.

 3

15 de out. de 2009[Slevin](https://stackoverflow.com/users/175512/slevin)

O código CSS ideal que deve ser usado deve ser uma combinação de propriedades "display" e "min-width" ...

```default
display: inline-block;
min-width: 10em; // ...for example, depending on the uniform width to be achieved for the items [in a list], which is a common scenario where tab is often needed.
```

 2

21 de mai. de 2018[Olumide](https://stackoverflow.com/users/4974715/olumide)



Eu uso uma lista sem marcadores para dar a aparência "tabulada". (É o que às vezes faço quando uso o MS Word)

No arquivo CSS:

```default
.tab {
    margin-top: 0px;
    margin-bottom: 0px;
    list-style-type: none;
}
```

E no arquivo HTML use listas não ordenadas:

```default
This is normal text
<ul class="tab">
    <li>This is indented text</li>
</ul>
```

A beleza desta solução é que você pode fazer mais recuos usando listas aninhadas.

Um noob aqui falando, por isso, se houver algum erro, por favor, comente.

 2

25 de jan. de 2016[funct7](https://stackoverflow.com/users/2828100/funct7)

Existe um css simples para isso:

```default
white-space: pre;
```

Ele mantém os espaços que você adiciona no HTML em vez de unificá-los.

 2

13 de mar. de 2019[Avi](https://stackoverflow.com/users/6578723/avi)

usamos classe de espaço de espaço personalizado

```default
<span class='space'></span>
```

Inclua a classe de espaço no CSS.

```default
.space 
{
   margin-left:45px;
}
```

 1

24 de mai. de 2018[rashedcs](https://stackoverflow.com/users/6714430/rashedcs)

Bem, se alguém precisa de um longo espaço em branco no início de uma linha apenas fora do parágrafo inteiro, então isso pode ser uma solução:

```default
<span style='display:inline-block;height:1em;width:4em;'>&nbsp;</span>
```

Se isso é muito para escrever ou se precisar de tais guias em muitos lugares, então você pode fazer isso

```default
<span class='tab'>&nbsp;</span>
```

Em seguida, inclua isso no CSS:

```default
span.tab {display:inline-block;height:1em;width:4em;}
```

 1

21 de fev. de 2014[Evgeny Savelev](https://stackoverflow.com/users/3339088/evgeny-savelev)

Você também pode usar:

```default
p::before {
    content: "";
    padding-left: 30px;
}
```

E substitua "p" por qualquer outro seletor que você tenha em mente.

 1

15 de mai. de 2014[bognix](https://stackoverflow.com/users/1677668/bognix)



podemos usar style = "white-space: pre" assim:

```default
<p>Text<tab style="white-space:pre">        </tab>: value</p>
<p>Text2<tab style="white-space:pre">   </tab>: value2</p>
<p>Text32<tab style="white-space:pre">  </tab>: value32</p>
```

o espaço em branco no interior é preenchido com guias, a quantidade de guias depende do texto.

vai ficar assim:

```default
Text    : value
Text2   : value2
Text32  : value32
```

 1

24 de mai. de 2017[Esgi Dendyanri](https://stackoverflow.com/users/1823396/esgi-dendyanri)

Usando CSS e melhores práticas, a criação dinâmica de menus recuados e aninhados seria a seguinte:

1. Crie um estilo para cada aninhamento, como indent1, indent2 etc, com cada um especificando sua própria margem esquerda. A estrutura do site raramente deve ultrapassar três níveis de aninhamento.
2. Use uma variável estática (integer) dentro da função auto-recursiva para rastrear a recursão.
3. Para cada loop, anexe o número do loop ao Word `indent`, usando scripts do lado do servidor, como PHP ou ASP, para que esses menus sejam formatados adequadamente por CSS.

Como alternativa, faça um loop pela variável estática para adicionar espaçamento usando várias tags ` ` ou `<pre>` ou outros caracteres, conforme apropriado.

A partir do teste do caractere de tabulação horizontal, `	`, descobri que ele não funciona como um substituto para vários ` ` no cenário que descrevi. Você pode ter resultados diferentes.

 0

10 de ago. de 2012[Ro Mc](https://stackoverflow.com/users/1589685/ro-mc)

**CSS**

```default
<html>
<head>
<style>
    tab:before
    {
        content: "\00a0\00a0\00a0\00a0";
    }
</style>
</head>
```

**HTML**

```default
<body>
    <tab> #include &lt; stdio.h &gt; <br>
    <tab> <br>
    <tab> int main (void) <br>
    <tab> { <br>
    <tab> <tab> printf ("Hello, World!"); <br>
    <tab> <tab> return 0; <br>
    <tab> } <br>
</body>
</html>
```

**renderizado**

> [![enter image description here](https://i.stack.imgur.com/bRQBj.png)](https://i.stack.imgur.com/bRQBj.png)

 0

26 de mai. de 2016[Khaled.K](https://stackoverflow.com/users/2128327/khaled-k)

Esta não é uma resposta direta, mas eu queria adicionar uma guia no documento Markdown. Eu estava desenhando um gráfico de objetos como este:

```default
--Parent
    |
    + Child 1
```

Claro que a maneira mais fácil de marcá-lo como código, recuando por 4 espaços e, em seguida, é tratado como código no Markdown.

```default
    --Parent
        |
        + Child 1
```

 0

9 de mai. de 2017[hum3](https://stackoverflow.com/users/3649456/hum3)

Apenas tag "pré":

```default
<pre>Name:      Waleed Hasees
Age:        33y
Address:    Palestine / Jein</pre>
```

Você pode aplicar qualquer classe CSS nesta tag.

 0

6 de fev. de 2013[Yanni](https://stackoverflow.com/users/689782/yanni)



```default
<head>
<style> t {color:#??????;letter-spacing:35px;} </style>
</head>

<t>.</t>
```

Certifique-se de que o código de cores corresponda ao plano de fundo que o px é variável ao tamanho desejado para a guia.

Em seguida, adicione seu texto após o <t>. </ T>

O período é usado como um suporte de espaço e é mais fácil de digitar, mas o '& # 160;' pode ser usado no lugar do período, fazendo com que o código de cores seja irrelevante.

```default
<head>
<style> t {letter-spacing:35px;} </style>
</head>

<t>&#160;</t>
```

Isso é útil principalmente para exibir parágrafos de texto, embora possa ser útil em outras partes dos scripts.

 0

31 de mai. de 2014[Eric A. Tuttle](https://stackoverflow.com/users/3695876/eric-a-tuttle)

Eu simplesmente recomendaria:

```default
/* In your CSS code: */
pre
{
    display:inline;
}

<!-- And then, in your HTML code: -->

<pre>    This text comes after four spaces.</pre>
<span> Continue the line with other element without braking </span>
```

 0

21 de mar. de 2013[yoav barnea](https://stackoverflow.com/users/1219182/yoav-barnea)

Esta é uma solução feia mas você pode fazer isso

```default
var tab = '&nbsp;&nbsp;&nbsp;&nbsp;';
```

Em seguida, use a variável tab em suas strings.

 0

20 de set. de 2013[Aonghus McGovern](https://stackoverflow.com/users/1221242/aonghus-mcgovern)



[Como verificar se uma caixa de seleção está marcada no jQuery?](https://www.ti-enxame.com/pt/jquery/como-verificar-se-uma-caixa-de-seleccedilatildeo-estaacute-marcada-no-jquery/957605532/)

[Alterar a cor do marcador de posição de uma entrada HTML5 com CSS](https://www.ti-enxame.com/pt/html/alterar-cor-do-marcador-de-posicao-de-uma-entrada-html5-com-css/969881581/)

[Redirecionar de uma página HTML](https://www.ti-enxame.com/pt/html/redirecionar-de-uma-paacutegina-html/971635290/)

[Como mudar a classe de um elemento com JavaScript?](https://www.ti-enxame.com/pt/javascript/como-mudar-classe-de-um-elemento-com-javascript/958467007/)

[Como posso saber qual botão de opção está selecionado por meio do jQuery?](https://www.ti-enxame.com/pt/javascript/como-posso-saber-qual-botao-de-opcao-esta-selecionado-por-meio-do-jquery/957818799/)

[Correspondências abertas de correspondência RegEx, exceto tags auto-contidas XHTML](https://www.ti-enxame.com/pt/html/correspondecircncias-abertas-de-correspondecircncia-regex-exceto-tags-auto-contidas-xhtml/969008752/)

[Como fazer um div 100% de altura da janela do navegador?](https://www.ti-enxame.com/pt/html/como-fazer-um-div-100-de-altura-da-janela-do-navegador/968780937/)

[Ocultar uma barra de rolagem, mas ainda pode rolar](https://www.ti-enxame.com/pt/html/ocultar-uma-barra-de-rolagem-mas-ainda-pode-rolar/1073422811/)

[HTML 5: É de fato,  ou ?](https://www.ti-enxame.com/pt/html/html-5-eacute-de-fato-br-ou-br/968694194/)

[Folha de estilo não carregada por causa do tipo MIME](https://www.ti-enxame.com/pt/html/folha-de-estilo-nao-carregada-por-causa-do-tipo-mime/836561452/)

[Como substituir innerHTML de uma div usando jQuery?](https://www.ti-enxame.com/pt/javascript/como-substituir-innerhtml-de-uma-div-usando-jquery/966947232/)

[Como caixas de seleção de seus próprios rótulos de forma essencial entre os navegadores](https://www.ti-enxame.com/pt/html/como-caixas-de-selecao-de-seus-proprios-rotulos-de-forma-essencial-entre-os-navegadores/958512288/)

[Alterando a cor de um elemento hr](https://www.ti-enxame.com/pt/html/alterando-cor-de-um-elemento-hr/972540775/)

[Como criar uma caixa de seleção de HTML com um rótulo clicável](https://www.ti-enxame.com/pt/html/como-criar-uma-caixa-de-seleccedilatildeo-de-html-com-um-roacutetulo-clicaacutevel/972451032/)

[Entrada de texto HTML permite apenas entrada numérica](https://www.ti-enxame.com/pt/javascript/entrada-de-texto-html-permite-apenas-entrada-numerica/958216129/)

[Como adicionar um ícone de guia do navegador (favicon) para um site?](https://www.ti-enxame.com/pt/html/como-adicionar-um-iacutecone-de-guia-do-navegador-favicon-para-um-site/972160437/)

[Centralizar a imagem usando o centro de alinhamento de texto?](https://www.ti-enxame.com/pt/html/centralizar-imagem-usando-o-centro-de-alinhamento-de-texto/940248269/)

[Clique no botão copiar para a área de transferência usando jQuery](https://www.ti-enxame.com/pt/jquery/clique-no-botao-copiar-para-area-de-transferencia-usando-jquery/1044730509/)

[href = "tel:" e números de celular](https://www.ti-enxame.com/pt/html/href-tel-e-nuacutemeros-de-celular/1072857732/)

[Centro de Alinhamento Vertical no Bootstrap 4](https://www.ti-enxame.com/pt/html/centro-de-alinhamento-vertical-no-bootstrap-4/829974931/)



Content dated before 2011-04-08 (UTC) is licensed under [CC BY-SA 2.5](https://creativecommons.org/licenses/by-sa/2.5/). Content dated from 2011-04-08 up to but not including 2018-05-02 (UTC) is licensed under [CC BY-SA 3.0](https://creativecommons.org/licenses/by-sa/3.0/). Content dated on or after 2018-05-02 (UTC) is licensed under [CC BY-SA 4.0](https://creativecommons.org/licenses/by-sa/4.0/). | [Privacy](https://www.ti-enxame.com/privacy/)