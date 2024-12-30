import React, { useState } from 'react';
import { createDog } from './api'; // Import the function we created in api.js

function App() {
  const [name, setName] = useState('');
  const [breed, setBreed] = useState('');
  const [age, setAge] = useState('');
  const [sex, setSex] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newDog = { name, breed, age, sex };

    try {
      const response = await createDog(newDog); // API call to create the dog
      setMessage(response.message); // Show success message
    } catch (error) {
      setMessage('An error occurred while creating the dog.');
    }
  };

  return (
    <div>
      <h1>Create a Dog</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="text"
          placeholder="Breed"
          value={breed}
          onChange={(e) => setBreed(e.target.value)}
        />
        <input
          type="number"
          placeholder="Age"
          value={age}
          onChange={(e) => setAge(e.target.value)}
        />
        <select value={sex} onChange={(e) => setSex(e.target.value)}>
          <option value="">Select Sex</option>
          <option value="Male">Male</option>
          <option value="Female">Female</option>
        </select>
        <button type="submit">Submit</button>
      </form>
      {message && <p>{message}</p>}
    </div>
  );
}

export default App;
