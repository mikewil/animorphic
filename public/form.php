<?php

$name=$_POST['name'];
$email=$_POST['email'];
$comments=$_POST['comments'];

if (trim($name) =="") {
	echo "Please enter your name.";
	return http_response_code(400);
}

if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
	$e = FALSE;
	echo "Please enter a valid e-mail address.";
	return http_response_code(400);
}

if (trim($comments) =="") {
	echo "Please enter some comments.";
	return http_response_code(400);
}

$name = stripslashes($name);
$email = stripslashes($email);
$comments = stripslashes($comments);

$to = "info@animorphic.com";
$subject = "(WEB FORM)";
$message = "The following information was submitted from the contact form:\n\n";
$message .= "Name: $name\n";
$message .= "E-mail: $email\n";
$message .= "Comments:\n\n $comments";
$headers = "From: $name <$email>";

mail($to, $subject, $message, $headers);

echo 'Thank you for contacting us. We will get back to you shortly.';
return http_response_code(200);