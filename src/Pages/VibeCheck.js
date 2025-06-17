import React from 'react'
import Quiz from '../Components/Quiz'

const VibeCheck = () => {
  return (
    <div
      style={{
        minHeight: '100vh',
        background: 'linear-gradient(135deg,rgb(54, 94, 159), #c2e9fb)',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        padding: '50px 20px',
      }}
    >
      <h1
        style={{
          fontSize: '3rem',
          marginBottom: '30px',
          color: '#fff',
          textShadow: '2px 2px 4px rgba(0, 0, 0, 0.2)',
        }}
      >
        ✨ VIBE CHECK ✨
      </h1>

      <Quiz />
    </div>
  )
}

export default VibeCheck
