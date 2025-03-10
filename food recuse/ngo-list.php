<?php
include 'db.php';

$sql = "SELECT * FROM ngos WHERE location = 'Kancheepuram'";
$result = $conn->query($sql);

$ngos = [];
while ($row = $result->fetch_assoc()) {
    $ngos[] = $row;
}

echo json_encode($ngos);
?>