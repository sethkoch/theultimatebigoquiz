var id = 0;
$('#theButton').click(function(){
   var answer = $('input[name=ans]:checked').val();
   id ++;
   console.log(answer);
   var toSend = {id :answer}
   $.ajax({
    url: 'http://127.0.0.1:8080/datain',
    type: 'POST',
    data: JSON.stringify(toSend),
    datatype: 'jsonp'
  });

  $.ajax({
    url: 'http://127.0.0.1:8080/retrieve',
    type: 'GET',
    datatype: 'jsonp',
    success: function(result){
      $('#outPutTarget').html(result);
    }
  });
});