import json

#As of 7:45 PST on July 15.

dictionary = json.loads(open("Currencies.json", "r").read())
print(dictionary)
