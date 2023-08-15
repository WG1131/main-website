import Header from "../components/Header"

export interface Device {
    name: string
}

async function getWhoIsHome() {
    const res = await fetch('http://localhost:5000/whoishome', { cache: 'no-cache' })
    if (!res.ok) {
        return null
    }
    return res.json()
}

const WhoIsHome = async () => {
    const data: Device[] | null = await getWhoIsHome()
    if (data) {
        return (
            <>
                <div className="flex justify-center gap-5">
                    {data.map((device) => <div key={device.name}>{device.name}</div>)}
                </div>
            </>
        )
    }
    return (
        <div className="flex justify-center">Data could not be loaded...</div>
    )
}

export default function Home() {

    return (
        <>
            <Header />
            <p className="text-4xl text-center pt-20 pb-5">Who is home?</p>
            <WhoIsHome />
        </>
    )
}