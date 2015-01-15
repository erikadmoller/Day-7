





var slotMachine = function(){

x = Math.ceil(Math.random() * 3);
y = Math.ceil(Math.random() * 3);
z = Math.ceil (Math.random() * 3);

   console.log(x, y, z);

   if(x === y && y === z)
   {
     console.log("You are a winner!");
   }

   else if ((x===1 && y===2 && z===3) || (x===3 && y===2 && z===1)) {
      console.log ("You won with a straight hand!");
   }


   else { 
     console.log("My granma has better luck, try again!");
   }
  
};

slotMachine();

var userChoice = prompt("Do you want to play?");
	
while(userChoice === "yes") {
	slotMachine();
	userChoice = prompt("Do you want to play?");
}


