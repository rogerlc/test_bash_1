const questions = [
  {
    question: "This file is invoked as interactive non-login shell",
    options: [".bash_profile",".bashrc",".bash_history",".bash_logout"],
    answers: [".bashrc"],
    type: "radio",
    translation: "Este archivo se invoca como shell interactivo no-login",
    translations: [".bash_profile",".bashrc",".bash_history",".bash_logout"]
  },
  {
    question: "Select answers where environments are defined properly",
    options: ["KEY=value1","KEY2 = value2","KEY 3=\"value3\"","KEY_4=value4:value4_1","KEY5=value 5","_KEY6=\"value 6\""],
    answers: ["KEY=value1","KEY_4=value4:value4_1","_KEY6=\"value 6\""],
    type: "checkbox",
    translation: "Selecciona las respuestas donde las variables de entorno están definidas correctamente",
    translations: ["KEY=value1","KEY2 = value2","KEY 3=\"value3\"","KEY_4=value4:value4_1","KEY5=value 5","_KEY6=\"value 6\""]
  },
  {
    question: "This env var contains a list of directories to be searched when user executing commands",
    options: ["INSTALL","DIRS","PATH","SHELLPATH","SYSTEM"],
    answers: ["PATH"],
    type: "radio",
    translation: "Esta variable de entorno contiene una lista de directorios para buscar cuando el usuario ejecuta comandos",
    translations: ["INSTALL","DIRS","PATH","SHELLPATH","SYSTEM"]
  },
  {
    question: "This command is used to change current directory to user home dir",
    options: ["cd /","cd ..","cd ~","cd -"],
    answers: ["cd ~"],
    type: "radio",
    translation: "Este comando se usa para cambiar al directorio home del usuario",
    translations: ["cd /","cd ..","cd ~","cd -"]
  },
  {
    question: "Command to list files in directory",
    options: ["cat","man","ls"],
    answers: ["ls"],
    type: "radio",
    translation: "Comando para listar archivos en un directorio",
    translations: ["cat","man","ls"]
  },
  {
    question: "Using this command with -f key you could track live events in a log file",
    options: ["head","less","more","tail"],
    answers: ["tail"],
    type: "radio",
    translation: "Usando este comando con la opción -f puedes seguir eventos en vivo en un archivo de log",
    translations: ["head","less","more","tail"]
  },
  {
    question: "What command is used to exit vi/vim without saving changes?",
    options: [":wq",":q!",":q",":!wq"],
    answers: [":q!"],
    type: "radio",
    translation: "Qué comando se usa para salir de vi/vim sin guardar cambios",
    translations: [":wq",":q!",":q",":!wq"]
  },
  {
    question: "Which commands allow you to find files that contain the word 'ping' in the current directory?",
    options: ["find . -n ping -type f","grep -r ping .","grep -r ping","find -name ping -t f"],
    answers: ["grep -r ping .","grep -r ping"],
    type: "checkbox",
    translation: "Qué comandos permiten encontrar archivos que contienen la palabra 'ping' en el directorio actual",
    translations: ["find . -n ping -type f","grep -r ping .","grep -r ping","find -name ping -t f"]
  },
  {
    question: "Which command you need to execute in order to safely editing /etc/sudoers file?",
    options: ["vi","nano","vim","visudo"],
    answers: ["visudo"],
    type: "radio",
    translation: "Qué comando necesitas ejecutar para editar de forma segura el archivo /etc/sudoers",
    translations: ["vi","nano","vim","visudo"]
  },
  {
    question: "What is true about xargs utility?",
    options: ["Can convert lines into single line","Can convert single line into multiple lines","Can substitute an argument in a command only once","Can run only one command at a time"],
    answers: ["Can convert lines into single line","Can convert single line into multiple lines"],
    type: "checkbox",
    translation: "Qué es verdadero sobre la utilidad xargs",
    translations: ["Can convert lines into single line","Can convert single line into multiple lines","Can substitute an argument in a command only once","Can run only one command at a time"]
  },
  {
    question: "Select commands that will create an archive",
    options: ["tar -cvf file.tar path/to/","tar -xvf file.tar","tar -tf file.tar","tar -cvzf file.tar.gz path/to/"],
    answers: ["tar -cvf file.tar path/to/","tar -cvzf file.tar.gz path/to/"],
    type: "checkbox",
    translation: "Selecciona los comandos que crearán un archivo comprimido",
    translations: ["tar -cvf file.tar path/to/","tar -xvf file.tar","tar -tf file.tar","tar -cvzf file.tar.gz path/to/"]
  }
];
