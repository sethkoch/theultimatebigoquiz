var id = 0;
$('#theButton').click(function(){
   var answer = $('input[name=ans]:checked').val();
   id ++;
   console.log(answer);
   var toSend = {id :answer}
   $.ajax({
    url: '/datain',
    type: 'POST',
    data: JSON.stringify(toSend),
    datatype: 'jsonp'
  });

  $.ajax({
    url: '/retrieve',
    type: 'GET',
    datatype: 'jsonp',
    success: function(result){
      $('#outPutTarget').html(result);
    }
  });
});