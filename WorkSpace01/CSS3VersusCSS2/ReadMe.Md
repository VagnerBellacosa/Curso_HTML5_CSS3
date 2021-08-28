# A diferença entre CSS2 e CSS3

9 de maio de 2021

![img](https://fiodevida.com/wp-content/uploads/2021/05/css3-57b597e85f9b58b5c2b338de.png?ezimgfmt=ng%3Awebp%2Fngcb1%2Frs%3Adevice%2Frscb1-1)





Neste artigo



A maior diferença entre CSS2 e CSS3 é que CSS3 foi dividido em seções diferentes, chamadas *módulos*. Cada um desses módulos está percorrendo o W3C em vários estágios do processo de recomendação. Esse processo facilitou muito a aceitação e a implementação de várias partes do CSS3 no navegador por diferentes fabricantes. Se você comparar esse processo com o que aconteceu com o CSS2, onde tudo foi enviado como um único documento com todas as informações das Cascading Style Sheets, você começará a ver as vantagens de dividir a recomendação em partes menores e individuais. Como cada um dos módulos está sendo trabalhado individualmente, os desenvolvedores desfrutam de uma gama muito mais ampla de suporte de navegador para módulos CSS3.



## Novos seletores CSS3

CSS3 oferece várias novas maneiras de escrever regras CSS com novos seletores CSS, bem como um novo combinador e alguns novos pseudo-elementos. Existem três novos seletores de atributo:

- O início do atributo corresponde exatamente a:

   

  elemento[foo^=”bar”]

  O elemento tem um atributo chamado foo que começa com “bar”, por exemplo

- Final de atributo corresponde exatamente

  :elemento[foo$=”bar”]

  O elemento tem um atributo chamado foo que termina com “bar”, por exemplo

- O atributo contém a correspondência:

  elemento[foo*=”bar”]

  O elemento possui um atributo chamado *foo* que contém a string “bar”.

16 novas pseudo classes foram introduzidas:

- :raiz
  - O elemento raiz do documento.
- : enésima criança (n)
  - Use isso para combinar elementos filhos exatos ou use variáveis para obter correspondências alternadas.
- : enésimo último filho (n)
  - Combine elementos filho exatos contando a partir do último.
- : enésimo do tipo (n)
  - Combine elementos irmãos com o mesmo nome antes dele na árvore do documento.
- : enésimo último do tipo (n)
  - Combine elementos irmãos com o mesmo nome a partir da parte inferior.
- : último filho
  - Corresponde ao último elemento filho do pai.
- : primeiro do tipo
  - Corresponde ao primeiro elemento irmão desse tipo.
- : último do tipo
  - Corresponde ao último elemento irmão desse tipo.
- :filho único
  - Corresponde ao elemento que é o único filho de seu pai.
- : apenas do tipo
  - Corresponde ao elemento que é o único de seu tipo.
- :vazio
  - Corresponde ao elemento que não possui filhos (incluindo nós de texto).
- :alvo
  - Corresponde a um elemento que é o destino do URI de referência.
- :ativado
  - Combine o elemento quando estiver habilitado.
- :Desativado
  - Combine o elemento quando estiver desabilitado.
- :verificado
  - Combine o elemento quando estiver marcado (botão de opção ou caixa de seleção).
- : não (s)
  - Corresponde quando o elemento não corresponde aos seletores simples.

Existe um novo combinador:

- elementA ~ elementB
  - Corresponde quando o elemento B segue em algum lugar após o elemento A, não necessariamente imediatamente.



## Novas Propriedades

CSS3 também introduziu várias novas propriedades CSS. Muitas dessas propriedades criam estilos visuais que provavelmente se associariam mais a um programa gráfico como o Photoshop. Alguns deles, como raio de borda ou sombra de caixa, existem desde a introdução do CSS3. Outros, como flexbox ou mesmo CSS Grid, são estilos mais novos que ainda são frequentemente considerados adições CSS3. No CSS3, o modelo da caixa não mudou. Mas há um monte de novas propriedades de estilo que podem ajudá-lo a estilizar os planos de fundo e as bordas de suas caixas.

<iframe frameborder="0" src="https://6e6fbb82b4410ee211317209b043b17b.safeframe.googlesyndication.com/safeframe/1-0-38/html/container.html" id="google_ads_iframe_/1254144,22569277971/fiodevida_com-box-4_0" title="3rd party ad content" name="" scrolling="no" marginwidth="0" marginheight="0" width="300" height="250" data-is-safeframe="true" sandbox="allow-forms allow-popups allow-popups-to-escape-sandbox allow-same-origin allow-scripts allow-top-navigation-by-user-activation" allow="attribution-reporting" data-google-container-id="6" data-load-complete="true" style="box-sizing: inherit; margin: 0px !important; padding: 0px !important; outline: 0px; vertical-align: bottom; max-width: 100%; border: 0px;"></iframe>





## Várias imagens de fundo

Usando os estilos de imagem de fundo, posição de fundo e repetição de fundo, você pode especificar várias imagens de fundo a serem colocadas em camadas umas sobre as outras na caixa. A primeira imagem é a camada mais próxima do usuário, com as seguintes pintadas atrás. Se houver uma cor de fundo, ela será pintada abaixo de todas as camadas da imagem.



## Novas propriedades de estilo de fundo

Existem também algumas novas propriedades de plano de fundo no CSS3:

- **clipe de fundo**
- Esta propriedade define como a imagem de fundo deve ser cortada. O padrão é a caixa de borda, mas pode ser alterada para a caixa de preenchimento ou a caixa de conteúdo.
- **origem do fundo**
- Esta propriedade determina se o fundo deve ser colocado na caixa de preenchimento, na caixa de borda ou na caixa de conteúdo.
- **tamanho do fundo**
- Esta propriedade indica o tamanho da imagem de fundo. Ele permite que você estique imagens menores para caber na página.



## Alterações nas propriedades de estilo de fundo existentes

Existem também algumas alterações nas propriedades de estilo de fundo existentes:

- fundo de repetição
  - Existem dois novos valores para esta propriedade – *espaço* e *Redondo*. Espaço espaça a imagem lado a lado uniformemente dentro da caixa, sem ser cortada. Rodada redimensiona a imagem de plano de fundo para que ela seja agrupada várias vezes na caixa.
- anexo de fundo
  - Um novo valor “local” é adicionado para que o fundo role com o conteúdo do elemento quando esse elemento tiver uma barra de rolagem.
- fundo
  - A propriedade abreviada do plano de fundo adiciona as propriedades de tamanho e origem.



## Propriedades de borda CSS3

No CSS3, as bordas podem ser os estilos aos quais estamos acostumados (sólido, duplo, tracejado, etc.) ou podem ser uma imagem. Além disso, o CSS3 oferece suporte a cantos arredondados. As imagens de borda são interessantes porque você cria uma imagem de todas as quatro bordas e, em seguida, informa ao CSS como aplicar essa imagem às suas bordas.



## Novas propriedades de estilo de borda

Existem algumas novas propriedades de borda em CSS3:

- **raio de fronteira**
- **border-top-right-radius**, **border-bottom-right-radius**, **border-bottom-left-radius**, **border-top-left-radius**
- Essas propriedades permitem que você crie cantos arredondados em suas bordas.
- **border-image-source**
- Especifica o arquivo de origem da imagem a ser usado em vez dos estilos de borda já definidos.
- **fatia da imagem da borda**
- Representa os deslocamentos internos das bordas da imagem da borda.
- **border-image-width**
- Define o valor da largura para sua imagem de borda.
- **border-image-outset**
- Especifica o quanto a área da imagem da borda se estende além da caixa da borda.
- **border-image-stretch**
- Define como as partes laterais e intermediárias da imagem de borda devem ser colocadas lado a lado ou dimensionadas.
- **imagem de borda**
- A propriedade abreviada para todas as propriedades da imagem da borda.



## Propriedades CSS3 adicionais relacionadas a bordas e planos de fundo

Quando uma caixa é quebrada em uma quebra de página, quebra de coluna ou quebra de linha (para elementos embutidos), o *quebra-caixa-decoração* propriedade define como as novas caixas são embaladas com borda e preenchimento. Os planos de fundo se dividem entre várias caixas quebradas usando esta propriedade. Uma nova *Sombra da caixa* propriedade adiciona sombras aos elementos da caixa. Com CSS3, agora você pode configurar facilmente uma página da web com várias colunas, sem tabelas ou **div** estruturas de tag. Você simplesmente informa ao navegador quantas colunas o elemento do corpo deve ter e a largura que devem ter. Além disso, você pode adicionar bordas (regras) e cores de fundo que abrangem a altura da coluna, e seu texto fluirá por todas as colunas automaticamente.



## Defina o número e a largura das colunas

Existem três novas propriedades que permitem definir o número e a largura de suas colunas:

- largura da coluna
  - Define a largura que suas colunas devem ter. O navegador irá então fluir o texto para preencher o espaço com colunas dessa largura.
- contagem de colunas
  - Define o número de colunas na página. O navegador criará colunas largas o suficiente para caber no espaço, mas apenas o número que você especificar.
- colunas
  - Propriedade abreviada onde você pode definir a largura ou o número (ou ambos, mas isso raramente faz sentido).



## Espaços e regras de coluna CSS3

Lacunas e regras são colocadas entre as colunas no mesmo cenário de várias colunas. As lacunas separarão as colunas, mas as regras não ocupam nenhum espaço. Se uma regra de coluna for mais larga do que sua lacuna, ela se sobreporá às colunas adjacentes. Existem cinco novas propriedades para regras e lacunas de coluna:

- lacuna de coluna
  - Define a largura das lacunas entre as colunas.
- coluna-regra-cor
  - Define a cor da regra.
- estilo de regra de coluna
  - Define o estilo da regra (sólido, pontilhado, duplo, etc.).
- largura da regra da coluna
  - Define a largura da regra.
- regra da coluna
  - Uma propriedade abreviada que define todas as três propriedades da regra da coluna de uma vez.



## Quebras de coluna CSS3, colunas de expansão e colunas de preenchimento

As quebras de coluna usam as mesmas opções CSS2 usadas para definir quebras no conteúdo paginado, mas com três novas propriedades: **pausa antes**, **pausa**, e **arrombamento**. Como acontece com as tabelas, você pode definir elementos para abranger colunas com a propriedade column-span. Isso permite que você crie manchetes que abrangem várias colunas, mais como um jornal. Preencher colunas decide quanto conteúdo estará em cada coluna. Colunas balanceadas tentam colocar a mesma quantidade de conteúdo em cada coluna, enquanto auto apenas flui o conteúdo até que a coluna esteja cheia e então vai para a próxima.



## Mais recursos no CSS3 que não estão incluídos no CSS2

Existem muitos recursos adicionais no CSS3 que não existiam no CSS2, incluindo:

- **Módulo de layout de modelo CSS e módulo de posicionamento de grade CSS3**: Criando grades com CSS.
- **Módulo de texto CSS3**: Contorne o texto e até mesmo crie sombras projetadas com CSS.
- **Módulo CSS3 Color**: Agora com opacidade.
- **Mudanças no modelo da caixa**: Incluindo uma propriedade de letreiro que atua como a marca do IE.
- **Módulo de interface do usuário CSS3**: Fornece novos cursores, respostas a ações, campos obrigatórios e até elementos de redimensionamento.
- **Consultas de mídia**: As consultas de mídia permitem mais flexibilidade ao definir como uma folha de estilo deve ser usada. Por exemplo, você pode definir uma folha de estilo que seja apenas para dispositivos portáteis com uma janela de visualização maior que 20em.
- **Módulo CSS3 Ruby**: Fornece suporte para idiomas que usam rubi textual para fazer anotações em documentos.
- **Módulo de mídia paginada CSS3**: Para obter ainda mais suporte para mídia paginada (papel, transparências, etc.).
- **Conteúdo gerado**: Cabeçalhos e rodapés em execução, notas de rodapé e outro conteúdo gerado programaticamente, especialmente para mídia paginada.
- **Módulo CSS3 Speech**: Mudanças para CSS aural.