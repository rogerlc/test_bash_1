const questions = [
  // ==== FIND (3 preguntas) ====
  {
    question: "Which command do you use to search for a file named 'hosts' anywhere in the filesystem?",
    options: [
      "$ find / -name hosts",
      "$ locate hosts",
      "$ grep 'hosts' /etc/passwd",
      "$ tar -tf hosts"
    ],
    answers: ["$ find / -name hosts"],
    type: "radio",
    translation: "¿Qué comando usas para buscar un archivo llamado 'hosts' en todo el sistema de archivos?",
    translations: [
      "$ find / -name hosts",
      "$ locate hosts",
      "$ grep 'hosts' /etc/passwd",
      "$ tar -tf hosts"
    ]
  },
  {
    question: "Which command searches for all files owned by user 'user' in /home?",
    options: [
      "$ find /home -user user",
      "$ locate /home user",
      "$ grep -r 'user' /home",
      "$ find / -name user"
    ],
    answers: ["$ find /home -user user"],
    type: "radio",
    translation: "¿Qué comando busca todos los archivos pertenecientes al usuario 'user' en /home?",
    translations: [
      "$ find /home -user user",
      "$ locate /home user",
      "$ grep -r 'user' /home",
      "$ find / -name user"
    ]
  },
  {
    question: "Which command deletes all files named 'core' in /tmp using find?",
    options: [
      "$ find /tmp -name core -type f -exec rm {} \\;",
      "$ locate core | xargs rm",
      "$ grep 'core' /tmp | rm",
      "$ find /tmp -name core -print"
    ],
    answers: ["$ find /tmp -name core -type f -exec rm {} \\;"],
    type: "radio",
    translation: "¿Qué comando elimina todos los archivos llamados 'core' en /tmp usando find?",
    translations: [
      "$ find /tmp -name core -type f -exec rm {} \\;",
      "$ locate core | xargs rm",
      "$ grep 'core' /tmp | rm",
      "$ find /tmp -name core -print"
    ]
  },

  // ==== LOCATE (3 preguntas) ====
  {
    question: "Which command quickly finds a file named 'passwd' using the database?",
    options: [
      "$ locate passwd",
      "$ find / -name passwd",
      "$ grep 'passwd' /etc",
      "$ tar -tf passwd"
    ],
    answers: ["$ locate passwd"],
    type: "radio",
    translation: "¿Qué comando encuentra rápidamente un archivo llamado 'passwd' usando la base de datos?",
    translations: [
      "$ locate passwd",
      "$ find / -name passwd",
      "$ grep 'passwd' /etc",
      "$ tar -tf passwd"
    ]
  },
  {
    question: "Which command should you run to update the locate database before searching?",
    options: [
      "$ sudo updatedb",
      "$ locate -u",
      "$ find / -update",
      "$ grep -update /etc"
    ],
    answers: ["$ sudo updatedb"],
    type: "radio",
    translation: "¿Qué comando debes ejecutar para actualizar la base de datos de locate antes de buscar?",
    translations: [
      "$ sudo updatedb",
      "$ locate -u",
      "$ find / -update",
      "$ grep -update /etc"
    ]
  },
  {
    question: "Which command shows all locations of files named 'mlocate.db'?",
    options: [
      "$ locate mlocate.db",
      "$ find / -name mlocate.db",
      "$ grep 'mlocate.db' /var/lib",
      "$ tar -tf mlocate.db"
    ],
    answers: ["$ locate mlocate.db"],
    type: "radio",
    translation: "¿Qué comando muestra todas las ubicaciones de archivos llamados 'mlocate.db'?",
    translations: [
      "$ locate mlocate.db",
      "$ find / -name mlocate.db",
      "$ grep 'mlocate.db' /var/lib",
      "$ tar -tf mlocate.db"
    ]
  },

  // ==== GREP (3 preguntas) ====
  {
    question: "Which command searches recursively for the word 'fun' in your HOME directory?",
    options: [
      "$ grep -r 'fun' ~",
      "$ find ~ -name 'fun'",
      "$ locate fun",
      "$ grep 'fun' /etc/passwd"
    ],
    answers: ["$ grep -r 'fun' ~"],
    type: "radio",
    translation: "¿Qué comando busca recursivamente la palabra 'fun' en tu directorio HOME?",
    translations: [
      "$ grep -r 'fun' ~",
      "$ find ~ -name 'fun'",
      "$ locate fun",
      "$ grep 'fun' /etc/passwd"
    ]
  },
  {
    question: "Which command searches for the word 'root' inside /etc/passwd?",
    options: [
      "$ grep 'root' /etc/passwd",
      "$ locate root /etc/passwd",
      "$ find /etc -name root",
      "$ grep -r 'root' ~"
    ],
    answers: ["$ grep 'root' /etc/passwd"],
    type: "radio",
    translation: "¿Qué comando busca la palabra 'root' dentro de /etc/passwd?",
    translations: [
      "$ grep 'root' /etc/passwd",
      "$ locate root /etc/passwd",
      "$ find /etc -name root",
      "$ grep -r 'root' ~"
    ]
  },
  {
    question: "Which command finds all lines starting with 'server' in /etc/nginx/nginx.conf?",
    options: [
      "$ grep '^server' /etc/nginx/nginx.conf",
      "$ grep 'server' /etc/nginx/nginx.conf",
      "$ locate server /etc/nginx",
      "$ find /etc/nginx -name server"
    ],
    answers: ["$ grep '^server' /etc/nginx/nginx.conf"],
    type: "radio",
    translation: "¿Qué comando encuentra todas las líneas que comienzan con 'server' en /etc/nginx/nginx.conf?",
    translations: [
      "$ grep '^server' /etc/nginx/nginx.conf",
      "$ grep 'server' /etc/nginx/nginx.conf",
      "$ locate server /etc/nginx",
      "$ find /etc/nginx -name server"
    ]
  },

  // ==== Significados y conceptos (10 preguntas) ====
  {
    question: "What does the 'find / -name hosts' command do?",
    options: [
      "Searches the entire filesystem for files named 'hosts'",
      "Deletes all hosts files",
      "Lists all directories only",
      "Updates the locate database"
    ],
    answers: ["Searches the entire filesystem for files named 'hosts'"],
    type: "radio",
    translation: "¿Qué hace el comando 'find / -name hosts'?",
    translations: [
      "Busca en todo el sistema archivos llamados 'hosts'",
      "Elimina todos los archivos hosts",
      "Lista solo directorios",
      "Actualiza la base de datos de locate"
    ]
  },
  {
    question: "Which command finds files owned by user 'user' in /home?",
    options: [
      "$ find /home -name user",
      "$ find /home -user user",
      "$ locate /home user",
      "$ grep user /home"
    ],
    answers: ["$ find /home -user user"],
    type: "radio",
    translation: "¿Qué comando encuentra archivos pertenecientes al usuario 'user' en /home?",
    translations: [
      "$ find /home -name user",
      "$ find /home -user user",
      "$ locate /home user",
      "$ grep user /home"
    ]
  },
  {
    question: "Which of the following commands removes files named 'core' in /tmp?",
    options: [
      "$ find /tmp -name core -type f -exec rm {} \\;",
      "$ find /tmp -name core -type f -print | xargs /bin/rm",
      "$ locate core | rm",
      "$ grep core /tmp | rm"
    ],
    answers: [
      "$ find /tmp -name core -type f -exec rm {} \\;",
      "$ find /tmp -name core -type f -print | xargs /bin/rm"
    ],
    type: "checkbox",
    translation: "¿Cuál de los siguientes comandos elimina archivos llamados 'core' en /tmp?",
    translations: [
      "$ find /tmp -name core -type f -exec rm {} \\;",
      "$ find /tmp -name core -type f -print | xargs /bin/rm",
      "$ locate core | rm",
      "$ grep core /tmp | rm"
    ]
  },
  {
    question: "What is the main difference between find and locate?",
    options: [
      "find searches in real time, locate uses a database",
      "find is faster than locate",
      "locate deletes files, find lists files",
      "find only searches directories"
    ],
    answers: ["find searches in real time, locate uses a database"],
    type: "radio",
    translation: "¿Cuál es la principal diferencia entre find y locate?",
    translations: [
      "find busca en tiempo real, locate usa una base de datos",
      "find es más rápido que locate",
      "locate elimina archivos, find lista archivos",
      "find solo busca directorios"
    ]
  },
  {
    question: "How do you update the locate database?",
    options: [
      "$ sudo updatedb",
      "$ locate -u",
      "$ find / -update",
      "$ grep -update /etc"
    ],
    answers: ["$ sudo updatedb"],
    type: "radio",
    translation: "¿Cómo actualizas la base de datos de locate?",
    translations: [
      "$ sudo updatedb",
      "$ locate -u",
      "$ find / -update",
      "$ grep -update /etc"
    ]
  },
  {
    question: "What does 'grep -r \"fun\" ~' do?",
    options: [
      "Recursively searches for the word 'fun' in the HOME directory",
      "Deletes all files containing 'fun'",
      "Lists all files named 'fun'",
      "Updates grep database"
    ],
    answers: ["Recursively searches for the word 'fun' in the HOME directory"],
    type: "radio",
    translation: "¿Qué hace 'grep -r \"fun\" ~'?",
    translations: [
      "Busca recursivamente la palabra 'fun' en el directorio HOME",
      "Elimina todos los archivos que contienen 'fun'",
      "Lista todos los archivos llamados 'fun'",
      "Actualiza la base de datos de grep"
    ]
  },
  {
    question: "Which command shows all lines starting with 'server' in a file?",
    options: [
      "$ grep 'server' file.txt",
      "$ grep '^server' /etc/nginx/nginx.conf",
      "$ locate server",
      "$ find /etc -name server"
    ],
    answers: ["$ grep '^server' /etc/nginx/nginx.conf"],
    type: "radio",
    translation: "¿Qué comando muestra todas las líneas que comienzan con 'server' en un archivo?",
    translations: [
      "$ grep 'server' file.txt",
      "$ grep '^server' /etc/nginx/nginx.conf",
      "$ locate server",
      "$ find /etc -name server"
    ]
  },
  {
    question: "Which command uses a database to find files quickly?",
    options: ["find", "locate", "grep", "rm"],
    answers: ["locate"],
    type: "radio",
    translation: "¿Qué comando usa una base de datos para encontrar archivos rápidamente?",
    translations: ["find", "locate", "grep", "rm"]
  },
  {
    question: "Which command searches inside files for matching patterns?",
    options: ["find", "locate", "grep", "tar"],
    answers: ["grep"],
    type: "radio",
    translation: "¿Qué comando busca dentro de los archivos patrones que coincidan?",
    translations: ["find", "locate", "grep", "tar"]
  },
  {
    question: "What is a key advantage of using find over locate?",
    options: [
      "It finds newly created files immediately",
      "It is always faster than locate",
      "It uses a database for speed",
      "It deletes files automatically"
    ],
    answers: ["It finds newly created files immediately"],
    type: "radio",
    translation: "¿Cuál es una ventaja clave de usar find sobre locate?",
    translations: [
      "Encuentra archivos recién creados inmediatamente",
      "Siempre es más rápido que locate",
      "Usa una base de datos para velocidad",
      "Elimina archivos automáticamente"
    ]
  }
];

// Aleatoriza las preguntas
questions.sort(() => Math.random() - 0.5);
