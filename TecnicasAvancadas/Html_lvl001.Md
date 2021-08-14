4.1.HTML Nível 1



| ![img](https://www.dm.ufscar.br/~waldeck/curso/html/resumo.gif) | [![img](https://www.dm.ufscar.br/~waldeck/curso/html/anterior.gif)](https://www.dm.ufscar.br/~waldeck/curso/html/html/basico.html) | [![img](https://www.dm.ufscar.br/~waldeck/curso/html/indice.gif)](https://www.dm.ufscar.br/~waldeck/curso/html/default.html) | [![img](https://www.dm.ufscar.br/~waldeck/curso/html/proximo.gif)](https://www.dm.ufscar.br/~waldeck/curso/html/html/nivel2.html) |
| ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ |
|                                                              |                                                              |                                                              |                                                              |



Assuntos a ser abordado neste capítulo:

- [introdução](https://www.dm.ufscar.br/~waldeck/curso/html/html/nivel1.html#introdução)
- [cabeçalhos](https://www.dm.ufscar.br/~waldeck/curso/html/html/nivel1.html#cabeçalhos) de texto
- [parágrafos](https://www.dm.ufscar.br/~waldeck/curso/html/html/nivel1.html#parágrafos) de texto
- [listas enumeradas](https://www.dm.ufscar.br/~waldeck/curso/html/html/nivel1.html#olista) de ítens
- [listas não enumeradas de ítens](https://www.dm.ufscar.br/~waldeck/curso/html/html/nivel1.html#ulista)
- [listas de definições](https://www.dm.ufscar.br/~waldeck/curso/html/html/nivel1.html#dlista)
- [combinações de listas](https://www.dm.ufscar.br/~waldeck/curso/html/html/nivel1.html#comblista)
- [hiperligações (links)](https://www.dm.ufscar.br/~waldeck/curso/html/html/nivel1.html#hiperlinks)
- [âncoras](https://www.dm.ufscar.br/~waldeck/curso/html/html/nivel1.html#ancoras)
- [simplificação de URL local](https://www.dm.ufscar.br/~waldeck/curso/html/html/nivel1.html#URLlocal)
- [inserção de imagens](https://www.dm.ufscar.br/~waldeck/curso/html/html/nivel1.html#imagens)

[Introdução: Estrutura lógica de um documento hipertexto codificado em HTML](https://www.dm.ufscar.br/~waldeck/curso/html/html/nivel1.html#ind_introdução)

Entende-se por HTML de nível 1 ou HTML 1.0, a primeira implementação dessa linguagem. As diretivas desse nível são amplamente reconhecidos. De fato, todo programa navegador atualmente existente é obrigado a atender a essas diretivas. Em HTML, existe diretiva para iniciar e finalizar uma determinada especificação. <[diretiva]> inicia a especificação e </[diretiva]> finaliza a especificação. A diretiva </[diretiva]> é denominado de *diretiva de fechamento*. Em alguns casos em que o final da especificação seja óbvio ou quando a diretiva não trata de especificação do bloco, a diretiva de finalização </[diretiva]> pode ser omitido. Caso tenha dúvida, sempre coloque para não cometer erro. Caso tenha a diretiva desconhecida no documento (proveniente do documento codificado em HTML de nível superior, ou pelo erro de codificação), ele será simplesmente ignorado. A forma declarativa geral de um documento HTML é a seguinte:



```
<html>
  <head>
    [cabeçalho do documento]
  </head>
  <body>
    [corpo do documento]
  </body>
</html>
```



<html> e </html> indica o começo e o fim do documento hipertexto em HTML, <head> e </head> indica o começo e o fim do cabaçalho do documento HTML, e <body> e </body> especifica o começo e o fim do *corpo* do documento HTML.

Como podemos ver, o documento HTML consiste basicamente de duas seções: *cabeçalho* e *corpo*.

O cabeçalho do documento contém uma série de informações que, em geral são ignorados pelo navegador, mas são de suma importância para a organização dos documentos. Uma exceção dessa regra é a diretiva obrigatória

O título não é normalmente exibido no topo do documento, mas em um local à parte. Por exemplo, no cabaçalho da janela do navegador e nos registros do caderno de endereços.

**Observação:** os espaços em branco e as indentações exibidas até agora não tem significado para o navegador. As duas seguintes códigos (Exemplo 4.1) são interpretados indistintamente e logo tem a mesma [representação visual](https://www.dm.ufscar.br/~waldeck/curso/html/html/ex1/ex01.html):

código 1 (boa organização):

```
<html>
  <head>
    <title>Meu primeiro Hipertexto</title>
  </head>
  <body>
    Este é o meu primeiro documento hipertexto
escrito na linguagem HTML.
  </body>
</html>
```



código 2 (muito prolixa):

<html> <head> <title>Meu primeiro Hipertexto</title> </head> <body> Este é o meu primeiro documento hipertexto escrito na linguagem HTML. </body> </html>

É possível inserir informações que são propositalmente ignorados pelo navegador (comentários) em qualquer parte do código. Estas informações devem estar entre <!-- e >. Por exemplo:

<!-- Este é um comentário >

o corpo do documento consiste de seu conteúdo: textos, imagens, hiperligações, etc. Esta seção, usualmente compreende os seguintes ítens:

- [cabeçalhos (do texto)](https://www.dm.ufscar.br/~waldeck/curso/html/html/nivel1.html#cabeçalhos)
- [parágrafos de texto](https://www.dm.ufscar.br/~waldeck/curso/html/html/nivel1.html#parágrafos)
- [listas enumeradas de ítens](https://www.dm.ufscar.br/~waldeck/curso/html/html/nivel1.html#olista)
- [listas não enumeradas de ítens](https://www.dm.ufscar.br/~waldeck/curso/html/html/nivel1.html#ulista)
- [listas de definições](https://www.dm.ufscar.br/~waldeck/curso/html/html/nivel1.html#dlista)
- [hiperligações e âncoras](https://www.dm.ufscar.br/~waldeck/curso/html/html/nivel1.html#hiperlinks)
- [inserção de imagens](https://www.dm.ufscar.br/~waldeck/curso/html/html/nivel1.html#imagens)
- hiperimagens (imagens mapeadas)
- formulário de preenchimento eletrônico

[Cabeçalhos de texto](https://www.dm.ufscar.br/~waldeck/curso/html/html/nivel1.html#ind_cabeçalhos)A linguagem HTML de nível 1 permite seis diferentes níveis de estrututação lógica do texto disponíbilizando seis níveis de cabeçalhos. Estes são definidas pelas diretivas:

<h1> e </h1>
<h2> e </h2>
<h3> e </h3>
<h4> e </h4>
<h5> e </h5>
<h6> e </h6>

Estas diretivas especificam o tamanho da letra utilizada para exibir o texto, de 1 a 6, na ordem decrescente de tamanho. Cada vez que muda o tamanho da fonte (através desta diretiva de cabaçalho), é dado um novo parágrafo. Por exemplo:

<h1>Programação HTML</h1>
<h2>Conceitos Básicos</h2>
Esta seção tratará de ...

tem como efeito:



# Programação HTML

Conceitos BásicosEsta seção tratará de ...[parágrafos de texto](https://www.dm.ufscar.br/~waldeck/curso/html/html/nivel1.html#ind_parágrafos)

Como a HTML não faz distinção de espaços brancos, indentações ou quebras de linha presentes no codificação, torna-se necessário, o uso da diretiva <p> para promover a quebra e o espaçamento dos parágrafos do texto.

Por exemplo:
<p> Este é o primeiro parágrafo.</p> <p> Este é o segundo parágrafo.</p>

produz:

Este é o primeiro parágrafo

Este é o segundo parágrafo.

A diretiva de fechamento </p> não é realmente necessário, podendo ser omitida com segurança (normalmente, nós omitimos esta diretiva de fechamento). Com isso, podemos escrever apenas <p> no começo do parágrafo. Com isto, o exemplo acima torna:
<p> Este é o primeiro parágrafo. <p> Este é o segundo parágrafo.
que terá o mesmo efeito visual.

Sem a diretiva de parágrafo, não terá quebra de linha, mesmo que esteja com quebra na codificação. Por exemplo:
Este é o primeiro parágrafo
Este é o segundo parágrafo.
produz:

Este é o primeiro parágrafo Este é o segundo parágrafo.

Desejando apenas uma quebra de linha, use a diretiva <br>. Esta diretiva não possui diretiva de fechamento. Esta diretiva provoca apenas a quebra de linha, mas não inicia um novo parágrafo. Por exemplo:
<p> Esta é a primeira linha. <BR> Esta é a segunda linha.

produz:

Esta é a primeira linha.
Esta é a segunda linha.

### [listas enumeradas de ítens](https://www.dm.ufscar.br/~waldeck/curso/html/html/nivel1.html#ind_olista)

A HTML permite produzir três categorias distintas de listas: enumeradas, não enumeradas e de definição.

A lista enumerada é definido pela diretiva <ol> e </ol>. Cada ítem da lista é definido pela diretiva <li> e </li>, sendo que a diretiva de fechamento </li> poderá ser omitido. Além disso, um cabaçalho (título) da lista pode ser definido opcionalmente pelas diretivas <lh> e </lh>. Por exemplo, a declaração (completa)

```
<ol>
  <lh> índice</lh>
  <li> Conceitos Básicos
  <li> Apresentação da Teoria
  <li> Conclusão
</ol>
```

produz o resultado:

1. índiceConceitos BásicosApresentação da Teoria

2. Conclusão

   listas não enumeradas de ítens

   A lista não enumerada possui mesma estrutura de definição exceto do fato de usar a dirativa <ul> e </ul> em vez de <ol> e </ol>. Por exemplo, o código:

   ```
   <ul>
     <lh> ítens</lh>
     <li> Definição
     <li> Propriedades
     <li> Resultados
   </ul>
   ```

   

   produz

   ítensDefiniçãoPropriedadesResultados

   listas de definições

   Esta lista é utilizada para criar listas de definições de termos. A sua declaração é feita pela diretiva <dl> e </dl>. os ítens da lista de definição é especificada pelas diretivas diferêntes das diretivas de listas enumeradas e não enumeradas. Em vez da diretiva <li>, utiliza-se as diretivas <dt> para especificar os termos de definição e <dd> para especificar a definição do termo, sendo que as diretivas de fechamento </dt> e </dd> não são necessárias. O cabeçalho (título) é opcional, sendo necessário utilizar a diretiva <lh> quando desejar por o título da lista.

   ```
   <dl>
     <lh>definições</lh>
     <dt> Espaço vetorial
     <dd> É um conjunto V ...
     <dt> Transformação linear
     <dd> É uma função ...
   </dl>
   ```

   

   produz

   definiçõesEspaço vetorialÉ um conjunto V ...Transformação linearÉ uma função ...

   Note que todo texto especificado em <dd> (definição do termo) será tabulado um pouco a direita. Esta propriedade pode ser utilizado para escrever textos tabulados para direita. Por exemplo, o código

   <dl>
   <dd>Todo conteúdo deste texto será tabulado para direita. Desta forma, podemos produzir textos mais agradáveis de ser lido. Ao finalizar a lista de definição, o alinhamento da margem esquerda retornará à posição original.
   </dl>

   produz:


   

   combinações de listas

   Podemos combinar duas ou mais listas um dentro do outro. Por exemplo, o código

   ```
   <ol>
     <li> Introdução
       <ul>
         <li> Conceitos Básicos
         <li> Definições
       </ul>
     <li> Desenvolvimento
     <li> Conclusão
   </ol>
   ```

   

   produz

   IntroduçãoConcéitos BásicosDefiniçõesDesenvolvimento

   **Observação 1:** Quando inicia ou termina uma lista, normalmente cria um parágrafo novo.

   **Observação 2:** O título da lista colocada com a diretiva <lh> será levemente tabulado para direita (no caso da [lista de definições](https://www.dm.ufscar.br/~waldeck/curso/html/html/nivel1.html#dlista), não há tabulação) e o espaçamento entre título e termos da lista é de uma linha normal. Esta é a única diferênça com o título colocado fora da lista, sem usar <lh>.

   **Observação 3:** Se colocar uma diretiva <li> sem definir uma lista, provoca um novo parágrafo e colocará um "circulo" no começo do parágrafo. Por exemplo, o código

   <li> Este é um teste ...

   produz

3. Este é um teste ...

   hiperligações

   Uma hiperligação (link) refere-se sempre a uma [URL](https://www.dm.ufscar.br/~waldeck/curso/html/internet/basico.html#URL), acompanhado ou não de uma referência de âncora local. Há três tipos de hiperligações:


   

   Vejamos os casos (1) e (3).

   A diretiva empregada é da forma:

   onde <a indica a iniciação da diretiva de âncora, *href="[url]"* indica a criação de uma hiperligação para o *[url]* e a referência é o texto ou imagem a ser destacado e considerado como sendo ponto de ligaçòes. Oa clicar mouse sobre [referência], o navegador automaticamente carregará o documento [url]. Por exemplo, o código:

   Visite a <a href="http://www.dm.ufscar.br"> home page principal</a> do DM.

   produz

   Visite a [home page principal](http://www.dm.ufscar.br/) do DM.

   de modo que clicando sobre a frase "home page principal", ocasionará a chamada da URL "http://www.dm.ufscar.br".

   ### [âncoras](https://www.dm.ufscar.br/~waldeck/curso/html/html/nivel1.html#ind_âncoras)

   A diretiva

   estabelece a possibilidade de hiperligações dentro de um mesmo documento. A diretiva acima associa o nome "[nome]" no local de inserção e esta parte marcada é denominado de fragmento do documento. A parte [trecho] é opcional. A referência para um fragmento, dentro da diretiva de hiperligações é feito, colocando-se "#" antes do nome do fragmento, atribuido pela âncora. Veja o [URL](https://www.dm.ufscar.br/~waldeck/curso/html/internet/basico.html#URL). Por exemplo, o código:

   Veja o <a href="#cabeçalhos"> cabeçalhos</a> do texto

   produz

   Veja o [cabeçalhos](https://www.dm.ufscar.br/~waldeck/curso/html/html/nivel1.html#cabeçalhos) do texto

   que, ao clicar sobre "cabeçalho", saltará para parte da explicação do cabeçalho deste texto. Isto porque, na parte inicial da seção do cabeçalho, tem o código

   <A NAME="cabeçalhos"> <H3>Cabeçalhos de texto</H3></A>.

   Para criar hiperligações para o fragmento do outro documento, é necessário indicar URL correspondênte ao arquivo e o fragmento.

   Na diretiva de âncoras, enquanto define nome do trecho, podemos criar hiperligações. Este recurso é utilizado quando requer criação de hiperligações e ao mesmo tempo, serve como ponto de chegada de alguns hiperligações. Por exemplo, o código

   é equivalente a

   e criará hiperligação para o fragmento "frag2" enquanto define o nome para este ponto do documento como sendo "frag1".

   ### âncoras bidirecionais

   Uma âncora bidirecional é um par de âncoras na qual, um possui hiperligação para o outro. Esta montagem (não é nova diretiva, mas uma forma de usar) não é muito usado, mas pode ser usado em alguns casos, por exemplo, ligações entre índice e trecho do texto explicativo. Por exemplo, o codigo

   ```
   <ol>
     <li><a name="intro_o" hfer="#intro">
       Introdução</a>
     <li><a name="res_o" hfer="#res">
       Resultados</a>
   </ol>
   ...
   ...
   <a name="intro" hfer="#intro_o">
     <h2>Introdução</h2></a>
   ...
     <a name="res" hfer="#res_o">
       <h2>Resultados</h2></a>
   ...
   ```

   

   Apresentará

   1. [Introdução](https://www.dm.ufscar.br/~waldeck/curso/html/html/nivel1.html#intro)
   2. [Resultados](https://www.dm.ufscar.br/~waldeck/curso/html/html/nivel1.html#res)

   ...

   

   ## [Introdução](https://www.dm.ufscar.br/~waldeck/curso/html/html/nivel1.html#intro_o)

   
   ....
   [Resultados](https://www.dm.ufscar.br/~waldeck/curso/html/html/nivel1.html#res_o)
   ...

   Note que, ao clicar sobre links com fragmentos, o ponto de chegada será apresentada na primeira linha da janela (isto é, começará exibir o documento do ponto de chegada do link para baixo). Agora, teste os quatro links acima para entender melhor, o que significa os links bidirecionais.

   ### [simplificação de URL local](https://www.dm.ufscar.br/~waldeck/curso/html/html/nivel1.html#ind_URLlocal)

   quando os documentos referênciados estão fisicamente armazenados no mesmo local em que encontra o documento atual, pode-se simplificar a URL. A simplificação de URL começa pela omição de nome do host e podem simplificar os caminhos, seguindo a norma de UNIX. Alguma destas normas são:

   - "/dir1/dir2/.../arquivo": quando tiver "/" no começo da especificação do caminho, provoca o retorno ao

      

     home

      

     (diretório raiz) do host. Em seguida, deve ser indicado os caminhos corretos. Por exemplo:

     

     Ver o <a href="/profs/default.html"> quadro de docentes</a> do DM.
     apresenta
     Ver o [quadro de docentes](https://www.dm.ufscar.br/profs/default.html) do DM.
     e criará a hiperligação para arquivo default.html do diretório profs, do host em que emcontra o documento atual.

   - "subdir1/subdir2/.../arquivo": Quando não inicia com "/" e sim com um nome de um diretório ou arquivo, ele refere ao arquivo dentro do caminho em que ele encontra. Por exemplo,

     

     Veja o <a href="basico.html#resumo"> resumo</a> do html: conceitos básicos

     apresentará

     Veja o [resumo](https://www.dm.ufscar.br/~waldeck/curso/html/html/basico.html#resumo) do html: conceitos básicos

     e criará hiperligações para o fragmento "resumo" do arquivo basico.html que se encontra neste mesmo diretório. As vezes, utilizam "./" antes do caminho para forçar que se trara da continuação da especificação do caminho corrente (onde se encontra), mas isto não é necessário.

   - "../dir1/dir2/.../arquivo": quando tiver "../" na especificação do caminho, volta um diretório ( se tive "../../" volta dois diretório e assim por diante) antes de começar entrar no diretório especificado. Por exemplo, o código

     

     Veja o <a href="../internet/basico.html#URL"> URL</a>

     apresentará

     Veja o [URL](https://www.dm.ufscar.br/~waldeck/curso/html/internet/basico.html#URL)

     e criará uma ligação para o fragmento "URL" do arquivo basico.html que se encontra, voltando um diretório a partir do diretório corrente "/curso/HTML/html" e entrando no diretório "internet" (assim, o caminho agora é "/curso/HTML/internet").

   - "~username/...": quando tiver "~", o nome seguido de "~" será area de usuario. Isto é, "~username" faz com que entre no diretório do usuario "username" do

      

     host

      

     em que está referenciado. Por exemplo,

     

     Visite a página do <A HREF="http://www.dm.ufscar.br/~waldeck/web/"> Waldeck </A>

     apresentará

     Visite a página do [Waldeck](http://www.dm.ufscar.br/~waldeck/web/)

     criando um link para página WEB encontrado no diretório "web" da área de usuário "waldeck" do host "www.dm.ufscar.br" (Obs.: O URL acima não se encontra, uma vez que o servidor da Web do dm.ufscar.br não tem acesso à área do usuário "waldeck").

     O uso da área de usuário no URL evita que o URL seja modificado, cada vez que ocorre nudança de diretório do sistema para manutenção.

   Observações:

   - Observações

   - Quando o diretório referenciado no URL não contém o arquivo *default* da WEB, o navegador apresentará uma listagem do diretório referido. Isto pode ser utilizado para deixar disponível, os arquivos de um certo diretório. Por outro lado, os navegadores podem utilizar este recurso para carregar arquivos não autorizados. Por isso, todo diretório não autorizado dentro da área de acesso da Web deve conter um arquivo *default* da Web para evitar que o navegador acesse diretamente o diretório, a não ser que o servidor Web instalado já garanta a proteção do mesmo.
   - "..nomedir/": quando tiver "/" no final do URL, significa que o ultimo nome referenciado é um diretório e não, o nome do arquivo. Neste caso, o arquivo será tomado como sendo nome *default*. Quando o URL não terminar com "/" o ultimo nome será tomado como sendo nome do arquivo. Por exempo, "/profs/waldeck/web/" referencia o arquivo *default* do diretório "web"". No entanto, "/profs/waldeck/web" referencia o arquivo "web" dentro do diretório "waldeck". Na prática, os navegadores reconhecem, se o nome referenciado é um diretório ou um arquivo e por isso, não é necessário preocupar com o "/" do final de URL.
   - Numa referência importante de URL, sempre coloque a especificação do protocolo a ser utilizado. Isto evita que ocorra escolha indesejável de protocolo pelo navegador, por exemplo, transferir arquivo binário usando "http" e tentar exibir na tela.

   inserção de imagens

   A inserção de imagens é definido pela diretiva <img src="[url]"> que insere uma imagem gráfica na posição atual.

   

   | [![img](https://www.dm.ufscar.br/~waldeck/curso/html/principal.gif)](https://www.dm.ufscar.br/~waldeck/curso/html/html/nivel1.html#principal) | [![img](https://www.dm.ufscar.br/~waldeck/curso/html/anterior.gif)](https://www.dm.ufscar.br/~waldeck/curso/html/html/basico.html) | [![img](https://www.dm.ufscar.br/~waldeck/curso/html/indice.gif)](https://www.dm.ufscar.br/~waldeck/curso/html/default.html) | [![img](https://www.dm.ufscar.br/~waldeck/curso/html/proximo.gif)](https://www.dm.ufscar.br/~waldeck/curso/html/html/nivel2.html) |
   | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ |
   |                                                              |                                                              |                                                              |                                                              |

   