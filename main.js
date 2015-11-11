$(function () {

  function readURL(input) {
    if (input.files && input.files[0]) {
      var reader = new FileReader();

      reader.onload = function (e) {
        $('#yourpicture').attr('src', e.target.result);
      }

      reader.readAsDataURL(input.files[0]);
    }
  }

  $("#imgInp").change(function () {
    readURL(this);
  });

  $("#taginput").on("submit", function (e) {
    $('.tags ul').empty().append(
      $('<li>').append(
        $('<a>').attr('href', '/user/messages').append(
          $('<span>').attr('class', 'tab').append("Message center")
        )));
  });

});