const Person:{
    id:number;
    name:string;
    // tuple is fixed size of array like this score 
    score:[number , string];

}={
    id:1,
    name : "Tharun",
    score :[100,"java"]

};
console.log(Person.score);