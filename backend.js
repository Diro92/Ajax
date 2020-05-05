import "requestEnglish.js";

var source;
var method;
$('.dropdown').click(function(){
  $('.dropdown-menu').toggleClass('show');
});
$('#Menu a').on('click', function(){
     source = $(this).html();   $('#Options').text(source);
});

//----------------------------------------------------------//
$("#See").click(function(){
    a= $("#About").val();
    alert(a);

    switch(source){

    case "English":

          RequestEnglish(url,method,a)


    break;
    case "German":

    break;
    case "Russian":

    break;
    case "Portuguese":

    break;
    case "French":

    break;


   }
}
)











//-------------------------------------------------------------------//





