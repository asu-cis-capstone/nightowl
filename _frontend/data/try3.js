//File Reading Functionality

// Check for the various File API support.
if (window.File && window.FileReader && window.FileList && window.Blob) {
  // Great success! All the File APIs are supported.
} else {
  alert('The File APIs are not fully supported in this browser.');
}

//ScriptReader

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
				                    
//All Call Answer Time Data
var maincat = [[1, myArray[0]], [2,myArray[1]], [3,myArray[2]], [4,myArray[3]]];
var eposcat = [[1,myArray[4]], [2,myArray[5]], [3,myArray[6]], [4,myArray[7]]];
var colcat = [[1,myArray[8]], [2,myArray[9]], [3,myArray[10]], [4,myArray[11]]];
var sancat = [[1,myArray[12]], [2,myArray[13]], [3,myArray[14]], [4,myArray[15]]];
var torcat = [[1,myArray[17]], [2,myArray[18]], [3,myArray[19]], [4,myArray[20]]];
var lavcat = [[1,myArray[21]], [2,myArray[22]], [3,myArray[23]], [4,myArray[24]]];

//All Average Hold Time Data
var mainaht = [[1,myArray[25]], [2,myArray[26]], [3,myArray[27]], [4,myArray[28]]];
var eposaht = [[1,myArray[29]], [2,myArray[30]], [3,myArray[31]], [4,myArray[32]]];
var colaht = [[1,myArray[33]], [2,myArray[34]], [3,myArray[35]], [4,myArray[36]]];
var sanaht = [[1,myArray[37]], [2,myArray[38]], [3,myArray[39]], [4,myArray[40]]];
var toraht = [[1,myArray[41]], [2,myArray[42]], [3,myArray[43]], [4,myArray[44]]];
var lavaht = [[1,myArray[45]], [2,myArray[46]], [3,myArray[47]], [4,myArray[48]]];

//All Calls PSP Data
var mainpsp = [[1,myArray[49]], [2,myArray[50]], [3,myArray[51]], [4,myArray[52]]];
var epospsp = [[1,myArray[53]], [2,myArray[54]], [3,myArray[55]], [4,myArray[56]]];
var colpsp = [[1,myArray[57]], [2,myArray[58]], [3,myArray[59]], [4,myArray[60]]];
var sanpsp = [[1,myArray[61]], [2,myArray[62]], [3,myArray[63]], [4,myArray[64]]];
var torpsp = [[1,myArray[65]], [2,myArray[66]], [3,myArray[67]], [4,myArray[68]]];
var lavpsp = [[1,myArray[69]], [2,myArray[70]], [3,myArray[71]], [4,myArray[72]]];

//All Last Period Against Budget Data
var temLPAB = [[1,myArray[73]], [2,myArray[74]], [3,myArray[75]], [4,myArray[76]]];
var colLPAB = [[1,myArray[77]], [2,myArray[78]], [3,myArray[79]], [4,myArray[80]]];
var sanLPAB = [[1,myArray[81]], [2,myArray[82]], [3,myArray[83]], [4,myArray[84]]];
var torLPAB = [[1,myArray[85]], [2,myArray[86]], [3,myArray[87]], [4,myArray[88]]];
var lavLPAB = [[1,myArray[89]], [2,myArray[90]], [3,myArray[91]], [4,myArray[92]]];

//All Year to Date Against Budget Data 
var temYDAB = [[1,myArray[93]], [2,myArray[94]], [3,myArray[95]], [4,myArray[96]]];
var colYDAB = [[1,myArray[97]], [2,myArray[98]], [3,myArray[99]], [4,myArray[100]]];
var sanYDAB = [[1,myArray[101]], [2,myArray[102]], [3,myArray[103]], [4,myArray[104]]];
var torYDAB = [[1,myArray[105]], [2,myArray[106]], [3,myArray[107]], [4,myArray[108]]];
var lavYDAB = [[1,myArray[109]], [2,myArray[110]], [3,myArray[111]], [4,myArray[112]]];

//All Positions Filled Data
var temPF = [[1,myArray[113]], [2,myArray[114]], [3,myArray[115]], [4,myArray[116]]];
var colPF = [[1,myArray[117]], [2,myArray[118]], [3,myArray[119]], [4,myArray[120]]];
var sanPF = [[1,myArray[121]], [2,myArray[122]], [3,myArray[123]], [4,myArray[124]]];
var torPF = [[1,myArray[125]], [2,myArray[126]], [3,myArray[127]], [4,myArray[128]]];
var lavPF = [[1,myArray[129]], [2,myArray[130]], [3,myArray[131]], [4,myArray[132]]];

//All Positions Open Data
var temPO = [[1,myArray[133]], [2,myArray[134]], [3,myArray[135]], [4,myArray[136]]];
var colPO = [[1,myArray[137]], [2,myArray[138]], [3,myArray[139]], [4,myArray[140]]];
var sanPO = [[1,myArray[141]], [2,myArray[142]], [3,myArray[143]], [4,myArray[144]]];
var torPO = [[1,myArray[145]], [2,myArray[146]], [3,myArray[147]], [4,myArray[148]]];
var lavPO = [[1,myArray[149]], [2,myArray[150]], [3,myArray[151]], [4,myArray[152]]];

//All Stores Deployed Last Week Data
var temSDLW = [[1,myArray[153]], [2,myArray[154]], [3,myArray[155]], [4,myArray[156]]];
var colSDLW = [[1,myArray[157]], [2,myArray[158]], [3,myArray[159]], [4,myArray[160]]];
var sanSDLW = [[1,myArray[161]], [2,myArray[162]], [3,myArray[163]], [4,myArray[164]]];
var torSDLW = [[1,myArray[165]], [2,myArray[166]], [3,myArray[167]], [4,myArray[168]]];
var lavSDLW = [[1,myArray[169]], [2,myArray[170]], [3,myArray[171]], [4,myArray[172]]];

//All Stores Deployed This Week Data
var temSDTW = [[1,myArray[173]], [2,myArray[174]], [3,myArray[175]], [4,myArray[176]]];
var colSDTW = [[1,myArray[177]], [2,myArray[178]], [3,myArray[179]], [4,myArray[180]]];
var sanSDTW = [[1,myArray[181]], [2,myArray[182]], [3,myArray[183]], [4,myArray[184]]];
var torSDTW = [[1,myArray[185]], [2,myArray[186]], [3,myArray[187]], [4,myArray[188]]];
var lavSDTW = [[1,myArray[189]], [2,myArray[190]], [3,myArray[191]], [4,myArray[192]]];

//All WAN Uptime Data
var temcol_WAN = [[1, myArray[193]],[2, myArray[194]],[3, myArray[195]],[4, myArray[196]],[5, myArray[197]],[6, myArray[198]],[7, myArray[199]],[8, myArray[200]]];
var san_WAN = [[1, myArray[201]],[2, myArray[202]],[3, myArray[203]],[4, myArray[204]],[5, myArray[205]],[6, myArray[206]],[7, myArray[207]],[8, myArray[208]]];
var tor_WAN = [[1, myArray[209]],[2, myArray[210]],[3, myArray[211]],[4, myArray[212]],[5, myArray[213]],[6, myArray[214]],[7, myArray[215]],[8, myArray[217]]];
var lav_WAN = [[1, myArray[218]],[2, myArray[219]],[3, myArray[220]],[4, myArray[221]],[5, myArray[222]],[6, myArray[223]],[7, myArray[224]],[8, myArray[225]]];


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