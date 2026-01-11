
function randomUserGen(){
    const length = 5
    let name=""
    const chars = 'abcdefghijklmnopqrstuvwxyz1234567890'
    for(let i =0;i<length;i++){
        const randomIndex = Math.floor(Math.random()*chars.length)
        name = name + chars[randomIndex]
    }
    let username = name + "@yopmail.com"
    return(username)
}

module.exports = randomUserGen;
