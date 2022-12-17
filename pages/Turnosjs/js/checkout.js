

function recuperarCarrito (){
    let tablaHTML = ""
    const tbody = document.querySelector ("tbody")
    const carrito = JSON.parse(localStorage.getItem ("carrito"))
    if (carrito.length >= 0) {
        carrito.forEach (especialidad => {
            tablaHTML += armarTablaTurnos(especialidad)
        })
        tbody.innerHTML = tablaHTML
    }
}
recuperarCarrito ()

function activarBotonesDelete() {
    const buttonsDelete = document.querySelectorAll("button.button-delete")
    buttonsDelete.forEach(btn => {
        btn.addEventListener("click", ()=> {
            let pos = carrito.findIndex(especialidad => especialidad.nombre === btn.id)
                if (pos > -1) {
                    carrito.splice(pos, 1)
                    localStorage.setItem("carrito", JSON.stringify(carrito))
                    recuperarCarrito()
                    activarBotonesDelete()
                }
        })
    })
}
activarBotonesDelete()



const btnConfirm = document.querySelector ("#btnConfirm")



btnConfirm.addEventListener("click", ()=> {
    Swal.fire({
        icon: "question",
        title: "¿Confirmas los turnos?",
        showCancelButton: true,
        confirmButtonText: "Confirmo!",
        cancelButtonText: "Cancelar",
      }) 
      .then(result => {
        if (result.isConfirmed) {
            localStorage.removeItem("carrito")
            carrito.length = 0
            Swal.fire("turnos confirmados", "te esperamos!", "success")
                .then(()=> {
                    location.href = "http://127.0.0.1:5500/turnos.html"
                })
        }
      })
})


