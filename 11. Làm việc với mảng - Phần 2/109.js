// Array map() method

var courses= [
    {
        id: 1,
        name: 'Java',
        coin: 0
    },
    {
        id: 2,
        name: 'PHP',
        coin: 1
    },
    {
        id: 3,
        name: 'HTMl, CSS',
        coin: 1
    },
    {
        id: 4,
        name: 'ExtJS',
        coin: 1
    },
    {
        id: 5,
        name: 'ReactJS',
        coin: 1
    }
]

function coursesHandler(course) {
    console.log(course)
}
var newCourses= courses.map(coursesHandler);