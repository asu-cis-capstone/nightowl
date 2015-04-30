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

//All Data for Tempe Maintenance
var Week = [[myArray[0], myArray[1]], [myArray[2], myArray[3]], [myArray[4]]];
var mainaht = [[myArray[8], myArray[9]], [myArray[10], myArray[11]], [myArray[12], myArray[13]], [myArray[14], myArray[15]]];
var mainpsp = [[myArray[16], myArray[17]], [myArray[18], myArray[19]], [myArray[20], myArray[21]], [myArray[22], myArray[23]]];


//Calls Answer Time Overview Graph Data
var WeekOneThroughFiveData = [{ data:eposcat, label:"Tempe EPOS", lines:{show:true}, points:{show:true}}
		,{ data:maincat, label:"Tempe Maintenance", lines:{show:true}, points:{show:true}}
		,{ data:colcat, label:"Columbus", lines:{show:true}, points:{show:true}}
		,{ data:sancat, label:"Sanford", lines:{show:true}, points:{show:true}}
		,{ data:torcat, label:"Toronto", lines:{show:true}, points:{show:true}}
		,{ data:lavcat, label:"Laval", lines:{show:true}, points:{show:true}}
		];

//All Separate Data for CAT Graphs
		
var WeekFiveData = [{ data:maincat, label:"Tempe Maintenance", lines:{show:true}, points:{show:true}}
		];
var WeekSixData = [{ data:maincat, label:"Tempe Maintenance", lines:{show:true}, points:{show:true}}
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




//Calling Content for all Call Answer Time Graphs
$(document).ready(function () {$.plot($("#CAT_Overview_Graph"), CAT_Overview_Data, call_answer_time_options);});
$(document).ready(function () {$.plot($("#CAT_Overview_Graph2"), CAT_Overview_Data, call_answer_time_options);});
$(document).ready(function () {$.plot($("#tempe_maintenance_CATGRAPH"), tempe_maintenance_CATGRAPH_DATA, call_answer_time_options_main);});
$(document).ready(function () {$.plot($("#tempe_maintenance_CATGRAPH2"), tempe_maintenance_CATGRAPH_DATA, call_answer_time_options_main);});
$(document).ready(function () {$.plot($("#tempe_EPOS_CATGRAPH"), tempe_EPOS_CATGRAPH_DATA, call_answer_time_options_epos);});
$(document).ready(function () {$.plot($("#tempe_EPOS_CATGRAPH2"), tempe_EPOS_CATGRAPH_DATA, call_answer_time_options_epos);});
$(document).ready(function () {$.plot($("#columbus_CATGRAPH"), columbus_CATGRAPH_DATA, call_answer_time_options_col);});
$(document).ready(function () {$.plot($("#columbus_CATGRAPH2"), columbus_CATGRAPH_DATA, call_answer_time_options_col);});

//Calling Content for all Calls per Store Period Graphs
$(document).ready(function () {$.plot($("#PSP_Overview_Graph"), PSP_Overview_Data, psp_options);});
$(document).ready(function () {$.plot($("#PSP_Overview_Graph2"), PSP_Overview_Data, psp_options);});
$(document).ready(function () {$.plot($("#tempe_maintenance_PSPGRAPH"), tempe_maintenance_PSPGRAPH_DATA, psp_options_main);});
$(document).ready(function () {$.plot($("#tempe_maintenance_PSPGRAPH2"), tempe_maintenance_PSPGRAPH_DATA, psp_options_main);});


//Calling Content for all Average Hold Time Graphs
			               	}

				            reader.readAsText(file);	
		                   	} else {
			            	fileDisplayArea.innerText = "File not supported!";
		                   	}
		                    });
                        }



//call content utilizing the id the graph will sit in- this is the #tempe_maintenance_CATGRAPH etc.