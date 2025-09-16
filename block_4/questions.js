const questions = [
  {
    question: "What is an advantage of using LVM over normal partitions?",
    options: [
      "Use any number of disks as one big disk",
      "It works in all operating systems",
      "No need to resize file systems when resizing LVs",
      "Less flexible than standard partitions"
    ],
    answers: ["Use any number of disks as one big disk"],
    type: "radio",
    translation: "¿Cuál es una ventaja de usar LVM sobre particiones normales?",
    translations: [
      "Usar cualquier número de discos como un solo disco grande",
      "Funciona en todos los sistemas operativos",
      "No es necesario redimensionar los sistemas de archivos al redimensionar LVs",
      "Menos flexible que las particiones estándar"
    ]
  },
  {
    question: "Which is a disadvantage of LVM?",
    options: [
      "Allows snapshots of file systems",
      "Linux exclusive (almost)",
      "Supports live migration",
      "Easier setup than standard partitions"
    ],
    answers: ["Linux exclusive (almost)"],
    type: "radio",
    translation: "¿Cuál es una desventaja de LVM?",
    translations: [
      "Permite snapshots de sistemas de archivos",
      "Exclusivo de Linux (casi)",
      "Soporta migración en vivo",
      "Configuración más fácil que las particiones estándar"
    ]
  },
  {
    question: "Which command initializes a partition for use as a physical volume?",
    options: ["lvcreate", "vgcreate", "pvcreate", "mkfs"],
    answers: ["pvcreate"],
    type: "radio",
    translation: "¿Qué comando inicializa una partición para usarla como volumen físico?",
    translations: ["lvcreate", "vgcreate", "pvcreate", "mkfs"]
  },
  {
    question: "Which command creates a new volume group from physical volumes?",
    options: ["vgdisplay", "pvcreate", "vgcreate", "lvcreate"],
    answers: ["vgcreate"],
    type: "radio",
    translation: "¿Qué comando crea un nuevo grupo de volúmenes a partir de volúmenes físicos?",
    translations: ["vgdisplay", "pvcreate", "vgcreate", "lvcreate"]
  },
  {
    question: "Which command creates a logical volume inside a volume group?",
    options: ["lvcreate", "vgcreate", "pvscan", "lvdisplay"],
    answers: ["lvcreate"],
    type: "radio",
    translation: "¿Qué comando crea un volumen lógico dentro de un grupo de volúmenes?",
    translations: ["lvcreate", "vgcreate", "pvscan", "lvdisplay"]
  },
  {
    question: "Which command shows a list of existing physical volumes?",
    options: ["pvdisplay", "vgdisplay", "lvdisplay", "lsblk"],
    answers: ["pvdisplay"],
    type: "radio",
    translation: "¿Qué comando muestra una lista de volúmenes físicos existentes?",
    translations: ["pvdisplay", "vgdisplay", "lvdisplay", "lsblk"]
  },
  {
    question: "After creating a logical volume, which command is used to create a filesystem?",
    options: ["vgcreate", "lvcreate", "mkfs", "fdisk"],
    answers: ["mkfs"],
    type: "radio",
    translation: "Después de crear un volumen lógico, ¿qué comando se usa para crear un sistema de archivos?",
    translations: ["vgcreate", "lvcreate", "mkfs", "fdisk"]
  },
  {
    question: "Which of these filesystems can be created on a logical volume?",
    options: ["ext4", "btrfs", "ntfs", "swap only"],
    answers: ["ext4", "btrfs", "ntfs"],
    type: "checkbox",
    translation: "¿Cuál de estos sistemas de archivos puede crearse en un volumen lógico?",
    translations: ["ext4", "btrfs", "ntfs", "solo swap"]
  },
  {
    question: "Which of the following are true about snapshots in LVM?",
    options: [
      "Allow frozen copy of filesystem",
      "Cause long service downtime",
      "Reduce downtime",
      "Only work with NTFS"
    ],
    answers: ["Allow frozen copy of filesystem", "Reduce downtime"],
    type: "checkbox",
    translation: "¿Cuál de lo siguiente es verdadero sobre snapshots en LVM?",
    translations: [
      "Permiten una copia congelada del sistema de archivos",
      "Causan un largo tiempo de inactividad del servicio",
      "Reducen el tiempo de inactividad",
      "Solo funcionan con NTFS"
    ]
  },
  {
    question: "Which is the correct sequence for creating and using an LVM logical volume?",
    options: [
      "Create VG → Create PV → Create LV → mkfs → mount",
      "Create PV → Create VG → Create LV → mkfs → mount",
      "mkfs → Create PV → Create VG → Create LV → mount",
      "Create LV → Create PV → mkfs → Create VG → mount"
    ],
    answers: ["Create PV → Create VG → Create LV → mkfs → mount"],
    type: "radio",
    translation: "¿Cuál es la secuencia correcta para crear y usar un volumen lógico LVM?",
    translations: [
      "Crear VG → Crear PV → Crear LV → mkfs → montar",
      "Crear PV → Crear VG → Crear LV → mkfs → montar",
      "mkfs → Crear PV → Crear VG → Crear LV → montar",
      "Crear LV → Crear PV → mkfs → Crear VG → montar"
    ]
  }
];
