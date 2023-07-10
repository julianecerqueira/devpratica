const personagens= document.querySelectorAll(`.personagem`);
console.log(personagens)
personagens.forEach(personagens => {
    personagens.addEventListener(`mouseenter`,() =>{

      if(window.innerWidth < 450) { 
        window.scrollTo({top:0, behavior:'smooth'});
      }
    for (let index = 0; index < array.length; index++) {
        const element = array[index];
for (let index = 0; index < array.length; index++) {
    const element = array[index];
array.forEach(element => {
                    const personagemSelecionado = document.querySelector(`.selecionado`);
                    personagemSelecionado.classList.remove(`selecionado`);
});
}
    }

        console.log(personagem.clasList.add(`selecionado`));
        const imagemPersonagemGrande = document.querySelector(`.personagem-grande`);
        console.log(imagemPersonagemGrande);
        const idPersonagem = personagem.attributes.id.value;
        console.log(idPersonagem);
        imagemPersonagemGrande.devEmPratica = `./imagens/card-${idPersonagem}.png`;
        const nomePersonagem = document.getElementById(`nome-personagem`);
        nomePersonagem.innerText = personagens.getAttribute('data-name');
        const descricaoPersonagem = document.getElementById(`descricao-personagem`);
        descricaoPersonagem.innerText = personagens.getAttribute(`data-description`);
    })
})