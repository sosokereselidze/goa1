import React, { useState } from 'react';

//1
const Counter = () => {
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
};

export default Counter;









//2
// const ToggleText = () => {
//   const [isHello, setIsHello] = useState(true);

//   return (
//     <div>
//       <p>{isHello ? 'Hello' : 'Goodbye'}</p>
//       <button onClick={() => setIsHello(!isHello)}>Toggle</button>
//     </div>
//   );
// };

// export default ToggleText;




//3
// const ShowHideElement = () => {
//   const [visible, setVisible] = useState(true);

//   return (
//     <div>
//       <button onClick={() => setVisible(!visible)}>
//         {visible ? 'Hide' : 'Show'} Paragraph
//       </button>
//       {visible && <p>This is a toggleable paragraph.</p>}
//     </div>
//   );
// };

// export default ShowHideElement;



//4
// const ChangeBackgroundColor = () => {
//   const [color, setColor] = useState('white');

//   const colors = ['red', 'blue', 'green', 'yellow', 'pink'];

//   return (
//     <div>
//       <button onClick={() => setColor(colors[Math.floor(Math.random() * colors.length)])}>
//         Change Background Color
//       </button>
//       <div style={{ width: '100px', height: '100px', backgroundColor: color }}></div>
//     </div>
//   );
// };

// export default ChangeBackgroundColor;




//5
// const ListOfItems = () => {
//   const [item, setItem] = useState('');
//   const [items, setItems] = useState([]);

//   const handleAddItem = () => {
//     setItems([...items, item]);
//     setItem('');
//   };

//   return (
//     <div>
//       <input
//         type="text"
//         value={item}
//         onChange={(e) => setItem(e.target.value)}
//       />
//       <button onClick={handleAddItem}>Add Item</button>
//       <ul>
//         {items.map((i, index) => (
//           <li key={index}>{i}</li>
//         ))}
//       </ul>
//     </div>
//   );
// };

// export default ListOfItems;





//6
// const FormSubmission = () => {
//   const [name, setName] = useState('');
//   const [email, setEmail] = useState('');
//   const [submitted, setSubmitted] = useState(null);

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     setSubmitted({ name, email });
//   };

//   return (
//     <div>
//       <form onSubmit={handleSubmit}>
//         <input
//           type="text"
//           placeholder="Name"
//           value={name}
//           onChange={(e) => setName(e.target.value)}
//         />
//         <input
//           type="email"
//           placeholder="Email"
//           value={email}
//           onChange={(e) => setEmail(e.target.value)}
//         />
//         <button type="submit">Submit</button>
//       </form>
//       {submitted && (
//         <div>
//           <p>Name: {submitted.name}</p>
//           <p>Email: {submitted.email}</p>
//         </div>
//       )}
//     </div>
//   );
// };

// export default FormSubmission;



//7
// const ShowPassword = () => {
//   const [showPassword, setShowPassword] = useState(false);

//   return (
//     <div>
//       <input
//         type={showPassword ? 'text' : 'password'}
//         placeholder="Password"
//       />
//       <label>
//         <input
//           type="checkbox"
//           checked={showPassword}
//           onChange={() => setShowPassword(!showPassword)}
//         />
//         Show Password
//       </label>
//     </div>
//   );
// };

// export default ShowPassword;




