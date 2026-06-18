const prompt = require("prompt-sync")();
// let task = prompt("Enter a task ");
// let name = prompt("What is your name?");
// console.log("Welcome: "+name);
// console.log(`${name} Go and ${task}`);
console.log("===== Student OS =====");
    let menu = ["Add task","View Tasks","Delete Task","Exit"];
     let tasks=[];
    for(let i=0;i<menu.length;i++){
console.log(i+1+". "+menu[i]);
}
    // let i =0 ;
    //let n = menu.length;
    while(true){
    let choose = prompt("Choose: ");
    if(choose == 1){
        let newtask = prompt("Enter Task: ");
        tasks.push(newtask)
    console.log("Task Added");
    }else if(choose == 2){
        for(let i=0;i<tasks.length;i++){
            console.log(i+1+". "+tasks[i]);
        }
    }else if(choose == 3){
       for(let i=0;i<tasks.length;i++){
            console.log(i+1+". "+tasks[i]);
       } 
        let deleteTask = prompt("Enter task number to delete: ");
      let computerIndex = deleteTask-1;  // this is helping in chagning the user number to computer numbering , so computer can understand it in 0,1,2 language 
        tasks.splice(computerIndex,1)
        console.log("Task Deleted");}//   }    }
    else if(choose == 4){
        console.log("Exits");
        break;
    }
    }

    // Yeah we did it
    //my first mini project .....   
    // :)
    