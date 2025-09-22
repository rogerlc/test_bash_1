const questions = [
  {
    question: "What is swap in Linux?",
    options: [
      "A space on disk used when RAM is full",
      "A replacement for CPU",
      "A type of filesystem",
      "A network protocol"
    ],
    answers: ["A space on disk used when RAM is full"],
    type: "radio",
    translation: "¿Qué es swap en Linux?",
    translations: [
      "Un espacio en disco usado cuando la RAM está llena",
      "Un reemplazo para la CPU",
      "Un tipo de sistema de archivos",
      "Un protocolo de red"
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
    question: "How can you create a swap file?",
    options: [
      "dd if=/dev/zero of=/swapfile bs=1024 count=65536",
      "mkswap /swapfile",
      "chmod 0600 /swapfile",
      "swapon /swapfile"
    ],
    answers: [
      "dd if=/dev/zero of=/swapfile bs=1024 count=65536",
      "mkswap /swapfile",
      "chmod 0600 /swapfile",
      "swapon /swapfile"
    ],
    type: "checkbox",
    translation: "Cómo puedes crear un archivo swap?",
    translations: [
      "dd if=/dev/zero of=/swapfile bs=1024 count=65536",
      "mkswap /swapfile",
      "chmod 0600 /swapfile",
      "swapon /swapfile"
    ]
  },
  {
    question: "How can swap be added as LVM logical volume?",
    options: [
      "lvcreate VolGroup00 -n LogVol02 -L 2G",
      "mkswap /dev/VolGroup00/LogVol02",
      "Add entry to /etc/fstab",
      "swapon -v /dev/VolGroup00/LogVol02"
    ],
    answers: [
      "lvcreate VolGroup00 -n LogVol02 -L 2G",
      "mkswap /dev/VolGroup00/LogVol02",
      "Add entry to /etc/fstab",
      "swapon -v /dev/VolGroup00/LogVol02"
    ],
    type: "checkbox",
    translation: "Cómo se agrega swap como volumen lógico LVM?",
    translations: [
      "lvcreate VolGroup00 -n LogVol02 -L 2G",
      "mkswap /dev/VolGroup00/LogVol02",
      "Agregar entrada en /etc/fstab",
      "swapon -v /dev/VolGroup00/LogVol02"
    ]
  },
  {
    question: "What is swappiness?",
    options: [
      "A kernel parameter that controls swapping behavior",
      "A type of swap partition",
      "A file system type",
      "A network parameter"
    ],
    answers: ["A kernel parameter that controls swapping behavior"],
    type: "radio",
    translation: "¿Qué es swappiness?",
    translations: [
      "Un parámetro del kernel que controla el comportamiento de swap",
      "Un tipo de partición swap",
      "Un tipo de sistema de archivos",
      "Un parámetro de red"
    ]
  },
  {
    question: "Which swap methods are available in Linux?",
    options: [
      "Dedicated swap partition",
      "Swap file",
      "Combination of swap partition and swap file",
      "Swap in RAM only"
    ],
    answers: [
      "Dedicated swap partition",
      "Swap file",
      "Combination of swap partition and swap file"
    ],
    type: "checkbox",
    translation: "Qué métodos de swap están disponibles en Linux?",
    translations: [
      "Partición swap dedicada",
      "Archivo swap",
      "Combinación de partición y archivo swap",
      "Swap solo en RAM"
    ]
  },
  {
    question: "Which command disables a swap file?",
    options: ["swapoff -v /swapfile", "swapon /swapfile", "rm /swapfile", "chmod 0600 /swapfile"],
    answers: ["swapoff -v /swapfile"],
    type: "radio",
    translation: "Cuál comando desactiva un archivo swap?",
    translations: ["swapoff -v /swapfile", "swapon /swapfile", "rm /swapfile", "chmod 0600 /swapfile"]
  },
  {
    question: "What is recommended regarding swap partitions vs swap files?",
    options: [
      "Swap partitions are more flexible",
      "Swap files are more flexible",
      "Swap files are always faster than swap partitions",
      "Swap partitions cannot be used with LVM"
    ],
    answers: ["Swap files are more flexible"],
    type: "radio",
    translation: "Qué es recomendado sobre particiones swap vs archivos swap?",
    translations: [
      "Las particiones swap son más flexibles",
      "Los archivos swap son más flexibles",
      "Los archivos swap siempre son más rápidos que las particiones swap",
      "Las particiones swap no pueden usarse con LVM"
    ]
  },
  {
    question: "Why swap space is slower than RAM?",
    options: [
      "It is located on hard drives",
      "It uses a different CPU",
      "It has a different file system",
      "It is stored in the network"
    ],
    answers: ["It is located on hard drives"],
    type: "radio",
    translation: "Por qué el espacio swap es más lento que la RAM?",
    translations: [
      "Está ubicado en discos duros",
      "Usa un CPU diferente",
      "Tiene un sistema de archivos diferente",
      "Está almacenado en la red"
    ]
  },
  {
    question: "What is required to activate swap immediately after creating a swap file?",
    options: [
      "swapon /swapfile",
      "chmod 0600 /swapfile",
      "dd if=/dev/zero of=/swapfile bs=1024 count=65536",
      "mkswap /swapfile"
    ],
    answers: ["swapon /swapfile"],
    type: "radio",
    translation: "Qué se requiere para activar swap inmediatamente después de crear un archivo swap?",
    translations: [
      "swapon /swapfile",
      "chmod 0600 /swapfile",
      "dd if=/dev/zero of=/swapfile bs=1024 count=65536",
      "mkswap /swapfile"
    ]
  },
  {
    question: "Which commands show currently active swap space?",
    options: ["cat /proc/swaps", "free -h", "swapon -s", "lsblk"],
    answers: ["cat /proc/swaps", "free -h", "swapon -s"],
    type: "checkbox",
    translation: "Qué comandos muestran el espacio swap actualmente activo?",
    translations: ["cat /proc/swaps", "free -h", "swapon -s", "lsblk"]
  },
  {
    question: "Steps to remove a swap file include?",
    options: [
      "swapoff -v /swapfile",
      "Remove entry from /etc/fstab",
      "rm /swapfile",
      "Just reboot system"
    ],
    answers: ["swapoff -v /swapfile","Remove entry from /etc/fstab","rm /swapfile"],
    type: "checkbox",
    translation: "Los pasos para eliminar un archivo swap incluyen?",
    translations: [
      "swapoff -v /swapfile",
      "Quitar entrada de /etc/fstab",
      "rm /swapfile",
      "Solo reiniciar el sistema"
    ]
  },
  {
    question: "What is the default swappiness value in Linux?",
    options: ["0", "30", "60", "100"],
    answers: ["60"],
    type: "radio",
    translation: "Cuál es el valor de swappiness por defecto en Linux?",
    translations: ["0","30","60","100"]
  }
];
