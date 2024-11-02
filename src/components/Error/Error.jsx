import { useNavigate } from "react-router-dom";
import "./Error.css";
function Error({ message }) {
  const navigate = useNavigate();
  return (
    <div className="errorwrapper">
      <p>{message}</p>
      <button onClick={() => navigate(-1)}>Back</button>
    </div>
  );
}

export default Error;
