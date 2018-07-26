(function () {

    var SUBMIT_PAGE = "/article/submit";
    var text;

    function submitButtonClicked(){
       $("#b-submit").click(function() {
           text = $.trim($("#styled").val());
            $(document).ready(function () {

               if (text != ""){
                   $(function() {
                        if (confirm("Are you sure you want to submit this?")) {
                            window.location.href = SUBMIT_PAGE;
                        } else {}
                   });
                }
            });
            localStorage.setItem("textStorage",text);

            console.log(text);
           });
    }

    function showData(){
        //window.onload = $("#ta").val(localStorage.getItem("textStorage"));
        // $(document).ready(function () {
        //     $('#contact-number').html(PHONE_NUMBER_VALUE);
        // });
    }



    $(function () {
        submitButtonClicked();

        //showData();
        
        
    });
})();

