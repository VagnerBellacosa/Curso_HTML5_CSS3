- [Front-end](https://blog.geekhunter.com.br/category/front-end/)

# Veja 8 erros de CSS que você não pode cometer

Nesse post, vamos abordar 8 erros comuns de CSS que você deve evitar, além de te mostrar como chegar à mesma solução de forma mais elegante e profissional!

- julho 5, 2019

Quando falamos de desenvolvimento web, é impossível não falarmos de CSS, pois essa linguagem é o script que define toda a estrutura e o design das aplicações. E quando se trata de CSS, é possível conseguir os mesmos efeitos de diversas maneiras: as inovações do CSS3 permitiram a implementações de diversas animações e efeitos, antes efetuados através de Javascript, de maneira nativa na própria linguagem. Não podemos, no entanto, abusar da liberdade que a linguagem nos dá. Aplicações web são permissivas a ponto de nos deixar formatar nosso estilo da forma como quisermos, mas existem boas práticas que fazem toda a diferença.

Aplicando as técnicas certas, é possível evitar armadilhas que causam dor de cabeça até mesmo nos mais experientes programadores de interface. Nesse post, vamos abordar 8 erros comuns de CSS que você deve evitar, além de te mostrar como chegar à mesma solução de forma mais elegante e profissional!

*Descubra de uma vez por todas a **[diferença entre UX e UI](https://geekblogti.wpengine.com/front-end-descomplicado-ux-ui/)***

**Conteúdo** [ocultar](https://blog.geekhunter.com.br/veja-8-erros-de-css-que-voce-nao-pode-cometer/#) 

[1 1. Todos os navegadores são importantes](https://blog.geekhunter.com.br/veja-8-erros-de-css-que-voce-nao-pode-cometer/#1_Todos_os_navegadores_sao_importantes)

[2 2. Não caia na tentação do CSS inline](https://blog.geekhunter.com.br/veja-8-erros-de-css-que-voce-nao-pode-cometer/#2_Nao_caia_na_tentacao_do_CSS_inline)

[3 3. Deixe os IDs para o Javascript](https://blog.geekhunter.com.br/veja-8-erros-de-css-que-voce-nao-pode-cometer/#3_Deixe_os_IDs_para_o_Javascript)

[4 4. Tabelas: somente onde necessário!](https://blog.geekhunter.com.br/veja-8-erros-de-css-que-voce-nao-pode-cometer/#4_Tabelas_somente_onde_necessario)

[5 5. Tenha cuidado ao usar o !Important](https://blog.geekhunter.com.br/veja-8-erros-de-css-que-voce-nao-pode-cometer/#5_Tenha_cuidado_ao_usar_o_Important)

[6 6. Use unidades flexíveis](https://blog.geekhunter.com.br/veja-8-erros-de-css-que-voce-nao-pode-cometer/#6_Use_unidades_flexiveis)

[7 7. Respeite as tags HTML](https://blog.geekhunter.com.br/veja-8-erros-de-css-que-voce-nao-pode-cometer/#7_Respeite_as_tags_HTML)

[8 8. Comente tudo](https://blog.geekhunter.com.br/veja-8-erros-de-css-que-voce-nao-pode-cometer/#8_Comente_tudo)

## **1. Todos os navegadores são importantes**

É importante que o seu site seja compatível com todos os navegadores, ou pelo menos com os principais que existem no mercado. Respeitar as características dos navegadores dentro do seu CSS é respeitar o seu usuário final.

Fonte: [W3Counter](https://www.w3counter.com/globalstats.php?year=2016&month=4)

Mas como saber se todos os navegadores são compatíveis com código implementado? Uma das soluções que pode ser interessante é validar o seu site pelo[ Markup Service ](https://validator.w3.org/)do próprio W3C. Nesta funcionalidade online, o seu código é validado pela entidade que regulariza os padrões de interface. Após isso, basta adequar seu script para que ele seja cross browser.

[![img](https://geekblogti.wpengine.com/wp-content/uploads/2019/07/CTA-Rodap%C3%A9-Front-end-10-1024x134.jpg)](https://bit.ly/2JS11sl)

## **2. Não caia na tentação do CSS inline**

Um dos erros mais comuns e mais perigosos é o CSS inline. Escrever códigos de estilo diretamente nas tags HTML pode ser bastante cômodo e comum ao testar uma nova configuração, ou quando deseja-se solucionar algum problema urgente, mas é preciso ter cuidado redobrado ao levar a aplicação para produção! O ‘rápido’ hoje pode se tornar bem demorado no futuro. Para o usuário, há uma perda de performance na medida que mais código precisa ser acessado pela rede, o que pode acarretar em uma lentidão maior ao renderizar a página. Para o programador, imagine uma manutenção que demande uma troca de toda a identidade visual: os CSS inline terão que ser buscados e modificados um a um. Melhor mantê-los longe do site!

## **3. Deixe os IDs para o Javascript**

Evite criar scripts para IDs, pois eles não são feitos para a linguagem CSS. Deixe que o seu Javascript seja o único a manipular seus elementos pelo ID. Nessa situação, a melhor forma de trabalhar estilos é através de classes.

> **Leitura recomendada:
> **
>
> *Leia nosso artigo sobre os frameworks de front-end:**[ Angular, React ou Vue? ](https://geekblogti.wpengine.com/react-vs-vue-vs-angular-qual-escolher/)***

## **4. Tabelas: somente onde necessário!**

Infelizmente, ainda é bastante comum encontrar [sites institucionais](http://www.inmetro.gov.br/) que se baseiam em tabelas. Não apenas o carregamento desses elementos é mais custoso como também oferece uma série de limitações, muitas vezes imagens precisam ser recortadas para encaixar nas divisões do layout, alguns elementos de layout não funcionam (como o uso de height:100% para child-elements <td>) além de tornar o desenvolvimento e manutenção extremamente confuso e dificultado. Se a sua finalidade não é explicitamente a disposição de dados (data grids), então, na grande maioria dos casos há melhores maneiras de implementar seu layout.

## **5. Tenha cuidado ao usar o !Important**

Todos os recursos do CSS são válidos, o que é preciso entender é quando e como devemos usá-los. O “!important” é um desses recursos que devemos ter bastante cuidado antes de lançar mão. Seletores de CSS possuem especificidades, regras atribuídas a #ids se sobrepõem a regras atribuídas a .classes, e regras em CSS Inline são ainda mais específicas. Este [infográfico](http://www.standardista.com/wp-content/uploads/2012/01/specificityimg.png) ilustra a evolução da especificidade com diferentes seletores.  Com o !important, qualquer formatação que existe em qualquer outro lugar é desconsiderada. É preciso muito cuidado, especialmente ao usar !important em classes presentes em diversos elementos para não perder horas se perguntando por quê suas alterações de layout não surtem efeito.

## **6. Use unidades flexíveis**

Muitas vezes, é possível encontrar alguns números perdidos dentro do CSS. Por mais que propriedades fixas em ‘px’ possam ser necessárias, um design multi-plataforma eficiente e elegante faz bom uso das porcentagens quando possível, seja em width, height, margins ou propriedades mais complexas. Além disso, você pode aproveitar as vantagens de pré-processadores como Less e Sass e definir variáveis para tamanhos e cores para facilitar a criação de layouts responsivos com o @media, mantendo a padronização e facilitando alterações. Para tipografia, é possível utilizar a unidade ‘em’ ao invés de ‘px’ ou ‘pt’ para definir font-sizes relativos.

> **>Leitura Recomendada:**

[*Svelte*](https://geekblogti.wpengine.com/svelte-o-framework-javascript-que-nao-e-um-framework/)*: o framework JavaScript que não é um framework*

## **7. Respeite as tags HTML**

Estilos CSS acoplados a tags HTML são possíveis, mas não são aconselháveis. É melhor que sejam criadas mais classes CSS a ter que acoplar tags ao CSS. Assim, o seu código fica mais independente e deixa o desenvolvedor mais livre para alterar o HTML sem quebrar o layout da página.

[![img](https://geekblogti.wpengine.com/wp-content/uploads/2019/07/CTA-Rodap%C3%A9-Front-end-2-1024x134.jpg)](https://bit.ly/2JS11sl)

## **8. Comente tudo**

Código limpo e semântica preservada. Isso já gera uma enorme segurança e nitidez ao CSS. Mas não se engane, o trabalho ainda não está concluído! Mesmo um desenvolvedor experiente se assusta ao ter que confrontar um antigo script.

A linguagem CSS parece ser intuitiva, mas ela demanda cuidados. Para evitar “apertos”, o ideal é comentar o que é cada bloco de estilo CSS que for escrito. Assim, qualquer pessoa pode entender o que foi feito, inclusive quem criou o script. É possível separar o código em vários arquivos durante o desenvolvimento, o que facilita saber qual efeito está sendo aplicado a cada elemento.

Vale ressaltar que mesmo que sejam códigos semânticos e bem comentados, não é aconselhável colocá-los diretamente em um ambiente de produção justamente pelo peso do arquivo ser maior, o ideal é minificar tudo o que for possível para obter uma melhor performance em tempo de carregamento (ou mesmo servir os recursos a partir da nuvem).

No final, a melhor maneira de programar de maneira limpa e otimizada é conhecer a fundo como tudo funciona por trás da linguagem. A Geekhunter fechou uma parceria com a Udemy que fornece descontos em diversos cursos, inclusive de Front-End. Você pode conferir nossa página especial AQUI.

O que achou de nossas dicas? Já deixou passar algum desses erros? Conhece algum outro erro recorrente em CSS? Deixe seu comentário abaixo e ajude a construir uma web mais limpa e otimizada.

**>>Leitura Recomendada:**
*Leia nosso artigo sobre **[o futuro do front-end](https://geekblogti.wpengine.com/mercado-front-end-da-origem-ate-o-futuro/)***

![Gustavo Kerezi](https://secure.gravatar.com/avatar/a795a87d1de9262f52764605bf32786d?s=100&d=mm&r=g)

[Gustavo Kerezi](https://blog.geekhunter.com.br/author/gustavokerezi/)