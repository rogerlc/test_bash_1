const questions = [
  {
    question: "What is the main task of the UNIX shell?",
    options: [
      "Interprets user commands",
      "Compiles programs",
      "Manages network connections",
      "Formats disks"
    ],
    answers: ["Interprets user commands"],
    type: "radio",
    translation: "¿Cuál es la tarea principal del shell de UNIX?",
    translations: ["Interpreta los comandos del usuario","Compila programas","Administra conexiones de red","Formatea discos"]
  },
  {
    question: "Shell scripts are:",
    options: ["Compiled", "Interpreted", "Encrypted", "Binary files"],
    answers: ["Interpreted"],
    type: "radio",
    translation: "Los scripts de shell son:",
    translations: ["Compilados","Interpretados","Encriptados","Archivos binarios"]
  },
  {
    question: "Which file lists the known shells on a Linux system?",
    options: ["/etc/shells", "~/.bashrc", "/etc/passwd", "/etc/profile"],
    answers: ["/etc/shells"],
    type: "radio",
    translation: "¿Qué archivo lista los shells conocidos en un sistema Linux?",
    translations: ["/etc/shells","~/.bashrc","/etc/passwd","/etc/profile"]
  },
  {
    question: "Which command switches to another shell in an active terminal?",
    options: ["switch", "change", "localhost:~> tcsh", "bash --switch"],
    answers: ["localhost:~> tcsh"],
    type: "radio",
    translation: "¿Qué comando permite cambiar a otro shell en un terminal activo?",
    translations: ["switch","change","localhost:~> tcsh","bash --switch"]
  },
  {
    question: "Which shells are considered superset shells of the Bourne shell (sh)?",
    options: ["bash", "ksh", "csh", "tcsh"],
    answers: ["bash","ksh"],
    type: "checkbox",
    translation: "¿Qué shells se consideran superset del Bourne shell (sh)?",
    translations: ["bash","ksh","csh","tcsh"]
  },
  {
    question: "Which shell resembles the C programming language syntax?",
    options: ["sh", "csh", "bash", "ksh"],
    answers: ["csh"],
    type: "radio",
    translation: "¿Qué shell se parece a la sintaxis del lenguaje de programación C?",
    translations: ["sh","csh","bash","ksh"]
  },
  {
    question: "Which shells support auto-completion of commands or paths?",
    options: ["bash", "sh", "zsh", "csh"],
    answers: ["bash","zsh"],
    type: "checkbox",
    translation: "¿Qué shells soportan auto-completado de comandos o rutas?",
    translations: ["bash","sh","zsh","csh"]
  },
  {
    question: "Which startup file is read by Bash for interactive login shells?",
    options: ["/etc/profile","~/.bash_profile","~/.bashrc","~/.bash_logout"],
    answers: ["/etc/profile","~/.bash_profile"],
    type: "checkbox",
    translation: "¿Qué archivos de inicio lee Bash en un shell interactivo de login?",
    translations: ["/etc/profile","~/.bash_profile","~/.bashrc","~/.bash_logout"]
  },
  {
    question: "Which startup file is read by Bash for interactive non-login shells?",
    options: ["~/.bashrc","~/.bash_profile","/etc/profile","~/.bash_logout"],
    answers: ["~/.bashrc"],
    type: "radio",
    translation: "¿Qué archivo de inicio lee Bash en un shell interactivo no-login?",
    translations: ["~/.bashrc","~/.bash_profile","/etc/profile","~/.bash_logout"]
  }
];
