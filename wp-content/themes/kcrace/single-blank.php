<?php
/*
Template Name: Blank content
*/
?>

	
						




<?php get_template_part('templates/header'); ?>

<style>
body {background:none;}
.header, .footer {display:none!important;}
.contentarea { margin:0 auto; float:none; max-width:100%; width:100%;} 

</style>
	<div class="contentarea tk-proxima-nova">
		<div class="toparea blured"></div>
	
						
						<?php /* The loop */ ?>
			<?php while ( have_posts() ) : the_post(); ?>
			
							<div class="headers">
<h1><a href="<?php the_permalink(' ') ?>" title="<?php the_title(); ?>"><?php the_title(); ?></a></h1>
			</div>
						<div class="thecontent">
	<div class="singlePost">	

						
						<p class="time">Updated last: <?php the_time('d/m/y') ?></p>
						<p class="content"><?php the_content(); ?></p>
						
				</div>
<?php endwhile; ?>
				</div>
				
		<div class="botarea blured"></div>
	</div>




