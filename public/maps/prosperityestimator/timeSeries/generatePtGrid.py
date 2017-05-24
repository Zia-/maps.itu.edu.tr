import fileinput, os, sys, json, random
from random import randint


def biasedRandom(lo, hi, target, steps=1):

    num = random.randint(lo, hi)
    for i in range(steps):
        num += int(random.random() * (target - num))
    return num



with open("/Users/zia/Documents/zzz/py.geojson") as data_file:
    dataLoaded = json.load(data_file)
    for i in range(len(dataLoaded["features"])):
        #dataLoaded["features"][i]["geometry"]["coordinates"][0] = randint(32121,33159)/1000.0
        #dataLoaded["features"][i]["geometry"]["coordinates"][1] = randint(39320,40300)/1000.0
        dataLoaded["features"][i]["geometry"]["coordinates"][0] = biasedRandom(32121,33159, 33000)/1000.0
        dataLoaded["features"][i]["geometry"]["coordinates"][1] = biasedRandom(39320,40300, 40000)/1000.0

    with open("/Users/zia/Documents/zzz/py2.geojson", 'a') as data_file1:
        data_file1.write(str(json.dumps(dataLoaded)))
