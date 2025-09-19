export default function Input({ label, type = "text", name, placeholder}) {
  return (
    <div className="input-group">
      <label> {label} </label>
      <input type={type} name={name} placeholder={placeholder} />
    </div>
  );
}