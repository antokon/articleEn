(function(){
var text;

// <label><input type="checkbox" name="checkbox" value="value">Text</label>


    function ShowText(){
        text = localStorage.getItem("textStorage");
        $("#textReview").html(text);
    }



    $('#r1 input').change(function() {
        // var re;
        var existing = $("#textReview").val();
       // $("input:checked")[0].nextSibling.nodeValue;
        if (this.checked) {
        console.log("checked");
        console.log(this.value);
            $("#textReview").val(existing + " " + this.value);
        } else {
            console.log("unchecked");
            var input = this.value;
          // $("#textReview").replace(this.value, " ");
            //existing.val().replace( this.value,  "");
            $( '#textReview' ).val( $('#textReview').val().replace( this.value,  " " ) );
            console.log($("#textReview"));
             console.log(this.value);
        }
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