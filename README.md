# 📊 Enable Field List in Syncfusion React Pivot Table

This sample demonstrates how to **enable and configure a Field List** in the Syncfusion **React Pivot Table (PivotView)** component. It also showcases features like **toolbar integration**, **calculated fields**, and **value buttons** for interactive data analysis.

## 🔍 Overview

The Syncfusion Pivot Table is a powerful React component for summarizing and analyzing large datasets. In this example:

- A sample dataset includes fields like `Country`, `Products`, `Year`, `Quarter`, `Sold`, and `Amount`.
- The Pivot Table is configured with:
  - **Rows:** `Country`, `Products`
  - **Columns:** `Year`
  - **Values:** `Sold` (Units Sold), `Amount` (Sold Amount)
- The **Field List** is enabled and integrated into the toolbar.
- **Calculated Fields** and **Defer Layout Update** options are also enabled.
- The field list dialog is rendered with `document.body` as its target for better UI placement.

## ✅ Key Features

- **Field List:** Allows users to dynamically modify the Pivot Table layout.
- **Toolbar Integration:** Adds the Field List button to the toolbar.
- **Calculated Fields:** Enables creation of custom calculations.
- **Values Button:** Displays value settings for better customization.
- **Defer Layout Update:** Improves performance during configuration.

## 🛠 Prerequisites

Before running this project, ensure you have:

- [Node.js](https://nodejs.org/) (latest version recommended)
- [Visual Studio Code](https://code.visualstudio.com/)

## 🚀 Getting Started

Follow these steps to run the application:

1. **Clone the repository:**
   ```bash
   git clone https://github.com/SyncfusionExamples/field-list-in-react-pivot-table
   ```

2. **Navigate to the project folder:**
   ```bash
   cd field-list-in-react-pivot-table
   ```

3. **Install dependencies:**
   ```bash
   npm install
   ```

4. **Start the development server:**
   ```bash
   npm start
   ```

5. Open your browser and go to `http://localhost:3000` to view the Pivot Table.

## 📂 Project Structure

```
field-list-in-react-pivot-table/
├── public/
│   ├── index.html
│   └── ...
├── src/
│   ├── App.tsx        # Main component with Pivot Table configuration
│   ├── data.js        # Sample data used in the Pivot Table
│   └── ...
├── package.json
├── README.md
└── tsconfig.json
```

## 📚 Learn More

- [Syncfusion React Pivot Table Documentation](https://ej2.syncfusion.com/react/documentation/pivotview/field-list/)
- [Live Demos](https://ej2.syncfusion.com/react/demos/#/bootstrap5/pivot-table/field-list)

## 💬 Support

For questions or feedback, visit:

- [Syncfusion Support Portal](https://support.syncfusion.com)
- [Syncfusion Community Forums](https://www.syncfusion.com/forums)

## 📜 License

This project uses Syncfusion components, which require a valid license for production use.  
[View Syncfusion License Terms](https://www.syncfusion.com/license/studio/22.2.5/syncfusion_essential_studio_eula.pdf)
