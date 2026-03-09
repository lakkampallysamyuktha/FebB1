import './App.css'
import ConditionalRendering from './ConditionalRendering';
import RegistrationForm from './RegistrationForm';
// import DestructuringProps from "./DestructuringProps";

export default function App() {
  return (
    <div>
      <RegistrationForm />
     
      {/* <h1 style={{ textAlign: "center" }}>USER DETAILS</h1>

      <table
        border="1"
        cellPadding="10"
        style={{
          width: "100%",
          textAlign: "center",
          borderCollapse: "collapse"
        }}
      >
        <thead style={{ backgroundColor: "#f2f2f2" }}>
          <tr>
            <th>Name</th>
            <th>Age</th>
            <th>Email</th>
            <th>Phone</th>
            <th>City</th>
            <th>Qualification</th>
            <th>Experience</th>
          </tr>
        </thead>

        <tbody>
          <DestructuringProps
            name="Aadhya"
            age={25}
            email="Aadhya@gmail.com"
            phone="9876543210"
            city="Chennai"
            qualification="B.Tech"
            experience={3}
          />

          <DestructuringProps
            name="Abhi"
            age={28}
            email="Abhi@gmail.com"
            phone="8765432110"
            city="Bangalore"
            qualification="MBA"
            experience={4}
          />

          <DestructuringProps
            name="srikanth"
            age={24}
            email="srikanth@gmail.com"
            phone="1234567890"
            city="Hyderabad"
            qualification="B.Com"
            experience={2}
          />

          <DestructuringProps
            name="Meena"
            age={30}
            email="meena@gmail.com"
            phone="1234567891"
            city="Bangalore"
            qualification="MCA"
            experience={6}
          />

          <DestructuringProps
            name="Varshu"
            age={35}
            email="varshu@gmail.com"
            phone="9865432101"
            city="Kolkata"
            qualification="B.Sc"
            experience={10}
          />
        </tbody>
      </table> */}
    </div>
  );
}