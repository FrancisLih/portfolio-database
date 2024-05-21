<?php
require '../../core/header.php';
require '../../core/functions.php';
require '../../models/Badge.php';

$conn = null;
$conn = checkDbConnection();

$badge = new Badge($conn);

$body = file_get_contents("php://input");
$data = json_decode($body, true);


if (isset($_SERVER['HTTP_AUTHORIZATION'])) {
    checkApiKey();
    if (array_key_exists("badgeid", $_GET)) {

        checkPayload($data);
        $badge->badge_aid = $_GET['badgeid'];
        $badge->badge_active = trim($data["isActive"]);
        $badge->badge_datetime = date("Y-m-d H:i:s");
        checkId($badge->badge_aid);
        $query = checkActive($badge);
        http_response_code(200);
        returnSuccess($badge, "badge", $query);
    }
    checkEndpoint();
}

http_response_code(200);
// header('HTTP/1.0 401 Unauthorized');
checkAccess();