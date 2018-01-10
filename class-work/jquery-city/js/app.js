// 1. Create .click() handlers for each of the thumbnails: #first, #second, #third, #fourth
// 2. Use .attr() to change the `src` attribute of #bigimage to correspond to image that was clicked



/*$('#first').click(cityOne);

function cityOne() {
 $('#bigimage').attr('src', 'img/1.jpg')
}

$('#second').click(cityTwo);

function cityTwo() {
 $('#bigimage').attr('src', 'img/2.jpg')
}

$('#third').click(cityThree);

function cityThree() {
 $('#bigimage').attr('src', 'img/3.jpg')
}

$('#fourth').click(cityFour);

function cityFour() {
 $('#bigimage').attr('src', 'img/4.jpg')
}
*/


$('.thumb').click(changeImage);

function changeImage () {

	var imageUrl = $(this).attr('src');
  $('#bigimage').attr('src', imageUrl);
}
