$(function() {
  $(".progress-element").each(function() {
          var progressBar = $(".progress-bar");
          progressBar.each(function(indx){
              $(this).css("width", $(this).attr("aria-valuenow") + "%");
          });
      });

  $('.thesis-img').click(function(){
    $('#thesis_modal').modal('show');
    $('#thesis-images').attr("src", $(this).attr('src'));
  });
});
