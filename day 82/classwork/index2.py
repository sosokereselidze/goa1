def get_clone(dict1, key, default = None):
    if key in dict1:
        return dict1[key]
    else:
        return default

acc = {
    "fullname": "Soso Kereselidze",
    "email": "soso.kereselidze1@gmail.com",
    "address": {
        "region": "imereti",
        "city": "terjola"
    }
}

print(get_clone(acc, "fullname"))