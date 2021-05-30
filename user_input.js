var in_out = "";
const userInput = () => {
    const in_put = process.argv[2].toLowerCase();

    if(in_put == 'in'){
        in_out = "In"
    }else if (in_put == 'out') {
        in_out = "Out"
    }
    else{
        console.log('Either type IN or OUT and TRY AGAIN')
        return
    }
}

module.exports = {
    in_out,
    userInput
}