<?php
$conn = null;
$conn = checkDbConnection();
$badge = new Badge($conn);
$error = [];
$returnData = [];
if (array_key_exists("badgeid", $_GET)) {
    checkPayload($data);
    $badge->badge_aid = $_GET['badgeid'];
    $badge->badge_image = checkIndex($data, "badge_image");
    $badge->badge_title = checkIndex($data, "badge_title");
    $badge->badge_description = checkIndex($data, "badge_description");
    $badge->badge_date_published = date("Y-m-d H:i:s");
    
    checkId($badge->badge_aid);
    // $badge_name_old = checkIndex($data, "badge_name_old");
    // compareName($badge, $badge_name_old, $badge->badge_name);
    $query = checkUpdate($badge);
    returnSuccess($badge, "badge", $query);
}

checkEndpoint();