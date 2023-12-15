' use strict '

const title = document.getElementById('title')

const title_text = document.getElementById('title_text')

const text_title = document.getElementById('title_textLabel')
text_title.textContent="Pizza peperoni com queijo"

const price = document.getElementById('price')
let valor = "19,65"
price.textContent="R$ "+valor

const title_img = document.getElementById('title_img')


const img_coracao = document.getElementById('coracao')
// img_coracao.classList.add('apagar')


const description = document.getElementById('description')
description.textContent="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."


const infoComentarios = [
    {
        nome: "Gabrielle Bueno",
        titulo: "Pizza muito boa!",
        descricao: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et.",
        data: "15/03/2022",
        foto: "./img/Ellipse 7.svg"
    },
    {
        nome: "Julia Mendes",
        titulo: "Essa pizza é demais, recomendo.",
        descricao: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et.",
        data: "21/05/2022",
        foto: "./img/Ellipse 8.svg"
    },

]
function criarComentario(infoComentarios) {

    const container = document.getElementById('comentarios__cards')

    const comentario = document.createElement('div')
    comentario.classList.add('comentario')
    
    const comentario__header = document.createElement('div')
    comentario__header.classList.add('comentario__header')
    
    const comentario__header__info = document.createElement('div')
    comentario__header__info.classList.add('comentario__header__info')
    
    
    const foto_usuario = document.createElement('img')
    foto_usuario.classList.add('foto_usuario')
    foto_usuario.src=infoComentarios.foto
    
    
    const comentario__nome = document.createElement('div')
    comentario__nome.classList.add('comentario__nome')
    
    
    const nome_usuario = document.createElement('label')
    nome_usuario.classList.add('nome_usuario')
    nome_usuario.textContent = infoComentarios.nome

    
    const data_comentario = document.createElement('label')
    data_comentario.classList.add('data_comentario')
    data_comentario.textContent = infoComentarios.data

    const starsUsuario = document.createElement('div')

    const starsUsuario1 = document.createElement('img')

    let estrelaImagem = "./img/Star rate.svg"
    starsUsuario1.classList.add('star')
    starsUsuario1.src = estrelaImagem

    
    const starsUsuario2 = document.createElement('img')
    starsUsuario2.classList.add('star')
    starsUsuario2.src = estrelaImagem
    
    
    const starsUsuario3 = document.createElement('img')
    starsUsuario3.classList.add('star')
    starsUsuario3.src = estrelaImagem

    
    const comentario__content = document.createElement('div')
    comentario__content.classList.add('comentario__content')
    
    
    const comentario__title = document.createElement('label')
    comentario__title.classList.add('comentario__title')
    comentario__title.textContent=infoComentarios.titulo
    
    const comentario__text = document.createElement('label')
    comentario__text.classList.add('comentario__text')
    comentario__text.textContent=infoComentarios.descricao

    comentario__nome.replaceChildren(nome_usuario,data_comentario)
    comentario__header__info.replaceChildren(foto_usuario,comentario__nome)
    comentario__content.replaceChildren(comentario__title,comentario__text)
    starsUsuario.replaceChildren(starsUsuario1,starsUsuario2,starsUsuario3)
    comentario__header.replaceChildren(comentario__header__info,starsUsuario)
    comentario.replaceChildren(comentario__header,comentario__content)
    container.appendChild(comentario)
}
infoComentarios.forEach(criarComentario)



const estrelas = document.getElementById('estrelas')


const star1 = document.getElementById('star1')


const star2 = document.getElementById('star2')


const star3 = document.getElementById('star3')


const star4 = document.getElementById('star4')


const comentarios = document.getElementById('comentarios')


const comentarios__header = document.getElementById('comentarios__header')

const chat = document.getElementById('chatImg')


const label_comentarios = document.getElementById('labelComentario')


const comentarios__cards = document.getElementById('comentarios__cards')



const comentario2 = document.createElement('div')
comentario2.classList.add('comentario2')


const comentario__header2 = document.createElement('div')
comentario__header2.classList.add('comentario__header2')


const comentario__header__info2 = document.createElement('div')
comentario__header__info2.classList.add('comentario__header__info2')


const foto_usuario2 = document.createElement('img')
foto_usuario2.classList.add('foto_usuario2')


const comentario__nome2 = document.createElement('div')
comentario__nome2.classList.add('comentario__nome2')


const nome_usuario2 = document.createElement('label')
nome_usuario2.classList.add('nome_usuario2')


const data_comentario2 = document.createElement('label')
data_comentario2.classList.add('data_comentario2')


const star8 = document.createElement('img')
star8.classList.add('star8')


const star9 = document.createElement('img')
star9.classList.add('star9')


const star10 = document.createElement('img')
star10.classList.add('star10')


const star11 = document.createElement('img')
star11.classList.add('star11')


const comentario__content2 = document.createElement('div')
comentario__content2.classList.add('comentario__content2')


const comentario__title2 = document.createElement('label')
comentario__title2.classList.add('comentario__title2')


const comentario__text2 = document.createElement('label')
comentario__text2.classList.add('comentario__text2')