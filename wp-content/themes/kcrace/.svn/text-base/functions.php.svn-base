<?php

require_once('functions/theme.php');
require_once('functions/script.php');
require_once('functions/menu.php');
require_once('functions/widget.php');
require_once('functions/taxonomies.php');
require_once('functions/post-types.php');
require_once('functions/calendar.php');


add_theme_support('post-thumbnails');


add_filter( 'pre_get_posts', 'tgm_cpt_search' );
/**
 * This function modifies the main WordPress query to include an array of post types instead of the default 'post' post type.
 *
 * @param mixed $query The original query
 * @return $query The amended query
 */
function tgm_cpt_search( $query ) {
    if ( $query->is_search )
		$query->set( 'post_type', array( 'post', 'faq', 'races' ) );
    return $query;
};



/**
 * Multi-page Navigation
 * http://gravitywiz.com/
 */
 
class GWMultipageNavigation {
 
    private $script_displayed;
 
    function __construct( $args = array() ) {
 
        $form_ids = false;
        if( isset( $args['form_id'] ) ) {
            $form_ids = is_array( $args['form_id'] ) ? $args['form_id'] : array( $args['form_id'] );
        }
 
        if( !empty($form_ids) ) {
            foreach( $form_ids as $form_id ) {
                add_filter("gform_pre_render_{$form_id}", array( &$this, 'output_navigation_script' ), 10, 2 );
                //add_filter('gform_register_init_scripts', array( &$this, 'register_script') );
            }
        } else {
            add_filter('gform_pre_render', array( &$this, 'output_navigation_script' ), 10, 2 );
        }
 
    }
 
    function output_navigation_script( $form, $is_ajax ) {
 
        // only apply this to multi-page forms
        if( count($form['pagination']['pages']) <= 1 )
            return $form;
 
        $this->register_script( $form );
 
        if( $this->is_last_page( $form ) || $this->is_last_page_reached() ) {
            $input = '<input id="gw_last_page_reached" name="gw_last_page_reached" value="1" type="hidden" />';
            add_filter( "gform_form_tag_{$form['id']}", create_function('$a', 'return $a . \'' . $input . '\';' ) );
        }
 
        // only output the gwmpn object once regardless of how many forms are being displayed
        // also do not output again on ajax submissions
        if( $this->script_displayed || ( $is_ajax && rgpost('gform_submit') ))
            return $form;
 
        ?>
 
        <script type="text/javascript">
 
            (function($){
 
                window.gwmpnObj = function( args ) {
 
                    this.formId = args.formId;
                    this.formElem = jQuery('form#gform_' + this.formId);
                    this.currentPage = args.currentPage;
                    this.lastPage = args.lastPage;
                    this.labels = args.labels;
 
                    this.init = function() {
 
                        // if this form is ajax-enabled, we'll need to get the current page via JS
                        if( this.isAjax() )
                            this.currentPage = this.getCurrentPage();
 
                        if( !this.isLastPage() && !this.isLastPageReached() )
                            return;
 
                        var gwmpn = this;
                        var steps = $('form#gform_' + this.formId + ' .gf_step');
 
                        steps.each(function(){
 
                            var stepNumber = parseInt( $(this).find('span.gf_step_number').text() );
 
                            if( stepNumber != gwmpn.currentPage ) {
                                $(this).html( gwmpn.createPageLink( stepNumber, $(this).html() ) )
                                    .addClass('gw-step-linked');
                            } else {
                                $(this).addClass('gw-step-current');
                            }
 
                        });
 
                        if( !this.isLastPage() )
                            this.addBackToLastPageButton();
 
                        $(document).on('click', '#gform_' + this.formId + ' a.gwmpn-page-link', function(event){
                            event.preventDefault();
 
                            var hrefArray = $(this).attr('href').split('#');
                            if( hrefArray.length >= 2 ) {
                                var pageNumber = hrefArray.pop();
                                gwmpn.postToPage( pageNumber );
                            }
 
                        });
 
                    }
 
                    this.createPageLink = function( stepNumber, HTML ) {
                        return '<a href="#' + stepNumber + '" class="gwmpn-page-link">' + HTML + '</a>';
                    }
 
                    this.postToPage = function(page) {
                        this.formElem.append('<input type="hidden" name="gw_page_change" value="1" />');
                        this.formElem.find('input[name="gform_target_page_number_' + this.formId + '"]').val(page);
                        this.formElem.submit();
                    }
 
                    this.addBackToLastPageButton = function() {
                        this.formElem.find('#gform_page_' + this.formId + '_' + this.currentPage + ' .gform_page_footer')
                            .append('<input type="button" onclick="gwmpn.postToPage(' + this.lastPage + ')" value="' + this.labels.lastPageButton + '" class="button gform_last_page_button">');
                    }
 
                    this.getCurrentPage = function() {
                        return this.formElem.find( 'input#gform_source_page_number_' + this.formId ).val();
                    }
 
                    this.isLastPage = function() {
                        return this.currentPage >= this.lastPage;
                    }
 
                    this.isLastPageReached = function() {
                        return this.formElem.find('input[name="gw_last_page_reached"]').val() == true;
                    }
 
                    this.isAjax = function() {
                        return this.formElem.attr('target') == 'gform_ajax_frame_' + this.formId;
                    }
 
                    this.init();
 
                }
 
            })(jQuery);
 
        </script>
 
        <?php
        $this->script_displayed = true;
        return $form;
    }
 
    function register_script( $form ) {
 
        $page_number = GFFormDisplay::get_current_page($form['id']);
        $last_page = count($form['pagination']['pages']);
 
        $args = array(
            'formId' => $form['id'],
            'currentPage' => $page_number,
            'lastPage' => $last_page,
            'labels' => array(
                'lastPageButton' => __('Back to Last Page')
                )
            );
 
        $script = "window.gwmpn = new gwmpnObj(" . json_encode( $args ) . ");";
        GFFormDisplay::add_init_script( $form['id'], 'gwmpn', GFFormDisplay::ON_PAGE_RENDER, $script );
 
    }
 
    function is_last_page( $form ) {
 
        $page_number = GFFormDisplay::get_current_page($form['id']);
        $last_page = count($form['pagination']['pages']);
 
        return $page_number >= $last_page;
    }
 
    function is_last_page_reached() {
        return rgpost('gw_last_page_reached');
    }
 
}
 
$gw_multipage_navigation = new GWMultipageNavigation();


