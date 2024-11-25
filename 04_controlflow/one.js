    //if
    //< , > , <=, >=, ==, !=, ===, !== 
    const temp = 42

    if(temp < 50){
        console.log("temp is less than 50"); 
    }

    console.log("temp is greater than 50");

    const balance = 500
    // if(balance > 400) console.log("test"), console.log("test2");  -----> not recommended
    


    //switch case

    const month =3
    switch (month) {
        case 1:
            console.log("January");
            break;
        case 2:
            console.log("February");
            break;
        case 3:
            console.log(("March"));
            break;
    
        default:
            console.log("neither of the above");
            
            break;
    }

    const userEmail = ""

    if(userEmail){
        console.log("got user email");
        
    } else{
        console.log("Enter user email");
        
    }

    //false values ----> 0, -0, BigIn, 0n, "", null, undefined, NaN

    //truth values -----> "0", 'false', " ", [], {}, function(){}

    // if(userEmail.length === 0){
    //     console.log("Array is empty");
        
    // }
    

    // const emptyObj = {}

    // if(Object.keys(emptyObj).length === 0){
    //     console.log("object is empty");
        
    // }

    //nullish coalescing operator (??) : nul undefined

    let val1;
    // val1 = 5 ?? 10
    val1 = null ?? 10
    console.log(val1);
    

    //ternary operator
    // condition ? true : false
    