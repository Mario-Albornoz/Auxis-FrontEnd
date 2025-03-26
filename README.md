## Auxis Financial Analyst 
Our project Auxis is a digital financial analyst for small to medium businesses that documents and processes financial data without the need of hiring a financial analyst.
It includes a dashboard that processes the data using charts and tables. It also includes a predictions page that shows the actual revenue and predictions for the next year's revenue. 

## Why Auxis
The purpose of Auxis is to provide small and medium-sized businesses with a digital financial analyst app that makes data documentation and forecasting easy to manage and understand without the need for hiring a dedicated analyst by offering real time insights, interactive data visualization, and financial predictions.

## Stack
For the stack, frontend consists of Vite for the starter application, Redux Toolkit for state management, Material UI for component library and to make sure that it works on desktops, tablets and mobile devices. Recharts for data visualization. For the backend Spring Boot for easy and quick API request handling, Java as the backend framework, and MongoDB for the noSQL database.

## How to run 

## Prerequisites
* Tailwind Installed
* Node.js Installed
* JVM and Java Installed

## Frontend Setup
1. Clone front end repository from: (https://github.com/Mario-Albornoz/Auxis-FrontEnd)
2. **Install dependencies for the frontend**
    ```console
    npm install
    ```

3. **Start the Frontend Server**
   
   Run the front end:
   ```console
   npm run dev
   ```
   The application should be available at: http://localhost:5173/ 
   Even though the back end should support requests from other ports, the preffered one is 5173

## Backend SetUp
1. Clone the ausix-backend repo: (https://github.com/Mario-Albornoz/Ausix-BackEnd)

2. **Install dependecies**
    ```console
    mvn clean install
    ```
3. Run the backend by Running the BackEndApplication.Java file 
