const container = document.getElementById("container")
const registerBtn = document.getElementById("register")
const loginBtn = document.getElementById("login")

registerBtn.addEventListener("click", () => {
    container.classList.add("active")
})
loginBtn.addEventListener("click", () => {
    container.classList.remove("active")
})

        

async function signUp(event) {
    event.preventDefault()
    const name = document.getElementById("name").value
    const email = document.getElementById("email").value
    const password = document.getElementById("password").value

    const data = {name, email, password}
    console.log(data)

    const response = await fetch('http://localhost:3000/cadastro/signUp',{
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(data)
    })

    console.log(response)
    const results = await response.json();
    console.log(results)

    if(results.success){
        alert(results.message)
        localStorage.setItem("Informacoes", JSON.stringify(results.data))
    }else{
        console.log(message)
    }
}