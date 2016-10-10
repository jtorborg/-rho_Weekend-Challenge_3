//GLOBAL VARIABLES//
var math = {};
//JQUERY DOCUMENT OBJECT//
$(document).ready(function() {
//EVENT LISTENER//
$('#calcNumbers').on('submit', function(event) {
    event.preventDefault();
    console.log("this", this);
//use serializeArray() not serialize() they are not the same thing Ryan lies!!!!
    var fields = $('#calcNumbers').serializeArray();
    fields.forEach(function(element, index) {
        math[element.name] = element.value;
    });//end of forEach
    console.log(math);
    $('#calcNumbers').find('input[type=number]').val('');


if(math.operator == 'add') {
$.ajax({
    type: 'POST',
    url: '/calculate/add',
    data: math,
    success: appendDom
});//end of post function
} else if (math.operator == 'subtract') {
  $.ajax({
      type: 'POST',
      url: '/calculate/subtract',
      data: math,
      success: appendDom
  });

} else if (math.operator == 'multiply') {
  $.ajax({
      type: 'POST',
      url: '/calculate/multiply',
      data: math,
      success: appendDom
  });

} else if (math.operator == 'divide') {
  $.ajax({
      type: 'POST',
      url: '/calculate/divide',
      data: math,
      success: appendDom
  });
}
});//end of event listener

function appendDom(response) {
    console.log('server says:', response);
    $('#container').append('<p class = "totalanswer">'+ response + '</p>');
};//end of appendDom function
$("#clearButton").on('click', function () {
//
console.log("clear button works");
     $('.totalanswer').remove();
});
}); //end of Doc Ready function
