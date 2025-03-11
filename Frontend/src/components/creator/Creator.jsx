

import React from 'react';
import Navbar from '../components_lite/Navbar';
import sachin from './Sachin.jpg'; // Import your image

const Creator = () => {
  return (
    <div>
      <Navbar />
      <div className="flex flex-col items-center justify-center h-screen max-w-7xl mx-auto p-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center w-full">
          {/* Image Section */}
          <div className="flex justify-center">
            <img src={sachin} alt="Sachin Kumar Yadav" className="h-80 object-cover rounded-lg shadow-md" />
          </div>
          {/* Text Section */}
          <div>
            <h2 className="text-2xl font-bold text-gray-800 mb-4">Sachin Kumar Yadav</h2>
            <p className="text-gray-600 mb-2"><strong>Phone:</strong> +91-7011505312</p>
            <p className="text-gray-600 mb-2"><strong>Email:</strong> sachinyadavsky7011@gmail.com</p>
            <p className="text-gray-600 mb-2"><strong>LinkedIn:</strong> <a href="https://www.linkedin.com/in/sachin-kumar-yadav-766859297" target="_blank" rel="noopener noreferrer" className="text-blue-600">Sachin Kumar Yadav</a></p>
            <p className="text-gray-600 mb-2"><strong>GitHub:</strong> <a href="https://github.com/Sachin70115053" target="_blank" rel="noopener noreferrer" className="text-blue-600">Sachin70115053</a></p>
            <p className="text-gray-600 mb-2"><strong>Institution:</strong> Indian Institute of Information Technology, Pune</p>
            <p className="text-gray-600"><strong>Department:</strong> Computer Science and Engineering</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Creator;
