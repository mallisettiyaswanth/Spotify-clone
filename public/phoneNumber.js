import fs from 'fs';
const file = JSON.parse(fs.readFileSync(`phoneNumbers.json`, 'utf8'))
const id = 0;
const newFile = file.map((doc, i) => {
    return {...doc, id: i};
})

fs.writeFileSync("phoneNumbers.json", JSON.stringify(newFile));