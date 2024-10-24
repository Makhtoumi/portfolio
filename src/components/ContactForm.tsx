import React, { useState } from 'react';
import { useDropzone } from 'react-dropzone';
import { motion } from 'framer-motion';
import 'react-phone-input-2/lib/style.css'; // Import the styles for the phone input
import PhoneInput from 'react-phone-input-2'; // Import the phone input component
import { AiOutlineUser, AiOutlineMail, AiOutlinePhone, AiOutlineFile } from 'react-icons/ai'; // Importing icons for better UI

export default function ContactForm() {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phoneNumber: '',
    subject: '',
    projectDetails: '',
  });

  const { fullName, email, subject, projectDetails } = formData;
  const [files, setFiles] = useState<File[]>([]);
  const [phoneNumber, setPhoneNumber] = useState('');

  const onDrop = (acceptedFiles: File[]) => {
    setFiles([...files, ...acceptedFiles]);
  };

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept: {
      'image/jpeg': [],
      'image/png': [],
      'application/pdf': [],
    },
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };
  const handlePhoneChange = (value: string) => {
    setPhoneNumber(value);
  };
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log(formData);
    console.log(files);
  };

  return (
    <motion.div
      className="max-w-2xl mx-auto p-8 bg-white shadow-lg rounded-lg transition-transform duration-300 hover:scale-105 hover:shadow-2xl"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 20 }}
      transition={{ duration: 0.5 }}
    >
      <h2 className="text-3xl font-bold text-center mb-6 text-gray-800">Contact Me</h2>
      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Full Name */}
        <div className="relative">
          <AiOutlineUser className="absolute left-3 top-3 text-gray-400" />
          <input
            type="text"
            name="fullName"
            value={fullName}
            onChange={handleChange}
            placeholder="Full Name"
            className="block w-full p-4 pl-10 border border-gray-300 rounded-md bg-gray-100 text-gray-800 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-200"
          />
        </div>

        {/* Email Address */}
        <div className="relative">
          <AiOutlineMail className="absolute left-3 top-3 text-gray-400" />
          <input
            type="email"
            name="email"
            value={email}
            onChange={handleChange}
            placeholder="Email Address"
            className="block w-full p-4 pl-10 border border-gray-300 rounded-md bg-gray-100 text-gray-800 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-200"
          />
        </div>

        {/* Phone Number */}
        <div className="relative">
          <AiOutlinePhone className="absolute left-3 top-3 text-gray-400" />
          <PhoneInput
            country={'tn'} // Default to Tunisia
            value={phoneNumber}
            onChange={handlePhoneChange}
            containerClass="flex w-full border border-gray-300 rounded-md bg-gray-100"
            inputClass="flex-1 p-4 pl-10 bg-gray-100 text-gray-800 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-200"
            buttonClass="border-0 rounded-l-md"
            specialLabel=""
            dropdownClass="absolute bg-white border border-gray-300 rounded-md shadow-lg z-10"
            dropdownStyle={{ color: 'black' }} // Ensure text color is visible
            />
        </div>

        {/* Subject */}
        <div className="relative">
          <input
            type="text"
            name="subject"
            value={subject}
            onChange={handleChange}
            placeholder="Subject"
            className="block w-full p-4 border border-gray-300 rounded-md bg-gray-100 text-gray-800 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-200"
          />
        </div>

        {/* Project Details */}
        <div className="relative">
          <textarea
            name="projectDetails"
            value={projectDetails}
            onChange={handleChange}
            placeholder="Project Details"
            className="block w-full p-4 border border-gray-300 rounded-md bg-gray-100 text-gray-800 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-200"
            rows={4}
          />
        </div>

        {/* Drag and Drop File Upload */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Upload Files</label>
          <div
            {...getRootProps()}
            className={`mt-1 p-6 border-2 border-dashed rounded-md transition duration-200 
              ${isDragActive ? 'border-blue-400 bg-blue-50' : 'border-gray-300'}`}
          >
            <input {...getInputProps()} />
            {isDragActive ? (
              <p className="text-blue-500 text-center">Drop the files here...</p>
            ) : (
              <p className="text-gray-500 text-center flex items-center">
                <AiOutlineFile className="mr-2" />
                Drag & drop files here, or click to select files
              </p>
            )}
          </div>
          {files.length > 0 && (
            <ul className="mt-4 space-y-2 text-gray-600">
              {files.map((file, index) => (
                <li key={index} className="bg-gray-100 p-2 rounded-md">{file.name}</li>
              ))}
            </ul>
          )}
        </div>

        {/* Submit Button */}
        <div className="text-center">
          <button
            type="submit"
            className="w-full py-3 px-4 bg-blue-600 text-white font-semibold rounded-md hover:bg-blue-700 transition duration-200 shadow-lg transform hover:scale-105"
          >
            Submit
          </button>
        </div>
      </form>
    </motion.div>
  );
}
