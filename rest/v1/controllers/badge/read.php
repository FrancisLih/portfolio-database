<?php
$conn = null;
$conn = checkDbConnection();
$badge = new Badge($conn);
$error = [];
$returnData = [];

if (empty($_GET)) {
    $query = checkReadAll($badge);
    http_response_code(200);
    getQueriedData($query);
}

checkEndpoint();