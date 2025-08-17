import React from "react";
import "./ChooseInstrument.css";
import { useNavigate } from "react-router-dom"; // ✅ Import navigate hook

const instruments = [
  { name: "Piano", img: "https://i.pinimg.com/736x/23/aa/79/23aa79953e17a87dd78358dcbccc2f27.jpg" },
  { name: "Singing", img: "https://i.pinimg.com/736x/1a/87/4b/1a874b50db493893afbde51e04433885.jpg" },
  { name: "Guitar", img: "https://i.pinimg.com/736x/6a/f6/64/6af66444125f93b43c686cc251130b34.jpg" },
  { name: "Flute", img: "https://i.pinimg.com/736x/a3/46/bc/a346bcb7a535b6aac1646b4af1c0cbff.jpg" },
  { name: "Violin", img: "https://i.pinimg.com/736x/cf/82/52/cf82529a18f46b9c2a9e80f19bb90588.jpg" },
];

const ChooseInstrument = () => {
  const navigate = useNavigate(); // ✅ Create navigate function

  const handleChoose = (name) => {
    // Optionally store the chosen instrument in state/context/localStorage if you need it later
    // Example: localStorage.setItem("instrument", name);

    navigate("/ChooseLevel", { state: { instrument: name } });
 // ✅ Navigate to choose level page
  };

  return (
    <div className="choose-bg">
      <div className="choose-container">
        <h2 className="choose-title">
          What's your <span className="highlight">instrument?</span>
        </h2>
        <p className="choose-subtitle">You can always switch later</p>
        <div className="instrument-options">
          {instruments.map((inst) => (
            <div
              key={inst.name}
              className="instrument-card"
              onClick={() => handleChoose(inst.name)}
              tabIndex={0}
            >
              <div className="instrument-img-circle">
                <img src={inst.img} alt={inst.name} className="instrument-image" />
              </div>
              <span className="instrument-label">{inst.name}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ChooseInstrument;
