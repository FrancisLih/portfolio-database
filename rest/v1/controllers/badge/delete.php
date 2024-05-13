<?php
$conn = null;
$conn = checkDbConnection();
$badge = new Badge($conn);

$error = [];
$returnData = [];
if (array_key_exists("badgeid", $_GET)) {
    $badge->badge_aid = $_GET['badgeid'];
    checkId($badge->badge_aid);

    $query = checkDelete($badge);
    returnSuccess($badge, "badge", $query);
}

checkEndpoint();