

export default function Cours(props) {
    // console.log(props)

    return (
        <div className="text-center my-2">
            <h1>Le cours du bitcoin est à : {props.results.bpi.EUR.rate} €</h1>
        </div>
    )
}

export async function getServerSideProps(context) {
    // console.log(context)
    const data = await fetch('https://api.coindesk.com/v1/bpi/currentprice.json')
    const results = await data.json()

    return {
        props: {
            results
        }
    }
}