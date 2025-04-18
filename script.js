var pointer = document.getElementById('pointer')
var logo = document.getElementsByClassName('logo'); 
document.addEventListener('mousemove', function(event) {
    pointer.style.left = event.pageX - 10 + 'px';
    pointer.style.top = event.pageY - 10 + 'px';
});

document.addEventListener('onmouseover', function(event) {
    pointer.style.display = 'none';
    for (var i = 0; i < logo.length; i++) {
        
    }
}); 