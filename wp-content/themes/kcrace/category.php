<?php
/**
* A Simple Category Template
*/

function new_excerpt_more($output) {
    return $output . '<p><a href="'. get_permalink() . '">' . 'Read More' . '</a></p>';
}
add_filter('get_the_excerpt', 'new_excerpt_more');
 ?> 

<?php get_template_part('templates/header'); ?>


	<div class="contentarea tk-proxima-nova">
		<div class="toparea blured"></div>
	
						
							<div class="headers">
<h1 class=""><?php
$category = get_the_category(); 
echo $category[0]->cat_name;
?></h1>
			</div>
						<div class="thecontent">
<?php if (have_posts()) : ?>
<?php $post = $posts[0]; $c=0;?>
<?php while (have_posts()) : the_post(); ?>

<?php $c++;
if( !$paged && $c == 1) :?>
	<div class="firstPost">	

			<h3><a href="<?php the_permalink(' ') ?>" title="<?php the_title(); ?>"><?php the_title(); ?></a></h3>
			<p class="time"><?php the_time('l, F j, Y') ?></p>
			<div class="exceprt"><?php the_excerpt(); ?></div>
		<?php if ( has_post_thumbnail() ): // check for the featured image ?>
			 <?php the_post_thumbnail(); ?>  <!--echo the featured image-->
		<?php endif; ?>
			<p class="tags"><?php the_tags(); ?></p>

	</div>
<?php else :?>
	<div class="otherPost">	
		<div class="thePost">	 

				<h3 ><a href="<?php the_permalink(' ') ?>" title="<?php the_title(); ?>"><?php the_title(); ?></a></h3>
				<p class="time"><?php the_time('l, F j, Y') ?></p>
				<div class="exceprt"><?php the_excerpt(); ?></div>
			<?php if ( has_post_thumbnail() ): // check for the featured image ?>
				<?php the_post_thumbnail(); ?>  <!--echo the featured image-->
			<?php endif; ?>
				<p class="tags"><?php the_tags(); ?></p>

		</div>
	</div>
<?php endif;?>
<?php endwhile; ?>
	
<?php endif; ?>
				</div>
				
		<div class="botarea blured"></div>
	</div>


		<?php get_template_part('main_sidebar'); ?>


<?php get_template_part('templates/footer'); ?>

