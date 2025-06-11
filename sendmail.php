<?php
require __DIR__ . '/vendor/autoload.php';

use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

header('Content-Type: application/json');

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    http_response_code(405);
    echo json_encode(['error' => 'Méthode non autorisée']);
    exit;
}

$name = htmlspecialchars(trim($_POST['name'] ?? ''));
$email = htmlspecialchars(trim($_POST['email'] ?? ''));
$phone = htmlspecialchars(trim($_POST['phone'] ?? ''));
$subjectField = htmlspecialchars(trim($_POST['subject'] ?? ''));
$message = htmlspecialchars(trim($_POST['message'] ?? ''));

if (!$name || !$email || !$message) {
    http_response_code(422);
    echo json_encode(['error' => 'Tous les champs sont requis.']);
    exit;
}

if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
    http_response_code(422);
    echo json_encode(['error' => 'Adresse email invalide.']);
    exit;
}


// Retrieve SMTP credentials from environment variables
$smtpUser = getenv('SMTP_USER');
$smtpPass = getenv('SMTP_PASS');

// Validate that credentials exist before configuring PHPMailer.
// If either value is missing, return a 500 error so the caller
// knows the email service is not properly configured.
if (empty($smtpUser) || empty($smtpPass)) {
    http_response_code(500);
    echo json_encode(['error' => 'SMTP credentials are not configured']);
    exit;
}

$mail = new PHPMailer(true);

try {
    $mail->isSMTP();
    $mail->Host = 'smtp.hostinger.com';
    $mail->SMTPAuth = true;
    // Use previously validated credentials
    $mail->Username = $smtpUser;
    $mail->Password = $smtpPass;
    $mail->SMTPSecure = PHPMailer::ENCRYPTION_SMTPS;
    $mail->Port = 465;

    $mail->setFrom('info@thenagabalm.com', 'Site Nagabalm');
    $mail->addAddress('info@thenagabalm.com');
    $mail->addReplyTo($email, $name);

    $mail->isHTML(true);
    $mail->Subject = 'Nouveau message du site';
    $mail->Body    = "<b>Nom:</b> $name<br><b>Email:</b> $email<br><b>Téléphone:</b> $phone<br><b>Sujet:</b> $subjectField<br><b>Message:</b><br>$message";

    $mail->send();
    echo json_encode(['status' => 'OK']);
} catch (Exception $e) {
    http_response_code(500);
    echo json_encode(['error' => $mail->ErrorInfo]);
}
