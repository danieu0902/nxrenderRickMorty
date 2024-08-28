'use client'


function Page() {

    return (
        <>
            <h2 className="text-xl font-bold text-center">Ejemplo 1: CSR React</h2>
            <p className="text-8xl font-bold text-center">
                {Math.floor(Math.random() * 100)}
            </p>
            <p className="text-8xl font-bold text-center">
                {new Date().toLocaleTimeString()}
            </p>
        </>
    )
}

export default Page  
