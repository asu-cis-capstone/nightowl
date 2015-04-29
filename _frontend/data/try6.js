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

var colPF = [[1, 20], [2, 40], [3, 30], [4, 70]];
var colPO = [[1, 20], [2, 40], [3, 30], [4, 70]];

var colSDLW = [[1, 30], [2, 60], [3, 45], [4, 10]];
var colSDTW = [[1, 15], [2, 34], [3, 56], [4, 70]];

//All Data for Sanford
var sancat = [[myArray[72], myArray[73]], [myArray[74], myArray[75]], [myArray[76], myArray[77]], [myArray[78], myArray[79]]];
var sanaht = [[myArray[80], myArray[81]], [myArray[82], myArray[83]], [myArray[84], myArray[85]], [myArray[86], myArray[87]]];
var sanpsp = [[myArray[88], myArray[89]], [myArray[90], myArray[91]], [myArray[92], myArray[93]], [myArray[94], myArray[95]]];

var san_WAN = [[1, 99.874],[2, 99.874],[3, 99.874],[4, 99.874],[5, 99.874],[6, 99.874],[7, 99.874],[8, 99.874]];

var sanLPAB = [[1, -2], [2, .3], [3, 1], [4, .75]];
var sanYDAB = [[1, -2], [2, .3], [3, 1], [4, .75]];

var sanPF = [[1, 20], [2, 40], [3, 30], [4, 70]];
var sanPO = [[1, 20], [2, 40], [3, 30], [4, 70]];

var sanSDLW = [[1, 30], [2, 60], [3, 45], [4, 10]];
var sanSDTW = [[1, 15], [2, 34], [3, 56], [4, 70]];

//All Data for Toronto
var torcat = [[myArray[96], myArray[97]], [myArray[98], myArray[99]], [myArray[100], myArray[101]], [myArray[102], myArray[103]]];
var toraht = [[myArray[104], myArray[105]], [myArray[106], myArray[107]], [myArray[108], myArray[109]], [myArray[110], myArray[111]]];
var torpsp = [[myArray[112], myArray[113]], [myArray[114], myArray[115]], [myArray[116], myArray[117]], [myArray[118], myArray[119]]];

var tor_WAN = [[1, 99.874],[2, 99.874],[3, 99.874],[4, 99.874],[5, 99.874],[6, 99.874],[7, 99.874],[8, 99.874]];

var torLPAB = [[1, -2], [2, .3], [3, 1], [4, .75]];
var torYDAB = [[1, -2], [2, .3], [3, 1], [4, .75]];

var torPF = [[1, 20], [2, 40], [3, 30], [4, 70]];
var torPO = [[1, 20], [2, 40], [3, 30], [4, 70]];

var torSDLW = [[1, 30], [2, 60], [3, 45], [4, 10]];
var torSDTW = [[1, 15], [2, 34], [3, 56], [4, 70]];

//All Data for Laval
var lavcat = [[myArray[120], myArray[121]], [myArray[122], myArray[123]], [myArray[124], myArray[125]], [myArray[126], myArray[127]]];
var lavaht = [[myArray[128], myArray[129]], [myArray[130], myArray[131]], [myArray[132], myArray[133]], [myArray[134], myArray[135]]];
var lavpsp = [[myArray[136], myArray[137]], [myArray[138], myArray[139]], [myArray[140], myArray[141]], [myArray[142], myArray[143]]];

var lav_WAN = [[1, 99.874],[2, 99.874],[3, 99.874],[4, 99.874],[5, 99.874],[6, 99.874],[7, 99.874],[8, 99.874]];

var lavLPAB = [[1, -2], [2, .3], [3, 1], [4, .75]];
var lavYDAB = [[1, -2], [2, .3], [3, 1], [4, .75]];

var lavPF = [[1, 20], [2, 40], [3, 30], [4, 70]];
var lavPO = [[1, 20], [2, 40], [3, 30], [4, 70]];

var lavSDLW = [[1, 30], [2, 60], [3, 45], [4, 10]];
var lavSDTW = [[1, 15], [2, 34], [3, 56], [4, 70]];

//Calls Answer Time Overview Graph Data
var SDLW_Overview_Data = [{ data:temSDLW, label:"Tempe", lines:{show:true}, points:{show:true}}
		,{ data:colSDLW, label:"Columbus", lines:{show:true}, points:{show:true}}
		,{ data:sanSDLW, label:"Sanford", lines:{show:true}, points:{show:true}}
		,{ data:torSDLW, label:"Toronto", lines:{show:true}, points:{show:true}}
		,{ data:lavSDLW, label:"Laval", lines:{show:true}, points:{show:true}}
		];

//All Separate Data for CAT Graphs
		
var tempe_SDLWGRAPH_DATA = [{ data:temSDLW, label:"Tempe", lines:{show:true}, points:{show:true}}
		];

var columbus_SDLWGRAPH_DATA = [{ data:colSDLW, label:"Columbus", lines:{show:true}, points:{show:true}}
		];
		
var sanford_SDLWGRAPH_DATA = [{ data:sanSDLW, label:"Sanford", lines:{show:true}, points:{show:true}}
		];
		
var toronto_SDLWGRAPH_DATA = [{ data:torSDLW, label:"Toronto", lines:{show:true}, points:{show:true}}
		];
		
var laval_SDLWGRAPH_DATA = [{ data:lavSDLW, label:"Laval", lines:{show:true}, points:{show:true}}
		];

//Fixed Axis on Graphs
var SDLW_options = {

	xaxis: {
		 ticks: [[1, "Week -3"], [2, "Week -2"], [3, "Week -1"], [4, "Current Week"], [5, "Week 5"], [6, "Week 6"], [7, "Week 7"], [8, "Week 8"]],
		 axisLabel: '',
            axisLabelUseCanvas: true,
            axisLabelFontSizePixels: 20,
            axisLabelFontFamily: 'Arial'
		},
		yaxis: { min:0, max:100,
		tickFormatter: function(val, axis) { return val < axis.max ? val.toFixed(2) : "Stores Deployed Last Week (#)";}
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


var temSDLW_options = {

		xaxis: {
		 ticks: [[1, "Week -3"], [2, "Week -2"], [3, "Week -1"], [4, "Current Week"], [5, "Week 5"], [6, "Week 6"], [7, "Week 7"], [8, "Week 8"]],
		 axisLabel: '',
            axisLabelUseCanvas: true,
            axisLabelFontSizePixels: 20,
            axisLabelFontFamily: 'Arial'
		},
		yaxis: { min:0, max:100,
		tickFormatter: function(val, axis) { return val < axis.max ? val.toFixed(2) : "Stores Deployed Last Week (#)";}
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

var colSDLW_options = {

	xaxis: {
		 ticks: [[1, "Week -3"], [2, "Week -2"], [3, "Week -1"], [4, "Current Week"], [5, "Week 5"], [6, "Week 6"], [7, "Week 7"], [8, "Week 8"]],
		 axisLabel: '',
            axisLabelUseCanvas: true,
            axisLabelFontSizePixels: 20,
            axisLabelFontFamily: 'Arial'
		},
		yaxis: { min:0, max:100,
		tickFormatter: function(val, axis) { return val < axis.max ? val.toFixed(2) : "Stores Deployed Last Week (#)";}
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

var sanSDLW_options = {

	xaxis: {
		 ticks: [[1, "Week -3"], [2, "Week -2"], [3, "Week -1"], [4, "Current Week"], [5, "Week 5"], [6, "Week 6"], [7, "Week 7"], [8, "Week 8"]],
		 axisLabel: '',
            axisLabelUseCanvas: true,
            axisLabelFontSizePixels: 20,
            axisLabelFontFamily: 'Arial'
		},
		yaxis: { min:0, max:100,
		tickFormatter: function(val, axis) { return val < axis.max ? val.toFixed(2) : "Stores Deployed Last Week (#)";}
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

var torSDLW_options = {

		xaxis: {
		 ticks: [[1, "Week -3"], [2, "Week -2"], [3, "Week -1"], [4, "Current Week"], [5, "Week 5"], [6, "Week 6"], [7, "Week 7"], [8, "Week 8"]],
		 axisLabel: '',
            axisLabelUseCanvas: true,
            axisLabelFontSizePixels: 20,
            axisLabelFontFamily: 'Arial'
		},
		yaxis: { min:0, max:100,
		tickFormatter: function(val, axis) { return val < axis.max ? val.toFixed(2) : "Stores Deployed Last Week (#)";}
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

var lavSDLW_options = {

	xaxis: {
		 ticks: [[1, "Week -3"], [2, "Week -2"], [3, "Week -1"], [4, "Current Week"], [5, "Week 5"], [6, "Week 6"], [7, "Week 7"], [8, "Week 8"]],
		 axisLabel: '',
            axisLabelUseCanvas: true,
            axisLabelFontSizePixels: 20,
            axisLabelFontFamily: 'Arial'
		},
		yaxis: { min:0, max:100,
		tickFormatter: function(val, axis) { return val < axis.max ? val.toFixed(2) : "Stores Deployed Last Week (#)";}
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

//Calls Answer Time Overview Graph Data
var PO_Overview_Data = [{ data:temPO, label:"Tempe", lines:{show:true}, points:{show:true}}
		,{ data:colPO, label:"Columbus", lines:{show:true}, points:{show:true}}
		,{ data:sanPO, label:"Sanford", lines:{show:true}, points:{show:true}}
		,{ data:torPO, label:"Toronto", lines:{show:true}, points:{show:true}}
		,{ data:lavPO, label:"Laval", lines:{show:true}, points:{show:true}}
		];

//All Separate Data for CAT Graphs
		
var tempe_POGRAPH_DATA = [{ data:temPO, label:"Tempe", lines:{show:true}, points:{show:true}}
		];

var columbus_POGRAPH_DATA = [{ data:colPO, label:"Columbus", lines:{show:true}, points:{show:true}}
		];
		
var sanford_POGRAPH_DATA = [{ data:sanPO, label:"Sanford", lines:{show:true}, points:{show:true}}
		];
		
var toronto_POGRAPH_DATA = [{ data:torPO, label:"Toronto", lines:{show:true}, points:{show:true}}
		];
		
var laval_PFGRAPH_DATA = [{ data:lavPO, label:"Laval", lines:{show:true}, points:{show:true}}
		];

//Fixed Axis on Graphs
var PO_options = {

	xaxis: {
		 ticks: [[1, "Week 1"], [2, "Week 2"], [3, "Week 3"], [4, "Week 4"], [5, "Week 5"], [6, "Week 6"], [7, "Week 7"], [8, "Week 8"]],
		 axisLabel: '',
            axisLabelUseCanvas: true,
            axisLabelFontSizePixels: 20,
            axisLabelFontFamily: 'Arial'
		},
		yaxis: { min:0, max:100,
		tickFormatter: function(val, axis) { return val < axis.max ? val.toFixed(2) : "Positions Open (#)";}
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


var temPO_options = {

	xaxis: {
		 ticks: [[1, "Week 1"], [2, "Week 2"], [3, "Week 3"], [4, "Week 4"], [5, "Week 5"], [6, "Week 6"], [7, "Week 7"], [8, "Week 8"]],
		 axisLabel: '',
            axisLabelUseCanvas: true,
            axisLabelFontSizePixels: 20,
            axisLabelFontFamily: 'Arial'
		},
		yaxis: { min:0, max:100,
		tickFormatter: function(val, axis) { return val < axis.max ? val.toFixed(2) : "Positions Open (#)";}
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

var colPO_options = {

	xaxis: {
		 ticks: [[1, "Week 1"], [2, "Week 2"], [3, "Week 3"], [4, "Week 4"], [5, "Week 5"], [6, "Week 6"], [7, "Week 7"], [8, "Week 8"]],
		 axisLabel: '',
            axisLabelUseCanvas: true,
            axisLabelFontSizePixels: 20,
            axisLabelFontFamily: 'Arial'
		},
		yaxis: { min:0, max:100,
		tickFormatter: function(val, axis) { return val < axis.max ? val.toFixed(2) : "Positions Open (#)";}
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

var sanPO_options = {

	xaxis: {
		 ticks: [[1, "Week 1"], [2, "Week 2"], [3, "Week 3"], [4, "Week 4"], [5, "Week 5"], [6, "Week 6"], [7, "Week 7"], [8, "Week 8"]],
		 axisLabel: '',
            axisLabelUseCanvas: true,
            axisLabelFontSizePixels: 20,
            axisLabelFontFamily: 'Arial'
		},
		yaxis: { min:0, max:100,
		tickFormatter: function(val, axis) { return val < axis.max ? val.toFixed(2) : "Positions Open (#)";}
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

var torPO_options = {

	xaxis: {
		 ticks: [[1, "Week 1"], [2, "Week 2"], [3, "Week 3"], [4, "Week 4"], [5, "Week 5"], [6, "Week 6"], [7, "Week 7"], [8, "Week 8"]],
		 axisLabel: '',
            axisLabelUseCanvas: true,
            axisLabelFontSizePixels: 20,
            axisLabelFontFamily: 'Arial'
		},
		yaxis: { min:0, max:100,
		tickFormatter: function(val, axis) { return val < axis.max ? val.toFixed(2) : "Positions Open (#)";}
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

var lavPO_options = {

	xaxis: {
		 ticks: [[1, "Week 1"], [2, "Week 2"], [3, "Week 3"], [4, "Week 4"], [5, "Week 5"], [6, "Week 6"], [7, "Week 7"], [8, "Week 8"]],
		 axisLabel: '',
            axisLabelUseCanvas: true,
            axisLabelFontSizePixels: 20,
            axisLabelFontFamily: 'Arial'
		},
		yaxis: { min:0, max:100,
		tickFormatter: function(val, axis) { return val < axis.max ? val.toFixed(2) : "Positions Open (#)";}
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



//Calling Content for all SDLW
$(document).ready(function () {$.plot($("#SDLW_Overview_Graph"), SDLW_Overview_Data, SDLW_options);});
$(document).ready(function () {$.plot($("#SDLW_Overview_Graph2"), SDLW_Overview_Data, SDLW_options);});
$(document).ready(function () {$.plot($("#tempe_SDLWGRAPH"), tempe_SDLWGRAPH_DATA, temSDLW_options);});
$(document).ready(function () {$.plot($("#tempe_SDLWGRAPH2"), tempe_SDLWGRAPH_DATA, temSDLW_options);});
$(document).ready(function () {$.plot($("#san_SDLWGRAPH"), sanford_SDLWGRAPH_DATA, sanSDLW_options);});
$(document).ready(function () {$.plot($("#san_SDLWGRAPH2"), sanford_SDLWGRAPH_DATA, sanSDLW_options);});
$(document).ready(function () {$.plot($("#col_SDLWGRAPH"), columbus_SDLWGRAPH_DATA, colSDLW_options);});
$(document).ready(function () {$.plot($("#col_SDLWGRAPH2"), columbus_SDLWGRAPH_DATA, colSDLW_options);});
$(document).ready(function () {$.plot($("#tor_SDLWGRAPH"), toronto_SDLWGRAPH_DATA, torSDLW_options);});
$(document).ready(function () {$.plot($("#tor_SDLWGRAPH2"), toronto_SDLWGRAPH_DATA, torSDLW_options);});
$(document).ready(function () {$.plot($("#lav_SDLWGRAPH"), laval_SDLWGRAPH_DATA, lavSDLW_options);});
$(document).ready(function () {$.plot($("#lav_SDLWGRAPH2"), laval_SDLWGRAPH_DATA, lavSDLW_options);});


			               	}

				            reader.readAsText(file);	
		                   	} else {
			            	fileDisplayArea.innerText = "File not supported!";
		                   	}
		                    });
                        }



//call content utilizing the id the graph will sit in- this is the #tempe_maintenance_CATGRAPH etc. 