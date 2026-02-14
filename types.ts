export type Role = 'ADMIN' | 'FACULTY' | 'HR';

export interface User {
  id: string;
  name: string;
  email: string;
  role: Role;
  dept: string;
  avatar?: string;
  preferences?: {
    language: 'en' | 'hi';
    notifications: boolean;
    darkMode: boolean;
  };
}

export interface Badge {
  id: string;
  name: string;
  icon: string;
  description: string;
  dateEarned: string;
  type: 'WELLNESS' | 'PERFORMANCE' | 'PUNCTUALITY';
}

export interface FacultyMetrics {
  id: string;
  name: string;
  email: string;
  dept: string;
  role: Role;
  attendanceRate: number; // Percentage
  burnoutScore: number; // 0-100
  workloadHours: number; // Weekly average
  teachingLoadScore: number; // 0-10 (Stress index based on consecutive classes)
  leavesTaken: number;
  leaveBalance: {
    CL: number; // Casual Leave
    SL: number; // Sick Leave
    EL: number; // Earned Leave
  };
  lastPresent: string;
  riskLevel: 'LOW' | 'MEDIUM' | 'HIGH';
  skills: string[];
  joinedAt: string;
  badges: Badge[];
  avatar?: string;
}

export interface AttendanceRecord {
  id: string;
  date: string;
  facultyId: string;
  status: 'PRESENT' | 'ABSENT' | 'LEAVE' | 'LATE';
  checkIn?: string;
  checkOut?: string;
  source: 'QR' | 'MANUAL';
}

export interface LeaveRequest {
  id: string;
  facultyId: string;
  facultyName: string;
  dept: string;
  startDate: string;
  endDate: string;
  type: 'CL' | 'SL' | 'EL' | 'OD'; // Indian Context: Casual, Sick, Earned, On Duty
  reason: string;
  status: 'Pending' | 'Approved' | 'Rejected';
  riskFlag?: boolean; // AI detected clustering
  clusteringDetails?: string;
  substituteId?: string; // Assigned substitute
  substituteName?: string;
}

export interface Alert {
  id: string;
  type: 'SHORTAGE' | 'BURNOUT' | 'CLUSTERING' | 'ANOMALY' | 'POLICY';
  severity: 'LOW' | 'MEDIUM' | 'HIGH' | 'CRITICAL';
  message: string;
  messageHi?: string; // Hindi variant
  facultyId?: string;
  dept?: string;
  timestamp: string;
  resolved: boolean;
}

export interface DailyStats {
  date: string;
  totalPresent: number;
  totalAbsent: number;
  predictedShortage: boolean;
}

export interface Toast {
  id: string;
  message: string;
  type: 'success' | 'error' | 'info';
}

export interface Notification {
  id: string;
  userId: string; // The recipient
  title: string;
  message: string;
  type: 'success' | 'error' | 'info' | 'warning';
  timestamp: string;
  read: boolean;
}

export interface ScheduleEvent {
  id: string;
  facultyId: string;
  day: string; // 'Monday', 'Tuesday', etc.
  startTime: string; // '09:00'
  endTime: string; // '10:00'
  title: string;
  type: 'LECTURE' | 'LAB' | 'RESEARCH' | 'ADMIN' | 'BREAK';
  location?: string;
}

export const DEPARTMENTS = ['Computer Science', 'Electronics (ECE)', 'Mechanical', 'Civil', 'Physics', 'Mathematics', 'Literature'];
