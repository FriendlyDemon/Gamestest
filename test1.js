function armor(x,y){
    return Math.floor(Math.pow(0.99,x)*y)
}
console.log(armor(185,1000))