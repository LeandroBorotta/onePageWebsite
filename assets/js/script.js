function showMenu(){
    let menu = document.querySelector('.mobile-menu')

    if(menu.classList.contains('open')){
        menu.classList.remove('open')
        document.querySelector('.mobile-menu-img img').src = '/assets/images/menu.png'
    } else{
        menu.classList.add('open')
        document.querySelector('.mobile-menu-img img').src = '/assets/images/close.png'
    }
    
}

function readMore(){
    let pMore = document.querySelector('.read')

    if(pMore.classList.contains('readVisible')){
        pMore.classList.remove('readVisible')
    } else{
        pMore.classList.add('readVisible')
    }
    console.log(pMore)
}
