
// import React from 'react';

// function Contact() {
//     return (
//         <div id="contact" className="flex justify-center items-center min-h-screen ">
//             <div className="w-full max-w-md p-8 rounded-lg">
//                 <h2 className="text-5xl font-bold text-center text-white mb-6">Contact Me</h2>
//                 <form 
//                     action="https://formspree.io/f/xnnpnjgl" 
//                     method="POST" 
//                     className="space-y-6"
//                 >
//                     <div>
//                         <label className="block text-white text-xl">Full Name</label>
//                         <input 
//                             type="text" 
//                             name="name" 
//                             required 
//                             className="w-full mt-2 p-3 text-lg border text-gray-400 border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500" 
//                             placeholder="Enter Your Name:" 
//                         />
//                     </div>
//                     <div>
//                         <label className="block text-white text-xl">Email</label>
//                         <input 
//                             type="email" 
//                             name="email" 
//                             required 
//                             className="w-full mt-2 p-3 text-lg border text-gray-400 border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500" 
//                             placeholder="Enter Your Email" 
//                         />
//                     </div>
//                     <div>
//                         <label className="block text-white text-xl">Message</label>
//                         <input 
//                             name="message" 
//                             type="text" 
//                             required 
//                             className="w-full mt-2 p-3 pb-30 text-lg h-40 border text-gray-400 border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500" 
//                             placeholder="Message..." 
//                         />
//                     </div>
//                     <button 
//                         type="submit" 
//                         className="w-full bg-purple-900 hover:bg-purple-800 text-white text-xl py-3 rounded-lg cursor-pointer"
//                     >
//                         Send
//                     </button>
//                 </form>
//             </div>
//         </div>
//     );
// }

// export default Contact;

// client/src/components/Contact.js

import React, { useState } from 'react';

function Contact() {
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submissionStatus, setSubmissionStatus] = useState('');

    const handleSubmit = async (event) => {
        event.preventDefault();  // Prevent default form submission behavior (which causes the redirect)

        const formData = new FormData(event.target);
        const data = {
            name: formData.get('name'),
            email: formData.get('email'),
            message: formData.get('message'),
        };

        setIsSubmitting(true); // Show submitting state

        try {
            const response = await fetch('https://formspree.io/f/xnnpnjgl', {
                method: 'POST',
                headers: {
                    'Accept': 'application/json',
                },
                body: new URLSearchParams(data),
            });

            if (response.ok) {
                setSubmissionStatus('success');
                alert('Your message has been sent successfully!');
            } else {
                setSubmissionStatus('error');
                alert('There was an issue sending your message. Please try again.');
            }
        } catch (error) {
            setSubmissionStatus('error');
            alert('There was an issue sending your message. Please try again.');
        } finally {
            setIsSubmitting(false);  // Reset submitting state
        }
    };

    return (
        <div id="contact" className="flex justify-center items-center min-h-screen ">
            <div className="w-full max-w-md p-8 rounded-lg">
                <h2 className="text-5xl font-bold text-center text-white mb-6">Contact Me</h2>
                <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                        <label className="block text-white text-xl">Full Name</label>
                        <input
                            type="text"
                            name="name"
                            required
                            className="w-full mt-2 p-3 text-lg border text-gray-400 border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                            placeholder="Enter Your Name:"
                        />
                    </div>
                    <div>
                        <label className="block text-white text-xl">Email</label>
                        <input
                            type="email"
                            name="email"
                            required
                            className="w-full mt-2 p-3 text-lg border text-gray-400 border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                            placeholder="Enter Your Email"
                        />
                    </div>
                    <div>
                        <label className="block text-white text-xl">Message</label>
                        <input
                            name="message"
                            required
                            className="w-full mt-2 p-3 pb-30 text-lg h-40 border text-gray-400 border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 "
                            placeholder="Message..."
                        />
                    </div>
                    <button
                        type="submit"
                        className="w-full bg-purple-900 hover:bg-purple-800 text-white text-xl py-3 rounded-lg cursor-pointer"
                        disabled={isSubmitting}
                    >
                        {isSubmitting ? 'Sending...' : 'Send'}
                    </button>
                </form>
            </div>
        </div>
    );
}

export default Contact;
