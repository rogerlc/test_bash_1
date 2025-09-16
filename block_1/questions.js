const questions = [
  {
    question: "Which OS was used in the origin of Linux?",
    options: ["FreeBSD", "MacOS", "MINIX", "OS/2"],
    answers: ["MINIX"],
    type: "radio",
    translation: "¿Qué sistema operativo se usó en el origen de Linux?",
    translations: ["FreeBSD", "MacOS", "MINIX", "OS/2"]
  },
  {
    question: "One of the first programs loaded on Linux start-up after the bootloader.",
    options: ["Grub", "Kernel", "Root", "Shell"],
    answers: ["Root"],
    type: "radio",
    translation: "Uno de los primeros programas cargados en el inicio de Linux después del cargador de arranque.",
    translations: ["Grub", "Kernel", "Root", "Shell"]
  },
  {
    question: "Which program provides an interface between a user and an operating system (OS) kernel?",
    options: ["Lilo", "Linux daemon", "Shell"],
    answers: ["Shell"],
    type: "radio",
    translation: "¿Qué programa proporciona una interfaz entre un usuario y el núcleo del sistema operativo?",
    translations: ["Lilo", "Demonio de Linux", "Shell"]
  },
  {
    question: "Does Linux make any assumptions about file content by its extension?",
    options: ["Yes", "No"],
    answers: ["No"],
    type: "radio",
    translation: "¿Linux hace alguna suposición sobre el contenido de un archivo por su extensión?",
    translations: ["Sí", "No"]
  },
  {
    question: "Mark all Linux related file systems.",
    options: ["EXT2", "EXT3", "EXT4", "NTFS", "ReiserFS", "XFS"],
    answers: ["EXT2","EXT3","EXT4","ReiserFS","XFS"],
    type: "checkbox",
    translation: "Marca todos los sistemas de archivos relacionados con Linux.",
    translations: ["EXT2","EXT3","EXT4","NTFS","ReiserFS","XFS"]
  },
  {
    question: "What is true about Hard links?",
    options: [
      "Hard link is a direct pointer to an inode",
      "One file cannot have more then 3 Hard links",
      "Hard link has the same attributes as an original file",
      "Changes in any reflect in all",
      "File cannot be accessable by Hard link after deletion of the original one",
      "Hard link could be created only whithin the same filesystem"
    ],
    answers: [
      "Hard link is a direct pointer to an inode",
      "Hard link has the same attributes as an original file",
      "Changes in any reflect in all",
      "Hard link could be created only whithin the same filesystem"
    ],
    type: "checkbox",
    translation: "Qué es verdadero sobre los enlaces duros (Hard links)?",
    translations: [
      "El enlace duro es un puntero directo a un inode",
      "Un archivo no puede tener más de 3 enlaces duros",
      "El enlace duro tiene los mismos atributos que el archivo original",
      "Los cambios en cualquiera se reflejan en todos",
      "El archivo no puede ser accesible por enlace duro después de borrar el original",
      "El enlace duro solo se puede crear dentro del mismo sistema de archivos"
    ]
  },
  {
    question: "What is true about Soft links?",
    options: [
      "Soft link is a direct pointer to an inode",
      "One file cannot have more then 5 Soft links",
      "Soft link has the same attributes as an original file",
      "If removed, the original file will remain",
      "File cannot be accessable by Soft link after deletion of the original one"
    ],
    answers: [
      "If removed, the original file will remain",
      "File cannot be accessable by Soft link after deletion of the original one"
    ],
    type: "checkbox",
    translation: "Qué es verdadero sobre los enlaces simbólicos (Soft links)?",
    translations: [
      "El enlace simbólico es un puntero directo a un inode",
      "Un archivo no puede tener más de 5 enlaces simbólicos",
      "El enlace simbólico tiene los mismos atributos que el archivo original",
      "Si se elimina, el archivo original permanecerá",
      "El archivo no puede ser accesible por el enlace simbólico después de borrar el original"
    ]
  },
  {
    question: "What is correct order of adding new disk to LVM?",
    options: [
      "pvcreate > lgcreate > lvcreate > mkfs",
      "pvcreate > lvcreate > lgcreate > mkfs",
      "pvcreate > vgcreate > lvcreate > mkfs",
      "pvcreate > lvcreate > vgcreate > mkfs"
    ],
    answers: ["pvcreate > vgcreate > lvcreate > mkfs"],
    type: "radio",
    translation: "Cuál es el orden correcto de agregar un nuevo disco a LVM?",
    translations: [
      "pvcreate > lgcreate > lvcreate > mkfs",
      "pvcreate > lvcreate > lgcreate > mkfs",
      "pvcreate > vgcreate > lvcreate > mkfs",
      "pvcreate > lvcreate > vgcreate > mkfs"
    ]
  },
  {
    question: "What commands could show information about swap usage?",
    options: ["cat /proc/swaps", "swapon", "free -h", "makeswap"],
    answers: ["cat /proc/swaps","swapon","free -h"],
    type: "checkbox",
    translation: "Qué comandos podrían mostrar información sobre el uso de swap?",
    translations: ["cat /proc/swaps", "swapon", "free -h", "makeswap"]
  },
  {
    question: "What is not a boot loader?",
    options: ["LILO", "LIFO", "FIFO", "GRUB"],
    answers: ["LIFO","FIFO"],
    type: "checkbox",
    translation: "Cuál no es un cargador de arranque (boot loader)?",
    translations: ["LILO","LIFO","FIFO","GRUB"]
  },
  {
    question: "Linux system normally boots with graphics with _ Runlevel",
    options: ["1", "3", "5", "6"],
    answers: ["5"],
    type: "radio",
    translation: "El sistema Linux normalmente arranca con gráficos en el Runlevel _",
    translations: ["1","3","5","6"]
  },
  {
    question: "This Runlevel is used for system reboot",
    options: ["1", "3", "5", "6"],
    answers: ["6"],
    type: "radio",
    translation: "Este Runlevel se usa para reiniciar el sistema",
    translations: ["1","3","5","6"]
  }
];
