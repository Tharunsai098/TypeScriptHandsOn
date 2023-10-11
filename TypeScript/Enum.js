// enum is set of constant values
var Roles;
(function (Roles) {
    Roles[Roles["ANALYST"] = 0] = "ANALYST";
    Roles[Roles["MANAGER"] = 1] = "MANAGER";
    Roles[Roles["DEVELOPER"] = 2] = "DEVELOPER";
    Roles[Roles["TESTER"] = 3] = "TESTER";
})(Roles || (Roles = {}));
;
var Person = {
    id: 1,
    name: "Tharun",
    roles: Roles.ANALYST
};
if (Person.roles === Roles.ANALYST) {
    console.log("is Present");
}
