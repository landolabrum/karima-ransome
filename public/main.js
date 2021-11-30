let formatPhoneNumber = (str) => {
  //Filter only numbers from the input
  let cleaned = ('' + str).replace(/\D/g, '');
  
  //Check if the input is of correct length
  let match = cleaned.match(/^(\d{3})(\d{3})(\d{4})$/);

  if (match) {
    return '(' + match[1] + ') ' + match[2] + '-' + match[3]
  };

  return null
};

$(document).ready(function(){
    $('.sidenav').sidenav();
    $(".modal").modal();
    var Tel = $('#tel');
    var New=formatPhoneNumber(Tel.text());
    
    Tel.text(New)
      
    
  });
