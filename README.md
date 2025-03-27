# Belly-Button-Biodiversity
In this assignment, **I built an interactive dashboard** to explore microbial biodiversity in human belly buttons using data provided in a JSON file.

I utilized D3.js to load and parse data dynamically from a remote source and implemented event-driven interactivity by populating a dropdown menu with individual sample IDs. When a user selects a new sample, the dashboard updates automatically to reflect the corresponding data.

To visualize the data, I created a horizontal bar chart displaying the **top 10 bacteria cultures found** and a bubble chart representing **bacteria cultures per sample**. Both charts were rendered using Plotly.js and include interactive hover text and dynamic styling based on the dataset.

Additionally, I used D3 to loop through metadata and display demographic information for the selected individual. The application is fully interactive and responds to user input without the need for page reloads.

**Skills Demonstrated:**
* Data Loading and Parsing with D3.js

* Interactive Charting with Plotly.js

* Event-Driven UI Updates (Dropdown Menu)

* Dynamic DOM Manipulation

* Data Filtering and Mapping

* JSON Data Handling

* Responsive Dashboard Design