**[CSS](https://www.treinaweb.com.br/blog/categoria/css)**

# Barra de progresso que muda de tamanho e cor com apenas uma variável do CSS

Veremos como aproveitar variáveis do CSS para criar uma barra de progresso bem simples e controlar sua largura e cor usando apenas uma variável.

 mais de 3 anos atrás

[Artigos](https://www.treinaweb.com.br/blog)Barra de progresso que muda de tamanho e cor com apenas uma variável do CSS

Olá, Web Developers!

Hoje veremos como aproveitar variáveis do CSS para criar uma barra de progresso bem simples e controlar sua largura e cor usando apenas uma variável.

<iframe src="https://jsfiddle.net/xe5an78y/8/embedded/result/dark/" id="JSFEMB_18962" width="100%" height="156" frameborder="0" sandbox="allow-modals allow-forms allow-same-origin allow-scripts allow-popups allow-top-navigation-by-user-activation allow-downloads" allow="midi; geolocation; microphone; camera; display-capture; encrypted-media;" style="box-sizing: inherit; border: 1px solid rgb(59, 59, 59); font: inherit; margin: 0px 0px 20px; padding: 0px; vertical-align: baseline; min-height: 200px;"></iframe>

Se você nunca trabalhou com variáveis do CSS, temos aqui um vídeo onde explico de forma bem simples e rápida como utilizar: https://www.treinaweb.com.br/blog/videos/variaveis-com-css-puro/



![HTML5 e CSS3 - Desenvolvimento web Básico](https://d2knvm16wkt3ia.cloudfront.net/assets/svg-icon/html5-css3.svg)

##### CursoHTML5 e CSS3 - Desenvolvimento web Básico

[Conhecer o curso](https://www.treinaweb.com.br/curso/desenvolvimento-web-com-html5-e-css3-basico)



## Começando com a barra de progresso

Uma barra de progresso pode ser uma simples `div`. Vamos iniciar nossa `div` com o seguinte código:

Copiar

```html
<div class="progress-bar" ></div>
```

Copiar

```css
.progress-bar{
  height: 50px;
  padding: 5px;
  background-color: #ccc;
}
```

<iframe src="https://jsfiddle.net/xe5an78y/2/embedded/result/dark/" id="JSFEMB_18962" width="100%" height="156" frameborder="0" sandbox="allow-modals allow-forms allow-same-origin allow-scripts allow-popups allow-top-navigation-by-user-activation allow-downloads" allow="midi; geolocation; microphone; camera; display-capture; encrypted-media;" style="box-sizing: inherit; border: 1px solid rgb(59, 59, 59); font: inherit; margin: 0px 0px 20px; padding: 0px; vertical-align: baseline; min-height: 200px;"></iframe>

## Exibindo o progresso

É muito comum utilizar outra `div` como progresso, mas também podemos utilizar pseudo-elementos para inserir um conteúdo na `div` principal. Dessa maneira nosso HTML não precisará ter duas divs para termos nossa barra de progresso, deixando nosso código ainda mais simples.

Copiar

```css
.progress-bar{
  height: 50px;
  padding: 5px;
  background-color: #ccc;
  /* pseudo-elementos precisam de um
	conteúdo para terem altura.
	Como não teremos conteúdo no nosso
	pseudo-elemento, utilizar
	"display: flex" o força a
	ter a altura do elemento pai.
	*/
  display: flex;
}

.progress-bar::before{
  content: "";
  /* Por enquanto colocamos
	uma largura e uma cor
	com valores fixos
	*/
  width: 50%;
  background-color: red;
}
```

<iframe src="https://jsfiddle.net/xe5an78y/4/embedded/result/dark/" id="JSFEMB_18962" width="100%" height="156" frameborder="0" sandbox="allow-modals allow-forms allow-same-origin allow-scripts allow-popups allow-top-navigation-by-user-activation allow-downloads" allow="midi; geolocation; microphone; camera; display-capture; encrypted-media;" style="box-sizing: inherit; border: 1px solid rgb(59, 59, 59); font: inherit; margin: 0px 0px 20px; padding: 0px; vertical-align: baseline; min-height: 200px;"></iframe>

## Alterando o tamanho do progresso com variáveis

O progresso sempre vai de 0% até 100%. Isso é bem simples: vamos criar uma variável no CSS com o valor inicial de 0 e utilizá-la na largura do nosso pseudo-elemento.

Copiar

```css
.progress-bar{
  /* vamos declarar nossa
	variável com o nome de
	"progress". Ela terá seu
	valor entre 0 e 100.
	*/
  --progress: 50;
  height: 50px;
  padding: 5px;
  background-color: #ccc;
  display: flex;
}

.progress-bar::before{
  content: "";
  /* aqui estamos chamando
	nossa variável. Como a
	largura do pseudo-elemento
	estará entre 0% e 100%, temos
	que converter o valor da nossa
	variável em porcentagem. Para
	isso, basta multiplicar por 1%.
	*/
  width: calc(var(--progress) * 1%);
  background-color: red;
}
```

Agora ao alterarmos nossa variável teremos o tamanho do nosso progresso alterado também.

<iframe src="https://jsfiddle.net/xe5an78y/5/embedded/result/dark/" id="JSFEMB_18962" width="100%" height="156" frameborder="0" sandbox="allow-modals allow-forms allow-same-origin allow-scripts allow-popups allow-top-navigation-by-user-activation allow-downloads" allow="midi; geolocation; microphone; camera; display-capture; encrypted-media;" style="box-sizing: inherit; border: 1px solid rgb(59, 59, 59); font: inherit; margin: 0px 0px 20px; padding: 0px; vertical-align: baseline; min-height: 200px;"></iframe>

## Como alterar as cores?

Vamos ver como alterar cores baseadas em um valor. É muito comum utilizarmos nomes das cores, o padrão RGB, onde indicamos um valor de 0 a 255 de vermelho (Red), verde (Green) e azul (Blue) ou o Hexadecimal, onde também indicamos a quantidade de vermelho, verde e azul, mas de 00 até FF (255 em hexadecimal).

Porém, outro modo de se declarar cores, que é menos comum de ser ver sendo utilizado na web, é o HSL. Para isso precisamos conhecer o **círculo cromático**.

![img](https://dkrn4sk0rn31v.cloudfront.net/2018/11/05072157/rgbwheel.png)

O círculo cromático é esse círculo colorido. Lembre-se que o círculo possui 360º. O vermelho está bem em cima, onde consideramos ser o início do círculo. Então podemos indicar cada cor a partir de um ângulo:

- Vermelho: 0º ou 360º
- Amarelo: 60º
- Verde: 120º
- Ciano: 180º
- Azul: 240º
- Magenta: 300º

No HSL nós indicamos as cores a partir de três valores:

- **H(hue - matiz):** uma das propriedades que nos permite diferenciar uma cor da outra. Passamos um número entre 0 e 360 de acordo com o círculo cromático acima.
- **S(saturation - saturação):** indica se a cor é mais brilhante ou fosca. Passamos um valor entre 0% e 100%.
- **L(light - luz):** indica a quantidade de luz na cor. Passamos um valor entre 0% (deixa a cor preta) e 100% (deixa a cor branca).

Então com base nisso podemos deixar o valor de saturação e luz fixos e mudar apenas o valor da matiz.

Como barras de progresso costumam ir do vermelho ao verde, vamos alterar esse valor de 0 até 120.

## Alterando a cor com variáveis

Nossa variável de progresso vai de 0 a 100 e temos que fazer nossa cor ir de 0 até 120. Então basta usarmos regra de três para criar nossa fórmula.

Se quando nossa variável chegar a 100 teremos que ter nossa matiz em 120, então quando nossa variável estiver em 50 vamos querer que nossa matiz seja X:

Copiar

```
100 = 120
50  = x
```

Teremos a seguinte fórmula:

Copiar

```
x = 120 * 50 / 100
```

Simplificando, basta multiplicar 1.2 pelo valor da nossa variável. Então vamos usar a função “hsl()” do CSS com saturação e luz com valores fixos e a matiz sendo calculada por essa nossa fórmula.

Copiar

```css
.progress-bar::before{
  content: "";
  width: calc(var(--progress) * 1%);
  background-color: hsl( calc(var(--progress) * 1.2) , 80%, 50%);
}
```

Agora ao alterarmos nossa variável CSS o progresso e a cor serão alterados juntos.

<iframe src="https://jsfiddle.net/xe5an78y/6/embedded/result/dark/" id="JSFEMB_18962" width="100%" height="156" frameborder="0" sandbox="allow-modals allow-forms allow-same-origin allow-scripts allow-popups allow-top-navigation-by-user-activation allow-downloads" allow="midi; geolocation; microphone; camera; display-capture; encrypted-media;" style="box-sizing: inherit; border: 1px solid rgb(59, 59, 59); font: inherit; margin: 0px 0px 20px; padding: 0px; vertical-align: baseline; min-height: 200px;"></iframe>

Se quiser deixar a barra mais suave, podemos utilizar a propriedade `transition`:

Copiar

```css
.progress-bar::before{
  content: "";
  width: calc(var(--progress) * 1%);
  background-color: hsl( calc(var(--progress) * 1.2) , 80%, 50%);
  transition: all 0.2s ease;
}
}
```

<iframe src="https://jsfiddle.net/xe5an78y/7/embedded/result/dark/" id="JSFEMB_18962" width="100%" height="156" frameborder="0" sandbox="allow-modals allow-forms allow-same-origin allow-scripts allow-popups allow-top-navigation-by-user-activation allow-downloads" allow="midi; geolocation; microphone; camera; display-capture; encrypted-media;" style="box-sizing: inherit; border: 1px solid rgb(59, 59, 59); font: inherit; margin: 0px 0px 20px; padding: 0px; vertical-align: baseline; min-height: 200px;"></iframe>