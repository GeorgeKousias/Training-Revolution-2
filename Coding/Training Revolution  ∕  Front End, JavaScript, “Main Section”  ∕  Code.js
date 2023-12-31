// ---------------------------------------- STRUCTURE: 1 INCLUSIVE ----------------------------------------


// ---------------------------------------- STRUCTURE: 2 INTERACTIONS ----------------------------------------


// ---------------------------------------- STRUCTURE: 2.1 TOP INTERACTION ----------------------------------------


// ---------------------------------------- STRUCTURE: 2.2 LEFT INTERACTION ----------------------------------------
$(document).ready(function () {

    // ____________________________________ STRUCTURE: 2.2.1 LEFT INTERACTION HOVER TOGGLE ____________________________________
    $('#left-space-grid-1, #left-space-grid-2, #left-space-grid-4').hover(function () {
        $('#left-interaction').addClass('active')
    });

    $('#central-space').click(function () {
        $('#left-interaction').removeClass('active')
    });

    // $('#left-interaction').mouseleave(function () {
    //     $('#left-interaction').removeClass('active')
    // });

    // ____________________________________ STRUCTURE: 2.2.2 LEFT INTERACTION BUTTON TOGGLE ____________________________________
    $('#left-interaction-toggle-button').click(function () {
        $('#left-interaction').toggleClass('active')
    });

    $('#left-interaction-close-button').click(function () {
        $('#left-interaction').removeClass('active')
    });

    // ____________________________________ STRUCTURE: 2.2.3 LEFT INTERACTION FILTER SUBMENUS TOGGLE ____________________________________
    $('.filter-handles-container').click(function () {
        $(this).next('.filter-submenus').slideToggle('fast');
        $(this).find('.dropdown-chevrons').toggleClass('rotate');
    })
});

// ---------------------------------------- STRUCTURE: 2.3 RIGHT INTERACTION ----------------------------------------
$(document).ready(function () {

    // ____________________________________ STRUCTURE: 2.2.1 RIGHT INTERACTION HOVER TOGGLE ____________________________________
    $('#right-space-grid-1, #right-space-grid-2, #right-space-grid-4').hover(function () {
        $('#right-interaction').addClass('active')
    });

    $('#central-space').click(function () {
        $('#right-interaction').removeClass('active')
    });

    // $('#right-interaction').mouseleave(function () {
    //     $('#right-interaction').removeClass('active')
    // });

    // ____________________________________ STRUCTURE: 2.2.2 RIGHT INTERACTION BUTTON TOGGLE ____________________________________
    $('#right-interaction-toggle-button').click(function () {
        $('#right-interaction').toggleClass('active')
    });

    $('#right-interaction-close-button').click(function () {
        $('#right-interaction').removeClass('active')
    });
});

// $("#right-interaction").get(0).style.setProperty("display", "none");
// $("#right-interaction").get(0).style.setProperty("visibility", "hidden");
// $('#right-interaction').fadeIn(600, linear);
// $('#right-interaction').fadeOut(600, linear)

// ---------------------------------------- STRUCTURE: 2.4 BOTTOM INTERACTION ----------------------------------------

