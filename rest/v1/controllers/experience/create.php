<?php
$conn = null;
$conn = checkDbConnection();
$experience = new Experience($conn);
if (array_key_exists("experienceid", $_GET)) {
    checkEndpoint();
}
checkPayload($data);
$experience->experience_title = checkIndex($data, "experience_title");
$experience->experience_image = checkIndex($data, "experience_image");
// $experience->experience_description = checkIndex($data, "experience_description");
$experience->experience_is_active = 1;
$experience->experience_date_published = date("Y-m-d H:i:s");
$experience->experience_created = date("Y-m-d H:i:s");
$experience->experience_datetime = date("Y-m-d H:i:s");

// isNameExist($experience, $experience->experience_name);

$query = checkCreate($experience);
returnSuccess($experience, "experience", $query);