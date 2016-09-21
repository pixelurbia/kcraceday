<?php
/*
Template Name: apply page
*/
?>


<?php get_template_part('templates/header'); ?>



	<div class="contentarea tk-proxima-nova">
		<div class="toparea blured"></div>
	
	
			<?php /* The loop */ ?>
			<?php while ( have_posts() ) : the_post(); ?>

				<div class="singlePost">	
					<?php if ( has_post_thumbnail() ): // check for the featured image ?>
					<?php the_post_thumbnail(); ?> <!--echo the featured image-->
					<?php endif; ?>
						
							<div class="headers">
<h1 class=""><a href="<?php the_permalink(' ') ?>" title="<?php the_title(); ?>"><?php the_title(); ?></a></h1>
			</div>
						<div class="thecontent">
<!-- 						<p class="time"><?php the_time('d/m/y') ?></p> -->
						<p class="content"><?php the_content(); ?></p>
						<p class="tags"><?php the_tags(); ?></p>
						
				</div>
				
			<?php endwhile; ?>
		</div>
		<div class="botarea blured"></div>
	</div>



		<?php get_template_part('apply_sidebar'); ?>
<div id="startdate"><li class="adate"> <span class="day"></span> <i class="month"></i><p class="year"></p> </li></div>
 <div id="enddate"><li class="adate"> <span class="day"></span> <i class="month"></i><p class="year"></p> </li></div>

		<div class="hidden">
		<?php get_template_part('calendar-apply'); ?>
		</div>



<?php get_template_part('templates/footer'); ?>