<?
/*
Template Name: FAQs

  'taxonomy' => 'faq_category',
  'term' => 'Tesing',
*/
?>

<?php get_template_part('templates/header'); ?>
<?php
if(have_posts()) : while(have_posts()) : the_post();
$faqQ = new WP_Query(array(
  'post_type' => 'faq',
  'nopaging' => true)
); ?>

<div class="contentarea tk-proxima-nova">
		<div class="toparea blured"></div>
		<div class="headers">
			<div <?php post_class('page-faq'); ?>>
			<h1><?php the_title(); ?></h1>
			</div>
			</div>
		<div class="thecontent">
			<div class="row">
	<div class="large-8 large-centered columns">
	
			<ul class="faq-cats no-list">
					<?php wp_nav_menu(array('container_class' => 'faqcat', 'theme_location' => 'faqcat')); ?>
			</ul>
			<input type="text" name="faq-search" id="faqSearch" class="faq-search" placeholder="Start typing to search" />
			<ul class="faq-list no-list">
				<?php while ($faqQ->have_posts()) : $faqQ->the_post();
					get_template_part('templates/loop', 'faq');
				endwhile; wp_reset_query(); ?>
			</ul>
		</div>
</div>
<?php
endwhile;
else :
get_template_part('templates/error');
endif; ?>
		</div>
		<div class="botarea blured"></div>
	</div>



	<?php get_template_part('main_sidebar'); ?>




<?php get_template_part('templates/footer'); ?>