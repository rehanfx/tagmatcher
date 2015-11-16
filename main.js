$(function () {

  //
  // Data
  //

  function Data() {
    this.name =  "";
    this.age =  "";
    this.gender =  "";
    this.location =  "";
    this.tags= [];
  }

  var data = new Data(),
      match = new Data();
  //
  // Form Events
  //
  $(".js-photo").on("click", function () { $(".js-imagefile").click(); });
  $(".js-imagefile").on("change", function($e) { readURL($e.currentTarget); });
  $("#tagenter").click(enterTag);
  $("#taginput").change(enterTag);
  $("form").submit(function (e) {
    $(".ProfilePage").hide(150);
    $(".MatchedProfile").show(150);
    getMatchedProfile();
    e.preventDefault();
  });
  $(".MatchedProfile .js-again").click(resetForm);
  $(".MatchedProfile .js-like").click(likeMatch)
  //
  //  Page Helper functions
  //
  function setImageUrl($imgHolder, url) {

      $imgHolder.fadeOut(150, function() {
        $imgHolder.empty();
        $("<img />", {
          "src": url,
          "class": "thumb-image"
        }).appendTo($imgHolder);
        $imgHolder.show(150);
      });
  }

  function readURL(input) {
    if (input.files && input.files[0]) {
      var reader = new FileReader();
      var $image = $('.ProfilePage .js-photo');

      reader.onload = function (e) {
        setImageUrl($image, e.target.result)
      };

      reader.readAsDataURL(input.files[0]);
    }
  }

  function enterTag($e) {
    var $taginput = $("#taginput");
    var tag = $taginput.val();
    tag = tag.split(" ").join("_");
    tag = data.tags.indexOf(tag)>=0 ? "" : tag;
    if(tag.length<2) {
      return false;
    }
    tag = tag.charAt(0)==="#" ? tag : "#"+tag;
    data.tags.push(tag);

    $(".tags li:empty").remove();
    $('.tags ul').append($('<li>').append(tag));
    $taginput.attr("autocomplete","off");
    setTimeout(function () {
      $taginput
        .val("")
        .attr("autocomplete","on")
        .removeAttr("placeholder")
        .focus();
    },100);
    return false;
  }

  function submitForm(e) {
    data.name = $("form [name='name']").val();
    data.age = $("form [name='age']").val();
    data.gender = $("form [name='gender']").val();
    data.location = $("form [name='location']").val();
    if(data.tags.length==0)
      return false;

    $.post("http://localhost:3000/profiles/", data, function(d,res) {
      if(res==="success") {
        $("form").trigger("reset");
        data.id = d.id;
      }
    });
    e.preventDefault();
  }

  function getMatchedProfile(e) {
    var ran = Math.round(Math.random()*100);
    $.get("http://localhost:3000/profiles/"+ran, data, function(d,res){
      if(res="success") {
        $(".MatchedProfile [name='name']").text(d.name);
        $(".MatchedProfile [name='age']").text(d.age);
        $(".MatchedProfile [name='gender']").text(d.gender);
        $(".MatchedProfile [name='location']").text(d.location);

        setImageUrl($(".MatchedProfile .js-photo"), d.image+"?t=" + new Date().getTime()) ;

//      $(".MatchedProfile img").attr("src",d.image).show();
        var $ul = $('.MatchedProfile .tags ul')
        $ul.empty();
        d.tags.forEach(function(t) { $ul.append($('<li>').append(t));});

        match = d;
      }
    });
    return false;
  }

  function resetForm() {
    $(".ProfilePage").show(150);
    $(".MatchedProfile").hide(150);
  }

  function likeMatch() {
    Livestax.trigger("likematch", match.id);
  }

});
