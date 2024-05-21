<?php
$conn = null;
$conn = checkDbConnection();
$experience = new Experience($conn);
$error = [];
$returnData = [];
if (array_key_exists("experienceid", $_GET)) {
    checkPayload($data);
    $experience->experience_aid = $_GET['experienceid'];
    $experience->experience_title = checkIndex($data, "experience_title");
    $experience->experience_image = checkIndex($data, "experience_image");
    $experience->experience_date_published = checkIndex($data, "experience_date_published");
    // $experience->experience_datetime = date("Y-m-d H:i:s");
    
    checkId($experience->experience_aid);
    // $experience_name_old = checkIndex($data, "experience_name_old");
    // compareName($experience, $experience_name_old, $experience->experience_name);
    $query = checkUpdate($experience);
    returnSuccess($experience, "experience", $query);
}

checkEndpoint();