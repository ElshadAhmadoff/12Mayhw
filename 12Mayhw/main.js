
function Fibornachi(m) 
{
    let n1 = 0;
    let n2 = 1;
    let n3 = n1 + n2;
    if (m == 1) 
    {
        return n1;
    }
    else if(m == 2)
    {
        return n2;   
    }
    else {
        for (let i = 3; i <m; i++) 
        {
            n1 = n2;
            n2 = n3;
            n3 = n1 + n2;
        }
        return n3;
    }
}

let m = prompt("Please enter a number");
alert(Fibornachi(m));