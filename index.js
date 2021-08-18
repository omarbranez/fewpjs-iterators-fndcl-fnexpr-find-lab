// find returns the first match
// filter returns all matches as array
const record = [
    {year: "2018", result: "L"},
    {year: "2017", result: "W"},
    {year: "2016", result: "N/A"}
    //...
  ]

function superbowlWin(arr) {
    let winner = arr.find( row => row.result === "W" ); //const will always equal something, "let" can be undefined 
    return ( !!winner ? winner.year : undefined ) 
}