/*

*****
****
***
**
*

*/

/*========== RESOLUÇÃO ========== */

// 1st Step - Print one #
function printOne() {
    console.log("#");
  }
  //printOne();
  
  // 2nd Step - Print one # per row
  function printOnePerRow() {
    let str = "";
    for (let i = 1; i <= 5 ; i++) {
      str += "#\n";
    }
    console.log(str);
    
  }
  //printOnePerRow();
  
  // 3rd Step - Print one row with five #
  function printOneRow(row) {
    let str = "";
    for (let i = 1; i <= row ; i++) {
      str += "#";
    }
    console.log(str);
    
  }
  //printOneRow();
  
   
  // 4th Step - Print the inverted Triangle
  function printInvertedTriangle(rows) {
    let str = "";
    for (let i = 1; i <= rows ; i++) {
      for (j = rows; j >= i; j--) {
        str += "#";
      }
      str += "\n";
    }
    console.log(str);
  }
  
  //printInvertedTriangle(5);
  
  // 5th Step - Print the Triangle
  function printTriangle(rows) {
    let str = "";
    for (let i = 1; i <= rows ; i++) {
      for (j = 1; j <= i; j++) {
        str += "#";
      }
      str += "\n";
    }
    console.log(str);
  }
  
  printTriangle(5);
  
  // Bonus Step - Print filled rectangle with #
  function printRectangle(rows) {
    for (let i = 1; i <= rows ; i++) {
      let str = "";
      for (let j = 1; j <= rows; j++) {
        str += "#";
      }
      console.log(str);
    }
  }
  //printRectangle(5);