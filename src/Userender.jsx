import React, { useReducer } from "react";
import "./form.css";

const initialState = {
  name: "",
  email: "",
  phone: "",
  address: "",
  city: "",
  state: "",
  country: "",
  zip: "",
  dob: "",
  gender: "",
};

function reducer(state, action) {
  switch (action.type) {
    case "INPUT_CHANGE":
      return {
        ...state,
        [action.field]: action.value,
      };

    case "RESET":
      return initialState;

    default:
      return state;
  }
}

export default function Userender() {
  const [state, dispatch] = useReducer(reducer, initialState);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!state.name || !state.email) {
      alert("Name and Email are required");
      return;
    }

    console.log("Submitted Data:", state);
  };

  return (
    <div className="container">
      <h2>User Registration</h2>

      <form onSubmit={handleSubmit} className="form">

        <div className="form-group">
          <label>Name</label>
          <input
            type="text"
            value={state.name}
            placeholder="Enter name"
            onChange={(e) =>
              dispatch({ type: "INPUT_CHANGE", field: "name", value: e.target.value })
            }
          />
        </div>

        <div className="form-group">
          <label>Email</label>
          <input
            type="email"
            value={state.email}
            placeholder="Enter email"
            onChange={(e) =>
              dispatch({ type: "INPUT_CHANGE", field: "email", value: e.target.value })
            }
          />
        </div>

        <div className="form-group">
          <label>Phone</label>
          <input
            value={state.phone}
            placeholder="Enter phone number"
            onChange={(e) =>
              dispatch({ type: "INPUT_CHANGE", field: "phone", value: e.target.value })
            }
          />
        </div>

        <div className="form-group">
          <label>Address</label>
          <input
            value={state.address}
            placeholder="Enter address"
            onChange={(e) =>
              dispatch({ type: "INPUT_CHANGE", field: "address", value: e.target.value })
            }
          />
        </div>

        <div className="form-group">
          <label>City</label>
          <input
            value={state.city}
            placeholder="Enter city"
            onChange={(e) =>
              dispatch({ type: "INPUT_CHANGE", field: "city", value: e.target.value })
            }
          />
        </div>

        <div className="form-group">
          <label>State</label>
          <input
            value={state.state}
            placeholder="Enter state"
            onChange={(e) =>
              dispatch({ type: "INPUT_CHANGE", field: "state", value: e.target.value })
            }
          />
        </div>

        <div className="form-group">
          <label>Country</label>
          <input
            value={state.country}
            placeholder="Enter country"
            onChange={(e) =>
              dispatch({ type: "INPUT_CHANGE", field: "country", value: e.target.value })
            }
          />
        </div>

        <div className="form-group">
          <label>Zip Code</label>
          <input
            value={state.zip}
            placeholder="Enter zip code"
            onChange={(e) =>
              dispatch({ type: "INPUT_CHANGE", field: "zip", value: e.target.value })
            }
          />
        </div>

        <div className="form-group">
          <label>Date of Birth</label>
          <input
            type="date"
            value={state.dob}
            onChange={(e) =>
              dispatch({ type: "INPUT_CHANGE", field: "dob", value: e.target.value })
            }
          />
        </div>

        <div className="form-group">
          <label>Gender</label>
          <select
            value={state.gender}
            onChange={(e) =>
              dispatch({ type: "INPUT_CHANGE", field: "gender", value: e.target.value })
            }
          >
            <option value="">Select Gender</option>
            <option>Male</option>
            <option>Female</option>
            <option>Other</option>
          </select>
        </div>

        <div className="buttons">
          <button type="submit">Submit</button>
          <button type="button" onClick={() => dispatch({ type: "RESET" })}>
            Reset
          </button>
        </div>

      </form>
      
    </div>
  );
}