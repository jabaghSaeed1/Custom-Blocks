<?php
// This file is generated. Do not modify it manually.
return array(
	'my-first-block' => array(
		'$schema' => 'https://schemas.wp.org/trunk/block.json',
		'apiVersion' => 3,
		'name' => 'create-block/my-first-block',
		'title' => 'My First Block',
		'category' => 'widgets',
		'icon' => 'smiley',
		'description' => 'Custom Gutenberg block with animation and spacing controls.',
		'version' => '0.1.0',
		'supports' => array(
			'html' => false,
			'spacing' => array(
				'padding' => true,
				'margin' => true
			),
			'color' => array(
				'background' => true,
				'text' => true
			)
		),
		'attributes' => array(
			'content' => array(
				'type' => 'string',
				'default' => ''
			),
			'animate' => array(
				'type' => 'boolean',
				'default' => true
			)
		),
		'textdomain' => 'my-first-block',
		'editorScript' => 'file:./index.js',
		'editorStyle' => 'file:./index.css',
		'style' => 'file:./style-index.css'
	)
);
