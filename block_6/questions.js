const questions = [
  // Bloque 6 - Pregunta 1
  {
    question: "What is a Boot Loader?",
    options: [
      "A program that loads the operating system kernel",
      "A tool to manage disk quotas",
      "A type of swap space",
      "A filesystem checker"
    ],
    answers: ["A program that loads the operating system kernel"],
    type: "radio",
    translation: "Qué es un Boot Loader?",
    translations: [
      "Un programa que carga el núcleo del sistema operativo",
      "Una herramienta para gestionar cuotas de disco",
      "Un tipo de espacio de intercambio (swap)",
      "Un verificador de sistemas de archivos"
    ]
  },
  // Bloque 6 - Pregunta 2
  {
    question: "Disk quotas alert a system administrator when:",
    options: [
      "A user consumes too much disk space",
      "A user creates too many files",
      "The CPU usage is too high",
      "The RAM is almost full"
    ],
    answers: ["A user consumes too much disk space","A user creates too many files"],
    type: "checkbox",
    translation: "Las cuotas de disco alertan al administrador del sistema cuando:",
    translations: [
      "Un usuario consume demasiado espacio en disco",
      "Un usuario crea demasiados archivos",
      "El uso de CPU es demasiado alto",
      "La RAM está casi llena"
    ]
  },
  // Bloque 6 - Pregunta 3
  {
    question: "Disk quotas can be configured for which of the following?",
    options: [
      "Individual users",
      "User groups",
      "Only system administrators",
      "Only root directories"
    ],
    answers: ["Individual users","User groups"],
    type: "checkbox",
    translation: "Las cuotas de disco pueden configurarse para cuál de lo siguiente?",
    translations: [
      "Usuarios individuales",
      "Grupos de usuarios",
      "Solo administradores del sistema",
      "Solo directorios root"
    ]
  },
  // Bloque 6 - Pregunta 4
  {
    question: "Why is controlling inodes important in disk quotas?",
    options: [
      "It limits the number of files a user can create",
      "It increases RAM speed",
      "It prevents system crashes",
      "It limits disk block consumption"
    ],
    answers: ["It limits the number of files a user can create"],
    type: "radio",
    translation: "Por qué es importante controlar los inodos en las cuotas de disco?",
    translations: [
      "Limita el número de archivos que un usuario puede crear",
      "Aumenta la velocidad de la RAM",
      "Previene fallos del sistema",
      "Limita el consumo de bloques de disco"
    ]
  },
  // Bloque 6 - Pregunta 5
  {
    question: "Disk quotas help to manage user-specific files separately from project files. True or False?",
    options: ["True", "False"],
    answers: ["True"],
    type: "radio",
    translation: "Las cuotas de disco ayudan a gestionar archivos específicos de usuarios por separado de los archivos de proyectos. Verdadero o Falso?",
    translations: ["Verdadero", "Falso"]
  },
  // Bloque 6 - Pregunta 6
  {
    question: "What are disk quotas used for?",
    options: [
      "Restricting disk space usage",
      "Increasing RAM",
      "Monitoring CPU",
      "Formatting partitions"
    ],
    answers: ["Restricting disk space usage"],
    type: "radio",
    translation: "Para qué se usan las cuotas de disco?",
    translations: [
      "Restringir el uso de espacio en disco",
      "Aumentar la RAM",
      "Monitorear CPU",
      "Formatear particiones"
    ]
  },
  // Bloque 6 - Pregunta 7
  {
    question: "Quotas can control the number of:",
    options: [
      "Disk blocks",
      "Files",
      "Users",
      "Processes"
    ],
    answers: ["Disk blocks","Files"],
    type: "checkbox",
    translation: "Las cuotas pueden controlar el número de:",
    translations: ["Bloques de disco","Archivos","Usuarios","Procesos"]
  },
  // Bloque 6 - Pregunta 8
  {
    question: "Disk quotas can be applied to:",
    options: [
      "Individual users",
      "Groups of users",
      "Entire file systems",
      "Only root user"
    ],
    answers: ["Individual users","Groups of users"],
    type: "checkbox",
    translation: "Las cuotas de disco pueden aplicarse a:",
    translations: ["Usuarios individuales","Grupos de usuarios","Sistemas de archivos completos","Solo al usuario root"]
  },
  // Bloque 6 - Pregunta 9
  {
    question: "What happens if a user exceeds their disk quota?",
    options: [
      "The system alerts the administrator",
      "Files cannot be created",
      "RAM is cleared",
      "The system reboots"
    ],
    answers: ["The system alerts the administrator","Files cannot be created"],
    type: "checkbox",
    translation: "Qué sucede si un usuario excede su cuota de disco?",
    translations: ["El sistema alerta al administrador","No se pueden crear archivos","Se libera la RAM","El sistema se reinicia"]
  },
  // Bloque 6 - Pregunta 10
  {
    question: "Inodes are important because they:",
    options: [
      "Contain file-related information",
      "Store swap data",
      "Control CPU usage",
      "Limit boot loaders"
    ],
    answers: ["Contain file-related information"],
    type: "radio",
    translation: "Los inodos son importantes porque:",
    translations: [
      "Contienen información relacionada con archivos",
      "Almacenan datos de swap",
      "Controlan el uso de CPU",
      "Limitan los boot loaders"
    ]
  }
];
