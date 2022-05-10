describe('Test tasks', () => {

  it('Task 1 ', () => {
    let numbers = [1,3,4,5,6,7,8,9]
    
    // function task take a array of numbers and return  array with elemnt which are multiplier of 4 or 6
    function task(test) {
        let arraynew = [] // create empty array
        
        for (let i = 0; i < test.length; i++){
            
        let one = test[i] % 4  //Check that element is a multiplier of 4 
        let two = test[i] % 6  //Check that element is a multiplier of 6 
            if (one == 0|| two == 0){
                arraynew.push(test[i])
            } // Add element to the new array if elemtnet ti's multiplier 4 or 6
        }
        console.log(arraynew)
        return  arraynew
    }
    task(numbers)
  })

  it('Task 2 it is a polindrom', () => {
    var  word = "ASDDSA"
    // function task2 take a string and check if it's a polindrom
    function task2(word) {
      for (let i = 0; i < word.length / 2; i++){
          if (word.charAt(i) !== word.charAt(word.length - i - 1 )){
              return console.log(`${word} Not a Polindrom`)
          }
          return console.log(`${word} is a Polindrom`)
      }   
    }
    task2(word)
  })
})


   




