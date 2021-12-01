

/**
 * Cria o objeto "Desenhavel" que será a classe base para
 * todos os objetos desenháveis do jogo. Define também as variáveis padrão
 * que todos os objetos filhos herdarão, assim como as funções padrão.
 */
function Desenhavel() {
       this.velocidade = 0;
       this.larguraCanvas = 0;
       this.alturaCanvas = 0;

       // Define uma função abastrata para ser sobrescrita nos objetos filho
       this.desenhar = function() {
       };

       this.iniciar = function(x, y) {
             // Variáveis padrão do eixo cartesiano
             this.x = x;
             this.y = y;
       }
}

/**
 * Define um objeto para manter todas as nossas imagens do jogo para
 * evitar que elas sejam criadas mais de uma vez.
 */
var repositorio = new function() {
       this.planofundo = new Image();

       // Configura os caminhos (src) das imagens
       this.planofundo.src = "img/pf.png";
}

/**
 * Cria o objeto PlanoFundo que se tornará um filho do
 * objeto Desenhavel. O plano de fundo será desenhado nesse objeto
 * e criará a ilusão de movimento ao deslocar a imagem.
 */
function PlanoFundo() {
       this.velocidade = 1; // Redefine a velocidade do plano de fundo para pintura

       // Implementa a função abstrata
       this.desenhar = function() {
             // Pinta o plano de fundo
             this.x -= this.velocidade;
             this.context.drawImage(repositorio.planofundo, this.x, this.y);

             // Desenha outra imagem na borda superior da primeira imagem
             this.context.drawImage(repositorio.planofundo, this.x + this.larguraCanvas, this.y);

             // Se a imagem for deslocada para fora da tela, redefine-a
             if (Math.abs(this.x) >= this.larguraCanvas)
                    this.x = 0;
       };
}
// Define o PlanoFundo como herdeiro das propriedades de Desenhavel
Plano ...


