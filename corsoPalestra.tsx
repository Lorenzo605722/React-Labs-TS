interface Corso {
    id:number
    nome:string
    istruttore:string
    attivo:boolean
}

export default function GestionePalestra () {

    const[corsi, setCorsi] = useState<Corso[]> ([
        { id: 1, nome: "Yoga", istruttore: "Sara", attivo: true },
        { id: 2, nome: "Pilates", istruttore: "Marco", attivo: false },
        { id: 3, nome: "Crossfit", istruttore: "Luca", attivo: true }
    ])

    function presenzaCorsi(id:number) {
        setCorsi(corsi.map(a =>
            a.id === id ? {...a, attivo: !a.attivo}: a
        ))
    }
    function rimuoviCorso(id:number) {
        setCorsi(corsi.filter(b => b.id !== id))
    }
    const attivi = corsi.filter(c=> c.attivo).length
    const nonAttivi = corsi.filter(d=> !d.attivo).length

    return(
        <div>
            <h1> Gestione Palestra Modena Corsi: </h1>
            <p> Corsi attivi: {attivi} / {corsi.length} </p>
            <p> Corsi non disponibili: {nonAttivi} </p>

          {corsi.map(x=> 
            <div key = {x.id}>
                    
                    <p> {x.nome} - {x.istruttore} </p>
                    <p> {x.attivo ? "🟢": "🔴" }</p>

                <button onClick = {() => presenzaCorsi(x.id)}>
                    {x.attivo ? "Disattiva corso" : "Attiva corso"}
                </button>

                <button onClick = {() => rimuoviCorso(x.id)}>
                    Rimuovi
                </button>

            </div>
            )}
        </div>
    )
};
