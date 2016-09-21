<?php
/*
Template Name: calendar
*/

echo '<div class="cal-c mini clearfix">';

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
echo '<div class="top"> 
<select id="month-select">';
for($i = 1; $i <= 12; $i++) {
	echo '<option value="'. date("n", mktime(0, 0, 0, $i, 10)) .'"';
	if($cal->month_selected == $i) { echo ' selected'; }
	echo '>'. date("F", mktime(0, 0, 0, $i, 10)) .'</option>';
}
echo '</select><div class="monthbtn">
			<a href="" id="fPrev" class="arrows prev"></a>
			<a href="" id="fNext"  class="arrows next"></a>
		</div></div>';
//loop available years
echo '<select id="year-select" class="year-select">';
$start = $cal->year_start;
$end = $cal->year_end;

for($i = $start; $i <= $end; $i++) {
	echo '<option';
	if($cal->year_selected == $i) { echo ' selected'; }
	echo '>'. $i .'</option>';
}
echo '</select>';

//one unordered list for the day of the week labels
echo '<div class="allcal"><div class="days clearfix"><ul>';
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
		echo '<li class="today"><a href="/calendar" class="calstring"><span class="day">'.$i.'</span></a><ol>';
	} else {
		echo '<li><a href="/calendar" class="calstring"><span class="day">' .$i.'</span></a><ol>';
	}
	foreach ($cal->events as $event) {
		if($i == date("j", $event['date_object']) && 
				$cal->month_selected == date("n", $event['date_object'])) {
			echo '<li><a href="' . $event['permalink'] . '">' . $event['title'] . '</a></li>';
		}

	}
	echo '</ol></li>';
}

echo '</ul></div></div></div></div>';



?>

