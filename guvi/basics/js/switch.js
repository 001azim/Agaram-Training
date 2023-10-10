// switch case

let grade='C';
switch(grade){
  case 'A':
    console.log("A grade")
    break
    case 'B':
    case'C':
     console.log('B grade ')
        break

   default:
            console.log('no grade')
}

let mark=90;
switch(true){
    case mark>90:
        console.log('super')
        break;
    case mark>50:
       console.log('pass')
       break
       
        default:
            console.log('enter correct mark')
}