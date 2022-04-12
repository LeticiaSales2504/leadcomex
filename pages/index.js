import Logo from '../src/components/layout/Logo'
import Menu from '../src/components/layout/Menu'
import Form from '../src/components/layout/Form'

/*const getProp = (index) => {
  switch(index) 
  {
    case 0:
      return {
        slot1: 
        <>
          <h2 className="title">
            UMA <span className="text-green">PLATAFORMA</span> CARREGADA DE INOVAÇÃO PARA O COMÉRCIO EXTERIOR
          </h2>
          <article className="text-white text-center text-2x1">
            <p className="mb-4 mt-4">A transformação digital já chegou no controledas operações de importação e exportação noBrasil!</p>
            <p className="mb-4">Reduza a burocracia, agilize os processos e garanta mais segurança para o seu negócio com a plataforma LeadComex.</p>
            <p className="mb-4">Uma solução inovadora para empresas de handling, despachantes aduaneiros, agentesdecargas ecompanhias aéreas que precisarão se adaptar ao novo CCT aéreo.</p>
            <p className="mb-4">Deixe seus dados no formulário ao lado que entraremos em contato através de um dos nossos especialistas irá realizar uma demonstração online de como épossível agilizar os seus processos de Comex.</p>
            <p>Não perca tempo! Agende agora mesmo uma apresentação!</p>
          </article>
        </>,
        slot2: <div></div>
      }
    case 1:
      return {
        slot1: "TESTE3",
        slot2: "TESTE4"
      }
  }
}*/

const Sections = () => {
  return (
    <>
      <section className="bg-section0" style={{ height: 800 }}>
        <div className="container lg m-auto pt-10">
          <div className="flex">
            <div className="w-6/12">
              <h2 className="title text-white">
                UMA <span className="text-green">PLATAFORMA</span> CARREGADA DE INOVAÇÃO PARA O COMÉRCIO EXTERIOR
              </h2>
              <article className="text-white text-center text-2x1">
                <p className="mb-4 mt-4">A transformação digital já chegou no controledas operações de importação e exportação noBrasil!</p>
                <p className="mb-4">Reduza a burocracia, agilize os processos e garanta mais segurança para o seu negócio com a plataforma LeadComex.</p>
                <p className="mb-4">Uma solução inovadora para empresas de handling, despachantes aduaneiros, agentesdecargas ecompanhias aéreas que precisarão se adaptar ao novo CCT aéreo.</p>
                <p className="mb-4">Deixe seus dados no formulário ao lado que entraremos em contato através de um dos nossos especialistas irá realizar uma demonstração online de como épossível agilizar os seus processos de Comex.</p>
                <p>Não perca tempo! Agende agora mesmo uma apresentação!</p>
              </article>
              <img src="/seta.png" className="align--center pt-4" />
            </div>
            <div className="w-6/12">
              <Form />
            </div>
          </div>
        </div>
      </section>

      <section className="bg-section1" style={{ height: '100%' }}>
        <div className="container lg m-auto pt-10">
          <h2 className="title title--large text-white">
            <span className="text-green">diferencias</span> da plataforma leadcomex
          </h2>
          <div className="flex">
            <div className="w-6/12">
              <article className="text-white text-center text-2x1 font-montSerratMedium">
                <p>A <span className="text-green font-montSerratBold">nova plataforma da LeadComex</span> é um produto desenvolvido com a expertise tecnológica da <span className="text-green font-montSerratBold">Muralis Tecnologia</span> e com o conhecimento mercadológico de grandes players do comércio exterior.</p>
                <p>Com uma interface segura e intuitiva, a plataforma poderá ser operada pelas próprias empresas com integração total
                  com o portal SISCOMEX, reduzindo assim tempo, custos operacionais e de terceirização.</p>
              </article>
            </div>
            <div className="w-6/12">
              <div className="text-center">
                <img src="/computador.png" />
              </div>
            </div>
          </div>
          <div className="flex">
            <div className="w-6/12">
              <div className="text-center">
                <img src="/computador.png" />
              </div>
            </div>
            <div className="w-6/12">
              <div className="text-white text-4x1">
                <img src="/check-icon.png" className="mb-6" />
                <img src="/check-icon.png" className="mb-6" />
                <img src="/check-icon.png" className="mb-6" />
                <img src="/check-icon.png" className="mb-6" />
              </div>
            </div>
          </div>
          <div className="p-6 m">
            <img src="/btn-green.png" className="align--center" />
          </div>
        </div>
      </section>

      <section className="bg-green" style={{ height: '100%' }}>
        <div className="container lg m-auto pt-10">
          <h2 className="title title--large text-white">
            FUNCIONALIDADES
          </h2>
          <div className="flex">
            <div className="w-6/12">
              <article className="text-white text-left text-2x1">
                A nova plataforma LeadComex oferece as seguintes funcionalidades:
                <p>Registro de manifesto de voo e de conhecimento master para o perfil do transportador;</p>
                <p>Registro de conhecimento house e associação master ehouse para o perfil do agente de carga;</p>
                <p>Comunicação com o Portal do Siscomex para transmissão das informações registradas;</p>
                <p>Gestão dos certificados digitais utilizados na comunicação com o Portal do Siscomex;</p>
                <p>Gestão das informações transmitidas para o Portal do Siscomex com a disponibilização de consultas, relatórios e gráficos;</p>
                <p>Serviço executado em segundo plano que atualiza em tempo real a situação de todas as mensagens transmitidas parao CCT do Portal Siscomex quanto ao resultado do processamento das informações;</p>
                <p>Opções de integração com sistemas externos via e-mail, Webservice e EDI para recebimento de arquivos nos formatos CSV, Excel e XML no padrão OCS e Cargo IMP da IATA, para registro de informações de manifestos de voo e conhecimentos de carga na plataforma LeadComex e posterior envio ao Portal do Siscomex.</p>
              </article>
            </div>
            <div className="w-6/12">
              <div className="text-center">
                <img src="/img-funcionalidades.png" />
              </div>
              <div className="p-2 mb-6">
                <img src="/btn-blue.png" className="align--center" />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-section3" style={{ height: '100%' }}>
        <div className="container lg m-auto pt-10">
          <h2 className="title title--large text-blue">
            TRANSAÇÕES
          </h2>
          <p className="text-center text-blue pt-5 text-3x1 font-montSerratMedium">A <span className="font-montSerratBold">plataforma LeadComex</span> pode gerar transações de criação, alteração e exclusão de mensagens FFM, FWB, FZB e FHL</p>
          <div className="flex">
            <div className="w-12/12 align--center pt-5 text-2x1">
              <img src="/grafico.png" />
            </div>
          </div>
          <p className="text-center text-blue pt-5 text-2x1 font-montSerratMedium">O resultado do processamento das informações no sistema CCT do Portal Siscomex não é enviado automaticamente para a <span className="text-green font-montSerratBold">plataforma LeadComex</span>. Para contornar este problema e manter a Plataforma
            com as informações atualizadas em tempo real, é executado um serviço em segundo plano que atualiza as transações com os resultados do processamento. Este serviço está disponível também para
            ser utilizado pelos sistemas externos, através das integrações da <span className="text-green font-montSerratBold">plataforma LeadComex</span>.
          </p>
          <div className="p-6">
            <img src="/btn-blue.png" className="align--center" />
          </div>
        </div>
      </section>

      <section className="bg-white" style={{ height: '100%' }}>
        <div className="flex">
          <div className="w-6/12">
            <img src="/logistica.png" />
          </div>
          <div className="w-6/12 p-6">
            <div className="w-4/12 text-center">
              <p className="title text-blue pt-5 text-2x1">QUER SABER MAIS SOBRE LEAD COMEX?</p>
              <p className="text-green pt-2 w-4/4">SIGA A GENTE NAS REDES SOCIAIS:</p>
              <img src="/icone-facebook-footer.png" />
              <img src="/icone-instagram-footer.png" />
              <img src="/icone-linkedin-footer.png" />
              <p className="text-green">OU ENTRE EM CONTATO PELO WHATSAPP:</p>
              <img src="" />
            </div>
          </div>
        </div>
        <div className="flex">
          <div className="w-8/12 bg-blue text-white">
            <img src="/Logo-LeadComex-branco.png" className="align--center p-7" />
            <p className="text-center">Rua Dr.Ricardo Vilela, 1313 - 3º Andar</p>
            <p className="text-center">Mogi das Cruzes - SP | CEP: 08780-060</p>
            <p className="text-center"><span className="text-green">CNPJ:</span> xx.xxx.xxx/0001-xx</p>
          </div>
          <div className="w-7/12 bg-darkblue text-white">
            <p className="text-center">SOFTWARE DESENVOLVIDO POR:</p>
            <img src="/Logo-Muralis-branco.png" className="align--center p-7" />
            <p className="text-center">WWW.MURALIS.COM.BR</p>
            <p className="text-center">Acompanhe nas redes sociais: </p>
          </div>
        </div>
        <div className="bg-green text-white text-center">@2022 Lead Comex. Todos os direitos reservados.</div>
      </section>
    </>
  )
  // return Array.from(Array(2).keys()).map(i => {
  //   return (
  //     <>
  //     <div key={i} className={`h-screen bg-section${i}`}>
  //       <div className="container lg m-auto pt-10">
  //         <Conteudo text={getProp(i)}/>
  //       </div>
  //     </div>
  //     </>
  //   );
  // })
}

const Home = () => (
  <>
    <Logo />
    <Menu />
    <Sections />
  </>
)

export default Home

