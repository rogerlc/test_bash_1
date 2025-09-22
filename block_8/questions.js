const questions = [
  {
    question: "What is an environment variable?",
    options: [
      "A dynamic named value stored in the system",
      "A compiled binary program",
      "A permanent configuration file",
      "A hardware driver"
    ],
    answers: ["A dynamic named value stored in the system"],
    type: "radio",
    translation: "¿Qué es una variable de entorno?",
    translations: [
      "Un valor dinámico nombrado almacenado en el sistema",
      "Un programa binario compilado",
      "Un archivo de configuración permanente",
      "Un controlador de hardware"
    ]
  },
  {
    question: "What do environment variables allow you to do?",
    options: [
      "Customize system behavior and applications",
      "Compile source code",
      "Replace the Linux kernel",
      "Install new hardware drivers"
    ],
    answers: ["Customize system behavior and applications"],
    type: "radio",
    translation: "¿Qué te permiten hacer las variables de entorno?",
    translations: [
      "Personalizar el comportamiento del sistema y de las aplicaciones",
      "Compilar código fuente",
      "Reemplazar el kernel de Linux",
      "Instalar nuevos controladores de hardware"
    ]
  },
  {
    question: "What is the correct format for declaring a variable?",
    options: [
      "KEY=value",
      "KEY = value",
      "value=KEY",
      "KEY:value"
    ],
    answers: ["KEY=value"],
    type: "radio",
    translation: "¿Cuál es el formato correcto para declarar una variable?",
    translations: ["KEY=value","KEY = value","value=KEY","KEY:value"]
  },
  {
    question: "Which of the following variable names is valid?",
    options: ["USER_NAME", "user name", "User-Name", "123USER"],
    answers: ["USER_NAME"],
    type: "radio",
    translation: "¿Cuál de los siguientes nombres de variable es válido?",
    translations: ["USER_NAME","user name","User-Name","123USER"]
  },
  {
    question: "Variable names in Linux are:",
    options: ["Case-sensitive", "Case-insensitive", "Always uppercase", "Always lowercase"],
    answers: ["Case-sensitive"],
    type: "radio",
    translation: "Los nombres de variables en Linux son:",
    translations: ["Sensible a mayúsculas/minúsculas","No distinguen mayúsculas/minúsculas","Siempre en mayúsculas","Siempre en minúsculas"]
  },
  {
    question: "By convention, environment variables should be written in:",
    options: ["UPPER_CASE with underscores", "camelCase", "lowercase only", "PascalCase"],
    answers: ["UPPER_CASE with underscores"],
    type: "radio",
    translation: "Por convención, las variables de entorno deben escribirse en:",
    translations: ["MAYÚSCULAS con guiones bajos","camelCase","solo minúsculas","PascalCase"]
  },
  {
    question: "When assigning multiple values to a variable, what separator should be used?",
    options: ["Colon (:)", "Comma (,)", "Space", "Semicolon (;)"],
    answers: ["Colon (:)"],
    type: "radio",
    translation: "Al asignar múltiples valores a una variable, ¿qué separador debe usarse?",
    translations: ["Dos puntos (:)","Coma (,)","Espacio","Punto y coma (;)"]
  },
  {
    question: "Which of the following are common environment variables?",
    options: ["USER", "HOME", "EDITOR", "PATH"],
    answers: ["USER","HOME","EDITOR","PATH"],
    type: "checkbox",
    translation: "¿Cuáles de las siguientes son variables de entorno comunes?",
    translations: ["USER","HOME","EDITOR","PATH"]
  },
  {
    question: "Which environment variable stores the current logged-in user?",
    options: ["USER", "HOME", "PATH", "LOGNAME"],
    answers: ["USER"],
    type: "radio",
    translation: "¿Qué variable de entorno almacena el usuario actual conectado?",
    translations: ["USER","HOME","PATH","LOGNAME"]
  },
  {
    question: "Which environment variable stores the home directory of the user?",
    options: ["HOME", "USER", "PATH", "SHELL"],
    answers: ["HOME"],
    type: "radio",
    translation: "¿Qué variable de entorno almacena el directorio home del usuario?",
    translations: ["HOME","USER","PATH","SHELL"]
  },
  {
    question: "Which variable stores the default text editor?",
    options: ["EDITOR", "SHELL", "LANG", "TERM"],
    answers: ["EDITOR"],
    type: "radio",
    translation: "¿Qué variable almacena el editor de texto predeterminado?",
    translations: ["EDITOR","SHELL","LANG","TERM"]
  },
  {
    question: "Which variable contains the path of the current user’s shell?",
    options: ["SHELL", "PATH", "TERM", "MAIL"],
    answers: ["SHELL"],
    type: "radio",
    translation: "¿Qué variable contiene la ruta del shell del usuario actual?",
    translations: ["SHELL","PATH","TERM","MAIL"]
  },
  {
    question: "Which variable contains a list of directories for command execution?",
    options: ["PATH", "HOME", "USER", "LOGNAME"],
    answers: ["PATH"],
    type: "radio",
    translation: "¿Qué variable contiene una lista de directorios para ejecutar comandos?",
    translations: ["PATH","HOME","USER","LOGNAME"]
  },
  {
    question: "Which variable stores the current locale settings?",
    options: ["LANG", "PATH", "TERM", "EDITOR"],
    answers: ["LANG"],
    type: "radio",
    translation: "¿Qué variable almacena la configuración regional actual?",
    translations: ["LANG","PATH","TERM","EDITOR"]
  },
  {
    question: "Which variable stores the current terminal emulation?",
    options: ["TERM", "SHELL", "LANG", "USER"],
    answers: ["TERM"],
    type: "radio",
    translation: "¿Qué variable almacena la emulación de terminal actual?",
    translations: ["TERM","SHELL","LANG","USER"]
  },
  {
    question: "Which variable stores the user’s mail location?",
    options: ["MAIL", "USER", "PATH", "LOGNAME"],
    answers: ["MAIL"],
    type: "radio",
    translation: "¿Qué variable almacena la ubicación del correo del usuario?",
    translations: ["MAIL","USER","PATH","LOGNAME"]
  },
  {
    question: "Which statement about environment variables is true?",
    options: [
      "They are available system-wide",
      "They only work in Bash",
      "They must be lowercase",
      "They cannot be used in scripts"
    ],
    answers: ["They are available system-wide"],
    type: "radio",
    translation: "¿Cuál afirmación sobre las variables de entorno es verdadera?",
    translations: [
      "Están disponibles en todo el sistema",
      "Solo funcionan en Bash",
      "Deben estar en minúsculas",
      "No se pueden usar en scripts"
    ]
  },
  {
    question: "Which statement about shell variables is true?",
    options: [
      "They apply only to the current shell instance",
      "They are inherited by all child processes",
      "They must always be uppercase",
      "They are stored in /etc/shells"
    ],
    answers: ["They apply only to the current shell instance"],
    type: "radio",
    translation: "¿Cuál afirmación sobre las variables de shell es verdadera?",
    translations: [
      "Se aplican solo a la instancia actual del shell",
      "Son heredadas por todos los procesos hijos",
      "Siempre deben estar en mayúsculas",
      "Se almacenan en /etc/shells"
    ]
  },
  {
    question: "Shell variables apply to:",
    options: [
      "Only the current shell session",
      "All users in the system",
      "All processes and subshells",
      "The Linux kernel"
    ],
    answers: ["Only the current shell session"],
    type: "radio",
    translation: "Las variables de shell se aplican a:",
    translations: [
      "Solo a la sesión actual del shell",
      "A todos los usuarios del sistema",
      "A todos los procesos y subshells",
      "Al kernel de Linux"
    ]
  },
  {
    question: "Environment variables are inherited by:",
    options: [
      "Child processes and subshells",
      "Only the parent process",
      "Kernel modules",
      "File systems"
    ],
    answers: ["Child processes and subshells"],
    type: "radio",
    translation: "Las variables de entorno son heredadas por:",
    translations: [
      "Procesos hijos y subshells",
      "Solo el proceso padre",
      "Módulos del kernel",
      "Sistemas de archivos"
    ]
  },
  {
    question: "Which of the following is NOT a good case for using shell scripts?",
    options: [
      "Automating backups",
      "Mission-critical applications",
      "Simple system tasks",
      "Data synchronization"
    ],
    answers: ["Mission-critical applications"],
    type: "radio",
    translation: "¿Cuál de los siguientes NO es un buen caso para usar scripts de shell?",
    translations: [
      "Automatizar respaldos",
      "Aplicaciones críticas para la empresa",
      "Tareas simples del sistema",
      "Sincronización de datos"
    ]
  },
  {
    question: "When should you NOT use shell scripts?",
    options: [
      "For resource-intensive tasks",
      "For graphics or GUIs",
      "When security is critical",
      "All of the above"
    ],
    answers: ["All of the above"],
    type: "radio",
    translation: "¿Cuándo NO deberías usar scripts de shell?",
    translations: [
      "Para tareas que consumen muchos recursos",
      "Para gráficos o interfaces gráficas",
      "Cuando la seguridad es crítica",
      "Todas las anteriores"
    ]
  },
  {
    question: "What problem arises when using shell scripts for proprietary, closed-source applications?",
    options: [
      "Source code is exposed",
      "They run too fast",
      "They cannot be executed",
      "They consume no resources"
    ],
    answers: ["Source code is exposed"],
    type: "radio",
    translation: "¿Qué problema surge al usar scripts de shell para aplicaciones propietarias o cerradas?",
    translations: [
      "El código fuente queda expuesto",
      "Se ejecutan demasiado rápido",
      "No se pueden ejecutar",
      "No consumen recursos"
    ]
  },
  {
    question: "Which variable stores the login name of the current user?",
    options: ["LOGNAME", "USER", "EDITOR", "MAIL"],
    answers: ["LOGNAME"],
    type: "radio",
    translation: "¿Qué variable almacena el nombre de inicio de sesión del usuario actual?",
    translations: ["LOGNAME","USER","EDITOR","MAIL"]
  },
  {
    question: "What is the difference between environment variables and shell variables?",
    options: [
      "Environment variables are system-wide, shell variables are session-specific",
      "They are exactly the same",
      "Shell variables are inherited by all processes",
      "Environment variables apply only to the current shell"
    ],
    answers: ["Environment variables are system-wide, shell variables are session-specific"],
    type: "radio",
    translation: "¿Cuál es la diferencia entre variables de entorno y variables de shell?",
    translations: [
      "Las variables de entorno son de todo el sistema, las de shell son específicas de la sesión",
      "Son exactamente lo mismo",
      "Las variables de shell son heredadas por todos los procesos",
      "Las variables de entorno aplican solo al shell actual"
    ]
  }
];
