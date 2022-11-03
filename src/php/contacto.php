<?php
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Headers: Content-Type');
$rest_json = file_get_contents("php://input");
$_POST = json_decode($rest_json, true);

// Checkamos que hay data
if(empty($_POST['name']) && empty($_POST['phone']) && empty($_POST['email']) && empty($_POST['msg'])){
	echo json_encode(
        [
            "response" => false
        ]
    ); 
    exit();
}

if($_POST){
	$nombre = $_POST['name'];
	$telefono = $_POST['phone'];
	$email = $_POST['email'];
	$msg = $_POST['msg'];
	
	$header = 'From: ' . $email . " \r\n";
	$header .= "Mime-Version: 1.0 \r\n";
	$header .= "Content-Type: text/plain";
	
	$mensaje = "Comentario por " . $nombre . ", \r\n";
	$mensaje .= "Teléfono: " . $telefono . " \r\n";
	$mensaje .= "E-mail: " . $email . " \r\n";
	$mensaje .= "Consulta: " . $msg . " \r\n";
	$mensaje .= "Enviado el " . date('d/m/Y', time());
	
	$para = 'info@mv-graficos.com.ar';
	$asunto = 'Contacto - MV Gráficos';
	
	$ok = mail($para, $asunto, utf8_decode($mensaje), $header);
	if($ok) {
		http_response_code(200);
		echo json_encode(array(
			"response" => true
		));
	}
	else{
		echo json_encode(["response" => false]);
	}
}



?>