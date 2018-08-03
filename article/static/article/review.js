(function(){

    var text;
    var Preview_PAGE = "/article/preview";
    var ptext1;
    var lengtht = tweetsarray().length;

    function ShowText(){
        text = localStorage.getItem("textStorage");
        $("#textReview").html(text);
        //console.log($("#twitter1").text());

    }

    function tweetsarray() {
        var tweets=[
            "<blockquote id=\"twitter1\" class=\"twitter-tweet\"> <p lang=\"en\" dir=\"ltr\">Treat people with love and respect. Treat them as you would be treated. It&#39;s a hard world out there, don&#39;t make it harder\n" +
            "                <a href=\"https://twitter.com/hashtag/love?src=hash&amp;ref_src=twsrc%5Etfw\">#love</a> <a href=\"https://twitter.com/hashtag/respect?src=hash&amp;ref_src=twsrc%5Etfw\">#respect</a></p>\n" +
            "                &mdash; Tweeter (@tweeter) <a href=\"https://twitter.com/tweeter/status/606304741723770882?ref_src=twsrc%5Etfw\">June 4, 2015</a></blockquote>" +
            "<script  async src=\"https://platform.twitter.com/widgets.js\"   charset=\"utf-8\"  ></script>",
            "<blockquote class=\"twitter-tweet\"><p lang=\"en\" dir=\"ltr\">Stay safe. Love one another. Life is hard for everyone, so spread peace and happiness.\n" +
            "                <a href=\"https://twitter.com/hashtag/tweetlove?src=hash&amp;ref_src=twsrc%5Etfw\">#tweetlove</a></p>&mdash; Tweeter (@tweeter)\n" +
            "                <a href=\"https://twitter.com/tweeter/status/489879052157595649?ref_src=twsrc%5Etfw\">July 17, 2014</a>\n" +
            "            </blockquote> <script async src=\"https://platform.twitter.com/widgets.js\" charset=\"utf-8\"></script>"  ];

         return tweets;
    }

    console.log(tweetsarray().length);


    function checkbox() {
         // $("#r1 [id*=twitter]").each(function () {
            //  $("#checkboxes").appendChild(checkbox);
            var checkboxes = $("#r1");
            for (var i = 0; i <lengtht ; i++) {
               // console.log(tweets.length);
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
                var br = document.createElement('br');
                checkboxes.append(checkbox);
                checkboxes.append(label+br);

           }

        $('#r1 input').change(function() {
            if (this.checked) {
                console.log("checked");
                console.log(this.value);
                var existing = $("#textReview").val();
                var cursorPos = $("#textReview").prop('selectionStart');
                var textBefore = existing.substring(0,  cursorPos );
                var textAfter  = existing.substring( cursorPos, existing.length );

                $("#textReview").val(textBefore + " " + this.value + " " + textAfter);
            } else {
                console.log("unchecked");

                $( '#textReview' ).val( $('#textReview').val().replace( this.value,  " " ) );
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