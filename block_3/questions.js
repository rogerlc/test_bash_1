const questions = [
  {
    question: "This package managers are used in Debian-like distributives",
    options: ["apt", "rpm", "dpkg", "yum"],
    answers: ["apt", "dpkg"],
    type: "checkbox",
    translation: "Estos gestores de paquetes se usan en distribuciones tipo Debian",
    translations: ["apt", "rpm", "dpkg", "yum"]
  },
  {
    question: "Which package could be installed in RedHat-based distributives?",
    options: ["apk", "deb", "rpm", "pkg"],
    answers: ["rpm"],
    type: "radio",
    translation: "Qué paquete podría instalarse en distribuciones basadas en RedHat",
    translations: ["apk", "deb", "rpm", "pkg"]
  },
  {
    question: "Using this program you could manage several versions of different programming languages",
    options: ["alternatives", "pyenv", "nvenv", "versions"],
    answers: ["alternatives"],
    type: "radio",
    translation: "Usando este programa puedes gestionar varias versiones de diferentes lenguajes de programación",
    translations: ["alternatives", "pyenv", "nvenv", "versions"]
  },
  {
    question: "Please select what is true about systemd",
    options: ["a single package", "a bundle of sofware with journald, networkd,", "an alternative to init.d", "less flexible than init.d", "more flexible than init.d"],
    answers: ["a bundle of sofware with journald, networkd,", "an alternative to init.d", "more flexible than init.d"],
    type: "checkbox",
    translation: "Selecciona lo que es verdadero sobre systemd",
    translations: ["un solo paquete", "un conjunto de software con journald, networkd,", "una alternativa a init.d", "menos flexible que init.d", "más flexible que init.d"]
  },
  {
    question: "Select tasks, that are applicable to be managed by crond",
    options: ["backup", "disk cleanup", "data sync", "restart", "check if service is running"],
    answers: ["backup", "disk cleanup", "data sync", "restart", "check if service is running"],
    type: "checkbox",
    translation: "Selecciona las tareas que se pueden gestionar con crond",
    translations: ["respaldo", "limpieza de disco", "sincronización de datos", "reinicio", "verificar si un servicio está corriendo"]
  }
];
