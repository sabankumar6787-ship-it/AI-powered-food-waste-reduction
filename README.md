# AURA — AI-Powered Food Waste Reduction System

> An enterprise-grade climate-tech platform engineered to reduce commercial food waste through demand forecasting, inventory intelligence, automated prep scaling, dynamic markdown pricing, and verified shelter donation workflows.

---

## 🌟 Overview

Commercial kitchens and food services experience significant bottom-line revenue loss due to overproduction, inaccurate demand estimations, unmonitored cold storage expiration, and fragmented tracking systems. **AURA** bridges these operational gaps by unifying:

1. **Demand Forecasting ML Engine**: Predicts covers and prep quantities 24–72 hours in advance using historical sales patterns, weather correlation, and local event footfall.
2. **Cold Room & Inventory WMS**: Real-time batch shelf-life countdown, cold storage tracking, and automated expiration risk alerts.
3. **Kitchen Prep & Recipe Calculator**: Scales recipes from 10 to 1,000 covers, decomposing dishes into raw ingredients with automated cost and spoilage risk calculation.
4. **Predictive Scenario Simulator**: Real-time simulation of external parameters (weather changes, stadium events, day-of-week trends) with instant kitchen batch prep targets.
5. **Surplus Recovery & ESG Donation Hub**: Automated routing of unserved surplus to verified community shelters, generating digital donation manifests and tracking CO2e landfill carbon offsets.
6. **AURA Kitchen Copilot**: Embedded AI assistant providing actionable operational shortcuts directly on kitchen display tablets.

---

## 🛠️ Tech Stack

- **Framework**: [React 18](https://react.dev/) + [Vite](https://vitejs.dev/)
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **Icons**: [Lucide React](https://lucide.dev/)
- **State & Storage**: Client-side State Architecture with `localStorage` persistence

---

## 🚀 Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (v18.0.0 or higher recommended)
- `npm`

### Installation & Local Setup

1. **Clone the repository**:
   ```bash
   git clone https://github.com/sabankumar6787-ship-it/AI-powered-food-waste-reduction.git
   cd AI-powered-food-waste-reduction
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Start the local development server**:
   ```bash
   npm run dev
   ```

4. **Open in browser**:
   Navigate to `http://localhost:5173` to interact with the live console and tools.

5. **Build for Production**:
   ```bash
   npm run build
   ```

---

## 📦 Key Functional Modules

| Module | Description |
| :--- | :--- |
| **Recipe Prep Calculator** | Scalable dish portions (10–1,000 covers) with automatic raw ingredient decomposition and KDS sync. |
| **Inventory WMS Manager** | Full CRUD stock management, shelf-life countdown, dynamic discount triggers, and waste logging. |
| **Forecast Simulator** | Multi-factor scenario modeling for weather (rain, heatwave) and local crowd surges (stadium match, festivals). |
| **Donation & ESG Hub** | Dispatching surplus food to verified shelter partners with automatic CO2e carbon emission savings audit. |
| **Live Operations Console** | Real-time metrics (waste avoided, savings in INR/USD, forecast accuracy) and category distribution breakdowns. |
| **AI Copilot Drawer** | Quick-action kitchen assistant for instant inventory queries, prep guidance, and report exports. |

---

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
