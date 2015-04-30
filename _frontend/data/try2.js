//File Reading Functionality

// Check for the various File API support.
if (window.File && window.FileReader && window.FileList && window.Blob) {
  // Great success! All the File APIs are supported.
} else {
  alert('The File APIs are not fully supported in this browser.');
}

//ScriptReader
//Somewhere in this code we will piece together how to grab the goddamn values and paste them to the screen

		                    window.onload = function() {
		                    var fileInput = document.getElementById('fileInput');
		                    var fileDisplayArea = document.getElementById('fileDisplayArea');

		                    fileInput.addEventListener('change', function(e) {
		                   	var file = fileInput.files[0];
			                var textType = /text.*/;

		                        	if (file.type.match(textType)) {
				                    var reader = new FileReader();

				                    reader.onload = function(e) {
				                	fileDisplayArea.innerText = reader.result;
				                    var textytext= reader.result;
				                    fileDisplayArea.innerText = "Have a Couchetastic Day!";
				                    
				                    if(textytext !="")
				                    {
				                    	
				                		var myArray = textytext.split(" ");
										for(var i=0; i<myArray.length; i++) 
										{ 
											parseFloat(myArray[i]);
											myArray[i] = +myArray[i]; 
										} 
										alert("Success! Dashboard loading...");
				                    }
				                    
//All Data for Tempe Proper 
var temLPAB = [[1, -2], [2, .3], [3, 1], [4, .75]];
var temYDAB = [[1, -2], [2, .3], [3, 1], [4, .75]];

var temPF = [[1, 20], [2, 40], [3, 30], [4, 70]];
var temPO = [[1, 20], [2, 40], [3, 30], [4, 70]];

var temSDLW = [[1, 30], [2, 60], [3, 45], [4, 10]];
var temSDTW = [[1, 15], [2, 34], [3, 56], [4, 70]];

//Tempe/Col Data
var temcol_WAN = [[1, 96.874],[2, 97.874],[3, 95.874],[4, 98.874],[5, 95.874],[6, 97.874],[7, 97.874],[8, 98.874]];

//All Data for Tempe Maintenance
//var maincat = [[myArray[0], myArray[1]], [myArray[2], myArray[3]], [myArray[4], myArray[5]], [myArray[6], myArray[7]]];
//var mainaht = [[myArray[8], myArray[9]], [myArray[10], myArray[11]], [myArray[12], myArray[13]], [myArray[14], myArray[15]]];
//var mainpsp = [[myArray[16], myArray[17]], [myArray[18], myArray[19]], [myArray[20], myArray[21]], [myArray[22], myArray[23]]];

var maincat = [[myArray[0], myArray[1]], [myArray[2], myArray[3]], [myArray[4], myArray[5]], [myArray[6], myArray[7]]];
var mainaht = [[1,20], [2,30], [3,40], [4,50]];
var mainpsp = [[1,2.5], [2,3.4], [3,1.2], [4,7.8]];

//All Data for Tempe EPOS
//var eposcat = [[myArray[24], myArray[25]], [myArray[26], myArray[27]], [myArray[28], myArray[29]], [myArray[30], myArray[31]]];
//var eposaht = [[myArray[32], myArray[33]], [myArray[34], myArray[35]], [myArray[36], myArray[37]], [myArray[38], myArray[39]]];
//var epospsp = [[myArray[40], myArray[41]], [myArray[42], myArray[43]], [myArray[44], myArray[45]], [myArray[46], myArray[47]]];

var eposcat = [[1,80], [2,75.6], [3,73.2], [4,96.7]];
var eposaht = [[1,15], [2,25], [3,34], [4,78]];
var epospsp = [[1,3.1], [2,3.4], [3,8.7], [4,1.2]];

//All Data for Columbus
//var colcat = [[myArray[48], myArray[49]], [myArray[50], myArray[51]], [myArray[52], myArray[53]], [myArray[54], myArray[55]]];
//var colaht = [[myArray[56], myArray[57]], [myArray[58], myArray[59]], [myArray[60], myArray[61]], [myArray[62], myArray[63]]];
//var colpsp = [[myArray[64], myArray[65]], [myArray[66], myArray[67]], [myArray[68], myArray[69]], [myArray[70], myArray[71]]];

var colcat = [[1,68.4], [2,98.2], [3,87.3], [4,96.7]];
var colaht = [[1,25], [2,35], [3,24], [4,58]];
var colpsp = [[1,3.5], [2,6.4], [3,8.9], [4,3.2]];

var colLPAB = [[1, -2], [2, .3], [3, 1], [4, .75]];
var colYDAB = [[1, -2], [2, .3], [3, 1], [4, .75]];

var colPF = [[1, 20], [2, 40], [3, 30], [4, 70]];
var colPO = [[1, 20], [2, 40], [3, 30], [4, 70]];

var colSDLW = [[1, 30], [2, 60], [3, 45], [4, 10]];
var colSDTW = [[1, 15], [2, 34], [3, 56], [4, 70]];

//All Data for Sanford
//var sancat = [[myArray[72], myArray[73]], [myArray[74], myArray[75]], [myArray[76], myArray[77]], [myArray[78], myArray[79]]];
//var sanaht = [[myArray[80], myArray[81]], [myArray[82], myArray[83]], [myArray[84], myArray[85]], [myArray[86], myArray[87]]];
//var sanpsp = [[myArray[88], myArray[89]], [myArray[90], myArray[91]], [myArray[92], myArray[93]], [myArray[94], myArray[95]]];

var sancat = [[1,78.4], [2,68.2], [3,77.3], [4,86.7]];
var sanaht = [[1,35], [2,22], [3,26], [4,59]];
var sanpsp = [[1,5.5], [2,1.4], [3,7.9], [4,3.2]];

var san_WAN = [[1, 96.874],[2, 97.874],[3, 98.874],[4, 99.874],[5, 98.874],[6, 97.874],[7, 96.874],[8, 95.874]];

var sanLPAB = [[1, -2], [2, .3], [3, 1], [4, .75]];
var sanYDAB = [[1, -2], [2, .3], [3, 1], [4, .75]];

var sanPF = [[1, 20], [2, 40], [3, 30], [4, 70]];
var sanPO = [[1, 20], [2, 40], [3, 30], [4, 70]];

var sanSDLW = [[1, 30], [2, 60], [3, 45], [4, 10]];
var sanSDTW = [[1, 15], [2, 34], [3, 56], [4, 70]];

//All Data for Toronto
//var torcat = [[myArray[96], myArray[97]], [myArray[98], myArray[99]], [myArray[100], myArray[101]], [myArray[102], myArray[103]]];
//var toraht = [[myArray[104], myArray[105]], [myArray[106], myArray[107]], [myArray[108], myArray[109]], [myArray[110], myArray[111]]];
//var torpsp = [[myArray[112], myArray[113]], [myArray[114], myArray[115]], [myArray[116], myArray[117]], [myArray[118], myArray[119]]];

var torcat = [[1,66.4], [2,68.2], [3,81.3], [4,86.7]];
var toraht = [[1,10], [2,11], [3,12], [4,160]];
var torpsp = [[1,6.5], [2,3.4], [3,7.3], [4,3.9]];

var tor_WAN = [[1, 99.874],[2, 98.874],[3, 99.874],[4, 98.874],[5, 99.874],[6, 98.874],[7, 99.874],[8, 98.874]];

var torLPAB = [[1, -2], [2, .3], [3, 1], [4, .75]];
var torYDAB = [[1, -2], [2, .3], [3, 1], [4, .75]];

var torPF = [[1, 20], [2, 40], [3, 30], [4, 70]];
var torPO = [[1, 20], [2, 40], [3, 30], [4, 70]];

var torSDLW = [[1, 30], [2, 60], [3, 45], [4, 10]];
var torSDTW = [[1, 15], [2, 34], [3, 56], [4, 70]];

//All Data for Laval
//var lavcat = [[myArray[120], myArray[121]], [myArray[122], myArray[123]], [myArray[124], myArray[125]], [myArray[126], myArray[127]]];
//var lavaht = [[myArray[128], myArray[129]], [myArray[130], myArray[131]], [myArray[132], myArray[133]], [myArray[134], myArray[135]]];
//var lavpsp = [[myArray[136], myArray[137]], [myArray[138], myArray[139]], [myArray[140], myArray[141]], [myArray[142], myArray[143]]];

var lavcat = [[1,66.4], [2,68.2], [3,81.3], [4,86.7]];
var lavaht = [[1,10], [2,11], [3,12], [4,160]];
var lavpsp = [[1,6.5], [2,3.4], [3,7.3], [4,3.9]];

var lav_WAN = [[1, 95.874],[2, 96.874],[3, 95.874],[4, 96.874],[5, 95.874],[6, 96.874],[7, 95.874],[8, 96.874]];

var lavLPAB = [[1, -2], [2, .3], [3, 1], [4, .75]];
var lavYDAB = [[1, -2], [2, .3], [3, 1], [4, .75]];

var lavPF = [[1, 20], [2, 40], [3, 30], [4, 70]];
var lavPO = [[1, 20], [2, 40], [3, 30], [4, 70]];

var lavSDLW = [[1, 30], [2, 60], [3, 45], [4, 10]];
var lavSDTW = [[1, 15], [2, 34], [3, 56], [4, 70]];


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

//Fixed Axis on Graphs
var call_answer_time_options = {

	xaxis: {
		 ticks: [[1, "Week 1"], [2, "Week 2"], [3, "Week 3"], [4, "Week 4"], [5, "Week 5"], [6, "Week 6"], [7, "Week 7"], [8, "Week 8"]],
		 axisLabel: '',
            axisLabelUseCanvas: false,
            axisLabelFontSizePixels: 20,
            axisLabelFontFamily: 'Arial'
		},
		yaxis: { min:50, max:100,
		axisLabel: 'Calls Answered in Less Than Five Minutes (%)',
            axisLabelUseCanvas: true,
            axisLabelFontSizePixels: 13,
            axisLabelFontFamily: 'Arial'
		},
		grid: {
			show: true,
			hoverable: true
		},
		tooltip: true,
		tooltipOpts: {
			content: "%y"
		}
	
};


var call_answer_time_options_epos = {

	xaxis: {
		 ticks: [[1, "Week 1"], [2, "Week 2"], [3, "Week 3"], [4, "Week 4"], [5, "Week 5"], [6, "Week 6"], [7, "Week 7"], [8, "Week 8"]],
		 axisLabel: '',
            axisLabelUseCanvas: true,
            axisLabelFontSizePixels: 20,
            axisLabelFontFamily: 'Arial'
		},
		
		yaxis: { min:50, max:100,
		tickFormatter: function(val, axis) { return val < axis.max ? val.toFixed(2) : "Calls Answered in Less Than Five Minutes (%)";}
		},
		
		grid: {
			show: true,
			hoverable: true
		},
		tooltip: true,
		tooltipOpts: {
			content: "%y"
		},
		
		colors: ["#F1D170"]
	
};

var call_answer_time_options_main = {

	xaxis: {
		 ticks: [[1, "Week 1"], [2, "Week 2"], [3, "Week 3"], [4, "Week 4"], [5, "Week 5"], [6, "Week 6"], [7, "Week 7"], [8, "Week 8"]],
		 axisLabel: '',
            axisLabelUseCanvas: true,
            axisLabelFontSizePixels: 20,
            axisLabelFontFamily: 'Arial'
		},
		yaxis: { min:50, max:100,
		tickFormatter: function(val, axis) { return val < axis.max ? val.toFixed(2) : "Calls Answered in Less Than Five Minutes (%)";}
		},
		grid: {
			show: true,
			hoverable: true
		},
		tooltip: true,
		tooltipOpts: {
			content: "%y"
		},
		
		colors: ["#AFD8F8"]
	
};

var call_answer_time_options_col = {

	xaxis: {
		 ticks: [[1, "Week 1"], [2, "Week 2"], [3, "Week 3"], [4, "Week 4"], [5, "Week 5"], [6, "Week 6"], [7, "Week 7"], [8, "Week 8"]],
		 axisLabel: '',
            axisLabelUseCanvas: true,
            axisLabelFontSizePixels: 20,
            axisLabelFontFamily: 'Arial'
		},
		yaxis: { min:50, max:100,
		tickFormatter: function(val, axis) { return val < axis.max ? val.toFixed(2) : "Calls Answered in Less Than Five Minutes (%)";}
		},
		grid: {
			show: true,
			hoverable: true
		},
		tooltip: true,
		tooltipOpts: {
			content: "%y"
		},
		
		colors: ["#CB4B4B"]
	
};

var call_answer_time_options_san = {

	xaxis: {
		 ticks: [[1, "Week 1"], [2, "Week 2"], [3, "Week 3"], [4, "Week 4"], [5, "Week 5"], [6, "Week 6"], [7, "Week 7"], [8, "Week 8"]],
		 axisLabel: '',
            axisLabelUseCanvas: true,
            axisLabelFontSizePixels: 20,
            axisLabelFontFamily: 'Arial'
		},
		yaxis: { min:50, max:100,
		tickFormatter: function(val, axis) { return val < axis.max ? val.toFixed(2) : "Calls Answered in Less Than Five Minutes (%)";}
		},
		grid: {
			show: true,
			hoverable: true
		},
		tooltip: true,
		tooltipOpts: {
			content: "%y"
		},
		
		colors: ["#4DA74D"]
	
};

var call_answer_time_options_tor = {

	xaxis: {
		 ticks: [[1, "Week 1"], [2, "Week 2"], [3, "Week 3"], [4, "Week 4"], [5, "Week 5"], [6, "Week 6"], [7, "Week 7"], [8, "Week 8"]],
		 axisLabel: '',
            axisLabelUseCanvas: true,
            axisLabelFontSizePixels: 20,
            axisLabelFontFamily: 'Arial'
		},
		yaxis: { min:50, max:100,
		tickFormatter: function(val, axis) { return val < axis.max ? val.toFixed(2) : "Calls Answered in Less Than Five Minutes (%)";}
		},
		grid: {
			show: true,
			hoverable: true
		},
		tooltip: true,
		tooltipOpts: {
			content: "%y"
		},
		
		colors: ["#9440ED"]
	
};

var call_answer_time_options_lav = {

	xaxis: {
		 ticks: [[1, "Week 1"], [2, "Week 2"], [3, "Week 3"], [4, "Week 4"], [5, "Week 5"], [6, "Week 6"], [7, "Week 7"], [8, "Week 8"]],
		 axisLabel: '',
            axisLabelUseCanvas: true,
            axisLabelFontSizePixels: 20,
            axisLabelFontFamily: 'Arial'
		},
		yaxis: { min:50, max:100,
		tickFormatter: function(val, axis) { return val < axis.max ? val.toFixed(2) : "Calls Answered in Less Than Five Minutes (%)";}
		},
		grid: {
			show: true,
			hoverable: true
		},
		tooltip: true,
		tooltipOpts: {
			content: "%y"
		},
		
		colors: ["#BD9B33"]
	
};

//Average Hold Time Overview Graph Data
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
		 ticks: [[1, "Week 1"], [2, "Week 2"], [3, "Week 3"], [4, "Week 4"], [5, "Week 5"], [6, "Week 6"], [7, "Week 7"], [8, "Week 8"]],
		 axisLabel: '',
            axisLabelUseCanvas: true,
            axisLabelFontSizePixels: 20,
            axisLabelFontFamily: 'Arial'
		},
		yaxis: { min:10, max:175,
		axisLabel: 'Average Hold Time (Seconds)                             ',
            axisLabelUseCanvas: true,
            axisLabelFontSizePixels: 13,
            axisLabelFontFamily: 'Arial'
		},
		grid: {
			show: true,
			hoverable: true
		},
		tooltip: true,
		tooltipOpts: {
			content: "%y"
		}
	
};


var average_hold_time_options_epos = {

	xaxis: {
		 ticks: [[1, "Week 1"], [2, "Week 2"], [3, "Week 3"], [4, "Week 4"], [5, "Week 5"], [6, "Week 6"], [7, "Week 7"], [8, "Week 8"]],
		 axisLabel: '',
            axisLabelUseCanvas: true,
            axisLabelFontSizePixels: 20,
            axisLabelFontFamily: 'Arial'
		},
			yaxis: { min:30, max:175,
		tickFormatter: function(val, axis) { return val < axis.max ? val.toFixed(2) : "Average Hold Time (Seconds)                           ";}
		},
		grid: {
			show: true,
			hoverable: true
		},
		tooltip: true,
		tooltipOpts: {
			content: "%y"
		},
		
		colors: ["#F1D170"]
	
};

var average_hold_time_options_main = {

	xaxis: {
		 ticks: [[1, "Week 1"], [2, "Week 2"], [3, "Week 3"], [4, "Week 4"], [5, "Week 5"], [6, "Week 6"], [7, "Week 7"], [8, "Week 8"]],
		 axisLabel: '',
            axisLabelUseCanvas: true,
            axisLabelFontSizePixels: 20,
            axisLabelFontFamily: 'Arial'
		},
			yaxis: { min:30, max:170,
		axisLabel: 'Average Hold Time (Seconds)',
            axisLabelUseCanvas: true,
            axisLabelFontSizePixels: 13,
            axisLabelFontFamily: 'Arial'
		},
		grid: {
			show: true,
			hoverable: true
		},
		tooltip: true,
		tooltipOpts: {
			content: "%y"
		},
		
		colors: ["#AFD8F8"]
	
};

var average_hold_time_options_col = {

	xaxis: {
		 ticks: [[1, "Week 1"], [2, "Week 2"], [3, "Week 3"], [4, "Week 4"], [5, "Week 5"], [6, "Week 6"], [7, "Week 7"], [8, "Week 8"]],
		 axisLabel: '',
            axisLabelUseCanvas: true,
            axisLabelFontSizePixels: 20,
            axisLabelFontFamily: 'Arial'
		},
			yaxis: { min:30, max:175,
		tickFormatter: function(val, axis) { return val < axis.max ? val.toFixed(2) : "Average Hold Time (Seconds)                           ";}
		},
		grid: {
			show: true,
			hoverable: true
		},
		tooltip: true,
		tooltipOpts: {
			content: "%y"
		},
		
		colors: ["#CB4B4B"]
	
};

var average_hold_time_options_san = {

	xaxis: {
		 ticks: [[1, "Week 1"], [2, "Week 2"], [3, "Week 3"], [4, "Week 4"], [5, "Week 5"], [6, "Week 6"], [7, "Week 7"], [8, "Week 8"]],
		 axisLabel: '',
            axisLabelUseCanvas: true,
            axisLabelFontSizePixels: 20,
            axisLabelFontFamily: 'Arial'
		},
			yaxis: { min:30, max:175,
		tickFormatter: function(val, axis) { return val < axis.max ? val.toFixed(2) : "Average Hold Time (Seconds)                           ";}
		},
		grid: {
			show: true,
			hoverable: true
		},
		tooltip: true,
		tooltipOpts: {
			content: "%y"
		},
		
		colors: ["#4DA74D"]
	
};

var average_hold_time_options_tor = {

	xaxis: {
		 ticks: [[1, "Week 1"], [2, "Week 2"], [3, "Week 3"], [4, "Week 4"], [5, "Week 5"], [6, "Week 6"], [7, "Week 7"], [8, "Week 8"]],
		 axisLabel: '',
            axisLabelUseCanvas: true,
            axisLabelFontSizePixels: 20,
            axisLabelFontFamily: 'Arial'
		},
			yaxis: { min:30, max:175,
		tickFormatter: function(val, axis) { return val < axis.max ? val.toFixed(2) : "Average Hold Time (Seconds)                           ";}
		},
		grid: {
			show: true,
			hoverable: true
		},
		tooltip: true,
		tooltipOpts: {
			content: "%y"
		},
		
		colors: ["#9440ED"]
	
};

var average_hold_time_options_lav = {

	xaxis: {
		 ticks: [[1, "Week 1"], [2, "Week 2"], [3, "Week 3"], [4, "Week 4"], [5, "Week 5"], [6, "Week 6"], [7, "Week 7"], [8, "Week 8"]],
		 axisLabel: '',
            axisLabelUseCanvas: true,
            axisLabelFontSizePixels: 20,
            axisLabelFontFamily: 'Arial'
		},
			yaxis: { min:30, max:175,
		tickFormatter: function(val, axis) { return val < axis.max ? val.toFixed(2) : "Average Hold Time (Seconds)                           ";}
		},
		grid: {
			show: true,
			hoverable: true
		},
		tooltip: true,
		tooltipOpts: {
			content: "%y"
		},
		
		colors: ["#BD9B33"]
	
};

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
		 ticks: [[1, "Week 1"], [2, "Week 2"], [3, "Week 3"], [4, "Week 4"], [5, "Week 5"], [6, "Week 6"], [7, "Week 7"], [8, "Week 8"]],
		 axisLabel: '',
            axisLabelUseCanvas: true,
            axisLabelFontSizePixels: 20,
            axisLabelFontFamily: 'Arial'
		},
				yaxis: { min:0, max:10,
		axisLabel: 'Calls Per Store Period (#)                                  ',
            axisLabelUseCanvas: true,
            axisLabelFontSizePixels: 13,
            axisLabelFontFamily: 'Arial'
		},
		grid: {
			show: true,
			hoverable: true
		},
		tooltip: true,
		tooltipOpts: {
			content: "%y"
		}
	
};


var psp_options_epos = {

	xaxis: {
		 ticks: [[1, "Week 1"], [2, "Week 2"], [3, "Week 3"], [4, "Week 4"], [5, "Week 5"], [6, "Week 6"], [7, "Week 7"], [8, "Week 8"]],
		 axisLabel: '',
            axisLabelUseCanvas: true,
            axisLabelFontSizePixels: 20,
            axisLabelFontFamily: 'Arial'
		},
			yaxis: { min:0, max:10,
		tickFormatter: function(val, axis) { return val < axis.max ? val.toFixed(2) : "Calls Per Store Period (#)                                  ";}
		},
		grid: {
			show: true,
			hoverable: true
		},
		tooltip: true,
		tooltipOpts: {
			content: "%y"
		},
		
		colors: ["#F1D170"]
	
};

var psp_options_main = {

	xaxis: {
		 ticks: [[1, "Week 1"], [2, "Week 2"], [3, "Week 3"], [4, "Week 4"], [5, "Week 5"], [6, "Week 6"], [7, "Week 7"], [8, "Week 8"]],
		 axisLabel: '',
            axisLabelUseCanvas: true,
            axisLabelFontSizePixels: 20,
            axisLabelFontFamily: 'Arial'
		},
			yaxis: { min:0, max:10,
		tickFormatter: function(val, axis) { return val < axis.max ? val.toFixed(2) : "Calls Per Store Period (#)                                  ";}
		},
		grid: {
			show: true,
			hoverable: true
		},
		tooltip: true,
		tooltipOpts: {
			content: "%y"
		},
		
		colors: ["#AFD8F8"]
	
};

var psp_options_col = {

	xaxis: {
		 ticks: [[1, "Week 1"], [2, "Week 2"], [3, "Week 3"], [4, "Week 4"], [5, "Week 5"], [6, "Week 6"], [7, "Week 7"], [8, "Week 8"]],
		 axisLabel: '',
            axisLabelUseCanvas: true,
            axisLabelFontSizePixels: 20,
            axisLabelFontFamily: 'Arial'
		},
			yaxis: { min:0, max:10,
		tickFormatter: function(val, axis) { return val < axis.max ? val.toFixed(2) : "Calls Per Store Period (#)                                  ";}
		},
		grid: {
			show: true,
			hoverable: true
		},
		tooltip: true,
		tooltipOpts: {
			content: "%y"
		},
		
		colors: ["#CB4B4B"]
	
};

var psp_options_san = {

	xaxis: {
		 ticks: [[1, "Week 1"], [2, "Week 2"], [3, "Week 3"], [4, "Week 4"], [5, "Week 5"], [6, "Week 6"], [7, "Week 7"], [8, "Week 8"]],
		 axisLabel: '',
            axisLabelUseCanvas: true,
            axisLabelFontSizePixels: 20,
            axisLabelFontFamily: 'Arial'
		},
			yaxis: { min:0, max:10,
		tickFormatter: function(val, axis) { return val < axis.max ? val.toFixed(2) : "Calls Per Store Period (#)                                  ";}
		},
		grid: {
			show: true,
			hoverable: true
		},
		tooltip: true,
		tooltipOpts: {
			content: "%y"
		},
		
		colors: ["#4DA74D"]
	
};

var psp_options_tor = {

	xaxis: {
		 ticks: [[1, "Week 1"], [2, "Week 2"], [3, "Week 3"], [4, "Week 4"], [5, "Week 5"], [6, "Week 6"], [7, "Week 7"], [8, "Week 8"]],
		 axisLabel: '',
            axisLabelUseCanvas: true,
            axisLabelFontSizePixels: 20,
            axisLabelFontFamily: 'Arial'
		},
			yaxis: { min:0, max:10,
		tickFormatter: function(val, axis) { return val < axis.max ? val.toFixed(2) : "Calls Per Store Period (#)                                  ";}
		},
		grid: {
			show: true,
			hoverable: true
		},
		tooltip: true,
		tooltipOpts: {
			content: "%y"
		},
		
		colors: ["#9440ED"]
	
};

var psp_options_lav = {

	xaxis: {
		 ticks: [[1, "Week 1"], [2, "Week 2"], [3, "Week 3"], [4, "Week 4"], [5, "Week 5"], [6, "Week 6"], [7, "Week 7"], [8, "Week 8"]],
		 axisLabel: '',
            axisLabelUseCanvas: true,
            axisLabelFontSizePixels: 20,
            axisLabelFontFamily: 'Arial'
		},
			yaxis: { min:0, max:10,
		tickFormatter: function(val, axis) { return val < axis.max ? val.toFixed(2) : "Calls Per Store Period (#)                                  ";}
		},
		grid: {
			show: true,
			hoverable: true
		},
		tooltip: true,
		tooltipOpts: {
			content: "%y"
		},
		
		colors: ["#BD9B33"]
	
};

//Network Uptime Graphs
//Calls Answer Time Overview Graph Data
var WAN_Overview_Data = [{ data:eposaht, label:"Tempe EPOS", lines:{show:true}, points:{show:true}}
		,{ data:mainaht, label:"Tempe Maintenance", lines:{show:true}, points:{show:true}}
		,{ data:colaht, label:"Columbus", lines:{show:true}, points:{show:true}}
		,{ data:sanaht, label:"Sanford", lines:{show:true}, points:{show:true}}
		,{ data:toraht, label:"Toronto", lines:{show:true}, points:{show:true}}
		,{ data:lavaht, label:"Laval", lines:{show:true}, points:{show:true}}
		];
		
var WAN_options = {

	xaxis: {
		 ticks: [[1, "Week 1"], [2, "Week 2"], [3, "Week 3"], [4, "Week 4"], [5, "Week 5"], [6, "Week 6"], [7, "Week 7"], [8, "Week 8"]],
		 axisLabel: '',
            axisLabelUseCanvas: true,
            axisLabelFontSizePixels: 20,
            axisLabelFontFamily: 'Arial'
		},
			yaxis: { min:98, max:100,
			axisLabel: 'Calls Per Store Period (#)',
            axisLabelUseCanvas: true,
            axisLabelFontSizePixels: 13,
            axisLabelFontFamily: 'Arial'
		},
		grid: {
			show: true,
			hoverable: true
		},
		tooltip: true,
		tooltipOpts: {
			content: "%y"
		}
	
};


//Calling Content for all Call Answer Time Graphs
$(document).ready(function () {$.plot($("#CAT_Overview_Graph"), CAT_Overview_Data, call_answer_time_options);});
$(document).ready(function () {$.plot($("#CAT_Overview_Graph2"), CAT_Overview_Data, call_answer_time_options);});
$(document).ready(function () {$.plot($("#tempe_maintenance_CATGRAPH"), tempe_maintenance_CATGRAPH_DATA, call_answer_time_options_main);});
$(document).ready(function () {$.plot($("#tempe_maintenance_CATGRAPH2"), tempe_maintenance_CATGRAPH_DATA, call_answer_time_options_main);});
$(document).ready(function () {$.plot($("#tempe_EPOS_CATGRAPH"), tempe_EPOS_CATGRAPH_DATA, call_answer_time_options_epos);});
$(document).ready(function () {$.plot($("#tempe_EPOS_CATGRAPH2"), tempe_EPOS_CATGRAPH_DATA, call_answer_time_options_epos);});
$(document).ready(function () {$.plot($("#columbus_CATGRAPH"), columbus_CATGRAPH_DATA, call_answer_time_options_col);});
$(document).ready(function () {$.plot($("#columbus_CATGRAPH2"), columbus_CATGRAPH_DATA, call_answer_time_options_col);});
$(document).ready(function () {$.plot($("#sanford_CATGRAPH"), sanford_CATGRAPH_DATA, call_answer_time_options_san);});
$(document).ready(function () {$.plot($("#sanford_CATGRAPH2"), sanford_CATGRAPH_DATA, call_answer_time_options_san);});
$(document).ready(function () {$.plot($("#toronto_CATGRAPH"), toronto_CATGRAPH_DATA, call_answer_time_options_tor);});
$(document).ready(function () {$.plot($("#toronto_CATGRAPH2"), toronto_CATGRAPH_DATA, call_answer_time_options_tor);});
$(document).ready(function () {$.plot($("#laval_CATGRAPH"), laval_CATGRAPH_DATA, call_answer_time_options_lav);});
$(document).ready(function () {$.plot($("#laval_CATGRAPH2"), laval_CATGRAPH_DATA, call_answer_time_options_lav);});

//Calling Content for all Average Hold Time Graphs
$(document).ready(function () {$.plot($("#AHT_Overview_Graph"), AHT_Overview_Data, average_hold_time_options);});
$(document).ready(function () {$.plot($("#AHT_Overview_Graph2"), AHT_Overview_Data, average_hold_time_options);});
$(document).ready(function () {$.plot($("#tempe_maintenance_AHTGRAPH"), tempe_maintenance_AHTGRAPH_DATA, average_hold_time_options_main);});
$(document).ready(function () {$.plot($("#tempe_maintenance_AHTGRAPH2"), tempe_maintenance_AHTGRAPH_DATA, average_hold_time_options_main);});
$(document).ready(function () {$.plot($("#tempe_EPOS_AHTGRAPH"), tempe_EPOS_AHTGRAPH_DATA, average_hold_time_options_epos);});
$(document).ready(function () {$.plot($("#tempe_EPOS_AHTGRAPH2"), tempe_EPOS_AHTGRAPH_DATA, average_hold_time_options_epos);});
$(document).ready(function () {$.plot($("#columbus_AHTGRAPH"), columbus_AHTGRAPH_DATA, average_hold_time_options_col);});
$(document).ready(function () {$.plot($("#columbus_AHTGRAPH2"), columbus_AHTGRAPH_DATA, average_hold_time_options_col);});
$(document).ready(function () {$.plot($("#sanford_AHTGRAPH"), sanford_AHTGRAPH_DATA, average_hold_time_options_san);});
$(document).ready(function () {$.plot($("#sanford_AHTGRAPH2"), sanford_AHTGRAPH_DATA, average_hold_time_options_san);});
$(document).ready(function () {$.plot($("#toronto_AHTGRAPH"), toronto_AHTGRAPH_DATA, average_hold_time_options_tor);});
$(document).ready(function () {$.plot($("#toronto_AHTGRAPH2"), toronto_AHTGRAPH_DATA, average_hold_time_options_tor);});
$(document).ready(function () {$.plot($("#laval_AHTGRAPH"), laval_AHTGRAPH_DATA, average_hold_time_options_lav);});
$(document).ready(function () {$.plot($("#laval_AHTGRAPH2"), laval_AHTGRAPH_DATA, average_hold_time_options_lav);});

//Calling Content for all Calls per Store Period Graphs
$(document).ready(function () {$.plot($("#PSP_Overview_Graph"), PSP_Overview_Data, psp_options);});
$(document).ready(function () {$.plot($("#PSP_Overview_Graph2"), PSP_Overview_Data, psp_options);});
$(document).ready(function () {$.plot($("#tempe_maintenance_PSPGRAPH"), tempe_maintenance_PSPGRAPH_DATA, psp_options_main);});
$(document).ready(function () {$.plot($("#tempe_maintenance_PSPGRAPH2"), tempe_maintenance_PSPGRAPH_DATA, psp_options_main);});
$(document).ready(function () {$.plot($("#tempe_EPOS_PSPGRAPH"), tempe_EPOS_PSPGRAPH_DATA, psp_options_epos);});
$(document).ready(function () {$.plot($("#tempe_EPOS_PSPGRAPH2"), tempe_EPOS_PSPGRAPH_DATA, psp_options_epos);});
$(document).ready(function () {$.plot($("#columbus_PSPGRAPH"), columbus_PSPGRAPH_DATA, psp_options_col);});
$(document).ready(function () {$.plot($("#columbus_PSPGRAPH2"), columbus_PSPGRAPH_DATA, psp_options_col);});
$(document).ready(function () {$.plot($("#sanford_PSPGRAPH"), sanford_PSPGRAPH_DATA, psp_options_san);});
$(document).ready(function () {$.plot($("#sanford_PSPGRAPH2"), sanford_PSPGRAPH_DATA, psp_options_san);});
$(document).ready(function () {$.plot($("#toronto_PSPGRAPH"), toronto_PSPGRAPH_DATA, psp_options_tor);});
$(document).ready(function () {$.plot($("#toronto_PSPGRAPH2"), toronto_PSPGRAPH_DATA, psp_options_tor);});
$(document).ready(function () {$.plot($("#laval_PSPGRAPH"), laval_PSPGRAPH_DATA, psp_options_lav);});
$(document).ready(function () {$.plot($("#laval_PSPGRAPH2"), laval_PSPGRAPH_DATA, psp_options_lav);});

//Calling Content for  Last Period Performance Against Budget
//$(document).ready(function () {$.plot($("#LPAB_Overview_Graph"), dataset);});
//$(document).ready(function () {$.plot($("#LPAB_Overview_Graph2"), dataset);});
/*$(document).ready(function () {$.plot($("#tempe_maintenance_CATGRAPH"), tempe_maintenance_CATGRAPH_DATA, call_answer_time_options);});
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
$(document).ready(function () {$.plot($("#laval_CATGRAPH2"), laval_CATGRAPH_DATA, call_answer_time_options);});*/

//Calling Content for Network Uptime


//Calling Content for  Year to Date Performance Against Budget

//Calling Content for all Average Hold Time Graphs
			               	}

				            reader.readAsText(file);	
		                   	} else {
			            	fileDisplayArea.innerText = "File not supported!";
		                   	}
		                    });
                        }



//call content utilizing the id the graph will sit in- this is the #tempe_maintenance_CATGRAPH etc. 