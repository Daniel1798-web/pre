<?php
error_reporting(0);
$nombre = $_POST['nombre'];
$correo_electronico= $_POST['email'];
$poblacion = $_POST['mensaje'];


$para = danrieloto@gmail.com;
$asunto = 'pagina web';

mail($para, $asunto, $asunto, $header);

echo 'mensaje enviado correctamente';

?>