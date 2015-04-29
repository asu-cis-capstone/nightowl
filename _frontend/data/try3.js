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

//Tempe/Col Data
var temcol_WAN = [[1, 99.874],[2, 99.874],[3, 99.874],[4, 99.874],[5, 99.874],[6, 99.874],[7, 99.874],[8, 99.874]];

//All Data for Tempe Maintenance
var maincat = [[myArray[0], myArray[1]], [myArray[2], myArray[3]], [myArray[4], myArray[5]], [myArray[6], myArray[7]]];
var mainaht = [[myArray[8], myArray[9]], [myArray[10], myArray[11]], [myArray[12], myArray[13]], [myArray[14], myArray[15]]];
var mainpsp = [[myArray[16], myArray[17]], [myArray[18], myArray[19]], [myArray[20], myArray[21]], [myArray[22], myArray[23]]];

//All Data for Tempe EPOS
var eposcat = [[myArray[24], myArray[25]], [myArray[26], myArray[27]], [myArray[28], myArray[29]], [myArray[30], myArray[31]]];
var eposaht = [[myArray[32], myArray[33]], [myArray[34], myArray[35]], [myArray[36], myArray[37]], [myArray[38], myArray[39]]];
var epospsp = [[myArray[40], myArray[41]], [myArray[42], myArray[43]], [myArray[44], myArray[45]], [myArray[46], myArray[47]]];

//All Data for Columbus
var colcat = [[myArray[48], myArray[49]], [myArray[50], myArray[51]], [myArray[52], myArray[53]], [myArray[54], myArray[55]]];
var colaht = [[myArray[56], myArray[57]], [myArray[58], myArray[59]], [myArray[60], myArray[61]], [myArray[62], myArray[63]]];
var colpsp = [[myArray[64], myArray[65]], [myArray[66], myArray[67]], [myArray[68], myArray[69]], [myArray[70], myArray[71]]];

var colLPAB = [[1, -2], [2, .3], [3, 1], [4, .75]];
var colYDAB = [[1, -2], [2, .3], [3, 1], [4, .75]];

//All Data for Sanford
var sancat = [[myArray[72], myArray[73]], [myArray[74], myArray[75]], [myArray[76], myArray[77]], [myArray[78], myArray[79]]];
var sanaht = [[myArray[80], myArray[81]], [myArray[82], myArray[83]], [myArray[84], myArray[85]], [myArray[86], myArray[87]]];
var sanpsp = [[myArray[88], myArray[89]], [myArray[90], myArray[91]], [myArray[92], myArray[93]], [myArray[94], myArray[95]]];

var sanLPAB = [[1, -2], [2, .3], [3, 1], [4, .75]];
var sanYDAB = [[1, -2], [2, .3], [3, 1], [4, .75]];

//All Data for Toronto
var torcat = [[myArray[96], myArray[97]], [myArray[98], myArray[99]], [myArray[100], myArray[101]], [myArray[102], myArray[103]]];
var toraht = [[myArray[104], myArray[105]], [myArray[106], myArray[107]], [myArray[108], myArray[109]], [myArray[110], myArray[111]]];
var torpsp = [[myArray[112], myArray[113]], [myArray[114], myArray[115]], [myArray[116], myArray[117]], [myArray[118], myArray[119]]];

var torLPAB = [[1, -2], [2, .3], [3, 1], [4, .75]];
var torYDAB = [[1, -2], [2, .3], [3, 1], [4, .75]];


//All Data for Laval
var lavcat = [[myArray[120], myArray[121]], [myArray[122], myArray[123]], [myArray[124], myArray[125]], [myArray[126], myArray[127]]];
var lavaht = [[myArray[128], myArray[129]], [myArray[130], myArray[131]], [myArray[132], myArray[133]], [myArray[134], myArray[135]]];
var lavpsp = [[myArray[136], myArray[137]], [myArray[138], myArray[139]], [myArray[140], myArray[141]], [myArray[142], myArray[143]]];

var lavLPAB = [[1, -2], [2, .3], [3, 1], [4, .75]];
var lavYDAB = [[1, -2], [2, .3], [3, 1], [4, .75]];


//Calls Answer Time Overview Graph Data
var LPAB_Overview_Data = [{ data:temLPAB, label:"Tempe", lines:{show:true}, points:{show:true}}
		,{ data:colLPAB, label:"Columbus", lines:{show:true}, points:{show:true}}
		,{ data:sanLPAB, label:"Sanford", lines:{show:true}, points:{show:true}}
		,{ data:torLPAB, label:"Toronto", lines:{show:true}, points:{show:true}}
		,{ data:lavLPAB, label:"Laval", lines:{show:true}, points:{show:true}}
		];

//All Separate Data for CAT Graphs
		
var tempe_LPABGRAPH_DATA = [{ data:temLPAB, label:"Tempe", lines:{show:true}, points:{show:true}}
		];

var columbus_LPABGRAPH_DATA = [{ data:colLPAB, label:"Tempe Columbus", lines:{show:true}, points:{show:true}}
		];
		
		
var sanford_LPABGRAPH_DATA = [{ data:sanLPAB, label:"Sanford", lines:{show:true}, points:{show:true}}
		];	
		
var toronto_LPABGRAPH_DATA = [{ data:torLPAB, label:"Toronto", lines:{show:true}, points:{show:true}}
		];
		
var laval_LPABGRAPH_DATA = [{ data:lavLPAB, label:"Laval", lines:{show:true}, points:{show:true}}
		];

//Fixed Axis on Graphs
var LPAB_options = {

	xaxis: {
		 ticks: [[1, "Week 1"], [2, "Week 2"], [3, "Week 3"], [4, "Week 4"], [5, "Week 5"], [6, "Week 6"], [7, "Week 7"], [8, "Week 8"]],
		 axisLabel: '',
            axisLabelUseCanvas: true,
            axisLabelFontSizePixels: 20,
            axisLabelFontFamily: 'Arial'
		},
		yaxis: { min:-5, max:4,
		tickFormatter: function(val, axis) { return val < axis.max ? val.toFixed(2) : "Last Period Performance Against Budget (%)";}
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


var tem_LPAB_options = {

	xaxis: {
		 ticks: [[1, "Week 1"], [2, "Week 2"], [3, "Week 3"], [4, "Week 4"], [5, "Week 5"], [6, "Week 6"], [7, "Week 7"], [8, "Week 8"]],
		 axisLabel: '',
            axisLabelUseCanvas: true,
            axisLabelFontSizePixels: 20,
            axisLabelFontFamily: 'Arial'
		},
		yaxis: { min:-5, max:4,
		tickFormatter: function(val, axis) { return val < axis.max ? val.toFixed(2) : "Last Period Performance Against Budget (%)";}
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

var col_LPAB_options = {

	xaxis: {
		 ticks: [[1, "Week 1"], [2, "Week 2"], [3, "Week 3"], [4, "Week 4"], [5, "Week 5"], [6, "Week 6"], [7, "Week 7"], [8, "Week 8"]],
		 axisLabel: '',
            axisLabelUseCanvas: true,
            axisLabelFontSizePixels: 20,
            axisLabelFontFamily: 'Arial'
		},
		yaxis: { min:-5, max:4,
		tickFormatter: function(val, axis) { return val < axis.max ? val.toFixed(2) : "Last Period Performance Against Budget (%)";}
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

var san_LPAB_options = {

	xaxis: {
		 ticks: [[1, "Week 1"], [2, "Week 2"], [3, "Week 3"], [4, "Week 4"], [5, "Week 5"], [6, "Week 6"], [7, "Week 7"], [8, "Week 8"]],
		 axisLabel: '',
            axisLabelUseCanvas: true,
            axisLabelFontSizePixels: 20,
            axisLabelFontFamily: 'Arial'
		},
		yaxis: { min:-5, max:4,
		tickFormatter: function(val, axis) { return val < axis.max ? val.toFixed(2) : "Last Period Performance Against Budget (%)";}
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

var tor_LPAB_options = {

	xaxis: {
		 ticks: [[1, "Week 1"], [2, "Week 2"], [3, "Week 3"], [4, "Week 4"], [5, "Week 5"], [6, "Week 6"], [7, "Week 7"], [8, "Week 8"]],
		 axisLabel: '',
            axisLabelUseCanvas: true,
            axisLabelFontSizePixels: 20,
            axisLabelFontFamily: 'Arial'
		},
		yaxis: { min:-5, max:4,
		tickFormatter: function(val, axis) { return val < axis.max ? val.toFixed(2) : "Last Period Performance Against Budget (%)";}
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

var lav_LPAB_options = {

	xaxis: {
		 ticks: [[1, "Week 1"], [2, "Week 2"], [3, "Week 3"], [4, "Week 4"], [5, "Week 5"], [6, "Week 6"], [7, "Week 7"], [8, "Week 8"]],
		 axisLabel: '',
            axisLabelUseCanvas: true,
            axisLabelFontSizePixels: 20,
            axisLabelFontFamily: 'Arial'
		},
		yaxis: { min:-5, max:4,
		tickFormatter: function(val, axis) { return val < axis.max ? val.toFixed(2) : "Last Period Performance Against Budget (%)";}
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



//YDAB Graph Data
var YDAB_Overview_Data = [{ data:temYDAB, label:"Tempe", lines:{show:true}, points:{show:true}}
		,{ data:colYDAB, label:"Columbus", lines:{show:true}, points:{show:true}}
		,{ data:sanYDAB, label:"Sanford", lines:{show:true}, points:{show:true}}
		,{ data:torYDAB, label:"Toronto", lines:{show:true}, points:{show:true}}
		,{ data:lavYDAB, label:"Laval", lines:{show:true}, points:{show:true}}
		];

//All Separate Data for CAT Graphs
		
var tempe_YDABGRAPH_DATA = [{ data:temYDAB, label:"Tempe", lines:{show:true}, points:{show:true}}
		];

var columbus_YDABGRAPH_DATA = [{ data:colYDAB, label:"Tempe Columbus", lines:{show:true}, points:{show:true}}
		];
		
		
var sanford_YDABGRAPH_DATA = [{ data:sanYDAB, label:"Sanford", lines:{show:true}, points:{show:true}}
		];	
		
var toronto_YDABGRAPH_DATA = [{ data:torYDAB, label:"Toronto", lines:{show:true}, points:{show:true}}
		];
		
var laval_YDABGRAPH_DATA = [{ data:lavYDAB, label:"Laval", lines:{show:true}, points:{show:true}}
		];

//Fixed Axis on Graphs
var YDAB_options = {

	xaxis: {
		 ticks: [[1, "Week 1"], [2, "Week 2"], [3, "Week 3"], [4, "Week 4"], [5, "Week 5"], [6, "Week 6"], [7, "Week 7"], [8, "Week 8"]],
		 axisLabel: '',
            axisLabelUseCanvas: true,
            axisLabelFontSizePixels: 20,
            axisLabelFontFamily: 'Arial'
		},
		yaxis: { min:-5, max:4,
		tickFormatter: function(val, axis) { return val < axis.max ? val.toFixed(2) : "Year to Date Performance Against Budget (%)";}
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


var tem_YDAB_options = {

	xaxis: {
		 ticks: [[1, "Week 1"], [2, "Week 2"], [3, "Week 3"], [4, "Week 4"], [5, "Week 5"], [6, "Week 6"], [7, "Week 7"], [8, "Week 8"]],
		 axisLabel: '',
            axisLabelUseCanvas: true,
            axisLabelFontSizePixels: 20,
            axisLabelFontFamily: 'Arial'
		},
		yaxis: { min:-5, max:4,
		tickFormatter: function(val, axis) { return val < axis.max ? val.toFixed(2) : "Year to Date Performance Against Budget (%)";}
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

var col_YDAB_options = {

	xaxis: {
		 ticks: [[1, "Week 1"], [2, "Week 2"], [3, "Week 3"], [4, "Week 4"], [5, "Week 5"], [6, "Week 6"], [7, "Week 7"], [8, "Week 8"]],
		 axisLabel: '',
            axisLabelUseCanvas: true,
            axisLabelFontSizePixels: 20,
            axisLabelFontFamily: 'Arial'
		},
		yaxis: { min:-5, max:4,
		tickFormatter: function(val, axis) { return val < axis.max ? val.toFixed(2) : "Year to Date Performance Against Budget (%)";}
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

var san_YDAB_options = {

	xaxis: {
		 ticks: [[1, "Week 1"], [2, "Week 2"], [3, "Week 3"], [4, "Week 4"], [5, "Week 5"], [6, "Week 6"], [7, "Week 7"], [8, "Week 8"]],
		 axisLabel: '',
            axisLabelUseCanvas: true,
            axisLabelFontSizePixels: 20,
            axisLabelFontFamily: 'Arial'
		},
		yaxis: { min:-5, max:4,
		tickFormatter: function(val, axis) { return val < axis.max ? val.toFixed(2) : "Year to Date Performance Against Budget (%)";}
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

var tor_YDAB_options = {

	xaxis: {
		 ticks: [[1, "Week 1"], [2, "Week 2"], [3, "Week 3"], [4, "Week 4"], [5, "Week 5"], [6, "Week 6"], [7, "Week 7"], [8, "Week 8"]],
		 axisLabel: '',
            axisLabelUseCanvas: true,
            axisLabelFontSizePixels: 20,
            axisLabelFontFamily: 'Arial'
		},
		yaxis: { min:-5, max:4,
		tickFormatter: function(val, axis) { return val < axis.max ? val.toFixed(2) : "Year to Date Performance Against Budget (%)";}
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

var lav_YDAB_options = {

	xaxis: {
		 ticks: [[1, "Week 1"], [2, "Week 2"], [3, "Week 3"], [4, "Week 4"], [5, "Week 5"], [6, "Week 6"], [7, "Week 7"], [8, "Week 8"]],
		 axisLabel: '',
            axisLabelUseCanvas: true,
            axisLabelFontSizePixels: 20,
            axisLabelFontFamily: 'Arial'
		},
		yaxis: { min:-5, max:4,
		tickFormatter: function(val, axis) { return val < axis.max ? val.toFixed(2) : "Year to Date Performance Against Budget (%)";}
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




//Calling Content for all Last Period Against Budget
$(document).ready(function () {$.plot($("#LPAB_Overview_Graph"), LPAB_Overview_Data, LPAB_options);});
$(document).ready(function () {$.plot($("#LPAB_Overview_Graph2"), LPAB_Overview_Data, LPAB_options);});
$(document).ready(function () {$.plot($("#tempe_LPABGRAPH"), tempe_LPABGRAPH_DATA, tem_LPAB_options);});
$(document).ready(function () {$.plot($("#tempe_LPABGRAPH2"), tempe_LPABGRAPH_DATA, tem_LPAB_options);});
$(document).ready(function () {$.plot($("#col_LPABGRAPH"), columbus_LPABGRAPH_DATA, col_LPAB_options);});
$(document).ready(function () {$.plot($("#col_LPABGRAPH2"), columbus_LPABGRAPH_DATA, col_LPAB_options);});
$(document).ready(function () {$.plot($("#san_LPABGRAPH"), sanford_LPABGRAPH_DATA, san_LPAB_options);});
$(document).ready(function () {$.plot($("#san_LPABGRAPH2"), sanford_LPABGRAPH_DATA, san_LPAB_options);});
$(document).ready(function () {$.plot($("#tor_LPABGRAPH"), toronto_LPABGRAPH_DATA, tor_LPAB_options);});
$(document).ready(function () {$.plot($("#tor_LPABGRAPH2"), toronto_LPABGRAPH_DATA, tor_LPAB_options);});
$(document).ready(function () {$.plot($("#lav_LPABGRAPH"), laval_LPABGRAPH_DATA, lav_LPAB_options);});
$(document).ready(function () {$.plot($("#lav_LPABGRAPH2"), laval_LPABGRAPH_DATA, lav_LPAB_options);});


//Calling Content for all Year to Date
$(document).ready(function () {$.plot($("#YDAB_Overview_Graph"), YDAB_Overview_Data, YDAB_options);});
$(document).ready(function () {$.plot($("#YDAB_Overview_Graph2"), YDAB_Overview_Data, YDAB_options);});
$(document).ready(function () {$.plot($("#tempe_YDABGRAPH"), tempe_YDABGRAPH_DATA, tem_YDAB_options);});
$(document).ready(function () {$.plot($("#tempe_YDABGRAPH2"), tempe_YDABGRAPH_DATA, tem_YDAB_options);});
$(document).ready(function () {$.plot($("#col_YDABGRAPH"), columbus_YDABGRAPH_DATA, col_YDAB_options);});
$(document).ready(function () {$.plot($("#col_YDABGRAPH2"), columbus_YDABGRAPH_DATA, col_YDAB_options);});
$(document).ready(function () {$.plot($("#san_YDABGRAPH"), sanford_YDABGRAPH_DATA, san_YDAB_options);});
$(document).ready(function () {$.plot($("#san_YDABGRAPH2"), sanford_YDABGRAPH_DATA, san_YDAB_options);});
$(document).ready(function () {$.plot($("#tor_YDABGRAPH"), toronto_YDABGRAPH_DATA, tor_YDAB_options);});
$(document).ready(function () {$.plot($("#tor_YDABGRAPH2"), toronto_YDABGRAPH_DATA, tor_YDAB_options);});
$(document).ready(function () {$.plot($("#lav_YDABGRAPH"), laval_YDABGRAPH_DATA, lav_YDAB_options);});
$(document).ready(function () {$.plot($("#lav_YDABGRAPH2"), laval_YDABGRAPH_DATA, lav_YDAB_options);});


			               	}

				            reader.readAsText(file);	
		                   	} else {
			            	fileDisplayArea.innerText = "File not supported!";
		                   	}
		                    });
                        }



//call content utilizing the id the graph will sit in- this is the #tempe_maintenance_CATGRAPH etc. 