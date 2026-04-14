import { useNavigate } from "react-router-dom";

function NavigateBackButton() {
  const navigate = useNavigate();

  return (
    <div style={{ marginTop: "20px", backgroundColor: "yellow", padding: "12px" }}>
      <p>BACK BUTTON TEST</p>
      <button
        onClick={() => navigate(-1)}
        style={{
          fontSize: "24px",
          padding: "12px 20px",
          border: "3px solid black",
          backgroundColor: "red",
          color: "white"
        }}
      >
        GO BACK
      </button>
    </div>
  );
}

export default NavigateBackButton;