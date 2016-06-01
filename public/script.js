  $( document ).ready(function() {
    $('#submitFile').click(function(){
      var file = $('input[type=file]')[0].files[0];
      console.log(file)
      var data = new FormData();
      data.append("file1", file, "file1")
      
      console.log(data)
      $.ajax({
        url : "/fileanalyse/",
        type: "POST",
        data : data,
        cache: false,
		processData: false,
		contentType: false,
		async : false,
        success: function(data, textStatus, jqXHR)
        {
          alert(JSON.stringify(data))
        },
        error: function (jqXHR, textStatus, errorThrown)
        { 
          alert("fuck")
        }
      });
    });
  });
  
  $(document).on('change', ':file', function(e) {
    var fileName = $('input[type=file]').val().replace(/C:\\fakepath\\/i, '');
    console.log(fileName);
    $('#fileName').text(fileName);
    });