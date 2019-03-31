(function () {
		var text;
		//var parentContainerId;
		var Review_PAGE = "/article/review";
		var h1;

        var urls = ['/article/create_article/','/article/conn_mturk/'];

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
				// Flag to check invalid inputs
				var isFalse=0;
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
																goodTextHtml += "<tr> <td>" + $(currItem).text() + "</td><td><input id='nrTweets' type=\"text\" size=\"1\" class='numbers'/></td><td><input id='nrArticles' type=\"text\" size=\"1\" class='numbers'/></td></tr>";
														}
														$("#table-div").html(goodTextHtml);
														$("#table-div").fadeIn();
														$("#wrapper button").fadeIn();
														$("#guideline").fadeIn();


												});

												goodTextHtml +=   '</table>';

												$('.numbers').keypress(function(key) {
														if(key.charCode < 48 || key.charCode > 57)
																return false;
												})
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
																// Counters
																var ind = 0;
																var idx=0;
																// Cycle through each of the table body's rows
																$('#highlightTable tr').each(function (index, tr) {
																		var tds = $(tr).find('td');
																		var inputs = $(tr).find($("input"));

																		//console.log("index: " + index);
																		idx++;
																		if (tds.length > 1) {
																				if ($(tr).find($("input"))[0].value == ""	|| $(tr).find($("input"))[1].value == "" // || parseInt($(tr).find($("input"))[1].value) > 10	|| parseInt($(tr).find($("input"))[0].value) > 3 ) {
																					|| parseInt(inputs[0].value) > 3 || parseInt(inputs[1].value) > 10) {
																						isFalse = 1;
																						//console.log("Changed false to 1 inside the first if. isfalse now: " + isFalse);
																						return false;
																				} else {
																						// Puts the highlight and the amount of references to datatable
																						dataTable[ind++] = "Highlight " + [ind] + ": " + tds[0].textContent.trim() + ", " + "Tweets: " + inputs[0].value + ", " + "References: " + inputs[1].value + ";";
																				}
																		}
																}); // Loop ends

																console.log("Datatable length: " + dataTable.length);
																console.log(dataTable);
																return dataTable;

														}

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
														//console.log("isFalse before the checks: " + isFalse);
														//cheking the table is filled with number
														if(getTableData().length == 0){
																alert("Error! Empty fields or amount of tweets or references over limitations. Please try again");
																isFalse=0;
																//console.log("1: Changed isFalse to 0. isFalse now: " + isFalse);
																return false;
														} else if (isFalse) {
																alert("Error! Empty fields or amount of tweets or references over limitations. Please try again");
																isFalse=0;
																//console.log("2: Changed isFalse to 0. ifFalse now: " + isFalse);
																return false;
														} else {
														//creating a ajax call for posting the information from the UI
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
																 $.ajax({
																		    type: 'POST',
																		    dataType: 'json',
																		    contentType: 'application/json; charset=utf-8',
																		    data: {},
																		    url: '/article/conn_mturk/',

																		    success: function (json) {
																		     console.log(json);
																				console.log("success");
																				//         console.log(getTableData());
																		     },
																		 });

														}

														var textH = [];
														var ind = 0;
														$.each($(".selectedText"), function (i, currItem) {
														// console.log("enters");
														textH[ind++] = $(currItem).text();
																	//  console.log(textH);
														});
														console.log("returns");
														// console.log(textH);
														localStorage.setItem("h1",textH[0]);
														localStorage.setItem("h2",textH[1]);
														h1=textH[0];
														console.log(h1);
														//h2=textH[1];

													//  console.log(highlightsArray());

													window.location.href = Review_PAGE;
												}else{}
										});

								}
						}
		}
		//$("#send").onclick(highlightsArray());
		$(function () {
					selectText();
				// highlightsArray();
			 // clickedSelectedText();
			 // getselected();
		});


})();
