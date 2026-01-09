import { useState } from "react";
import API from "../services/api";

export default function Return() {
  const [form, setForm] = useState({});

  const submit = async () => {
    await API.post("/returns", form);
    alert("Return request submitted");
  };

  return (
    <>
      <h2>Return / Replacement</h2>

      <input placeholder="Order ID"
        onChange={e => setForm({ ...form, orderId: e.target.value })} />

      <input placeholder="Reason"
        onChange={e => setForm({ ...form, reason: e.target.value })} />

      <select onChange={e => setForm({ ...form, type: e.target.value })}>
        <option value="">Select</option>
        <option value="return">Return</option>
        <option value="replacement">Replacement</option>
      </select>

      <button onClick={submit}>Submit</button>
    </>
  );
}
