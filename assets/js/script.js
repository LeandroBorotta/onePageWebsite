function showMenu(){
    let menu = document.querySelector('.mobile-menu')

    if(menu.classList.contains('open')){
        menu.classList.remove('open')
        document.querySelector('.mobile-menu-img img').src = 'assets/images/menu.png'
    } else{
        menu.classList.add('open')
        document.querySelector('.mobile-menu-img img').src = 'assets/images/close.png'
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

function changeSlider(){
    const checked = document.querySelectorAll('.bar')

    checked.forEach(checar =>{
        checar.addEventListener('click' ,()=>{
         const checkedButton = document.querySelector(".checked");
         checkedButton.classList.remove("checked");
         checar.classList.add('checked') 

         if(document.querySelector('#bar1').classList.contains('checked')){
            document.querySelector('.places-slider').style.marginLeft = '200%'
        } else if(document.querySelector('#bar2').classList.contains('checked')){
            document.querySelector('.places-slider').style.marginLeft = '0%'
        } else if(document.querySelector('#bar3').classList.contains('checked')){
            document.querySelector('.places-slider').style.marginLeft = '-200%'
        } 
        })
    })
   
 }

changeSlider()


