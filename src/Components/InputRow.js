import React from "react";

const InputRow = ({ participantIndex, handleChange }) => {
  return (
    <div>
      <div className="grid gap-4 gap-y-2 text-sm grid-cols-1 lg:grid-cols-7">
        <div className="col-span-1">
          <label htmlFor={`full_name${participantIndex}`}>Full Name</label>
          <input
            type="text"
            name={`full_name${participantIndex}`}
            id={`full_name${participantIndex}`}
            className="h-10 border mt-1 rounded px-4 w-full bg-white"
            placeholder="Full Name"
            onChange={(e) => handleChange(e, participantIndex)} 
            required
          />
        </div>
        <div className="col-span-1">
          <label htmlFor={`email${participantIndex}`}>Email Address</label>
          <input
            type="text"
            name={`email${participantIndex}`}
            id={`email${participantIndex}`}
            className="h-10 border mt-1 rounded px-4 w-full bg-white"
            placeholder="email@domain.com"
            onChange={(e) => handleChange(e, participantIndex)} 
            required
          />
        </div>
        <div className="col-span-1">
          <label htmlFor={`phone_number${participantIndex}`}>
            Phone Number
          </label>
          <input
            type="text"
            name={`phone_number${participantIndex}`}
            id={`phone_number${participantIndex}`}
            className="h-10 border mt-1 rounded px-4 w-full bg-white"
            placeholder="Phone Number"
            onChange={(e) => handleChange(e, participantIndex)} 
            required
          />
        </div>
        <div className="col-span-1">
          <label htmlFor={`level${participantIndex}`}>Level</label>
          <select
            className="h-10 border mt-1 rounded px-1 w-full bg-white"
            name={`level${participantIndex}`}
            onChange={(e) => handleChange(e, participantIndex)} 
            required
          >
            <optgroup label="Select Your Level">
              <option value="">Select Your Level</option>
              <option value="Undergraduate">Undergraduate</option>
              <option value="Postgraduate">Postgraduate</option>
              <option value="Ph.D.">Ph.D.</option>
            </optgroup>
          </select>
        </div>
        <div className="col-span-1">
          <label htmlFor={`department${participantIndex}`}>Department</label>
          <select
            className="h-10 border mt-1 rounded px-1 w-full bg-white"
            name={`department${participantIndex}`}
            onChange={(e) => handleChange(e, participantIndex)} 
            required
          >
            <optgroup label="Select Your Department">
              <option value="">Select Your Department</option>
              <option value="BTech">BTech</option>
              <option value="BCA">BCA</option>
              <option value="MCA">MCA</option>
            </optgroup>
          </select>
        </div>
        <div className="col-span-1">
          <label htmlFor={`semester${participantIndex}`}>Semester</label>
          <select
            className="h-10 border mt-1 rounded px-1 w-full bg-white"
            name={`semester${participantIndex}`}
            onChange={(e) => handleChange(e, participantIndex)} 
            required
          >
            <optgroup label="Select Your Semester">
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
              <option value="6">6</option>
            </optgroup>
          </select>
        </div>
        <div className="col-span-1">
          <label htmlFor={`Enrollment${participantIndex}`}>Enrollment</label>
          <input
            type="text"
            name={`Enrollment${participantIndex}`}
            id={`Enrollment${participantIndex}`}
            className="h-10 border mt-1 rounded px-4 w-full bg-white"
            placeholder="Enrollment"
            onChange={(e) => handleChange(e, participantIndex)} 
            required
          />
        </div>
      </div>
    </div>
  );
};

export default InputRow;
