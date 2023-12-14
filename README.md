# SST-GGE
## What this does?
This use a polygon called geometry and outputs a csv with the selected dates in 

var startDate = ee.Date('2000-01-01'); // set start time for analysis
var endDate = ee.Date('2020-12-31'); // set end time for analysis

## How to use it
Select the dates has was said before. just make a polygon with google earth or use your own method making it equ to "geometry" with var geometry = POLY

If you want change the var sst = ee.ImageCollection('NASA/OCEANDATA/MODIS-Aqua/L3SMI').select('sst')
to your custom imagecollection and SST bands. some are called "sea-surface-temperature" "sst" "SST" "SST_AVE"

### Tags to be found easy
sea surface temperature google earth engine
SST GEE
sea surface temperature google earth engine csv
