document.addEventListener("DOMContentLoaded", function() {
  const botoesAdicionar = document.querySelectorAll(".btn");
  const listaItensCarrinho = document.getElementById("listaItensCarrinho");
  const carrinho = document.querySelector(".itensnocarinho");
  const botaoFinalizarCompra = document.createElement("button");

  // Adiciona o botão "Finalizar Compra" ao carrinho
  botaoFinalizarCompra.innerText = "Finalizar Compra";
  botaoFinalizarCompra.classList.add("botaoFinalizar");
  carrinho.appendChild(botaoFinalizarCompra);

  // Estiliza o botão de finalizar compra
  botaoFinalizarCompra.style.alignItems = "center";
  botaoFinalizarCompra.style.backgroundColor = "#4CAF50";
  botaoFinalizarCompra.style.textAlign = "center";
  botaoFinalizarCompra.style.margin = "0";
  botaoFinalizarCompra.style.color = "white";
  botaoFinalizarCompra.style.padding = "10px 20px";
  botaoFinalizarCompra.style.border = "none";
  botaoFinalizarCompra.style.borderRadius = "5px";
  botaoFinalizarCompra.style.cursor = "pointer";
  botaoFinalizarCompra.style.display = "none"; // Inicialmente oculto

  // Evento ao clicar no botão "Finalizar Compra"
  botaoFinalizarCompra.addEventListener("click", function() {
    alert("Compras Realizadas com Sucesso!!");
  });

  // Evento ao clicar nos botões de adicionar itens ao carrinho
  botoesAdicionar.forEach(function(botao) {
    botao.addEventListener("click", function() {
      const produto = botao.parentElement;
      const nomeProduto = produto.querySelector(".nomeproduto").innerText;
      const precoProduto = parseFloat(produto.querySelector(".precoproduto").innerText);
      const quantidade = parseInt(produto.querySelector(".quantidade").value);
      const imagemProduto = produto.querySelector(".imgs").src;
      calcularSubtotal();
      atualizarContadorItens()
      // Criar um novo item de lista para o carrinho
      const novoItemCarrinho = document.createElement("li");
      novoItemCarrinho.innerText = nomeProduto + " - " + "R$:" + precoProduto + " x " + quantidade ;
      const imagemProdutoElement = document.createElement("img");
      imagemProdutoElement.src = imagemProduto; // Define a URL da imagem do produto
      novoItemCarrinho.appendChild(imagemProdutoElement); 



      // Adicionar o novo item à lista de itens no carrinho
      listaItensCarrinho.appendChild(novoItemCarrinho);

      // Atualiza o subtotal
      calcularSubtotal();

      // Atualiza contador de itens no carrinho
      atualizarContadorItens();
    });
  });

  // Exibe ou oculta o carrinho ao clicar no botão correspondente
  const imagemCarinho = document.querySelector(".butaocarrinho");
  imagemCarinho.addEventListener("click", function() {
    carrinho.style.display = carrinho.style.display === "none" ? "block" : "none";
    document.querySelector('.resumo-carrinho').style.display = 'block'; // Mostra o resumo do carrinho ao clicar no carrinho
    calcularSubtotal(); // Recalcula o subtotal ao exibir o carrinho
  });

  // Evento ao clicar nos botões de adicionar itens ao carrinho
  botoesAdicionar.forEach(function(botao) {
    botao.addEventListener("click", function() {
      const produto = botao.parentElement.parentElement; // Ajustado para encontrar o elemento pai correto
      // Restante do código para adicionar itens ao carrinho
    });
  });

  // Função para calcular o subtotal
  function calcularSubtotal() {
    let subtotal = 0;
    const itensNoCarrinho = document.querySelectorAll("#listaItensCarrinho li");

    itensNoCarrinho.forEach(function(item) {
      const precoQuantidade = item.innerText.match(/R\$:([\d.]+) x (\d+)/);
      const preco = parseFloat(precoQuantidade[1]);
      const quantidade = parseInt(precoQuantidade[2]);
      subtotal += preco * quantidade;
    });

    document.getElementById("subtotal").innerText = "Subtotal: R$" + subtotal.toFixed(2);
    // Mostra o botão "Finalizar Compra" apenas se houver itens no carrinho
    botaoFinalizarCompra.style.display = subtotal > 0 ? "block" : "none";
  }

  // Função para atualizar o contador de itens no carrinho
  function atualizarContadorItens() {
    const contadorItens = document.querySelector(".contadordeitens");
    const itensNoCarrinho = document.querySelectorAll("#listaItensCarrinho li");
    contadorItens.innerText = itensNoCarrinho.length;
  }
});

const botoesComprar = document.querySelectorAll('.btn');

  botoesComprar.forEach(function(botao){
    botao.addEventListener('click', function(){
      const mensagem = document.querySelector('.aba');
      mensagem.style.display = 'block';
    });
  });

  function fecharAba() {
    const mensagem = document.querySelector('.aba');
    mensagem.style.display = 'none';
}

const botaozinho = document.querySelectorAll('.botao');

    botaozinho.forEach(function(botao){
    botao.addEventListener('click', function(){
      const mensagem = document.querySelector('.aba');
      mensagem.style.display = 'block';
    });
  });

  function fecharAba() {
    const mensagem = document.querySelector('.aba');
    mensagem.style.display = 'none';
}
