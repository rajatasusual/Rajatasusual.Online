<?php

$recepient = "contact@rajatasusual.online";
$sitename = "Rajatasusual";

$name = trim($_POST["name"]);
$email = trim($_POST["email"]);
$text = trim($_POST["text"]);
$message = "Name: $name \nEmail: $email \nText: $text";
$headers = "From: Contact Form <contact@rajatasusual.online>"."\r\n";
$headers .= "Reply-To:" . $email . "\r\n";
$headers .= "X-Mailer: PHP/" . phpversion();

$subject = "New Contact Form Submitted \"$sitename\"";
mail($recepient, $subject, $message, $headers);
