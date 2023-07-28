//   Header Banner
let listBanners = [
    "./MEDIA/banner1.jpg",
    "./MEDIA/banner2.jpg",
    "./MEDIA/banner3.avif",
    "./MEDIA/banner4.jpg",
    "./MEDIA/banner5.webp",
    "./MEDIA/banner6.jpg",
    "./MEDIA/banner7.jpg",
    "./MEDIA/banner8.webp",
    "./MEDIA/banner9.jpeg",
    "./MEDIA/banner10.jpg",
];
let count = 0;
let imageInterval = function imageNext() {
    count++;
    document.getElementById("listimg").src = listBanners[count];
    if (count == 9) {
        count = -1;
    }
}
function imageBack() {
    document.getElementById("listimg").src = listBanners[count];
    if (count == 0) {
        count = 10;
    }
    count--;
}
setInterval(() => {
    imageInterval();
}, 4000)


        // renderListImages();
        // function renderListImages(image) {
        //     const listBanner = document.getElementsByClassName("list__banner");
        //     for (let i = 0; i < image.length; i++) {
        //         listBanner[0].innerHTML += `<img class="banner__img" src="${image[i]}" alt="">`
        //     }
        // }
        // renderListImages(listBanners);

