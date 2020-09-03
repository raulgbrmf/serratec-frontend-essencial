window.onload = produtoListado;
var produtos=[
    {nome:"Camisa clube do Remo",imagem:"img/produtos/CamisaRemo.jpg",preco:"10000.00"

    },
    {
        nome:"Camisa do Ibis",imagem:"img/produtos/CamisaIbis.jpeg",preco:"200.00"
    },
    {
        nome:"Camisa do Flamengo",imagem:"img/produtos/CamisaFlamengo.jpg",preco:"0.01"
    },
    {
        nome:"Camisa do Fluminense",imagem:"img/produtos/CamisaFluminense.jpg",preco:"34.00"
    },
    {
        nome:"Camisa do Vasco",imagem:"img/produtos/CamisaVasco.jpg",preco:"250.99"
    },
    {
        nome:"Camisa do BotaFogo",imagem:"img/produtos/CamisaBotafogo.jpg",preco:"300.99"
    },
    {
        nome:"Camisa do Santos",imagem:"img/produtos/CamisaSantos.jpg",preco:"150.99"
    },
    {
        nome:"Camisa do Palmeiras",imagem:"img/produtos/CamisaPalmeiras.jpg",preco:"30.99"
    },
    {
        nome:"Camisa do Corinthians",imagem:"img/produtos/CamisaCorinthians.jpg",preco:"0.50"
    },
    {
        nome:"Camisa do São Paulo",imagem:"img/produtos/CamisaSaoPaulo.jpg",preco:"99.99"
    },
    
   
];



function produtoListado() {
    for(i=0;i<produtos.length;i++){
    var div = document.createElement("div");
    div.className = "container-produto";
    

    var outradiv = document.createElement("div");
    outradiv.className = "outdiv";

    var img=document.createElement("img");
    img.className="img_camisav";
    

    var nome=document.createTextNode(produtos[i].nome);
    img.src=produtos[i].imagem;
    var preco=document.createTextNode(" R$"+produtos[i].preco);
    var span = document.createElement("span");
    span.className = "produto_preco";
    span.appendChild(preco);
   
   
    outradiv.appendChild(div);
    div.appendChild(img);
    div.appendChild(nome);
    div.appendChild(span);

    var divAtual = document.getElementById("lista-produtos");
    
    divAtual.appendChild(outradiv);}
   
}
