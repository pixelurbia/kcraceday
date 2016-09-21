<!DOCTYPE HTML>
<!--[if IEMobile 7 ]><html class="no-js iem7" manifest="default.appcache?v=1"><![endif]--> 
<!--[if lt IE 7 ]><html class="no-js ie6" lang="en"><![endif]--> 
<!--[if IE 7 ]><html class="no-js ie7" lang="en"><![endif]--> 
<!--[if IE 8 ]><html class="no-js ie8" lang="en"><![endif]--> 
<!--[if (gte IE 9)|(gt IEMobile 7)|!(IEMobile)|!(IE)]><!--><html class="no-js" lang="en"> <!--<![endif]-->


<head>
	<title><?php bloginfo( 'name' ); ?><?php wp_title( '|' ); ?></title>
	<meta charset="<?php bloginfo( 'charset' ); ?>" />
  	<meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">
	<meta name="viewport" content="width=device-width, initial-scale=1">
	<link rel="pingback" href="<?php bloginfo( 'pingback_url' ); ?>" />
	<link rel="shortcut icon" href="<?php echo get_stylesheet_directory_uri(); ?>/images/favicon.png"/>
	<link rel="stylesheet" type="text/css" href="<?php bloginfo('stylesheet_url'); ?>" media="screen" />
	<link rel="icon" type="image/x-icon" href="<?php echo get_template_directory_uri(); ?>/images/favicon.png" />
	<?php wp_head(); ?>

	<!-- type kit fonts -->
<script type="text/javascript" src="//use.typekit.net/hmk6tqe.js"></script>
<script type="text/javascript">try{Typekit.load();}catch(e){}</script>
	<!-- Add jQuery library -->
	<script type="text/javascript" src="http://code.jquery.com/jquery-latest.min.js"></script>
	<!-- Google Map Lib library (served from Google) -->
	<script src="https://maps.googleapis.com/maps/api/js?sensor=false"></script>
	<!-- bxSlider Javascript file -->
	<script src="<?php echo get_template_directory_uri(); ?>/js/jquery.bxslider.min.js"></script>
	<!-- bxSlider CSS file -->
	<link href="<?php echo get_template_directory_uri(); ?>/stylesheets/jquery.bxslider.css" rel="stylesheet" />
	<!-- Add cool blur stuff for better browsers-->
	<script type="text/javascript" src="<?php echo get_template_directory_uri(); ?>/lib/blur.js"></script>
	<!-- pace loader -->
	<script data-pace-options='{ "ajax": true }' src="<?php echo get_template_directory_uri(); ?>/js/pace.js"></script>
	<link rel="stylesheet" href="<?php echo get_template_directory_uri(); ?>/js/pace.css" type="text/css" media="screen" />
	<!-- bcg js file -->
	<script src="<?php echo get_template_directory_uri(); ?>/js/master.js"></script>
<!--[if IE 8 ]><link href="<?php echo get_template_directory_uri(); ?><link rel="stylesheet" href="<?php echo get_template_directory_uri(); ?>/stylesheets/ie8.css" type="text/css" media="screen" /><![endif]--> 
	<script src="<?php echo get_template_directory_uri(); ?>/js/jquery.backgroundSize.js"></script>
	<script src="<?php echo get_template_directory_uri(); ?>/js/printlib.js"></script>

	<!-- Add fancyBox -->
	<link rel="stylesheet" href="<?php echo get_template_directory_uri(); ?>/source/jquery.fancybox.css?v=2.1.5" type="text/css" media="screen" />
	<script type="text/javascript" src="<?php echo get_template_directory_uri(); ?>/source/jquery.fancybox.pack.js?v=2.1.5"></script>
	<!-- Optionally add helpers - button, thumbnail and/or media -->

	<link rel="stylesheet" href="<?php echo get_template_directory_uri(); ?>/source/helpers/jquery.fancybox-buttons.css" type="text/css" media="screen" />
	<script type="text/javascript" src="<?php echo get_template_directory_uri(); ?>/source/helpers/jquery.fancybox-buttons.js"></script>
	<script type="text/javascript" src="<?php echo get_template_directory_uri(); ?>/source/helpers/jquery.fancybox-media.js?v=1.0.6"></script>

	<link rel="stylesheet" href="<?php echo get_template_directory_uri(); ?>/source/helpers/jquery.fancybox-thumbs.css?v=1.0.7" type="text/css" media="screen" />
	<script type="text/javascript" src="<?php echo get_template_directory_uri(); ?>/source/helpers/jquery.fancybox-thumbs.js?v=1.0.7"></script>

</head>

<body <?php body_class(); ?> >

<div class="wrap">
<div id="phonedummy"></div>

<div class='header blured '>

	<?php wp_nav_menu(array('container_class' => 'topnav ','theme_location' => 'global')); ?>

	<a href="<?php bloginfo('url'); ?>" class="logo"><img src="<?php echo get_template_directory_uri(); ?>/images/logo.png" alt="<?php bloginfo('name'); ?>" /></a>	
	<a href="<?php bloginfo('url'); ?>" class="logo mobile"><img src="<?php echo get_template_directory_uri(); ?>/images/logo_hq.png" alt="<?php bloginfo('name'); ?>" /></a>	
	<?php wp_nav_menu(array('container_class' => 'mainnav ','theme_location' => 'main')); ?>
  <div class="searchform"> <?php get_search_form(); ?></div>
	<div class="mobileNav" id="mobnav">
		<div id="mobilebtn"> Menu </div>
		<?php wp_nav_menu(array('container_class' => 'mobinav','depth' => -1, 'theme_location' => 'mobile')); ?>
	</div>


</div>
