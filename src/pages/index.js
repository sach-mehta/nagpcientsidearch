import React, { useState } from "react";
import Layout from "../components/layout";
import "../styles/styles.scss";

const IndexPage = () => {

  const [isPiVisible, setPiVisible] = useState(false)

  const [isSnakeVisible, setSnakeVisible] = useState(false)

  const showPiHandler = () => {
    setSnakeVisible(() => {
      return false;
    });

    setPiVisible(() => {
      return true;
    });
  }

  const showSnakeHandler = () => {
    setPiVisible(() => {
      return false
    });

    setSnakeVisible(() => {
      return true
    });
  }

  return (
    <Layout>
      <div className="container-fluid">
        <p className="d-flex justify-content-center">Click any button to play the game!</p>
        <div className="d-flex justify-content-center mt-5 mx-5">          
          <button
            type="button"
            className="btn btn-primary mr-15 mx-5"
            onClick={showPiHandler}
          >
            PI Game
          </button>
          <button
            type="button"
            className="btn btn-secondary"
            onClick={showSnakeHandler}
          >
            Snake and Ladder Game
          </button>
        </div>
        <hr/>
        <div className="conatiner row mt-5 mx-5">
          {isPiVisible && (
            <iframe
              title="PI Game"
              src="https://icy-ground-0abe53c0f.2.azurestaticapps.net/"
              className="conatiner__game"
            ></iframe>
          )}
          {isSnakeVisible && <iframe
            title="Snake Game"
            src="https://black-wave-0cebaaa0f.2.azurestaticapps.net"
            className="conatiner__game"
          ></iframe>}
        </div>
      </div>
    </Layout>
  )
}

export default IndexPage