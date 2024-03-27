// let a=100;
// let b=1;
// while(b<=100)
// {
//     if(b%2==0)
//     {
//         console.log("it is even number"+b);
//     }
//     else{
//         console.log("it is odd number"+b)
//     }
//     b++;
// }
//pallindrome//
let a=121;
let b=a;
let rev=0;
let rem;
while(b!=0)
{
 rem=b%10;
 rev=rev*rem;
 b/10;  
}
if(rev==a)
{
    console.log(rev+"this number is palindrome"+a)
}
