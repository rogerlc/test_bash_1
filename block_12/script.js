const container = document.getElementById('exam-container');
const resultDiv = document.getElementById('result');

function speak(text, lang='en-US') {
    const utter = new SpeechSynthesisUtterance(text);
    utter.lang = lang;
    window.speechSynthesis.speak(utter);
}

function renderQuestions(questions) {
    container.innerHTML = '';
    questions.forEach((q, idx) => {
        const questionDiv = document.createElement('div');
        questionDiv.className = 'question';
        questionDiv.dataset.index = idx;

        const title = document.createElement('h2');
        title.textContent = `${idx + 1}. ${q.question}`;

        // Botones de la pregunta
        const qButtons = document.createElement('div');
        qButtons.className = 'question-buttons';
        const readBtn = document.createElement('button');
        readBtn.textContent = 'Read';
        readBtn.className = 'read-btn';
        readBtn.onclick = () => speak(q.question);

        const translateBtn = document.createElement('button');
        translateBtn.textContent = 'Traducir';
        translateBtn.className = 'translate-btn';
        translateBtn.onclick = () => speak(q.translation, 'es-ES');

        const pronBtn = document.createElement('button');
        pronBtn.textContent = 'Pronounce';
        pronBtn.className = 'pronounce-btn';
        pronBtn.onclick = () => listenAndCheck(q.question);

        qButtons.appendChild(readBtn);
        qButtons.appendChild(translateBtn);
        qButtons.appendChild(pronBtn);

        questionDiv.appendChild(title);
        questionDiv.appendChild(qButtons);

        const optionsDiv = document.createElement('div');
        optionsDiv.className = 'options';

        q.options.forEach((opt, i) => {
            const label = document.createElement('label');

            const left = document.createElement('div');
            left.className = 'option-left';

            const input = document.createElement('input');
            input.type = q.type;
            input.name = `q${idx}`;
            input.value = opt;
            input.id = `q${idx}_opt${i}`;

            const textNode = document.createTextNode(opt);
            left.appendChild(input);
            left.appendChild(textNode);

            const optButtons = document.createElement('div');
            optButtons.className = 'option-buttons';

            const readOptBtn = document.createElement('button');
            readOptBtn.textContent = 'Read';
            readOptBtn.className = 'read-btn';
            readOptBtn.onclick = () => speak(opt);

            const translateOptBtn = document.createElement('button');
            translateOptBtn.textContent = 'Traducir';
            translateOptBtn.className = 'translate-btn';
            translateOptBtn.onclick = () => {
                const trans = q.translations && q.translations[i] ? q.translations[i] : opt;
                speak(trans, 'es-ES');
            };

            const pronOptBtn = document.createElement('button');
            pronOptBtn.textContent = 'Pronounce';
            pronOptBtn.className = 'pronounce-btn';
            pronOptBtn.onclick = () => listenAndCheck(opt);

            optButtons.appendChild(readOptBtn);
            optButtons.appendChild(translateOptBtn);
            optButtons.appendChild(pronOptBtn);

            label.appendChild(left);
            label.appendChild(optButtons);

            optionsDiv.appendChild(label);
        });

        questionDiv.appendChild(optionsDiv);
        container.appendChild(questionDiv);
    });
}

function grade() {
    let correctCount = 0;
    questions.forEach((q, idx) => {
        const questionDiv = document.querySelector(`.question[data-index="${idx}"]`);
        const inputs = questionDiv.querySelectorAll('input');
        const correctAnswers = q.answers;
        let userAnswers = [];
        inputs.forEach(input => {
            if (input.checked) userAnswers.push(input.value);
            input.parentElement.classList.remove('correct','incorrect');
        });

        let isCorrect = false;
        if(q.type==='radio') isCorrect = userAnswers[0]===correctAnswers[0];
        else isCorrect = correctAnswers.length===userAnswers.length && correctAnswers.every(a=>userAnswers.includes(a));

        inputs.forEach(input=>{
            if(correctAnswers.includes(input.value)) input.parentElement.classList.add('correct');
            else if(input.checked && !correctAnswers.includes(input.value)) input.parentElement.classList.add('incorrect');
        });

        if(isCorrect) correctCount++;
    });

    resultDiv.textContent = `You got ${correctCount} out of ${questions.length} correct.`;
}

function reviewIncorrect() {
    const reviewWindow = window.open("", "_blank", "width=800,height=600,scrollbars=yes");
    reviewWindow.document.write('<h2>Incorrect Questions</h2>');
    reviewWindow.document.write(`<style>
        body{font-family:Arial,sans-serif;padding:10px;}
        .question{font-weight:bold;color:#1e3a8a;margin-bottom:5px;}
        .answer{display:block;background-color:#c8e6c9;padding:5px 10px;border-radius:5px;margin-bottom:3px;}
    </style>`);

    questions.forEach((q, idx)=>{
        const questionDiv=document.querySelector(`.question[data-index="${idx}"]`);
        const inputs=questionDiv.querySelectorAll('input');
        let userAnswers=[];
        inputs.forEach(input=>{if(input.checked) userAnswers.push(input.value);});
        let isCorrect=false;
        if(q.type==='radio') isCorrect=userAnswers[0]===q.answers[0];
        else isCorrect=q.answers.length===userAnswers.length && q.answers.every(a=>userAnswers.includes(a));
        if(!isCorrect){
            reviewWindow.document.write(`<div class="question-block">
                <div class="question">${idx+1}. ${q.question}</div>
                ${q.answers.map(a=>`<div class="answer">${a}</div>`).join('')}
            </div>`);
        }
    });
}

function listenAndCheck(text){
    if(!('webkitSpeechRecognition' in window)){alert('Speech recognition not supported'); return;}
    const recognition = new webkitSpeechRecognition();
    recognition.lang='en-US';
    recognition.interimResults=false;
    recognition.maxAlternatives=1;
    recognition.start();

    recognition.onresult=function(event){
        const spoken = event.results[0][0].transcript.trim();
        const originalWords=text.split(/\s+/);
        const spokenWords=spoken.split(/\s+/);
        let highlighted=spokenWords.map((w,i)=>{
            if(originalWords[i] && w.toLowerCase()===originalWords[i].toLowerCase()) return w;
            else return `<span style="color:red;">${w}</span>`;
        }).join(' ');
        const pronWindow=window.open("","_blank","width=600,height=300,scrollbars=yes");
        pronWindow.document.write('<h2>Pronunciation Result</h2>');
        pronWindow.document.write('<p><strong>Original:</strong> '+text+'</p>');
        pronWindow.document.write('<p><strong>You said:</strong> '+highlighted+'</p>');
    };
}

function restart(){ renderQuestions(questions); resultDiv.textContent=''; }

renderQuestions(questions);
document.getElementById('grade-btn').addEventListener('click',grade);
document.getElementById('review-btn').addEventListener('click',reviewIncorrect);
document.getElementById('restart-btn').addEventListener('click',restart);
