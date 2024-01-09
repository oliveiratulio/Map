const number = [1, 2, 3, 4, 5, 6, 7,]

const double = number.map((item) => item * 2)

const list = [
    { name: 'Túlio', vip: true },
    { name: 'Maria', vip: false },
    { name: 'João', vip: true },
    { name: 'José', vip: false },
    { name: 'Bruno', vip: true },
    { name: 'Ane', vip: false },


]

const newList = list.map(user => {
    return {
        name: user.name,
        braceletColor: user.vip ? 'black' : 'green'
    }

})

console.log(newList)

const students = [
    { name: 'Túlio', TestGrade: 7 },
    { name: 'Lorena', TestGrade: 5 },
    { name: 'Maria', TestGrade: 8 },
    { name: 'Ana', TestGrade: 9 },
    { name: 'Jose', TestGrade: 3 },
    { name: 'Geraldo', TestGrade: 2 },
    { name: 'Ane', TestGrade: 10 },



]
    const newStudents = students.map( student => {
        return {
            name: student.name,
            aprovedColor: student.TestGrade >= 5 ? 'Aprovado' : 'Reprovado'
        }
        
            
    })

    console.log(newStudents)