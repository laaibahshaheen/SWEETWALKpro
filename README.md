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

  FSR Pressure Sensors
                 │
        DS18B20 Temperature
                 │
             MPU6050
                 │
                 ▼
              ESP32
                 │
            BLE Communication
                 │
                 ▼
          Mobile / Web App
                 │
             REST API
                 │
                 ▼
        Python + FastAPI
                 │
        ┌────────┴────────┐
        │                 │
   Risk Analysis       Database
        │                 │
        └────────┬────────┘
                 ▼
        SweetWalk Dashboard
                 │
       ┌─────────┼─────────┐
       ▼         ▼         ▼
    Heatmap    Alerts    Analytics
