function cargarPreguntas() {
  const quizDiv = document.getElementById("quiz");
  quizDiv.innerHTML = "";
  questions.forEach((q, index) => {
    const questionDiv = document.createElement("div");
    questionDiv.className = "question";
    questionDiv.innerHTML = `<p><b>${index + 1}. ${q.question}</b></p>`;
    q.options.forEach(option => {
      const optionId = `q${index}_${option}`;
      questionDiv.innerHTML += `
        <label>
          <input type="checkbox" name="q${index}" value="${option}" id="${optionId}">
          ${option}
        </label><br>`;
    });
    quizDiv.appendChild(questionDiv);
  });
}

function calificar() {
  let correctas = 0;
  questions.forEach((q, index) => {
    const seleccionadas = Array.from(document.querySelectorAll(`input[name="q${index}"]:checked`)).map(e => e.value);
    if (JSON.stringify(seleccionadas.sort()) === JSON.stringify(q.answer.sort())) {
      correctas++;
    }
  });
  document.getElementById("resultado").innerText = `Respuestas correctas: ${correctas} de ${questions.length}`;
}

function mostrarExplicaciones() {
  const expDiv = document.getElementById("explicaciones");
  expDiv.innerHTML = "<h2>Explicaciones</h2>";
  questions.forEach((q, index) => {
    expDiv.innerHTML += `<p><b>${index + 1}. ${q.question}</b><br>✔ Respuesta correcta: ${q.answer.join(", ")}<br>📘 ${q.explanation}</p>`;
  });
}

function reiniciar() {
  cargarPreguntas();
  document.getElementById("resultado").innerText = "";
  document.getElementById("explicaciones").innerHTML = "";
}

window.onload = cargarPreguntas;
