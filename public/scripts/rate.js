$(document).ready(function() {
    $('.rate').on('click', function(e) {
        const rate = e.target.value;    
        alert(`You rate this article ${rate} Stars!`);
    })
    $.ajax({
        method: "GET",
        url: "/api/ratings"
      }).done((result) => {
        let rate = Math.round(result[0].avg);
        $('<div>').text(rate).appendTo('.avg-rate')   
    })
})