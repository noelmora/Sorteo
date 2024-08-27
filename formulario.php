<?php
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $email = $_POST['email'];
    $nombre = $_POST['nombre'];
    $apellido = $_POST['apellido'];

    // Procesa los datos y devuelve la respuesta 
    echo "Formulario enviado";
} else {
    // Si no es una solicitud POST, muestra un mensaje de error o redirecciona
    echo "Error: Acceso no permitido";
}
?> 
