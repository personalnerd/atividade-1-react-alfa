import React, {useState} from 'react'
import './calc.scss'

export default function PagesCalc() {
    const [val1, setVal1] = useState(0);
    const [val2, setVal2] = useState(0);
    const [visor, setVisor] = useState(0);

    function calcula(op) {
        switch (op) {
            case 1:
                setVisor(Number(val1) + Number(val2));
                break;
            case 2:                    
                setVisor(Number(val1) - Number(val2));
                break;
            case 3:
                setVisor(Number(val1) * Number(val2));
                break;
            case 4:
                setVisor(Number(val1) / Number(val2));
                break;
        }
    }
    function reseta() {
        setVal1(0)
        setVal2(0)
        setVisor(0)
    }

    return (
        <section className="calc">
            <div className="calc-bloco">
                <div className="calc-valores">
                    <input type="number" onChange={e => setVal1(e.target.value)} value={val1} />
                    <input type="number" onChange={e => setVal2(e.target.value)} value={val2}/>
                </div>
                <div className="calc-op">
                    <button onClick={() => calcula(1)}>&#43;</button>
                    <button onClick={() => calcula(2)}>&minus;</button>
                    <button onClick={() => calcula(3)}>&times;</button>
                    <button onClick={() => calcula(4)}>&divide;</button>
                    <button onClick={() => reseta()}>C</button>
                </div>
                <div className="calc-visor">
                    <input type="number" onChange={e => setVisor(e.target.value)} value={visor} disabled />
                </div>
            </div>
        </section>
    )
}