class Tabela extends React.Component {
   constructor(props) {
      super(props) 
      this.state = { 
         componentes: [
            { id: 1, disciplina: 'Sistemas Operacionais', carga: 66.7, periodo: 'Noturno' },
            { id: 2, disciplina: 'Inglês', carga: 33.3, periodo: 'Noturno' },
            { id: 3, disciplina: 'Laboratório de Estruturas de Dados e Programação', carga: 33.3, periodo: 'Noturno' },
            { id: 4, disciplina: 'Introdução a Banco de Dados', carga: 66.7, periodo: 'Noturno' }
         ]
      }
   }

    renderTableHeader() {
      let header = Object.keys(this.state.componentes[0]).splice(1,3);      
      console.log(header);
      return header.map((key, index) => {
         return <th key={index}>{key.toUpperCase()}</th>
      })
   }

   renderTableData() {
      return this.state.componentes.map((componente, index) => {
         const { id, disciplina, carga, periodo } = componente
         return (
            <tr key={id}>               
               <td>{disciplina}</td>
               <td>{carga}</td>
               <td>{periodo}</td>
            </tr>
         )
      })
   }


   render() { 
      return (
         <div>
           <h1 id="textozika"> Tecnologia em Análise e Desenvolvimento de Sistemas </h1>
           <span> <em> Objetivo Geral </em> </span>
           <p> O curso de Análise e Desenvolvimento de Sistemas do câmpus São Paulo Pirituba tem como objetivo capacitar o egresso a atuar na área de Tecnologia de Informação (TI) em atividades como análise, projeto, desenvolvimento, gerenciamento e implantação de sistemas de informação computacionais. Essa capacitação é pautada pela valorização da prática e competências técnicas, tanto em análise quanto em desenvolvimento, e pela atualização diante da realidade tecnológica, de modo que o profissional seja um mediador competente entre o desenvolvimento tecnológico e a sociedade em que se insere. </p>
            <h2 id='title'>Componentes curriculares</h2>
            <table id='componentes'>
               <tbody>
                  <tr>{this.renderTableHeader()}</tr>
                  {this.renderTableData()}
               </tbody>
            </table>
         </div>
      )
   }
}

ReactDOM.render(<Tabela />, document.getElementById('root'));