<?php

add_action('init', 'create_post_types');

function create_post_types() {

	register_post_type('blackout', 
		array(
			'labels' => array(
				'name' => 'Blackout Dates',
				'singular_name' => 'Blackout Date',
				'add_new' => 'New Blackout Date',
				'add_new_item' => 'Add Blackout Date',
				'edit_item' => 'Edit Blackout Date',
				'all_items' => 'All Blackout Dates'
			),
	  	'public' => true,
			'supports' =>	array('title')
		)
	);

	register_post_type('faq',
		array(
			'labels' => array(
				'name' => 'FAQs',
				'singular_name' => 'FAQs',
				'add_new' => 'New Question',
				'add_new_item' => 'New Question',
				'edit_item' => 'Edit Question',
				'all_items' => 'All FAQs',
				'capability_type' => 'post'

			),
		'exclude_from_search' => true,
		'publicly_queryable' => true,
	  	'public' => true,
			'supports' =>	array('title', 'editor'),
		)
	);

		register_post_type('races',
		array(
			'labels' => array(
				'name' => 'Races',
				'singular_name' => 'Races',
				'add_new' => 'New Race/event',
				'add_new_item' => 'New Race/event',
				'edit_item' => 'Edit Race/Event',
				'all_items' => 'All Races/Events',
				'capability_type' => 'post'
			),
		'exclude_from_search' => true,
		'publicly_queryable' => true,
	  	'public' => true,
			'supports' =>	array('title', 'editor'),

		)
	);

}