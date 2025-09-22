const questions = [
  {
    question: "¿Qué extensión tienen los paquetes en sistemas Red Hat?",
    options: ["*.rpm", "*.deb", "*.pkg", "*.tar.gz"],
    answer: ["*.rpm"],
    explanation: "En Red Hat y derivados los paquetes tienen extensión .rpm."
  },
  {
    question: "¿Qué extensión tienen los paquetes en sistemas Debian?",
    options: ["*.rpm", "*.deb", "*.tgz", "*.pkg"],
    answer: ["*.deb"],
    explanation: "En Debian y derivados los paquetes tienen extensión .deb."
  },
  {
    question: "¿Qué comando instala un paquete en sistemas Red Hat?",
    options: ["rpm -i paquete.rpm", "dpkg -i paquete.deb", "apt install paquete", "yum install paquete"],
    answer: ["rpm -i paquete.rpm"],
    explanation: "rpm -i permite instalar directamente un paquete .rpm."
  },
  {
    question: "¿Qué comando instala un paquete en sistemas Debian?",
    options: ["rpm -i paquete.rpm", "dpkg -i paquete.deb", "yum install paquete", "zypper install paquete"],
    answer: ["dpkg -i paquete.deb"],
    explanation: "dpkg -i se utiliza para instalar paquetes .deb."
  },
  {
    question: "¿Qué comando en Debian actualiza la lista de paquetes disponibles?",
    options: ["apt update", "apt upgrade", "apt install", "apt remove"],
    answer: ["apt update"],
    explanation: "El comando apt update descarga la lista de paquetes disponibles y sus versiones."
  },
  {
    question: "¿Qué comando en Debian instala un paquete desde repositorios?",
    options: ["apt update", "apt install", "apt search", "apt remove"],
    answer: ["apt install"],
    explanation: "apt install descarga e instala un paquete desde los repositorios configurados."
  },
  {
    question: "¿Qué comando en Debian elimina un paquete sin borrar archivos de configuración?",
    options: ["apt remove", "apt purge", "apt uninstall", "apt erase"],
    answer: ["apt remove"],
    explanation: "apt remove borra el paquete pero deja sus archivos de configuración."
  },
  {
    question: "¿Qué comando en Debian elimina un paquete junto con archivos de configuración?",
    options: ["apt purge", "apt remove", "apt erase", "apt clear"],
    answer: ["apt purge"],
    explanation: "apt purge borra tanto el paquete como sus archivos de configuración."
  },
  {
    question: "¿Qué comando en Red Hat permite instalar paquetes con resolución automática de dependencias?",
    options: ["rpm -i paquete.rpm", "yum install paquete", "dpkg -i paquete.deb", "apt install paquete"],
    answer: ["yum install paquete"],
    explanation: "yum instala paquetes en sistemas basados en Red Hat y resuelve dependencias automáticamente."
  },
  {
    question: "¿Qué comando en Debian muestra información detallada de un paquete?",
    options: ["apt-cache show paquete", "apt search paquete", "apt update paquete", "apt info paquete"],
    answer: ["apt-cache show paquete"],
    explanation: "apt-cache show muestra información detallada de un paquete."
  },
  {
    question: "¿Qué archivo contiene los repositorios principales en Debian?",
    options: ["/etc/apt/sources.list", "/etc/yum.conf", "/etc/dpkg.cfg", "/etc/apt/repositories"],
    answer: ["/etc/apt/sources.list"],
    explanation: "Los repositorios principales se configuran en /etc/apt/sources.list."
  },
  {
    question: "¿Qué directorio contiene archivos adicionales de repositorios en Debian?",
    options: ["/etc/apt/sources.list.d/", "/var/cache/apt/", "/etc/yum.repos.d/", "/usr/share/apt/repos/"],
    answer: ["/etc/apt/sources.list.d/"],
    explanation: "Los repositorios adicionales se definen en archivos dentro de /etc/apt/sources.list.d/."
  }
];
