AOS.init({
    once: true
});
$(document).ready(function () {
    $("body").on("click", ".nav-toggle,.nav-close", function () {
        $("body").toggleClass("menu-open");
    });

    $("body").on("click", 'a[href="#"]', function (e) {
        e.preventDefault();
    });

    $('.our-stores .content-block').scroll(function () {
        const currentElement = $(this);
        if (currentElement.scrollTop() > 70) {
            currentElement.addClass('scrolled');
        } else {
            currentElement.removeClass('scrolled');
        }

        const scrollEnd = currentElement[0].scrollHeight - currentElement.outerHeight();
        if (scrollEnd - currentElement.scrollTop() <= 50) {
            $(".our-stores").addClass('reached-end');
        } else {
            $(".our-stores").removeClass('reached-end');
        }
    });
});