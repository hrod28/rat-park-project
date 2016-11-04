"use strict";
//console.log("are we here");
$(document).ready(function(){

console.log('yes');
$('#wtf').on('click', function(event) {
  event.preventDefault();



var selectedCategory = document.getElementById('userChoiceCategory').value;
//console.log(selectedCategory);
console.log('so');
var selectedZip = document.getElementById('zipCode').value;
//console.log(selectedZip);
//var selectedZip = " ";
var queryString = 'https://g-meetup.herokuapp.com/2/open_events?zip=' + selectedZip +'&radius=30&sign=true&category='+ selectedCategory + '&key=5f191083921794812151c1a403a6d3a'; /*'http://www.omdbapi.com/?t=' + title;*/


var json =[];


var $xhr = $.getJSON(queryString);
//console.log(queryString);

$xhr.done(function(data) {


    if ($xhr.status !== 200) {
       return;

   }


    for (var i = 0; i < data.results.length; i++) {
      var resultsObj = {
        event_url: data.results[i].event_url,
        description: data.results[i].description,
        group_name: data.results[i].group.name
      };

      json.push(resultsObj);
    }

    var firstList = $('<ul></ul>');
    $('#meetingSection').append(firstList);

    for (var j = 0; j < json.length; j++) {

      //var firstList = $('<ul></ul>');
      //$('#meetingSection').append(firstList);

      //$('#meetingSection').append(firstList);
      var gName = json[j].group_name;
      console.log(gName);
      var dScript = json[j].description;
      console.log(dScript);
      var eveName = json[j].event_url;
      console.log(eveName);
      $('ul').append('<div class="btn-custom"><p></p><li><b>Group Name:</b>'+'     ' + gName +'</li><li><b>Meetup Description:</b>'+'     '+ dScript +'</li><li><b>Event URL:</b>'+'     ' + eveName + '</li><p></p></div>', '<p></p>', '<p></p>', '<p></p>', '<p></p>');
      //console.log(json[j].group_name);
//console.log(json);

  }
});

});
});


// for get request
/*$('#searchNow').on('click', function(){
  $.getJSON('https://api.meetup.com/2/open_events?&sign=true&photo-host=public&zip=1&limited_events=1&category=1&radius=1&key=5f191083921794812151c1a403a6d3a', function(result){
    var meetingList = $.map(result, function(status, i){
      var meetingItem = $('<li></li>');
      $('')
    })
  })
})*/
