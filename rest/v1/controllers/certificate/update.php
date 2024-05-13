<?php
$conn = null;
$conn = checkDbConnection();
$certificate = new Certificate($conn);
$error = [];
$returnData = [];
if (array_key_exists("certificateid", $_GET)) {
    checkPayload($data);
    $certificate->certificate_aid = $_GET['certificateid'];
    $certificate->certificate_image = checkIndex($data, "certificate_image");
    $certificate->certificate_title = checkIndex($data, "certificate_title");
    $certificate->certificate_description = checkIndex($data, "certificate_description");
    $certificate->certificate_date_published = date("Y-m-d H:i:s");
    
    checkId($certificate->certificate_aid);
    // $certificate_name_old = checkIndex($data, "certificate_name_old");
    // compareName($certificate, $certificate_name_old, $certificate->certificate_name);
    $query = checkUpdate($certificate);
    returnSuccess($certificate, "certificate", $query);
}

checkEndpoint();