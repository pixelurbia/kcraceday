
<?php
/*
Template Name: Single Post
*/
?>


<?php get_template_part('templates/header'); ?>


	<?php while ( have_posts() ) : the_post(); ?>
			


<div class="contentarea fullwidth tk-proxima-nova">
		<div class="toparea blured"></div>
		<div class="headers">
		<h1><?php the_title(); ?></h1>
			</div>
		<div class="thecontent racepage">

			<div class="col-1-3"> 
				<h2>Race Stats</h2>
<ul>
	<li>Location: <?php the_field('location'); ?></li>
	<?php if(get_field('length')): ?>
	<li>Length: <?php the_field('length'); ?></li>
	<?php endif ?>
	<li>Start time: <?php the_field('start_time'); ?></li>
	<li>End time: <?php the_field('end_time'); ?></li>
	<li>Date: <?php $date = DateTime::createFromFormat('Ymd', get_field('start_date'));
echo $date->format('m-d-Y');?></li>

	<li>Beneficiary: <?php the_field('beneficiary'); ?></li>
	<li>Day of event Phone: <?php the_field('day_of_event_phone_number'); ?></li>
	<li>Day of event contact: <?php the_field('day_of_event_contact'); ?></li>
	<li>Race Director Name: <?php the_field('race_director_name'); ?></li>
	<li>Race Director Email:<?php the_field('race_director_email'); ?></li>
	<li>No. of Participants: <?php the_field('no_of_participants'); ?></li>
	<li>Race Website: <a href="<?php the_field('race_website'); ?>"><?php the_field('race_website'); ?></a></li>
	<li>Link to Map: <a href="http://<?php the_field('map_my_run'); ?>"><?php the_field('map_my_run'); ?></a></li>

	<?php

// check if the repeater field has rows of data
if( have_rows('files') ):
 	// loop through the rows of data
    while ( have_rows('files') ) : the_row();
		echo '<br><h2>Files and Lenghts</h2><br>';
        // display a sub field value
		$pdf = get_sub_field('pdf');
		$length = get_sub_field('length');
		$filename = get_sub_field('file_name');
        echo ''. $filename .'<br> <li>Length: '. $length .'</li>';
        echo '<li><a href="'. $pdf .'">Download '. $filename .'</a></li>';

    endwhile; else :
    // no rows found
	endif; ?>

</ul>
				


			</div>
<div class="col-1-2">
	<img src="<?php the_field('map_image'); ?>">

<?php if(get_field('map_pdf')): ?>
<iframe src="<?php the_field('map_pdf'); ?>#view=fitH" type="application/pdf" width="100%" height="400px">
</iframe>

	
	<?php endif ?>
	<?php if(get_field('race_route')): ?>
	<h3>Race Route</h3>
	<p><?php the_field('race_route'); ?></p>
<?php endif ?>
	<?php if(get_field('about_this_race')): ?>
	<h3>About This Race</h3>
	<p><?php the_field('about_this_race'); ?></p>
		<?php endif ?>		
			</div>
	<?php endwhile; ?>
		

		</div>
		<div class="botarea blured"></div>
	</div>


<?php get_template_part('templates/footer'); ?>	