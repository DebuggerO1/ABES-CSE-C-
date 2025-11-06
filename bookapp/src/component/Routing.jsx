import React from 'react'

function Routing() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Book />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </div>
  )
}

export default Routing
