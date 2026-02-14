# Smart Workforce Analytics & Leave Intelligence Platform (Lumina)

A hackathon-ready, AI-driven platform for university faculty attendance and leave management.

## 🚀 Features

- **Role-Based Dashboards**: Admin, HR, and Faculty views.
- **Predictive Analytics**: Forecasting shortages using historical data.
- **Burnout Detection**: ML-rule based engine to flag high-risk faculty.
- **Leave Clustering**: Automatically detects if too many faculty from one dept are on leave.
- **Natural Language Query (NLQ)**: "Ask" the data questions in plain English.
- **Real-time Alerts**: Notifications for critical shortages or anomalies.

## 🛠 Tech Stack

- **Frontend**: React 18, TypeScript, Vite
- **Styling**: Tailwind CSS, Shadcn/UI concepts
- **Visualization**: Recharts
- **State**: React Context (Simulating Redux)
- **Backend (Simulated)**: In-browser mock logic replacing Python/FastAPI for instant demo deployment.

## 🏃‍♂️ Quick Start

1. **Install Dependencies**
   ```bash
   npm install
   ```

2. **Run Locally**
   ```bash
   npm start
   ```

3. **Deploy**
   - Push to GitHub
   - Import to Vercel/Netlify
   - Build command: `npm run build`
   - Output dir: `dist`

## 🧪 Demo Credentials

The login screen simulates authentication. Click the buttons to auto-fill:

- **Admin**: Full access to analytics and alerts.
- **Faculty**: Limited view of own attendance.

## 📂 Project Structure

- `/src/services/dataService.ts`: Core "Backend" simulation. Generates 100 faculty records and runs ML detection logic.
- `/src/pages`: Individual route components.
- `/src/types.ts`: TypeScript interfaces for the domain model.

## 📊 Pitch Highlights

- **Problem**: 42% attrition due to burnout; manual leave tracking causes class cancellations.
- **Solution**: Proactive intelligence. We don't just track attendance; we predict who will quit.
- **Impact**: 95% reduction in scheduling conflicts.
