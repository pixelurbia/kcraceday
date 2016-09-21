<?php
/**
* A Simple Category Template
*/
 ?> 

<?php get_template_part('templates/header'); ?>

<?php if (have_posts()) : ?>

<div class="row blog">
	<div class="contentWrap">	
		<div class="col-2-3">	

<?php $post = $posts[0]; $c=0;?>
<?php while (have_posts()) : the_post(); ?>

<?php $c++;
if( !$paged && $c == 1) :?>
	<div class="firstPost">	
		<?php if ( has_post_thumbnail() ): // check for the featured image ?>
			<a href="<?php the_permalink(' ') ?>" title="<?php the_title(); ?>" class="opacity"><?php the_post_thumbnail(); ?></a>  <!--echo the featured image-->
		<?php endif; ?>
			<h2 class="tk-brandon-grotesque"><a href="<?php the_permalink(' ') ?>" title="<?php the_title(); ?>"><?php the_title(); ?></a></h2>
			
			<p class="exceprt"><?php the_excerpt(); ?></p>
			<p class="tags"><?php the_tags(); ?></p>
			<a class="btn" href="<?php the_permalink(' ') ?>">Read More<span></span></a>
	</div>
<?php else :?>
	<div class="otherPost">	
		<div class="thePost">	 
			<?php if ( has_post_thumbnail() ): // check for the featured image ?>
				<a href="<?php the_permalink(' ') ?>" title="<?php the_title(); ?>" class="opacity img"><?php the_post_thumbnail(); ?></a>  <!--echo the featured image-->
			<?php endif; ?>
				<h2 class="tk-brandon-grotesque"><a href="<?php the_permalink(' ') ?>" title="<?php the_title(); ?>"><?php the_title(); ?></a></h2>
				<p class="exceprt"><?php the_excerpt(); ?></p>
				<p class="tags"><?php the_tags(); ?></p>
				<a class="btn" href="<?php the_permalink(' ') ?>">Read More<span></span></a>
		</div>
	</div>
<?php endif;?>
<?php endwhile; ?>
	<div class="pagination">
			<div class="pagiContain">
				<?php
					global $wp_query;

					$big = 999999999; // need an unlikely integer

					echo paginate_links( array(
						'base' => str_replace( $big, '%#%', esc_url( get_pagenum_link( $big ) ) ),
						'format' => '?paged=%#%',
						'current' => max( 1, get_query_var('paged') ),
						'total' => $wp_query->max_num_pages
					) );
				?>
			</div>
	</div>
<?php endif; ?>

      </div>
      		<div class="col-1-3">
			<div class="sidebar">
						<li id="categories">
							<h2><?php _e('Posts by Category'); ?></h2>
							<form action="<?php bloginfo('url'); ?>/" method="get">
							<div>
						<?php
						$select = wp_dropdown_categories('show_option_none=Select category&show_count=0&orderby=name&echo=0&hierarchical=1&depth=1');
						$select = preg_replace("#<select([^>]*)>#", "<select$1 onchange='return this.form.submit()'>", $select);
						echo $select;
						?>
							<noscript><div><input type="submit" value="View" /></div></noscript>
							</div></form>
						</li>
					<div class="subcats">
						<h2>Show me only:</h2>
						<ul>
							<?php
							if (is_category()) {
							$this_category = get_category($cat);
							if (get_category_children($this_category->cat_ID) != "") {
							wp_list_categories('hide_empty=0&title_li=&child_of=' . $this_category->cat_ID);
							}
							else {

				
							} } ?>
						</ul>
				</div>
			</div>
				<div class="sidebar mobile">

		<div class="sbcontent blured">

<div class="form">
<h4>Stay Updated</h4>
<h5>with races in your neighborhood</h5>

<?php echo do_shortcode( '[mc4wp_form]' ) ?>

<p>Not sure what district you live in?</p>
<a href="http://kcmo.gov/map-of-city-of-kansas-city-mo-council-districts/">View Districts</a>

</div class="form">
	</div>
	</div>
		</div>
	</div>
</div>

<?php get_template_part('templates/footer'); ?>