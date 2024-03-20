let fs = require("fs")
for (let index = 46; index <= 100; index++) {
    let h = fs.writeFileSync(`${index}.ts`,"");
    
}