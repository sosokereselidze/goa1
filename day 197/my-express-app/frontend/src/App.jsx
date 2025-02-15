const React = require('react');
const ReactDOM = require('react-dom');

const Register = () => {
    const [formData, setFormData] = React.useState({ email: '', name: '', password: '' });
    const [message, setMessage] = React.useState('');

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch('http://localhost:3000/register', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(formData),
            });
            const data = await response.json();
            setMessage(data.message);
        } catch (error) {
            setMessage('Error registering account.');
        }
    };

    return (
        <div>
            <h2>Register</h2>
            <form onSubmit={handleSubmit}>
                <input type="email" name="email" placeholder="Email" onChange={handleChange} required />
                <input type="text" name="name" placeholder="Name" onChange={handleChange} required />
                <input type="password" name="password" placeholder="Password" onChange={handleChange} required />
                <button type="submit">register</button>
            </form>
            {message && <p>{message}</p>}
        </div>
    );
};

ReactDOM.render(<Register />, document.getElementById('root'));