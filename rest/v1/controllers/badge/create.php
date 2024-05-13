<?php
$conn = null;
$conn = checkDbConnection();
$badge = new Badge($conn);
if (array_key_exists("badgeid", $_GET)) {
    checkEndpoint();
}
checkPayload($data);
$badge->badge_image = checkIndex($data, "badge_image");
$badge->badge_title = checkIndex($data, "badge_title");
$badge->badge_description = checkIndex($data, "badge_description");
$badge->badge_is_active = 1;
$badge->badge_created = date("Y-m-d H:i:s");
$badge->badge_datetime = date("Y-m-d H:i:s");

// isNameExist($badge, $badge->badge_name);

$query = checkCreate($badge);
returnSuccess($badge, "badge", $query);