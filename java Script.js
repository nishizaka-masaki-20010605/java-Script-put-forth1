let number = 0;
for(let i = 1; i < 51; i++){
  number=+i;
  if(number%10===0){
    console.log("今" +number+ " 回ループしました。");
  }
}

let number2 = 0;
for(let i = 1; i < 51; i++){
  number2=+i;
  if(number2%4===0){
    console.log("4で割れる数です。"+number2);
  }
  else if (number2===50){
    console.log("50回カウントが終わりました。")
  }
}

// if(number%4===4){
//   console.log("4で割れる数です。"+number)
// }