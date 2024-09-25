const iniciars = () => {
    window.location.href="../html/login.html";
}

const regresar = () => {
    window.location.href="../index.html"
}
const ingresar = () => {
    let identificacion = document.getElementById("identificacion").value
    let contrasena = document.getElementById("contrasena").value 

    fetch('../json/usuarios.json')
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then(data => {
            const usuarioValido = data.find(user => user.identificacion === identificacion && user.contrasena === contrasena);
            if (usuarioValido) {
                sessionStorage.setItem('nombreUsuario', usuarioValido.nombre);
                if (usuarioValido.rol === "Administrador") {
                    alert("Inicio de sesión exitoso");
                    window.location.href = "../html/administrador.html";

                } else if (usuarioValido.rol === "Coordinador") {
                    alert("Inicio de sesión exitoso");
                    window.location.href = "../html/coordinador.html";

                } else if (usuarioValido.rol === "Docente") {
                    alert("Inicio de sesión exitoso");
                    window.location.href = "../html/docente.html";

                } else if (usuarioValido.rol === "Estudiante"){
                    alert("Inicio de sesión exitoso");
                    window.location.href = "../html/estudiante.html";
                }
            } else {
                alert("Usuario o contraseña incorrectos");
            }
        })
        .catch(error => {
            alert('Hubo un problema con la solicitud Fetch:', error);
        });
}

const mostrarBienvenida = () => {
    const nombreUsuario = sessionStorage.getItem('nombreUsuario');
    if (nombreUsuario) {
        document.getElementById('mensaje-bienvenida').innerText = `Bienvenido/a, ${nombreUsuario}!`;
    }
};

const regresar1 = () => {
    window.location.href="../html/administrador.html";
}

const regresar2 = () => {
    window.location.href="../html/coordinador.html";
}
const regresar3 = () => {
    window.location.href="../html/docente.html";
}
const instituciones = () => {
    window.location.href="../html/instituciones.html";
}

const cargarInstituciones = () => {
    fetch('../json/institucion.json')
        .then(response => {
            if (!response.ok) {
                throw new Error('Error al cargar el archivo JSON');
            }
            return response.json();
        })
        .then(data => {
            const tableBody = document.getElementById('instituciones-table').getElementsByTagName('tbody')[0];
            data.forEach(institucion => {
                const row = tableBody.insertRow();
                row.insertCell(0).innerText = institucion.nombre;
                row.insertCell(1).innerText = institucion.nit;
                row.insertCell(2).innerText = institucion.coordinador;
                row.insertCell(3).innerText = institucion.pais;
                row.insertCell(4).innerText = institucion.ciudad;
                row.insertCell(5).innerText = institucion.direccion;
                row.insertCell(6).innerText = institucion.correo;
                row.insertCell(7).innerText = institucion.telefono;
            });
        })
        .catch(error => {
            console.error('Error:', error);
        });
}

const coordinadores = () => {
    window.location.href="../html/VerCoordinadores.html";
}

const cargarCoordinadores = () => {
    fetch('../json/coordinador.json')
        .then(response => {
            if (!response.ok) {
                throw new Error('Error al cargar el archivo JSON');
            }
            return response.json();
        })
        .then(data => {
            const tableBody = document.getElementById('coordinadores-table').getElementsByTagName('tbody')[0];
            data.forEach(coordinador => {
                const row = tableBody.insertRow();
                row.insertCell(0).innerText = coordinador.nombre;
                row.insertCell(1).innerText = coordinador.apellido;
                row.insertCell(2).innerText = coordinador.identificacion;
                row.insertCell(3).innerText = coordinador.edad;
                row.insertCell(4).innerText = coordinador.telefono;
                row.insertCell(5).innerText = coordinador.correo;
                row.insertCell(6).innerText = coordinador.institucion;
            });
        })
        .catch(error => {
            console.error('Error:', error);
        });
}

const registrarinst = () => {
    window.location.href = "../html/regins.html";
}

const registrarcoord = () => {
    window.location.href = "../html/regcoor.html";
}

const regpro = () => {
    window.location.href = "../html/regpro.html";
}

const regest = () => {
    window.location.href = "../html/regest.html";
}

const regmat = () => {
    alert("Interfaz en proceso de realizacion :)");
}

const verpro = () => {
    window.location.href = "../html/verpro.html";
}

const cargarProfesores = () => {
    fetch('../json/docente.json')
        .then(response => {
            if (!response.ok) {
                throw new Error('Error al cargar el archivo JSON');
            }
            return response.json();
        })
        .then(data => {
            const tableBody = document.getElementById('docentes-table').getElementsByTagName('tbody')[0];
            data.forEach(docente => {
                const row = tableBody.insertRow();
                row.insertCell(0).innerText = docente.nombre;
                row.insertCell(1).innerText = docente.apellido;
                row.insertCell(2).innerText = docente.identificacion;
                row.insertCell(3).innerText = docente.edad;
                row.insertCell(4).innerText = docente.telefono;
                row.insertCell(5).innerText = docente.correo;
                row.insertCell(6).innerText = docente.materia;
            });
        })
        .catch(error => {
            console.error('Error:', error);
        });
}

const verest = () => {
    window.location.href = "../html/verest.html";
}

const cargarEstudiantes = () => {
    fetch('../json/estudiante.json')
        .then(response => {
            if (!response.ok) {
                throw new Error('Error al cargar el archivo JSON');
            }
            return response.json();
        })
        .then(data => {
            const tableBody = document.getElementById('estudiantes-table').getElementsByTagName('tbody')[0];
            data.forEach(estudiante => {
                const row = tableBody.insertRow();
                row.insertCell(0).innerText = estudiante.nombre;
                row.insertCell(1).innerText = estudiante.apellido;
                row.insertCell(2).innerText = estudiante.identificacion;
                row.insertCell(3).innerText = estudiante.edad;
                row.insertCell(4).innerText = estudiante.telefono;
                row.insertCell(5).innerText = estudiante.correo;
                row.insertCell(6).innerText = estudiante.grado;
            });
        })
        .catch(error => {
            console.error('Error:', error);
        });
}

const estgr = () => {
    window.location.href = "../html/estgr.html";
}
const notas = () => {
    alert("Interfaz en proceso de realizacion :)");
}

const act = () => {
    alert("Interfaz en proceso de realizacion :)");
}

const cerrarSesion = () => {
    sessionStorage.removeItem('nombreUsuario');
    window.location.href = "../html/login.html"; 
}

document.addEventListener("DOMContentLoaded", () => {
    mostrarBienvenida();
    cargarInstituciones();
    cargarCoordinadores();
    cargarProfesores();
    cargarEstudiantes();
});
        