# Flexbox: o que é e como usá-lo para ter aplicações mobile responsivas

Neste artigo você vai ver:

- [Afinal, o que é o Flexbox?](https://www.zup.com.br/blog/flexbox-beagle#texto-blog)
- [Flexbox: Mãos à obra!](https://www.zup.com.br/blog/flexbox-beagle#texto-blog)
  - [Antes do tutorial, um breve contexto de como funciona o Flex](https://www.zup.com.br/blog/flexbox-beagle#texto-blog)
- [De volta ao nosso tutorial sobre FlexBox!](https://www.zup.com.br/blog/flexbox-beagle#texto-blog)
  - [Container 1: Header](https://www.zup.com.br/blog/flexbox-beagle#texto-blog)
  - [Containers 2 a 4: Cartaz, botão de “Já assisti”, título e descrição do filme](https://www.zup.com.br/blog/flexbox-beagle#texto-blog)
  - [Container 4: Cartaz do filme e botão de “Já assisti”](https://www.zup.com.br/blog/flexbox-beagle#texto-blog)
  - [Container 2 – Barra de favorito e nota do filme](https://www.zup.com.br/blog/flexbox-beagle#texto-blog)
  - [Container 3: Título do filme, duração, gêneros e países de origem](https://www.zup.com.br/blog/flexbox-beagle#texto-blog)
  - [Container 5: Sinopse do filme e botões de “avaliar” e “trailer”](https://www.zup.com.br/blog/flexbox-beagle#texto-blog)
  - [Container do Elenco](https://www.zup.com.br/blog/flexbox-beagle#texto-blog)
  - [Container 6: Rodapé](https://www.zup.com.br/blog/flexbox-beagle#texto-blog)
- [O resultado da nossa aplicação com Flexbox ](https://www.zup.com.br/blog/flexbox-beagle#texto-blog)
- [Flexbox e Beagle: levando seu desenvolvimento mobile a outro nível ](https://www.zup.com.br/blog/flexbox-beagle#texto-blog)

Quem trabalha com desenvolvimento de **aplicações mobile** deve conhecer, pelo menos, uma forma de trabalhar o posicionamento de seus componentes na tela. Porém, o grande desafio é encontrar uma maneira de **posicionar elementos de forma rápida e adaptável** para diferentes mudanças na aplicação. E para isso, o **Flexbox pode ser essencial**.

Neste artigo, a ideia é te apresentar um novo conceito de posicionamento de componentes: o **Flexbox**, uma ferramenta herdada do CSS e que aqui será usada dentro do **Beagle**, um framework de desenvolvimento *Server Driven UI*.

## **Afinal, o que é o Flexbox?**

Mais conhecido por devs web, já que o flex vem lá do CSS, **o conceito do Flexbox é o de organizar elementos dentro de** ***containers\*** **de forma flexível**.

Essa flexibilidade se caracteriza pela **capacidade de alterar a largura e a altura dos itens conforme a necessidade** para que o layout se adeque a qualquer tela. Por exemplo, eles podem ser expandidos para preencher espaços disponíveis ou encolhidos para evitar transbordamentos.

O conceito fundamental em Flexbox são os *containers*. São, literalmente, caixas que podem conter qualquer elemento dentro, inclusive, de outras caixas! Essa hierarquia permite inúmeras possibilidades de layout que veremos mais à frente.

## **Flexbox:** **Mãos à obra!**

Não há jeito melhor de aprender senão na prática! Então essa é a telinha que vamos fazer. 

Para os tutoriais deste artigo vamos usar o Beagle Movies, um aplicativo disponível tanto na [Apple Store ](https://apps.apple.com/br/app/beagle-movies/id1495123019)quanto na[ Google Play](https://play.google.com/store/apps/details?id=br.com.zup.beagletmdb&hl=pt_BR&gl=US), criado para servir de case para o Beagle.

![img](https://secureservercdn.net/198.71.233.31/36q.76e.myftpupload.com/wp-content/uploads/2021/09/flexbox-1-688x1024.png)Referência: Beagle Movies.

 Para este tutorial, iremos utilizar uma função que cria elementos Text do Beagle. Depois, iremos organizá-los com o intuito de deixar este tutorial focado apenas no posicionamento dos componentes. Além disso, para quem tiver interesse, o código fonte será disponibilizado, assim como o código específico de cada seção.

Uma maneira intuitiva de se trabalhar com Flexbox é o de dividir a tela em “partes”, considerando que a essência do Flexbox é a de desenvolver layouts com base em *containers*. Veja como na imagem a seguir: 

![img](https://secureservercdn.net/198.71.233.31/36q.76e.myftpupload.com/wp-content/uploads/2021/09/flexbox-beagle-2-931x1024.png)Referência: Beagle Movies.

Imagem de uma tela de aplicativo de uma plataforma de streaming com fundo preto. Na tela, é possível ver o pôster do filme 1917 e um descritivo de características da obra: título, duração, gênero, país de origem, sinopse e elenco.

O *container* 1 englobaria tanto o pôster do filme, quanto o botão de fechar e o de compartilhar. Enquanto que os *containers* de 2, 3 e 4, em que cada um deles possui mais de um elemento seriam englobados em um *container* maior. O container 5 envolveria a descrição do filme e os botões de avaliar e trailer, a lista de filmes seria um elemento disposto entre os containers 5 e 6, e o container 6 seria o rodapé do app com os botões de Netflix e Spotify.

A partir daqui, entraremos em detalhes técnicos de como ancorar os elementos uns aos outros e posicionar os *containers* usando Flex.

### **Antes do tutorial, um breve contexto de como funciona o Flex**

Imagine que a sua tela se oriente, primitivamente, apenas de maneira horizontal, e o ponto de início da tela é o ponto superior esquerdo. Além disso, existe uma hierarquia de *containers*, na qual existem *containers* “filhos” que estão dentro de um *container “*pai” .

Sendo assim, quaisquer elementos que você adicionar à sua tela, serão dispostos de forma horizontal, começando no canto superior esquerdo, onde 1, 2 e 3 são *containers* irmãos e filhos da tela. Confira na imagem a seguir:

![Imagem de uma tela de fundo branco com caixas que simulam os containers. Ao centro, uma caixa maior com título root ocupa a centro imagem.  No canto superior esquerdo, existem 3 caixas com números de 1 a 3, que simulam os containers filhos descritos no artigo.](https://secureservercdn.net/198.71.233.31/36q.76e.myftpupload.com/wp-content/uploads/2021/09/flexbox-beagle-3-1024x1024.png)[Referência](https://yogalayout.com/playground/)[.](https://yogalayout.com/playground/)

Porém, a força do Flex vem das possibilidades de mudança desses eixos, horizontal para vertical, canto superior para canto inferior e assim por diante. E isso pode ser alcançado por meio de propriedades como, por exemplo, *Flex Direction, Flex Grow, Flex Wrap, Justify Content, Align Items* etc.

Para dar ainda mais poder ao Flex, herdamos do CSS também o *Style*, que engloba propriedades como *Margin, Background Color, Position Type* etc.

Agora, vamos checar cada *container* da nossa tela e ver como dispor os elementos da forma proposta.

## **De volta ao nosso tutorial sobre FlexBox!**

### Container 1: Header

![Imagem de uma parte da tela do aplicativo de streaming, mais especificamente o container 1, que contém o pôster do filme 1917. Na imagem do pôster, aparece com um homem de costas andando em direção a um portão aberto e, ao fundo, uma cruz aparece no horizonte.](https://secureservercdn.net/198.71.233.31/36q.76e.myftpupload.com/wp-content/uploads/2021/09/flexbox-beagle-4.png)

Nesta parte, o pôster do filme, por si só, já parece um *container*. Então daremos uma largura a ele do tamanho da tela e uma altura de 220 (*points* em iOS ou DP em Android) para dar uma proporção harmônica. 

Para deixar os botões de fechar e compartilhar por cima, iremos usar uma propriedade de layout chamada *PositionType*, definindo **positionType = PositionType.ABSOLUTE**. Dessa forma, os botões irão deixar de ser “irmãos do pôster” e “filhos do container 1”, e passarão a ser “filhos da tela”.

Por fim, basta adicionarmos uma margem superior e esquerda para o botão de fechar: **margin = EdgeValue.only(top = 16, left = 16)**, e superior e direita para o botão de compartilhar: **margin = EdgeValue.only(top = 16, right = 16)**.

```kotlin
private fun redContainer() = Container(
        children = listOf(
            createText(
                text = "1",
                styleId = TEXT_WHITE_LARGE
            ).setStyle {
                backgroundColor = RED_DARK
                size = Size(width = UnitValue.percent(100), height = UnitValue.real(220))
            },
            createText(
                text = "2",
                styleId = TEXT_WHITE_MEDIUM
            ).setStyle {
                backgroundColor = RED_LIGHT
                size = Size(width = UnitValue.real(50), height = UnitValue.real(50))
                margin = EdgeValue.only(top = 16, left = 16)
                positionType = PositionType.ABSOLUTE
            },
            createText(
                text = "3",
                styleId = TEXT_WHITE_MEDIUM
            ).setStyle {
                backgroundColor = RED_LIGHT
                size = Size(width = UnitValue.real(50), height = UnitValue.real(50))
                margin = EdgeValue.only(top = 16, right = 16)
                position = EdgeValue.only(right = 0, top = 0)
                positionType = PositionType.ABSOLUTE
            }
        )
    )
```

### **Containers 2 a 4: Cartaz, botão de “Já assisti”, título e descrição do filme** 

![img](https://lh5.googleusercontent.com/XFEq8u1I_6oZ62h9QyxGTwvIWH50MWqJ7ve6aNKl29KMK4Ijk-9o6iBPlA-tmdTtU_wJmr6-zOvISFxo6ssPBieCJsUG3LbUGsRezM2xu7w5RdmaRh_IqyFCh2RwQAuDSNYVIOVP=s0)

Imagem de uma parte da tela do aplicativo de streaming, mais especificamente o container 2, que contém cartaz do filme 1917 ao lado esquerdo e, ao lado direito, aparecem as informações iniciais da obra: título do filme, países de origem e gêneros.

Nessa parte, vemos que o *container* está sobreposto ao *container* 1 (header). Como podemos fazer isso? 

Vamos usar a propriedade *Position*, indicando que **position = EdgeValue.only(top = -25)**, ou seja, posicionaremos o cartaz do filme como um *container* com unidades de medida contra a orientação do eixo vertical.

Além disso, iremos modificar a propriedade *Flex Direction*, dizendo que **flexDirection = FlexDirection.ROW**, fazendo com que a disposição dos filhos deste *container* todo (que é a junção das partes 2, 3, e 4) seja na horizontal, já que o cartaz e descrição do filme estão um do lado do outro.

A parte no canto superior direito, com ícone de coração e o número 79, será tratado individualmente mais a frente.

```kotlin
private fun yellowContainer() = Container(
        children = listOf(
            blueContainer(),
            grayContainer(),
            pinkContainer()
        )
    ).setStyle {
        position = EdgeValue.only(top = -25)
        size = Size(width = UnitValue.percent(100))
    }.setFlex {
        flexDirection = FlexDirection.ROW
    }
```

### Container 4: Cartaz do filme e botão de “Já assisti”

![Imagem de uma parte da tela do aplicativo de streaming, mais especificamente o container 4, que mostra apenas o cartaz do filme 1917.](https://secureservercdn.net/198.71.233.31/36q.76e.myftpupload.com/wp-content/uploads/2021/09/flexbox-beagle-6.png)

Aqui, nós iremos adicionar uma margem ao container 4, à esquerda **margin = EdgeValue.only(left = 16)**, para que ele não fique grudado na tela e iremos posicioná-lo um pouco acima da linha do container 1, para seguirmos o layout da tela.

Para o botão de “Já assisti” iremos dar uma margem superior para que haja um espaço entre ele e o pôster: **margin = EdgeValue.only(top = 5)**.

```kotlin
private fun blueContainer() = Container(
        children = listOf(
            createText(
                text = "6",
                styleId = TEXT_WHITE_MEDIUM
            ).setStyle {
                backgroundColor = BLUE
                size = Size(width = UnitValue.real(144), height = UnitValue.real(200))
            },
            createText(
                text = "7",
                styleId = TEXT_WHITE_MEDIUM
            ).setStyle {
                backgroundColor = BLUE
                margin = EdgeValue.only(top = 5)
                size = Size(width = UnitValue.real(144), height = UnitValue.real(40))
            }
        )
    ).setStyle {
        size = Size(height = UnitValue.real(245))
        position = EdgeValue.only(top = -15)
        margin = EdgeValue.only(left = 16)
    }
```

### Container 2 – Barra de favorito e nota do filme

![Imagem de uma parte da tela do aplicativo de streaming, mais especificamente o container 2, que mostra o coração simbolizando o ícone de favorito e um círculo com número 79 para indicar uma nota atribuída ao filme.](https://secureservercdn.net/198.71.233.31/36q.76e.myftpupload.com/wp-content/uploads/2021/09/flexbox-beagle-7.png)



Esse *container* por si só, terá um **positionType = PositionType.ABSOLUTE**, para ser mais fácil de colocarmos ele rente à tela na direita com: **position = EdgeValue.only(right = 0)**. Por fim, modificamos a propriedade *Flex Direction*: **flexDirection = FlexDirection.ROW**.

Já para o botão de curtir e a nota do filme, iremos dar uma margem à direita **margin = EdgeValue.only(right = 16)**, para que fique como está na imagem acima.

```kotlin
private fun grayContainer() = Container(
        children = listOf(
            createText(
                text = "4",
                styleId = TEXT_WHITE_MEDIUM
            ).setStyle {
                backgroundColor = GRAY
                margin = EdgeValue.only(right = 16)
                size = Size(width = UnitValue.real(50), height = UnitValue.real(50))
            },
            createText(
                text = "5",
                styleId = TEXT_WHITE_MEDIUM
            ).setStyle {
                backgroundColor = GRAY
                margin = EdgeValue.only(right = 16)
                size = Size(width = UnitValue.real(50), height = UnitValue.real(50))
            }
        )
    ).setStyle {
        position = EdgeValue.only(right = 0)
        positionType = PositionType.ABSOLUTE
    }.setFlex {
        flexDirection = FlexDirection.ROW
    }
```

### **Container 3: Título do filme, duração, gêneros e países de origem** 

![Imagem de uma parte da tela do aplicativo de streaming, mais especificamente o container 3, que mostra as especificações do filme: título (1917), países de origem (Canadá, Índia, Espanha, Reino Unido, Estados Unidos) e gêneros (Guerra, Drama, Ação, História).](https://secureservercdn.net/198.71.233.31/36q.76e.myftpupload.com/wp-content/uploads/2021/09/flexbox-beagle-8.png)

Como o *container* 2 está absoluto à tela, perdemos a referência dele. Então, aqui neste caso, iremos compensar essa perda posicionando este *container* 80 unidades abaixo, dentro do *container* maior que engloba os *containers* 2, 3 e 4: **position = EdgeValue.Companion.only(top = 80)**.

Além disso, iremos adicionar uma margem superior de 5 unidades a cada texto que vamos utilizar. Neste caso, será:

- 1 para o título do filme;
- 1 para a duração do filme;
- 1 para para os países de origem (Canadá, Índia, Espanha, Reino Unido, Estados Unidos);
- 1 para o gênero (Guerra, Drama, Ação, História).

Por fim, usaremos a propriedade Grow: **grow = 1.0**, que indica que o *container* pode crescer o máximo que conseguir na tela, respeitando todas as outras propriedades de outros irmãos, como as margens que especificamos.

```kotlin
private fun pinkContainer() = Container(
        children = listOf(
            createText(
                text = "8",
                styleId = TEXT_WHITE_MEDIUM
            ).setStyle {
                backgroundColor = PINK
                margin = EdgeValue.only(bottom = 5)
                size = Size(height = UnitValue.real(40))
            },
            createText(
                text = "9",
                styleId = TEXT_WHITE_DEFAULT
            ).setStyle {
                backgroundColor = PINK
                margin = EdgeValue.only(bottom = 5)
                size = Size(height = UnitValue.real(20))
            },
            createText(
                text = "10",
                styleId = TEXT_WHITE_DEFAULT
            ).setStyle {
                backgroundColor = PINK
                margin = EdgeValue.only(bottom = 5)
                size = Size(height = UnitValue.real(20))
            },
            createText(
                text = "11",
                styleId = TEXT_WHITE_DEFAULT
            ).setStyle {
                backgroundColor = PINK
                margin = EdgeValue.only(bottom = 5)
                size = Size(height = UnitValue.real(20))
            }
        )
    ).setStyle {
        position = EdgeValue.Companion.only(top = 80)
        margin = EdgeValue.horizontal(horizontal = 16)
    }.setFlex {
        grow = 1.0
    }
```



### Container 5: Sinopse do filme e botões de “avaliar” e “trailer”

![Imagem de uma parte da tela do aplicativo de streaming, mais especificamente o container 6, que mostra um texto com o que seria a sinopse do filme e, logo abaixo, os botões AVALIAR e TRAILER. ](https://secureservercdn.net/198.71.233.31/36q.76e.myftpupload.com/wp-content/uploads/2021/09/flexbox-beagle-9.png)

Nesta parte da aplicação mobile, iremos compensar as 25 unidades deslocadas para cima do conjunto de containers que integram o cartaz, título e descrição do filme, aplicando o mesmo valor ao nosso container com a sinopse do filme: **position = EdgeValue.only(top = -25)**. 

Além disso, a disposição dos “filhos” será bem simples, da maneira convencional: vertical, com um espaçamento entre eles alcançado por meio de uma margem superior de 5 unidades e uma margem horizontal de 16 unidades para centralizá-los na tela: **margin = EdgeValue.only(left = 16, right = 16, top = 5)**.

```kotlin
private fun purpleContainer() = Container(
        children = listOf(
            createText(
                text = "12",
                styleId = TEXT_WHITE_MEDIUM
            ).setStyle {
                backgroundColor = PURPLE
                margin = EdgeValue.horizontal(horizontal = 16)
                size = Size(height = UnitValue.real(50))
            },
            createText(
                text = "13",
                styleId = TEXT_WHITE_MEDIUM
            ).setStyle {
                backgroundColor = PURPLE
                margin = EdgeValue.only(left = 16, right = 16, top = 5)
                size = Size(height = UnitValue.real(30))
            },
            createText(
                text = "14",
                styleId = TEXT_WHITE_MEDIUM
            ).setStyle {
                backgroundColor = PURPLE
                margin = EdgeValue.only(left = 16, right = 16, top = 5)
                size = Size(height = UnitValue.real(30))
            }
        )
    ).setStyle {
        position = EdgeValue.only(top = -25)
        margin = EdgeValue.only(top = 16)
        size = Size(width = UnitValue.percent(100))
    }
```

### Container do Elenco

![Imagem de uma parte da tela do aplicativo de streaming, mais especificamente a fileira com fotos dos atores que fazem parte do elenco do filme 1917. Nas fotos, aparecem homens brancos, de diferentes idades, a maioria com cabelos curtos na cor castanho escuro.](https://secureservercdn.net/198.71.233.31/36q.76e.myftpupload.com/wp-content/uploads/2021/09/flexbox-beagle-10-artistas.png)

Por se tratar de um elemento de texto filho de toda a tela, não separamos a parte de elenco como um container. E neste caso, vamos com uma altura e uma largura de 100% da tela.

```kotlin
private fun brown() = createText(
        text = "15", styleId = TEXT_WHITE_MEDIUM
    ).setStyle {
        backgroundColor = BROWN
        size = Size(height = UnitValue.Companion.real(100), width = UnitValue.Companion.percent(100))
    }
```

### **Container 6: Rodapé** 

![Imagem de uma parte da tela do aplicativo de streaming, mais especificamente o container 7 que é o rodapé da aplicação. Nela, aparecem os ícones das empresas Netflix(ao lado direito da tela)  e Spotify (ao lado esquerdo da tela).](https://secureservercdn.net/198.71.233.31/36q.76e.myftpupload.com/wp-content/uploads/2021/09/flexbox-beagle-11-edited.png)

O container 7 possui uma margem top de 30 unidades e outra bottom de 16 unidades: **margin = EdgeValue.only(top = 30, bottom = 16)** para obtermos um espaçamento entre o elemento logo acima dele e a borda inferior da tela.

Mas o mais importante para dar o efeito que buscamos é a disposição dos “filhos”: na horizontal, ou seja, modificando o atributo Flex Direction: **flexDirection = FlexDirection.ROW**, e o posicionamento deles de uma forma que fiquem centralizados e com um espaçamento igual: **justifyContent = JustifyContent.SPACE_BETWEEN**. 

Por último, dizemos que o alinhamento do container 6 (rodapé) é no centro da tela: **alignSelf = AlignSelf.CENTER**.

```kotlin
private fun greenContainer() = Container(
        children = listOf(
            createText(
                text = "16",
                styleId = TEXT_WHITE_MEDIUM
            ).setStyle {
                backgroundColor = GREEN
                size = Size(height = UnitValue.real(50), width = UnitValue.real(50))
            },
            createText(
                text = "17",
                styleId = TEXT_WHITE_MEDIUM
            ).setStyle {
                backgroundColor = GREEN
                size = Size(height = UnitValue.real(50), width = UnitValue.real(50))
            }
        )
    ).setStyle {
        margin = EdgeValue.only(top = 30, bottom = 16)
        size = Size(width = UnitValue.real(200))
    }.setFlex {
        flexDirection = FlexDirection.ROW
        justifyContent = JustifyContent.SPACE_BETWEEN
        alignSelf = AlignSelf.CENTER
    }
```

## **O resultado da nossa aplicação com Flexbox** 

A nossa telinha feita com containers a partir de Flexbox ficou da seguinte maneira:

![Imagem de uma parte da tela com diversas caixas, numeradas de 1 a 17. Essas caixas simulam os elementos dispostos nos containers  que foram descritos ao longo do artigo para demonstrar que o layout da tela do Beagle Movies neste tutorial pode ser visualizado dessa maneira fragmentada por caixas.](https://secureservercdn.net/198.71.233.31/36q.76e.myftpupload.com/wp-content/uploads/2021/09/flexbox-beagle-12-931x1024.png)



Conseguimos alcançar exatamente o resultado que buscamos em questão de posicionamento, que é todo o propósito deste tutorial.

![Imagem comparativa: do lado esquerdo, a tela com várias caixas de 1 a 17 e, do lado direito, a tela que simula o aplicativo de streaming construído neste tutorial.](https://secureservercdn.net/198.71.233.31/36q.76e.myftpupload.com/wp-content/uploads/2021/09/flexbox-beagle-13-1024x793.png)

Isso nos mostra que o Flexbox é capaz de posicionar elementos das mais diversas formas e que, com criatividade, conseguimos construir qualquer layout com ele!

## Flexbox e Beagle: levando seu desenvolvimento mobile a outro nível 

Com certeza, é uma maneira diferente de pensar, de abordar a nossa tela, e esperamos que este “breve tutorial” tenha ajudado quem atua com desenvolvimento mobile e que busca aprender mais como funciona o posicionamento de elementos utilizando nosso framework[ open source](https://www.zup.com.br/blog/open-source-no-brasil), o Beagle.

Caso queira testar seus conhecimentos adquiridos neste artigo, nossa sugestão é seguir para o [playground do Yoga Layout](https://yogalayout.com/playground/) que, inclusive, é o motor gráfico que o Beagle usa. É um lugar sensacional para brincar com o Flexbox.

Se quiser conhecer outras funcionalidades do nosso projeto open source, fica aqui o convite para você dar uma olhada no [nosso fórum](https://forum.zup.com.br/c/pt-br/beagle/16) ou conferir o projeto do Beagle pelo [GitHub](https://github.com/ZupIT/beagle).

![Capa do artigo "Flexbox o que é e como usá-lo para ter aplicações mobile responsivas" com 9 caixas coloridas perfeitamente alinhadas](https://secureservercdn.net/198.71.233.31/36q.76e.myftpupload.com/wp-content/uploads/2021/09/Flexbox-o-que-e-e-como-usa-lo-para-ter-aplicacoes-mobile-responsivas-1024x760.jpg)

[![João Jacó](https://secureservercdn.net/198.71.233.31/36q.76e.myftpupload.com/wp-content/uploads/2021/09/Foto-Joao-Jaco-150x150.png)](https://www.zup.com.br/autores/joao-jaco)- [João Jacó - ](https://www.zup.com.br/autores/joao-jaco)- [Linkedin](https://www.linkedin.com/in/joão-jacó-35698416b/)

