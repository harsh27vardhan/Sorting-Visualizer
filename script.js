// const xyValues = [
//   {x:50, y:7},
//   {x:60, y:8},
//   {x:70, y:8},
//   {x:80, y:9},
//   {x:90, y:9},
//   {x:100, y:9},
//   {x:110, y:10},
//   {x:120, y:11},
//   {x:130, y:14},
//   {x:140, y:14},
//   {x:150, y:15}
// ];

// new Chart("myChart1", {
//   type: "scatter",
//   data: {
//     datasets: [{
//       pointRadius: 4,
//       pointBackgroundColor: "rgba(0,0,255,1)",
//       data: xyValues
//     }]
//   }
// });


var xValues = ["0", "1", "2", "3", "4", "5", "6", "7"," 8", "9","10"];
var yValues = [55,14,44,24,20,33,25,21,76,5];
var barColors = ["black", "black","black","black","black","black", "black","black","black","black"];

function showGraph(){
  new Chart("myChart2", {
    type: "bar",
    data: {
      labels: xValues,
      datasets: [{
        backgroundColor: barColors,
        data: yValues
      }]
    },
    options: {
      legend: {display: false},
      title: {
        display: true,
        text: "Selection Sort Analyzer"
      }
    }
  });
}
function selectionSort(){
  const n = yValues.length;
  for (let i = 0; i < n - 1; i++) {
    setTimeout(()=>{
      let min_idx = i;
      for (let j = i + 1; j < n; j++) {
        if (yValues[j] < yValues[min_idx]) {
          min_idx = j;
        }
      }
      // Swap
      let temp = yValues[i];
      yValues[i] = yValues[min_idx];
      yValues[min_idx] = temp;

      console.log(yValues);
      showGraph();
    },i*1000)
    if(i===n){
      clearTimeout();
    }
  }
}

showGraph();
selectionSort();