<?php 
$server = "192.168.1.152";
$user = "inapp";
$pass = "inapp";
$dbName = "sakila";

$mysqli = new mysqli($server, $user, $pass, $dbName);

/* check connection */
if ($mysqli->connect_errno) {
    printf("Connect failed: %s\n", mysqli_connect_error());
    exit();
}
?>