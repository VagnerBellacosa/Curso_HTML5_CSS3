# Curso de HTML

## 3ª Áula Prática - Recursos Avançados



| [![img](https://www.dm.ufscar.br/~waldeck/curso/html/anterior.gif)](https://www.dm.ufscar.br/~waldeck/curso/html/aulap/nivel2.html) | [![img](https://www.dm.ufscar.br/~waldeck/curso/html/indice.gif)](https://www.dm.ufscar.br/~waldeck/curso/html/default.html) | [![img](https://www.dm.ufscar.br/~waldeck/curso/html/proximo.gif)](https://www.dm.ufscar.br/~waldeck/curso/html/apend/tabcod.html) |
| ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ |
|                                                              |                                                              |                                                              |



Nesta áula iremos além dos limites impostos pelo nível 1 da linguagem HTML, o qual dispõe apenas de um número reduzido de diretivas. Utilizando os recursos do nível 2 e do nível 3, vamos poder elaborar páginas com qualidade profissional, através de um melhor controle sobre a formatação física e lógica do texto, e também de uma melhor utilização de cores e de fontes tipográficos.

## Recursos tipográficos

A utilização de cores e de fontes tipográficos pode enriquecer o documento por permitir um melhor destaque de partes relevantes do texto. Por exemplo, neste documento os cabeçalhos aparecem em cores. Assim, eles são melhor identificados e apreendidos pelo leitor, que pode estar ciente do tópico a ser abordado pelos parágrafos subseqüêntes.

A diretiva de formatação de cores e de fontes tipográficos é

<font color="*cor*" face="*nome*">... texto ...</font>

O esquema de codificação de uma cor é #999999. O jogo da velha # é um sinal obrigatório que indica o início de uma seqüência numérica. Nessa seqüência numérica, cada par de dígitos indica a intensidade de uma das cores básicas: Vermelho,Verde,Azul respectivamente, de onde provém a sigla **RGB**. Os dígitos codificados em hexadecimal, isto é, de 0 a 9 e de A a F. Dese modo, 00 indica ausência completa de uma cor básica, enquanto FF indica sua máxima intensidade. Eis alguns exemplos:

| Cor  | Nome    | Código  |
| ---- | ------- | ------- |
|      | Black   | #000000 |
|      | Marron  | #800000 |
|      | Green   | #008000 |
|      | Olive   | #808000 |
|      | Navy    | #000080 |
|      | Purple  | #800080 |
|      | Teal    | #008080 |
|      | Gray    | #808080 |
|      | Red     | #FF0000 |
|      |         | #FF8000 |
|      |         | #FF0080 |
|      |         | #FF8080 |
|      | Lime    | #00FF00 |
|      |         | #80FF00 |
|      |         | #00FF80 |
|      |         | #80FF80 |
|      | Blue    | #0000FF |
|      |         | #8000FF |
|      |         | #0080FF |
|      |         | #8080FF |
|      | Yellow  | #FFFF00 |
|      |         | #FFFF80 |
|      | Magenta | #FF00FF |
|      |         | #FF80FF |
|      | Cyan    | #00FFFF |
|      | Aqua    | #80FFFF |
|      | White   | #FFFFFF |

A razão para os nomes das cores aparecerem em inglês nesta tabela é que esses nomes podem ser utilizados no lugar do esquema numérico, produzindo o mesmo efeito. Por exemplo, <font color="blueviolet"> faz o texto aparecer assim, enquanto que <font color="#800000"> faz o texto aparecer assim.

Um outro parâmetro da diretiva é o FONT="*nome*", o qual controla a escolha do fonte tipográfico a ser empregado. O nome é na verdade uma lista de nomes alternativos de fontes separados por vírgulas. Na ausência do primeiro fonte, o segundo é empregado, e assim sucessivamente. Quando nenhum dos nomes de fonte estiver disponível, será empregado o fonte default. Por exemplo, esta frase foi tipografada com a diretiva <FONT FACE="Arial, Helvetica">. Um fonte tipográfico adotado universalmente na internet como default é o Times New Roman, muito comum na tipografia convencional. Porém, a maioria dos programas navegadores permite trocar o fonte padrão pelo fonte da preferência do usuário.

**Exercício:** Utilize cores de modo criativo para destacar os cabeçalhos e textos da homepage que temos construido até o momento.

## Mais recursos tipográficos

Existem ainda outras diretivas de formatação que não dizem respeito à uma forma específica com que a tipografia será executada, mas que garante que essa tipografia se dê de maneira distinta do restante do texto, isto é, essas diretivas realizam uma formatação lógica. Um sumário das diretivas de formatação lógica é apresentado na seguinte tabela:

| Citações    | <cite> ... </cite>   |
| ----------- | -------------------- |
| Amostras    | <samp> ... </samp>   |
| Definições  | <dfn> ... </dfn>     |
| Piscante    | <blink> ... </blink> |
| `Código`    | <code> ... </code>   |
| **Negrito** | <b> ... </b>         |
| *Itálico*   | <i> ... </i>         |
| Teclado     | <kbd> ... </kbd>     |
| Subscrito   | <sub> ... </sub>     |
| superscrito | <super> ... </super> |

**Exercício:** Que tal introduzir uma citação, ou mudar algum texto para negrito ou itálico em sua homepage, ou ainda digitar algum texto matemático como **R**n ou ***ax******2*** ***+ bx + c = 0***, por exemplo?

## Organizando informações em tabelas

As tabelas são recursos de aparição muito freqüente em tipografia. Logo, é altamente desejável poder organizar informações dessa forma utilizando os recursos da linguagem HTML. Uma tabela consiste de linhas e uma consiste de células. Estas, por sua vez, constituem as colunas da tabela. Para confeccionar uma tabela são necessárias diversas diretivas que se dispõe hierarquicamente. A diretiva de maior nível hierarquico é <table> ... </table>. Em seguida, definindo as linhas da tabela temos a diretiva <tr> ... </tr>. Em cada linha da tabela podemos usar as diretivas <td> ... </td> e <th> ... </th>. A primeira introduz as células ordinárias da tabela, enquanto que a segunda introduz células de cabeçalho de linha ou de coluna. Todas estas diretivas aceitam boa parte dos parâmetros aceitos pela diretiva de parágrafo, como align="*right*", por exemplo.

Para compreender melhor o relacionamento destas diretivas, vamos confeccionar a seguinte tabela:

| gnats     | gram    | $13.65 |
| --------- | ------- | ------ |
| each      | .01     |        |
| gnu       | stuffed | 92.50  |
| emur      | 33.33   |        |
| armadillo | frozen  | 8.99   |

O código que escreveríamos seria o seguinte:

```
<table border=1>
   <tr>
      <td rowspan=2>gnats</td>
      <td>gram</td><td align=right>$13.65</td>
   </tr>
   <tr>
      <td>each</td><td align=right>.01</td>
   </tr>
   <tr>
      <td>gnu</td>
      <td rowspan=2 valign=top>stuffed</td><td align=right>92.50</td>
   </tr>
   <tr>
      <td>emur</td><td align=right>33.33</td>
   </tr>
   <tr>
      <td>armadillo</td><td>frozen</td><td align=right>8.99</td>
   </tr>
   <caption align="bottom"><font size="2">Leslie Lamport, <i>Latex -
       A Document Preparation System</i>, pág 84</font></caption>
</table>
```



| [![img](https://www.dm.ufscar.br/~waldeck/curso/html/anterior.gif)](https://www.dm.ufscar.br/~waldeck/curso/html/aulap/nivel2.html) | [![img](https://www.dm.ufscar.br/~waldeck/curso/html/indice.gif)](https://www.dm.ufscar.br/~waldeck/curso/html/default.html) | [![img](https://www.dm.ufscar.br/~waldeck/curso/html/proximo.gif)](https://www.dm.ufscar.br/~waldeck/curso/html/apend/tabcod.html) |
| ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ |
|                                                              |                                                              |                                                              |