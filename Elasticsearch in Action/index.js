var fs = require('fs');
var files = fs.readdirSync('./');

let lesson = files.map((item, index) => {
    return {
        "id": index,
        "name": item,
        "path": "Elasticsearch in Action/" + item
    }
})

let data = {
    "title": "AWS",
    "description": "Become an AWS Certified Developer! Learn all Amazon Web Services Developer topics. PASS the AWS Certified Developer Exam",
    "lesson": lesson
}

fs.writeFile('index.json', JSON.stringify(data), (err) => {
    // In case of a error throw err.
    if (err) throw err;
})