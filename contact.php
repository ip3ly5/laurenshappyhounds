<?php

if(!isset($_POST)){
    sendErrorMessage( 'Invalid method [!$_POST]' , __LINE__ ); 
}

// check first name
if( empty( $_POST['name'] ) ){ 
    sendErrorMessage( 'name is missing' , __LINE__ ); 
}

if( strlen($_POST['name']) < 2 || strlen($_POST['name']) > 20  ){
    sendErrorMessage( 'name min 2 max 20 characters' , __LINE__ );
}

if( empty( $_POST['name'] ) ){ 
    sendErrorMessage( 'name is missing' , __LINE__ ); 
}
if( strlen($_POST['name']) < 2 || strlen($_POST['name']) > 200  ){
    sendErrorMessage( 'name min 2 max 200 characters' , __LINE__ );
}

// check email
if( empty( $_POST['email'] ) ){ 
    sendErrorMessage( 'email is missing' , __LINE__ ); 
}
if( !filter_var( $_POST['email'], FILTER_VALIDATE_EMAIL  )  ){
    sendErrorMessage( 'email is invalid' , __LINE__ );
}

function sendErrorMessage( $sErrorMessage , $iLineNumber ){
    echo '{"status":0, "message":"'.$sErrorMessage.'", "line":'.$iLineNumber.'}';
    exit;
}
  
$sName = $_POST['name'];
$sEmail = $_POST['email'];
$sMessage = $_POST['message'];

// Import PHPMailer classes into the global namespace
// These must be at the top of your script, not inside a function
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

// Load Composer's autoloader
require 'src/PHPMailer.php';
require 'src/Exception.php';
require 'src/SMTP.php';

// Instantiation and passing `true` enables exceptions
$mail = new PHPMailer(true);

try {
    //Server settings
    $mail->SMTPDebug = 0;                                       // Enable verbose debug output
    $mail->isSMTP();                                            // Set mailer to use SMTP
    $mail->Host       = 'smtp.gmail.com';  // Specify main and backup SMTP servers
    $mail->SMTPAuth   = true;                                   // Enable SMTP authentication
    $mail->Username   = 'kea.verify.test@gmail.com';                     // SMTP username
    $mail->Password   = 'none';                               // SMTP password
    $mail->SMTPSecure = 'tls';                                  // Enable TLS encryption, `ssl` also accepted
    $mail->Port       = 587;                                    // TCP port to connect to

    //Recipients
    $mail->setFrom('kea.verify.test@gmail.com', 'Website Mailer');
    $mail->addAddress("laurenshappyhounds@gmail.com", 'Laurens Happy Hounds mail');     // Add a recipient
    // $mail->addAddress('ellen@example.com');               // Name is optional
    // $mail->addReplyTo('dummy@gmail.com', 'Information');
    // $mail->addCC('cc@example.com');
    // $mail->addBCC('bcc@example.com');

    // Attachments
    // $mail->addAttachment('/var/tmp/file.tar.gz');         // Add attachments
    // $mail->addAttachment('/tmp/image.jpg', 'new.jpg');    // Optional name

    // Content

    $mail->isHTML(true);
                                      // Set email format to HTML
    $mail->Subject = "New message from DogWalking Business $sName";
    $mail->Body    = "<b>$sName $sEmail</b> <p>Message: $sMessage</p>";
    // $mail->AltBody = 'This is the body in plain text for non-HTML mail clients';
    $mail->send(); // Send the email

    echo '{"status":1, "message":"Email sent successfully"}';
} catch (Exception $e) {
    echo "Verification email could not be sent. Mailer Error: {$mail->ErrorInfo}";
}

?>
