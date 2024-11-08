let currentImageIndex = 0;
const imageUrls = [
    "https://picsum.photos/id/0/5000/3333",
    "https://picsum.photos/id/1/5000/3333",
    "https://picsum.photos/id/2/5000/3333",
    "https://picsum.photos/id/3/5000/3333",
    "https://picsum.photos/id/4/5000/3333",
    "https://picsum.photos/id/5/5000/3334",
    "https://picsum.photos/id/6/5000/3333",
    "https://picsum.photos/id/7/4728/3168",
    "https://picsum.photos/id/8/5000/3333",
    "https://picsum.photos/id/9/5000/3269",
    "https://picsum.photos/id/10/2500/1667",
    "https://picsum.photos/id/11/2500/1667",
    "https://picsum.photos/id/12/2500/1667",
    "https://picsum.photos/id/13/2500/1667",
    "https://picsum.photos/id/14/2500/1667",
    "https://picsum.photos/id/15/2500/1667",
    "https://picsum.photos/id/16/2500/1667",
    "https://picsum.photos/id/17/2500/1667",
    "https://picsum.photos/id/18/2500/1667",
    "https://picsum.photos/id/19/2500/1667",
    "https://picsum.photos/id/20/3670/2462",
    "https://picsum.photos/id/21/3008/2008",
    "https://picsum.photos/id/22/4434/3729",
    "https://picsum.photos/id/23/3887/4899",
    "https://picsum.photos/id/24/4855/1803",
    "https://picsum.photos/id/25/5000/3333",
    "https://picsum.photos/id/26/4209/2769",
    "https://picsum.photos/id/27/3264/1836",
    "https://picsum.photos/id/28/4928/3264",
    "https://picsum.photos/id/29/4000/2670"
];


function loadImages(count = 4) {
    const gallery = document.getElementById('gallery');
    for (let i = 0; i < count && currentImageIndex < imageUrls.length; i++, currentImageIndex++) {
        const img = document.createElement('img');
        img.src = imageUrls[currentImageIndex];
        gallery.appendChild(img);
    }
}

function loadMoreImages() {
    loadImages();
}

function clearGallery() {
    const gallery = document.getElementById('gallery');
    gallery.innerHTML = '';
    currentImageIndex = 0;  // Reset index to start from the beginning when loading new images
}

function removeLastImage() {
    const gallery = document.getElementById('gallery');
    if (gallery.lastChild) {
        gallery.removeChild(gallery.lastChild);
        currentImageIndex--;
    }
}

function reverseGallery() {
    const gallery = document.getElementById('gallery');
    const images = Array.from(gallery.children);
    gallery.innerHTML = '';
    images.reverse().forEach(img => gallery.appendChild(img));
}

// Завантаження перших 4 зображень при завантаженні сторінки
window.onload = () => loadImages();