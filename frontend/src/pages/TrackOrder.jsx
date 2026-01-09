import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import API from "../services/api";

export default function TrackOrder() {
  const { id } = useParams();
  const [order, setOrder] = useState(null);

  useEffect(() => {
    API.get(`/orders/${id}`).then(res => setOrder(res.data));
  }, [id]);

  if (!order) return <p>Loading...</p>;

  return (
    <>
      <h2>Track Order</h2>
      <p><b>Status:</b> {order.orderStatus}</p>
      <p><b>Payment:</b> {order.paymentStatus}</p>
    </>
  );
}