(function(){

    var text;
    var Preview_PAGE = "/article/preview";
    var ptext1;
    var lengtht = tweetsarray().length;
    $(document).ready(function loadText(textH) {
        console.log(textH);
        var h1 = localStorage.getItem("h1");
        var h2 = localStorage.getItem("h2");
        var h3 = localStorage.getItem("h3");
        $("#highlight1 p").append("Supporting tweet for highlight: "+h1);
        $("#highlight2 p").append("Supporting tweet for highlight: "+h2);
        $("#highlight3 p").append("Supporting tweet for highlight: "+h3);

    });
    function ShowText(){
        text = localStorage.getItem("textStorage");
        $("#textReview").html(text);
        //console.log($("#twitter1").text());


    }

    function tweetsarray() {
        var tweets=[

            " <blockquote class=\"twitter-tweet\" data-lang=\"en\"><p lang=\"en\" dir=\"ltr\">&quot;I don&#39;t want you to be hopeful. I want you to panic.&quot; - /n"+
            " <a href=\"https://twitter.com/GretaThunberg?ref_src=twsrc%5Etfw\">@GretaThunberg</a><br><br>📕 Read more: /n"+
            " <a href=\"https://t.co/iAqcI7WHh4\">https://t.co/iAqcI7WHh4</a> /n"+
            " <a href=\"https://twitter.com/hashtag/climatechange?src=hash&amp;ref_src=twsrc%5Etfw\">#climatechange</a> /n"+
            " <a href=\"https://twitter.com/hashtag/globalwarming?src=hash&amp;ref_src=twsrc%5Etfw\">#globalwarming</a> /n"+
            " <a href=\"https://t.co/PHViBUfdY9\">pic.twitter.com/PHViBUfdY9</a></p>&mdash; World Economic Forum (@wef) /n",
            " <a href=\"https://twitter.com/wef/status/1106238565040705536?ref_src=twsrc%5Etfw\">March 14, 2019</a></blockquote> <script async src=\"https://platform.twitter.com/widgets.js\" charset=\"utf-8\"></script> /n",
            " <blockquote class=\"twitter-tweet\" data-lang=\"fi\"><p lang=\"en\" dir=\"ltr\">I will soon be releasing a new version of unc0ver with partial support for A12-A12X devices on iOS 12.0-12.1.2.</p>&mdash; Pwn20wnd is loading trust caches on A12 (@Pwn20wnd)\n" +
            " <a href=\"https://twitter.com/Pwn20wnd/status/1105166203335524352?ref_src=twsrc%5Etfw\">11. maaliskuuta 2019</a>\n" +
            " </blockquote><script async src=\"https://platform.twitter.com/widgets.js\" charset=\"utf-8\"></script>",

            "	<blockquote class=\"twitter-tweet\" data-lang=\"en\"><p lang=\"en\" dir=\"ltr\">We can’t let this just happen.<br>.\n" +
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
            "	</blockquote> <script async src=\"https://platform.twitter.com/widgets.js\" charset=\"utf-8\"></script>\n",

            " <blockquote class=\"twitter-tweet\" data-lang=\"en\"><p lang=\"en\" dir=\"ltr\">Research Shows Carbon Dioxide /n"+
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
            " <a href=\"https://twitter.com/IndiaGreenBldg/status/1107553982959009792?ref_src=twsrc%5Etfw\">March 18, 2019</a></blockquote> <script async src=\"https://platform.twitter.com/widgets.js\" charset=\"utf-8\"></script> ",

            " <blockquote class=\"twitter-tweet\" data-lang=\"en\"><p lang=\"en\" dir=\"ltr\">This is incredible. Africa shouldn’t be flooding the way it is, Asia shouldn’t be drowning in feet of water, LA shouldn’t be getting these massive cloud and rain storms for months and we shouldn’t be getting severe bomb cyclones dotting the landscape. This IS /n"+
            " <a href=\"https://twitter.com/hashtag/globalwarming?src=hash&amp;ref_src=twsrc%5Etfw\">#globalwarming</a> /n"+
            " <a href=\"https://t.co/exlR6mGtBb\">pic.twitter.com/exlR6mGtBb</a></p>&mdash; maxxscore (@maxxscore) /n"+
            " <a href=\"https://twitter.com/maxxscore/status/1108413048073539584?ref_src=twsrc%5Etfw\">March 20, 2019</a></blockquote> <script async src=\"https://platform.twitter.com/widgets.js\" charset=\"utf-8\"></script>",

            " <blockquote class=\"twitter-tweet\" data-lang=\"fi\"><p lang=\"en\" dir=\"ltr\">I will soon be releasing a new version of unc0ver with partial support for A12-A12X devices on iOS 12.0-12.1.2.</p>&mdash; Pwn20wnd is loading trust caches on A12 (@Pwn20wnd)\n" +
            " <a href=\"https://twitter.com/Pwn20wnd/status/1105166203335524352?ref_src=twsrc%5Etfw\">11. maaliskuuta 2019</a>\n" +
            " </blockquote><script async src=\"https://platform.twitter.com/widgets.js\" charset=\"utf-8\"></script>"
            ];

         return tweets;
    }

    console.log("Tweetsarray length: " + tweetsarray().length);


    function checkbox() {
         // $("#r1 [id*=twitter]").each(function () {
            //  $("#checkboxes").appendChild(checkbox);
            console.log("Hellooo");

            var checkboxes = $("#tweets");
            console.log("Tweetsarray length: " + tweetsarray().length);
            for (var i = 0; i <lengtht-2 ; i++) {
               // var checkboxes = $("#r1");
                var checkbox = document.createElement('input');
                checkbox.type = 'checkbox';
                checkbox.name = 'checkbox';
                checkbox.className='cbox';
                checkbox.id = "checkbox " + [i+1];
                checkbox.value = 'tweet ' + [i+1];
                console.log(checkbox);

                var label = document.createElement('label');
                label.htmlFor = checkbox.id;
                label.appendChild(document.createTextNode(checkbox.value));
                console.log(label);

                checkboxes.append(checkbox);
                checkboxes.append(label);

           }


        $('#r1 input').change(function() {
            if (this.checked) {
                console.log("checked");
                console.log(this.value);
                var existing = $("#textReview").val();
                var cursorPos = $("#textReview").prop('selectionStart');
                var textBefore = existing.substring(0,  cursorPos );
                var textAfter  = existing.substring( cursorPos, existing.length );

                $("#textReview").val(textBefore + " [" + this.value + "] " + textAfter);
            } else {
                console.log("unchecked");

                $( '#textReview' ).val( $('#textReview').val().replace( " ["+this.value+"] ",  " " ) );
                console.log($("#textReview"));
                console.log(this.value);
            }
        });

       // });
    }        // console.log(chebox());

            // $("#r1 twitterwidget").each(function (){
            //     $("#checkboxes").appendChild(checkbox);
            // });
            // var checkb = '<input type="checkbox" name="checkb" value="tweet '+ i+1 + '"';

    $("#b-preview").click(function () {
        ptext1 = $("#textReview").val();

        localStorage.setItem("text",ptext1);
        console.log(localStorage);
        window.location.href = Preview_PAGE;
    });

    // var checkb;
    // var tweet1 = $("#1").innerText;
    // checkb = '<input type="checkbox" name="checkbox" value="'+ tweet1 + '">';


    // $('#r1 input').change(function() {
    //     if (this.checked) {
    //     console.log("checked");
    //     console.log(this.value);
    //     var existing = $("#textReview").val();
    //     var cursorPos = $("#textReview").prop('selectionStart');
    //     var textBefore = existing.substring(0,  cursorPos );
    //     var textAfter  = existing.substring( cursorPos, existing.length );
    //
    //         $("#textReview").val(textBefore + " " + this.value + " " + textAfter);
    //     } else {
    //         console.log("unchecked");
    //
    //         $( '#textReview' ).val( $('#textReview').val().replace( this.value,  " " ) );
    //         console.log($("#textReview"));
    //          console.log(this.value);
    //     }
    // });




         // var sel = '';
         // var range, newNode;
         // var availText = '';
         // sel = window.getSelection();
         // console.log("selection exist");
         // if (sel.rangeCount != -1) {
                 // $( "input" ).on( "click", function() {
                 //     if($("input:checked")) {
                 //         $("#textReview").html(text + $("input:checked").val());
                 //     }else {
                 //             $("#textReview").html(text);
                 //         }
                 // });
         //     if (el.checked) {
         //
         //     range = sel;
         //     range = sel.getRangeAt(0);
         //     el.form.elements.el.form.elements['type'].value += el.value;
         // } else {
         //     var re = new RegExp('(.*)' + el.value + '(.*)$');
         //     el.form.elements['type'].value = el.form.elements['type'].value.replace(re, '$1$2');
         // }
    // }
             // var st = sel;
             // var goodTextHtml = '';
             // if (document.selection && !window.getSelection) {
             //     range = st;
             //     range = st.getRangeAt(0);
             //     //newNode = document.createElement('span');
             //     //newNode.setAttribute('class', 'selectedText');
             //     //range.surroundContents(newNode);
             //     $("#r1 label").click().innerHTML = range.toString();
             //     range.deleteContents();
             //     range.insertNode($("#r1 label"));
             //     console.log("surrounds");
       //      // }


    $(function () {
        ShowText();
        tweetsarray();
        checkbox();

        //showData();
    });

})();
