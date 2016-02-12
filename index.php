<!DOCtype HTML>

<html>

<head>

	<script src="a/js/jquery-1.12.0.min.js"></script>
	<script src="a/js/jquery-ui.min.js"></script>
	<script src="a/js/bootstrap.min.js"></script>
	<script src="a/js/base.js"></script>

	<link rel="stylesheet" type="text/css" href="a/css/bootstrap.min.css">
	<link rel="stylesheet" type="text/css" href="a/font-awesome/css/font-awesome.min.css">
	<link rel="stylesheet" type="text/css" href="a/css/jquery-ui.min.css">
	<link href='https://fonts.googleapis.com/css?family=Raleway|Marcellus+SC' rel='stylesheet' type='text/css'>
	<link rel="stylesheet" type="text/css" href="a/css/main.css">

	<meta name="viewport" content="width=device-width, initial-scale=1">

</head>

<body>

	<div class="row title">
		<div class="col-sm-12">
			<nav class="navbar navbar-default navbar-fixed-top header">
  				<div class="container">
    				<i class="logo"></i>
    				<ul class="menu-header">
    					<li id="contactlink" class="header-text menu-list">Contact</li>
    					<li id="portfoliolink" class="header-text menu-list">Portfolio</li>
    					<li id="aboutlink" class="header-text menu-list current">About</li>
    				</ul>
  				</div>
			</nav>
		</div>
		<div class="title-desc-both">
			<div class="title-desc" id="title-name">Graeme Brunton</div>
			<div class="title-desc" id="title-wd">Web Developer</div>
		</div>
		<div class="rectangle" id="rectangle1"></div>
		<div class="rectangle rectangle-small" id="rectangle2"></div>
		<div class="rectangle" id="rectangle3"></div>
		<div class="rectangle rectangle-small" id="rectangle4"></div>
		<div class="profile-image">
			<img class="img-circle profile">
		</div>
		<div id="about"></div>
	</div>
	<div class="row body-row">
		<div class="about-header header-text sub-header">About</div>
		<div class="col-sm-12 about-section">
			<div class="about-inner-section inner-section">
				<div class="about-info">
				</div>
			</div>
		<div id="portfolio"></div>
		</div>
		<div class="col-sm-12 portfolio-section">
			<div class="portfolio-inner-section inner-section">
				<div class="portfolio-header header-text sub-header">Portfolio</div>
					<div class="portfolio-item" id="ajii">
						<span class="img-layer">
							<div class="img-layer-info">
								<span class="img-info-header header-text">Travel Website</span>
								<span class="img-info">
									<ul class="img-info-list">
										<li class="img-info-list-s">Website documenting travels through the means of images.</li>
										<li class="img-info-list-s">Fully responsive website for mobiles, tablets, laptops and PCs.</li>
										<li class="img-info-list-s">Custom made image slider that can be used with arrows, arrow keys or swipe on mobile and table.</li>
										<li class="img-info-list-s">Designed using HTML, PHP, CSS, Javascript/Jquery and SQL.</li>
									</ul>
								</span>
							</div>
						</span>
						<img class="inside-img" src="a/imgs/ajii.png">
					</div>
					<div class="portfolio-item" id="asw">
						<span class="img-layer">
							<div class="img-layer-info">
								<span class="img-info-header header-text">Wedding Website</span>
								<span class="img-info">
									<ul class="img-info-list">
										<li class="img-info-list-s">A wedding invitational website where people can access the website to view information about the wedding and also RSVP to the wedding.</li>
										<li class="img-info-list-s">Website is password protected with three different passwords for day guests, night guests and the bride and groom.</li>
										<li class="img-info-list-s">Website has a database which the bride and groom can view on their password protected page that shows guests that have returned their RSVP.</li>
										<li class="img-info-list-s">Designed with HTML, CSS, PHP, Javascript/Jquery and SQL.</li>
										<li class="img-info-list-s">Website is responsive and can be viewed on all mobiles, tablets, laptops and PC's.</li>
									</ul>
								</span>
							</div>
						</span>
						<img class="inside-img" src="a/imgs/asw.png"></div>
					</div>
			<div id="contact"></div>
		</div>
		<div class="col-sm-12 contact-section">
			<div class="contact-inner">
				<div class="contact-header header-text sub-header">Contact</div>
				<div class="rectangle lower-rect" id="rectangle1"></div>
				<div class="rectangle lower-rect rectangle-small" id="rectangle2"></div>
				<div class="rectangle lower-rect" id="rectangle3"></div>
				<div class="rectangle lower-rect rectangle-small" id="rectangle4"></div>
				<form role="form">
					<div class="contact-form form-group">
						<label for="name">Name: </label>
							<div class="input-and-error">
								<input class="name-form text-form contact form-control" autocomplete="off" type="text" name="name">
								<div class="alert alert-danger name-error">Please Enter A Name</div>
							</div>
						<label for="email">E-mail: </label>
							<input class="email-form text-form contact form-control" autocomplete="off" type="text" name="email">
							<div class="alert alert-danger invalid-error">Invalid Email</div>
							<div class="alert alert-danger no-email-error">Please Enter an Email</div>
						<label for="message">Message: </label>
							<textarea class="message-form textarea-form contact form-control" type="textarea" name="message"></textarea>
							<div class="alert alert-danger no-message-error">Don't be afraid to say something</div>
						<button type="button" class="form-button btn btn-default contact form-control">Send Message</button>
					</div>
				</form>
				<span class="github">
					<span class="github-icon github-inner fa fa-github fa-2x"></span>
					<a class="github-text github-inner" href="https://www.github.com/Brunton22">My Github Account</a>
				</span>
			</div>
		</div>
		<div class="col-sm-12 footer">
			<div class="footer-info">Website designed by Graeme Brunton.</div>
		</div>
	</div>

</body>

<footer>
</footer>
</html>