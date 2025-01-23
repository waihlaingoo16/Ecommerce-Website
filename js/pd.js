let main_img = document.getElementById('main-img');
let sub_imgs = document.getElementsByClassName('sub-img')

for (let sub_img of sub_imgs){
    sub_img.onclick = function(){
        main_img.src = sub_img.getAttribute('src')
    }

    for (let img of sub_imgs) {
        img.style.objectPosition = "10% 10%"; // Reset others to default
    }
    // sub_img.style.objectPosition = "100% 100%"
}

// function toggleObjectPosition() {
//     let subImages = document.querySelectorAll('#product-detail .sub-images img');
//     subImages.forEach(img => {
//         img.classList.toggle('new-object-position');
//     });
// }

// // Attach the click event to each sub-image
// for (let sub_img of sub_imgs) {
//     sub_img.onclick = function () {
//         main_img.src = sub_img.getAttribute('src');
//         toggleObjectPosition(); // Toggle the class on click
//     }
// }