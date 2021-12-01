# Curso de HTML

## 2ª Áula Prática - Refinando a Homepage



| [![img](https://www.dm.ufscar.br/~waldeck/curso/html/anterior.gif)](https://www.dm.ufscar.br/~waldeck/curso/html/aulap/nivel2.html) | [![img](https://www.dm.ufscar.br/~waldeck/curso/html/indice.gif)](https://www.dm.ufscar.br/~waldeck/curso/html/default.html) | [![img](https://www.dm.ufscar.br/~waldeck/curso/html/proximo.gif)](https://www.dm.ufscar.br/~waldeck/curso/html/aulap/aulap3.html) |
| ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ |
|                                                              |                                                              |                                                              |



Até o momento, utilizamos apenas as diretivas <html>, <head>, <title>, <meta>, <body>, <h*>, <p> para criar uma primeira homepage, contendo apenas alguns parágrafos de texto com cabeçalho. Porém, freqüentemente vamos desejar produzir documentos que tenham uma apresentação mais rica e também vamos desejar que esses documentos contenham interligações na forma de *hyperlinks* (ou apenas *links*, por simplicidade).

Antes de prosseguirmos com a modificação da nossa página, vamos estudar ainda outras diretivas HTML que são muito úteis para uma melhor apresentação do conteúdo.

### Um pouco mais de teoria - Listas

Existem três categorias distintas de listas que podem ser criadas com HTML: listas enumeradas, listas não-ordenadas e listas de definições.

As listas enumeradas apresentam cada parágrafo iniciando com um numeral. Por exemplo, o seguinte código HTML

```
<h4>Instruções para fazer pipoca em microondas</h4>
<ol>
   <li>Adquira o milho de pipoca apropriado
   <li>Retire-o da embalagem
   <li>Introduza-o no forno
   <li>Ajuste para a potência máxima por 5 minutos
       e aprete o botão <i>iniciar</i>
   <li>Aguarde até que todo milho tenha sido tornado
       em pipoca
</ol>
```

deverá produzir o seguinte resultado:

#### Instruções para fazer pipoca em microondas

1. Adquira o milho de pipoca apropriado
2. Retire-o da embalagem
3. Introduza-o no forno
4. Ajuste para a potência máxima por 5 minutos e aprete o botão *iniciar*
5. Aguarde até que todo milho tenha sido tornado em pipoca

Porém, nem sempre desejamos que as listas sejam enumeradas. Por exemplo, quando desejamos exprimir idéias relacionadas que não ocorram necessáriamente em seqüência. Vejamos o seguinte código HTML:

```
Há três coisas que um homem deve fazer na vida para se 
sentir realizado:
<ul>
   <li>Plantar uma árvore
   <li>Escrever um livro
   <li>Ter filhos
<ul>
```

Este irá resultar em:

Há três coisas que um homem deve fazer na vida para se sentir realizado:

- Plantar uma árvore
- Escrever um livro
- Ter filhos

Neste exemplo, vemos que a lista não apresenta uma enumeração. Em seu lugar, ocorre um símbolo gráfico, uma bolinha neste caso. Há ainda uma terceira classe de listas que não apresenta nem enumeração, nem um símbolo gráfico no início dos parágrafos, mas realiza um espaçamento diferenciado: são as listas de definição. Por exemplo, examinemos o seguinte trecho de código HTML:

```
<dl>
   <dt><b>skill</b>
   <dd>s. habilidade, prática, destreza f.; experiência,
          perícia f.
   <dt><b>skip</b>
   <dd>s. pulo, salto m. | v. pular, saltar; omitir; 
          passar por cima de.
</dl>
```

A apresentação desse código será a seguinte:

- **skill**

  s. habilidade, prática, destreza f.; experiência, perícia f.

- **skip**

  s. pulo, salto m. | v. pular, saltar; omitir; passar por cima de.

Podemos ainda combinar as duas primeiras classes de listas obtendo listas aninhadas. Por exemplo, vejamos o seguinte código HTML

```
<ol>
   <li>Páginas HTML com classe e charme
   <ul>
      <li>Estruturando um site web
      <li>O layout da página
      <li>Diagramando imagens
   </ul>
   <li>Indagações freqüêntes
   <ul>
      <li>O que você aprenderá neste capítulo?
      <li>Qual é a filosofia que norteia a HTML
   </ul>
</ol>
```

o qual se destina a produzir o seguinte índice:

1. Páginas HTML com classe e charme
   - Estruturando um site web
   - O layout da página
   - Diagramando imagens
2. Indagações freqüêntes
   - O que você aprenderá neste capítulo?
   - Qual é a filosofia que norteia a HTML

### Ainda um pouco de teoria - Links

A diretiva básica para estabelecer ligações entre documentos hipertexto na internet em linguagem HTML é a *diretiva de âncora*:

```
    <a href="..."> ...texto... </a>
```

Dentre as diretivas que temos visto até agora, esta é a primeira que possui parâmetros, href, neste caso. Esse parâmetro serve para informar ao navegador a URL referente a um outro documento HTML. O texto que aparece encerrado dentro da âncora aparecerá em destaque na janela de visualização de documento. Por exemplo:

```
     <p>Aperte <a href="http://www.nasa.gov>aqui</a>
        para visitar a NASA.
```

será exibido como:

Aperte [aqui](http://www.nasa.gov/) para visitar a NASA.

Observe que ao passar o apontador do mouse sobre a palavra "aqui", a qual aparece em destaque, a figura do apontador torna-se de uma seta em uma mão, ao mesmo tempo em que a linha de mensagens exibe a URL "http://www.nasa.gov", indicando a presença de um link. Desse modo, ao clicar sobre essa palavra a referida URL será solicitada pelo navegador.

### Agora, de volta à Prática

Assim, vamos iniciar a prática acrescentando links à nossa página. Para isso, vamos adicionar o seguinte código no final:

```
<ul>
   <li>Voltar à <a href="/">página principal do DM</a>.
   <li>Ir à <a href="http://www.ufscar.br">página
       principal da UFSCar</a>.
</ul>
```

Este devera produzir como resultado o que segue:

- Voltar à [página principal do DM](https://www.dm.ufscar.br/).
- Ir à [página principal da UFSCar](http://www.ufscar.br/).

Vamos melhorar ainda mais este fragmento, acrescentando a ele algumas imagens gráficas. Imagens gráficas são inseridas em uma página HTML através da diretiva:

```
     <img src="..." ...>
```

O parâmetro "src" indica a URL identificando a imagem que se deseja inserir. Por exemplo, vamos modificar o código acima da seguinte maneira (as partes acrescentadas estão em negrito):

```
<img src="setaesq.gif" align="middle">Voltar à <a href="/">página principal do DM</a>.
<img src="setacima.gif" align="middle">Ir à <a href="http://www.ufscar.br">página
principal da UFSCar</a>.
```

Desse modo devemos ter:

![img](https://www.dm.ufscar.br/~waldeck/curso/html/aulap/setaesq.gif) Voltar à [página principal do DM](https://www.dm.ufscar.br/).

![img](https://www.dm.ufscar.br/~waldeck/curso/html/aulap/setacima.gif) Ir à [página principal da UFSCar](http://www.ufscar.br/).

O parâmetro "align" serve para definir como a imagem será posicionada em relação à linha de texto. Os valores possíveis são: top, middle, bottom, left, right, texttop, absmiddle, baseline, absbottom.

Outra propriedade interessante que as imagens inseridas apresentam é que elas podem estar presentes dentro de um link. Dessa maneira, a imagem passa a se comportar como um link, i.é, clicar sobre ela tem o efeito de requerer do navegador a busca da URL associada. Por exemplo:

```
<a href="/"><img src="setaesq.gif" align="middle"></a>
Voltar à <a href="/">página principal do DM</a>.

<a href="http://www.ufscar.br"><img src="setacima.gif" align="middle"></a>
Ir à <a href="http://www.ufscar.br">página
principal da UFSCar</a>.
```

O efeito visual abaixo parece o mesmo se comparado ao que está logo acima. Porém, experimente passar o apontador do mouse sobre as imagens e clique sobre elas:

[![img](https://www.dm.ufscar.br/~waldeck/curso/html/aulap/setaesq.gif)](https://www.dm.ufscar.br/) Voltar à [página principal do DM](https://www.dm.ufscar.br/).

[![img](https://www.dm.ufscar.br/~waldeck/curso/html/aulap/setacima.gif)](http://www.ufscar.br/) Ir à [página principal da UFSCar](http://www.ufscar.br/).

### Nem tudo são flores

Durante a composição que fizemos da página HTML pudemos notar que atribuimos a alguns caracteres um significado especial. Por exemplo, o sinal "<" indica o início de uma diretiva HTML, enquanto que o sinal ">" indica o seu término. Há ainda vários outros símbolos gráficos que têm significado especial, e portanto são reservados para a HTML. No entanto, o que devemos fazer se necessitarmos apresentar esses sinais literalmente em uma página HTML? Nesse caso, devemos utilizar uma seqüência de escape, que nos permite definir esses símbolos utilizando recursos da linguagem. Há uma [tabela](https://www.dm.ufscar.br/~waldeck/curso/html/apend/tabcod.html) completa com esses símbolos, e que pode ser consultada como referência.



| [![img](https://www.dm.ufscar.br/~waldeck/curso/html/anterior.gif)](https://www.dm.ufscar.br/~waldeck/curso/html/aulap/nivel2.html) | [![img](https://www.dm.ufscar.br/~waldeck/curso/html/indice.gif)](https://www.dm.ufscar.br/~waldeck/curso/html/default.html) | [![img](https://www.dm.ufscar.br/~waldeck/curso/html/proximo.gif)](https://www.dm.ufscar.br/~waldeck/curso/html/aulap/aulap3.html) |
| ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ |
|                                                              |                                                              |                                                              |