console.log('script loaded');
let vWidth;
let vHeight;

document.addEventListener("DOMContentLoaded", function() {
    OverlayScrollbars(document.getElementById('html'), { 
    className       : "os-theme-dark theme-container-content",
    sizeAutoCapable : true,
    paddingAbsolute : true, 
    });
});

const bg = document.getElementById('gContainer');

const bg_resize = function () {
    vWidth = window.innerWidth;
    vHeight = window.innerHeight;
    if (vWidth > (vHeight*1.776)) {
        bg.style.width = ((vWidth)+'px');
        bg.style.height = ((vWidth*.562)+'px');
    } else {
        bg.style.width = ((vHeight*1.776)+'px');
        bg.style.height = ((vHeight)+'px');
    }
}

bg_resize();
window.addEventListener('resize', bg_resize);
