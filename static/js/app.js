// Build the metadata panel
function buildMetadata(sample) {
  d3.json("https://static.bc-edx.com/data/dl-1-2/m14/lms/starter/samples.json").then((data) => {
    console.log(data);
    // get the metadata field
    let metadata = data.metadata;
    console.log(metadata);
    // Filter the metadata for the object with the desired sample number
    let result = metadata.filter(d => d.id ==sample)[0];
    console.log(result);
    // Use d3 to select the panel with id of `#sample-metadata`
    let panel = d3.select(`#sample-metadata`);
    console.log(panel);
    // Use `.html("") to clear any existing metadata
    panel.html("");

    // Inside a loop, you will need to use d3 to append new
    // tags for each key-value in the filtered metadata.
    Object.entries(result).forEach(([key,value]) => {
      panel.append("h6").text(`${key.toUpperCase()}: ${value}`)
    })
  });
}

// function to build both charts
function buildCharts(sample) {
  d3.json("https://static.bc-edx.com/data/dl-1-2/m14/lms/starter/samples.json").then((data) => {

    // Get the samples field
    let allSamples = data.samples;
    console.log(allSamples)
    // Filter the samples for the object with the desired sample number
    let filteredSample = allSamples.filter(s=>s.id == sample)[0];

    // Get the otu_ids, otu_labels, and sample_values
    let otu_ids = filteredSample.otu_ids;
    let otu_labels = filteredSample.otu_labels;
    let sample_values = filteredSample.sample_values;

    // Build a Bubble Chart
    let bubbleTrace = {
      x: otu_ids,
      y: sample_values,
      text: otu_labels,
      type: "scatter",
      mode: "markers",
      marker: {
        size: sample_values,
        color: otu_ids,
      }
    };

    let bubbleData = [bubbleTrace]

    let bubbleLayout = {
      title: "Bacteria Cultures Per Sample",
    }

    // Render the Bubble Chart
    Plotly.newPlot("bubble", bubbleData, bubbleLayout);

    // For the Bar Chart, map the otu_ids to a list of strings for your yticks
    let yticks = otu_ids.map(d => `OTU ${d} `)

    // Build a Bar Chart
    // Don't forget to slice and reverse the input data appropriately
  
    let barTrace = {
      x: sample_values.slice(0,10).reverse(),
      y: yticks.slice(0,10).reverse(),
      type: "bar",
      orientation: "h"
    }

    let barData = [barTrace]

    let barLayout = {
      title: "Top 10 Bacteria Cultures Found"
    }

    // Render the Bar Chart
    Plotly.newPlot("bar", barData, barLayout);
  });
}

// Function to run on page load
function init() {
  d3.json("https://static.bc-edx.com/data/dl-1-2/m14/lms/starter/samples.json").then((data) => {
    console.log(data);
    // Get the names field
    let names = data.names;

    // Use d3 to select the dropdown with id of `#selDataset`
    let dropdown = d3.select(`#selDataset`);

    // Use the list of sample names to populate the select options
    // Hint: Inside a loop, you will need to use d3 to append a new
    // option for each sample name.
    for (let i=0; i < names.length; i++) {
      dropdown.append("option").text(names[i]).property("value",names[i]);
    }

    // Get the first sample from the list
    let firstSample = names[0];

    // Build charts and metadata panel with the first sample
    buildMetadata(firstSample);
    buildCharts(firstSample);
  });
}

// Function for event listener
function optionChanged(newSample) {
  // Build charts and metadata panel each time a new sample is selected
  buildMetadata(newSample);
  buildCharts(newSample);
}

// Initialize the dashboard
init();
