(function () {
    var text;
    //var parentContainerId;
    var Review_PAGE = "/article/review";

    text = localStorage.getItem("textStorage");
    $(document).ready(function loadText() {
         text = localStorage.getItem("textStorage");
        $("#ta pre").html(localStorage.getItem("textStorage"));
    });

    function getCookie(name) {
        var cookieValue = null;
        if (document.cookie && document.cookie !== '') {
            var cookies = document.cookie.split(';');
            for (var i = 0; i < cookies.length; i++) {
                var cookie = jQuery.trim(cookies[i]);
                // Does this cookie string begin with the name we want?
                if (cookie.substring(0, name.length + 1) === (name + '=')) {
                    cookieValue = decodeURIComponent(cookie.substring(name.length + 1));
                    break;
                }
            }
        }
        return cookieValue;
    }
        var csrftoken = getCookie('csrftoken');

    // function setToBold() {
    //     $("#highlight").click(function () {
    //         var sel, range, boldedText, normalText;
    //         if (window.getSelection) {
    //             sel = window.getSelection();
    //             if (sel.rangeCount) {
    //                // window.theselection = sel;
    //                 range = sel.getRangeAt(0);
    //                 console.log(sel.extentNode.parentNode.innerHTML);
    //                 // if(sel.extentNode.parentNode.innerHTML.search("<b>") != -1){
    //                 boldedText = document.createElement('span');
    //                 boldedText.innerHTML = range.toString();
    //                 range.deleteContents();
    //                 range.insertNode(boldedText);
    //
    //                 console.log(boldedText);
    //             }
    //             console.log(window.getSelection());
    //         } else if (document.selection && document.selection.createRange) {
    //             range = document.selection.createRange();
    //             range.text = "<b>" + range.toString() + "</b>";
    //         }
    //     });
    // }

    function selectText() {
        var range, newNode;
        var sel = '';
        //parentContainerId = $("#ta");
            if (window.getSelection) {
                sel = window.getSelection();
                console.log("selection exist", sel);
                if (sel.rangeCount != -1) {
                    $("#highlight").click( function () {
                        var st = sel;
                        var goodTextHtml = '';
                        if (document.selection && !window.getSelection) {
                            range = st;
                            range.text = "<span class='selectedText'>" + range.toString() + "</span>";
                            console.log("it enters");
                        }
                        else {
                            try {
                                range = st.getRangeAt(0);
                                newNode = document.createElement('span');
                                newNode.setAttribute('class', 'selectedText');
                                range.surroundContents(newNode);
                                newNode.innerHTML = range.toString();
                                range.deleteContents();
                                range.insertNode(newNode);
                                console.log("surrounds");

                                //range.text = "<span class='selectedText'>" + newNode + "</span>";
                                //range.insertNode(newNode);
                                console.log(newNode);
                                window.getSelection().removeAllRanges();
                            }catch (err) {
                                alert("already highlighted");
                            }
                        }
                        //extracting all of the selected highlighted text
                        goodTextHtml = '<table id="highlightTable" style=" width: 400px;">';
                        goodTextHtml += '<tr> <th class="text-center" > Highlights </th> <th class="text-center"> Tweets </th> <th class="text-center"> Articles </th></tr>';

                        $.each($(".selectedText"), function (i, currItem) {
                            if ($(currItem).text() != '') {
                                goodTextHtml += "<tr> <td>" + $(currItem).text() + "</td><td><input id='nrTweets' type=\"text\" size=\"1\"/></td><td><input id='nrArticles' type=\"text\" size=\"3\"/></td></tr>";
                            }
                            $("#table-div").html(goodTextHtml);
                            $("#table-div").fadeIn();
                            $("#wrapper button").fadeIn();
                            $("#guideline").fadeIn();


                        });

                        goodTextHtml +=   '</table>';
                    });
                    //clear the results and set the content back to text and not html
                    $("#clearHighlights").click(function () {
                        var hLCont = $("#ta");
                        hLCont.text(hLCont.text());
                        $("#table-div").hide();
                        $("#send").hide();
                        $("#guideline").hide();
                    });
                    $("#send").click(function () {
                        if (confirm("You are sending this article with the highlight to the crowdsourcing workers! Press OK in order to continue or cancel to make changes.")) {

                            function getTableData() {
                                // Array of data we'll return
                                var dataTable = [];
                                // Counter
                                var ind = 0;
                                // Cycle through each of the table body's rows
                                $('#highlightTable tr').each(function (index, tr) {
                                    var tds = $(tr).find('td');
                                    var inputs = $(tr).find($("input"));
                                    if (tds.length > 1) {
                                        dataTable[ind++] = "Highlight " + [ind] + ": " + tds[0].textContent.trim() + ", " + "Tweets: " + inputs[0].value + ", " + "References: " + inputs[1].value + ";";
                                    }

                                });
                                //  console.log(dataTable);
                                return dataTable;

                            }

                            getTableData();

                            function csrfSafeMethod(method) {
                                // these HTTP methods do not require CSRF protection
                                return (/^(GET|HEAD|OPTIONS|TRACE)$/.test(method));
                            }

                            $.ajaxSetup({
                                crossDomain: false, // obviates need for sameOrigin test
                                beforeSend: function (xhr, settings) {
                                    if (!csrfSafeMethod(settings.type)) {
                                        xhr.setRequestHeader("X-CSRFToken", csrftoken);
                                    }
                                }
                            });

                            $.ajax({
                                type: 'POST',
                                dataType: 'json',
                                contentType: 'application/json; charset=utf-8',
                                url: '/article/create_article/',
                                data: JSON.stringify({

                                    'article': text,
                                    'highlight': getTableData()
                                }),
                                success: function (json) {
                                    console.log(json);
                                    console.log("success");
                                    //         console.log(getTableData());
                                },
                                failure: function (data) {
                                    console.log("failure");
                                    //console.log(data);
                                }
                            });
                            window.location.href = Review_PAGE;
                        }else{}
                    });

                }
            }
    }

    $(function () {
          selectText();
       // clickedSelectedText();
       // getselected();
    });


})();
