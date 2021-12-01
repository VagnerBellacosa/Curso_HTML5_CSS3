# Html 5 

## Novidades do HTML 5.2
##### Akira Hanashiro

Conheça as novidades do HTML 5.2, suas adições e depreciações.

No final de 2017 o HTML 5.2 se tornou uma recomendação oficial da W3C. Vejamos algumas das novidades.

### Elemento

Uma das principais adições é o elemento <dialog>, que nos permite criar modais de forma nativa no HTML. No momento apenas o Chrome dá suporte a esse elemento.

Por padrão ele fica escondido. Para que ele apareça, basta selecioná-lo com JavaScript e executar o método show();

~~~
<dialog>
  <h1>Olá Web Developers!</h1>
</dialog>

<button id="open">Abrir Modal</button>
<button id="close">Fechar Modal</button>
~~~

~~~
const dialog = document.querySelector("dialog");

document.querySelector("#open").addEventListener("click", () => {  
  dialog.show();
});

document.querySelector("#close").addEventListener("click", () => {  
  dialog.close();
});
~~~

### Usando a API Payment Request a partir de iframes

Antes do HTML 5.2, pagamentos que usassem a API Payment Request não poderiam ser feitos a partir de um iframe embutido em sua página.

Agora os iframes aceitam o atributo allowpaymentrequest, permitindo que a página com iFrame faça uso do serviço.

~~~
<iframe allowpaymentrequest>
~~~

## Funcionalidades depreciadas

Algumas funcionalidades foram consideradas ruins, obsoletas ou foram trocadas por algo melhor.

- elementos keygen, menu e menuitem
- atributo inputmode do e o atributo dropzone
- o método showModalDialog() (como visto acima, agora é apenas show())
- a API Plugin foi marcada como obsoleta

## Práticas que agora são válidas

Há algumas práticas que antes não eram recomendadas, mas que agora elas são consideradas válidas.

[Artigo original](https://www.treinaweb.com.br/blog/novidades-html-5-2)