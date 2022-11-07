var dateBank = []

var timeMachine = () => {
    // find current date i.e. year, month, day
    var today = new Date();
    var dd = String(today.getDate()).padStart(2, '0');
    var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
    var yyyy = today.getFullYear();
    today = mm + dd + yyyy;
    
    // push to array
    dateBank.push(today)
    if(today != dateBank[dateBank.length - 1]){
        console.log("new day")
    }
}

timeMachine()

// find current date
// if date is not in the array list
// print something
// add current date to the list