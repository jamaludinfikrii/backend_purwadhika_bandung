var array = [
    {imageName : "image 1" , imageSize : '10000'},
    {imageName : "image 2" ,imageSize : '10000'},
]


const newArr = array.map((val) => {
    return {name : val.imageName}
})

console.log(newArr)