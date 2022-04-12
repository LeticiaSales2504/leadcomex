const Conteudo = (props) => {
      return (
        <section className="flex">
         <div className="w-6/12">
             {props.text.slot1}
         </div>
         <div className="w-6/12">
             {props.text.slot2}
         </div>
        </section>
    );
  }

export default Conteudo