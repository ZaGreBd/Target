function reverter(string){
  let teste = ""
  for (let i = string.length; i > 0; i--) {
    teste += string[i-1]
  }
  console.log(teste)
}

const string1 = "Teste"
const string2 = "Testando novamente"

reverter(string1)
reverter(string2)