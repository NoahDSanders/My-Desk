console.log('script loaded');

const bg = document.getElementById('gContainer');
let vWidth;
let vHeight;

const bg_resize = function () {
    vWidth = window.innerWidth;
    vHeight = window.innerHeight;
    if (vWidth > (vHeight*1.776)) {
        bg.style.width = ((vWidth-16.5)+'px');
        bg.style.height = ((vWidth*.562)+'px');
    } else {
        bg.style.width = ((vHeight*1.776)+'px');
        bg.style.height = ((vHeight-16.5)+'px');
    }
}

bg_resize();
window.addEventListener('resize', bg_resize);
