import Header from "../components/Header"

export default function Home () {
    return(
        <>
        <Header/>
        <p className="text-4xl text-center pt-20 pb-5">Who's home?</p>
        <div className="flex justify-center gap-5">
            <div>Horacio</div>
            <div>Lenja</div>
            <div>Johannes</div>
            <div>Elin</div>
            <div>Skye</div>


        </div>
        </>
    )
}