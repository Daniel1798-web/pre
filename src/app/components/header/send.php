<?php
error_reporting(0);
$nombre = $_POST['nombre'];
$correo_electronico= $_POST['email'];
$men = $_POST['mensaje'];


$para = danrieloto@gmail.com;
$asunto = 'pagina web';

mail($para, $asunto, $men);

echo 'mensaje enviado correctamente';

?>