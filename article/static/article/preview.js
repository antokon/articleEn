(function(){

    // var text;
    // var Preview_PAGE = "/article/preview";
    var rText= localStorage.getItem("text");

    function loadText() {
      $("#preview pre").html(rText);
      var d = $('#preview');

//      $("#high");
//     for (var i = 0; i < ("[tweet "+[i+1]"]"); i++) {
//          d.html(d.html().replace("[tweet 1]", "<blockquote class=\"twitter-tweet\"><p lang=\"en\" dir=\"ltr\">Stay safe. Love one another. Life is hard for everyone, so spread peace and happiness.\n" +
//              "                <a href=\"https://twitter.com/hashtag/tweetlove?src=hash&amp;ref_src=twsrc%5Etfw\">#tweetlove</a></p>&mdash; Tweeter (@tweeter)\n" +
//              "                <a href=\"https://twitter.com/tweeter/status/489879052157595649?ref_src=twsrc%5Etfw\">July 17, 2014</a>\n" +
//              "            </blockquote> <script async src=\"https://platform.twitter.com/widgets.js\" charset=\"utf-8\"></script>"));
//          d.html(d.html().replace("[tweet 2]", "<blockquote class=\"twitter-tweet\"><p lang=\"en\" dir=\"ltr\">Stay safe. Love one another. Life is hard for everyone, so spread peace and happiness.\n" +
//              "                <a href=\"https://twitter.com/hashtag/tweetlove?src=hash&amp;ref_src=twsrc%5Etfw\">#tweetlove</a></p>&mdash; Tweeter (@tweeter)\n" +
//              "                <a href=\"https://twitter.com/tweeter/status/489879052157595649?ref_src=twsrc%5Etfw\">July 17, 2014</a>\n" +
//              "            </blockquote> <script async src=\"https://platform.twitter.com/widgets.js\" charset=\"utf-8\"></script>"));
     }





        $('#b-save').click(function () {
            var html = $('#preview').html();
            uriContent = "data:application/octet-stream," + encodeURIComponent( html );
            window.open(uriContent, 'preview.html');
        });



        //
        // var a = document.body.appendChild(
        //         document.createElement("a")
        //     );
        //
        // var querysel = document.querySelector("#wrapper");
        //
        // setTimeout(function () {
        //     a.href = "data:text/plain;charset=utf-8," + encodeURIComponent(document.getElementsByTagName('html')[0].outerHTML);// document.getElementsByTagName('html').innerHTML; //encodeURIComponent(document.documentElement.outerHTML);
        // }, 1000);
        //
        //     setTimeout(function () {
        //         a.download = "preview.html";
        //     }, 2000);







        //     setTimeout(function () {
        //         a.click();
        //     }, 3000);
        //
        // });



    $(function () {
        loadText();

    });

})();