var mglcat = [[1, 98.7], [2, 98.3], [3, 97.8], [4, 98.5]]
var eposcat = [[1, 86], [2, 88.3], [3, 87.8], [4, 88.5]]
var maincat = [[1, 95.7], [2, 95.3], [3, 94.8], [4, 95.5]]

var catovdata = [{ data:mglcat, label:"Midwest & Great Lakes", lines:{show:true}}
        ,{ data:eposcat, label:"Tempe EPOS", lines:{show:true}, points:{show:true}}
		,{ data:maincat, label:"Tempe Maintenance", lines:{show:true}, points:{show:true}}
		];

$(document).ready(function () {$.plot($("#catovline"), catovdata);});	 