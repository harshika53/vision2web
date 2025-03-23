import React from 'react'
import ImageUpload from './_components/ImageUpload'

function Dashboard() {
    return (
        <div 
        className={`flex flex-col  transition-all duration-300 }`}
        // style={{ backgroundImage: "url('/herobg.png')", backgroundSize: "cover", backgroundPosition: "center" }}
    >
        <div className="xl:px-20">
            <h2 className="font-bold text-3xl text-center text-white mt-2">Convert Wireframe to Code</h2>
            <ImageUpload />
        </div>
    </div>
    )
}

export default Dashboard
