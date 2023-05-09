<?php
if(isset($_POST['toEmail']) && isset($_POST['fromName']) && isset($_POST['fromEmail']) && isset($_POST['subject']) && isset($_POST['body'])){
    $toEmail = $_POST['toEmail'];
    $fromName = $_POST['fromName'];
    $fromEmail = $_POST['fromEmail'];
    $subject = $_POST['subject'];
    $body = $_POST['body'];

    $command = 'node send-email.js ' . $toEmail . ' ' . $fromName . ' ' . $fromEmail . ' ' . $subject . ' ' . $body;
    $output = shell_exec($command);

    echo 'Email sent successfully';
}
else{
    echo 'All fields are required';
}
?>
