export type Severity = 'high' | 'medium' | 'low';

export const patient = {
  name: 'Laaibah',
  initials: 'L',
  score: 92,
  risk: 24,
  temperature: 36.8,
  battery: 92,
  steps: 4821,
  walkingDuration: 47,
  heelPressure: 42,
  forefootPressure: 38,
};

export const sensorZones = [
  { id: 'heel', label: 'Heel', value: 42, heat: 'medium', duration: '12 min', status: 'Within range', x: 50, y: 83 },
  { id: 'first-met', label: '1st metatarsal', value: 51, heat: 'high', duration: '8 min', status: 'Elevated', x: 60, y: 51 },
  { id: 'fifth-met', label: '5th metatarsal', value: 27, heat: 'low', duration: '5 min', status: 'Within range', x: 36, y: 48 },
  { id: 'big-toe', label: 'Big toe', value: 18, heat: 'low', duration: '3 min', status: 'Within range', x: 61, y: 18 },
] as const;

export const pressureData = [
  { time: '08:00', heel: 32, forefoot: 28, average: 30 },
  { time: '08:15', heel: 39, forefoot: 34, average: 36 },
  { time: '08:30', heel: 42, forefoot: 38, average: 40 },
  { time: '08:45', heel: 37, forefoot: 44, average: 41 },
  { time: '09:00', heel: 47, forefoot: 42, average: 45 },
  { time: '09:15', heel: 42, forefoot: 38, average: 40 },
  { time: '09:30', heel: 35, forefoot: 31, average: 33 },
  { time: '09:45', heel: 40, forefoot: 35, average: 38 },
];

export const temperatureData = [
  { time: '08:00', temperature: 36.5 }, { time: '08:15', temperature: 36.6 },
  { time: '08:30', temperature: 36.8 }, { time: '08:45', temperature: 36.7 },
  { time: '09:00', temperature: 36.9 }, { time: '09:15', temperature: 36.8 },
  { time: '09:30', temperature: 36.7 }, { time: '09:45', temperature: 36.8 },
];

export const activityData = [
  { time: '08:00', steps: 420 }, { time: '08:15', steps: 690 },
  { time: '08:30', steps: 520 }, { time: '08:45', steps: 880 },
  { time: '09:00', steps: 760 }, { time: '09:15', steps: 640 },
  { time: '09:30', steps: 510 }, { time: '09:45', steps: 401 },
];

export const riskTrend = [
  { time: 'Mon', risk: 31 }, { time: 'Tue', risk: 27 }, { time: 'Wed', risk: 29 },
  { time: 'Thu', risk: 26 }, { time: 'Fri', risk: 24 }, { time: 'Sat', risk: 25 }, { time: 'Sun', risk: 24 },
];

export const alerts = [
  { id: 'a1', title: 'High pressure detected', timestamp: 'Today, 09:14', severity: 'medium' as Severity, region: 'Right heel', explanation: 'Heel pressure remained above baseline for 8 minutes.', action: 'Shift weight and take a short rest.' },
  { id: 'a2', title: 'Temperature change', timestamp: 'Yesterday, 18:42', severity: 'low' as Severity, region: 'Left forefoot', explanation: 'Localized temperature increased compared with baseline.', action: 'Continue monitoring during your next walk.' },
  { id: 'a3', title: 'Prolonged loading', timestamp: 'Yesterday, 13:08', severity: 'medium' as Severity, region: 'Right forefoot', explanation: 'Loading duration was longer than your usual pattern.', action: 'Review the activity trend with your care team.' },
  { id: 'a4', title: 'Sensor check completed', timestamp: 'Monday, 10:21', severity: 'low' as Severity, region: 'All sensors', explanation: 'A routine connection check completed successfully.', action: 'No action needed.' },
];

export const historyByRange = {
  Today: {
    pressure: pressureData,
    temperature: temperatureData,
    risk: riskTrend,
    steps: activityData.map((item) => ({ time: item.time, steps: item.steps })),
    summary: [['Average temperature', '36.7°C'], ['Peak pressure', '51%'], ['Total steps', '4,821'], ['High-risk events', '0']],
  },
  '7 Days': {
    pressure: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'].map((time, i) => ({ time, average: [34, 37, 32, 41, 38, 36, 35][i], heel: [38, 42, 36, 47, 43, 40, 42][i], forefoot: [31, 33, 29, 39, 35, 33, 38][i] })),
    temperature: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'].map((time, i) => ({ time, temperature: [36.6, 36.7, 36.5, 36.8, 36.9, 36.7, 36.8][i] })),
    risk: riskTrend,
    steps: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'].map((time, i) => ({ time, steps: [4200, 5100, 3890, 6020, 4821, 4410, 5300][i] })),
    summary: [['Average temperature', '36.7°C'], ['Peak pressure', '54%'], ['Total steps', '33,741'], ['High-risk events', '1']],
  },
  '30 Days': {
    pressure: ['W1', 'W2', 'W3', 'W4'].map((time, i) => ({ time, average: [36, 39, 35, 37][i], heel: [41, 45, 40, 42][i], forefoot: [32, 35, 31, 34][i] })),
    temperature: ['W1', 'W2', 'W3', 'W4'].map((time, i) => ({ time, temperature: [36.6, 36.8, 36.7, 36.8][i] })),
    risk: ['W1', 'W2', 'W3', 'W4'].map((time, i) => ({ time, risk: [32, 28, 26, 24][i] })),
    steps: ['W1', 'W2', 'W3', 'W4'].map((time, i) => ({ time, steps: [27400, 31200, 29100, 33741][i] })),
    summary: [['Average temperature', '36.7°C'], ['Peak pressure', '58%'], ['Total steps', '121,441'], ['High-risk events', '3']],
  },
} as const;

export const architecture = [
  ['01', 'SENSE', 'FSR pressure, temperature and motion sensors'],
  ['02', 'CONNECT', 'ESP32 + Bluetooth Low Energy'],
  ['03', 'ANALYZE', 'Signal processing and pattern context'],
  ['04', 'ACT', 'Risk alerts and practical next steps'],
];