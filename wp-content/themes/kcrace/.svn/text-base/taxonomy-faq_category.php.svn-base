<?php
/**
* A Simple Category Template
*/
 ?> 

<?php get_template_part('templates/header'); ?>

<?php $term = $wp_query->queried_object; ?>




<div class="contentarea tk-proxima-nova">
		<div class="toparea blured"></div>
		<div class="headers">
		<h1><?php echo '<h1> FAQs</h1>'; ?></h1>
			</div>
		<div class="thecontent">
			<div class="row">
	<div class="large-8 large-centered columns">
	
			<ul class="faq-cats no-list">
				<?php wp_nav_menu(array('container_class' => 'faqcat', 'theme_location' => 'faqcat')); ?>
			</ul>
			<input type="text" name="faq-search" id="faqSearch" class="faq-search" placeholder="Start typing to search" />
			<ul class="faq-list no-list">
				 <?php
$catquery =  new WP_Query(array(
  'post_type' => 'faq',
  'taxonomy' => 'faq_category',
  'term' => $term->name,
  'nopaging' => true) );
while($catquery->have_posts()) : $catquery->the_post();
?>
				<?php get_template_part('templates/loop', 'faq');?>
				<?php
endwhile;
 ?>
			</ul>
		</div>
</div>

		</div>
		<div class="botarea blured"></div>
	</div>



		<?php get_template_part('main_sidebar'); ?>






<?php get_template_part('templates/footer'); ?>