import json, os, sys, random

####
# python script.py A B C D
# A = path of dir where we have all our files we wanna shrink to limited properties
# B = name of our orginal big file
# C = name of intermediate file. Gonna delete in a while
# D = name of FINAL shrinked file.


with open(os.path.join(sys.argv[1], sys.argv[3]), 'a') as write_file:
    formattedData = {}
    formattedData["type"] = "FeatureCollection"
    featuresall = list()

    with open(os.path.join(sys.argv[1], sys.argv[2])) as data_file:
        dataLoaded = json.load(data_file)
        for i in range(len(dataLoaded["features"])):
            #print dataLoaded["features"][i]["properties"]["CompanyMetaData_address"]
            eachfeat = {}
            # Appending each object's attributes and all into dictionaries
            eachfeat["type"] = "Feature"
            eachfeat["geometry"] = dataLoaded["features"][i]["geometry"]
            propList = {}


            propList["age"] = random.randint(0,100)
            eachfeat["properties"] = propList
            featuresall.append(eachfeat)

    formattedData["features"] = featuresall
    write_file.write(str(json.dumps(formattedData)))

# Make newFileName pretty
os.system("cat " + os.path.join(sys.argv[1], sys.argv[3]) + " | jq . > " + os.path.join(sys.argv[1], sys.argv[4]))
# Delete raw and formatted file. Only formatted and pretty file will remain.
os.system("rm -rf " + os.path.join(sys.argv[1], sys.argv[3]))
