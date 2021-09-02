### Colocar estilo no input range.



\- [fevereiro 14, 2018](https://desenvolvedor-web.blogspot.com/2018/02/colocar-estilo-no-input-ranger.html)



## Estilo no Range.

[![img](https://2.bp.blogspot.com/-jTMC0s_tRoA/WoTOtDNlcLI/AAAAAAAAAog/REhP2DvoyPIcC7hhfCFTf6WbZBNv9mebwCLcBGAs/s400/GHCAS.gif)](https://2.bp.blogspot.com/-jTMC0s_tRoA/WoTOtDNlcLI/AAAAAAAAAog/REhP2DvoyPIcC7hhfCFTf6WbZBNv9mebwCLcBGAs/s1600/GHCAS.gif)


Criar um estilo no input tipo range é simples, vamos criar uma class chamada de ".estilo" com esta class vamos edita o background e também a bolinha que se movimenta.

Antes de inciar o estilo será necessário criar o **HTML**.



<input type="range" min="0" max="100" value="50" class="estilo" id="valor">

 <br>

 <p id="resultado">.</p>

No final vamos usar o ID resultado para informar o valor.



### Criando o estilo CSS

Primeiro o estilo do background.

Aqui você vai manter o width como 100%, mas pode alterar o height e o border.

.estilo {
  -webkit-appearance: none;
  background: #d3d3d3;
  outline: none;
  width: 100%;
  height: 20px;
  border-radius: 9px;  
}



Segunda parte criar a estilo da bolinha.



.estilo::-webkit-slider-thumb {
  -webkit-appearance: none;
  appearance: none;
  width: 25px;
  height: 25px;
  border-radius: 50%; 

  background: #2796ee;
  cursor: pointer;
}

.estilo::-moz-range-thumb {
  width: 25px;
  height: 25px;
  border-radius: 50%; 

  background: #2796ee;
  cursor: pointer;
}

Observer que o **width** e **height** da bolinha são **5px** maior que a altura do **background** do estilo anterior, isso permite o efeito de ser projetado para fora.
Caso não queira um circulo retire o **border-radius** para ficar quadrado.

Como falei é bem simples e não tem muito oque ser feito, se você pretende criar sombra, opacidade e outros basta acrescentar dentro da class estilo.



### Mostrar o valor do Range.

Para atualizar o valor é usado um evento change, que vai ativar um função simples que busca o valor do ID "valor" e imprime no paragrafo com o ID "resultado".



<script type="text/javascript">function range(){ let resultado = document.getElementById("resultado"); let valor = document.getElementById("valor").value; resultado.innerHTML = valor}range()document.addEventListener("change", range); </script>


Exemplo.





14