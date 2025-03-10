<?php
$host = 'localhost';
$user = 'root';
$password = '';
$database = 'food_rescue';

$conn = new mysqli($host, $user, $password, $database);

if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}
?>