const me = {
    name: 'Luka',
    lastname: 'Tskhvaradze',
    age: 17
}

const you = {
    name: 'Nika',
    lastname: 'Keshelava',
    age: 24
}

const administrator = {
    changeName: function(accountObj,newName){
        accountObj.name = newName;
    },

    changeLastname: function(accountObj,newLastname){
        accountObj.lastname = newLastname;
    },

    changeAge: function(accountObj,newAge){
        accountObj.age = newAge;
    }
}

administrator.changeName(me,'Nia');
administrator.changeLastname(you,'Boboxidze');

console.log(me);
console.log(you);