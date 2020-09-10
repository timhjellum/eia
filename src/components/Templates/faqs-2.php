<!doctype html>
<?php
$globalTitle 	= 'U.S. Energy Information Administration (EIA)';
$pageTitle          = 'Frequently Asked Questions';
$sectionname        = 'Frequently Asked Questions (FAQs)';
$locale             = 'faqs';
?>
<html>

<head>
	<title><?=$pageTitle?> - <?=$globalTitle?></title>
	<meta property="og:title" content="<?=$pageTitle?> - <?=$globalTitle?>">
	<meta property="og:url" content="https://www.eia.gov<?=$_SERVER['PHP_SELF']?>">
	<meta name="url" content="https://www.eia.gov<?=$_SERVER['PHP_SELF']?>">
	<?php include('adaptive/global/head/includes/head.inc'); ?>
</head>

<body>
	<?php include('adaptive/global/header/includes/header.inc'); ?>
	<div class="l-row l-two-col-right-narrow">
		<div class="l-col">
			<div class="article-alt">
				<h1><?=$pageTitle?></h1>
				<ul>
					<li><a href="#q1">Question One?</a></li>
					<li><a href="#q2">Question Two?</a></li>
					<li><a href="#q3">Question Thr?</a></li>
					<li><a href="#q4">Question Fou?</a></li>
					<li><a href="#q5">Question Fiv?</a></li>
				</ul>

				<!-- start faq item -->
				<h3><a name="q1"></a>Question One?</h3>
				<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut nec dolor quis ipsum vehicula vehicula. Donec euismod erat eu dictum egestas. Vestibulum est erat, accumsan non nibh vitae, auctor scelerisque felis. Aenean neque nisl, vehicula id justo sit amet, maximus blandit erat. Sed ac vestibulum dui.</p>
				<!-- end faq item -->

				<!-- start faq item -->
				<h3><a name="q2"></a>Question Two?</h3>
				<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut nec dolor quis ipsum vehicula vehicula. Donec euismod erat eu dictum egestas. Vestibulum est erat, accumsan non nibh vitae, auctor scelerisque felis. Aenean neque nisl, vehicula id justo sit amet, maximus blandit erat. Sed ac vestibulum dui.</p>
				<!-- end faq item -->

				<!-- start faq item -->
				<h3><a name="q3"></a>Question Thr?</h3>
				<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut nec dolor quis ipsum vehicula vehicula. Donec euismod erat eu dictum egestas. Vestibulum est erat, accumsan non nibh vitae, auctor scelerisque felis. Aenean neque nisl, vehicula id justo sit amet, maximus blandit erat. Sed ac vestibulum dui.</p>
				<ul>
					<li>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
					<li>Vivamus non arcu varius, sagittis tortor et, eleifend ante.</li>
					<li>Nullam viverra felis in sagittis ultricies.</li>
					<li>Donec bibendum leo et justo consequat iaculis.</li>
				</ul>
				<!-- end faq item -->

				<!-- start faq item -->
				<h3><a name="q4"></a>Question Fou?</h3>
				<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut nec dolor quis ipsum vehicula vehicula. Donec euismod erat eu dictum egestas. Vestibulum est erat, accumsan non nibh vitae, auctor scelerisque felis. Aenean neque nisl, vehicula id justo sit amet, maximus blandit erat. Sed ac vestibulum dui.</p>
				<!-- end faq item -->

				<!-- start faq item -->
				<h3><a name="q5"></a>Question Fiv?</h3>
				<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut nec dolor quis ipsum vehicula vehicula. Donec euismod erat eu dictum egestas. Vestibulum est erat, accumsan non nibh vitae, auctor scelerisque felis. Aenean neque nisl, vehicula id justo sit amet, maximus blandit erat. Sed ac vestibulum dui.</p>
				<ul>
					<li>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
					<li>Vivamus non arcu varius, sagittis tortor et, eleifend ante.</li>
					<li>Nullam viverra felis in sagittis ultricies.</li>
					<li>Donec bibendum leo et justo consequat iaculis.</li>
				</ul>
				<!-- end faq item -->

			</div>
			<div class="top-container">
				<a href="#top" class="top">Top</a>
			</div>
		</div>
		<div class="l-col">
			<?php include('./includes/side-content.inc'); ?>
		</div>
	</div>
	<?php include('adaptive/global/footer/includes/footer.inc'); ?>
</body>

</html>