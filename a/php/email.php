<?php
	
	$to = 'graeme.brunton22+pw@gmail.com';
	$name = $_POST['m_name'];
	$subject = 'Portfolio';
	$email = $_POST['m_email'];
	$sentmessage = $_POST['m_message'];


	$message = "

	<html>
		<head>
			<title>Portfolio Email</title>
		</head>
		<body>
			<p>You have been contacted by $name.
			<p>Their email address is $email.
			<br>
			<p>$sentmessage
		</body>

	</html>";

	$headers = "MIME-Version: 1.0" . "\r\n";
	$headers .= "Content-type:text/html;charset=UTF-8" . "\r\n";

	mail($to, $subject, $message, $headers);
?>