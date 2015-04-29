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
var temcol_WAN = [[1, 98.874],[2, 97.874],[3, 98.874],[4, 98.874],[5, 99.874],[6, 98.874],[7, 97.874],[8, 98.874]];

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

var san_WAN = [[1, 98.874],[2, 97.874],[3, 98.874],[4, 99.874],[5, 98.874],[6, 97.874],[7, 98.874],[8, 99.874]];

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

var lav_WAN = [[1, 98.9],[2, 98.9],[3, 98.9],[4, 99.5],[5, 99.5],[6, 99.5],[7, 99.5],[8, 99.5]];

var lavLPAB = [[1, -2], [2, .3], [3, 1], [4, .75]];
var lavYDAB = [[1, -2], [2, .3], [3, 1], [4, .75]];

var lavPF = [[1, 20], [2, 40], [3, 30], [4, 70]];
var lavPO = [[1, 20], [2, 40], [3, 30], [4, 70]];

var lavSDLW = [[1, 30], [2, 60], [3, 45], [4, 10]];
var lavSDTW = [[1, 15], [2, 34], [3, 56], [4, 70]];


//Calls Answer Time Overview Graph Data
var WAN_Overview_Data = [{ data:temcol_WAN, label:"Tempe/Columbus", lines:{show:true}, points:{show:true}}
		,{ data:san_WAN, label:"Sanford", lines:{show:true}, points:{show:true}}
		,{ data:tor_WAN, label:"Toronto", lines:{show:true}, points:{show:true}}
		,{ data:lav_WAN, label:"Laval", lines:{show:true}, points:{show:true}}
		];

//All Separate Data for CAT Graphs
		
var tempecol_WANGRAPH_DATA = [{ data:temcol_WAN, label:"Tempe/Columbus", lines:{show:true}, points:{show:true}}
		];

		
var sanford_WANGRAPH_DATA = [{ data:san_WAN, label:"Sanford", lines:{show:true}, points:{show:true}}
		];	
		
var toronto_WANGRAPH_DATA = [{ data:tor_WAN, label:"Toronto", lines:{show:true}, points:{show:true}}
		];
		
var laval_WANGRAPH_DATA = [{ data:lav_WAN, label:"Laval", lines:{show:true}, points:{show:true}}
		];

//Fixed Axis on Graphs
var WAN_options = {

	xaxis: {
		 ticks: [[1, "Week 1"], [2, "Week 2"], [3, "Week 3"], [4, "Week 4"], [5, "Week 5"], [6, "Week 6"], [7, "Week 7"], [8, "Week 8"]],
		 axisLabel: '',
            axisLabelUseCanvas: true,
            axisLabelFontSizePixels: 20,
            axisLabelFontFamily: 'Arial'
		},
		yaxis: { min:98, max:100,
		tickFormatter: function(val, axis) { return val < axis.max ? val.toFixed(2) : "WAN Uptime Performance (%)";}
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


var tempecol_WAN_options = {

	xaxis: {
		 ticks: [[1, "Week 1"], [2, "Week 2"], [3, "Week 3"], [4, "Week 4"], [5, "Week 5"], [6, "Week 6"], [7, "Week 7"], [8, "Week 8"]],
		 axisLabel: '',
            axisLabelUseCanvas: true,
            axisLabelFontSizePixels: 20,
            axisLabelFontFamily: 'Arial'
		},
		yaxis: { min:98, max:100,
		tickFormatter: function(val, axis) { return val < axis.max ? val.toFixed(2) : "WAN Uptime Performance (%)";}
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

var san_WAN_options = {

	xaxis: {
		 ticks: [[1, "Week 1"], [2, "Week 2"], [3, "Week 3"], [4, "Week 4"], [5, "Week 5"], [6, "Week 6"], [7, "Week 7"], [8, "Week 8"]],
		 axisLabel: '',
            axisLabelUseCanvas: true,
            axisLabelFontSizePixels: 20,
            axisLabelFontFamily: 'Arial'
		},
		yaxis: { min:98, max:100,
		tickFormatter: function(val, axis) { return val < axis.max ? val.toFixed(2) : "WAN Uptime Performance (%)";}
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

var tor_WAN_options = {

	xaxis: {
		 ticks: [[1, "Week 1"], [2, "Week 2"], [3, "Week 3"], [4, "Week 4"], [5, "Week 5"], [6, "Week 6"], [7, "Week 7"], [8, "Week 8"]],
		 axisLabel: '',
            axisLabelUseCanvas: true,
            axisLabelFontSizePixels: 20,
            axisLabelFontFamily: 'Arial'
		},
		yaxis: { min:98, max:100,
		tickFormatter: function(val, axis) { return val < axis.max ? val.toFixed(2) : "WAN Uptime Performance (%)";}
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

var lav_WAN_options = {

	xaxis: {
		 ticks: [[1, "Week 1"], [2, "Week 2"], [3, "Week 3"], [4, "Week 4"], [5, "Week 5"], [6, "Week 6"], [7, "Week 7"], [8, "Week 8"]],
		 axisLabel: '',
            axisLabelUseCanvas: true,
            axisLabelFontSizePixels: 20,
            axisLabelFontFamily: 'Arial'
		},
		yaxis: { min:98, max:100,
		tickFormatter: function(val, axis) { return val < axis.max ? val.toFixed(2) : "WAN Uptime Performance (%)";}
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








//Calling Content for all Last Period Against Budget
$(document).ready(function () {$.plot($("#WAN_Overview_Graph"), WAN_Overview_Data, WAN_options);});
$(document).ready(function () {$.plot($("#tempecol_WANGRAPH"), tempecol_WANGRAPH_DATA, tempecol_WAN_options);});
$(document).ready(function () {$.plot($("#san_WANGRAPH"), sanford_WANGRAPH_DATA, san_WAN_options);});
$(document).ready(function () {$.plot($("#tor_WANGRAPH"), toronto_WANGRAPH_DATA, tor_WAN_options);});
$(document).ready(function () {$.plot($("#lav_WANGRAPH"), laval_WANGRAPH_DATA, lav_WAN_options);});



			               	}

				            reader.readAsText(file);	
		                   	} else {
			            	fileDisplayArea.innerText = "File not supported!";
		                   	}
		                    });
                        }


