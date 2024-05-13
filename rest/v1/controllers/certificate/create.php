<?php
$conn = null;
$conn = checkDbConnection();
$certificate = new Certificate($conn);
if (array_key_exists("certificateid", $_GET)) {
    checkEndpoint();
}
checkPayload($data);
$certificate->certificate_image = checkIndex($data, "certificate_image");
$certificate->certificate_title = checkIndex($data, "certificate_title");
$certificate->certificate_is_active = 1;
$certificate->certificate_date_published = date("Y-m-d H:i:s");
$certificate->certificate_created = date("Y-m-d H:i:s");
$certificate->certificate_datetime = date("Y-m-d H:i:s");

// isNameExist($certificate, $certificate->certificate_name);

$query = checkCreate($certificate);
returnSuccess($certificate, "certificate", $query);