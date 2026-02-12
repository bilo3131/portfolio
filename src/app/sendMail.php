<?php

switch ($_SERVER['REQUEST_METHOD']) {
    case ("OPTIONS"): //Allow preflighting to take place.
        header("Access-Control-Allow-Origin: *");
        header("Access-Control-Allow-Methods: POST");
        header("Access-Control-Allow-Headers: content-type");
        exit;
    case ("POST"):
        header("Access-Control-Allow-Origin: *");
        
        // Error logging
        error_log("Mail script called");
        
        $json = file_get_contents('php://input');
        $params = json_decode($json);

        if (!$params) {
            error_log("Failed to parse JSON: " . $json);
            http_response_code(400);
            echo json_encode(['error' => 'Invalid JSON']);
            exit;
        }

        $email = $params->email ?? '';
        $name = $params->name ?? '';
        $message = $params->message ?? '';
        $checkbox = $params->checkbox ?? false;

        error_log("Attempting to send email from: $email, name: $name");

        $recipient = 'contact@bilal-alac.de';
        $subject = "Contact From <$email>";
        $message = "From: " . $name . "<br>" . $message;

        $headers = array();
        $headers[] = 'MIME-Version: 1.0';
        $headers[] = 'Content-type: text/html; charset=utf-8';
        $headers[] = "From: noreply@bilal-alac.de";
        $headers[] = "Reply-To: $email";

        // Set the envelope sender using additional parameters
        $additionalParams = '-f noreply@bilal-alac.de -r noreply@bilal-alac.de';
        $mailResult = mail($recipient, $subject, $message, implode("\r\n", $headers), $additionalParams);
        
        if ($mailResult) {
            error_log("Mail sent successfully");
            echo json_encode(['success' => true]);
        } else {
            error_log("Mail sending failed");
            http_response_code(500);
            echo json_encode(['error' => 'Mail sending failed']);
        }
        break;
    default: //Reject any non POST or OPTIONS requests.
        header("Allow: POST", true, 405);
        exit;
}
