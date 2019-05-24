// $('body').css({ 'margin': '0', 'padding': '0' })
// $('body').prepend('<div class = "gallery"></div>');

// var imgLinks = ["images/image-1.jpg", "images/image-2.jpg", "images/image-3.jpg", "images/image-4.jpg", "images/image-5.jpg", "images/image-6.jpg"];

// $(imgLinks).each(function (index, element) {
//     $('.gallery').append('<img>');

// });

// $('img').each(function (index, element) {
//     $(this).attr('src', imgLinks[index]);
//     $(this).css({
//         'width': 800 * Math.random() + 'px'
//     });
// });

// $('body').prepend('<h1></h1>');
// $('h1').text('Amazing Gallery').css({ 'text-align': 'center', 'color': 'brown', 'font-family': 'Arial' });


var imgLinksFirst = ["images/image-1.jpg", "images/image-2.jpg", "images/image-3.jpg"];
var imgLinksSecond = ["images/image-4.jpg", "images/image-5.jpg", "images/image-6.jpg"];

$(imgLinksFirst).each(function () {         //kreirali smo onoliko img tagova koliko ih ima u nizu
    $('.firstGallery').append('<img>');
});

$('img').each(function (index) {
    $(this).attr('src', imgLinksFirst[index]);           //this je svaka slika posebno iz tog niza, attr ubacuje putanju na osnovu indexa iz niza
});






