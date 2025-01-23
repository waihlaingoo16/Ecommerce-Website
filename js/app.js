// SEARCH INPUT CHANGE JS
let search_input = document.getElementById('search-input');
let icon_items = document.getElementsByClassName('icon-item');

search_input.onclick = function() {
    for(let icon of icon_items){
        icon.style.display = 'none'
    }
    this.style.width = '100%'
    this.style.marginLeft = '0'
}
search_input.onblur = function() {
    for(let icon of icon_items){
        icon.style.display = 'block'
    }
    this.style.width = '65px'
}

// NAVBAR-BG CHANGE JS
let nav = document.getElementById('nav')
window.onscroll = function(){
    if(window.scrollY>450){
        nav.classList.add('bg')
    }else{
        nav.classList.remove('bg')
    }
}

// HAMBARGAR JS
let hambargar = document.getElementById('hambargar');
let navbar_menu = document.getElementById('navbar-menu');

hambargar.onclick = function() {
     navbar_menu.classList.toggle('active');

     if(hambargar.innerHTML == '<i class="fa-solid fa-bars"></i>'){
        hambargar.innerHTML = '<i class="fa-solid fa-xmark"></i>'
     }else{
        hambargar.innerHTML = '<i class="fa-solid fa-bars"></i>'
     }
};

// SLIDER NEXT-BTN JS
let next_btn = document.getElementById('next-btn');
let prev_btn = document.getElementById('prev-btn')
let sliders = document.getElementsByClassName('slider');
let slider_no = 1;

next_btn.onclick = next
prev_btn.onclick = prev

setInterval(next, 3000)
function next(){
    document.getElementById('slider' + slider_no).classList.remove('active')
    slider_no++;
    if(slider_no > sliders.length){
        slider_no = 1
    }
    document.getElementById('slider' + slider_no).classList.add('active')
       
}


function prev(){
    document.getElementById('slider' + slider_no).classList.remove('active')
    slider_no--;
    if(slider_no < 1){
        slider_no = sliders.length
    }
    document.getElementById('slider' + slider_no).classList.add('active')
}


// POPULAR PRODUCTS FILLTER JS
let all_btn = document.getElementById('all-btn');
let cloth_btn = document.getElementById('cloth-btn');
let shoe_btn = document.getElementById('shoe-btn');
let watch_btn = document.getElementById('watch-btn');

let cloth_cards = document.getElementsByClassName('cloth')
let shoe_cards = document.getElementsByClassName('shoe')
let watch_cards = document.getElementsByClassName('watch')

all_btn.onclick =function(){
    for (let cloth_card of cloth_cards){
        cloth_card.style.display = 'block'
    }
    for(let shoe_card of shoe_cards){
        shoe_card.style.display = 'block'
    }
    for(let watch_card of watch_cards){
        watch_card.style.display = 'block'
    }

    all_btn.classList.add('active')
    cloth_btn.classList.remove('active')
    shoe_btn.classList.remove('active')
    watch_btn.classList.remove('active')
}

cloth_btn.onclick =function(){
    for (let cloth_card of cloth_cards){
        cloth_card.style.display = 'block'
    }
    for(let shoe_card of shoe_cards){
        shoe_card.style.display = 'none'
    }
    for(let watch_card of watch_cards){
        watch_card.style.display = 'none'
    }

    all_btn.classList.remove('active')
    cloth_btn.classList.add('active')
    shoe_btn.classList.remove('active')
    watch_btn.classList.remove('active')
}

shoe_btn.onclick=function(){
    for (let shoe_card of shoe_cards){
        shoe_card.style.display = 'block'
    }
    for (let cloth_card of cloth_cards){
        cloth_card.style.display = 'none'
    }
    for (let watch_card of watch_cards){
        watch_card.style.display = 'none'
    }

    all_btn.classList.remove('active')
    cloth_btn.classList.remove('active')
    shoe_btn.classList.add('active')
    watch_btn.classList.remove('active')
}

watch_btn.onclick=function(){
    for(let watch_card of watch_cards){
        watch_card.style.display = 'block'
    }
    for(let cloth_card of cloth_cards){
        cloth_card.style.display='none'
    }
    for(let shoe_card of shoe_cards){
        shoe_card.style.display='none'
    }

    all_btn.classList.remove('active')
    cloth_btn.classList.remove('active')
    shoe_btn.classList.remove('active')
    watch_btn.classList.add('active')
}