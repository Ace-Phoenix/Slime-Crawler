//A.H.

//-type (type of object)
//-contains (what the object contains)
//-action  (objects actions)
//-purpose (the purpose of the object)
//-description (objects description)
//-name (name of the object)
//-requirements (objects requirements)

class Object{
    constructor(type, contains, action, purpose, description, name, requirements){
        this.type = type;
        this.contains = contains;
        this.action = action;
        this.purpose = purpose;
        this.description = description;
        this.name = name;
        this.requirements = requirements;
    }
}
