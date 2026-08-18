export let colors = [
  "#7c3aed",
  "#8b5cf6",
  "#a78bfa",
  "#6d28d9",
];

export const info = {
  firstName: "Akshay",
  lastName: "Nayee",
  initials: "AK",
  linkedin: "https://www.linkedin.com/in/akshaynayee1/",
  instagram: "https://www.instagram.com/aakkii01",
  github: "https://github.com/akshaynayee1",

  position: [
    "Embedded Software Engineer",
    "Firmware & RTOS Engineer",
    "Automotive ECU Software Engineer",
    "Bare-Metal Systems Developer",
  ],

  gradient: `-webkit-linear-gradient(135deg, ${colors[0]}, ${colors[2]})`,
  baseColor: colors[0],

  miniBio: [
    {
      emoji: "📍",
      text: "Erie, PA, USA",
    },
    {
      emoji: "💼",
      text: "Embedded Software Engineer @ Microchip Technology",
    },
    {
      emoji: "🎓",
      text: "MS in Computer & Information Science · Gannon University",
    },
    {
      emoji: "⚙️",
      text: "Embedded C · C++ · FreeRTOS · ARM Cortex-M · CAN-FD",
    },
  ],

  socials: [
    {
      link: "https://github.com/akshaynayee1",
      icon: "fa fa-github",
      label: "GitHub",
    },
    {
      link: "https://www.linkedin.com/in/akshaynayee1/",
      icon: "fa fa-linkedin",
      label: "LinkedIn",
    },
  ],

  bio:
    "I wrote my first line of code at 17 in a small town in Gujarat — just curious to see what would happen. That curiosity turned into a 6+ year career writing software that talks directly to hardware, across semiconductor, automotive, and industrial domains in two countries. Today I'm at Microchip Technology, architecting bare-metal and FreeRTOS firmware for ARM Cortex-M silicon — chasing microamps and microseconds. I've shipped automotive ECU stacks under AUTOSAR and ISO 26262, industrial control loops with sub-10ms latency, and secure IoT edge devices. I'm happiest with a logic analyzer in one hand and a datasheet in the other.",

  skills: {
    proficientWith: [
      "Embedded C",
      "Modern C++ (C++14/17)",
      "ARM Cortex-M (STM32, NXP S32K, TI Tiva/MSP430)",
      "Bare-Metal Development",
      "Board Bring-Up",
      "FreeRTOS",
      "Zephyr RTOS",
      "Low-Level Drivers (SPI, I2C, UART, CAN-FD)",
      "Custom Bootloaders",
      "DMA Transfers",
      "Power State Management",
      "AUTOSAR Classic (MCAL, BSW, RTE)",
      "UDS Diagnostics (ISO 14229)",
      "ISO-TP (ISO 15765-2)",
      "MISRA-C:2012",
      "ISO 26262 (ASIL A–D)",
      "JTAG/SWD Debugging (J-Link, ST-Link)",
      "Vector CANoe / CANape",
      "Python (Test Automation)",
      "Git · GitHub Actions · GitLab CI/CD",
    ],
    exposedTo: [
      "AUTOSAR OS",
      "Embedded Linux (Device Tree, Yocto)",
      "RISC-V",
      "ESP32",
      "Infineon Aurix TC3xx",
      "Microchip PIC/dsPIC/SAM",
      "LIN · FlexRay",
      "Automotive Ethernet (100BASE-T1/DoIP)",
      "Static Analysis (Coverity, PC-Lint, SonarQube)",
      "Unit Testing (GoogleTest, Unity, CMock)",
      "Keil µVision · IAR · STM32CubeIDE",
      "Docker (embedded build environments)",
    ],
  },

  experience: [
    {
      company: "Microchip Technology",
      title: "Embedded Software Engineer",
      duration: "Jan 2025 – Present",
      location: "USA",
      bullets: [
        "Architect and deploy production firmware for ARM Cortex-M based microcontrollers, configuring custom low-power states and clock trees to reduce active current consumption by 22% across multi-sensor evaluation hardware platforms.",
        "Develop robust bare-metal and FreeRTOS peripheral device drivers for SPI, I2C, UART, and CAN-FD interfaces, eliminating critical bus contention and decreasing hardware integration issues by 25% during prototype validation phases.",
        "Lead board bring-up initiatives, memory mapping, and bootloader integration for next-generation silicon reference boards, accelerating hardware bring-up schedules by 20% while ensuring complete functional validation across all operating temperature ranges.",
        "Conduct complex root-cause failure analysis using JTAG, logic analyzers, and digital oscilloscopes, isolating challenging hardware-firmware timing anomalies to decrease average customer-reported defect resolution turnaround from four days to two days.",
        "Collaborate closely with silicon validation, applications, and system test engineering teams to author comprehensive technical notes, firmware application guides, and driver APIs, driving an 18% improvement in customer developer adoption rates.",
      ],
    },
    {
      company: "Tata Elxsi",
      title: "Embedded Software Engineer – Automotive",
      duration: "Jan 2022 – Jul 2023",
      location: "India",
      bullets: [
        "Implemented and validated AUTOSAR Classic BSW modules, MCAL drivers, and RTE interfaces for automotive body control ECUs, enabling reliable multi-node CAN and LIN communication across 14 vehicle control subsystems.",
        "Configured and simulated automotive CAN-FD stacks using Vector CANoe, CANape, and CANdelaStudio, authoring specialized CAPL test scripts to reduce pre-integration network communication defects by 24% prior to system-level vehicle testing.",
        "Designed and integrated standardized UDS (ISO 14229) diagnostic services and ISO-TP transport layers, enabling real-time fault identification and reducing diagnostic troubleshooting time on bench testing setups by approximately 28%.",
        "Enforced strict MISRA-C:2012 compliance and static code quality standards using Coverity, refactoring legacy firmware codebases to eliminate over 30% of critical safety warnings before formal OEM functional quality audits.",
        "Supported ISO 26262 functional safety documentation and requirement traceability up to ASIL-B, executing thorough unit and integration testing workflows to guarantee timely delivery for two major international production vehicle platforms.",
      ],
    },
    {
      company: "L&T Technology Services",
      title: "Embedded System Engineer",
      duration: "Jan 2019 – Dec 2021",
      location: "India",
      bullets: [
        "Developed interrupt-driven bare-metal C firmware on ARM Cortex-M microcontrollers for industrial automation units, maintaining deterministic sensor acquisition and actuator control loops with response latency strictly bounded under 8 milliseconds.",
        "Programmed low-level hardware drivers for high-speed ADC, DAC, PWM, and UART peripherals, optimizing DMA data transfer pipelines to reduce CPU processing overhead by 20% in high-throughput industrial monitoring environments.",
        "Integrated robust CAN 2.0 communication protocols for distributed industrial controller networks, implementing error-handling and data validation routines that lowered packet transmission drop rates by 16% in noisy factory installations.",
        "Executed board-level hardware debugging, signal integrity analysis, and power rail measurements using digital storage oscilloscopes and logic analyzers, successfully delivering three client pilot hardware deployments on schedule with zero critical faults.",
        "Optimized embedded firmware memory footprint through stack and heap profiling, reducing Flash utilization by 18% and SRAM consumption by 15% to ensure seamless operation on highly resource-constrained microcontrollers.",
      ],
    },
  ],

  education: [
    {
      level: "Masters",
      degree: "Master of Science – Computer & Information Science",
      school: "Gannon University",
      location: "PA, USA",
      duration: "Aug 2023 – May 2025",
    },
    {
      level: "Bachelors",
      degree: "Bachelor of Technology in Computer Engineering",
      school: "Gujarat Technological University",
      location: "India",
      duration: "July 2017 – July 2020",
    },
    {
      level: "Diploma",
      degree: "Diploma of Technology in Computer Engineering",
      school: "Gujarat Technological University",
      location: "India",
      duration: "June 2014 – June 2017",
    },
  ],

  certifications: [
    { name: "AWS Certified Cloud Practitioner", url: "https://www.credly.com/badges/3c04e1ec-8ffc-43e1-8a20-011252cc5e3b/linked_in_profile" },
    { name: "Python Django Full Stack", url: "https://www.udemy.com/certificate/UC-b3d1acf0-16a5-4b5f-9099-6ab89ffa8d6c/" },
    { name: "Programming for Everybody (Getting Started with Python)", url: "https://coursera.org/share/a0bebe3aebeefbe611bac31ca2d70897" },
    { name: "Software Engineer", url: "https://www.hackerrank.com/certificates/e709ebf72e97" },
    { name: "Python", url: "https://www.hackerrank.com/certificates/94cc5bea47d7" },
  ],

};
