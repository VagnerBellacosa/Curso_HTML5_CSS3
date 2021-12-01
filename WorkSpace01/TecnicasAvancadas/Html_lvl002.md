4.2.HTML Níveis 2 e 3



| [![img](https://www.dm.ufscar.br/~waldeck/curso/html/resumo.gif)](https://www.dm.ufscar.br/~waldeck/curso/html/html/nivel2.html#resumo) | [![img](https://www.dm.ufscar.br/~waldeck/curso/html/anterior.gif)](https://www.dm.ufscar.br/~waldeck/curso/html/html/nivel1.html) | [![img](https://www.dm.ufscar.br/~waldeck/curso/html/indice.gif)](https://www.dm.ufscar.br/~waldeck/curso/html/default.html) | [![img](https://www.dm.ufscar.br/~waldeck/curso/html/proximo.gif)](https://www.dm.ufscar.br/~waldeck/curso/html/aulap/aulap2.html) |
| ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ |
|                                                              |                                                              |                                                              |                                                              |





### sobre imagens

Dois formatos de imagens são adotados universalmente pelo www:

**a) Graphics Interchange Format (GIF)**

Desenvolvido pelo *Compuserve*, emprega uma técnica de compressão eficiente similar a do PKZIP (compactador de dados, desenvolvido pelo PKWare Inc.). armazena imagens até 256 cores, com um ou mais quadros, permitindo animações sem código adicional. Os arquivos deste formato é especificado pela extensão GIF.

**Joint Photographic Experts Group (JPG ou JPEG)**

Utiliza um esquema de compressão altamente eficiente baseado na FFT (Fast Fourier Transform). Neste ponto é superior ao GIF. Armazena imagens estáticas com até 16 milhões de cores.

## diretivas do nível 2

Nesta seção, vamos abordar recursos mais avançados da linguagem HTML. Vamos discutir também um pouco sobre as limitações e alcance da HTML, bem como apresentaremos alguns aspéctos mais técnicos.

### mais diretivas para seção de cabeçalho

Já vimos que essa seção admite as diretivas <title> e <meta>, porém há outras. Vejamos alguns.

\1. Estabelecendo referências relativas

<base href="http://www.dm.ufscar.br/">

define "http://www.dm.ufscar.br/" como a base de todas as outras referências contidas no documento. Sem essa diretiva, a base será obtida do URL da página atual. Esta diretiva pode ser usado somente uma por documento.

2.Documento indexado

a diretiva <isindex>
declara o documento atual como um índice, permitindo que seja pesquisado. a pesquisa se dá do seguinte modo: http://www.dm.ufscar.br/default.html?cursos

procura todas as ocorrencias da palavra cursos na página indicada pela URL acima.

A busca pode ser feita num endereço diferente do atual:

<isindex href="...">

Observe que não há diretiva de fechamento para isindex.

### Formatação lógica vs formatação fisica

A melhor maneira de introduzir a diferença entre essas formatações é através de um exemplo.

A diretiva <h1> apresenta um cabeçalho de nível 1, mas não diz se esse cabaçalho deve ser tipografado com fonte "Avant Grande" de 18 pontos em nagrito, i.é. <h1:gt; faz parte da formatação lógica. As demais característiocas citadas fazem parte da formatação física.

Vantagens: Cada usuário pode escolher uma particular maneira de visualizar as páginas, que lhe seja agradável.

Há diretivas permitindo fazer ambas as formatações.

formatação física:

<b> - texto em negrito
<i> - texto em itálico
<tt> - texto em fonte monoespaçada
<u> - texto sublinhado

formatação lógica:

<cite> - citações
<code> - texto pre-formatado monoespaçado
<dfn> - destacar uma definição
<em> - texto enfatizado
<sample> - destaca mensagem do computador
<strong> - enfatizado e negrito
<var> - declara nomes de variáveis
<address> - endereços eletrônicos
<pre> - textos preformatados
<blockquote>

Observação: Tocas as diretivas apresentadas acima necessitam de diretivas de fechamento.

### Alinhamento de textos

<P align="what"> define o alinhamento do texto. O variável Align pode ser setado também, na diretiva de cabeçalho. what pode ser left, center ou right.

## diretivas do nível 3

A diretiva <body> permite definir vários parâmetros que configura a página: background - URL para uma imagem que define o papel de parede para documento lang - codificação esp'cífica para linguagem que pode ser por.br, en.us, en.uk, etc. bgcolor - cor de fundo do documento

text - cor do texto
link -
vlink -
alink -

Exemplo de cores

A cor pode ser referenciado pelo nome blue, red, etc ou pelo código RGB em Hexadecimal. Exemplo de cores em código hexadecimal:

\#999999 Primeiro dois digitos determina o valor de Red (vermelho), dois digitos do meio determina valor de Green (verde) e dois últimos digitos determina os valores de Blue (azul). a cor representada é a soma (mistura) das cores. Para saber os valores a ser colocado para RGB para obter uma determinada cor, exige o conhecimento de ciclo de cores, estudados pelos artistas e na computação gráfica.

\#000000 = preto
\#dddddd = cinza claro
\#ffff00 = amarelo canário
\#0077ff = ton da pele
\#ff9999 = azul royal
\#ffffff = branco

### fixando um texto na página

<banner> fixa a parte do documento no começo da página. Esta diretiva deve ser colocado logo abaixo da diretiva <body> para ter efeito (deve ser a primeira diretiva, após a <body>). Exemplo:

<banner>  <h1> <font color="#aa0000" face="Arial,Helvetica"'> cursos oferecidos pelo DM</font></h1> </banner> <ul>  <li>... </UL>

###  Cabaçalhos alinhados 

O cabeçalho pode ser alinhados como um parâgrafo, tais como 
 <h1 align="what"> 
 onde what pode ser left, center e right. Forçando quebras de linha  
 Mais formatações fisicas:

 <s> - texto riscado 
        <big> texto maior 
        <smal> texto menor 
       <sub> subscritos 
       <sup> puperscritos 
   

###  Criando tablelas

Uma tabela é definido pela diretiva <TABLE>. Logo <TABLE> e </TALBE> define o começo e o fim de uma tabela. As diretivas relativas à tabela são:

 <CAPITION> define cabeçalho ou rodapé.
 <TR> define uma linha da tabela
 <TH> define o cabeçalho de uma coluna
 <TD> define o texto de uma célula (um elemento da tablea).

 Exemplo:



```
<table>
       <caption> Propriedade Econômica Ativa</caption>
    <tr>
        <th rowspan=2> </th>
        <th colspan=2> Ano</th>
        <th rowspan=2> Variação %</th>
     </tr>
     < tr>
          <th> 1990</th>
          <th> 1996</th>
     </tr>
     <th align="left"> Homens</th>
          <td> 50%</td>
          <td> 49%</td>
          <td> (2%)</td>
  </tr>
  <tr>
    <th align="left"> Mulheres</th>
    <td> 49%</td>
    <td> 51%</td>
    <td> +2%</td>
  </tr>
</table>
```

exibirá a tablea



|          | Ano  | Variação % |      |
| -------- | ---- | ---------- | ---- |
| 1990     | 1996 |            |      |
| Homens   | 50%  | 49%        | (2%) |
| Mulheres | 49%  | 51%        | +2%  |



​    

| [![img](https://www.dm.ufscar.br/~waldeck/curso/html/principal.gif)](https://www.dm.ufscar.br/~waldeck/curso/html/html/nivel2.html#principal) | [![img](https://www.dm.ufscar.br/~waldeck/curso/html/anterior.gif)](https://www.dm.ufscar.br/~waldeck/curso/html/html/nivel1.html) | [![img](https://www.dm.ufscar.br/~waldeck/curso/html/indice.gif)](https://www.dm.ufscar.br/~waldeck/curso/html/default.html) | [![img](https://www.dm.ufscar.br/~waldeck/curso/html/proximo.gif)](https://www.dm.ufscar.br/~waldeck/curso/html/aulap/aulap2.html) |
| ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ |
|                                                              |                                                              |                                                              |                                                              |