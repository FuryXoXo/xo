
var styleJSON = {
    "version": 8,
    "name": "qgis2web export",
    "pitch": 0,
    "light": {
        "intensity": 0.2
    },
    "sources": {
        "SPEC_MCC_01_0": {
            "type": "geojson",
            "data": json_SPEC_MCC_01_0
        }
                    ,
        "GoogleMaps_1": {
            "type": "raster",
            "tiles": ["https://mt1.google.com/vt/lyrs=m&x={x}&y={y}&z={z}"],
            "tileSize": 256
        },
        "SPEC_MCC_01_2": {
            "type": "geojson",
            "data": json_SPEC_MCC_01_2
        }
                    ,
        "SPEC_MCC_01_3": {
            "type": "geojson",
            "data": json_SPEC_MCC_01_3
        }
                    ,
        "SPEC_MCC_01_4": {
            "type": "geojson",
            "data": json_SPEC_MCC_01_4
        }
                    ,
        "SPEC_MCC_01_5": {
            "type": "geojson",
            "data": json_SPEC_MCC_01_5
        }
                    ,
        "SPEC_MCC_01_6": {
            "type": "geojson",
            "data": json_SPEC_MCC_01_6
        }
                    ,
        "SPEC_MCC_01_7": {
            "type": "geojson",
            "data": json_SPEC_MCC_01_7
        }
                    ,
        "SPEC_MCC_01_8": {
            "type": "geojson",
            "data": json_SPEC_MCC_01_8
        }
                    ,
        "SPEC_MCC_01_9": {
            "type": "geojson",
            "data": json_SPEC_MCC_01_9
        }
                    ,
        "SPEC_MCC_01_10": {
            "type": "geojson",
            "data": json_SPEC_MCC_01_10
        }
                    ,
        "SPEC_MCC_01_11": {
            "type": "geojson",
            "data": json_SPEC_MCC_01_11
        }
                    ,
        "SPEC_MCC_01_12": {
            "type": "geojson",
            "data": json_SPEC_MCC_01_12
        }
                    ,
        "SPEC_MCC_01_13": {
            "type": "geojson",
            "data": json_SPEC_MCC_01_13
        }
                    },
    "sprite": "",
    "glyphs": "https://glfonts.lukasmartinelli.ch/fonts/{fontstack}/{range}.pbf",
    "layers": [
        {
            "id": "background",
            "type": "background",
            "layout": {},
            "paint": {
                "background-color": "#ffffff"
            }
        },
        {
            "id": "lyr_SPEC_MCC_01_0_0",
            "type": "circle",
            "source": "SPEC_MCC_01_0",
            "layout": {},
            "paint": {'circle-radius': ['/', 32.73810714285714, 2], 'circle-color': '#33a02c', 'circle-opacity': 1.0, 'circle-stroke-width': 0.7142857142857143, 'circle-stroke-color': '#b80808'}
        }
,
        {
            "id": "lyr_GoogleMaps_1_1",
            "type": "raster",
            "source": "GoogleMaps_1"
        },
        {
            "id": "lyr_SPEC_MCC_01_2_0",
            "type": "circle",
            "source": "SPEC_MCC_01_2",
            "layout": {},
            "paint": {'circle-radius': ['/', 7.142857142857142, 2], 'circle-color': '#c43c39', 'circle-opacity': 1.0, 'circle-stroke-width': 1, 'circle-stroke-color': '#232323'}
        }
,
        {
            "id": "lyr_SPEC_MCC_01_3_0",
            "type": "circle",
            "source": "SPEC_MCC_01_3",
            "layout": {},
            "paint": {'circle-radius': ['/', 7.142857142857142, 2], 'circle-color': '#e5b636', 'circle-opacity': 1.0, 'circle-stroke-width': 1, 'circle-stroke-color': '#232323'}
        }
,
        {
            "id": "lyr_SPEC_MCC_01_4_0",
            "type": "circle",
            "source": "SPEC_MCC_01_4",
            "layout": {},
            "paint": {'circle-radius': ['/', 7.142857142857142, 2], 'circle-color': '#e15989', 'circle-opacity': 1.0, 'circle-stroke-width': 1, 'circle-stroke-color': '#232323'}
        }
,
        {
            "id": "lyr_SPEC_MCC_01_5_0",
            "type": "circle",
            "source": "SPEC_MCC_01_5",
            "layout": {},
            "paint": {'circle-radius': ['/', 7.142857142857142, 2], 'circle-color': '#becf50', 'circle-opacity': 1.0, 'circle-stroke-width': 1, 'circle-stroke-color': '#232323'}
        }
,
        {
            "id": "lyr_SPEC_MCC_01_6_0",
            "type": "circle",
            "source": "SPEC_MCC_01_6",
            "layout": {},
            "paint": {'circle-radius': ['/', 7.142857142857142, 2], 'circle-color': '#987db7', 'circle-opacity': 1.0, 'circle-stroke-width': 1, 'circle-stroke-color': '#232323'}
        }
,
        {
            "id": "lyr_SPEC_MCC_01_7_0",
            "type": "circle",
            "source": "SPEC_MCC_01_7",
            "layout": {},
            "paint": {'circle-radius': ['/', 7.142857142857142, 2], 'circle-color': '#e77148', 'circle-opacity': 1.0, 'circle-stroke-width': 1, 'circle-stroke-color': '#232323'}
        }
,
        {
            "id": "lyr_SPEC_MCC_01_8_0",
            "type": "circle",
            "source": "SPEC_MCC_01_8",
            "layout": {},
            "paint": {'circle-radius': ['/', 7.142857142857142, 2], 'circle-color': '#b7484b', 'circle-opacity': 1.0, 'circle-stroke-width': 1, 'circle-stroke-color': '#232323'}
        }
,
        {
            "id": "lyr_SPEC_MCC_01_9_0",
            "type": "circle",
            "source": "SPEC_MCC_01_9",
            "layout": {},
            "paint": {'circle-radius': ['/', 7.142857142857142, 2], 'circle-color': '#ff9e17', 'circle-opacity': 1.0, 'circle-stroke-width': 1, 'circle-stroke-color': '#232323'}
        }
,
        {
            "id": "lyr_SPEC_MCC_01_10_0",
            "type": "circle",
            "source": "SPEC_MCC_01_10",
            "layout": {},
            "paint": {'circle-radius': ['/', 7.142857142857142, 2], 'circle-color': '#e8718d', 'circle-opacity': 1.0, 'circle-stroke-width': 1, 'circle-stroke-color': '#232323'}
        }
,
        {
            "id": "lyr_SPEC_MCC_01_11_0",
            "type": "circle",
            "source": "SPEC_MCC_01_11",
            "layout": {},
            "paint": {'circle-radius': ['/', 7.142857142857142, 2], 'circle-color': '#8d5a99', 'circle-opacity': 1.0, 'circle-stroke-width': 1, 'circle-stroke-color': '#232323'}
        }
,
        {
            "id": "lyr_SPEC_MCC_01_12_0",
            "type": "circle",
            "source": "SPEC_MCC_01_12",
            "layout": {},
            "paint": {'circle-radius': ['/', 7.142857142857142, 2], 'circle-color': '#f3a6b2', 'circle-opacity': 1.0, 'circle-stroke-width': 1, 'circle-stroke-color': '#232323'}
        }
,
        {
            "id": "lyr_SPEC_MCC_01_13_0",
            "type": "circle",
            "source": "SPEC_MCC_01_13",
            "layout": {},
            "paint": {'circle-radius': ['/', 7.142857142857142, 2], 'circle-color': '#729b6f', 'circle-opacity': 1.0, 'circle-stroke-width': 1, 'circle-stroke-color': '#232323'}
        }
],
}