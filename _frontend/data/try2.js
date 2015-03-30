//Calls Answer Time Data Variables & Content
var eposcat = [[1, 86], [2, 88.3], [3, 87.8], [4, 88.5]]
var maincat = [[1, 95.7], [2, 95.3], [3, 94.8], [4, 95.5]]
var mglcat = [[1, 98.7], [2, 98.3], [3, 97.8], [4, 98.5]]
var wcrscat = [[1, 87.3], [2, 90.2], [3, 91.3], [4, 92.5]]
var arscat = [[1, 93], [2, 96], [3, 79], [4, 87.5]]
var swscat = [[1, 98.9], [2, 83.4], [3, 92.7], [4, 95.4]]
var mwrscat = [[1, 94.2], [2, 94.3], [3, 94.5], [4, 95.6]]
var grscat = [[1, 89.3], [2, 99.2], [3, 92.3], [4, 96.5]]
var sarscat = [[1, 81.3], [2, 92.2], [3, 81.3], [4, 92.5]]
var serscat = [[1, 93], [2, 99.2], [3, 98.3], [4, 82.5]]
var frscat = [[1, 84.3], [2, 91.2], [3, 92.3], [4, 93.5]]

//Calls Answer Time Graph Data
var catovdata = [{ data:eposcat, label:"Tempe EPOS", lines:{show:true}, points:{show:true}}
		,{ data:maincat, label:"Tempe Maintenance", lines:{show:true}, points:{show:true}}
		,{ data:mglcat, label:"Great Lakes Region", lines:{show:true}, points:{show:true}}
		,{ data:wcrscat, label:"West Coast Region", lines:{show:true}, points:{show:true}}
		,{ data:arscat, label:"Arizona Region", lines:{show:true}, points:{show:true}}
		,{ data:swscat, label:"Southwest Region", lines:{show:true}, points:{show:true}}
		,{ data:mwrscat, label:"Midwest Region", lines:{show:true}, points:{show:true}}
		,{ data:grscat, label:"Gulf Region", lines:{show:true}, points:{show:true}}
		,{ data:sarscat, label:"South Atlantic Region", lines:{show:true}, points:{show:true}}
		,{ data:serscat, label:"Southeast Region", lines:{show:true}, points:{show:true}}
		,{ data:frscat, label:"Florida Region", lines:{show:true}, points:{show:true}}
		];

var call_answer_time_options = {

	xaxis: {
		 ticks: [[1, "Quarter 1"], [2, "Quarter 2"], [3, "Quarter 3"], [4, "Quarter 4"]],
		 axisLabel: '',
            axisLabelUseCanvas: true,
            axisLabelFontSizePixels: 20,
            axisLabelFontFamily: 'Arial'
		},
		yaxis: {
            axisLabel: '% answered in less than 3 min',
            axisLabelUseCanvas: true
        },
		grid: {
			show: true,
			hoverable: true
		},
		tooltip: true,
		tooltipOpts: {
			content: "%y"
		}
	
}

//Average Hold Time Data Variables & Content

//ahtovlinechart
//catovlinechart

//Calls Answer Time Data Variables & Content
/*var eposcat = [[1, 86], [2, 88.3], [3, 87.8], [4, 88.5]]
var maincat = [[1, 95.7], [2, 95.3], [3, 94.8], [4, 95.5]]
var mglcat = [[1, 98.7], [2, 98.3], [3, 97.8], [4, 98.5]]
var wcrscat = [[1, 87.3], [2, 90.2], [3, 91.3], [4, 92.5]]
var arscat = [[1, 93], [2, 96], [3, 79], [4, 87.5]]
var swscat = [[1, 98.9], [2, 83.4], [3, 92.7], [4, 95.4]]
var mwrscat = [[1, 94.2], [2, 94.3], [3, 94.5], [4, 95.6]]
var grscat = [[1, 89.3], [2, 99.2], [3, 92.3], [4, 96.5]]
var sarscat = [[1, 81.3], [2, 92.2], [3, 81.3], [4, 92.5]]
var serscat = [[1, 93], [2, 99.2], [3, 98.3], [4, 82.5]]
var frscat = [[1, 84.3], [2, 91.2], [3, 92.3], [4, 93.5]]*/

//Calls Answer Time Graph Data
var ahtovdata = [{ data:eposcat, label:"Tempe EPOS", lines:{show:true}, points:{show:true}}
		,{ data:maincat, label:"Tempe Maintenance", lines:{show:true}, points:{show:true}}
		,{ data:mglcat, label:"Great Lakes Region", lines:{show:true}, points:{show:true}}
		,{ data:wcrscat, label:"West Coast Region", lines:{show:true}, points:{show:true}}
		,{ data:arscat, label:"Arizona Region", lines:{show:true}, points:{show:true}}
		,{ data:swscat, label:"Southwest Region", lines:{show:true}, points:{show:true}}
		,{ data:mwrscat, label:"Midwest Region", lines:{show:true}, points:{show:true}}
		,{ data:grscat, label:"Gulf Region", lines:{show:true}, points:{show:true}}
		,{ data:sarscat, label:"South Atlantic Region", lines:{show:true}, points:{show:true}}
		,{ data:serscat, label:"Southeast Region", lines:{show:true}, points:{show:true}}
		,{ data:frscat, label:"Florida Region", lines:{show:true}, points:{show:true}}
		];

var average_hold_time_options = {

	xaxis: {
		 ticks: [[1, "Quarter 1"], [2, "Quarter 2"], [3, "Quarter 3"], [4, "Quarter 4"]],
		 axisLabel: 'average hold time',
            axisLabelUseCanvas: true,
            axisLabelFontSizePixels: 20,
            axisLabelFontFamily: 'Arial'
		},
		yaxis: {
            axisLabel: 'is working',
            axisLabelUseCanvas: true
        },
		grid: {
			show: true,
			hoverable: true
		},
		tooltip: true,
		tooltipOpts: {
			content: "%y"
		}
	
}

//Calls per Store Period Data Variables & Content

//#pspovlinechart
var pspovdata = [{ data:eposcat, label:"Tempe EPOS", lines:{show:true}, points:{show:true}}
		,{ data:maincat, label:"Tempe Maintenance", lines:{show:true}, points:{show:true}}
		,{ data:mglcat, label:"Great Lakes Region", lines:{show:true}, points:{show:true}}
		,{ data:wcrscat, label:"West Coast Region", lines:{show:true}, points:{show:true}}
		,{ data:arscat, label:"Arizona Region", lines:{show:true}, points:{show:true}}
		,{ data:swscat, label:"Southwest Region", lines:{show:true}, points:{show:true}}
		,{ data:mwrscat, label:"Midwest Region", lines:{show:true}, points:{show:true}}
		,{ data:grscat, label:"Gulf Region", lines:{show:true}, points:{show:true}}
		,{ data:sarscat, label:"South Atlantic Region", lines:{show:true}, points:{show:true}}
		,{ data:serscat, label:"Southeast Region", lines:{show:true}, points:{show:true}}
		,{ data:frscat, label:"Florida Region", lines:{show:true}, points:{show:true}}
		];

var psp_options = {

	xaxis: {
		 ticks: [[1, "Quarter 1"], [2, "Quarter 2"], [3, "Quarter 3"], [4, "Quarter 4"]],
		 axisLabel: 'average hold time',
            axisLabelUseCanvas: true,
            axisLabelFontSizePixels: 20,
            axisLabelFontFamily: 'Arial'
		},
		yaxis: {
            axisLabel: 'is working',
            axisLabelUseCanvas: true
        },
		grid: {
			show: true,
			hoverable: true
		},
		tooltip: true,
		tooltipOpts: {
			content: "%y"
		}
	
}

//Calling Content for Graphs Across the Program!!!
$(document).ready(function () {$.plot($("#catovline"), catovdata, call_answer_time_options);});	 
$(document).ready(function () {$.plot($("#ahtovline"), ahtovdata, average_hold_time_options);});	 
$(document).ready(function () {$.plot($("#pspovline"), pspovdata, psp_options);});	 