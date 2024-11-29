acc = {
    "fullname": "Soso Kereselidze",
    "email": "soso.kereselidze1@gmail.com",
    "address": {
        "region": "imereti",
        "city": "terjola"
    }
}

acc.pop("email")
acc.popitem()

print(acc)