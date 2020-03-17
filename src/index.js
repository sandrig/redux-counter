import './styles.css'

const counter = document.getElementById('counter')

let state = 0

function render() {
  counter.textContent = state.toString()
}

render()
