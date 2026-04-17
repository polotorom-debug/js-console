const input = document.getElementById("codigo");
const lista = document.getElementById("lista");

input.addEventListener("keydown", function(event) {
    if (event.key === "Enter") {
        ejecutar();
    }
});

function agregarLinea(texto) {
    const li = document.createElement("li");
    li.innerHTML = texto.replace(/\n/g, "<br>");
    lista.appendChild(li);
}

function ejecutar() {
    let codigo = input.value.trim();

    if (codigo === "") return;

    let salida = "";

    const console = {
        log: function(...texto) {
            salida += texto.join(" ") + "\n";
        }
    };

    try {
        eval(codigo);

        if (salida.trim() !== "") {
            agregarLinea(salida.trim());
        }

    } catch (error) {
        agregarLinea("Error: " + error.message);
    }

    input.value = "";
    input.focus();
}