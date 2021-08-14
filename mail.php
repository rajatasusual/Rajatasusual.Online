<?php

$recepient = "contact@rajatasusual.online";
$sitename = "Rajatasusual";

$name = trim($_POST["name"]);
$email = trim($_POST["email"]);
$text = trim($_POST["text"]);
$message = "Name: $name \nEmail: $email \nText: $text";
$headers = "From: Contact Form <contact@rajatasusual.online> \r\n";
$headers .= "Content-type: text/plain; charset=\"utf-8\"\r\n ";
$headers .= "Reply-To:" . $email . "\r\n" ."X-Mailer: PHP/" . phpversion();

$pagetitle = "New Contact Form Submitted \"$sitename\"";
mail($recepient, $pagetitle, $message, $headers);
