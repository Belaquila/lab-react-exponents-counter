function Exponent (props) {

return (
    <div className="exponent-counter-container">
     <p className="exponent-label">{(props.exponent)}</p>
     <p className="exponent-result">{(props.num + ' * ').repeat(props.exponent - 1) + props.num} = <span className="total">{Math.pow(props.num,props.exponent)} </span></p>
    </div>
)

};

export default Exponent;