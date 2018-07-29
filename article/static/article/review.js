(function(){

    var text;

    function ShowText(){
        text = localStorage.getItem("textStorage");
        $("#textReview").html(text);
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

    $("#b-export").click(function (){
        var text = $("#textReview").val().trim();
        text = text.replace(/\n/g, "\r\n");
        var blob = new Blob([text], { type: "text/plain"});
        var anchor = document.createElement("a");
        anchor.download = "my-filename.txt";
        anchor.href = window.URL.createObjectURL(blob);
        anchor.target ="_blank";
        anchor.style.display = "none"; // just to be safe!
        document.body.appendChild(anchor);
        anchor.click();
        document.body.removeChild(anchor);
    });
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
        //showData();
    });

})();