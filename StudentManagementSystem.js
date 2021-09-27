//Tips:
//`my name is: ${firstname} ${lastname}`
//for(var elemnt of/in [1,2,3])
// used to show the elements of an array of
// in used to show the indexes of the elements
var students=[]

var numberOfStudents = 0
function addStudent(firstName,lastName){
    students.push(createFullName(firstName,lastName))
    numberOfStudents = students.length
}

// console.log("3 : ",numberOfStudents)
// addStudent()
// console.log(numberOfStudents)
// addStudent()
// console.log(numberOfStudents)

function getNumberOfStudent(){
    return numberOfStudents
}

// getNumberOfStudents()
// addStudent()
// getNumberOfStudents()
//addStudent("Josh")
//addStudent("John")
// console.log(students)
// addStudent("Anis")
// addStudent("Light")
// addStudent("Jack")
// addStudent("Hosni")
// addStudent("Trappa")
// console.log(students)

function clearStudent(){
 students.length=0
 numberOfStudents = 0
}

// console.log(students) 
// getNumberOfStudents()
// clearStudent() 
// console.log(students) 
// console.log(getNumberOfStudents())

// console.log(getNumberOfStudent()) 
// console.log(students)
// //addStudent("Josh")
// console.log(students)
// console.log(getNumberOfStudent())

function createFullName(firstName,lastName){
    return `${firstName} ${lastName}`
}

 addStudent("Josh", "Bull")
 addStudent("John", "Doe")
 addStudent("Bill", "Doe") 
console.log(students)
// console.log(getNumberOfStudent())

function getStudentByInitials(name,intitial){
if(name[0] == intitial){
    return true
}
return false    
}
// console.log(getStudentByInitials("Josh", "J")) 
// console.log(getStudentByInitials("Josh", "A"))

function isFullName(name){
    txt = name.split(" ")
    console.log(txt)
    if(txt.length > 1)
    return true
    return false
}

// console.log(isFullName("John Doe"))
// console.log(isFullName("John"))

function getStudentsByInitials(initial){
    var i=0
    var StudentsInit =[]
    while (i < students.length) {
        x = students[i]
        if(x[0] == initial)
        StudentsInit.push(students[i])
    }
    return StudentsInit
}

console.log(getStudentsByInitials("J"))
