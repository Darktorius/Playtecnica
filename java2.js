document.querySelector("#submit2").addEventListener("click", e => {
    console.log("Button Clicked");
    e.preventDefault();
  
    //INGRESE UN NUMERO DE WHATSAPP VALIDO AQUI:
    const telefono = "01158412165";
  
    const cliente = document.querySelector("#cliente").value;
    
    
    
    const consulta = document.querySelector("#consulta").value;
    const resp = document.querySelector("#respuesta");
  
    resp.classList.remove("fail");
    resp.classList.remove("send");
  
    const url = `https://api.whatsapp.com/send?phone=${telefono}&text=` +
    `*¿Cuál es tu nombre?*%0A
      ${cliente}%0A*
      
      
      ¿Cual es su consulta?*%0A
      ${consulta}`;
  
    if (cliente === "" ) {
      resp.classList.add("fail");
      resp.innerHTML = `Faltan algunos datos, ${cliente}`;
      return false;
    }
    resp.classList.remove("fail");
    resp.classList.add("send");
    resp.innerHTML = `Se ha enviado su consulta, ${cliente} Gracias por su confianza`;
  
    window.open(url);
  }
);