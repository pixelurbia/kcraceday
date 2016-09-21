<?php

add_action('init', 'create_taxonomies');

function create_taxonomies() {



	register_taxonomy('events', '', 
		array(
			'labels' => array('name' => 'Event Category'),
			'hierarchical' => true
		)
	);

		register_taxonomy('faq_category', 'faq',
		array(
			'publicly_queryable' => false,
			'labels' => array('name' => 'FAQ Category'),
			'hierarchical' => true
		)
	);

		register_taxonomy('races_category', 'races',
		array(
			'publicly_queryable' => false,
			'labels' => array('name' => 'Races Category'),
			'hierarchical' => true
		)
	);


}
