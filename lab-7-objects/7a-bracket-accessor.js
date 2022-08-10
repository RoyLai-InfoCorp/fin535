let person = {
    name: "Bob",
    job: "Teacher",
    age: 30,
    email: "bob@somewhere.com",
    "bob@somewhere.com": { account: "bob", domain: "somehwere.com" },
};

//person.bob@somewhere.com              // this will fail with Invalid or unexpected token
console.log(person["bob@somewhere.com"]);
