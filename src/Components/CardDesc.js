import React from "react";
import { Link } from "react-router-dom";

const CardDesc = () => {
  return (
    <div
    style={{
      minHeight: "100vh",
      background: "linear-gradient(135deg, #a1c4fd, #c2e9fb)",
      padding: "50px 20px",
      color: "#888",
    }}
  >
    <h1
      style={{
        display: "flex",
        justifyContent: "center",
        marginBottom: "40px",
        color: "black",
        textShadow: "2px 2px 4px rgba(0, 0, 0, 0.2)",
      }}
    >
      🚀 In-House Web Builder
    </h1>

      <div className="container text-center">
        <div className="row">
          <div class="col">
            <div class="card">
              <img
                src="memegeneratorr.png"
                class="card-img-top"
                alt="..."
              />
              <div class="card-body">
                <h5 class="card-title">Meme Generator</h5>
                <p class="card-text">
                "Create hilarious memes by adding custom text over images and downloading them instantly."
                </p>
                <Link to="/meme" class="btn btn-primary">
                  Create Meme
                </Link>
              </div>
            </div>
          </div>
          <div className="col">
            <div class="card">
              <img
                src="vibeChecker.jpg"
                class="card-img-top"
                alt="..."
              />
              <div class="card-body">
                <h5 class="card-title">Vibe Check</h5>
                <p class="card-text">
                "A playful and interactive quiz that instantly reveals your vibe, mood, and energy based on your choices."
                </p>
                <Link to="/vibecheck" class="btn btn-primary">
                  Check Vibe
                </Link>
              </div>
            </div>
          </div>
          </div>
        </div>
      </div>

  );
};

export default CardDesc;
