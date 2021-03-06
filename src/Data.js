const dataA = {
  name: 'Data A',
  data: [229.9, 71.5, 106.4, 129.2, 144.0, 176.0, 135.6, 148.5, 216.4, 194.1, 95.6, 54.4]
};
const dataB = {
  name: 'Data B',
  data: [
    null, null, null, null, null, 6, 11, 32, 110, 235, 369, 640, 1005, 1436, 2063, 3057, 4618, 6444, 9822, 15468, 20434, 24126, 27387, 29459, 31056, 31982, 32040, 31233, 29224, 27342, 26662, 26956, 27912, 28999, 28965, 27826, 25579, 25722, 24826, 24605,
    24304, 23464, 23708, 24099, 24357, 24237, 24401, 24344, 23586, 22380, 21004, 17287, 14747, 13076, 12555, 12144, 11009, 10950, 10871, 10824, 10577, 10527, 10475, 10421, 10358, 10295, 10104, 9914, 9620, 9326, 5113, 5113, 4954, 4804, 4761, 4717, 4368, 4018]
};
const dataC = {
  name: 'Data C',
  data: [null, null, null, null, null, null, null, null, null, null, 5, 25, 50, 120, 150, 200, 426, 660, 869, 1060, 1605, 2471, 3322, 4238, 5221, 6129, 7089, 8339, 9399, 10538, 11643, 13092, 14478, 15915, 17385, 19055, 21205, 23044, 25393, 27935,
    30062, 32049, 33952, 35804, 37431, 39197, 45000, 43000, 41000, 39000, 37000, 35000, 33000, 31000, 29000, 27000, 25000, 24000, 23000, 22000, 21000, 20000, 19000, 18000, 18000, 17000, 16000, 15537, 14162, 12787, 12600, 11400, 5500, 4512, 4502, 4502, 4500, 4500]
};
const dataD = [
  { name: 'AAA', data: [502, 635, 809, 947, 1402, 3634, 5268] },
  { name: 'BBB', data: [106, 107, 111, 133, 221, 767, 1766] },
  { name: 'CCC', data: [163, 203, 276, 408, 547, 729, 628] },
  { name: 'DDD', data: [18, 31, 54, 156, 339, 818, 1201] },
  { name: 'EEE', data: [2, 2, 2, 6, 13, 30, 46] }
];

const combined = {
  title: { text: 'COMBINED' },
  xAxis: { categories: ['Apples', 'Oranges', 'Pears', 'Bananas', 'Plums'] },
  labels: {
    items: [{
      html: 'Total fruit consumption',
      style: {
        left: '50px', top: '18px', color: 'black'
      }
    }]
  },
  series: [
    { type: 'column', name: 'Jane', data: [3, 2, 1, 3, 4] },
    { type: 'column', name: 'John', data: [2, 3, 5, 7, 6] },
    { type: 'column', name: 'Joe', data: [4, 3, 3, 9, 0] },
    { type: 'spline', name: 'Average', data: [3, 2.67, 3, 6.33, 3.33], marker: { lineWidth: 2, lineColor: 'black', fillColor: 'white' } },
    {
      type: 'pie', name: 'Total consumption',
      data: [{ name: 'Jane', y: 13, color: 'red' }, { name: 'John', y: 23, color: 'blue' }, { name: 'Joe', y: 19, color: 'green' }],
      center: [100, 80],
      size: 100,
      showInLegend: false,
      dataLabels: {
        enabled: false
      }
    }]
}

const funnel = {
  chart: { type: 'funnel' },
  title: { text: 'FUNNEL' },
  plotOptions: {
    series: {
      center: ['40%', '50%'],
      neckWidth: '30%',
      neckHeight: '25%',
      width: '80%'
    }
  },
  legend: { enabled: false },
  series: [{
    name: 'Unique users',
    data: [['Website visits', 15654], ['Downloads', 4064], ['Requested price list', 1987], ['Invoice sent', 976], ['Finalized', 846]]
  }],
  responsive: {
    rules: [{
      condition: { maxWidth: 300 },
      chartOptions: {
        plotOptions: {
          series: {
            dataLabels: { inside: true },
            center: ['50%', '50%'],
            width: '100%'
          }
        }
      }
    }]
  }
}

const boxplot = {
  chart: { type: 'boxplot' },
  title: { text: 'BOXPLOT' },
  legend: { enabled: false },
  xAxis: {
    categories: ['1', '2', '3', '4', '5'],
    title: { text: 'Experiment No.' }
  },
  yAxis: { title: { text: 'Observations' } },
  plotOptions: {
    boxplot: {
      boxDashStyle: 'Dash',
      fillColor: '#F0F0E0',
      lineWidth: 2,
      medianColor: '#0C5DA5',
      medianDashStyle: 'ShortDot',
      medianWidth: 3,
      stemColor: '#A63400',
      stemDashStyle: 'dot',
      stemWidth: 1,
      whiskerColor: '#3D9200',
      whiskerLength: '20%',
      whiskerWidth: 3
    }
  },
  series: [{
    name: 'Observations',
    data: [[760, 801, 848, 895, 965], [733, 853, 939, 980, 1080], [714, 762, 817, 870, 918], [724, 802, 806, 871, 950], [834, 836, 864, 882, 910]]
  }]
};



const scatter = {
  chart: { type: 'scatter', zoomType: 'xy' },
  title: { text: 'SCATTER' },
  subtitle: { text: 'Source: Heinz  2003' },
  xAxis: {
    title: { enabled: true, text: 'Height (cm)' },
    startOnTick: true,
    endOnTick: true,
    showLastLabel: true
  },
  yAxis: { title: { text: 'Weight (kg)' } },
  legend: {
    layout: 'vertical',
    align: 'left',
    verticalAlign: 'top',
    x: 100,
    y: 70,
    floating: true,
    backgroundColor: 'white',
    borderWidth: 1
  },
  plotOptions: {
    scatter: {
      marker: {
        radius: 5,
      },
      tooltip: {
        headerFormat: '<b>{series.name}</b><br>',
        pointFormat: '{point.x} cm, {point.y} kg'
      }
    }
  },
  series: [{
    name: 'GROUP A',
    color: 'rgba(223, 83, 83, .5)',
    data: [[161.2, 51.6], [167.5, 59.0], [159.5, 49.2], [157.0, 63.0], [155.8, 53.6], [170.0, 59.0], [159.1, 47.6], [166.0, 69.8], [176.2, 66.8], [160.2, 75.2], [172.5, 55.2], [170.9, 54.2], [172.9, 62.5], [153.4, 42.0], [160.0, 50.0], [147.2, 49.8], [168.2, 49.2], [175.0, 73.2], [157.0, 47.8], [167.6, 68.8], [159.5, 50.6], [175.0, 82.5], [166.8, 57.2], [176.5, 87.8], [170.2, 72.8], [174.0, 54.5], [173.0, 59.8], [179.9, 67.3], [170.5, 67.8], [160.0, 47.0], [154.4, 46.2], [162.0, 55.0], [176.5, 83.0], [160.0, 54.4], [152.0, 45.8], [162.1, 53.6], [170.0, 73.2], [160.2, 52.1], [161.3, 67.9], [166.4, 56.6], [168.9, 62.3], [163.8, 58.5], [167.6, 54.5], [160.0, 50.2], [161.3, 60.3], [167.6, 58.3], [165.1, 56.2], [160.0, 50.2], [170.0, 72.9], [157.5, 59.8], [167.6, 61.0], [160.7, 69.1], [163.2, 55.9], [152.4, 46.5], [157.5, 54.3], [168.3, 54.8], [180.3, 60.7], [165.5, 60.0], [165.0, 62.0], [164.5, 60.3], [156.0, 52.7], [160.0, 74.3], [163.0, 62.0], [165.7, 73.1], [161.0, 80.0], [162.0, 54.7], [166.0, 53.2], [174.0, 75.7], [172.7, 61.1], [167.6, 55.7], [151.1, 48.7], [164.5, 52.3], [163.5, 50.0], [152.0, 59.3], [169.0, 62.5], [164.0, 55.7], [161.2, 54.8], [155.0, 45.9], [170.0, 70.6], [176.2, 67.2],
    [170.0, 69.4], [162.5, 58.2], [170.3, 64.8], [164.1, 71.6], [169.5, 52.8], [163.2, 59.8], [154.5, 49.0], [159.8, 50.0], [173.2, 69.2], [170.0, 55.9], [161.4, 63.4], [169.0, 58.2], [166.2, 58.6], [159.4, 45.7], [162.5, 52.2], [159.0, 48.6], [162.8, 57.8], [159.0, 55.6], [179.8, 66.8], [162.9, 59.4], [161.0, 53.6], [151.1, 73.2], [168.2, 53.4], [168.9, 69.0], [173.2, 58.4], [171.8, 56.2], [178.0, 70.6], [164.3, 59.8], [163.0, 72.0], [168.5, 65.2], [166.8, 56.6], [172.7, 105.2], [163.5, 51.8], [169.4, 63.4], [167.8, 59.0], [159.5, 47.6], [167.6, 63.0], [161.2, 55.2], [160.0, 45.0], [163.2, 54.0], [162.2, 50.2], [161.3, 60.2], [149.5, 44.8], [157.5, 58.8], [163.2, 56.4], [172.7, 62.0], [155.0, 49.2], [156.5, 67.2], [164.0, 53.8], [160.9, 54.4], [162.8, 58.0], [167.0, 59.8], [160.0, 54.8], [160.0, 43.2], [168.9, 60.5], [158.2, 46.4], [156.0, 64.4], [160.0, 48.8], [167.1, 62.2], [158.0, 55.5], [167.6, 57.8], [156.0, 54.6], [162.1, 59.2], [173.4, 52.7], [159.8, 53.2], [170.5, 64.5], [159.2, 51.8], [157.5, 56.0], [161.3, 63.6], [162.6, 63.2], [160.0, 59.5], [168.9, 56.8], [165.1, 64.1], [162.6, 50.0], [165.1, 72.3], [166.4, 55.0], [160.0, 55.9], [152.4, 60.4], [170.2, 69.1], [162.6, 84.5],
    [170.2, 55.9], [158.8, 55.5], [172.7, 69.5], [167.6, 76.4], [162.6, 61.4], [167.6, 65.9], [156.2, 58.6], [175.2, 66.8], [172.1, 56.6], [162.6, 58.6], [160.0, 55.9], [165.1, 59.1], [182.9, 81.8], [166.4, 70.7], [165.1, 56.8], [177.8, 60.0], [165.1, 58.2], [175.3, 72.7], [154.9, 54.1], [158.8, 49.1], [172.7, 75.9], [168.9, 55.0], [161.3, 57.3], [167.6, 55.0], [165.1, 65.5], [175.3, 65.5], [157.5, 48.6], [163.8, 58.6], [167.6, 63.6], [165.1, 55.2], [165.1, 62.7], [168.9, 56.6], [162.6, 53.9], [164.5, 63.2], [176.5, 73.6], [168.9, 62.0], [175.3, 63.6], [159.4, 53.2], [160.0, 53.4], [170.2, 55.0], [162.6, 70.5], [167.6, 54.5], [162.6, 54.5], [160.7, 55.9], [160.0, 59.0], [157.5, 63.6], [162.6, 54.5], [152.4, 47.3], [170.2, 67.7], [165.1, 80.9], [172.7, 70.5], [165.1, 60.9], [170.2, 63.6], [170.2, 54.5], [170.2, 59.1], [161.3, 70.5], [167.6, 52.7], [167.6, 62.7], [165.1, 86.3], [162.6, 66.4], [152.4, 67.3], [168.9, 63.0], [170.2, 73.6], [175.2, 62.3], [175.2, 57.7], [160.0, 55.4], [165.1, 104.1], [174.0, 55.5], [170.2, 77.3], [160.0, 80.5], [167.6, 64.5], [167.6, 72.3], [167.6, 61.4], [154.9, 58.2], [162.6, 81.8], [175.3, 63.6], [171.4, 53.4], [157.5, 54.5], [165.1, 53.6], [160.0, 60.0],
    [174.0, 73.6], [162.6, 61.4], [174.0, 55.5], [162.6, 63.6], [161.3, 60.9], [156.2, 60.0], [149.9, 46.8], [169.5, 57.3], [160.0, 64.1], [175.3, 63.6], [169.5, 67.3], [160.0, 75.5], [172.7, 68.2], [162.6, 61.4], [157.5, 76.8], [176.5, 71.8], [164.4, 55.5], [160.7, 48.6], [174.0, 66.4], [163.8, 67.3]]

  }, {
    name: 'GROUP B',
    color: 'rgba(119, 152, 191, .5)',
    data: [[174.0, 65.6], [175.3, 71.8], [193.5, 80.7], [186.5, 72.6], [187.2, 78.8], [181.5, 74.8], [184.0, 86.4], [184.5, 78.4], [175.0, 62.0], [184.0, 81.6], [180.0, 76.6], [177.8, 83.6], [192.0, 90.0], [176.0, 74.6], [174.0, 71.0], [184.0, 79.6], [192.7, 93.8], [171.5, 70.0], [173.0, 72.4], [176.0, 85.9], [176.0, 78.8], [180.5, 77.8], [172.7, 66.2], [176.0, 86.4], [173.5, 81.8], [178.0, 89.6], [180.3, 82.8], [180.3, 76.4], [164.5, 63.2], [173.0, 60.9], [183.5, 74.8], [175.5, 70.0], [188.0, 72.4], [189.2, 84.1], [172.8, 69.1], [170.0, 59.5], [182.0, 67.2], [170.0, 61.3], [177.8, 68.6], [184.2, 80.1], [186.7, 87.8], [171.4, 84.7], [172.7, 73.4], [175.3, 72.1], [180.3, 82.6], [182.9, 88.7], [188.0, 84.1], [177.2, 94.1], [172.1, 74.9], [167.0, 59.1], [169.5, 75.6], [174.0, 86.2], [172.7, 75.3], [182.2, 87.1], [164.1, 55.2], [163.0, 57.0], [171.5, 61.4], [184.2, 76.8], [174.0, 86.8], [174.0, 72.2], [177.0, 71.6], [186.0, 84.8], [167.0, 68.2], [171.8, 66.1], [182.0, 72.0], [167.0, 64.6], [177.8, 74.8], [164.5, 70.0], [192.0, 101.6], [175.5, 63.2], [171.2, 79.1], [181.6, 78.9], [167.4, 67.7], [181.1, 66.0], [177.0, 68.2], [174.5, 63.9], [177.5, 72.0], [170.5, 56.8], [182.4, 74.5], [197.1, 90.9],
    [180.1, 93.0], [175.5, 80.9], [180.6, 72.7], [184.4, 68.0], [175.5, 70.9], [180.6, 72.5], [177.0, 72.5], [177.1, 83.4], [181.6, 75.5], [176.5, 73.0], [175.0, 70.2], [174.0, 73.4], [165.1, 70.5], [177.0, 68.9], [192.0, 102.3], [176.5, 68.4], [169.4, 65.9], [182.1, 75.7], [179.8, 84.5], [175.3, 87.7], [184.9, 86.4], [177.3, 73.2], [167.4, 53.9], [178.1, 72.0], [168.9, 55.5], [157.2, 58.4], [180.3, 83.2], [170.2, 72.7], [177.8, 64.1], [172.7, 72.3], [165.1, 65.0], [186.7, 86.4], [165.1, 65.0], [174.0, 88.6], [175.3, 84.1], [185.4, 66.8], [177.8, 75.5], [180.3, 93.2], [180.3, 82.7], [177.8, 58.0], [177.8, 79.5], [177.8, 78.6], [177.8, 71.8], [177.8, 116.4], [163.8, 72.2], [188.0, 83.6], [198.1, 85.5], [175.3, 90.9], [166.4, 85.9], [190.5, 89.1], [166.4, 75.0], [177.8, 77.7], [179.7, 86.4], [172.7, 90.9], [190.5, 73.6], [185.4, 76.4], [168.9, 69.1], [167.6, 84.5], [175.3, 64.5], [170.2, 69.1], [190.5, 108.6], [177.8, 86.4], [190.5, 80.9], [177.8, 87.7], [184.2, 94.5], [176.5, 80.2], [177.8, 72.0], [180.3, 71.4], [171.4, 72.7], [172.7, 84.1], [172.7, 76.8], [177.8, 63.6], [177.8, 80.9], [182.9, 80.9], [170.2, 85.5], [167.6, 68.6], [175.3, 67.7], [165.1, 66.4], [185.4, 102.3], [181.6, 70.5],
    [172.7, 95.9], [190.5, 84.1], [179.1, 87.3], [175.3, 71.8], [170.2, 65.9], [193.0, 95.9], [171.4, 91.4], [177.8, 81.8], [177.8, 96.8], [167.6, 69.1], [167.6, 82.7], [180.3, 75.5], [182.9, 79.5], [176.5, 73.6], [186.7, 91.8], [188.0, 84.1], [188.0, 85.9], [177.8, 81.8], [174.0, 82.5], [177.8, 80.5], [171.4, 70.0], [185.4, 81.8], [185.4, 84.1], [188.0, 90.5], [188.0, 91.4], [182.9, 89.1], [176.5, 85.0], [175.3, 69.1], [175.3, 73.6], [188.0, 80.5], [188.0, 82.7], [175.3, 86.4], [170.5, 67.7], [179.1, 92.7], [177.8, 93.6], [175.3, 70.9], [182.9, 75.0], [170.8, 93.2], [188.0, 93.2], [180.3, 77.7], [177.8, 61.4], [185.4, 94.1], [168.9, 75.0], [185.4, 83.6], [180.3, 85.5], [174.0, 73.9], [167.6, 66.8], [182.9, 87.3], [160.0, 72.3], [180.3, 88.6], [167.6, 75.5], [186.7, 101.4], [175.3, 91.1], [175.3, 67.3], [175.9, 77.7], [175.3, 81.8], [179.1, 75.5], [181.6, 84.5], [177.8, 76.6], [182.9, 85.0], [177.8, 102.5], [184.2, 77.3], [179.1, 71.8], [176.5, 87.9], [188.0, 94.3], [174.0, 70.9], [167.6, 64.5], [170.2, 77.3], [167.6, 72.3], [188.0, 87.3], [174.0, 80.0], [176.5, 82.3], [180.3, 73.6], [167.6, 74.1], [188.0, 85.9], [180.3, 73.2], [167.6, 76.3], [183.0, 65.9], [183.0, 90.9], [179.1, 89.1],
    [170.2, 62.3], [177.8, 82.7], [179.1, 79.1], [190.5, 98.2], [177.8, 84.1], [180.3, 83.2], [180.3, 83.2]]
  }]
};

const multiX = {
  title: { text: 'MULTI X AXIS' },
  navigator: { enabled: false },
  scrollbar: { enabled: false },
  rangeSelector: { selected: 1, enabled: false },

  xAxis: [{
    type: 'datetime'
  }, {
    type: 'datetime',
    opposite: true
  }],

  series: [{
    type: 'line',
    data: [29.9, 71.5, 106.4, 129.2, 144.0, 176.0, 135.6, 148.5, 216.4, 194.1, 95.6, 54.4],
    pointStart: Date.UTC(2010, 0, 1),
    pointInterval: 24 * 3600 * 1000 // one day
  }, {
    type: 'column',
    data: [176.0, 135.6, 148.5, 216.4, 194.1, 95.6, 54.4, 29.9, 71.5, 106.4, 129.2, 144.0],
    pointStart: Date.UTC(2010, 1, 1),
    pointInterval: 24 * 3600 * 1000, // one day
    xAxis: 1
  }]

}

const multiY = {
  title: { text: 'MULTI Y AXIS' },
  navigator: { enabled: false },
  scrollbar: { enabled: false },
  rangeSelector: { selected: 1, enabled: false },
  //xAxis: [{  }, {    opposite: true,    min: 0,    max: 10  }],
  yAxis: [{
    min: 0,
    max: 2000,
  }, {
    min: 0,
    max: 10,
  }],

  series: [{
    type: 'line',
    data: [700, 609, 905, 1405, 1804],
    yAxis: 0,
  }, {
    type: 'column',
    data: [3, 6, 8, 5, 2],
    yAxis: 1
  }]
};

const ranges = [
  [1246406400000, 14.3, 27.7],  [1246492800000, 14.5, 27.8],  [1246579200000, 15.5, 29.6],  [1246665600000, 16.7, 30.7],  [1246752000000, 16.5, 25.0],  [1246838400000, 17.8, 25.7],  [1246924800000, 13.5, 24.8],  [1247011200000, 10.5, 21.4],
  [1247097600000, 9.2, 23.8],  [1247184000000, 11.6, 21.8],  [1247270400000, 10.7, 23.7],  [1247356800000, 11.0, 23.3],  [1247443200000, 11.6, 23.7],  [1247529600000, 11.8, 20.7],  [1247616000000, 12.6, 22.4],  [1247702400000, 13.6, 19.6],
  [1247788800000, 11.4, 22.6],  [1247875200000, 13.2, 25.0],  [1247961600000, 14.2, 21.6],  [1248048000000, 13.1, 17.1],  [1248134400000, 12.2, 15.5],  [1248220800000, 12.0, 20.8],  [1248307200000, 12.0, 17.1],  [1248393600000, 12.7, 18.3],
  [1248480000000, 12.4, 19.4],  [1248566400000, 12.6, 19.9],  [1248652800000, 11.9, 20.2],  [1248739200000, 11.0, 19.3],  [1248825600000, 10.8, 17.8],  [1248912000000, 11.8, 18.5],  [1248998400000, 10.8, 16.1]
],
averages = [
  [1246406400000, 21.5],  [1246492800000, 22.1],  [1246579200000, 23],  [1246665600000, 23.8],  [1246752000000, 21.4],  [1246838400000, 21.3],  [1246924800000, 18.3],  [1247011200000, 15.4],
  [1247097600000, 16.4],  [1247184000000, 17.7],  [1247270400000, 17.5],  [1247356800000, 17.6],  [1247443200000, 17.7],  [1247529600000, 16.8],  [1247616000000, 17.7],  [1247702400000, 16.3],
  [1247788800000, 17.8],  [1247875200000, 18.1],  [1247961600000, 17.2],  [1248048000000, 14.4],  [1248134400000, 13.7],  [1248220800000, 15.7],  [1248307200000, 14.6],  [1248393600000, 15.3],
  [1248480000000, 15.3],  [1248566400000, 15.8],  [1248652800000, 15.2],  [1248739200000, 14.8],  [1248825600000, 14.4],  [1248912000000, 15],  [1248998400000, 13.6]
];

const areaRangeAndLine = {
  title: { text: 'AREA RANGE AND LINE' },
  xAxis: {
    type: 'datetime',
    accessibility: { rangeDescription: 'Range: Jul 1st 2009 to Jul 31st 2009.' }
  },
  yAxis: { title: { text: null } },
  series: [{
    name: 'Temperature',
    data: averages,
    zIndex: 1,
    marker: {
      fillColor: 'white',
      lineWidth: 2,
      lineColor: 'red'
    }
  }, {
    name: 'Range',
    data: ranges,
    type: 'arearange',
    lineWidth: 0,
    linkedTo: ':previous',
    color: 'blue',
    fillOpacity: 0.3,
    zIndex: 0,
    marker: { enabled: false }
  }]
}


export const chartDef = [
  { mykey: 'k-line', options: { title: { text: 'LINE' }, chart: { type: 'line' }, series: [dataB, dataC]} },
  { mykey: 'k-column', options: { title: { text: 'COLUMN' }, chart: { type: 'column' }, series: [dataB, dataC] }},
  { mykey: 'k-pie', options: { title: { text: 'PIE' }, chart: { type: 'pie' }, series: [dataA] }},
  { mykey: 'k-arearangeandline', options: { ...areaRangeAndLine }},
  { mykey: 'k-multix', options: { ...multiX }},
  { mykey: 'k-multiy', options: { ...multiY }},
  { mykey: 'k-scatter', options: { ...scatter }},
  { mykey: 'k-boxplot', options: { ...boxplot }},
  { mykey: 'k-bubble', options: { title: { text: 'BUBBLE' }, chart: { type: 'packedbubble' }, series: [{ data: [50, 12, 33, 45, 60] }] }},
  { mykey: 'k-combined', options: { ...combined }},
  { mykey: 'k-stackbarpercent', options: { title: { text: 'STACK BAR %' }, chart: { type: 'bar' }, series: dataD, plotOptions: { bar: { stacking: 'percent' } } }},
  { mykey: 'k-stackbar', options: { title: { text: 'STACK BAR' }, chart: { type: 'bar' }, series: dataD, plotOptions: { bar: { stacking: 'normal' } } }},
  { mykey: 'k-bar', options: { title: { text: 'BAR' }, chart: { type: 'bar' }, series: dataD }},
  { mykey: 'k-stackareapercent', options: { title: { text: 'STACK AREA %' }, chart: { type: 'area' }, series: dataD, plotOptions: { area: { stacking: 'percent' } } }},
  { mykey: 'k-stackarea', options: { title: { text: 'STACK AREA' }, chart: { type: 'area' }, series: dataD, plotOptions: { area: { stacking: 'normal' } } }},
  { mykey: 'k-funnel', modules: ['funnel'], options: {...funnel} }
]