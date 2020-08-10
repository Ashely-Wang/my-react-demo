const fs = require("fs")
const { dirname } = require("path")
exports.query = (dirname) => {
    return new Promise((res, rej) => {
        fs.readFile(dirname, 'utf-8', function(err, ret) {
            if(err) {
                rej(err)
            } else {
                res(ret)
            }
        })
    })
}
exports.add = (dirname, contentForAdd) => {
    return new Promise((res, rej) => {
        fs.readFile(dirname, 'utf-8', function(err, ret) {
            if(err) {
                rej(err)
            }else {
                const formerData = JSON.parse(ret)
                // console.log(ret)
                const U = formerData.allTopics.push(contentForAdd)
                // console.log(U)
                console.log(formerData.allTopics)
                const daixieru = {
                    allTopics: formerData.allTopics
                }
                console.log(daixieru)
                fs.writeFile(dirname, JSON.stringify(daixieru), function(err) {
                    if(err) {
                        rej(err)
                    }
                })
            }
        })
    })
}