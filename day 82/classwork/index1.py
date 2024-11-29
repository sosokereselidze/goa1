def manual_items(dict0):
    result = []
    for key in dict0:
        result.append([key, dict0[key]])
    return result


acc = {
    "fullname" : "Soso Kereselidze",
    "email" : "soso.kereselidze1@gmail.com",
    "address" : {
        "region" : "imereti",
        "city" : "terjola"
    }
}

print(manual_items(acc))