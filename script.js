const form = document.querySelector("form")
const nlwSetup = new NLWSetup(form)
const button = document.querySelector("header button")

button.addEventListener("click", add)

function add() {
  const today = new Date().toLocaleDateString("pt-br").slice(0, -5)
  const dayExists = nlwSetup.dayExists(today)

  if (dayExists) {
    alert("Dia já incluso")
    return
  }

  alert("Adicionado com sucesso📌")
  nlwSetup.addDay(today)
}

// const data = {
//   run: ["01-01", "01-02", "01-03", "01-06", "01-07", "01-08", "01-06"],
//   takePills: ["01-03"],
//   journal: ["01-02", "01-12"],
// }

// nlwSetup.setData(data)

// nlwSetup.load()
