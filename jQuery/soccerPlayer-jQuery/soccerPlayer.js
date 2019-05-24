// var field = document.querySelector('.field');
// var player = document.querySelector('.player img');
// var stop = document.querySelector('.submit input');

// function getClickCoordinates(event) {
//     player.style.left = event.clientX + 'px';
//     player.style.top = event.clientY + 'px';
// }

// function removeCoordinates(event) {
//     player.style.left = '0px'; // obrisati ovaj deo koda ako je stop.Propagation()
//     player.style.top = '0px'; // obrisati ovaj deo koda ako je stop.Propagation()
//     field.removeEventListener('click', getClickCoordinates);
//     // event.stopPropagation();
// }

// field.addEventListener('click', getClickCoordinates);
// stop.addEventListener('click', removeCoordinates);


$('.field').on('click', function (event) {                       //kada se desi klik offsetX i offsetY kupi kordinate klika i dodeljuje ih poziciji player-a
    $('.player img').css('left', event.offsetX + 'px');
    $('.player img').css('top', event.offsetY + 'px');
});

$('.submit input').on('click', function (event) {
    $('.field').off('click');                      // gasimo klik sa field-a kada se klikne button
    event.stopPropagation();
});
