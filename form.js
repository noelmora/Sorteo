$(document).ready(function() {
    $('#formulario').submit(function(e) {
        e.preventDefault(); // Evita el comportamiento predeterminado del formulario
        
        // Obtiene los datos del formulario
        let email = $('#email').val();
        let nombre = $('#nombre').val();
        let apellido = $('#apellido').val();

        let formData  = {
            email,
            nombre,
            apellido
        }

        // Envía la solicitud AJAX
        $.ajax({
            type: 'POST',
            url: 'formulario.php', 
            data: formData,
            success: function(response) {
                $('#formulario').html(response); 
                alert("formulario enviado")
            }
        });
    });
});