$('#search').keyup(function () {
	$.getJSON('http://stats.nba.com/stats/teamplayerdashboard?DateFrom=&DateTo=&GameSegment=&LastNGames=0&LeagueID=00&Location=&MeasureType=Base&Month=0&OpponentTeamID=0&Outcome=&PaceAdjust=N&PerMode=PerGame&Period=0&PlusMinus=N&Rank=N&Season=2015-16&SeasonSegment=&SeasonType=Regular+Season&TeamID=1610612757&VsConference=&VsDivision=', function (data) {
	  	var output = "<ul class='searchresults'>"; 
	  	$.each(data.resultSets[1].rowSet, function(index, value){
	  		console.log(value[2]); 
	  		output += '<li>';  
	  		output += '<h2>' + value[2] + '</h2>';
	  		output += '<img src="images/' + value[2] + '.png" alt="not found" />'
	  		output += '<p>Field goal percentage: ' + (value[10] * 100).toFixed(2)  + ', Three point percentage: ' + (value[13] * 100).toFixed(2)  + ', Rebounds: ' + value[19].toFixed(2) + ', Assists: ' + value[20].toFixed(2) + '</p>'
	  		output += '</li>' 



	  	}); 
	  	output += '</ul>'; 
	  	$('#update').append(output); 
	  	console.log(data.resultSets); 
	});

}); 