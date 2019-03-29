let router = require("express").Router()
let fake = require("faker")
var rbool = require("random-bool")
var mark = require("markov-text-generator")

// const markov = mark.MarkovTextGenerator(3)
// let text = fs.readFileSync('../public/data.txt');
// markov.setTrainingText(text)


router.get('/', function (req, res, next) {
    var options = {}
    var likes;
    if(rbool()== true){
        likes=1
    }
    else{
        likes=0
    }
    Object.assign(options, {
        fname: fake.name.firstName(likes),
        lname: fake.name.lastName(likes),
        phone: fake.phone.phoneNumber(),
        email: fake.internet.email(),
        // bio: markov.generateText(fake.random.number())
    })


    res.render("match", options)
})

module.exports = router;