//All Data for Tempe Maintenance
var maincat = [[1, 95.7], [2, 95.3], [3, 94.8], [4, 95.5]]
var mainaht = [[1, 1.3], [2, 2.6], [3, 8.4], [4, 2.1]]
var mainpsp = [[1, 95.7], [2, 95.3], [3, 94.8], [4, 95.5]]

//All Data for Tempe EPOS
var eposcat = [[1, 86], [2, 88.3], [3, 87.8], [4, 88.5]]
var eposaht = [[1, 1.5], [2, 2.6], [3, 3.8], [4, 4.2]]
var epospsp = [[1, 95.7], [2, 95.3], [3, 94.8], [4, 95.5]]

//All Data for Columbus
var colcat = [[1, 98.7], [2, 98.3], [3, 97.8], [4, 98.5]]
var colaht = [[1, 2.7], [2, 3.1], [3, 4.8], [4, 6.3]]
var colpsp = [[1, 95.7], [2, 95.3], [3, 94.8], [4, 95.5]]

//All Data for Sanford
var sancat = [[1, 98.9], [2, 83.4], [3, 92.7], [4, 95.4]]
var sanaht = [[1, 1.5], [2, 2.6], [3, 3.8], [4, 4.2]]
var sanpsp = [[1, 95.7], [2, 95.3], [3, 94.8], [4, 95.5]]

//All Data for Toronto
var torcat = [[1, 93], [2, 99.2], [3, 98.3], [4, 82.5]]
var toraht = [[1, 2.7], [2, 3.1], [3, 4.8], [4, 6.3]]
var torpsp = [[1, 95.7], [2, 95.3], [3, 94.8], [4, 95.5]]

//All Data for Laval
var lavcat = [[1, 84.3], [2, 91.2], [3, 92.3], [4, 93.5]]
var lavaht = [[1, 1.5], [2, 2.6], [3, 3.8], [4, 4.2]]
var lavpsp = [[1, 95.7], [2, 95.3], [3, 94.8], [4, 95.5]]


//Calls Answer Time Overview Graph Data
var CAT_Overview_Data = [{ data:eposcat, label:"Tempe EPOS", lines:{show:true}, points:{show:true}}
		,{ data:maincat, label:"Tempe Maintenance", lines:{show:true}, points:{show:true}}
		,{ data:colcat, label:"Columbus", lines:{show:true}, points:{show:true}}
		,{ data:sancat, label:"Sanford", lines:{show:true}, points:{show:true}}
		,{ data:torcat, label:"Toronto", lines:{show:true}, points:{show:true}}
		,{ data:lavcat, label:"Laval", lines:{show:true}, points:{show:true}}
		];

//All Separate Data for CAT Graphs
		
var tempe_maintenance_CATGRAPH_DATA = [{ data:maincat, label:"Tempe Maintenance", lines:{show:true}, points:{show:true}}
		];

var tempe_EPOS_CATGRAPH_DATA = [{ data:eposcat, label:"Tempe EPOS", lines:{show:true}, points:{show:true}}
		];
		
var columbus_CATGRAPH_DATA = [{ data:colcat, label:"Columbus", lines:{show:true}, points:{show:true}}
		];
		
var sanford_CATGRAPH_DATA = [{ data:sancat, label:"Sanford", lines:{show:true}, points:{show:true}}
		];	
		
var toronto_CATGRAPH_DATA = [{ data:torcat, label:"Toronto", lines:{show:true}, points:{show:true}}
		];
		
var laval_CATGRAPH_DATA = [{ data:lavcat, label:"Laval", lines:{show:true}, points:{show:true}}
		];

var call_answer_time_options = {

	xaxis: {
		 ticks: [[1, "Quarter 1"], [2, "Quarter 2"], [3, "Quarter 3"], [4, "Quarter 4"]],
		 axisLabel: '',
            axisLabelUseCanvas: true,
            axisLabelFontSizePixels: 20,
            axisLabelFontFamily: 'Arial'
		},
		/*yaxis: {
            axisLabel: '% answered in less than 3 min',
            
        },*/
		grid: {
			show: true,
			hoverable: true
		},
		tooltip: true,
		tooltipOpts: {
			content: "%y"
		}
	
}

//Calls Answer Time Overview Graph Data
var AHT_Overview_Data = [{ data:eposaht, label:"Tempe EPOS", lines:{show:true}, points:{show:true}}
		,{ data:mainaht, label:"Tempe Maintenance", lines:{show:true}, points:{show:true}}
		,{ data:colaht, label:"Columbus", lines:{show:true}, points:{show:true}}
		,{ data:sanaht, label:"Sanford", lines:{show:true}, points:{show:true}}
		,{ data:toraht, label:"Toronto", lines:{show:true}, points:{show:true}}
		,{ data:lavaht, label:"Laval", lines:{show:true}, points:{show:true}}
		];

//All Separate Data for AHT Graphs
		
var tempe_maintenance_AHTGRAPH_DATA = [{ data:mainaht, label:"Tempe Maintenance", lines:{show:true}, points:{show:true}}
		];

var tempe_EPOS_AHTGRAPH_DATA = [{ data:eposaht, label:"Tempe EPOS", lines:{show:true}, points:{show:true}}
		];
		
var columbus_AHTGRAPH_DATA = [{ data:colaht, label:"Columbus", lines:{show:true}, points:{show:true}}
		];
		
var sanford_AHTGRAPH_DATA = [{ data:sanaht, label:"Sanford", lines:{show:true}, points:{show:true}}
		];	
		
var toronto_AHTGRAPH_DATA = [{ data:toraht, label:"Toronto", lines:{show:true}, points:{show:true}}
		];
		
var laval_AHTGRAPH_DATA = [{ data:lavaht, label:"Laval", lines:{show:true}, points:{show:true}}
		];

var average_hold_time_options = {

	xaxis: {
		 ticks: [[1, "Quarter 1"], [2, "Quarter 2"], [3, "Quarter 3"], [4, "Quarter 4"]],
		 axisLabel: '',
            axisLabelUseCanvas: true,
            axisLabelFontSizePixels: 20,
            axisLabelFontFamily: 'Arial'
		},
		/*yaxis: {
            axisLabel: '% answered in less than 3 min',
            
        },*/
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

var PSP_Overview_Data = [{ data:epospsp, label:"Tempe EPOS", lines:{show:true}, points:{show:true}}
		,{ data:mainpsp, label:"Tempe Maintenance", lines:{show:true}, points:{show:true}}
		,{ data:colpsp, label:"Columbus", lines:{show:true}, points:{show:true}}
		,{ data:sanpsp, label:"Sanford", lines:{show:true}, points:{show:true}}
		,{ data:torpsp, label:"Toronto", lines:{show:true}, points:{show:true}}
		,{ data:lavpsp, label:"Laval", lines:{show:true}, points:{show:true}}
		];

//All Separate Data for PSP Graphs
		
var tempe_maintenance_PSPGRAPH_DATA = [{ data:mainpsp, label:"Tempe Maintenance", lines:{show:true}, points:{show:true}}
		];

var tempe_EPOS_PSPGRAPH_DATA = [{ data:epospsp, label:"Tempe EPOS", lines:{show:true}, points:{show:true}}
		];
		
var columbus_PSPGRAPH_DATA = [{ data:colpsp, label:"Columbus", lines:{show:true}, points:{show:true}}
		];
		
var sanford_PSPGRAPH_DATA = [{ data:sanpsp, label:"Sanford", lines:{show:true}, points:{show:true}}
		];	
		
var toronto_PSPGRAPH_DATA = [{ data:torpsp, label:"Toronto", lines:{show:true}, points:{show:true}}
		];
		
var laval_PSPGRAPH_DATA = [{ data:lavpsp, label:"Laval", lines:{show:true}, points:{show:true}}
		];

var psp_options = {

	xaxis: {
		 ticks: [[1, "Quarter 1"], [2, "Quarter 2"], [3, "Quarter 3"], [4, "Quarter 4"]],
		 axisLabel: '',
            axisLabelUseCanvas: true,
            axisLabelFontSizePixels: 20,
            axisLabelFontFamily: 'Arial'
		},
		/*yaxis: {
            axisLabel: '% answered in less than 3 min',
            
        },*/
		grid: {
			show: true,
			hoverable: true
		},
		tooltip: true,
		tooltipOpts: {
			content: "%y"
		}
	
}


//Calling Content for all Call Answer Time Graphs
$(document).ready(function () {$.plot($("#CAT_Overview_Graph"), CAT_Overview_Data, call_answer_time_options);});
$(document).ready(function () {$.plot($("#CAT_Overview_Graph2"), CAT_Overview_Data, call_answer_time_options);});
$(document).ready(function () {$.plot($("#tempe_maintenance_CATGRAPH"), tempe_maintenance_CATGRAPH_DATA, call_answer_time_options);});
$(document).ready(function () {$.plot($("#tempe_maintenance_CATGRAPH2"), tempe_maintenance_CATGRAPH_DATA, call_answer_time_options);});
$(document).ready(function () {$.plot($("#tempe_EPOS_CATGRAPH"), tempe_EPOS_CATGRAPH_DATA, call_answer_time_options);});
$(document).ready(function () {$.plot($("#tempe_EPOS_CATGRAPH2"), tempe_EPOS_CATGRAPH_DATA, call_answer_time_options);});
$(document).ready(function () {$.plot($("#columbus_CATGRAPH"), columbus_CATGRAPH_DATA, call_answer_time_options);});
$(document).ready(function () {$.plot($("#columbus_CATGRAPH2"), columbus_CATGRAPH_DATA, call_answer_time_options);});
$(document).ready(function () {$.plot($("#sanford_CATGRAPH"), sanford_CATGRAPH_DATA, call_answer_time_options);});
$(document).ready(function () {$.plot($("#sanford_CATGRAPH2"), sanford_CATGRAPH_DATA, call_answer_time_options);});
$(document).ready(function () {$.plot($("#toronto_CATGRAPH"), toronto_CATGRAPH_DATA, call_answer_time_options);});
$(document).ready(function () {$.plot($("#toronto_CATGRAPH2"), toronto_CATGRAPH_DATA, call_answer_time_options);});
$(document).ready(function () {$.plot($("#laval_CATGRAPH"), laval_CATGRAPH_DATA, call_answer_time_options);});
$(document).ready(function () {$.plot($("#laval_CATGRAPH2"), laval_CATGRAPH_DATA, call_answer_time_options);});

//Calling Content for all Average Hold Time Graphs
$(document).ready(function () {$.plot($("#AHT_Overview_Graph"), AHT_Overview_Data, average_hold_time_options);});
$(document).ready(function () {$.plot($("#AHT_Overview_Graph2"), AHT_Overview_Data, average_hold_time_options);});
$(document).ready(function () {$.plot($("#tempe_maintenance_AHTGRAPH"), tempe_maintenance_AHTGRAPH_DATA, average_hold_time_options);});
$(document).ready(function () {$.plot($("#tempe_maintenance_AHTGRAPH2"), tempe_maintenance_AHTGRAPH_DATA, average_hold_time_options);});
$(document).ready(function () {$.plot($("#tempe_EPOS_AHTGRAPH"), tempe_EPOS_AHTGRAPH_DATA, average_hold_time_options);});
$(document).ready(function () {$.plot($("#tempe_EPOS_AHTGRAPH2"), tempe_EPOS_AHTGRAPH_DATA, average_hold_time_options);});
$(document).ready(function () {$.plot($("#columbus_AHTGRAPH"), columbus_AHTGRAPH_DATA, average_hold_time_options);});
$(document).ready(function () {$.plot($("#columbus_AHTGRAPH2"), columbus_AHTGRAPH_DATA, average_hold_time_options);});
$(document).ready(function () {$.plot($("#sanford_AHTGRAPH"), sanford_AHTGRAPH_DATA, average_hold_time_options);});
$(document).ready(function () {$.plot($("#sanford_AHTGRAPH2"), sanford_AHTGRAPH_DATA, average_hold_time_options);});
$(document).ready(function () {$.plot($("#toronto_AHTGRAPH"), toronto_AHTGRAPH_DATA, average_hold_time_options);});
$(document).ready(function () {$.plot($("#toronto_AHTGRAPH2"), toronto_AHTGRAPH_DATA, average_hold_time_options);});
$(document).ready(function () {$.plot($("#laval_AHTGRAPH"), laval_AHTGRAPH_DATA, average_hold_time_options);});
$(document).ready(function () {$.plot($("#laval_AHTGRAPH2"), laval_AHTGRAPH_DATA, average_hold_time_options);});

//Calling Content for all Calls per Store Period Graphs
$(document).ready(function () {$.plot($("#PSP_Overview_Graph"), PSP_Overview_Data, psp_options);});
$(document).ready(function () {$.plot($("#PSP_Overview_Graph2"), PSP_Overview_Data, psp_options);});
$(document).ready(function () {$.plot($("#tempe_maintenance_PSPGRAPH"), tempe_maintenance_PSPGRAPH_DATA, psp_options);});
$(document).ready(function () {$.plot($("#tempe_maintenance_PSPGRAPH2"), tempe_maintenance_PSPGRAPH_DATA, psp_options);});
$(document).ready(function () {$.plot($("#tempe_EPOS_PSPGRAPH"), tempe_EPOS_PSPGRAPH_DATA, psp_options);});
$(document).ready(function () {$.plot($("#tempe_EPOS_PSPGRAPH2"), tempe_EPOS_PSPGRAPH_DATA, psp_options);});
$(document).ready(function () {$.plot($("#columbus_PSPGRAPH"), columbus_PSPGRAPH_DATA, psp_options);});
$(document).ready(function () {$.plot($("#columbus_PSPGRAPH2"), columbus_PSPGRAPH_DATA, psp_options);});
$(document).ready(function () {$.plot($("#sanford_PSPGRAPH"), sanford_PSPGRAPH_DATA, psp_options);});
$(document).ready(function () {$.plot($("#sanford_PSPGRAPH2"), sanford_PSPGRAPH_DATA, psp_options);});
$(document).ready(function () {$.plot($("#toronto_PSPGRAPH"), toronto_PSPGRAPH_DATA, psp_options);});
$(document).ready(function () {$.plot($("#toronto_PSPGRAPH2"), toronto_PSPGRAPH_DATA, psp_options);});
$(document).ready(function () {$.plot($("#laval_PSPGRAPH"), laval_PSPGRAPH_DATA, psp_options);});
$(document).ready(function () {$.plot($("#laval_PSPGRAPH2"), laval_PSPGRAPH_DATA, psp_options);});

//Calling Content for all Average Hold Time Graphs
//call content utilizing the id the graph will sit in- this is the #tempe_maintenance_CATGRAPH etc. 