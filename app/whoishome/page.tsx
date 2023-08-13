import Header from "../components/Header"

export interface Device {
    name: string
}

async function getData() {
    const res = await fetch('http://localhost:5000/whoishome', {cache: 'no-cache'})

    if (!res.ok) {
      throw new Error('Failed to fetch data')
    }

    return res.json()

}

export default async function Home () {
    const data: Device[] = await getData()

    return(
        <>
        <Header/>
        <p className="text-4xl text-center pt-20 pb-5">Who's home?</p>
        <div className="flex justify-center gap-5">
            {data.map((device) => <div>{device.name}</div>)}
        </div>
        </>
    )
}