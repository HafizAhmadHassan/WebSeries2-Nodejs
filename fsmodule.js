const fs = require('fs')

fs.readFile('file.txt',(err,data)=>{
    console.log(err,data)
})
console.log("Finished reading file")

a=fs.readFileSync('file.txt')
console.log(a)

console.log(a.toString())



fs.writeFile('file2.txt',"This is writing File 2",()=>{
    console.log("File is Successfully written")
//non blocking io writing file
});

fs.writeFile('file3.txt',"This is writing File 3",(err,data)=>{
    console.log(data)
//non blocking io writing file
});

const wf=fs.writeFileSync('file3.txt',"This is writing File 3")
console.log("This is wf const",wf)