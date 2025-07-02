<?php
// Sécurité : n'accepter que les requêtes POST
if ($_SERVER["REQUEST_METHOD"] !== "POST") {
    http_response_code(405); // Méthode non autorisée
    exit("Méthode non autorisée.");
}

// Nettoyage et validation des données
$email   = filter_input(INPUT_POST, 'email', FILTER_VALIDATE_EMAIL);
$message = trim($_POST['message'] ?? '');

if (!$email || empty($message)) {
    http_response_code(400); // Mauvaise requête
    exit("Veuillez fournir une adresse e-mail valide et un message.");
}

// Sécurité : éviter les en-têtes e-mail forgés
if (preg_match("/[\r\n]/", $email)) {
    http_response_code(400);
    exit("Tentative d'injection détectée.");
}

// Destinataire
$to = "contact@vincentcomparato.fr";

// Sujet
$subject = "Nouveau message depuis le formulaire de contact";

// Contenu de l’e-mail
$body = "Vous avez reçu un nouveau message depuis votre portfolio :\n\n";
$body .= "Adresse e-mail : $email\n\n";
$body .= "Message :\n$message\n";

// Entêtes de l’e-mail
$headers = [
    "From: contact@vincentcomparato.fr",
    "Reply-To: $email",
    "Content-Type: text/plain; charset=UTF-8"
];

// Envoi de l’e-mail
$success = mail($to, $subject, $body, implode("\r\n", $headers));

if ($success) {
    http_response_code(200);
    echo "Votre message a bien été envoyé.";
} else {
    http_response_code(500);
    echo "Une erreur est survenue lors de l'envoi de votre message.";
}
