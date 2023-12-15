class personagem{
    constructor (nome, idade, tipo){
        this.nome = nome
        this.idade = idade
        this.tipo = tipo
    }
     atacar (tipo){
        let mensagem = ""
        let ataque = ""
        if (this.tipo == "mago"){
            ataque = "magia"
        mensagem = "O " + this.tipo + " atacou usando "  + ataque
        
        }
        else if (this.tipo == "guerreiro"){         
            ataque = "espada"
            mensagem = "O " + this.tipo + " atacou usando "+ ataque
        }

        else if (this.tipo == "monge"){
            ataque = "artes marciais"
            mensagem = "O " + this.tipo + " atacou usando " + ataque
        }

        else { 
            ataque = "shuriken"
            mensagem = "O " + this.tipo + " atacou usando " + ataque
        }
        return mensagem
    }
        

     }
          
    


const mago = new personagem ("Muçarelo", 25, "monge")
const mensagemmago = mago.atacar()
console.log (mensagemmago)



