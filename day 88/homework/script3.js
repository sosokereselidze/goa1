function foundLargest(a, b, c){
    if(a > b && a > c){
        return a
    } else if(b > a && b > c){
        return b
    } else{
        return c
    }
}

console.log(foundLargest(5, 3, 7))

