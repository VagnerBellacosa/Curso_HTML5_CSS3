4.1.HTML: Conceitos BásicosPara leitura rápida, veja o [resumo](https://www.dm.ufscar.br/~waldeck/curso/html/html/basico.html#resumo)

HTML significa *Hypertext Markup Language* ou *Linguagem de Hipertexto por Anotações*, e é uma implementação simultânea da norma ISO 8879:1986 SGML (Standard Generalized Markup language) e da norma ISO 10744:1992 HyTime (Hypermedia/Time-based Document Structuring Language.

Embora não tenha sido concebida para ser aplicada a hipertextos, a SGML define um padrão segundo o qual documentos tradicionais podem ser transformados em hyper-objetos.

Já o HyTime é um padrão que define formas de representação e estruturação de hipermídia, como também qualquer informação temporal.

Para fixar:

- SGML e HyTime são padrões, normas
- HTML é uma particular realização dessas normas

HTML não é uma linguagem de programação, mas tem em comum com estas a presença de diretivas, isto é trechos especiais de texto, geralmente destacados por algum caracter delimitador. São tais diretivas que controlam ou alteram a maneira em que as diversas partes de um documento são apresentadas tipograficamente. Assim, as diretivas não são normalmente tipografadas literalmente, mas o efeito destas é que pode ser observado.

Todas as diretivas HTML são delimitados pelos caracteres *menor* < e *maior* >. Por exemplo:

<TITLE>, <HEAD>, <P>, <BR>, etc.

A diretiva do HTML não é sensível ao tipo de caixa, isto é, tanto pode ser escrita tanto em maiúsculas como em minúsculas, ou em qualquer combinação de ambas. Por exemplo:

<Title>, <HeAd>, <P>, <br>, etc.
são diretivas interpretadas da mesma maneira que as listadas acima.

Numa diretiva, não deve haver espaço em branco nem quebra de linha entre o sinal de menor < e o nome da diretiva. Por exemplo, as seguintes codificações não são permititas:

< TITLE>,
<    HEAD>,
<
P>

Uma diretiva não é visualizada literalmente, mas é identificada e adequadamente interpretada pelo programa navegador a fim de produzir algum efeito visual ou de estrutura lógicamente o documento hipertexto. Qualquer outra informação que não seja um diretiva, deve ser um texto, consistindo do conteúdo do documento.

Exemplo:
<P> Este parágrafo ...

Um fato importante sobre HTML é que ao contrário do que acontece com editores de texto convencionais, o programador não tem controle sobre o efeito final do documento. Este pode variar, de acordo com as condições estabelecidas pelo usuário final no programa navegador. Por exemplo:

- dimensões da área de visualização.
- escolha dos fontes tipográficos
- nível de HTML suportado
- versão e marca do programa navegador
- limitações de dispositivos (hardware e software)

A preocupação principal dos desenvolvedores do HTML era a de permitir transportar a estrutura lógica e o conteúdo de documentos através de diferêntes *plataformas* (conjunto consistindo de computador, sistema operacional e programa de suporte utilizado) de computadores. A vantagem desta escolha é formar os documentos aceitáveis ao máximo número de indivíduos quanto possível.



| [![img](https://www.dm.ufscar.br/~waldeck/curso/html/anterior.gif)](https://www.dm.ufscar.br/~waldeck/curso/html/internet/navegar.html) | [![img](https://www.dm.ufscar.br/~waldeck/curso/html/indice.gif)](https://www.dm.ufscar.br/~waldeck/curso/html/default.html) | [![img](https://www.dm.ufscar.br/~waldeck/curso/html/proximo.gif)](https://www.dm.ufscar.br/~waldeck/curso/html/html/nivel1.html) |
| ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ |
|                                                              |                                                              |                                                              |



------

Resumo

O HTML (*Hypertext Markup Language* ou *Linguagem de Hipertexto por Anotações*) é uma implementação das normas ISO 8879:1986 SGML (Standard Generalized Markup language) e ISO 10744:1992 HyTime (Hypermedia/Time-based Document Structuring Language).

Todas as diretivas HTML (que não são sensíveis ao tipo de caixa, isto é, maiusculas e minúsculas são idênticas) são delimitados pelos caracteres *menor* < e *maior* > e, é interpretada pelo programa navegador a fim de produzir algum efeito visual ou de estrutura lógica do documento hipertexto. Qualquer outra informação que não seja um diretiva, deve ser um texto. Alguns exemplos de diretivas são: <TITLE>, <HEAD>, <P>, etc.

O programador de HTML não tem controle sobre o efeito final do documento. Este pode variar, de acordo com as configurações do navegador, tais como:

- dimensões da área de visualização.
- escolha dos fontes tipográficos
- nível de HTML suportado
- versão e marca do programa navegador
- limitações de dispositivos (hardware e software)

A preocupação principal dos desenvolvedores do HTML era transportar a estrutura lógica e o conteúdo de documentos através de diferêntes *plataformas* de computadores. Desta forma, os documentos torna aceitáveis ao máximo número de indivíduos quanto possível.



| [![img](https://www.dm.ufscar.br/~waldeck/curso/html/principal.gif)](https://www.dm.ufscar.br/~waldeck/curso/html/html/basico.html#principal) | [![img](https://www.dm.ufscar.br/~waldeck/curso/html/anterior.gif)](https://www.dm.ufscar.br/~waldeck/curso/html/internet/navegar.html) | [![img](https://www.dm.ufscar.br/~waldeck/curso/html/indice.gif)](https://www.dm.ufscar.br/~waldeck/curso/html/default.html) | [![img](https://www.dm.ufscar.br/~waldeck/curso/html/proximo.gif)](https://www.dm.ufscar.br/~waldeck/curso/html/html/nivel1.html) |
| ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ |
|                                                              |                                                              |                                                              |                                                              |