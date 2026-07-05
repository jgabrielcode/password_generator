import "../components/gerador.css"
import { LockIcon } from "lucide-react"
import { Copy } from "lucide-react"
import { RotateCcw } from "lucide-react"

import { useState } from "react"



function Gerador(){

    const [numEstado, setNumEstado] = useState(false)
    const [symEstado, setSymEstado] = useState(false)
    const [uppEstado, setUppEstado] = useState(false)
    const [lowEstado, setLowEstado] = useState(false)

    const [strength, setStrength] = useState("")

    const [tam, setTam] = useState(0)

    const [senha, setSenha] = useState("Gere sua senha")

    const [cor, setCor] = useState("")
    


    function tamanho(e){
        setTam(e.target.value)
        console.log(e.target.value)
    }


    function handleCheckBox(e){
    
        if(e.target.name == "num") setNumEstado(e.target.checked) 
        if(e.target.name == "sym") setSymEstado(e.target.checked) 
        if(e.target.name == "upper") setUppEstado(e.target.checked) 
        if(e.target.name == "low") setLowEstado(e.target.checked)  
   
     }
     
     function passwordStrength(){
        if(numEstado && lowEstado && uppEstado && symEstado){
            setStrength("Senha Forte")
            setCor("green")
        }


        if(!numEstado || !lowEstado || !uppEstado || !symEstado){
            setStrength("Senha Fraca")
            setCor("red")
        }
       
        
     }


    function gerarSenha(){
        const arr = []
        const caracteres = []

        if(!numEstado && !lowEstado && !uppEstado && !symEstado){
            alert("Marque algum campo para criar a senha")
            return
        }

        
        if(numEstado) {
            caracteres.push("1234567890")
            console.log("Numero marcado")
        }
        
        if(symEstado) {
            caracteres.push("[!@#$%&*?]")
            console.log(`Simbolos marcados`)
        }
        if(uppEstado) {
            caracteres.push("ABCDEFGHIJKLMNOPQRSTUVWXYZ")
            console.log(`Caixa alta `)
        }
        if(lowEstado) {
            caracteres.push("abcdefghijklmnopqrstuvwxyz")
            console.log("caixa baixa")
        }

         if(tam < 8 ){
            alert("Senha deve ser maior ou igual a 8")
            return
        }else{
            const todos = caracteres.join("")
            for(let i = 0; i< tam;i++){
                arr.push(todos[Math.floor(Math.random() * todos.length)])
            }
        }

        setSenha(arr.join(""))

        passwordStrength()
        
    }


    return (
        <>
        <main>
            <LockIcon size={100} color="#038eff" strokeWidth={2} />
            <h1>Password Generator</h1>
            <p>Crie senhas fortes e seguras para suas contas</p>
            <form>
                <div className="form_group">
                    <div className="gerator"><input type="text" value={senha}  />  <RotateCcw className="icon" onClick={gerarSenha} /> </div>
                    <a><Copy strokeWidth={2} /> copy</a>
                </div>
                <p style={{ color: cor, fontSize: "18px" }}>{strength}</p>
                <div className="form_group password_size">
                    <p>Tamanho da senha:</p><input type="number" onChange={tamanho}/> 
                </div>
                <div className="form_group check">
                    <p>Maiusculas</p><input type="checkbox" onChange={handleCheckBox}  name="upper" id="upp" /> 
                </div>
                <div className="form_group check">
                    <p>Minusculas</p><input type="checkbox" onChange={handleCheckBox}  name="low" id="low" /> 
                </div>
                <div className="form_group check">
                    <p>Simbolos</p><input type="checkbox" onChange={handleCheckBox}  name="sym" id="sym" /> 
                </div>
                <div className="form_group check">
                    <p>Numeros</p><input type="checkbox" onChange={handleCheckBox}   name="num" id="num" /> 
                </div>
                
                
    
            </form>
        </main>
        </>
    )
}

export default Gerador