<?php
/*
Template Name: Search Page
*/
?>

<?php get_template_part('templates/header'); ?>


	<div class="contentarea tk-proxima-nova">
		<div class="toparea blured"></div>
		<div class="headers">
				<h1>Search Results: &quot;<?php echo get_search_query(); ?>&quot;</h1>
			</div>
		<div class="thecontent">
<?php if ( have_posts() ) :  // results found?>
	<?php while ( have_posts() ) : the_post(); ?>
		<article>
			<h2><?php the_title();  ?></h2>
			<p><?php the_excerpt(); ?></p>
			<p> <a href="<?php the_permalink(); ?>">View</a> </p>
		</article>
	<?php endwhile; ?>
<?php else :  // no results?>
	<article>
		<h1>No Results Found.</h1>
	</article>
<?php endif; ?>


		</div>
		<div class="botarea blured"></div>
	</div>


	<?php get_template_part('main_sidebar'); ?>

<?php get_template_part('templates/footer'); ?>