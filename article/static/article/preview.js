(function(){

    // var text;
    // var Preview_PAGE = "/article/preview";
    var rText= localStorage.getItem("text");

    function loadText() {
      $("#preview pre").html(rText);
      var d = $('#preview');


     // for (var i = 0; i < ("tweet"+[i+1]); i++) {

          d.html(d.html().replace("[tweet 1]","<blockquote class=\"twitter-tweet\" data-lang=\"en\"><p lang=\"en\" dir=\"ltr\">&quot;I don&#39;t want you to be hopeful. I want you to panic.&quot; - /n"+
          "  <a href=\"https://twitter.com/GretaThunberg?ref_src=twsrc%5Etfw\">@GretaThunberg</a><br><br>📕 Read more: /n"+
          "  <a href=\"https://t.co/iAqcI7WHh4\">https://t.co/iAqcI7WHh4</a> /n"+
          "<a href=\"https://twitter.com/hashtag/climatechange?src=hash&amp;ref_src=twsrc%5Etfw\">#climatechange</a> /n"+
          "<a href=\"https://twitter.com/hashtag/globalwarming?src=hash&amp;ref_src=twsrc%5Etfw\">#globalwarming</a> /n"+
          "<a href=\"https://t.co/PHViBUfdY9\">pic.twitter.com/PHViBUfdY9</a></p>&mdash; World Economic Forum (@wef) /n"+
          "<a href=\"https://twitter.com/wef/status/1106238565040705536?ref_src=twsrc%5Etfw\">March 14, 2019</a></blockquote> <script async src=\"https://platform.twitter.com/widgets.js\" charset=\"utf-8\"></script>"));

          d.html(d.html().replace("[tweet 2]", "	<blockquote class=\"twitter-tweet\" data-lang=\"en\"><p lang=\"en\" dir=\"ltr\">We can’t let this just happen.<br>.\n" +
          "	<a href=\"https://twitter.com/hashtag/climatechange?src=hash&amp;ref_src=twsrc%5Etfw\">#climatechange</a>\n" +
          "	<a href=\"https://twitter.com/hashtag/climate?src=hash&amp;ref_src=twsrc%5Etfw\">#climate</a>\n" +
          " <a href=\"https://twitter.com/hashtag/sealevels?src=hash&amp;ref_src=twsrc%5Etfw\">#sealevels</a>\n" +
          " <a href=\"https://twitter.com/hashtag/arctic?src=hash&amp;ref_src=twsrc%5Etfw\">#arctic</a>\n" +
          " <a href=\"https://twitter.com/hashtag/globalwarming?src=hash&amp;ref_src=twsrc%5Etfw\">#globalwarming</a>\n" +
          " <a href=\"https://twitter.com/hashtag/followback?src=hash&amp;ref_src=twsrc%5Etfw\">#followback</a>\n" +
          " <a href=\"https://twitter.com/hashtag/followbacks?src=hash&amp;ref_src=twsrc%5Etfw\">#followbacks</a>\n" +
          " <a href=\"https://twitter.com/hashtag/Australia?src=hash&amp;ref_src=twsrc%5Etfw\">#Australia</a>\n" +
          " <a href=\"https://twitter.com/hashtag/Sydney?src=hash&amp;ref_src=twsrc%5Etfw\">#Sydney</a>\n" +
          " <a href=\"https://twitter.com/hashtag/Brisbane?src=hash&amp;ref_src=twsrc%5Etfw\">#Brisbane</a> \n" +
          " <a href=\"https://twitter.com/hashtag/Melbourne?src=hash&amp;ref_src=twsrc%5Etfw\">#Melbourne</a>\n" +
          " <a href=\"https://twitter.com/hashtag/Truganina?src=hash&amp;ref_src=twsrc%5Etfw\">#Truganina</a> <br>.\n" +
          " <a href=\"https://t.co/swoyO2AXv9\">https://t.co/swoyO2AXv9</a></p>&mdash; Super Koala (@Super_Koala_)\n" +
          " <a href=\"https://twitter.com/Super_Koala_/status/1106497801423372288?ref_src=twsrc%5Etfw\">March 15, 2019</a>\n" +
          "	</blockquote> <script async src=\"https://platform.twitter.com/widgets.js\" charset=\"utf-8\"></script>\n"));

          d.html(d.html().replace("[tweet 3]", " <blockquote class=\"twitter-tweet\" data-lang=\"en\"><p lang=\"en\" dir=\"ltr\">Research Shows Carbon Dioxide /n"+
          " <a href=\"https://twitter.com/hashtag/Emissions?src=hash&amp;ref_src=twsrc%5Etfw\">#Emissions</a> Increased 3.4% in 2018 - Power Generation, Transportation are Key Culprits: /n"+
          " <a href=\"https://t.co/rDKbgTi6YF\">https://t.co/rDKbgTi6YF</a> /n"+
          " <a href=\"https://twitter.com/hashtag/CarbonDioxide?src=hash&amp;ref_src=twsrc%5Etfw\">#CarbonDioxide</a> /n"+
          " <a href=\"https://twitter.com/hashtag/Electricity?src=hash&amp;ref_src=twsrc%5Etfw\">#Electricity</a> /n"+
          " <a href=\"https://twitter.com/hashtag/Transportation?src=hash&amp;ref_src=twsrc%5Etfw\">#Transportation</a> /n"+
          " <a href=\"https://twitter.com/hashtag/powergeneration?src=hash&amp;ref_src=twsrc%5Etfw\">#powergeneration</a> /n"+
          " <a href=\"https://twitter.com/hashtag/greenhousegases?src=hash&amp;ref_src=twsrc%5Etfw\">#greenhousegases</a> /n"+
          " <a href=\"https://twitter.com/hashtag/climatechange?src=hash&amp;ref_src=twsrc%5Etfw\">#climatechange</a> /n"+
          " <a href=\"https://twitter.com/hashtag/pollution?src=hash&amp;ref_src=twsrc%5Etfw\">#pollution</a> /n"+
          " <a href=\"https://twitter.com/hashtag/ParisAgreement?src=hash&amp;ref_src=twsrc%5Etfw\">#ParisAgreement</a> /n"+
          " <a href=\"https://twitter.com/rhodium_group?ref_src=twsrc%5Etfw\">@rhodium_group</a> /n"+
          " <a href=\"https://t.co/UVTVOZZ1BK\">pic.twitter.com/UVTVOZZ1BK</a></p>&mdash; IndiaGreenBldg (@IndiaGreenBldg) /n"+
          " <a href=\"https://twitter.com/IndiaGreenBldg/status/1107553982959009792?ref_src=twsrc%5Etfw\">March 18, 2019</a></blockquote> <script async src=\"https://platform.twitter.com/widgets.js\" charset=\"utf-8\"></script> "));

          d.html(d.html().replace("[tweet 4]", " <blockquote class=\"twitter-tweet\" data-lang=\"en\"><p lang=\"en\" dir=\"ltr\">This is incredible. Africa shouldn’t be flooding the way it is, Asia shouldn’t be drowning in feet of water, LA shouldn’t be getting these massive cloud and rain storms for months and we shouldn’t be getting severe bomb cyclones dotting the landscape. This IS /n"+
          " <a href=\"https://twitter.com/hashtag/globalwarming?src=hash&amp;ref_src=twsrc%5Etfw\">#globalwarming</a> /n"+
          " <a href=\"https://t.co/exlR6mGtBb\">pic.twitter.com/exlR6mGtBb</a></p>&mdash; maxxscore (@maxxscore) /n"+
          " <a href=\"https://twitter.com/maxxscore/status/1108413048073539584?ref_src=twsrc%5Etfw\">March 20, 2019</a></blockquote> <script async src=\"https://platform.twitter.com/widgets.js\" charset=\"utf-8\"></script>"));

          d.html(d.html().replace("[tweet 5]"," <blockquote class=\"twitter-tweet\" data-lang=\"fi\"><p lang=\"en\" dir=\"ltr\">I will soon be releasing a new version of unc0ver with partial support for A12-A12X devices on iOS 12.0-12.1.2.</p>&mdash; Pwn20wnd is loading trust caches on A12 (@Pwn20wnd)\n" +
                      " <a href=\"https://twitter.com/Pwn20wnd/status/1105166203335524352?ref_src=twsrc%5Etfw\">11. maaliskuuta 2019</a>\n" +
                      " </blockquote><script async src=\"https://platform.twitter.com/widgets.js\" charset=\"utf-8\"></script>"));

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
