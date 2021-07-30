$(window).scroll(function (event) {
    const pixel = $(document).scrollTop();

    if (pixel > 350) {
        $(".card").css("animation-play-state", "unset")
    }
})