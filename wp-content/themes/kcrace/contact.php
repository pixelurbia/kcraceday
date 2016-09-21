
<?php
/*
Template Name: Contact
*/
?>

<?php get_template_part('templates/header'); ?>


<div class="contact">
<div id="blue_row" class="tradev">
	<div class="row">
		<div class="contentWrap">
<div class="contactinfo tk-source-sans-pro">
	<div class="address">
		<h3>Contact Us</h3>
		<p class="street tk-source-sans-pro">14105 Overbrook, Suite C</p>
		<p class="city tk-source-sans-pro">Leawood, KS 66224</p>
		<p class="phone tk-source-sans-pro"><span>Phone:</span> 913.451.9220</p>
		<p class="fax tk-source-sans-pro"><span>Fax:</span> 913.451.9228</p>
	</div>

	<div id="map"></div>
<script type="text/javascript">

 var map = new google.maps.Map(document.getElementById('map'), {
      zoom: 13,
     center: new google.maps.LatLng(38.884590,-94.609805),
      mapTypeId: google.maps.MapTypeId.ROADMAP
    });

    var marker = new google.maps.Marker({
      position: new google.maps.LatLng(38.873102,-94.610187),
      url: 'https://www.google.com/maps/place/14105+Overbrook+Rd/@38.8724249,-94.609542,437m/data=!3m1!1e3!4m2!3m1!1s0x87c0c25c49fe8bc1:0x882749c5c60c7a45',
      map: map,
      icon: 'http://carr.activedraft.com/wp-content/themes/carr/images/mappin.png'

    });

    google.maps.event.addListener(marker, 'click', function() {
      window.location.href = marker.url;
    });

</script>
</div>
	</div>
</div>
</div>

</div>








<?php get_template_part('templates/footer'); ?>