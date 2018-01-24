<!doctype html>

<html>

<head>
<meta http-equiv='X-UA-Compatible' content='IE=edge'/>
<?php if(!isset($no_titling)) include'global/includes/titling.inc' ?>

<?php include'global/includes/css_rehab_eia-head-info.inc' ?>

<link href="/global/styles/eia-styles-home.css" rel="stylesheet" />
</head>
<body>
<?php include('global/includes/css_rehab_eia-header.inc'); ?>

<?php include('global/includes/css_rehab_eia-home-slider.inc'); ?>

    <!-- 25% / 50% / 25% --> 
    <div class="l-row">
        <div class="l-side-column">
            <?php include('global/includes/css_rehab_eia-home-whats-new.inc'); ?>
            <?php include('global/includes/css_rehab_eia-home-coming-up.inc'); ?>
        </div>
        <div class="l-two-column">
        <?php /* include'/todayinenergy/includes/file_scrub_live.inc'); */ ?>
        <?php include('global/includes/css_rehab_eia-home-today-in-energy.inc'); ?>
        </div>
        <div class="l-side-column">
            <?php include('global/includes/css_rehab_eia-home-data-highlights.inc'); ?>
        </div>
    </div>

    <!-- 75% / 25% --> 
    <div class="l-row">
        <div class="l-main-column">
            <?php include('global/includes/css_rehab_eia-home-features.inc'); ?>
            <?php include('global/includes/css_rehab_eia-home-our-experts-speak.inc'); ?>
            <?php include('global/includes/css_rehab_eia-home-especially-for.inc'); ?>
            <?php include('global/includes/css_rehab_eia-home-top-picks.inc'); ?>       
        </div>
        <div class="l-side-column">
            <?php include('global/includes/css_rehab_eia-home-outlooks.inc');  ?>
            <?php include('global/includes/css_rehab_eia-home-learn-about-energy.inc'); ?>
            <?php include('global/includes/kids_dates.inc'); ?>
            <?php include('global/includes/css_rehab_eia-home-energy-kids.inc'); ?>
        </div>
    </div>

    <?php include('global/includes/css_rehab_eia-footer.inc'); ?>

    <!-- start page specific vendor scripts -->
    <script src="/global/vendor/bxslider/dist/jquery.bxslider.min.js"></script>
    <!-- endpage specific vendor scripts -->

    <!-- start page specific scripts -->
    <script src="/global/scripts/slider-home.min.js"></script>
    <?php /* the script below appends a query string to the end of each image name in the homepage rotating banner forcing the browser to fetch a new, updated image*/ ?>
    <!--
        script>
    (function(){
        $('.home_feature_banner ul li').each(function(){
        var newName = '.jpg?' + $.now();
        $(this).css('background-image',$(this).css('background-image').replace('.jpg',newName));
        })
    }());
    </script
-->
    <!-- end page specific scripts -->

</body>
</html>




