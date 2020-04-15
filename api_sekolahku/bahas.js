// var array = [
//     {imageName : "image 1" , imageSize : '10000'},
//     {imageName : "image 2" ,imageSize : '10000'},
// ]


// const newArr = array.map((val) => {
//     return {name : val.imageName}
// })

// console.log(newArr)



// var path = 'public\PRD-IMG-1586332301582.jpeg'

// function convertPath(path) {
//     path = path.split('public')
//     path[0] = 'public/'
//     return path.join('')
// }



// giran = // array
// kresna = // string
// afgan = // array
// vinda = // object 


var arr = [
    {name : 'fikri' , address : [{kec : "bandung barat",kab : "bandung"}]}
]


function abc(){
    return [
        {
            a : "b" ,
            c : {d : ['e',{f : "g"}]}
        }
    ]
}

function cde (){
    return {
        nama : {
            awal : ['fikri']
        }
    }
}


function zzz (){
    return () => {
        return [
            {
                nama : 'abc',
                d : {
                    h : {i : 'budi'}
                },
                e : ['f','g']
            }
        ]
        
    }
}

console.log(zzz()()[0].d.h.i)

// console.log( abc()[0].c.d[1].f )

// console.log(cde().nama.awal[0])