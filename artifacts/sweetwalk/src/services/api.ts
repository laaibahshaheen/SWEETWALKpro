import { alerts, historyByRange, patient, pressureData, riskTrend, sensorZones, temperatureData } from '@/data/mock';

export const getDashboardData = async () => Promise.resolve(patient);
export const getSensorData = async () => Promise.resolve({ zones: sensorZones, pressure: pressureData, temperature: temperatureData });
export const getRiskAnalysis = async () => Promise.resolve({ score: patient.risk, trend: riskTrend });
export const getAlerts = async () => Promise.resolve(alerts);
export const getHistory = async (range: keyof typeof historyByRange = 'Today') => Promise.resolve(historyByRange[range]);
export const calibrateDevice = async () => Promise.resolve({ success: true, calibratedAt: new Date().toISOString() });