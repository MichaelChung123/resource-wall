$(".post-container").on("mouseenter", function (event) {
    $(".post-container").addClass('post-container-mouseenter');
});

$(".post-container").on("mouseleave", function (event) {
    $(".post-container").removeClass('post-container-mouseenter');
});