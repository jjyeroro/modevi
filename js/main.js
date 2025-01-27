$(function () {
    $('.m2_menu li').click(function () {
        $('.m2_menu li').removeClass('active')
        $(this).addClass('active')
        $('.m2_item>li').hide()
        let select = $(this).index()
        $('.m2_item>li').eq(select).show()
    })
    $('.m2_menu li').eq(0).trigger('click')
    
    $(window).scroll(function () {
        let scrolled = $(window).scrollTop() >= 1
        $('.fixed').toggleClass('down', scrolled)
    })
    $('.main').mouseenter(function () {
        $('.sub,.sub-back').stop().slideDown("fast")
    })
    $('.main').mouseleave(function () {
        $('.sub,.sub-back').stop().slideUp("fast")
    })

    $('.select').click(function (e) {
        e.preventDefault()
        $('.site').toggle()
        $('.btn').toggleClass('on')
    })

    $('.gotopbtn').click(function (e) {
        e.preventDefault()
        $('html, body').animate({
            scrollTop: 0
        }, 500)
    })

    $('.close').click(function () {
        $('.popup').hide()
    })

})

document.addEventListener("DOMContentLoaded", () => {
    const today = new Date().toISOString().split("T")[0];
    const storedDate = localStorage.getItem("popupClosedDate");

    if (storedDate === today) {
        document.getElementById("popup").style.display = "none";
    }
});

function closePopup() {
    const dontShowToday = document.getElementById("ptoday").checked;

    if (dontShowToday) {
        const today = new Date().toISOString().split("T")[0];
        localStorage.setItem("popupClosedDate", today);
    }

    document.getElementById("popup").style.display = "none";
}
