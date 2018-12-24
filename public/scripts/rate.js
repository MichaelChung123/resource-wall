$(document).ready(function() {
    $('.rate').on('click', function(e) {
        const rate = e.target.value;    
        alert(`You rate this article ${rate} Stars!`);
    })
})