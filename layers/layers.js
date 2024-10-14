var wms_layers = [];


        var lyr_OpenStreetMap_0 = new ol.layer.Tile({
            'title': 'OpenStreetMap',
            //'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_adm_prov_2021_1 = new ol.format.GeoJSON();
var features_adm_prov_2021_1 = format_adm_prov_2021_1.readFeatures(json_adm_prov_2021_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_adm_prov_2021_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_adm_prov_2021_1.addFeatures(features_adm_prov_2021_1);
var lyr_adm_prov_2021_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_adm_prov_2021_1, 
                style: style_adm_prov_2021_1,
                popuplayertitle: "adm_prov_2021",
                interactive: true,
    title: 'adm_prov_2021<br />\
    <img src="styles/legend/adm_prov_2021_1_0.png" /> 64,9 - 76,7<br />\
    <img src="styles/legend/adm_prov_2021_1_1.png" /> 76,7 - 84,4<br />\
    <img src="styles/legend/adm_prov_2021_1_2.png" /> 84,4 - 90<br />\
    <img src="styles/legend/adm_prov_2021_1_3.png" /> 90 - 93,6<br />\
    <img src="styles/legend/adm_prov_2021_1_4.png" /> 93,6 - 9165<br />'
        });
var format_adm_prov_2022_2 = new ol.format.GeoJSON();
var features_adm_prov_2022_2 = format_adm_prov_2022_2.readFeatures(json_adm_prov_2022_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_adm_prov_2022_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_adm_prov_2022_2.addFeatures(features_adm_prov_2022_2);
var lyr_adm_prov_2022_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_adm_prov_2022_2, 
                style: style_adm_prov_2022_2,
                popuplayertitle: "adm_prov_2022",
                interactive: true,
    title: 'adm_prov_2022<br />\
    <img src="styles/legend/adm_prov_2022_2_0.png" /> 65,4 - 76,7<br />\
    <img src="styles/legend/adm_prov_2022_2_1.png" /> 76,7 - 85,7<br />\
    <img src="styles/legend/adm_prov_2022_2_2.png" /> 85,7 - 90,2<br />\
    <img src="styles/legend/adm_prov_2022_2_3.png" /> 90,2 - 93,9<br />\
    <img src="styles/legend/adm_prov_2022_2_4.png" /> 93,9 - 99,9<br />'
        });
var format_adm_prov_2023_3 = new ol.format.GeoJSON();
var features_adm_prov_2023_3 = format_adm_prov_2023_3.readFeatures(json_adm_prov_2023_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_adm_prov_2023_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_adm_prov_2023_3.addFeatures(features_adm_prov_2023_3);
var lyr_adm_prov_2023_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_adm_prov_2023_3, 
                style: style_adm_prov_2023_3,
                popuplayertitle: "adm_prov_2023",
                interactive: true,
    title: 'adm_prov_2023<br />\
    <img src="styles/legend/adm_prov_2023_3_0.png" /> 66,5 - 80,6<br />\
    <img src="styles/legend/adm_prov_2023_3_1.png" /> 80,6 - 87,8<br />\
    <img src="styles/legend/adm_prov_2023_3_2.png" /> 87,8 - 92,1<br />\
    <img src="styles/legend/adm_prov_2023_3_3.png" /> 92,1 - 94,4<br />\
    <img src="styles/legend/adm_prov_2023_3_4.png" /> 94,4 - 99,4<br />'
        });

lyr_OpenStreetMap_0.setVisible(true);lyr_adm_prov_2021_1.setVisible(true);lyr_adm_prov_2022_2.setVisible(true);lyr_adm_prov_2023_3.setVisible(true);
var layersList = [lyr_OpenStreetMap_0,lyr_adm_prov_2021_1,lyr_adm_prov_2022_2,lyr_adm_prov_2023_3];
lyr_adm_prov_2021_1.set('fieldAliases', {'PROVINSI': 'PROVINSI', 'OBJECID': 'OBJECID', });
lyr_adm_prov_2022_2.set('fieldAliases', {'PROVINSI': 'PROVINSI', 'OBJECID': 'OBJECID', });
lyr_adm_prov_2023_3.set('fieldAliases', {'PROVINSI': 'PROVINSI', 'OBJECID': 'OBJECID', });
lyr_adm_prov_2021_1.set('fieldImages', {'PROVINSI': 'TextEdit', 'OBJECID': 'TextEdit', });
lyr_adm_prov_2022_2.set('fieldImages', {'PROVINSI': 'TextEdit', 'OBJECID': 'TextEdit', });
lyr_adm_prov_2023_3.set('fieldImages', {'PROVINSI': 'TextEdit', 'OBJECID': 'TextEdit', });
lyr_adm_prov_2021_1.set('fieldLabels', {'PROVINSI': 'no label', 'OBJECID': 'no label', });
lyr_adm_prov_2022_2.set('fieldLabels', {'PROVINSI': 'no label', 'OBJECID': 'no label', });
lyr_adm_prov_2023_3.set('fieldLabels', {'PROVINSI': 'no label', 'OBJECID': 'no label', });
lyr_adm_prov_2023_3.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});