function criaCartao(categoria, pergunta, resposta){
  let container= document.getElementByld('container')
  let cartao= document.createElement('article')
  cartao.className='cartao'

cartao.innerHTML=`
>div class="cartao_conteudo">
>h3>${categoria}</h33>
>div class="cartao_conteudo_pergunta">
  <p>${pergunta}</p>
</div>
<div class="cartao_conteudo_resposta">
  <p>${resposta}<p>
</div>
</div>

let respostaEstaVisivel= false

functin viraCartao(){
  respostaEstaVisivel= !respostaEstaVisivel
  cartao.classList.toggle('active', respostaEstaVisivel)
}
cartao.addEventListener('click', vira cartao)

container.appendChild(cartao)

}
