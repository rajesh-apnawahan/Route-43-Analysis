var wms_layers = [];


        var lyr_OpenStreetMap_0 = new ol.layer.Tile({
            'title': 'OpenStreetMap',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_Pimpalesaudagar_1 = new ol.format.GeoJSON();
var features_Pimpalesaudagar_1 = format_Pimpalesaudagar_1.readFeatures(json_Pimpalesaudagar_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Pimpalesaudagar_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Pimpalesaudagar_1.addFeatures(features_Pimpalesaudagar_1);
var lyr_Pimpalesaudagar_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Pimpalesaudagar_1, 
                style: style_Pimpalesaudagar_1,
                popuplayertitle: "Pimpale saudagar",
                interactive: true,
                title: '<img src="styles/legend/Pimpalesaudagar_1.png" /> Pimpale saudagar'
            });
var format_Pimple_2 = new ol.format.GeoJSON();
var features_Pimple_2 = format_Pimple_2.readFeatures(json_Pimple_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Pimple_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Pimple_2.addFeatures(features_Pimple_2);
var lyr_Pimple_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Pimple_2, 
                style: style_Pimple_2,
                popuplayertitle: "Pimple",
                interactive: true,
                title: '<img src="styles/legend/Pimple_2.png" /> Pimple'
            });
var format_Keshavnagar_3 = new ol.format.GeoJSON();
var features_Keshavnagar_3 = format_Keshavnagar_3.readFeatures(json_Keshavnagar_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Keshavnagar_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Keshavnagar_3.addFeatures(features_Keshavnagar_3);
var lyr_Keshavnagar_3 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Keshavnagar_3, 
                style: style_Keshavnagar_3,
                popuplayertitle: "Keshavnagar",
                interactive: true,
                title: '<img src="styles/legend/Keshavnagar_3.png" /> Keshavnagar'
            });
var format_Yavatmal_4 = new ol.format.GeoJSON();
var features_Yavatmal_4 = format_Yavatmal_4.readFeatures(json_Yavatmal_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Yavatmal_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Yavatmal_4.addFeatures(features_Yavatmal_4);
var lyr_Yavatmal_4 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Yavatmal_4, 
                style: style_Yavatmal_4,
                popuplayertitle: "Yavatmal",
                interactive: true,
                title: '<img src="styles/legend/Yavatmal_4.png" /> Yavatmal'
            });
var format_Lahagaon_5 = new ol.format.GeoJSON();
var features_Lahagaon_5 = format_Lahagaon_5.readFeatures(json_Lahagaon_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Lahagaon_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Lahagaon_5.addFeatures(features_Lahagaon_5);
var lyr_Lahagaon_5 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Lahagaon_5, 
                style: style_Lahagaon_5,
                popuplayertitle: "Lahagaon",
                interactive: true,
                title: '<img src="styles/legend/Lahagaon_5.png" /> Lahagaon'
            });
var format_KirkeeBoundary_6 = new ol.format.GeoJSON();
var features_KirkeeBoundary_6 = format_KirkeeBoundary_6.readFeatures(json_KirkeeBoundary_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_KirkeeBoundary_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_KirkeeBoundary_6.addFeatures(features_KirkeeBoundary_6);
var lyr_KirkeeBoundary_6 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_KirkeeBoundary_6, 
                style: style_KirkeeBoundary_6,
                popuplayertitle: "Kirkee Boundary",
                interactive: true,
                title: '<img src="styles/legend/KirkeeBoundary_6.png" /> Kirkee Boundary'
            });
var format_PimpreChinchwadboundary_7 = new ol.format.GeoJSON();
var features_PimpreChinchwadboundary_7 = format_PimpreChinchwadboundary_7.readFeatures(json_PimpreChinchwadboundary_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_PimpreChinchwadboundary_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PimpreChinchwadboundary_7.addFeatures(features_PimpreChinchwadboundary_7);
var lyr_PimpreChinchwadboundary_7 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_PimpreChinchwadboundary_7, 
                style: style_PimpreChinchwadboundary_7,
                popuplayertitle: "Pimpre Chinchwad boundary",
                interactive: true,
                title: '<img src="styles/legend/PimpreChinchwadboundary_7.png" /> Pimpre Chinchwad boundary'
            });
var format_PuneGeoBoundary_8 = new ol.format.GeoJSON();
var features_PuneGeoBoundary_8 = format_PuneGeoBoundary_8.readFeatures(json_PuneGeoBoundary_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_PuneGeoBoundary_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PuneGeoBoundary_8.addFeatures(features_PuneGeoBoundary_8);
var lyr_PuneGeoBoundary_8 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_PuneGeoBoundary_8, 
                style: style_PuneGeoBoundary_8,
                popuplayertitle: "Pune Geo Boundary",
                interactive: true,
                title: '<img src="styles/legend/PuneGeoBoundary_8.png" /> Pune Geo Boundary'
            });
var format_Route43Pop1000mtrs_9 = new ol.format.GeoJSON();
var features_Route43Pop1000mtrs_9 = format_Route43Pop1000mtrs_9.readFeatures(json_Route43Pop1000mtrs_9, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Route43Pop1000mtrs_9 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Route43Pop1000mtrs_9.addFeatures(features_Route43Pop1000mtrs_9);
var lyr_Route43Pop1000mtrs_9 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Route43Pop1000mtrs_9, 
                style: style_Route43Pop1000mtrs_9,
                popuplayertitle: "Route 43 Pop 1000 mtrs",
                interactive: true,
                title: '<img src="styles/legend/Route43Pop1000mtrs_9.png" /> Route 43 Pop 1000 mtrs'
            });
var format_Route43Pop500mtrs_10 = new ol.format.GeoJSON();
var features_Route43Pop500mtrs_10 = format_Route43Pop500mtrs_10.readFeatures(json_Route43Pop500mtrs_10, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Route43Pop500mtrs_10 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Route43Pop500mtrs_10.addFeatures(features_Route43Pop500mtrs_10);
var lyr_Route43Pop500mtrs_10 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Route43Pop500mtrs_10, 
                style: style_Route43Pop500mtrs_10,
                popuplayertitle: "Route 43 Pop 500 mtrs",
                interactive: true,
                title: '<img src="styles/legend/Route43Pop500mtrs_10.png" /> Route 43 Pop 500 mtrs'
            });
var format_Route43Pop250mtrs_11 = new ol.format.GeoJSON();
var features_Route43Pop250mtrs_11 = format_Route43Pop250mtrs_11.readFeatures(json_Route43Pop250mtrs_11, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Route43Pop250mtrs_11 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Route43Pop250mtrs_11.addFeatures(features_Route43Pop250mtrs_11);
var lyr_Route43Pop250mtrs_11 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Route43Pop250mtrs_11, 
                style: style_Route43Pop250mtrs_11,
                popuplayertitle: "Route 43 Pop 250 mtrs",
                interactive: true,
                title: '<img src="styles/legend/Route43Pop250mtrs_11.png" /> Route 43 Pop 250 mtrs'
            });
var format_43Dstops_12 = new ol.format.GeoJSON();
var features_43Dstops_12 = format_43Dstops_12.readFeatures(json_43Dstops_12, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_43Dstops_12 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_43Dstops_12.addFeatures(features_43Dstops_12);
var lyr_43Dstops_12 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_43Dstops_12, 
                style: style_43Dstops_12,
                popuplayertitle: "43-D stops",
                interactive: true,
    title: '43-D stops<br />\
    <img src="styles/legend/43Dstops_12_0.png" /> 1.0<br />\
    <img src="styles/legend/43Dstops_12_1.png" /> 10.0<br />\
    <img src="styles/legend/43Dstops_12_2.png" /> 11.0<br />\
    <img src="styles/legend/43Dstops_12_3.png" /> 12.0<br />\
    <img src="styles/legend/43Dstops_12_4.png" /> 13.0<br />\
    <img src="styles/legend/43Dstops_12_5.png" /> 14.0<br />\
    <img src="styles/legend/43Dstops_12_6.png" /> 15.0<br />\
    <img src="styles/legend/43Dstops_12_7.png" /> 16.0<br />\
    <img src="styles/legend/43Dstops_12_8.png" /> 17.0<br />\
    <img src="styles/legend/43Dstops_12_9.png" /> 18.0<br />\
    <img src="styles/legend/43Dstops_12_10.png" /> 19.0<br />\
    <img src="styles/legend/43Dstops_12_11.png" /> 2.0<br />\
    <img src="styles/legend/43Dstops_12_12.png" /> 20.0<br />\
    <img src="styles/legend/43Dstops_12_13.png" /> 3.0<br />\
    <img src="styles/legend/43Dstops_12_14.png" /> 4.0<br />\
    <img src="styles/legend/43Dstops_12_15.png" /> 5.0<br />\
    <img src="styles/legend/43Dstops_12_16.png" /> 6.0<br />\
    <img src="styles/legend/43Dstops_12_17.png" /> 7.0<br />\
    <img src="styles/legend/43Dstops_12_18.png" /> 8.0<br />\
    <img src="styles/legend/43Dstops_12_19.png" /> 9.0<br />\
    <img src="styles/legend/43Dstops_12_20.png" /> <br />'
        });
var format_Route43DStats_13 = new ol.format.GeoJSON();
var features_Route43DStats_13 = format_Route43DStats_13.readFeatures(json_Route43DStats_13, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Route43DStats_13 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Route43DStats_13.addFeatures(features_Route43DStats_13);
var lyr_Route43DStats_13 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Route43DStats_13, 
                style: style_Route43DStats_13,
                popuplayertitle: "Route 43D Stats",
                interactive: true,
                title: '<img src="styles/legend/Route43DStats_13.png" /> Route 43D Stats'
            });
var format_43UStops_14 = new ol.format.GeoJSON();
var features_43UStops_14 = format_43UStops_14.readFeatures(json_43UStops_14, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_43UStops_14 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_43UStops_14.addFeatures(features_43UStops_14);
var lyr_43UStops_14 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_43UStops_14, 
                style: style_43UStops_14,
                popuplayertitle: "43-U Stops",
                interactive: true,
    title: '43-U Stops<br />\
    <img src="styles/legend/43UStops_14_0.png" /> 1.0<br />\
    <img src="styles/legend/43UStops_14_1.png" /> 10.0<br />\
    <img src="styles/legend/43UStops_14_2.png" /> 11.0<br />\
    <img src="styles/legend/43UStops_14_3.png" /> 12.0<br />\
    <img src="styles/legend/43UStops_14_4.png" /> 13.0<br />\
    <img src="styles/legend/43UStops_14_5.png" /> 14.0<br />\
    <img src="styles/legend/43UStops_14_6.png" /> 15.0<br />\
    <img src="styles/legend/43UStops_14_7.png" /> 16.0<br />\
    <img src="styles/legend/43UStops_14_8.png" /> 17.0<br />\
    <img src="styles/legend/43UStops_14_9.png" /> 18.0<br />\
    <img src="styles/legend/43UStops_14_10.png" /> 19.0<br />\
    <img src="styles/legend/43UStops_14_11.png" /> 2.0<br />\
    <img src="styles/legend/43UStops_14_12.png" /> 20.0<br />\
    <img src="styles/legend/43UStops_14_13.png" /> 3.0<br />\
    <img src="styles/legend/43UStops_14_14.png" /> 4.0<br />\
    <img src="styles/legend/43UStops_14_15.png" /> 5.0<br />\
    <img src="styles/legend/43UStops_14_16.png" /> 6.0<br />\
    <img src="styles/legend/43UStops_14_17.png" /> 7.0<br />\
    <img src="styles/legend/43UStops_14_18.png" /> 8.0<br />\
    <img src="styles/legend/43UStops_14_19.png" /> 9.0<br />\
    <img src="styles/legend/43UStops_14_20.png" /> <br />'
        });
var format_Route43UStats_15 = new ol.format.GeoJSON();
var features_Route43UStats_15 = format_Route43UStats_15.readFeatures(json_Route43UStats_15, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Route43UStats_15 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Route43UStats_15.addFeatures(features_Route43UStats_15);
var lyr_Route43UStats_15 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Route43UStats_15, 
                style: style_Route43UStats_15,
                popuplayertitle: "Route 43U Stats",
                interactive: true,
                title: '<img src="styles/legend/Route43UStats_15.png" /> Route 43U Stats'
            });
var format_Route43RecomPop1000Mtrs_16 = new ol.format.GeoJSON();
var features_Route43RecomPop1000Mtrs_16 = format_Route43RecomPop1000Mtrs_16.readFeatures(json_Route43RecomPop1000Mtrs_16, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Route43RecomPop1000Mtrs_16 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Route43RecomPop1000Mtrs_16.addFeatures(features_Route43RecomPop1000Mtrs_16);
var lyr_Route43RecomPop1000Mtrs_16 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Route43RecomPop1000Mtrs_16, 
                style: style_Route43RecomPop1000Mtrs_16,
                popuplayertitle: "Route 43 Recom Pop 1000 Mtrs",
                interactive: true,
                title: '<img src="styles/legend/Route43RecomPop1000Mtrs_16.png" /> Route 43 Recom Pop 1000 Mtrs'
            });
var format_Route43RecomPop500Mtrs_17 = new ol.format.GeoJSON();
var features_Route43RecomPop500Mtrs_17 = format_Route43RecomPop500Mtrs_17.readFeatures(json_Route43RecomPop500Mtrs_17, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Route43RecomPop500Mtrs_17 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Route43RecomPop500Mtrs_17.addFeatures(features_Route43RecomPop500Mtrs_17);
var lyr_Route43RecomPop500Mtrs_17 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Route43RecomPop500Mtrs_17, 
                style: style_Route43RecomPop500Mtrs_17,
                popuplayertitle: "Route 43 Recom Pop 500 Mtrs",
                interactive: true,
                title: '<img src="styles/legend/Route43RecomPop500Mtrs_17.png" /> Route 43 Recom Pop 500 Mtrs'
            });
var format_Route43RecomPop100mtrs_18 = new ol.format.GeoJSON();
var features_Route43RecomPop100mtrs_18 = format_Route43RecomPop100mtrs_18.readFeatures(json_Route43RecomPop100mtrs_18, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Route43RecomPop100mtrs_18 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Route43RecomPop100mtrs_18.addFeatures(features_Route43RecomPop100mtrs_18);
var lyr_Route43RecomPop100mtrs_18 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Route43RecomPop100mtrs_18, 
                style: style_Route43RecomPop100mtrs_18,
                popuplayertitle: "Route 43 Recom Pop 100 mtrs",
                interactive: true,
                title: '<img src="styles/legend/Route43RecomPop100mtrs_18.png" /> Route 43 Recom Pop 100 mtrs'
            });
var format_Stopsonrecomroute_19 = new ol.format.GeoJSON();
var features_Stopsonrecomroute_19 = format_Stopsonrecomroute_19.readFeatures(json_Stopsonrecomroute_19, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Stopsonrecomroute_19 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Stopsonrecomroute_19.addFeatures(features_Stopsonrecomroute_19);
var lyr_Stopsonrecomroute_19 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Stopsonrecomroute_19, 
                style: style_Stopsonrecomroute_19,
                popuplayertitle: "Stops on recom route",
                interactive: true,
                title: '<img src="styles/legend/Stopsonrecomroute_19.png" /> Stops on recom route'
            });
var format_Route43Recomm_20 = new ol.format.GeoJSON();
var features_Route43Recomm_20 = format_Route43Recomm_20.readFeatures(json_Route43Recomm_20, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Route43Recomm_20 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Route43Recomm_20.addFeatures(features_Route43Recomm_20);
var lyr_Route43Recomm_20 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Route43Recomm_20, 
                style: style_Route43Recomm_20,
                popuplayertitle: "Route 43 Recomm",
                interactive: true,
                title: '<img src="styles/legend/Route43Recomm_20.png" /> Route 43 Recomm'
            });
var format_StopsRecompop5min_21 = new ol.format.GeoJSON();
var features_StopsRecompop5min_21 = format_StopsRecompop5min_21.readFeatures(json_StopsRecompop5min_21, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_StopsRecompop5min_21 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_StopsRecompop5min_21.addFeatures(features_StopsRecompop5min_21);
var lyr_StopsRecompop5min_21 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_StopsRecompop5min_21, 
                style: style_StopsRecompop5min_21,
                popuplayertitle: "Stops Recom pop 5 min",
                interactive: true,
    title: 'Stops Recom pop 5 min<br />\
    <img src="styles/legend/StopsRecompop5min_21_0.png" /> 5 min<br />'
        });
var format_StopsRecomPop10Min_22 = new ol.format.GeoJSON();
var features_StopsRecomPop10Min_22 = format_StopsRecomPop10Min_22.readFeatures(json_StopsRecomPop10Min_22, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_StopsRecomPop10Min_22 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_StopsRecomPop10Min_22.addFeatures(features_StopsRecomPop10Min_22);
var lyr_StopsRecomPop10Min_22 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_StopsRecomPop10Min_22, 
                style: style_StopsRecomPop10Min_22,
                popuplayertitle: "Stops Recom Pop 10 Min",
                interactive: true,
    title: 'Stops Recom Pop 10 Min<br />\
    <img src="styles/legend/StopsRecomPop10Min_22_0.png" /> 10 min<br />'
        });
var format_Route43Pop5min_23 = new ol.format.GeoJSON();
var features_Route43Pop5min_23 = format_Route43Pop5min_23.readFeatures(json_Route43Pop5min_23, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Route43Pop5min_23 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Route43Pop5min_23.addFeatures(features_Route43Pop5min_23);
var lyr_Route43Pop5min_23 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Route43Pop5min_23, 
                style: style_Route43Pop5min_23,
                popuplayertitle: "Route 43 Pop 5 min",
                interactive: true,
    title: 'Route 43 Pop 5 min<br />\
    <img src="styles/legend/Route43Pop5min_23_0.png" /> 5 min<br />'
        });
var format_Route43Pop10Min_24 = new ol.format.GeoJSON();
var features_Route43Pop10Min_24 = format_Route43Pop10Min_24.readFeatures(json_Route43Pop10Min_24, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Route43Pop10Min_24 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Route43Pop10Min_24.addFeatures(features_Route43Pop10Min_24);
var lyr_Route43Pop10Min_24 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Route43Pop10Min_24, 
                style: style_Route43Pop10Min_24,
                popuplayertitle: "Route 43 Pop 10 Min",
                interactive: true,
    title: 'Route 43 Pop 10 Min<br />\
    <img src="styles/legend/Route43Pop10Min_24_0.png" /> 10 min<br />'
        });
var format_Currentroutestops600mtrs_25 = new ol.format.GeoJSON();
var features_Currentroutestops600mtrs_25 = format_Currentroutestops600mtrs_25.readFeatures(json_Currentroutestops600mtrs_25, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Currentroutestops600mtrs_25 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Currentroutestops600mtrs_25.addFeatures(features_Currentroutestops600mtrs_25);
var lyr_Currentroutestops600mtrs_25 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Currentroutestops600mtrs_25, 
                style: style_Currentroutestops600mtrs_25,
                popuplayertitle: "Current route stops 600 mtrs",
                interactive: true,
                title: '<img src="styles/legend/Currentroutestops600mtrs_25.png" /> Current route stops 600 mtrs'
            });
var format_Route43StopOptPop_26 = new ol.format.GeoJSON();
var features_Route43StopOptPop_26 = format_Route43StopOptPop_26.readFeatures(json_Route43StopOptPop_26, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Route43StopOptPop_26 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Route43StopOptPop_26.addFeatures(features_Route43StopOptPop_26);
var lyr_Route43StopOptPop_26 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Route43StopOptPop_26, 
                style: style_Route43StopOptPop_26,
                popuplayertitle: "Route 43 Stop Opt Pop",
                interactive: true,
    title: 'Route 43 Stop Opt Pop<br />\
    <img src="styles/legend/Route43StopOptPop_26_0.png" /> 10 min<br />'
        });

lyr_OpenStreetMap_0.setVisible(true);lyr_Pimpalesaudagar_1.setVisible(true);lyr_Pimple_2.setVisible(true);lyr_Keshavnagar_3.setVisible(true);lyr_Yavatmal_4.setVisible(true);lyr_Lahagaon_5.setVisible(true);lyr_KirkeeBoundary_6.setVisible(true);lyr_PimpreChinchwadboundary_7.setVisible(true);lyr_PuneGeoBoundary_8.setVisible(true);lyr_Route43Pop1000mtrs_9.setVisible(true);lyr_Route43Pop500mtrs_10.setVisible(true);lyr_Route43Pop250mtrs_11.setVisible(true);lyr_43Dstops_12.setVisible(true);lyr_Route43DStats_13.setVisible(true);lyr_43UStops_14.setVisible(true);lyr_Route43UStats_15.setVisible(true);lyr_Route43RecomPop1000Mtrs_16.setVisible(true);lyr_Route43RecomPop500Mtrs_17.setVisible(true);lyr_Route43RecomPop100mtrs_18.setVisible(true);lyr_Stopsonrecomroute_19.setVisible(true);lyr_Route43Recomm_20.setVisible(true);lyr_StopsRecompop5min_21.setVisible(true);lyr_StopsRecomPop10Min_22.setVisible(true);lyr_Route43Pop5min_23.setVisible(true);lyr_Route43Pop10Min_24.setVisible(true);lyr_Currentroutestops600mtrs_25.setVisible(true);lyr_Route43StopOptPop_26.setVisible(true);
var layersList = [lyr_OpenStreetMap_0,lyr_Pimpalesaudagar_1,lyr_Pimple_2,lyr_Keshavnagar_3,lyr_Yavatmal_4,lyr_Lahagaon_5,lyr_KirkeeBoundary_6,lyr_PimpreChinchwadboundary_7,lyr_PuneGeoBoundary_8,lyr_Route43Pop1000mtrs_9,lyr_Route43Pop500mtrs_10,lyr_Route43Pop250mtrs_11,lyr_43Dstops_12,lyr_Route43DStats_13,lyr_43UStops_14,lyr_Route43UStats_15,lyr_Route43RecomPop1000Mtrs_16,lyr_Route43RecomPop500Mtrs_17,lyr_Route43RecomPop100mtrs_18,lyr_Stopsonrecomroute_19,lyr_Route43Recomm_20,lyr_StopsRecompop5min_21,lyr_StopsRecomPop10Min_22,lyr_Route43Pop5min_23,lyr_Route43Pop10Min_24,lyr_Currentroutestops600mtrs_25,lyr_Route43StopOptPop_26];
lyr_Pimpalesaudagar_1.set('fieldAliases', {'shapeName': 'shapeName', 'shapeISO': 'shapeISO', 'shapeID': 'shapeID', 'shapeGroup': 'shapeGroup', 'shapeType': 'shapeType', });
lyr_Pimple_2.set('fieldAliases', {'shapeName': 'shapeName', 'shapeISO': 'shapeISO', 'shapeID': 'shapeID', 'shapeGroup': 'shapeGroup', 'shapeType': 'shapeType', });
lyr_Keshavnagar_3.set('fieldAliases', {'shapeName': 'shapeName', 'shapeISO': 'shapeISO', 'shapeID': 'shapeID', 'shapeGroup': 'shapeGroup', 'shapeType': 'shapeType', });
lyr_Yavatmal_4.set('fieldAliases', {'shapeName': 'shapeName', 'shapeISO': 'shapeISO', 'shapeID': 'shapeID', 'shapeGroup': 'shapeGroup', 'shapeType': 'shapeType', });
lyr_Lahagaon_5.set('fieldAliases', {'shapeName': 'shapeName', 'shapeISO': 'shapeISO', 'shapeID': 'shapeID', 'shapeGroup': 'shapeGroup', 'shapeType': 'shapeType', });
lyr_KirkeeBoundary_6.set('fieldAliases', {'shapeName': 'shapeName', 'shapeISO': 'shapeISO', 'shapeID': 'shapeID', 'shapeGroup': 'shapeGroup', 'shapeType': 'shapeType', });
lyr_PimpreChinchwadboundary_7.set('fieldAliases', {'shapeName': 'shapeName', 'shapeISO': 'shapeISO', 'shapeID': 'shapeID', 'shapeGroup': 'shapeGroup', 'shapeType': 'shapeType', });
lyr_PuneGeoBoundary_8.set('fieldAliases', {'shapeName': 'shapeName', 'shapeISO': 'shapeISO', 'shapeID': 'shapeID', 'shapeGroup': 'shapeGroup', 'shapeType': 'shapeType', });
lyr_Route43Pop1000mtrs_9.set('fieldAliases', {'Name': 'Name', 'descriptio': 'descriptio', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMo': 'altitudeMo', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', '_count': '_count', '_sum': '_sum', '_mean': '_mean', 'Pop': 'Pop', });
lyr_Route43Pop500mtrs_10.set('fieldAliases', {'Name': 'Name', 'descriptio': 'descriptio', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMo': 'altitudeMo', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', '_count': '_count', '_sum': '_sum', '_mean': '_mean', 'Pop': 'Pop', });
lyr_Route43Pop250mtrs_11.set('fieldAliases', {'Name': 'Name', 'descriptio': 'descriptio', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMo': 'altitudeMo', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', '_count': '_count', '_sum': '_sum', '_mean': '_mean', 'Pop': 'Pop', });
lyr_43Dstops_12.set('fieldAliases', {'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', 'Route_Name': 'Route_Name', 'Stg': 'Stg', 'RouteCode': 'RouteCode', 'Stop_Code': 'Stop_Code', 'Direction': 'Direction', 'K__M_': 'K__M_', 'Lat': 'Lat', 'Long': 'Long', 'Ticket_Fair': 'Ticket_Fair', });
lyr_Route43DStats_13.set('fieldAliases', {'DIST_KM': 'DIST_KM', 'DURATION_H': 'DURATION_H', 'PROFILE': 'PROFILE', 'PREF': 'PREF', 'OPTIONS': 'OPTIONS', 'FROM_ID': 'FROM_ID', 'TO_ID': 'TO_ID', 'Time': 'Time', 'Gas': 'Gas', });
lyr_43UStops_14.set('fieldAliases', {'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', 'Route_Name': 'Route_Name', 'Stg': 'Stg', 'RouteCode': 'RouteCode', 'Stop_Code': 'Stop_Code', 'Direction': 'Direction', 'K__M_': 'K__M_', 'Lat': 'Lat', 'Long': 'Long', 'Ticket_Fair': 'Ticket_Fair', });
lyr_Route43UStats_15.set('fieldAliases', {'DIST_KM': 'DIST_KM', 'DURATION_H': 'DURATION_H', 'PROFILE': 'PROFILE', 'PREF': 'PREF', 'OPTIONS': 'OPTIONS', 'FROM_ID': 'FROM_ID', 'TO_ID': 'TO_ID', 'Time': 'Time', 'Fuel': 'Fuel', });
lyr_Route43RecomPop1000Mtrs_16.set('fieldAliases', {'DIST_KM': 'DIST_KM', 'DURATION_H': 'DURATION_H', 'PROFILE': 'PROFILE', 'PREF': 'PREF', 'OPTIONS': 'OPTIONS', 'FROM_ID': 'FROM_ID', 'TO_ID': 'TO_ID', '_count': '_count', '_sum': '_sum', '_mean': '_mean', 'Pop': 'Pop', });
lyr_Route43RecomPop500Mtrs_17.set('fieldAliases', {'DIST_KM': 'DIST_KM', 'DURATION_H': 'DURATION_H', 'PROFILE': 'PROFILE', 'PREF': 'PREF', 'OPTIONS': 'OPTIONS', 'FROM_ID': 'FROM_ID', 'TO_ID': 'TO_ID', '_count': '_count', '_sum': '_sum', '_mean': '_mean', 'Pop': 'Pop', });
lyr_Route43RecomPop100mtrs_18.set('fieldAliases', {'DIST_KM': 'DIST_KM', 'DURATION_H': 'DURATION_H', 'PROFILE': 'PROFILE', 'PREF': 'PREF', 'OPTIONS': 'OPTIONS', 'FROM_ID': 'FROM_ID', 'TO_ID': 'TO_ID', '_count': '_count', '_sum': '_sum', '_mean': '_mean', 'Pop': 'Pop', });
lyr_Stopsonrecomroute_19.set('fieldAliases', {'DIST_KM': 'DIST_KM', 'DURATION_H': 'DURATION_H', 'PROFILE': 'PROFILE', 'PREF': 'PREF', 'OPTIONS': 'OPTIONS', 'FROM_ID': 'FROM_ID', 'TO_ID': 'TO_ID', 'distance': 'distance', 'angle': 'angle', });
lyr_Route43Recomm_20.set('fieldAliases', {'DIST_KM': 'DIST_KM', 'DURATION_H': 'DURATION_H', 'PROFILE': 'PROFILE', 'PREF': 'PREF', 'OPTIONS': 'OPTIONS', 'FROM_ID': 'FROM_ID', 'TO_ID': 'TO_ID', });
lyr_StopsRecompop5min_21.set('fieldAliases', {'ID': 'ID', 'CENTER_LON': 'CENTER_LON', 'CENTER_LAT': 'CENTER_LAT', 'AA_MINS': 'AA_MINS', 'AA_MODE': 'AA_MODE', 'TOTAL_POP': 'TOTAL_POP', });
lyr_StopsRecomPop10Min_22.set('fieldAliases', {'ID': 'ID', 'CENTER_LON': 'CENTER_LON', 'CENTER_LAT': 'CENTER_LAT', 'AA_MINS': 'AA_MINS', 'AA_MODE': 'AA_MODE', 'TOTAL_POP': 'TOTAL_POP', });
lyr_Route43Pop5min_23.set('fieldAliases', {'ID': 'ID', 'CENTER_LON': 'CENTER_LON', 'CENTER_LAT': 'CENTER_LAT', 'AA_MINS': 'AA_MINS', 'AA_MODE': 'AA_MODE', 'TOTAL_POP': 'TOTAL_POP', });
lyr_Route43Pop10Min_24.set('fieldAliases', {'ID': 'ID', 'CENTER_LON': 'CENTER_LON', 'CENTER_LAT': 'CENTER_LAT', 'AA_MINS': 'AA_MINS', 'AA_MODE': 'AA_MODE', 'TOTAL_POP': 'TOTAL_POP', });
lyr_Currentroutestops600mtrs_25.set('fieldAliases', {'Name': 'Name', 'descriptio': 'descriptio', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMo': 'altitudeMo', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', 'distance': 'distance', 'angle': 'angle', });
lyr_Route43StopOptPop_26.set('fieldAliases', {'ID': 'ID', 'CENTER_LON': 'CENTER_LON', 'CENTER_LAT': 'CENTER_LAT', 'AA_MINS': 'AA_MINS', 'AA_MODE': 'AA_MODE', 'TOTAL_POP': 'TOTAL_POP', });
lyr_Pimpalesaudagar_1.set('fieldImages', {'shapeName': 'TextEdit', 'shapeISO': 'TextEdit', 'shapeID': 'TextEdit', 'shapeGroup': 'TextEdit', 'shapeType': 'TextEdit', });
lyr_Pimple_2.set('fieldImages', {'shapeName': 'TextEdit', 'shapeISO': 'TextEdit', 'shapeID': 'TextEdit', 'shapeGroup': 'TextEdit', 'shapeType': 'TextEdit', });
lyr_Keshavnagar_3.set('fieldImages', {'shapeName': 'TextEdit', 'shapeISO': 'TextEdit', 'shapeID': 'TextEdit', 'shapeGroup': 'TextEdit', 'shapeType': 'TextEdit', });
lyr_Yavatmal_4.set('fieldImages', {'shapeName': 'TextEdit', 'shapeISO': 'TextEdit', 'shapeID': 'TextEdit', 'shapeGroup': 'TextEdit', 'shapeType': 'TextEdit', });
lyr_Lahagaon_5.set('fieldImages', {'shapeName': 'TextEdit', 'shapeISO': 'TextEdit', 'shapeID': 'TextEdit', 'shapeGroup': 'TextEdit', 'shapeType': 'TextEdit', });
lyr_KirkeeBoundary_6.set('fieldImages', {'shapeName': 'TextEdit', 'shapeISO': 'TextEdit', 'shapeID': 'TextEdit', 'shapeGroup': 'TextEdit', 'shapeType': 'TextEdit', });
lyr_PimpreChinchwadboundary_7.set('fieldImages', {'shapeName': 'TextEdit', 'shapeISO': 'TextEdit', 'shapeID': 'TextEdit', 'shapeGroup': 'TextEdit', 'shapeType': 'TextEdit', });
lyr_PuneGeoBoundary_8.set('fieldImages', {'shapeName': 'TextEdit', 'shapeISO': 'TextEdit', 'shapeID': 'TextEdit', 'shapeGroup': 'TextEdit', 'shapeType': 'TextEdit', });
lyr_Route43Pop1000mtrs_9.set('fieldImages', {'Name': 'TextEdit', 'descriptio': 'TextEdit', 'timestamp': 'TextEdit', 'begin': 'TextEdit', 'end': 'TextEdit', 'altitudeMo': 'TextEdit', 'tessellate': 'TextEdit', 'extrude': 'TextEdit', 'visibility': 'TextEdit', 'drawOrder': 'TextEdit', 'icon': 'TextEdit', '_count': 'TextEdit', '_sum': 'TextEdit', '_mean': 'TextEdit', 'Pop': 'TextEdit', });
lyr_Route43Pop500mtrs_10.set('fieldImages', {'Name': 'TextEdit', 'descriptio': 'TextEdit', 'timestamp': 'TextEdit', 'begin': 'TextEdit', 'end': 'TextEdit', 'altitudeMo': 'TextEdit', 'tessellate': 'TextEdit', 'extrude': 'TextEdit', 'visibility': 'TextEdit', 'drawOrder': 'TextEdit', 'icon': 'TextEdit', '_count': 'TextEdit', '_sum': 'TextEdit', '_mean': 'TextEdit', 'Pop': 'TextEdit', });
lyr_Route43Pop250mtrs_11.set('fieldImages', {'Name': 'TextEdit', 'descriptio': 'TextEdit', 'timestamp': 'TextEdit', 'begin': 'TextEdit', 'end': 'TextEdit', 'altitudeMo': 'TextEdit', 'tessellate': 'TextEdit', 'extrude': 'TextEdit', 'visibility': 'TextEdit', 'drawOrder': 'TextEdit', 'icon': 'TextEdit', '_count': 'TextEdit', '_sum': 'TextEdit', '_mean': 'TextEdit', 'Pop': 'TextEdit', });
lyr_43Dstops_12.set('fieldImages', {'Name': 'TextEdit', 'description': 'TextEdit', 'timestamp': 'DateTime', 'begin': 'DateTime', 'end': 'DateTime', 'altitudeMode': 'TextEdit', 'tessellate': 'Range', 'extrude': 'Range', 'visibility': 'Range', 'drawOrder': 'Range', 'icon': 'TextEdit', 'Route_Name': 'TextEdit', 'Stg': 'TextEdit', 'RouteCode': 'TextEdit', 'Stop_Code': 'TextEdit', 'Direction': 'TextEdit', 'K__M_': 'TextEdit', 'Lat': 'TextEdit', 'Long': 'TextEdit', 'Ticket_Fair': 'TextEdit', });
lyr_Route43DStats_13.set('fieldImages', {'DIST_KM': 'TextEdit', 'DURATION_H': 'TextEdit', 'PROFILE': 'TextEdit', 'PREF': 'TextEdit', 'OPTIONS': 'TextEdit', 'FROM_ID': 'TextEdit', 'TO_ID': 'TextEdit', 'Time': 'Range', 'Gas': 'Range', });
lyr_43UStops_14.set('fieldImages', {'Name': 'TextEdit', 'description': 'TextEdit', 'timestamp': 'DateTime', 'begin': 'DateTime', 'end': 'DateTime', 'altitudeMode': 'TextEdit', 'tessellate': 'Range', 'extrude': 'Range', 'visibility': 'Range', 'drawOrder': 'Range', 'icon': 'TextEdit', 'Route_Name': 'TextEdit', 'Stg': 'TextEdit', 'RouteCode': 'TextEdit', 'Stop_Code': 'TextEdit', 'Direction': 'TextEdit', 'K__M_': 'TextEdit', 'Lat': 'TextEdit', 'Long': 'TextEdit', 'Ticket_Fair': 'TextEdit', });
lyr_Route43UStats_15.set('fieldImages', {'DIST_KM': 'TextEdit', 'DURATION_H': 'TextEdit', 'PROFILE': 'TextEdit', 'PREF': 'TextEdit', 'OPTIONS': 'TextEdit', 'FROM_ID': 'TextEdit', 'TO_ID': 'TextEdit', 'Time': 'Range', 'Fuel': 'Range', });
lyr_Route43RecomPop1000Mtrs_16.set('fieldImages', {'DIST_KM': 'TextEdit', 'DURATION_H': 'TextEdit', 'PROFILE': 'TextEdit', 'PREF': 'TextEdit', 'OPTIONS': 'TextEdit', 'FROM_ID': 'TextEdit', 'TO_ID': 'TextEdit', '_count': 'TextEdit', '_sum': 'TextEdit', '_mean': 'TextEdit', 'Pop': 'Range', });
lyr_Route43RecomPop500Mtrs_17.set('fieldImages', {'DIST_KM': 'TextEdit', 'DURATION_H': 'TextEdit', 'PROFILE': 'TextEdit', 'PREF': 'TextEdit', 'OPTIONS': 'TextEdit', 'FROM_ID': 'TextEdit', 'TO_ID': 'TextEdit', '_count': 'TextEdit', '_sum': 'TextEdit', '_mean': 'TextEdit', 'Pop': 'Range', });
lyr_Route43RecomPop100mtrs_18.set('fieldImages', {'DIST_KM': 'TextEdit', 'DURATION_H': 'TextEdit', 'PROFILE': 'TextEdit', 'PREF': 'TextEdit', 'OPTIONS': 'TextEdit', 'FROM_ID': 'TextEdit', 'TO_ID': 'TextEdit', '_count': 'TextEdit', '_sum': 'TextEdit', '_mean': 'TextEdit', 'Pop': 'Range', });
lyr_Stopsonrecomroute_19.set('fieldImages', {'DIST_KM': '', 'DURATION_H': '', 'PROFILE': '', 'PREF': '', 'OPTIONS': '', 'FROM_ID': '', 'TO_ID': '', 'distance': '', 'angle': '', });
lyr_Route43Recomm_20.set('fieldImages', {'DIST_KM': 'TextEdit', 'DURATION_H': 'TextEdit', 'PROFILE': 'TextEdit', 'PREF': 'TextEdit', 'OPTIONS': 'TextEdit', 'FROM_ID': 'TextEdit', 'TO_ID': 'TextEdit', });
lyr_StopsRecompop5min_21.set('fieldImages', {'ID': '', 'CENTER_LON': '', 'CENTER_LAT': '', 'AA_MINS': '', 'AA_MODE': '', 'TOTAL_POP': '', });
lyr_StopsRecomPop10Min_22.set('fieldImages', {'ID': 'TextEdit', 'CENTER_LON': 'TextEdit', 'CENTER_LAT': 'TextEdit', 'AA_MINS': 'TextEdit', 'AA_MODE': 'TextEdit', 'TOTAL_POP': 'TextEdit', });
lyr_Route43Pop5min_23.set('fieldImages', {'ID': 'TextEdit', 'CENTER_LON': 'TextEdit', 'CENTER_LAT': 'TextEdit', 'AA_MINS': 'TextEdit', 'AA_MODE': 'TextEdit', 'TOTAL_POP': 'TextEdit', });
lyr_Route43Pop10Min_24.set('fieldImages', {'ID': 'TextEdit', 'CENTER_LON': 'TextEdit', 'CENTER_LAT': 'TextEdit', 'AA_MINS': 'TextEdit', 'AA_MODE': 'TextEdit', 'TOTAL_POP': 'TextEdit', });
lyr_Currentroutestops600mtrs_25.set('fieldImages', {'Name': '', 'descriptio': '', 'timestamp': '', 'begin': '', 'end': '', 'altitudeMo': '', 'tessellate': '', 'extrude': '', 'visibility': '', 'drawOrder': '', 'icon': '', 'distance': '', 'angle': '', });
lyr_Route43StopOptPop_26.set('fieldImages', {'ID': 'TextEdit', 'CENTER_LON': 'TextEdit', 'CENTER_LAT': 'TextEdit', 'AA_MINS': 'TextEdit', 'AA_MODE': 'TextEdit', 'TOTAL_POP': 'TextEdit', });
lyr_Pimpalesaudagar_1.set('fieldLabels', {'shapeName': 'hidden field', 'shapeISO': 'hidden field', 'shapeID': 'hidden field', 'shapeGroup': 'hidden field', 'shapeType': 'hidden field', });
lyr_Pimple_2.set('fieldLabels', {'shapeName': 'hidden field', 'shapeISO': 'hidden field', 'shapeID': 'hidden field', 'shapeGroup': 'hidden field', 'shapeType': 'hidden field', });
lyr_Keshavnagar_3.set('fieldLabels', {'shapeName': 'hidden field', 'shapeISO': 'hidden field', 'shapeID': 'hidden field', 'shapeGroup': 'hidden field', 'shapeType': 'hidden field', });
lyr_Yavatmal_4.set('fieldLabels', {'shapeName': 'hidden field', 'shapeISO': 'hidden field', 'shapeID': 'hidden field', 'shapeGroup': 'hidden field', 'shapeType': 'hidden field', });
lyr_Lahagaon_5.set('fieldLabels', {'shapeName': 'hidden field', 'shapeISO': 'hidden field', 'shapeID': 'hidden field', 'shapeGroup': 'hidden field', 'shapeType': 'hidden field', });
lyr_KirkeeBoundary_6.set('fieldLabels', {'shapeName': 'hidden field', 'shapeISO': 'hidden field', 'shapeID': 'hidden field', 'shapeGroup': 'hidden field', 'shapeType': 'hidden field', });
lyr_PimpreChinchwadboundary_7.set('fieldLabels', {'shapeName': 'hidden field', 'shapeISO': 'hidden field', 'shapeID': 'hidden field', 'shapeGroup': 'hidden field', 'shapeType': 'hidden field', });
lyr_PuneGeoBoundary_8.set('fieldLabels', {'shapeName': 'hidden field', 'shapeISO': 'hidden field', 'shapeID': 'hidden field', 'shapeGroup': 'hidden field', 'shapeType': 'hidden field', });
lyr_Route43Pop1000mtrs_9.set('fieldLabels', {'Name': 'header label - visible with data', 'descriptio': 'hidden field', 'timestamp': 'hidden field', 'begin': 'hidden field', 'end': 'hidden field', 'altitudeMo': 'hidden field', 'tessellate': 'hidden field', 'extrude': 'hidden field', 'visibility': 'hidden field', 'drawOrder': 'hidden field', 'icon': 'hidden field', '_count': 'hidden field', '_sum': 'hidden field', '_mean': 'hidden field', 'Pop': 'inline label - always visible', });
lyr_Route43Pop500mtrs_10.set('fieldLabels', {'Name': 'header label - visible with data', 'descriptio': 'hidden field', 'timestamp': 'hidden field', 'begin': 'hidden field', 'end': 'hidden field', 'altitudeMo': 'hidden field', 'tessellate': 'hidden field', 'extrude': 'hidden field', 'visibility': 'hidden field', 'drawOrder': 'hidden field', 'icon': 'hidden field', '_count': 'hidden field', '_sum': 'hidden field', '_mean': 'hidden field', 'Pop': 'inline label - always visible', });
lyr_Route43Pop250mtrs_11.set('fieldLabels', {'Name': 'hidden field', 'descriptio': 'hidden field', 'timestamp': 'hidden field', 'begin': 'hidden field', 'end': 'hidden field', 'altitudeMo': 'hidden field', 'tessellate': 'hidden field', 'extrude': 'hidden field', 'visibility': 'hidden field', 'drawOrder': 'hidden field', 'icon': 'hidden field', '_count': 'hidden field', '_sum': 'hidden field', '_mean': 'hidden field', 'Pop': 'hidden field', });
lyr_43Dstops_12.set('fieldLabels', {'Name': 'header label - visible with data', 'description': 'hidden field', 'timestamp': 'hidden field', 'begin': 'hidden field', 'end': 'hidden field', 'altitudeMode': 'hidden field', 'tessellate': 'hidden field', 'extrude': 'hidden field', 'visibility': 'hidden field', 'drawOrder': 'hidden field', 'icon': 'hidden field', 'Route_Name': 'inline label - always visible', 'Stg': 'inline label - visible with data', 'RouteCode': 'inline label - visible with data', 'Stop_Code': 'inline label - visible with data', 'Direction': 'inline label - visible with data', 'K__M_': 'inline label - visible with data', 'Lat': 'inline label - visible with data', 'Long': 'inline label - visible with data', 'Ticket_Fair': 'inline label - visible with data', });
lyr_Route43DStats_13.set('fieldLabels', {'DIST_KM': 'header label - always visible', 'DURATION_H': 'header label - visible with data', 'PROFILE': 'hidden field', 'PREF': 'hidden field', 'OPTIONS': 'hidden field', 'FROM_ID': 'hidden field', 'TO_ID': 'hidden field', 'Time': 'header label - visible with data', 'Gas': 'header label - visible with data', });
lyr_43UStops_14.set('fieldLabels', {'Name': 'header label - visible with data', 'description': 'hidden field', 'timestamp': 'hidden field', 'begin': 'hidden field', 'end': 'hidden field', 'altitudeMode': 'hidden field', 'tessellate': 'hidden field', 'extrude': 'hidden field', 'visibility': 'hidden field', 'drawOrder': 'hidden field', 'icon': 'hidden field', 'Route_Name': 'inline label - visible with data', 'Stg': 'inline label - visible with data', 'RouteCode': 'inline label - visible with data', 'Stop_Code': 'inline label - visible with data', 'Direction': 'inline label - visible with data', 'K__M_': 'inline label - visible with data', 'Lat': 'inline label - visible with data', 'Long': 'inline label - visible with data', 'Ticket_Fair': 'inline label - visible with data', });
lyr_Route43UStats_15.set('fieldLabels', {'DIST_KM': 'header label - visible with data', 'DURATION_H': 'header label - visible with data', 'PROFILE': 'hidden field', 'PREF': 'hidden field', 'OPTIONS': 'hidden field', 'FROM_ID': 'hidden field', 'TO_ID': 'hidden field', 'Time': 'header label - always visible', 'Fuel': 'header label - visible with data', });
lyr_Route43RecomPop1000Mtrs_16.set('fieldLabels', {'DIST_KM': 'inline label - visible with data', 'DURATION_H': 'inline label - visible with data', 'PROFILE': 'hidden field', 'PREF': 'hidden field', 'OPTIONS': 'hidden field', 'FROM_ID': 'hidden field', 'TO_ID': 'hidden field', '_count': 'hidden field', '_sum': 'hidden field', '_mean': 'hidden field', 'Pop': 'header label - visible with data', });
lyr_Route43RecomPop500Mtrs_17.set('fieldLabels', {'DIST_KM': 'inline label - visible with data', 'DURATION_H': 'inline label - visible with data', 'PROFILE': 'hidden field', 'PREF': 'hidden field', 'OPTIONS': 'hidden field', 'FROM_ID': 'hidden field', 'TO_ID': 'hidden field', '_count': 'hidden field', '_sum': 'hidden field', '_mean': 'hidden field', 'Pop': 'header label - visible with data', });
lyr_Route43RecomPop100mtrs_18.set('fieldLabels', {'DIST_KM': 'inline label - visible with data', 'DURATION_H': 'inline label - visible with data', 'PROFILE': 'hidden field', 'PREF': 'hidden field', 'OPTIONS': 'hidden field', 'FROM_ID': 'hidden field', 'TO_ID': 'hidden field', '_count': 'hidden field', '_sum': 'hidden field', '_mean': 'hidden field', 'Pop': 'header label - visible with data', });
lyr_Stopsonrecomroute_19.set('fieldLabels', {'DIST_KM': 'header label - visible with data', 'DURATION_H': 'inline label - visible with data', 'PROFILE': 'hidden field', 'PREF': 'hidden field', 'OPTIONS': 'hidden field', 'FROM_ID': 'hidden field', 'TO_ID': 'hidden field', 'distance': 'inline label - visible with data', 'angle': 'hidden field', });
lyr_Route43Recomm_20.set('fieldLabels', {'DIST_KM': 'header label - visible with data', 'DURATION_H': 'inline label - visible with data', 'PROFILE': 'hidden field', 'PREF': 'hidden field', 'OPTIONS': 'hidden field', 'FROM_ID': 'hidden field', 'TO_ID': 'hidden field', });
lyr_StopsRecompop5min_21.set('fieldLabels', {'ID': 'hidden field', 'CENTER_LON': 'inline label - visible with data', 'CENTER_LAT': 'inline label - visible with data', 'AA_MINS': 'inline label - visible with data', 'AA_MODE': 'inline label - visible with data', 'TOTAL_POP': 'header label - visible with data', });
lyr_StopsRecomPop10Min_22.set('fieldLabels', {'ID': 'hidden field', 'CENTER_LON': 'inline label - visible with data', 'CENTER_LAT': 'inline label - visible with data', 'AA_MINS': 'inline label - visible with data', 'AA_MODE': 'inline label - visible with data', 'TOTAL_POP': 'header label - visible with data', });
lyr_Route43Pop5min_23.set('fieldLabels', {'ID': 'hidden field', 'CENTER_LON': 'hidden field', 'CENTER_LAT': 'hidden field', 'AA_MINS': 'hidden field', 'AA_MODE': 'hidden field', 'TOTAL_POP': 'header label - visible with data', });
lyr_Route43Pop10Min_24.set('fieldLabels', {'ID': 'hidden field', 'CENTER_LON': 'hidden field', 'CENTER_LAT': 'hidden field', 'AA_MINS': 'hidden field', 'AA_MODE': 'hidden field', 'TOTAL_POP': 'header label - visible with data', });
lyr_Currentroutestops600mtrs_25.set('fieldLabels', {'Name': 'header label - visible with data', 'descriptio': 'hidden field', 'timestamp': 'hidden field', 'begin': 'hidden field', 'end': 'hidden field', 'altitudeMo': 'hidden field', 'tessellate': 'hidden field', 'extrude': 'hidden field', 'visibility': 'hidden field', 'drawOrder': 'hidden field', 'icon': 'hidden field', 'distance': 'hidden field', 'angle': 'hidden field', });
lyr_Route43StopOptPop_26.set('fieldLabels', {'ID': 'hidden field', 'CENTER_LON': 'hidden field', 'CENTER_LAT': 'hidden field', 'AA_MINS': 'hidden field', 'AA_MODE': 'hidden field', 'TOTAL_POP': 'header label - visible with data', });
lyr_Route43StopOptPop_26.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});