3.1.Internet: conceitos básicos

Para leitura rápida, veja o [resumo](https://www.dm.ufscar.br/~waldeck/curso/html/internet/basico.html#resumo)

### O que são documentos hipertexto?

*hiper:* préfixo que significa excesso ou aperfeiçoamento de uma dada qualidade.

*hipertexto (Cambridge):* uma maneira especializada de reunir palavras, figuras e sons em um computador.

Mais ainda, hipertextos contém ligações que indicam precisamente outros documentos.

### Entendendo um URL (Uniform Resource Locator):

O [URL](https://www.dm.ufscar.br/~waldeck/curso/html/internet/basico.html#URL) esfecifica a localização exata de documentos, objetos, ligações, referências e programas executáveis na vastidão da Internet. Em termos simples, qualquer coisa a que nós referimos na Internet tem um URL. Também são chamados endereços virtuais.

Um endereço IP (Internet Protocol) é o que especifica unicamente um computador (*host*) na rede, i. é., cada host deve ter um (ou mais) endereços (distintos, um do outro) IP.

Exemplos:

200.9.84.65 (Servidor principal da UFSCar)
200.136.239.100 (servidor principal do DM da UFSCar)
200.9.84.161 (servidor principal do DM do UFSCar tasmbém)

Os servidores com o endereço IP (o gerenciador da rede) é denominado de *Gateway*. Qualquer computador conectado na internet que possuem o endereço IP é denominado de *host*. Um *site* é a unidade do computador que contém dados e informações relacionados a um determinado assunto. Note que um host é capaz de conter informações sobre diversos asssuntos e para acessar o assunto de interesse, é necessário que especifique o [URL](https://www.dm.ufscar.br/~waldeck/curso/html/internet/basico.html#URL) referente ao site, normalmente composto de nome do host e caminho. No caso do servidor do DM da UFSCar que possui dois endereços distintos, pode ser pensado como uma casa que se dá em frente com duas ruas. Terá dois endereços para mesma casa. Note que o número de IP é uma quadrúpla de números entre 0 e 255.

Alguns problemas com essa convenção são:

1. Dificuldade de memorização.
2. Instabilidades: os números podem mudar rapidamente.
3. Facilidade de engano ao digitalizá-los.

Para contornar essas dificuldades, surgiram os *DNS (Domain Name Servers)* ou servidores de nomes. São dicionários que estabelecem a correspondência entre um [nome de host](https://www.dm.ufscar.br/~waldeck/curso/html/internet/basico.html#nomehost) e um endereço IP.

Exemplos:

power.ufscar.br = 200.9.84.65 (servidor principal do UFSCar)
lattice.dm.ufscar.br = 200.136.239.100 (servidor principal do DM de UFSCar)

Os DNS's organizam-se hierarquicamente, de modo que o "dicionário" não esteja todo em um único computador, mas distribuido pela rede. Por exemplo, *power.ufscar.br* serve nomes para o domínio *ufscar.br*, tais como *lattice.ufscar.br*. Por sua vez, o *lattice.ufscar.br* serve os sub-domínios do dm.ufscar.br.

Na hierarquia dos DNS's do Brasil *br*, temos que todo domínio "br" é servido pelo servidor *dinit.ansp.br* de FAPESP. Um dos sub-domínios de *dinit.ansp.br* é o *power.ufscar.br* que serve para os domínios *ufscar.br* e um dos sub-domínios dele, o *lattice.ufscar.br* serve os domínios *dm.ufscar.br* tais como *hypatia* (servidor de mail), *zorn* (servidor de hipertexto), *galois*, etc.

Observação: normalmente os servidores de mail e hipertexto recebem o sinômino (aperido) de "mail" e "www" respectivamente para facilitar a localização. Assim, o prefixo *mail* e *www* indicam, respectivamente os servidores de mail e hypertextos. Esta especificação não é apenas uma recomendação e não a obrigatoriedade. Assim, nem todo servidor de Web tem o prefixo www.

### Assim é o nome de um *host*



O Estados Unidos, quem criou o internet, adotou seguintes convenções para domínio maximal:

"." = máximo: origem de todos os domínios.
".com" = comerciais e industriais. Exemplo: www.amazon.com
".edu" = instituições educacionais. Exemplo: web.mit.edu
".gov" = governamental. Exemplos: www.nasa.gov, www.whitehouse.gov, etc.
".mil" = instituições militares
".org" = instituições sem fins lucrativos. Exemplo: www.linux.org
".net" = provedor de acesso. Exemplos: ibm.net, algarnet.net, etc.

Para outros países, são aplicados o código ISO (International Standards Organization) designando o país. Por exemplo:

".br" = Brasil
".fr" = França
".pt" = Portugal
".ne" = países baixos
...

Alguns host's de Estados Unidos usam o ".us", mas ainda isto não é regra geral. Nem todas países adotam a convenção de domínios adotados pelos Estados Unidos (".com", ".edu", etc). Neste caso, esta especificação deveria estar logo antes da especificação do país, tais como ".com.br", ".edu.fr", etc. Por exemplo, o "ufscar.br" deveria ter escrito como "ufscar.edu.br".

### Voltando a URL

A URL é composta de várias partes, cada uma interessando a algum programa específico ao longo do caminho que permite chegar até um documento ou objeto. A especificação completa de um URL é:



Nem todas as partes são necessárias ou obrigatórias. A pontuação (":", "//", "/", ";", "?", "#") devem seguir literalmente sua parte (se presente). As partes da URL são:

- [protocolo](https://www.dm.ufscar.br/~waldeck/curso/html/internet/basico.html#protocolo) - designa o protocolo de acesso ao objeto. São: http (acesso a hipertexto), ftp (acesso a transferência de arquivos), mailto (envio de e-mail's), telnet (acesso remoto), news, etc.
- host - um nome identificando um computador na internet (ou seu número de endereço IP)
- porta - número de porta TCP associado ao protocolo (quase nunca aparece devido a uma padronização. Por exemplo, convenciona-se que http é dado pela porta 80)
- caminho - caminho de busca e nome de arquivo que permite identificar o objeto dentro do computador.
- parâmetros - qualquer informação que o objeto necessite para tornar-se disponível.
- requisição - parâmetros requisitados por programas CGI ou certas páginas HTML avançados.
- fragmento - uma referência para um subconjunto de um objeto (pode ser uma seção ou subseção de um documento.

Um exemplo de URL: http://www.dm.ufscar.br/default.htmll

- Mais sobre Protocolos

- http - é o protocolo principal da

   

  web

   

  utilizado para comunicação entre os programas servidores de hipertexto e os programas navegadores (ou clientes de hipertexto). Quando for omitido o protocolo, os navegadores assumem que é http. Todas as partes do URL (exceto parâmetros) são usados pelo protocolo http.

  A parte "protocolo://host" pode ser omitido quando o objeto estiver no mesmo computador em que está o documento referido.

- ftp - protocolo comumente usado para transferência de arquivos (upload=subir, download=abaixar). Por exemplo, "ftp://sunsite.une.edu/pub/Linux/kernel/current" abaixa (copiar do host para computador local) o arquivo "current" contido no diretório "/pub/Linux/kernel" do host "sunsite.une.edu" para o computador local.

  Raramente utiliza a parte de parâmetros, mas não se utiliza a parte de requisição e fragmentos para protocolo ftp. A parte host também pode conter um usuário e senha. Por exemplo: "ftp://waldeck:senha@ftp.dm.ufscar.br/.profile;ascii". Muitos servidores admitem o usuário *anonimous* e ftp cuja senha é o endereço e-mail. Assim, normalmente omitem-se esta parte e o navegador assumem implicitamente estes valores (default).

- mailto - É utiliza para enviar mensagens eletrônicos. Por exemplo, "mailto:waldeck@dm.ufscar.br" envia mensagem para o usuário "waldeck" do host "dm.ufscar.br". Não requer "//". Este URL não se refere a um documento, mas a uma ação: enviar uma mensagem.

### Como encontrar a informação desejada?

Normalmente, não conhecemos de antemão, uma lista particular de URL que nos traga um documento específico, sabendo apenas algumas palavras que designam o assunto desejado. Para esse fim, utilizamos os serviços de busca. Estes apresentam-nos formulários que devidamente preenchidos e submetidos, permitem ao serviço de busca fazer indicações.

Alguns hosts com serviços de busca existentes no exterior são listados em [link para busca](https://www.dm.ufscar.br/~waldeck/curso/html/apend/links.html#busca).



| [![img](https://www.dm.ufscar.br/~waldeck/curso/html/anterior.gif)](https://www.dm.ufscar.br/~waldeck/curso/html/introd/introd.html) | [![img](https://www.dm.ufscar.br/~waldeck/curso/html/indice.gif)](https://www.dm.ufscar.br/~waldeck/curso/html/default.html) | [![img](https://www.dm.ufscar.br/~waldeck/curso/html/proximo.gif)](https://www.dm.ufscar.br/~waldeck/curso/html/internet/navegar.html) |
| ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ |
|                                                              |                                                              |                                                              |



------

Resumo

### Endereçamento em Internet

*hipertexto* reune palavras, figuras e sons em um computador, contendo também, as ligações que indicam outros documentos.

O URL (Uniform Resource Locator) especifica a localização dos documentos, objetos, ligações, referências e programas executáveis na rede Internet.

Um endereço IP (Internet Protocol) especifica unicamente um computador (*host*) na rede. Ele é formado por uma quádrupla de números entre 0 e 225, por exemplo: 200.9.84.65.

Os *DNS (Domain Name Servers)* ou servidores de nomes dispõe de dicionários que estabelecem a correspondência entre um nome de host e um endereço IP, tais como: power.ufscar.br = 200.9.84.65 que se organizam hierarquicamente, de modo que o "dicionário" esteja distribuido pela rede.

O *site* é a unidade do host, que contém dados e informações referente a um determinado assunto. Ele é especificado por um URL.

### Nome de host



Algumas convenções para domínio maximal são: "." (máximo: origem de todos os domínios), ".com" (comerciais e industriais), ".edu" (instituições educacionais), ".gov" (governamental), ".mil" (instituições militares), ".org" (instituições sem fins lucrativos), ".net" (provedor de acesso).

Para países, exceto Estados Unidos, são aplicados o código ISO (International Standards Organization) designando o país. tais como ".br" (Brasil), ".fr" (França), ".pt" (Portugal), ".ne" (países baixos), etc. Alguns host's de Estados Unidos adotam o ".us", mas não é regra geral.

### Voltando a URL



Nem todas as partes são necessárias ou obrigatórias. A pontuação (":", "//", "/", ";", "?", "#") devem seguir literalmente sua parte (se presente). As partes da URL são:

- protocolo - designa o protocolo de acesso ao objeto. São:
  - http - é o protocolo principal da *web* utilizado para serviços de documentos hipertexto.
  - ftp - protocolo usado para transferência de arquivos.
  - mailto - É utiliza para enviar mensagens eletrônicos.
- host - um nome identificando um computador na internet (ou seu número de endereço IP)
- porta - número de porta TCP associado ao protocolo.
- caminho - caminho de busca e nome de arquivo que permite identificar o objeto dentro do computador.
- parâmetros - qualquer informação que o objeto necessário para tornar-se disponível.
- requisição - parâmetros requisitados por programas CGI ou certas páginas HTML avançados.
- fragmento - uma referência para um subconjunto de um objeto (pode ser uma seçao ou subseção de um documento.

Para encontrar documentos através de uma palavra chave, utilizamos os serviços de busca. Alguns destes hosts são listados em [link para busca](https://www.dm.ufscar.br/~waldeck/curso/html/apend/links.html#busca).



| [![img](https://www.dm.ufscar.br/~waldeck/curso/html/principal.gif)](https://www.dm.ufscar.br/~waldeck/curso/html/internet/basico.html#principal) | [![img](https://www.dm.ufscar.br/~waldeck/curso/html/anterior.gif)](https://www.dm.ufscar.br/~waldeck/curso/html/introd/introd.html) | [![img](https://www.dm.ufscar.br/~waldeck/curso/html/indice.gif)](https://www.dm.ufscar.br/~waldeck/curso/html/default.html) | [![img](https://www.dm.ufscar.br/~waldeck/curso/html/proximo.gif)](https://www.dm.ufscar.br/~waldeck/curso/html/internet/navegar.html) |
| ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ |
|                                                              |                                                              |                                                              |                                                              |