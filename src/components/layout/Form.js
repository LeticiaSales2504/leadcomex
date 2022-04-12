  const Form = () =>
  <form className="text-xl bg-slate px-6 pt-1 text-slate h-screenfont-montSerratMedium">
    <div className="bg-green mx-6 pt-2 pb-2 text-center text-xl font-montSerratMedium mb-3">
      <label className="block text-gray-50 text-white">
        AGENDE UMA DEMONSTRAÇÃO 
      </label>
    </div>  
    <div className="xl-2">
      <label className="block text-xl">
          E-MAIL CORPORATIVO
        </label>
        <input className="shadow appearance-none border border-gray w-full py-1 px-2 mb-1 leading-tight focus:outline-none" id="email" type="text"/>
      </div>
      <div className="xl-2">
        <label className="block text-gray-700 text-xl">
          NOME
        </label>
        <input className="shadow appearance-none border border-gray w-full py-1 px-2 mb-1 leading-tight focus:outline-none" id="nome" type="text"></input>
      </div>
      <div className="xl-2">
        <label className="block text-gray-700 text-xl">
          CARGO QUE OCUPA
        </label>
        <input className="shadow appearance-none border border-gray w-full py-1 px-2 mb-1 leading-tight focus:outline-none" id="cargo" type="text"></input>
      </div>
      <div className="xl-2">
        <label className="block text-gray-700 text-xl">
          EMPRESA
        </label>
        <input className="shadow appearance-none border border-gray w-full py-1 px-2 mb-1 leading-tight focus:outline-none" id="empresa" type="text"></input>
      </div>
      <div className="xl-2">
        <label className="block text-gray-700 text-xl">
          SITE DA EMPRESA
        </label>
        <input className="shadow appearance-none border border-gray w-full py-1 px-2 mb-1 leading-tight focus:outline-none" id="site" type="text"></input>
      </div>
      <div className="xl-2">
        <label className="block text-gray-700 text-xl">
          SEGMENTO DA EMPRESA
        </label>
        <input className="shadow appearance-none border border-gray w-full py-1 px-2 mb-1 leading-tight focus:outline-none" id="segmento" type="text"></input>
      </div>
      <div className="xl-2 mb-3">
        <label className="block text-gray-700 text-xl">
          NÚMERO DO CELULAR
        </label>
        <input className="shadow appearance-none border border-gray w-full py-1 px-2 mb-1 leading-tight focus:outline-none" id="numero_celular" type="text" placeholder="(XXX) + 9XXX-XXXX"></input>
      </div>
      <div className="xl-2 bg-green mx-28 pt-2 pb-2">
        <button className="block text-xl text-white w-full focus:outline-none" type="button">
          ENVIAR
        </button>
      </div>
    <div className="text-center text-sm text-gray py-2 mx-8 text-slate font-montSerratRegular">
        Ao clicar no botão enviar do formulário, você concorda em enviar suas informações para a Lead Comex que usará seus dados de acordo com a nossa política de privacidade.
    </div>
  </form>

  export default Form