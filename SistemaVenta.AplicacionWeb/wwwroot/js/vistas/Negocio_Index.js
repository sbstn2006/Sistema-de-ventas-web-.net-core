
$(document).ready(function ()
{

    fetch("/NegocioController1/Obtener")
        .then(response => {
            return response.ok ? response.json() : Promise.reject(response);
        })
        .then(responseJson => {

            console.log(responseJson)



            if (responseJson.estado) {
                const d = responseJson.objeto

                $("txtNumeroDocumento").val(d.numeroDocumento)
                $("txtRazonSocial").val(d.nombre)
                $("txtCorreo").val(d.correo)
                $("txtDireccion").val(d.direccion)
                $("txTelefono").val(d.telefono)
                $("txtImpuesto").val(d.porcentajeimpuesto)
                $("txtSimboloMoneda").val(d.numeroDocumento)
                $("#imgLogo").val(d.numeroDocumento)


            }
        })


})