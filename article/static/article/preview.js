(function(){

    // var text;
    // var Preview_PAGE = "/article/preview";
    var rText= localStorage.getItem("text");
  function loadText() {
      $("#preview").html(rText);
      var d = $('#preview');

     // for (var i = 0; i < ("tweet"+[i+1]); i++) {
          d.html(d.html().replace("tweet 1", "<blockquote id=\"twitter1\" class=\"twitter-tweet\"> <p id=\"1\" lang=\"en\" dir=\"ltr\">Treat people with love and respect. Treat them as you would be treated. It&#39;s a hard world out there, don&#39;t make it harder\n" +
              "                <a href=\"https://twitter.com/hashtag/love?src=hash&amp;ref_src=twsrc%5Etfw\">#love</a> <a href=\"https://twitter.com/hashtag/respect?src=hash&amp;ref_src=twsrc%5Etfw\">#respect</a></p>\n" +
              "                &mdash; Tweeter (@tweeter) <a href=\"https://twitter.com/tweeter/status/606304741723770882?ref_src=twsrc%5Etfw\">June 4, 2015</a></blockquote>\n" +
              "            <script async src=\"https://platform.twitter.com/widgets.js\" charset=\"utf-8\"></script>"));
          d.html(d.html().replace("tweet 2", "<blockquote class=\"twitter-tweet\"><p lang=\"en\" dir=\"ltr\">Stay safe. Love one another. Life is hard for everyone, so spread peace and happiness.\n" +
              "                <a href=\"https://twitter.com/hashtag/tweetlove?src=hash&amp;ref_src=twsrc%5Etfw\">#tweetlove</a></p>&mdash; Tweeter (@tweeter)\n" +
              "                <a href=\"https://twitter.com/tweeter/status/489879052157595649?ref_src=twsrc%5Etfw\">July 17, 2014</a>\n" +
              "            </blockquote> <script async src=\"https://platform.twitter.com/widgets.js\" charset=\"utf-8\"></script>"));
     // }
  }

    // $("#b-export").click(function (){
    //     var text = $("#textReview").val().trim();
    //     text = text.replace(/\n/g, "\r\n");
    //     var blob = new Blob([text], { type: "text/plain"});
    //     var anchor = document.createElement("a");
    //     anchor.download = "my-filename.html";
    //     anchor.href = window.URL.createObjectURL(blob);
    //     anchor.target ="_blank";
    //     anchor.style.display = "none"; // just to be safe!
    //     document.body.appendChild(anchor);
    //     anchor.click();
    //     document.body.removeChild(anchor);
    // });

    $("#b-save").click(function (e){
        // var a = document.body.appendChild(
        //     document.createElement("a")
        // );
        // a.download = "export.html";
        // a.href = "data:text/html," + document.getElementById("wrapper");
        // a.click();
        var html = $("#wrapper").html();

            var blob = new Blob([html], { type: "text/html"});
            var anchor = document.createElement("a");
            anchor.download = "my-file.html";
            anchor.href = window.URL.createObjectURL(blob);
            anchor.target ="_blank";
            anchor.style.display = "none"; // just to be safe!
            document.body.appendChild(anchor);
            anchor.click();
            document.body.removeChild(anchor);
        // var MIME_TYPE = "text/html";
        //
        // var blob = new Blob([data], {type: MIME_TYPE});
        // window.location.href = window.URL.createObjectURL(blob);
    });
    // function ShowText(){
    //      }
    // $(function () {
    //     ShowText();
    //     //showData();
    // });
    $(function () {
        loadText();
    });

})();