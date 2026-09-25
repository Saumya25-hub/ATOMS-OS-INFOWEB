# ATOMS OS — Official Information Portal & Forensic Web Evidence

> **Official Website Repository**: [https://github.com/Saumya25-hub/ATOMS-OS-INFOWEB](https://github.com/Saumya25-hub/ATOMS-OS-INFOWEB)  
> **Core Operating System Repository**: [https://github.com/Saumya25-hub/Atoms-OS](https://github.com/Saumya25-hub/Atoms-OS)  
> **Author & Creator**: **Saumya Chaudhari** ([@Saumya25-hub](https://github.com/Saumya25-hub) / [u/Saumya-25](https://www.reddit.com/user/Saumya-25/))  
> **License**: [MIT License](LICENSE)  

---

## 1. Project Overview

This repository hosts the official information portal for **ATOMS OS**, an independent, custom 64-bit bare-metal operating system engineered from scratch in C and x86_64 Assembly by solo systems developer **Saumya Chaudhari**.

The website is designed with a clean, high-craft **OS Developer aesthetic** (monochrome dark theme, live ABDE diagnostic telemetry terminal, interactive hardware probes, and authenticated screenshot evidence). It contains zero vaporware, zero fake hopes, and transparent attribution for all open-source toolchains and industry specifications.

---

## 2. Key Sections & Architecture

- **Live Forensic Telemetry HUD**: Interactive simulation of the kernel's on-screen Advanced Bare-Metal Diagnostic Engine (ABDE) with rotating heartbeat spinner (`| / - \`), register dumps (`%CR0`, `%CR3`, `%CR4`, `%LSTAR`, `%RSP0`), and zero-drift memory gauges.
- **Architectural Catalog (8 Tiers)**:
  - *Core Engines*: Type-1 Hypervisor, Two-Tier Memory (PMM/VMM), Fast Syscall Gateway, BOFS Transactional Filesystem, AGDAE/BCM Compositor, Network Stack, ABDE Diagnostics.
  - *14 Hardware Drivers*: Intel xHCI 1.2 USB 3.0, USB HID Keyboard/Mouse (200/200 ACK), NVMe Gen4 PCIe SSD, AHCI SATA, Intel E1000, Realtek RTL8168, Realtek RTL8125 2.5GbE, Intel HDA, AC97, HPET/PIT, RTC, ACPI, VirtIO Suite, UEFI GOP.
  - *Native .sll Runtimes (11 Libraries)*: Phase 10 SLL Engine (`sll_manager.c`) powering `KERNEL32.sll`, `USER32.sll`, `GDI32.sll`, `WS2_32.sll`, `ADVAPI32.sll`, `SHELL32.sll`, `COMCTL32.sll`, `COMDLG32.sll`, `OLE32.sll`, `OPENGL32.sll`, and `BOSLL.sll` directly on BOS syscalls (Zero Windows DLLs).
  - *16-Phase Enterprise NTFS Driver Suite*: $MFT parser, B-tree index allocation, data runlist decompression, and transaction logging.
  - *Roadmap & Stability Matrix (28 Subsystems)*: Forensic classification across STABLE, ACTIVE, EXPERIMENTAL (ATRIX Chromium browser, RTL8125, FreeBSD guest), and BLUEPRINT (AMD/Nvidia GPUs, AP scheduling).
- **Forensic Hardware Proof Gallery (17 Verified Artifacts)**: Real photograph captures of physical monitors running Intel VT-x and RTL8125 on LGA1700 silicon, plus high-res direct framebuffer telemetry.
- **Genesis & Day 1 Commit History**: Full documentation of the initial commit (`77edbab` on June 20, 2026: `feat: Boot sequence successfully transitions through Long Mode`) authored by Saumya Chaudhari.
- **Updates & Formal Certification Matrix**: Binary PASS/FAIL records across all 16 kernel subsystems.
- **Engineering Protocol & Open-Source Integrity**: The technical manifesto explaining why operating systems cannot be "vibe-coded" and explicit attribution of external specifications (UEFI, Intel SDM, LLVM, NASM, QEMU, Capstone).
- **Creator Profile & Canonical Attribution**: Permanent record establishing Saumya Chaudhari as the sole author and architect.
- **Feedback & Bug Tracker**: Interactive feedback form with direct community links to Reddit (`u/Saumya-25`) and GitHub Issues.

---

## 3. Local Development

```bash
# Clone the repository
git clone https://github.com/Saumya25-hub/ATOMS-OS-INFOWEB.git
cd ATOMS-OS-INFOWEB

# Install dependencies
npm install

# Start local development server
npm run dev

# Build production bundle
npm run build
```

---

## 4. Canonical Ownership & License

Copyright © 2026 **Saumya Chaudhari**. Released under the [MIT License](https://opensource.org/licenses/MIT).
