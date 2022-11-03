<?php
header('Access-Control-Allow-Origin: *');
$rest_json = file_get_contents("php://input");
$_POST = json_decode($rest_json, true);

$nombre = $_POST['name'];
$telefono = $_POST['phone'];
$email = $_POST['email'];
$consultas = $_POST['msg'];

$header = 'From: ' . $email . " \r\n";
$header .= "X-Mailer: PHP/" . phpversion() . " \r\n";
$header .= "Mime-Version: 1.0 \r\n";
$header .= "Content-Type: text/plain";

$mensaje = "Comentario por " . $nombre . ", \r\n";
$mensaje .= "Teléfono: " . $telefono . " \r\n";
$mensaje .= "E-mail: " . $email . " \r\n";
$mensaje .= "Consulta: " . $consultas . " \r\n";
$mensaje .= "Enviado el " . date('d/m/Y', time());

$para = 'info@mv-graficos.com.ar';
$asunto = 'Contacto - MV Gráficos';

$ok = mail($para, $asunto, utf8_decode($mensaje), $header);

if($ok) 
    {
    http_response_code(200);
    echo json_encode(array(
		"response" => true
	));
	}
  else
	{
	// tell the user about error
	echo json_encode(["response" => false]);
	}

?>