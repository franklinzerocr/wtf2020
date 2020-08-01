<?php  
header('Access-Control-Allow-Origin: *');

header('Access-Control-Allow-Methods: GET, POST');

header("Access-Control-Allow-Headers: X-Requested-With"); 

header('Content-Type: application/json');

if (!isset($_POST['News'])) die('GET OUT!');
$news= $_POST['News']; 
$myfile = fopen("news.json", "w") or die("Unable to open file!"); 
fwrite($myfile, $news); 
fclose($myfile);
echo "done";
?>