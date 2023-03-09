class Consultas{
  constructor(number) {
    this.number = number;
  }

  verify(){
    this.result = fib.indexOf(this.number)
    if(this.result<=0){
      console.log(`O número ${this.number} não pertence a sequência`)
    }else{
      if(this.number === 1){
        console.log(`O número ${this.number} está presente na sequência de Fibonacci duas vezes, na 2° e na 3° posição`)
      }else{
        console.log(`O número ${this.number} é o ${this.result}° número da sequência de Fibonacci, e portanto está presente na mesma`)
      }
    }
  }
}

fib = []
for(let indice = 0; indice < 100; indice++){
  if(indice === 0){
    fib[indice] = 0
  }else if(indice === 1){
    fib[indice] = 1
  }else{
    fib[indice] = fib[indice-1] + fib[indice-2]
  }
}

const consulta1 = new Consultas(5)
const consulta2 = new Consultas(8)
const consulta3 = new Consultas(1)

consulta1.verify()
consulta2.verify()
consulta3.verify()