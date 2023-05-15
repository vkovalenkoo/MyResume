$(document).ready(function() {
    $('.tech-skills-list').hide()
    $('.tech-skills-item.language').click(function() {
        $(this).children('.tech-skills-list').slideToggle();
        $(this).children('.arrow').toggleClass( 'down' );
    });
});