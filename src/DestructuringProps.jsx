export default function DestructuringProps({
  name,
  age,
  email,
  phone,
  city,
  qualification,
  experience
}) {
  return (
    <tr>
      <td>{name}</td>
      <td>{age}</td>
      <td>{email}</td>
      <td>{phone}</td>
      <td>{city}</td>
      <td>{qualification}</td>

      {/* ✅ Conditional Rendering */}
      <td>
        {experience > 5 ? (
          <span style={{ color: "green", fontWeight: "bold" }}>
            Senior ({experience} yrs)
          </span>
        ) : experience > 0 ? (
          <span style={{ color: "orange" }}>
            Junior ({experience} yrs)
          </span>
        ) : (
          <span style={{ color: "red" }}>
            Fresher
          </span>
        )}
      </td>
    </tr>
  );
}