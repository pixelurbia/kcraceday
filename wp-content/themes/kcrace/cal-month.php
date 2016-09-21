<?php
/*
Template Name: cal-month
*/

get_template_part('templates/header');

echo '<div class="cal-c clearfix">';

$cal = new Calendar();

if($_GET['calmonth']) {
	$cal->specify_month($_GET['calmonth'], $_GET['calyear']);
} else {
	$cal->this_month();
}

$cal->load_month_events();


//toggle view button
echo '<div class="cal-controls clearfix ">';


//loop each month of the year
echo '<select id="month-select">';
for($i = 1; $i <= 12; $i++) {
	echo '<option value="'. date("n", mktime(0, 0, 0, $i, 10)) .'"';
	if($cal->month_selected == $i) { echo ' selected'; }
	echo '>'. date("F", mktime(0, 0, 0, $i, 10)) .'</option>';
}
echo '</select>';



//loop available years
echo '<select id="year-select">';
$start = $cal->year_start;
$end = $cal->year_end;

for($i = $start; $i <= $end; $i++) {
	echo '<option';
	if($cal->year_selected == $i) { echo ' selected'; }
	echo '>'. $i .'</option>';
} 
echo '</select>';
//council 
echo '<select id="city-select">';

	echo '<option value="99">Neighborhoods</option>';
	echo '<option value="kansas-city-metro">Kansas City Metro</option>';
	echo '<option value="brookside-waldo">Brookside</option>';
	echo '<option value="crossroads">Crossroads</option>';
	echo '<option value="crown-center">Crown Center</option>';
	echo '<option value="down-town-airport">Downtown Airport</option>';
	echo '<option value="east-of-troost">East of Troost</option>';
	echo '<option value="kemper-arena">Kemper Arena</option>';
	echo '<option value="longview-lake">Longview Lake</option>';
	echo '<option value="midtown">Midtown</option>';
	echo '<option value="martin-city">Martin City</option>';
	echo '<option value="north-of-the-river">North of the river</option>';
	echo '<option value="plaza">Plaza</option>';
	echo '<option value="river-market">River Market</option>';
	echo '<option value="southeast-kansas-city">Southeast Kansas City</option>';
	echo '<option value="sprint-center">Sprint Center</option>';
	echo '<option value="swope-park">Swope Park</option>';
	echo '<option value="theis-park">Theis Park</option>';
	echo '<option value="westport">Westport</option>';
	
echo '</select>';

echo '<ul class="cal-view"><li class="activeview calactive"><span>Cal View</span></li>';
echo '<li><a class="calstring" href="/event-list">List View</a></li></ul></div>';

//one unordered list for the day of the week labels
echo '<div class="allcal blured"><div class="days clearfix"><ul>';
echo '<li>SU</li>';
echo '<li>MO</li>';
echo '<li>TU</li>';
echo '<li>WE</li>';
echo '<li>TH</li>';
echo '<li>FR</li>';
echo '<li>SA</li>';
echo '</ul></div>';

//another unordered list for the different days of the month
echo '<div class="cal clearfix"><ul>';

//empty spaces for day of the week alignment
for ($i = 1; $i < $cal->empty_spaces; $i++) {
	echo '<li></li>';
}

$padded_month = str_pad($cal->month_selected . "", 2, "0", STR_PAD_LEFT);
//loop each day of the month
for ($i = 1; $i <= $cal->days_in_month; $i++) {
	$padded_day = str_pad($i . "", 2, "0", STR_PAD_LEFT);
	$this_day = $cal->year_selected . $padded_month . $padded_day;
	if (date("Ymd") == $this_day) {
		echo '<li class="today"><span class="day">'.$i.'</span><ol>';
	} else {
		echo '<li><span class="day">' .$i.'</span><ol>';
	}
	foreach ($cal->events as $event) {
		if($i == date("j", $event['date_object']) && 
				$cal->month_selected == date("n", $event['date_object'])) {
			echo '<li class="dateitem ' . $event['neighborhood'] . '"><a href="' . $event['permalink'] . '">' . $event['title'] . '</a></li>';
		}
	}
	echo '</ol></li>';
}

echo '</ul></div></div></div>';

get_template_part('templates/footer');

?>
