///////////////////
// Master JS File
// by Andy 
///////////////////

//body image change for later
//var images = ['image1.jpg', 'image2.jpg', 'image3.jpg', 'image4.jpg', 'image5.jpg'];
//$('body').css({'background-image': 'url(images/' + images[Math.floor(Math.random() * images.length)] + ')'});

$(window).load(function() {
  // When the page has loaded
  $("body").fadeIn(100);
});

$(document).ready(function() {

	$('body').css( "background-size", "cover" );

//if mobile
if( $('#phonedummy').css('display') == 'block' ) {
   $('#menu-item-85 a').attr('href','/event-list')
}
$('#gform_wrapper_1').before('<div class="btn alertmobile">If you are on a mobile device and are unable to upload the proper files, you can continue your application after submission by clicking the ' + '"Already have an approved race date?" ' + 'button on the application page.</div>') 


//Application read more fancy box
	$(".fancybox").fancybox();
	$(".readmore").fancybox({
		maxWidth	: '95%',
		maxHeight	: '95%',
		fitToView	: false,
		autoSize	: false,
		openEffect	: 'elastic',
    	closeEffect	: 'elastic'

	});


//give each date a month and year identifier 
	function give_date() { 
		$('.cal-c .adate').each(function(ev){
	         var moname = $('#month-select').val();
			 var yname = $('#year-select').val();
			 // var dday =  $(this).find('span').text();
			 // var fulldate = moname + dday  + yname ;
		 	$(this).find('i').html(moname);	 
		 	$(this).find('p').html(yname);	 
	        });
	}
//run it
give_date();



//Calendar Neighborhood Selection
//Show only the events with the current sleceted neighborhoods

 $('#city-select').change(function() {
 	filter_neighborhoods();
 	console.log('it changed');
 });

function filter_neighborhoods() {
//console.log('its running');
	var cityop = $('#city-select option:selected').val();
	//console.log(cityop);
	if ( $('.dateitem').hasClass(cityop) ) {
	//console.log('in the if');
		$('.dateitem').hide();
		$('.' + cityop).show();
	} else if ( cityop == 99 ){
		$('.dateitem').show(); 
	} else { 
		$('.dateitem').hide();
	 }
	if ( $('.cal-list a').hasClass(cityop) ) {
	//console.log('in the if');
		$('.cal-list a').hide();
		$('.' + cityop).show();
	} else if ( cityop == 99 ){
		$('.cal-list a').show(); 
	} else { 
		$('.cal-list a').hide();
	 }

	 }

get_date_values_first();
//****** Appplication date calculation and selection controls 
//Date Selection for first and second click based on even and odd
$("body").on('click', ".adate", function () {

//calculate the full end date 
		var moname = $('#month-select').val(),
			yname = $('#year-select').val(),
			crmo = $('#startdate .month').html(),
			curyear = $('#startdate .year').html(),
			curday = $('#startdate .day').html(),
			today = $(this).find('span').html();
			selday = parseInt(today);
			curmo = parseInt(crmo);

			console.log(moname + "the month selected");
			console.log(yname + "year selected");
			console.log(curmo + "current month");
			console.log(curyear + "current year");
			console.log(curday + "current day");
			console.log(selday + "selected day");

if ( yname > curyear ) { 
	console.log('year is greater than current');
			//if the selected date is today or less than todays date 
			 if ( $(this).hasClass('today') ) {
					 //if it's today do nothing
			  } else {
			 	//otherwise add the second date
			  	$('.adate').removeClass('seconddate'); //there can only be one!
				$(this).addClass('seconddate');
				calc_day_diff();	
			  	get_date_values_sec();
			  	prevent_nodate();
			  } 



} else if ( yname = curyear ) { 
console.log('year is current year');
	if ( moname > curmo ) { 
	console.log('month is greater than current');


			//if the selected date is today or less than todays date 
			 if ( $(this).hasClass('today') ) {
					 //if it's today do nothing
			  } else {
			 	//otherwise add the second date
			  	$('.adate').removeClass('seconddate'); //there can only be one!
				$(this).addClass('seconddate');
				calc_day_diff();	
			  	get_date_values_sec();
			  	prevent_nodate();
			  } 

			

	} else if ( moname == curmo){ 
	console.log('month is current');
	
			if ( selday >= curday ) {
				console.log('day is okay');

			//if the selected date is today or less than todays date 
			 if ( $(this).hasClass('today') ) {
					 //if it's today do nothing
			  } else {
			 	//otherwise add the second date
			  	$('.adate').removeClass('seconddate'); //there can only be one!
				$(this).addClass('seconddate');
				calc_day_diff();	
			  	get_date_values_sec();
			  	prevent_nodate();
			  } 

		}

	}



}





});

//if no date selected do not proceed

function prevent_nodate() { 
if ($('.adate').hasClass('seconddate')) { 
$('#gform_next_button_1_7').show(); } else {
$('#gform_next_button_1_7').hide();}
}
prevent_nodate();//run it

//incase we go back to how I had it...
/*
$("body").on('click', ".adate", function () {
 if ( $(this).hasClass('firstdate') ) {
	 	remove_date();
	 	$('.adate').removeClass('seconddate'); //there can only be one!
	 	 //if his was a first date then make it the second date and remove it from being first date
  		$(this).addClass('seconddate');
  		calc_day_diff();
  		//calculate the full end date 
		// var moname = $('#month-select').val(),
		// 	yname = $('#year-select').val(),
		// 	endday = $(this).find('span').text(),
		// 	fullenddate = moname + '/' + endday + '/' + yname ;
		//  		console.log("end date 1  " + fullenddate);
		//  			 $(this).attr('value', fullenddate);
		 			 get_date_values_sec();
  } else if ( $('.adate').hasClass('firstdate')  ){
 	//otherwise if anything ele has first fate then make this the second date
  	$('.adate').removeClass('seconddate'); //there can only be one!
	$(this).addClass('seconddate');
	calc_day_diff();	
  	//calculate the full end date 
		// var moname = $('#month-select').val(),
		// 	yname = $('#year-select').val(),
		// 	endday = $(this).find('span').text(),
		// 	fullenddate = moname + '/' + endday + '/' + yname ;
	    //		console.log("end date 2 " + fullenddate);
		// 			$(this).attr('value', fullenddate);
					get_date_values_sec();
  } else  {
  	//if this was not the first date already, or the second date, then it must be the the only first date!
  	remove_date();
  	$(this).removeClass('seconddate'); //incase it was the second date
	$(this).addClass('firstdate');
	//calulate the full start date
	    // var moname = $('#month-select option:selected').val(),
	    //  	yname = $('#year-select option:selected').val(),
	    //  	startday = $(this).find('span').text(),
	    //  	fullstartdate = moname + '/' + startday + '/' + yname ;
	 			// console.log("start date 3 " + fullstartdate); //output full start date
	 			// 	$(this).attr('value', fullstartdate);
					get_date_values_first();		
  }
});
*/
//remove classes so things work
// function remove_date() { 
//   	$('.adate').removeClass('firstdate'); //there can only be one!
//   	$('#startdate li').removeClass('firstdate'); //there can only be one!
//   		 }

//save the values for the Ajax

function get_date_values_first() { 
	var startmo = $('.today .month').html(),
		startyear = $('.today .year').html(),
		startday = $('.today .day').html();
	$('#startdate li .month').html(startmo);
	$('#startdate li .year').html(startyear);
	$('#startdate li .day').html(startday);
	//$('#startdate li').addClass('firstdate')
		
	}
	//run it
	

function get_date_values_sec() { 
	var endmo = $('.seconddate .month').html(),
		endyear = $('.seconddate .year').html(),
		endday = $('.seconddate .day').html();
	$('#enddate li .month').html(endmo);
	$('#enddate li .year').html(endyear);
	$('#enddate li .day').html(endday);
	$('#enddate li').addClass('seconddate');
	}
//Check the dates, and re apply if there is a first date selected to the new ajaxed calendar. 
function apply_date() {
	//saved dates
	var m = $('#startdate  .month').html(),
		em = $('#enddate  .month').html(),
	    y = $('#startdate  .year').html(),
	    ey = $('#enddate .year').html(),
	    d = $('#startdate  .day').html(),
	    ed = $('#enddate  .day').html(),
	    my = m + y ,
	    emy = em + ey ;
	   // console.log(my);
	//current dates
	var cm = $('#month-select').val(),
		cy = $('#year-select').val(),
		cmy = cm + cy;
//console.log(cmy);
	// if the month and year match the stored date then filter the days for an exact match of the day value and apply the class firstdate
	// if ( my == cmy ){ 
	// 	//alert('month and year match') ;
	// 	$('.adate .day').filter(function(){
	// 		    return $(this).html() == d;
	// 		}).parent().addClass('firstdate');
	//  }

	 if ( emy == cmy ){ 
				//alert('month and year match') ;
 			$('.adate .day').filter(function(){
			    return $(this).html() == ed;
			}).parent().addClass('seconddate');
	 }

	

}



//Application control area get current month and year put in a div for ~STYLES~
	function change_moyname() {
		 var moname = $('#month-select option:selected').text();
		 var yname = $('#year-select option:selected').text();
		 $('.monthname').text(moname);
		 $('.yearname').text(yname);
	}
		change_moyname();

//apply calendar to appliation page
var calendar = $('.cal-c').parent().html();
$('#field_1_58').after(calendar);

//ajax calendar month changer
	$("body").on('click', "#fieldNext", function (e) {
		e.preventDefault();
		$('.cal-c.calapply').addClass('loading');
		//get the values of month and year
		 var monum = $('#month-select').val();
		 var themonum = parseInt(monum)+1;
		 var ynum = $('#year-select').val();
		 // console.log(theynum);
 		 //year reset for new year
 			if ( themonum > 12 ) { 
				var theynum = parseInt(ynum)+1; 
				var themonum = 1; }
				else {  var theynum = parseInt(ynum); }
			console.log(themonum);
			console.log(theynum);
			//ajax get send calulated month and year to be processed by php app cal
	$.ajax({
	      url: "/app-calendar" + "?calmonth=" + themonum + "&calyear=" + theynum,
	      success: function(data){ 
	            //alert(monum);} 
	            //is this even working?
	            $('.calapply').html(data);
	            $('.calapply').removeClass('loading');
	            change_moyname();
	            give_date();
	            apply_date() 
	            //get the new calendar and display it <3
	            //\console.log("?calmonth=" + themonum + "&calyear=" + theynum);
	            //$(calendar).load("/wp-content/themes/kcrace/calendar-apply.php" ); 
	        }
	    }); // end ajax call
	});

	$("body").on('click', "#fieldPrev", function (e) {
		e.preventDefault();
		$('.cal-c.calapply').addClass('loading');
		//get the values of month and year
		 var monum = $('#month-select').val();
		 var themonum = parseInt(monum)-1;
		 var ynum = $('#year-select').val();
		 //alert(monum); 
		 // console.log(theynum);
		 //year reset for new year
 			if ( themonum < 1 ) { 
				var theynum = parseInt(ynum)-1;
				var themonum = 12; }
				else {  var theynum = parseInt(ynum); }
			console.log(themonum);
			console.log(theynum);
			//ajax get send calulated month and year to be processed by php app cal
	$.ajax({
	      url: "/app-calendar" + "?calmonth=" + themonum + "&calyear=" + theynum,
	      success: function(data){ 
	            //alert(monum);} 
	            //is this even working?
	            $('.calapply').html(data).show();
	            $('.calapply').removeClass('loading');
	            change_moyname();
	            give_date();
	            apply_date() 
	            //get the new calendar and display it <3
	            // console.log("?calmonth=" + themonum + "&calyear=" + theynum);
	            //$(calendar).load("/wp-content/themes/kcrace/calendar-apply.php" ); 
	        }
	    }); // end ajax call
	});


//add some styles to the application page
$('#gf_step_1_3').after('<div id="gf_step_1_4" class="gf_step gf_step_last gf_step_pending"><span class="gf_step_number">3</span>&nbsp;Finish</div>')

//button to test things
/*
$('#gform_next_button_1_7').after('<div class="nextbtn btn">Test function</div>')
$("body").on('click', ".nextbtn", function () { 

});
$('#field_1_49').css('display', 'block');
*/
//calculate the differnce btween the two selected dates.


// $('#input_1_87').keyup(function() {
//  var lor = $(this).val();
//  console.log(lor);
// });


function calc_day_diff() {
	var lorv = $('#input_1_87').val(); //length of race value
	var nopv = $('#input_1_91').val(); //number of participants value
	var pay = $('.gchoice_1_89_1 :checkbox:checked').length > 0;//pay total price or not
// console.log(lorv);
// console.log(nopv);
console.log(pay + ' PAY ');

if (lorv < 3.1 ) { var cos = 300; }
else if (lorv <= 6.1) { var cos = 700; }
else if (lorv <= 13) { var cos = 1300; }
else if (lorv <= 26) { var cos = 1900; }
else if (lorv > 26 ) { var cos = 3000; }

if ( nopv <= 1000 ) {  var mul = 0; }
else if ( nopv < 5000 ) { var mul = 500; }
else if ( nopv >= 5000  ) { var mul = 1000; }



//add to price

// console.log(cos);
// console.log(mul);
// console.log(atp);


// console.log(atp);

	var startmo = $('#startdate .month').html(),
		startyear = $('#startdate .year').html(),
		startday = $('#startdate .day').html(),
		fullstartdate = startmo + '/' + startday + '/' + startyear;
	var endmo = $('.seconddate .month').html(),
		endyear = $('.seconddate .year').html(),
		endday = $('.seconddate .day').html(),
		fullenddate = endmo + '/' + endday + '/' + endyear;
//Caluclate days differnce
var date1 = new Date(fullstartdate);
var date2 = new Date(fullenddate);
var timeDiff = Math.abs(date2.getTime() - date1.getTime());
var diffDays = Math.ceil(timeDiff / (1000 * 3600 * 24)); 
// console.log(diffDays);
yname = $('#year-select').val()
console.log(yname);
console.log(diffDays);

if ( yname == '2015' ) {
	var atp = 0;
	console.log(atp);
	$('.remainder input').val('$0.00');
} 
if ( yname == '2016' ) {
	if (pay == true ) {
		var atp = cos + mul; 
		$('.remainder').hide();
	} else {
		var remain = cos + mul; 
		console.log(remain + 'remain');
		$('.remainder input').val('$'+ remain + '.00');
		var atp = 0;
	}
	
	console.log(atp);
}


//we have our days now to set the price
if ( diffDays <= 30 ) {
var bp = 300; //base price
var ap = atp - bp; //adjusted price
var construct = '$'+ap; 
$('#input_1_60').val(construct);
$('.ginput_total.ginput_total_1').html(construct);

} else if ( diffDays <= 59 )  { 
// $('#input_1_60').val('$200.00');
var bp = 200; //base price
var ap = atp - bp; //adjusted price
var construct = '$'+ap;
$('.ginput_total.ginput_total_1').html(construct);
$('#input_1_60').val(construct); 
}
else if ( diffDays <= 89 ) { 
// $('#input_1_60').val('$150.00');
var bp = 150; //base price
var ap = atp - bp; //adjusted price
var construct = '$'+ap;
$('.ginput_total.ginput_total_1').html(construct);
$('#input_1_60').val(construct); 
}
else if ( diffDays >= 90) {  
// $('#input_1_60').val('$100.00');
var bp = 100; //base price
var ap = atp - bp; //adjusted price
var construct = '$'+ap;
$('#input_1_60').val(construct); 
$('.ginput_total.ginput_total_1').html(construct);

}
}


//searchbox
$('.menu-item-18').click(function(e) {
e.preventDefault()
	$('.menu-item-18 a').fadeOut( "slow" );
	$('.searchform').fadeIn( "slow" );
	$('#menu-item-18').css('background-color','#f4945c')
});
$('.menu-item-18 a').click(function(e) {
e.preventDefault()
	$('.menu-item-18 a').fadeOut( "slow" );
	$('.searchform').fadeIn( "slow" );
	$('#menu-item-18').css('background-color','#f4945c')
});
//$('.searchform input').val("Search");

//aplication upload field redesign 



//input form color change
$("input").change(function() { 
  $(this).css('color','#205c75');
}); 
$("textarea").change(function() { 
  $(this).css('color','#205c75');
}); 
$("select").change(function() { 
  $(this).css('color','#205c75');
}); 

//prevent from switching pages in application 
$('.gf_step a').click(function(e){
  e.preventDefault();
});




//aplication print method
 function PrintElem(elem)
    {
        Popup($(elem).html());
    }

    function Popup(data) 
    {
    var mywindow = window.open('', 'my div', 'height=400,width=600');
        mywindow.document.write('<html><head><title>my div</title>');
        mywindow.document.write('</head><body >');
        mywindow.document.write(data);
        mywindow.document.write('</body></html>');

        mywindow.print();
        mywindow.close();

        return true;
    }

//application payment method buttons to select what value
$("#field_1_61 select option").removeAttr("selected", "selected"); //run on on page load
	$( ".credit" ).click(function() {
		$("#field_1_61 select option").removeAttr("selected", "selected");
		$("#field_1_61 select").val('2');
		$("#field_1_61 select option[value=2]").attr("selected", "selected");
		$("#field_1_61 select").change();
		$('.btn').removeClass('btnselect');
		$(this).addClass('btnselect');
	});
	$( ".check" ).click(function() {
		$("#field_1_61 select option").removeAttr("selected", "selected");
		$("#field_1_61 select").val('3');
		$("#field_1_61 select option[value=3]").attr("selected", "selected");
		$("#field_1_61 select").change();
		$('.btn').removeClass('btnselect');
		$(this).addClass('btnselect');
	});
	$( ".walkbike" ).click(function() {
		$("#field_1_61 select option").removeAttr("selected", "selected");
		$("#field_1_61 select").val('4');
		$("#field_1_61 select option[value=4]").attr("selected", "selected");
		$("#field_1_61 select").change();
		$('.btn').removeClass('btnselect');
		$(this).addClass('btnselect');

	});

	//print button
	$( "#printbtn" ).click(function() {
		$(".printapp").printThis();
	});

 $(function(){
    /* Hide form input values on focus*/ 
    $('input:text').each(function(){
        var txtval = $(this).val();
        $(this).focus(function(){
            if($(this).val() == txtval){
                $(this).val('')
            }
        });
        $(this).blur(function(){
            if($(this).val() == ""){
                $(this).val(txtval);
            }
        });
    });
});
 $(function(){
    /* Hide form input values on focus*/ 
    $('textarea').each(function(){
        var txtval = $(this).val();
        $(this).focus(function(){
            if($(this).val() == txtval){
                $(this).val('')
            }
        });
        $(this).blur(function(){
            if($(this).val() == ""){
                $(this).val(txtval);
            }
        });
    });
});

//footer links open in new window
$(".footer a[href^='http://']").attr("target","_blank");

//blur stuff

// $('.blured').blurjs({
//     source: 'body',
//     radius: 30,
//     overlay: 'rgba(000,000,000,0.1)'
// });

//cal check if has event then display dots

 $(".cal-c.mini .cal ul li ol ").each(function() {
            var count = $(this).children().length;
       
	if ( count > 1 ) {
$(this).parent().addClass('twoevent');
}
else if ( count == 1 )  {
$(this).parents().addClass('oneevent');
} 
else {}
      });

//faq

$('.faq-item').click(function(e){
	if($(e.target).hasClass('faq-title')){
		$(this).toggleClass('active');
		$(this).children('.faq-title').toggleClass('active');
		$(this).children('.faq-content').slideToggle();
		return false;
	}
});

$('#faqSearch').keyup(function(){
	var query = $(this).val().toLowerCase();
	if(query === ''){
		$('.faq-list li').removeClass('inactive');
	} else {
		$('.faq-list li').each(function(){
			var faqText = $(this).children().text().toString().toLowerCase();
			if(!faqText.match(query)){
				$(this).addClass('inactive');
			} else {
				$(this).removeClass('inactive');
			}
		});
	}
});

//--- Calendar Month/Year drop down ---\\

	function change_month() {
		window.location = linkBuilder();
	}

	$('#month-select').change(change_month);
	$('#year-select').change(change_month);

	$(".calstring").click(function (e) {
		var month = document.getElementById('month-select').value;
		var year = document.getElementById('year-select').value;
		var url = $('.calstring').attr('href');
		e.preventDefault();
		window.location = url + "?calmonth=" + month + "&calyear=" + year;
	});

	$("#fNext").click(function (e) {
		e.preventDefault();
		window.location = linkBuilder('next');
	});

	$("#fPrev").click(function (e) {
		e.preventDefault();
		window.location = linkBuilder('prev');
	});

	function linkBuilder(direction) {
		var month = document.getElementById('month-select').value;
		var year = document.getElementById('year-select').value;
		
		if (direction == 'next') {
			month == 12 ? (month = 1, year++) : month++;
		}
		else if (direction == 'prev') {
			month == 1 ? (month = 12, year--) : month--;
		}

		return "?calmonth=" + month + "&calyear=" + year;
	}

	$('.cal-c .cal ul li ol').each(function () {
		var count = $(this).children().length;
		if ( count >= 1) {
		$(this).closest('li').addClass('scrolled');
		}
	});
	//-- end Cal --\\



	});
