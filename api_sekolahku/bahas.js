var array = [
    {imageName : "image 1" , imageSize : '10000'},
    {imageName : "image 2" ,imageSize : '10000'},
]


const newArr = array.map((val) => {
    return {name : val.imageName}
})

console.log(newArr)



var path = 'public\PRD-IMG-1586332301582.jpeg'

function convertPath(path) {
    path = path.split('public')
    path[0] = 'public/'
    return path.join('')
}