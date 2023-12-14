//Define a polygon has geometry or make one using GGE

var startDate = ee.Date('2000-01-01'); // set start time for analysis
var endDate = ee.Date('2020-12-31'); // set end time for analysis

// calculate the number of months to process
var nMonths = ee.Number(endDate.difference(startDate,'month')).round();

var point = geometry
var sst = ee.ImageCollection('NASA/OCEANDATA/MODIS-Aqua/L3SMI').select('sst')
            .filterDate(startDate, endDate);

var byMonth = ee.ImageCollection(
  // map over each month
  ee.List.sequence(0,nMonths).map(function (n) {
    // calculate the offset from startDate
    var ini = startDate.advance(n,'month');
    // advance just one month
    var end = ini.advance(1,'month');
    // filter and reduce
    return sst.filterDate(ini,end)
                .select(0).mean()
                .set('system:time_start', ini);
}));

print(byMonth);

Map.addLayer(ee.Image(byMonth.first()),{min: 15, max: 35},'SST');

// plot full time series
print(
  ui.Chart.image.series({
    imageCollection: byMonth,
    region: point,
    reducer: ee.Reducer.mean(),
    scale: 1000
  }).setOptions({title: 'SST over time'})
);

// plot a line for each year in series
print(
  ui.Chart.image.doySeriesByYear({
    imageCollection: byMonth,
    bandName:'sst',
    region: point,
    regionReducer: ee.Reducer.mean(),
    scale: 1000
  }).setOptions({title: 'SST for each year'})
);
