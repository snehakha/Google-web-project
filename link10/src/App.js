import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      <div className="body">

            <p className='header'>
              <u>Quiz Section</u>
            </p>

            <p className="intro">
                Welcome to the quiz section. The quiz section contains quizes related to the earth
                and the enviornment. We advice all to take this interative quiz to enchance your
                knowledge. Select a quiz which you want to play!
            </p>

                <ul>
                    <li><a href="https://forms.gle/s4FPw3Dqd2vqp3jU9">Quiz 1- Quiz on enviornment</a></li>
                    <li><a href="https://forms.gle/mYsFF8dB5rZwjK6t9">Quiz 2- Quiz on sea and water level</a></li>
                    <li><a href="https://forms.gle/QQCWxpGwDtMomTqP8">Quiz 3- Quiz on glaciers</a></li>
                </ul>

            
        </div>
        <button className="home-btn"><a href='https://rohammaiti.github.io/Earth_guardians/'>Back to home</a></button>
    </div>
  );
}

export default App;
