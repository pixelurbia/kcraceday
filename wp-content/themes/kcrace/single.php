<?php
/*
Template Name: Single Post
*/
?>

<?php get_template_part('templates/header'); ?>


	<div class="contentarea tk-proxima-nova">
		<div class="toparea blured"></div>
	
						
						<?php /* The loop */ ?>
			<?php while ( have_posts() ) : the_post(); ?>
			
							<div class="headers">
<h1><a href="<?php the_permalink(' ') ?>" title="<?php the_title(); ?>"><?php the_title(); ?></a></h1>
			</div>
						<div class="thecontent">
	<div class="singlePost">	
	<p class="time"><?php the_time('d/m/y') ?></p>
					<?php if ( has_post_thumbnail() ): // check for the featured image ?>
					<?php the_post_thumbnail(); ?> <!--echo the featured image-->
					<?php endif; ?>
						
						
						<p class="content"><?php the_content(); ?></p>
						<p class="tags"><?php the_tags(); ?></p>
						
				</div>
<?php endwhile; ?>
				</div>
				
		<div class="botarea blured"></div>
	</div>


	<?php get_template_part('main_sidebar'); ?>


<?php get_template_part('templates/footer'); ?>

