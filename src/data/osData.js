// ATOMS OS Canonical Technical Data Baseline
// Creator & Lead Systems Engineer: Saumya Chaudhari (Saumya25-hub / Saumya-25)
// Source of truth: Physical Bare-Metal Certifications, Forensic Audits & Repository Architecture
// Master Audit Reference: d:\Signatures_OS\ATOMS_OS_MASTER_FORENSIC_AUDIT.md

export const CREATOR_INFO = {
  name: "Saumya Chaudhari",
  githubUsername: "Saumya25-hub",
  githubUrl: "https://github.com/Saumya25-hub",
  osRepoUrl: "https://github.com/Saumya25-hub/Atoms-OS",
  webRepoUrl: "https://github.com/Saumya25-hub/ATOMS-OS-INFOWEB",
  redditUsername: "Saumya-25",
  redditUrl: "https://www.reddit.com/user/Saumya-25/",
  role: "Solo Operating System Architect & Systems Engineer",
  email: "saumyachaudhari25@outlook.com",
  license: "MIT License",
  licenseYear: "2026",
  status: "v2.7.0-vmx-stable (Certified Physical Silicon)"
};

export const HARDWARE_TESTBEDS = [
  {
    id: "h81-haswell",
    name: "Primary Baseline Testbed (Haswell LGA1150)",
    chipset: "Intel H81 Express Chipset",
    cpu: "Intel Core i3 4th Gen (Haswell x86_64, 2C/4T)",
    ram: "8 GB DDR3 SDRAM (Dual Channel)",
    bios: "2022 Vendor Updated Native UEFI Firmware (No CSM / No Legacy MBR)",
    status: "CERTIFIED PASS",
    certifiedFeatures: [
      "Pure UEFI 2.x GPT Bootloader Handoff",
      "PMM Frame Allocator (Zero drift across 1,920 cycles)",
      "4-Level PML4 Virtual Memory Ownership Teardown",
      "Stage A Kernel Heap (kmalloc / kfree)",
      "Legacy PIC 8259A Remap + Local APIC ICR/EOI",
      "Per-CPU GDT and Dynamic TSS.RSP0 Stack Sync"
    ]
  },
  {
    id: "b760m-raptorlake",
    name: "Advanced Hypervisor & Storage Testbed (LGA1700)",
    chipset: "ASUS PRIME B760M-K D4 Motherboard",
    cpu: "Intel Core i3-14100F (Raptor Lake-S Refresh, 4P/8T)",
    ram: "16 GB High-Speed DDR5 RAM",
    storage: "Western Digital Blue SN5000 NVMe M.2 Gen4 PCIe SSD",
    bios: "AMI UEFI Firmware (Native GOP Framebuffer)",
    status: "CERTIFIED PASS",
    certifiedFeatures: [
      "Bare-Metal Intel VT-x (VMX) Root Operation & EPT SLAT Paging",
      "Physical LGA1700 VM-Entry & Clean VM-Exit Execution (500k+ exits)",
      "Native NVMe Gen4 Storage Controller + GPT + NTFS Partition Parsing",
      "Realtek R8168 & RTL8125 2.5GbE PCIe NIC Telemetry",
      "xHCI 1.2 USB 3.0 Controller & Physical HID Keyboard Ring Dequeue"
    ]
  }
];

// Master Subsystems (Tier 1 & Tier 3 & Tier 4)
export const CORE_ENGINES = [
  {
    id: "hypervisor",
    name: "Intel VT-x Type-1 Micro-Hypervisor",
    codeName: "VMX Core Engine",
    authority: "kernel/core/hypervisor/ & arch/x86_64/vmx/",
    status: "CERTIFIED (v2.7.0-vmx-stable)",
    tag: "Bare-Metal Silicon",
    description: "Hardware-accelerated Ring 0 hypervisor running in VMX root operation on bare metal Intel silicon without intermediate host OS. Implements hardware VMCS lifecycle, Extended Page Tables (EPT) Second Level Address Translation (SLAT), and high-volume exit handling.",
    highlights: [
      "Physical Intel Core i3-14100F certification with VMLAUNCH (CF=0, ZF=0)",
      "Exit Reason 0x0A (CPUID) and Port 0xCF9 guest reset autopsy handled natively",
      "High-volume exit handling: 500,000+ bare-metal physical exits, 2.0M+ guest execution exits",
      "Validated against all 18 Intel SDM Vol 3C Sec 26.3 VMCS invariants"
    ],
    proofImage: "/proofs/hardware_monitor_hypervisor_vmcs.png"
  },
  {
    id: "memory",
    name: "Two-Tier Memory Management (PMM + VMM)",
    codeName: "PMM Bitmap & 4-Level Paging",
    authority: "kernel/core/memory/pmm/ & kernel/core/memory/vmm/",
    status: "CERTIFIED (0 Memory Leak)",
    tag: "Zero-Drift Certified",
    description: "Total separation of physical memory allocation and virtual address spaces. PMM manages up to 32 GB RAM frames via bitmap; VMM enforces strict 4-level PML4 paging with hierarchical ownership-aware teardown.",
    highlights: [
      "1,920 allocation/free cycles tested on physical 32GB DDR5 with exact Net Page Delta 0",
      "100 continuous spawn-terminate-reap process cycles with 0 pages leaked (baseline: 7,639,611)",
      "Strict User/Kernel partition: User processes confined to [0x40000000, 0x80000000)",
      "Automatic %cr3 swap to g_kernel_pml4 before releasing process-owned page frames"
    ],
    proofImage: "/proofs/vmm_screen.png"
  },
  {
    id: "syscall",
    name: "Hardware Syscall Gateway & TSS Boundary",
    codeName: "IA32_LSTAR Fast Syscall",
    authority: "kernel/core/syscall/ & arch/x86_64/gdt/",
    status: "CERTIFIED (600 Stress Pass)",
    tag: "Privilege Ring 0/3",
    description: "Transitions user execution (Ring 3) to kernel supervisor (Ring 0) via x86_64 MSR hardware extensions. Enforces VMM PML4 page-table boundaries before dereferencing user pointers.",
    highlights: [
      "Configured with IA32_STAR, IA32_LSTAR, and IA32_FMASK (IF/TF/DF flags masked)",
      "Dedicated 32KB (8-page) kernel stacks per user task, isolated from user memory",
      "Dynamic TSS.RSP0 synchronization during task switches across all CPU cores",
      "Atomic SYSRETQ return restoring user privilege without stack corruption"
    ],
    proofImage: "/proofs/phase10_bosx_dashboard.png"
  },
  {
    id: "sll-engine",
    name: "Phase 10 ATOMS SLL Engine (Native Shared Libraries)",
    codeName: "Shared Link Library (.sll) Subsystem",
    authority: "kernel/core/sll/sll_manager.c & userspace/libs/",
    status: "ACTIVE (Native Format)",
    tag: "Subsystem Architecture",
    description: "Custom dynamic linking subsystem managing ATOMS OS native .sll (Shared Link Library) binary images. Provides clean-room Ring 3 API implementations without depending on Windows DLLs or Linux shared objects.",
    highlights: [
      "Zero Windows DLLs: 100% native .sll format with export symbol tables and version tags",
      "Single-instance memory loading with automatic reference counting (ref_count)",
      "Built-in deadlock prevention via ATOMS_SLL_CheckCircularDependency()",
      "Powers 11 native runtime libraries: KERNEL32.sll, USER32.sll, GDI32.sll, WS2_32.sll, BOSLL.sll"
    ],
    proofImage: "/proofs/process_cert_screen.png"
  },
  {
    id: "storage",
    name: "BOFS Filesystem & 16-Phase NTFS Driver Suite",
    codeName: "BOFS Transactional WAL & NTFS Engine",
    authority: "kernel/vfs/ & drivers/storage/ & kernel/drivers/storage/nvme/",
    status: "CERTIFIED (2,050 Cycles)",
    tag: "Storage & Filesystems",
    description: "Custom extent-based filesystem (BOFS) with Write-Ahead Logging (WAL) and crash-resilient metadata, coupled with an enterprise 16-phase NTFS driver suite for native read-only access to physical Windows disks.",
    highlights: [
      "BOFS: Dynamic mount/unmount lifecycle verified over 2,050 cycles with zero memory leaks",
      "16-Phase NTFS Engine: $MFT record parser, B-tree index allocation, and data runlist decompression",
      "NVMe Gen4 PCIe M.2 driver certified on ASUS PRIME B760M-K with WD Blue SN5000",
      "GPT partition table traversal and FAT32 EFI System Partition read/write support"
    ],
    proofImage: "/proofs/asus_b750mk_nvme_ntfs_validation.png"
  },
  {
    id: "graphics",
    name: "AGDAE Display Engine & BCM Compositor",
    codeName: "BSPE & BOS Composition Manager",
    authority: "kernel/display/ & kernel/wm/bcm/ & kernel/shell/",
    status: "STABLE PREVIEW",
    tag: "Graphics & UI Shell",
    description: "Platform-neutral graphics pipeline utilizing UEFI GOP linear framebuffers. Features dirty-rectangle damage tracking, dedicated cursor hardware plane, Rook login supervisor, and native desktop shell.",
    highlights: [
      "Full 2560x1600 32-bit linear GOP framebuffer double-buffered compositor",
      "Dedicated hardware cursor overlay plane preventing mouse flicker during screen repaints",
      "Rook Login Supervisor, Start Menu, Taskbar, and multi-surface window manager",
      "VirtIO-GPU paravirtualized 2D command queues for hypervisor guest displays"
    ],
    proofImage: "/proofs/forensic_virtio_gpu_framebuffer.png"
  },
  {
    id: "network",
    name: "Bare-Metal Network Stack & RTL8125 2.5GbE",
    codeName: "PCIe E1000, R8168 & RTL8125",
    authority: "kernel/net/ & kernel/drivers/net/ & realtek-r8125-dkms/",
    status: "CERTIFIED (Hardware Telemetry)",
    tag: "High-Speed Networking",
    description: "Bare-metal network device drivers operating directly on PCI bus. Features high-speed 2.5 Gbps Realtek RTL8125 integration, Intel E1000, ARP resolution, IPv4 framing, and VirtIO-Net guest bridging.",
    highlights: [
      "Realtek RTL8125 2.5GbE physical NIC verified on bare-metal silicon (MAC: A0:AD:9F:C5:81:27)",
      "Physical link negotiation at 1000/2500 Mbps Full-Duplex with 256-descriptor TX/RX rings",
      "Full Network Forensic Diagnostic Panel: Physical NIC -> VirtIO-Net -> DHCP -> IPv4 -> DNS -> TCP",
      "Cooperative non-blocking UDP telemetry streaming for live remote system monitoring"
    ],
    proofImage: "/proofs/hardware_monitor_rtl8125_nic.png"
  },
  {
    id: "diagnostics",
    name: "ABDE & AI-(P)DEBUG Forensic Engine",
    codeName: "Advanced Bare-Metal Diagnostic Engine",
    authority: "kernel/debug/abde/ & kernel/debug/screenshot/",
    status: "CERTIFIED (Live Telemetry)",
    tag: "Diagnostic HUD",
    description: "On-screen real-time diagnostic dashboard and serial logging engine. Visualizes register states, per-CPU core heartbeat spinners, PMM allocation gauges, and crash autopsies with zero OS dependency.",
    highlights: [
      "Live rotating heartbeat spinner (| / - \\) executing on BSP and AP idle loops",
      "COM1 serial port mirror streaming structured telemetry at 115200 baud",
      "Triple-fault isolation and General Protection Fault (#GP) register freeze dumps",
      "Silicon root-cause automated analysis for bare-metal hypervisor and driverbring-up"
    ],
    proofImage: "/proofs/phase13_certified_dashboard.png"
  }
];

// Complete 14-Class Hardware Driver Catalog (Tier 2)
export const HARDWARE_DRIVERS = [
  {
    name: "Intel xHCI 1.2 USB 3.0 Host Controller",
    location: "kernel/drivers/usb/host/xhci/",
    hardwareTarget: "Intel Haswell H81 & B760M-K PCH",
    status: "STABLE",
    spec: "xHCI Rev 1.2 Specification",
    capabilities: "1024-TRB transfer and event rings, device slot context management, doorbells, port status change interrupts"
  },
  {
    name: "USB HID Keyboard & Mouse Driver",
    location: "kernel/drivers/usb/class/",
    hardwareTarget: "All USB Keyboards & Optical Mice",
    status: "STABLE",
    spec: "USB Device Class Definition for HID 1.11",
    capabilities: "Bidirectional report parsing, 200/200 ACK lock LED control (Caps/Num/Scroll), interrupt moderation to prevent CPU starvation"
  },
  {
    name: "NVMe Gen4 PCIe SSD Driver",
    location: "kernel/drivers/storage/nvme/",
    hardwareTarget: "WD Blue SN5000 / Samsung 980 Pro (M.2)",
    status: "STABLE",
    spec: "NVM Express 1.4 Specification",
    capabilities: "Admin & I/O submission/completion queues, 64-byte command submission, doorbells, 4KB page PRPs, GPT traversal"
  },
  {
    name: "AHCI / SATA Storage Controller",
    location: "kernel/drivers/storage/ahci/",
    hardwareTarget: "Intel SATA Controller / QEMU ICH9",
    status: "STABLE",
    spec: "Serial ATA AHCI 1.3.1 Specification",
    capabilities: "Command List & Received FIS structures, 32-command slots, PRD tables, DMA scatter-gather transfers"
  },
  {
    name: "Intel E1000 Gigabit PCIe NIC",
    location: "kernel/drivers/net/e1000/",
    hardwareTarget: "Intel 82540EM / 82545EM / 82574L",
    status: "STABLE",
    spec: "Intel PCIe GbE Architecture",
    capabilities: "Circular descriptor rings, zero-copy packet framing, link auto-negotiation, promiscuous/multicast filtering"
  },
  {
    name: "Realtek RTL8168 / RTL8111 PCIe Gigabit NIC",
    location: "kernel/drivers/net/r8168/",
    hardwareTarget: "Realtek RTL8168B/C/D/E/F/G on Physical Boards",
    status: "STABLE",
    spec: "Realtek PCI Express Gigabit Ethernet",
    capabilities: "MMIO register mapping, dual TX/RX descriptor rings, hardware CRC calculation, link detection"
  },
  {
    name: "Realtek RTL8125 2.5GbE Ethernet Driver",
    location: "realtek-r8125-dkms/ & kernel/drivers/net/",
    hardwareTarget: "Realtek RTL8125B/D 2.5 Gigabit Silicon",
    status: "EXPERIMENTAL (Phase 5A-3)",
    spec: "Realtek 2.5G Multi-Gigabit Controller",
    capabilities: "2.5 Gbps / 1000 Mbps full duplex negotiation, 256-descriptor ring depth, verified on physical MAC A0:AD:9F:C5:81:27"
  },
  {
    name: "Intel High Definition Audio (HDA)",
    location: "kernel/drivers/audio/hda/",
    hardwareTarget: "Intel Realtek ALC887 / ALC897 Codecs",
    status: "ACTIVE",
    spec: "Intel High Definition Audio Spec 1.0a",
    capabilities: "CORB/RIRB command buffer rings, stream DMA engines, widget graph discovery, PCM audio playback"
  },
  {
    name: "AC97 Legacy Audio Codec",
    location: "kernel/drivers/audio/ac97/",
    hardwareTarget: "QEMU AC97 / Legacy Motherboards",
    status: "ACTIVE",
    spec: "Audio Codec '97 Component Spec",
    capabilities: "Native Bus Master DMA, PCM stereo playback, volume attenuation registers, sample rate locking"
  },
  {
    name: "High Precision Event Timer (HPET) & PIT",
    location: "kernel/drivers/timer/",
    hardwareTarget: "Intel PCH HPET Block & Legacy 8254 PIT",
    status: "STABLE",
    spec: "Intel IA-PC HPET Specification",
    capabilities: "Nanosecond-granularity timekeeping, periodic comparator interrupts, calibrated against CPU TSC"
  },
  {
    name: "Real-Time Clock (RTC / CMOS)",
    location: "kernel/drivers/rtc/",
    hardwareTarget: "Motorola MC146818 / Intel PCH RTC",
    status: "STABLE",
    spec: "Standard IBM PC/AT CMOS Architecture",
    capabilities: "BCD calendar decode, UTC to local time conversion, Periodic Interrupt (PIE) generation"
  },
  {
    name: "ACPI Power & System Topology Manager",
    location: "kernel/drivers/acpi/",
    hardwareTarget: "ACPI 2.0 to 6.4 Compliant BIOS Firmware",
    status: "STABLE",
    spec: "Advanced Configuration and Power Interface 6.4",
    capabilities: "RSDP / XSDT table checksum validation, MADT core enumeration, FADT power transitions, shutdown via Port 0x604 / PM1a"
  },
  {
    name: "VirtIO Paravirtualized Driver Suite",
    location: "kernel/core/hypervisor/virtio/",
    hardwareTarget: "VirtIO-Net, VirtIO-BLK, VirtIO-GPU",
    status: "ACTIVE (Phase 5A)",
    spec: "OASIS VirtIO Standard v1.1",
    capabilities: "Split VirtQueue descriptor rings, VirtIO-BLK disk access, VirtIO-Net packet transmission, VirtIO-GPU scanout"
  },
  {
    name: "UEFI GOP Linear Video Framebuffer",
    location: "kernel/display/",
    hardwareTarget: "All Native UEFI Video Adapters (Intel/AMD/Nvidia)",
    status: "STABLE",
    spec: "UEFI Graphics Output Protocol (GOP)",
    capabilities: "32bpp linear ARGB8888 framebuffers up to 2560x1600, stride alignment, double-buffered presentation"
  }
];

// Userspace Native .sll Architecture (Tier 5)
export const NATIVE_SLL_LIBRARIES = [
  {
    name: "KERNEL32.sll",
    location: "userspace/libs/kernel32/",
    role: "Core OS API, virtual memory mapping, process and thread lifecycle",
    apis: "VirtualAlloc, VirtualFree, CreateProcess, CreateThread, ReadFile, WriteFile, GetTickCount, HeapCreate, Sleep",
    status: "ACTIVE (STABLE BASE)"
  },
  {
    name: "USER32.sll",
    location: "userspace/libs/user32/",
    role: "Window management, message pump, mouse/keyboard input routing",
    apis: "CreateWindowEx, DefWindowProc, GetMessage, DispatchMessage, SetTimer, DrawText, clipboard, caret",
    status: "ACTIVE (STABLE BASE)"
  },
  {
    name: "GDI32.sll",
    location: "userspace/libs/gdi32/",
    role: "2D raster graphics, pens, brushes, bitmaps, surface blitting",
    apis: "CreatePen, CreateSolidBrush, SelectObject, BitBlt, StretchBlt, CreateCompatibleDC, SetPixel",
    status: "ACTIVE (STABLE BASE)"
  },
  {
    name: "WS2_32.sll",
    location: "userspace/libs/ws2_32/",
    role: "Berkeley / Winsock 2.0 network communication over ATOMS TCP/IP stack",
    apis: "WSAStartup, socket, bind, connect, send, recv, select, getaddrinfo, closesocket",
    status: "ACTIVE"
  },
  {
    name: "ADVAPI32.sll",
    location: "userspace/libs/advapi32/",
    role: "System registry management, security tokens, cryptographic providers",
    apis: "RegOpenKeyEx, RegQueryValueEx, RegSetValueEx, security access tokens, crypto providers",
    status: "ACTIVE"
  },
  {
    name: "SHELL32.sll",
    location: "userspace/libs/shell32/",
    role: "Desktop shell integration, file associations, application launching",
    apis: "ShellExecute, SHGetFolderPath, file extension associations, system icon binding",
    status: "ACTIVE"
  },
  {
    name: "COMCTL32.sll",
    location: "userspace/libs/comctl32/",
    role: "Standard desktop GUI controls",
    apis: "TreeView, ListView, ProgressBar, TabControl, StatusBar, ToolBar controls",
    status: "ACTIVE"
  },
  {
    name: "COMDLG32.sll",
    location: "userspace/libs/comdlg32/",
    role: "Standard desktop file and color dialogs",
    apis: "Open File Dialog, Save File Dialog, Choose Color, Choose Font dialogs",
    status: "ACTIVE"
  },
  {
    name: "OLE32.sll",
    location: "userspace/libs/ole32/",
    role: "Component Object Model (COM) foundation and structured storage",
    apis: "CoInitialize, CoCreateInstance, IUnknown interface pointers, memory allocators",
    status: "ACTIVE"
  },
  {
    name: "OPENGL32.sll",
    location: "userspace/libs/opengl32/",
    role: "OpenGL 3.2 3D rendering pipeline for games and visual applications",
    apis: "wglCreateContext, wglMakeCurrent, glBegin, glEnd, glVertex3f, matrix transformations",
    status: "ACTIVE"
  },
  {
    name: "BOSLL.sll",
    location: "userspace/libs/bosll/",
    role: "BOS Low-Level Native OS Runtime & Syscall bridge into Ring 0",
    apis: "BosCreateProcess, BosSyscall, BosLoadLibrary, IPC channels, kernel handle tables",
    status: "ACTIVE (STABLE BASE)"
  }
];

// Complete 17-Item Real Proof Photos Gallery
export const PROOF_PHOTOS = [
  {
    id: "hw-hypervisor-monitor",
    title: "Physical Monitor: Intel VT-x Hypervisor Debug Dashboard",
    category: "Monitor",
    hardware: "Intel Core i3-14100F (LGA1700)",
    date: "2026-09-24",
    filename: "hardware_monitor_hypervisor_vmcs.png",
    image: "/proofs/hardware_monitor_hypervisor_vmcs.png",
    description: "Photograph of physical monitor running ATOMS OS Hypervisor Forensic Debug Dashboard directly on Intel LGA1700 silicon. All 18 Intel SDM Vol 3C Sec 26.3 VMCS invariants validated green.",
    forensicData: "VMLAUNCH SUCCESS (CF=0, ZF=0); VM_EXIT_REASON: 0x00000000; EPTP: 0x000000000E68405E (4-Level WB, AD-safe)."
  },
  {
    id: "hw-rtl8125-monitor",
    title: "Physical Monitor: Realtek RTL8125 2.5GbE Hardware Verification",
    category: "Monitor",
    hardware: "ASUS PRIME B760M-K (Realtek RTL8125 Silicon)",
    date: "2026-09-24",
    filename: "hardware_monitor_rtl8125_nic.png",
    image: "/proofs/hardware_monitor_rtl8125_nic.png",
    description: "Photograph of physical monitor displaying ATOMS OS Network Forensic Diagnostic Panel. Confirms RTL8125 detected (PCI 0x10EC:0x8125), Carrier Link Up at 1000/2500 Mbps Full-Duplex.",
    forensicData: "Hardware MAC: A0:AD:9F:C5:81:27; Driver State: PASS (ACTIVE_OPERATIONAL); NetInterface bound to eth0."
  },
  {
    id: "hw-silicon-monitor",
    title: "Physical Monitor: Silicon Root-Cause Telemetry & VirtIO",
    category: "Monitor",
    hardware: "Intel Raptor Lake-S Platform",
    date: "2026-09-24",
    filename: "hardware_monitor_silicon_diagnostics.png",
    image: "/proofs/hardware_monitor_silicon_diagnostics.png",
    description: "Close-up photograph of physical display showing Automated Silicon Root Cause analysis and VirtIO-Net guest descriptor rings on bare-metal.",
    forensicData: "HW:PASS | DRV:PASS | LINK:PASS | NETIF:PASS | VIRTIO:PASS; Hypervisor context and fault GPA tracing."
  },
  {
    id: "forensic-network-direct",
    title: "Full Network Forensic Diagnostic Panel (Phase 5A-3)",
    category: "Network",
    hardware: "Physical NIC + VirtIO-Net Bridge",
    date: "2026-09-24",
    filename: "forensic_network_panel_phase5a.png",
    image: "/proofs/forensic_network_panel_phase5a.png",
    description: "Direct forensic screenshot of the 10-panel Network Diagnostic Suite: Physical NIC -> Driver -> NetInterface -> VirtIO -> vtnet0 -> DHCP -> IPv4 -> DNS -> TCP -> HTTPS.",
    forensicData: "Full duplex 2.5G carrier link; TX/RX depth 256 descs; VirtIO PCI device 00:02.0 initialized."
  },
  {
    id: "forensic-freebsd-direct",
    title: "FreeBSD Guest Runtime Phase 5A on Intel VT-x",
    category: "Hypervisor",
    hardware: "Intel Core i3-14100F (LGA1700)",
    date: "2026-09-24",
    filename: "forensic_freebsd_guest_locore.png",
    image: "/proofs/forensic_freebsd_guest_locore.png",
    description: "Bare-metal hypervisor hosting 64-bit FreeBSD guest (locore.S). Telemetry traces 2048 MB EPT allocation, VirtIO-BLK 4096 MB disk mounting UFS2, and USB xHCI live packets.",
    forensicData: "RAM: 2048 MB EPT 2MB pages; UFS2 mounted (/dev/vtbd0, clean); xHCI Host IRQ1 packets RX:224 XFER:168."
  },
  {
    id: "forensic-2m-exits",
    title: "2,000,450 Bare-Metal VM-Exits Telemetry Stream",
    category: "Hypervisor",
    hardware: "Physical Intel Silicon",
    date: "2026-09-24",
    filename: "forensic_vm_exits_2m_telemetry.png",
    image: "/proofs/forensic_vm_exits_2m_telemetry.png",
    description: "Live forensic capture showing 2,000,450 VM-exits (0x001E8602) executed on physical CPU with zero host NTFS or NVMe corruption.",
    forensicData: "Exits: 0x001E8602 (2,000,450); Last Exit: 0x001E (GUEST_RESET); RIP: 0xFFFFFFFF80FC451E; Safety: 100% RAM Isolated."
  },
  {
    id: "forensic-gpu-direct",
    title: "Graphics & Display Deep Debug (Phase 5A-4)",
    category: "Desktop",
    hardware: "Host GOP Framebuffer + VirtIO-GPU",
    date: "2026-09-24",
    filename: "forensic_virtio_gpu_framebuffer.png",
    image: "/proofs/forensic_virtio_gpu_framebuffer.png",
    description: "Forensic analysis of physical host framebuffer (1920x1080 32bpp linear ARGB8888, Stride 8192) alongside VirtIO-GPU 2D queue routing.",
    forensicData: "Host Base: 0x4000000000; Stride: 8192 Bytes; Guest Res: 1024x768; Buffer Backing: 3072 KB; Pixel Provenance: PASS."
  },
  {
    id: "boot-photo",
    title: "Physical Bare-Metal Boot Verification",
    category: "Monitor",
    hardware: "Intel Haswell H81 Motherboard (Core i3)",
    date: "2026",
    filename: "boot_proof.png",
    image: "/proofs/boot_proof.png",
    description: "Photograph of physical monitor running ATOMS OS boot sequence directly on bare-metal LGA1150 silicon via UEFI GPT flash drive.",
    forensicData: "Pure UEFI GOP linear framebuffer initialization, zero CSM fallback, 64-bit Long Mode entry."
  },
  {
    id: "phase13-cert",
    title: "Phase 13 Real-Hardware Certification Dashboard",
    category: "Milestone",
    hardware: "ASUS PRIME B760M-K / Haswell H81",
    date: "2026-09-05",
    filename: "phase13_certified_dashboard.png",
    image: "/proofs/phase13_certified_dashboard.png",
    description: "Full-screen ABDE diagnostic table confirming 100% pass across CPU, GDT, IDT, PMM, VMM, Heap, and VFS subsystems on bare-metal silicon.",
    forensicData: "All 18 architectural milestones certified green; zero memory leak; AP heartbeat loops verified."
  },
  {
    id: "vmx-registers",
    title: "Intel VT-x Hypervisor Registers & Paging (Stage 99)",
    category: "Hypervisor",
    hardware: "Intel Core i3-14100F (LGA1700)",
    date: "2026-09-22",
    filename: "forensic_stage99_registers.png",
    image: "/proofs/forensic_stage99_registers.png",
    description: "Bare-metal VMX root execution telemetry displaying CR0/CR3/CR4 register configurations, EPT paging tables, and VMCS pointers.",
    forensicData: "VMLAUNCH SUCCESS (CF=0, ZF=0); Exit Reason 0x0A (CPUID) handled; SLAT paging online."
  },
  {
    id: "desktop-active",
    title: "Native Desktop Shell & Task Panel",
    category: "Desktop",
    hardware: "UEFI Linear Framebuffer (2560x1600)",
    date: "2026-09-05",
    filename: "screen_desktop_active.png",
    image: "/proofs/screen_desktop_active.png",
    description: "Active ATOMS desktop shell running custom taskbar, start menu button, system clock, and application windows through the BCM compositor.",
    forensicData: "Double-buffered linear GOP framebuffer, hardware cursor plane overlay, 60 FPS frame pacing."
  },
  {
    id: "nvme-ntfs",
    title: "ASUS B760M-K NVMe Gen4 + NTFS Partition Validation",
    category: "Storage",
    hardware: "ASUS B760M-K + WD Blue SN5000 NVMe",
    date: "2026-09-05",
    filename: "asus_b750mk_nvme_ntfs_validation.png",
    image: "/proofs/asus_b750mk_nvme_ntfs_validation.png",
    description: "Verification screen confirming NVMe Admin Queue creation, Submission/Completion ring doorbell dispatch, and NTFS volume mounting.",
    forensicData: "NVMe 1.4 controller initialized via PCIe MMIO BAR; GPT table parsed; NTFS $MFT successfully read."
  },
  {
    id: "phase10-bosx",
    title: "Phase 10 BOSX Execution & Process Lifecycle",
    category: "Userspace",
    hardware: "QEMU Pre-Flight & H81 Silicon",
    date: "2026-09-05",
    filename: "phase10_bosx_dashboard.png",
    image: "/proofs/phase10_bosx_dashboard.png",
    description: "Telemetry dashboard capturing SYS_EXEC syscall dispatch, VFS->BOFS->VMM Ring 3 binary mapping, W^X enforcement, and clean process exit.",
    forensicData: "PML4 user address mapping [0x40000000, 0x80000000); 32KB kernel stack swapgs safety verified."
  },
  {
    id: "vmm-screen",
    title: "VMM 4-Level Paging & Memory Allocation Screen",
    category: "Memory",
    hardware: "Intel Core i3-4130 / i3-14100F",
    date: "2026-09-04",
    filename: "vmm_screen.png",
    image: "/proofs/vmm_screen.png",
    description: "Visual trace of PML4, PDPT, PD, and PT table walks, demonstrating zero-leak ownership-aware address space reclamation.",
    forensicData: "100-cycle process spawn/reap test: exactly 0 pages leaked (baseline 7,639,611 = ending 7,639,611)."
  },
  {
    id: "login-screen",
    title: "Rook Login Supervisor & Lockscreen",
    category: "Desktop",
    hardware: "Pure UEFI GOP Framebuffer",
    date: "2026-09-03",
    filename: "screen_login.png",
    image: "/proofs/screen_login.png",
    description: "ATOMS OS Rook login supervisor with translucent clock, custom background wallpaper rendering, and password capsule.",
    forensicData: "Direct GOP linear blit; TrueType vector font rendering; smooth alpha-composited clock widget."
  },
  {
    id: "usb-e2e",
    title: "Native xHCI USB 3.0 Real Controller E2E",
    category: "Drivers",
    hardware: "xHCI 1.0+ Controller",
    date: "2026-09-05",
    filename: "qemu_usb_real_e2e.png",
    image: "/proofs/qemu_usb_real_e2e.png",
    description: "End-to-end trace of xHCI 1024-TRB transfer ring, USB HID keyboard keystroke dequeue, and mouse pointer delta dispatch.",
    forensicData: "200/200 ACK lock LED sync; Event Ring Dequeue Pointer (ERDP) successfully updated without bus hang."
  },
  {
    id: "virtio-network-card",
    title: "Paravirtualized VirtIO-Net Device Telemetry",
    category: "Network",
    hardware: "VirtIO PCI 00:02.0",
    date: "2026-09-24",
    filename: "forensic_virtio_network.png",
    image: "/proofs/forensic_virtio_network.png",
    description: "Detailed hardware probe of VirtIO-Net paravirtualized network controller registering MAC address 52:54:00:12:34:56.",
    forensicData: "PCI Device 0x1AF4:0x1000; GSI 11 INT#A VirtIO ISR Pin; Carrier synchronized."
  }
];

// Architectural Roadmap & Stability Matrix
export const STABILITY_MATRIX = [
  { subsystem: "Pure UEFI Bootloader (GOP)", tier: "Core Kernel", status: "STABLE", path: "bootloader/" },
  { subsystem: "Physical Memory Manager (PMM)", tier: "Core Kernel", status: "STABLE", path: "kernel/core/memory/pmm/" },
  { subsystem: "Virtual Memory Manager (VMM 4-Level)", tier: "Core Kernel", status: "STABLE", path: "kernel/core/memory/vmm/" },
  { subsystem: "Kernel Heap (kmalloc/kfree)", tier: "Core Kernel", status: "STABLE", path: "kernel/core/memory/heap/" },
  { subsystem: "SMP Multi-Core Topology (MADT)", tier: "Core Kernel", status: "STABLE", path: "kernel/core/smp/" },
  { subsystem: "Hardware Fast Syscall (LSTAR)", tier: "Core Kernel", status: "STABLE", path: "kernel/core/syscall/" },
  { subsystem: "ABDE Diagnostic Engine", tier: "Core Kernel", status: "STABLE", path: "kernel/debug/abde/" },
  { subsystem: "Intel xHCI 1.2 USB 3.0 Driver", tier: "Hardware Drivers", status: "STABLE", path: "kernel/drivers/usb/host/xhci/" },
  { subsystem: "USB HID Keyboard & Mouse (200/200 ACK)", tier: "Hardware Drivers", status: "STABLE", path: "kernel/drivers/usb/class/" },
  { subsystem: "NVMe Gen4 PCIe SSD Driver", tier: "Hardware Drivers", status: "ACTIVE", path: "kernel/drivers/storage/nvme/" },
  { subsystem: "AHCI SATA Controller Driver", tier: "Hardware Drivers", status: "ACTIVE", path: "kernel/drivers/storage/ahci/" },
  { subsystem: "Intel E1000 Gigabit PCIe NIC", tier: "Hardware Drivers", status: "ACTIVE", path: "kernel/drivers/net/e1000/" },
  { subsystem: "Realtek RTL8168 Gigabit PCIe NIC", tier: "Hardware Drivers", status: "ACTIVE", path: "kernel/drivers/net/r8168/" },
  { subsystem: "Realtek RTL8125 2.5GbE Driver", tier: "Hardware Drivers", status: "EXPERIMENTAL", path: "realtek-r8125-dkms/" },
  { subsystem: "Intel HDA & AC97 Audio Stack", tier: "Hardware Drivers", status: "ACTIVE", path: "kernel/drivers/audio/" },
  { subsystem: "BOFS Transactional WAL Filesystem", tier: "Filesystems", status: "ACTIVE", path: "kernel/vfs/" },
  { subsystem: "16-Phase Enterprise NTFS Driver Suite", tier: "Filesystems", status: "ACTIVE", path: "drivers/storage/ & docs/" },
  { subsystem: "AGDAE & BCM Double-Buffered Compositor", tier: "Graphics & UI", status: "ACTIVE", path: "kernel/wm/bcm/ & kernel/shell/" },
  { subsystem: "Intel VT-x Type-1 Hypervisor (v2.7.0)", tier: "Virtualization", status: "ACTIVE", path: "kernel/core/hypervisor/" },
  { subsystem: "FreeBSD Guest Virtualization Mode", tier: "Virtualization", status: "EXPERIMENTAL", path: "kernel/core/hypervisor/" },
  { subsystem: "Phase 10 ATOMS SLL Engine", tier: "Userspace Runtimes", status: "ACTIVE", path: "kernel/core/sll/" },
  { subsystem: "Userspace Native .sll Layer (11 libs)", tier: "Userspace Runtimes", status: "ACTIVE", path: "userspace/libs/" },
  { subsystem: "JVM JIT Bytecode Adapter", tier: "Foreign Runtimes", status: "ACTIVE", path: "userspace/runtime/jvm_adapter/" },
  { subsystem: "Native Doom Port (DOOM.BOSX)", tier: "Applications", status: "ACTIVE", path: "doom/" },
  { subsystem: "ATRIX Browser (Blink DOM & V8 Port)", tier: "Web Platform", status: "EXPERIMENTAL", path: "browser/" },
  { subsystem: "Native AMD Radeon & Nvidia GPU Drivers", tier: "Hardware Drivers", status: "BLUEPRINT", path: "docs/architecture/" },
  { subsystem: "Multi-Core AP User Process Scheduling", tier: "Core Kernel", status: "BLUEPRINT", path: "docs/architecture/" },
  { subsystem: "64-bit Dynamic Position-Independent Relocation", tier: "Core Kernel", status: "BLUEPRINT", path: "docs/architecture/" }
];

export const GENESIS_HISTORY = [
  {
    commit: "77edbab",
    date: "2026-06-20",
    author: "Saumya25-hub <saumyachaudhari25@outlook.com>",
    title: "Boot sequence successfully transitions through Long Mode",
    phase: "Genesis (Day 1)",
    description: "The foundational commit of ATOMS OS. Wrote custom assembly bootloader stub, established 64-bit page tables, loaded GDT, and executed the historic long jump into 64-bit Long Mode.",
    verifiedAuthor: "Saumya Chaudhari"
  },
  {
    commit: "8af84f9",
    date: "2026-06-20",
    author: "Saumya25-hub",
    title: "Port IO & VGA Console Backend",
    phase: "Phase 6",
    description: "Implemented low-level inb/outb port I/O wrappers, basic text-mode console manager, and direct video memory writing.",
    verifiedAuthor: "Saumya Chaudhari"
  },
  {
    commit: "2ee9d93",
    date: "2026-06-20",
    author: "Saumya25-hub",
    title: "IDT & ISR Exception Manager Implementation",
    phase: "Phase 7",
    description: "Constructed 256-descriptor Interrupt Descriptor Table (IDT), 32 CPU exception handlers, and remapped the legacy 8259 PIC controller to avoid hardware vector collision.",
    verifiedAuthor: "Saumya Chaudhari"
  },
  {
    commit: "651b5db",
    date: "2026-06-20",
    author: "Saumya25-hub",
    title: "Physical Memory Manager (PMM) Implementation",
    phase: "Phase 10",
    description: "Engineered linear bitmap frame allocator capable of tracking all physical RAM frames. Implemented pmm_alloc_page and pmm_free_page with double-free protection.",
    verifiedAuthor: "Saumya Chaudhari"
  },
  {
    commit: "133c27b",
    date: "2026-06-20",
    author: "Saumya25-hub",
    title: "VMM Bring-Up: CR3, PML4, & Virtual Page Mapping",
    phase: "Phase 11",
    description: "Initialized 4-level PML4 paging, implemented read-only page table walking, and mapped the first virtual page to physical memory.",
    verifiedAuthor: "Saumya Chaudhari"
  },
  {
    commit: "792e7c8",
    date: "2026-06-20",
    author: "Saumya25-hub",
    title: "Kernel Heap: kmalloc & kfree Implementation",
    phase: "Phase 12",
    description: "Built Stage A block-based kernel heap allocator backed by PMM physical pages for dynamic kernel data structures.",
    verifiedAuthor: "Saumya Chaudhari"
  },
  {
    commit: "1c7ddc3",
    date: "2026-09-13",
    author: "Saumya Chaudhari",
    title: "Formal Project Identity & MIT License",
    phase: "Governance",
    description: "Solidified ATOMS OS project identity as an independent bare-metal OS, published MIT License, and formalized engineering protocols.",
    verifiedAuthor: "Saumya Chaudhari"
  },
  {
    commit: "4b2e46d",
    date: "2026-09-21",
    author: "Saumya25-hub",
    title: "Certify Physical Intel VT-x VM-Entry on LGA1700 Silicon",
    phase: "Hypervisor Phase",
    description: "Achieved bare-metal VMLAUNCH into VMCS guest on real Intel Core i3-14100F hardware with clean VM-exit handling over 500,000 cycles.",
    verifiedAuthor: "Saumya Chaudhari"
  },
  {
    commit: "48bc2bd",
    date: "2026-09-24",
    author: "Saumya25-hub",
    title: "Kernel v2.7.0-vmx-stable: Bare-Metal VT-x & xHCI Input Pipeline",
    phase: "Current Stable Release",
    description: "Unified Type-1 micro-hypervisor, native xHCI USB 3.0 controller, and BCM desktop compositor into master certified baseline.",
    verifiedAuthor: "Saumya Chaudhari"
  }
];

export const CERTIFICATION_MATRIX = [
  { subsystem: "Pure UEFI Boot", target: "Haswell H81 & B760M-K", status: "CERTIFIED PASS", evidence: "bootx64.c, CPU_ENGINE_CERTIFICATION.md" },
  { subsystem: "CPU Topology & MADT", target: "8 Logical Cores (14100F)", status: "CERTIFIED PASS", evidence: "smp.c, SMP_ENGINE_CERTIFICATION.md" },
  { subsystem: "GDT & TSS RSP0 Sync", target: "Per-CPU TSS (tss_cpus[8])", status: "CERTIFIED PASS", evidence: "SYSCALL_TSS_SMP_FORENSIC_CERTIFICATION.md" },
  { subsystem: "IDT & 32 Exceptions", target: "256 Gates, PIC 0x20/0x28", status: "CERTIFIED PASS", evidence: "IDT_ENGINE_CERTIFICATION.md" },
  { subsystem: "PMM Frame Allocator", target: "32 GB RAM (8.3M Frames)", status: "CERTIFIED PASS (0 Drift)", evidence: "PMM_FORENSIC_AUDIT.md (1,920 cycles)" },
  { subsystem: "VMM 4-Level Paging", target: "PML4 Recursion & W^X", status: "CERTIFIED PASS (0 Leak)", evidence: "VMM_MEMORY_LIFECYCLE_CERTIFICATION.md" },
  { subsystem: "Kernel Heap (kmalloc)", target: "H81 Bare Metal", status: "CERTIFIED PASS", evidence: "HEAP_HARDWARE_CERTIFICATION_H81.md" },
  { subsystem: "Fast Syscall (LSTAR)", target: "IA32_LSTAR Hardware Trap", status: "CERTIFIED PASS", evidence: "600-cycle stress pass, validation.c" },
  { subsystem: "xHCI USB 3.0 Host", target: "1024-TRB Transfer Rings", status: "CERTIFIED PASS", evidence: "INPUT_POWER_CONTROLLER_FORENSIC_AUDIT.md" },
  { subsystem: "USB HID Keyboard/Mouse", target: "200/200 ACK Lock LEDs", status: "CERTIFIED PASS", evidence: "USB_HID_KEYBOARD_LED_FORENSIC_AUDIT.md" },
  { subsystem: "NVMe Gen4 Storage", target: "ASUS B760M-K + SN5000", status: "CERTIFIED PASS", evidence: "ASUS_B750MK_NVME_GPT_NTFS_CERTIFICATION.md" },
  { subsystem: "BOFS / VFS Storage", target: "FAT32 + NTFS Read-Only", status: "CERTIFIED PASS (0 Leak)", evidence: "VFS_UNMOUNT_LIFECYCLE_CERTIFICATION.md" },
  { subsystem: "Intel VT-x Hypervisor", target: "Physical Core i3-14100F", status: "CERTIFIED PASS", evidence: "ATOMS_VMX_HARDWARE_CERTIFICATION.md (500k+ exits)" },
  { subsystem: "Realtek RTL8125 2.5GbE", target: "ASUS B760M-K (Phase 5A)", status: "CERTIFIED PASS", evidence: "2.5G Carrier Link Up, MAC A0:AD:9F:C5:81:27" },
  { subsystem: "Phase 10 SLL Engine", target: "Dynamic Linking Subsystem", status: "CERTIFIED PASS", evidence: "sll_manager.c, Reference Counting & Export Tables" },
  { subsystem: "ABDE Diagnostic Engine", target: "Live Heartbeat Spinner", status: "CERTIFIED PASS", evidence: "abde_core.c, Real-time serial + HUD" }
];

export const OPEN_SOURCE_ATTRIBUTIONS = [
  {
    component: "UEFI Specification 2.10",
    source: "UEFI Forum",
    role: "Standard firmware specification for GOP video and ExitBootServices handoff protocols.",
    attributionType: "Industry Standard Specification"
  },
  {
    component: "Intel 64 and IA-32 Architectures SDM",
    source: "Intel Corporation",
    role: "Canonical technical manuals for Long Mode, Paging, VT-x/VMX, and MSR registers.",
    attributionType: "Hardware Architecture Specification"
  },
  {
    component: "LLVM / Clang & LLD",
    source: "LLVM Project (Apache 2.0 with LLVM Exception)",
    role: "Modern compiler toolchain compiling the C kernel and userspace binaries into pure 64-bit ELF.",
    attributionType: "Build Toolchain"
  },
  {
    component: "NASM (Netwide Assembler)",
    source: "NASM Authors (2-Clause BSD)",
    role: "x86_64 assembler compiling kernel entry stubs, AP trampolines, and syscall handlers.",
    attributionType: "Assembler Toolchain"
  },
  {
    component: "QEMU & OVMF (edk2)",
    source: "QEMU Team & TianoCore Project",
    role: "Pre-flight virtual validation emulator and reference UEFI firmware before flashing bare-metal USB.",
    attributionType: "Pre-Flight Emulation & Test Firmware"
  },
  {
    component: "Capstone Engine",
    source: "Nguyen Anh Quynh (BSD License)",
    role: "Disassembly engine utilized for forensic stack inspection and register trace decoding.",
    attributionType: "Diagnostic Library"
  },
  {
    component: "musl libc & Chromium Prototype Bindings",
    source: "musl libc authors & Chromium Project (BSD-style)",
    role: "Evaluated during experimental userspace libc and Web runtime feasibility audits.",
    attributionType: "Experimental Prototype Reference"
  }
];
