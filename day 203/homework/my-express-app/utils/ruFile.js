// import fs from 'fs';

// export const readData = (){
//     try {
//         const data = fs.readFileSync('data.json', 'utf8');
//         const jsonData = JSON.parse(data);
//         console.log(jsonData)
//         return jsonData;
//     } catch (err) {
//         console.error('Error reading data.json:', err);
//         return null;
//     }
// }

// export const addData = () =>{
//     try{
//         const data = JSON.parse(fs.readFileSync('data.json', 'utf8'));
//         data.push(task);
//     } catch (err) {
//         console.error('Error reading data.json:', err);
//         return null;
//     }   
// }

// readData();
// addTask({
//         title: 'My New Task',
//         description: 'This is a test task.',
//         completed: false,
//         dueDate: new Date('2022-01-01'),
// })