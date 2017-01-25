import json

with open('Untitled.geojson') as f:
    data = json.load(f)

newData = list()    

for feature in data['features']:
    for i in range(len(feature['geometry']['coordinates'])):
        singleData = list()
        singleData.append(feature['geometry']['coordinates'][i][1])
        singleData.append(feature['geometry']['coordinates'][i][0])
        newData.append(singleData)
        
print newData