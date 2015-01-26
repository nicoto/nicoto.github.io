$(document).ready(function() {

console.log("start here");

var thumbsIndex = 0;
var makeSelected = "";
var PATH = "../previews/";
// cars as an object of arrays var wings = []; for(var i=1; i<=17; i++) wings.push(i<9?"wings0"+i+".jpg":"wings"+i+".jpg");

var cars = {
buick: ["1956_buick_century_vintage.jpg", "1963 Buick Riviera.jpg", "1970BuickElectra225Limited2DoorHardtop.jpg", "1972_Buick_Skylark_Front.jpg", "buick.jpg", "buick2.jpg", "buick3.jpg", "buick4.jpg", "Buick_rivera_klassika_retro.jpg"], chevy: ["20Chevy.jpg", "55BelAir.jpg", "61Impala.jpg", "72Nova.jpg", "73Chevy.jpg"], mercedes: ["21Arizona.jpg", "30SL.jpg", "58Benz220SCabriolet.jpg", "Benz.jpg", "Benz2.jpg", "Benz_black.jpg"], mercury: ["57Montclair.jpg", "60Monterey.jpg", "62Mercury.jpg", "69_Marauder.jpg", "1959ParkLane.jpg", "1967Cougar.jpg", "Grandpa_Mercury.jpg", "Grandpa_Mercury2.jpg", "Mercury1.jpg", "Mercury2.jpg"], plymouth: ["32PlymouthSedanHotrod.jpg", "49PlymouthDeluxe.jpg", "53PlymouthCambridge.jpg", "69Plymouth.jpg", "73Cuda.jpg", "73PlymouthFury.jpg", "Plymouth1.jpg", "Plymouth2.jpg", "Plymouth3.jpg", "Plymouth4.jpg", "Plymouth5.jpg", "Plymouth6.jpg"], cadillac:["36_Cadillac_V16_Aero_cpe_Fltwd_DV-06-MDB_01.jpg", "49Cadillac.jpg", "1964-cadillac-eldorado-convertible.jpg", "1967-Cadillac-Eldorado-5.jpg", "402791-1000-0.jpg", "3947977716_77e76e1b95_b.jpg", "black forest vintage old cars buick antique 1920x1200 wallpaper_www.wallpaperhi.com_88.jpg", "brutalcar.com-74.jpg", "cadillac58.jpg", "vintage-cadillac-backview-20423011.jpg"], wings: ["wings01.jpg", "wings02.jpg", "wings03.jpg", "wings04.jpg", "wings05.jpg", "wings06.jpg", "wings07.jpg", "wings08.jpg", "wings09.jpg", "wings10.jpg", "wings11.jpg", "wings12.jpg", "wings13.jpg", "wings14.jpg", "wings15.jpg", "wings16.jpg"] };

function subHTML(carMake, obj, init){
	
	var htmlStr = null;
	htmlStr = "<ul class='thumbnails'>";
	  //console.log(obj[carMake]); // test loop mechanism
	  //var cars = obj[carMake];
	  //console.dir("In subHTML " + obj[carMake]);
	  
	  for(var i=init; i<=(init+2) && i<obj[carMake].length; i++){
		htmlStr += "<li class='pic'><img src='" + PATH + carMake + "/" + obj[carMake][i] + "' class='thumbs' data-id='" + i + "' />" + "</li>";
	  }
	htmlStr += "</ul>";
	console.log(htmlStr);
	
	$(".thumbnails").empty().append(htmlStr);
	
	// Function needs to access the data-id property of the URL that was clicked on
	
	$(".thumbs").click(function(event){
		
		var path = event.target.src.toString();
		console.log(path);
		
		var imageName = path.slice(path.lastIndexOf("/")+1, path.length);
		console.log("Your file name is " + imageName);
		
		var newPath = "../projects/" + makeSelected + "/" + imageName;
		console.log(newPath);
		
		//<img src="pictures/buick/1956_buick_century_vintage.jpg" class="bigPic">
		$(".bigPic").attr('src', newPath);
		
		//console.log($(this)("data-id"));
    });
	
}

$("#nav .menu").bind("click", function(event) {
    
      //console.dir($(this));
      //console.log($(this)[0].id);
	
	  // Store the type of vehicle selected in the menu
	makeSelected = $(this)[0].id;
	
	  // Assign the vehicle array's index to 0 by default on load
	thumbsIndex = 0;
	
	  // console.log($(this)[0].id.toString());
	
    switch ($(this)[0].id.toString()) {
	  case "buick":
		  //replace the <ul class="thumbnails"> with <li class="pic"> followed by <img src="">
		  makeSelected = "buick";
		  subHTML("buick".toString(), cars, thumbsIndex); // $(this)[0].id + '[]'
		  break;
	  case "chevy":
	  	  makeSelected = "chevy";
		  subHTML("chevy".toString(), cars, thumbsIndex);
		  break;
	  case "mercedes":
	  	  makeSelected = "mercedes";
		  subHTML("mercedes".toString(), cars, thumbsIndex);
		  break;
	  case "mercury":
	  	  makeSelected = "mercury";
		  subHTML("mercury".toString(), cars, thumbsIndex);
		  break;
	  case "plymouth":
	  	  makeSelected = "plymouth";
		  subHTML("plymouth".toString(), cars, thumbsIndex);
		  break;
	  case "cadillac":
	  	  makeSelected = "cadillac";
		  subHTML("cadillac".toString(), cars, thumbsIndex);
		  break;
	  case "wings":
	  	  makeSelected = "wings";
		  subHTML("wings".toString(), cars, thumbsIndex);
		  break;
	  default:
	  	  makeSelected = "";
		  alert("Except for the menu, no car on the vehicle make menu was clicked.");
		  break;
}
});

$("#leftarrow").bind("click", function() {
  // Move current array index back by a count of 3 pictures, uploads url & sub-out\
  // the first encounter of [0] increments from the last array index\
  var count = cars[makeSelected].length;
  //console.log(count);
  
  // test whether the first item is in slot 3/3 -> last item, first item, second item
  //if(thumbsIndex+2 == cars[makeSelected][0])
  	if(thumbsIndex != 0) subHTML(makeSelected, cars, thumbsIndex-=3);
});

$("#rightarrow").bind("click", function() {
  // Move current array index forward by a count of 3 pictures, upload urls & sub-out\
  // the first encounter of the last array index, goes to teh beginning of the list\
  // and increments from [0] forward\
  var count = cars[makeSelected].length;
  //console.log(count);
  
  // test whether the last item is in slot 1/3 -> second-to-last, last-item, first-item
  // test whether the last item is in slot 2/3 -> third-to-last, second-to-last, first-to-last
  if(thumbsIndex+3 < count) subHTML(makeSelected, cars, thumbsIndex+=3);
});

});