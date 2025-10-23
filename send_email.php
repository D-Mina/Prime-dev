<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $to = "info@primedev-eg.com"; 
    $to = "Minaa.ashraf.61@gmail.com"; 
    $subject = $_POST['subject'];
    $name = $_POST['name'];
    $email = $_POST['email'];
    $message = $_POST['message'];

    $headers = "From: ".$email."\r\n";
    $headers .= "Reply-To: ".$email."\r\n";
    $headers .= "Content-type: text/html\r\n";

    $body = "<h2>New Message from Contact Form</h2>
             <p><strong>Name:</strong> {$name}</p>
             <p><strong>Email:</strong> {$email}</p>
             <p><strong>Message:</strong><br>{$message}</p>";

    if(mail($to, $subject, $body, $headers)){
        echo "<script>alert('Message sent successfully!');window.location.href='index.html';</script>";
    } else {
        echo "<script>alert('Failed to send message. Please try again.');window.history.back();</script>";
    }
}
?>
