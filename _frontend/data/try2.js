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
var temLPAB_LQ = [0, 95.7];
var temLPAB_P = [1, 95.3];
var temLPAB = [[0, 95.7], [1, 95.3]];
var temYDAB = [[0, 95.7], [1, 95.3]];

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

var colLPAB = [[0, 95.7], [1, 95.3]];
var colLPAB_LQ = [2, 95.7];
var colLPAB_P = [3, 95.3];
var colYDAB = [[0, 95.7], [1, 95.3]];

//All Data for Sanford
var sancat = [[myArray[72], myArray[73]], [myArray[74], myArray[75]], [myArray[76], myArray[77]], [myArray[78], myArray[79]]];
var sanaht = [[myArray[80], myArray[81]], [myArray[82], myArray[83]], [myArray[84], myArray[85]], [myArray[86], myArray[87]]];
var sanpsp = [[myArray[88], myArray[89]], [myArray[90], myArray[91]], [myArray[92], myArray[93]], [myArray[94], myArray[95]]];

var sanLPAB = [[0, 95.7], [1, 95.3]];
var sanLPAB_LQ = [4, 95.7];
var sanLPAB_P = [5, 95.3];
var sanYDAB = [[0, 95.7], [1, 95.3]];

//All Data for Toronto
var torcat = [[myArray[96], myArray[97]], [myArray[98], myArray[99]], [myArray[100], myArray[101]], [myArray[102], myArray[103]]];
var toraht = [[myArray[104], myArray[105]], [myArray[106], myArray[107]], [myArray[108], myArray[109]], [myArray[110], myArray[111]]];
var torpsp = [[myArray[112], myArray[113]], [myArray[114], myArray[115]], [myArray[116], myArray[117]], [myArray[118], myArray[119]]];

var torLPAB = [[0, 95.7], [1, 95.3]];
var torLPAB_LQ = [6, 95.7];
var torLPAB_P = [7, 95.3];
var torYDAB = [[0, 95.7], [1, 95.3]];

//All Data for Laval
var lavcat = [[myArray[120], myArray[121]], [myArray[122], myArray[123]], [myArray[124], myArray[125]], [myArray[126], myArray[127]]];
var lavaht = [[myArray[128], myArray[129]], [myArray[130], myArray[131]], [myArray[132], myArray[133]], [myArray[134], myArray[135]]];
var lavpsp = [[myArray[136], myArray[137]], [myArray[138], myArray[139]], [myArray[140], myArray[141]], [myArray[142], myArray[143]]];

var lavLPAB = [[0, 95.7], [1, 95.3]];
var lavLPAB_LQ = [8, 95.7];
var lavLPAB_P = [9, 95.3];
var lavYDAB = [[0, 95.7], [1, 95.3]];


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
	
};


var call_answer_time_options_epos = {

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
		},
		
		colors: ["#F1D170"]
	
};

var call_answer_time_options_main = {

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
		},
		
		colors: ["#AFD8F8"]
	
};

var call_answer_time_options_col = {

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
		},
		
		colors: ["#CB4B4B"]
	
};

var call_answer_time_options_san = {

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
		},
		
		colors: ["#4DA74D"]
	
};

var call_answer_time_options_tor = {

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
		},
		
		colors: ["#9440ED"]
	
};

var call_answer_time_options_lav = {

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
	
};


var average_hold_time_options_epos = {

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
		},
		
		colors: ["#F1D170"]
	
};

var average_hold_time_options_main = {

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
		},
		
		colors: ["#AFD8F8"]
	
};

var average_hold_time_options_col = {

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
		},
		
		colors: ["#CB4B4B"]
	
};

var average_hold_time_options_san = {

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
		},
		
		colors: ["#4DA74D"]
	
};

var average_hold_time_options_tor = {

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
		},
		
		colors: ["#9440ED"]
	
};

var average_hold_time_options_lav = {

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
	
};


var psp_options_epos = {

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
		},
		
		colors: ["#F1D170"]
	
};

var psp_options_main = {

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
		},
		
		colors: ["#AFD8F8"]
	
};

var psp_options_col = {

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
		},
		
		colors: ["#CB4B4B"]
	
};

var psp_options_san = {

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
		},
		
		colors: ["#4DA74D"]
	
};

var psp_options_tor = {

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
		},
		
		colors: ["#9440ED"]
	
};

var psp_options_lav = {

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
		},
		
		colors: ["#BD9B33"]
	
};

//Last Period Performance Against Budget Overview Graph Data 

//Last Period Performance Against Budget Overview Graph Data
var LPAB_Overview_Data = [    
    [0, 11], //London, UK
    [1, 15], //New York, USA
    [2, 25], //New Delhi, India
    [3, 24], //Taipei, Taiwan
    [4, 13], //Beijing, China
    [5, 18]  //Sydney, AU
];
 
var dataset = [
    { label: "2012 Average Temperature", data: LPAB_Overview_Data, color: "#5482FF" }
];
//All Separate Data for LPAB Graphs
		
var tempe_LPAB_DATA = [{ data:temLPAB, label:"Tempe", lines:{show:true}, points:{show:true}}
		];

var columbus_LPAB_DATA = [{ data:colLPAB, label:"Columbus", lines:{show:true}, points:{show:true}}
		];
		
var sanford_LPAB_DATA = [{ data:sanLPAB, label:"Sanford", lines:{show:true}, points:{show:true}}
		];	
		
var toronto_LPAB_DATA = [{ data:torLPAB, label:"Toronto", lines:{show:true}, points:{show:true}}
		];
		
var laval_LPAB_DATA = [{ data:lavLPAB, label:"Laval", lines:{show:true}, points:{show:true}}
		];

var LPAB_options = {

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


//Last Period Performance Against Budget Separate Graph Data & Variables



//Year to Date Performance Against Budget Overview Graph Data 

//Year to Date Performance Against Budget Separate Graph Data & Variables


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
$(document).ready(function () {$.plot($("#LPAB_Overview_Graph"), dataset);});
$(document).ready(function () {$.plot($("#LPAB_Overview_Graph2"), dataset);});
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