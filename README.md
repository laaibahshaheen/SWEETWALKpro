# SweetWalk 👣

### Smart Insole for Early Diabetic Foot Risk Monitoring

SweetWalk is a smart insole-based healthcare monitoring system designed to continuously monitor important foot-health parameters such as plantar pressure, temperature, and gait patterns.

The system aims to identify potentially abnormal patterns early and provide understandable risk insights through a digital dashboard.

> **Note:** SweetWalk is a prototype for monitoring and decision support. It is not intended to independently diagnose diabetic foot ulcers.

---

## 🚨 Problem

People with diabetes can develop peripheral neuropathy, which can reduce protective sensation in the feet.

Because of reduced sensation, abnormal pressure, prolonged loading, or localized temperature changes may go unnoticed.

Repeated abnormal loading can contribute to foot complications.

SweetWalk addresses this problem through continuous wearable monitoring.

---

## 💡 Our Solution

SweetWalk integrates:

- Pressure sensing
- Temperature monitoring
- Motion/gait sensing
- Wireless communication
- Backend data processing
- Risk analysis
- Interactive visualization

The system converts raw sensor readings into understandable information such as pressure distribution, temperature trends, risk levels, and alerts.

---

## 🏗️ System Architecture


┌──────────────────────────────────────────────┐
│              SMART INSOLE                    │
│                                              │
│  4× FSR     DS18B20       MPU6050           │
│ Pressure    Temperature   Motion/Gait        │
└──────────────────────┬───────────────────────┘
                       │
                       ▼
┌──────────────────────────────────────────────┐
│              ESP32 WROOM-32                  │
│                                              │
│  Acquisition • Filtering • Calibration       │
│  Data Packaging • Device Management          │
└──────────────────────┬───────────────────────┘
                       │
                       │ BLE
                       ▼
┌──────────────────────────────────────────────┐
│           MOBILE / GATEWAY LAYER             │
│                                              │
│       Receives & forwards sensor data         │
└──────────────────────┬───────────────────────┘
                       │
                    REST API
                       │
                       ▼
┌──────────────────────────────────────────────┐
│           FASTAPI BACKEND                    │
│                                              │
│ Validation • Processing • Storage • Alerts   │
└──────────────────────┬───────────────────────┘
                       │
                       ▼
┌──────────────────────────────────────────────┐
│          RISK & ANALYTICS ENGINE             │
│                                              │
│ Pressure + Temperature + Gait + History      │
│                    ↓                         │
│         Abnormal Pattern Detection           │
└──────────────────────┬───────────────────────┘
                       │
                       ▼
┌──────────────────────────────────────────────┐
│             SWEETWALK UI                     │
│                                              │
│  🦶 Heatmap   📊 Analytics   ⚠ Alerts        │
│  🌡 Temp      📈 Trends      ❤️ Risk Score   │
└──────────────────────────────────────────────┘
