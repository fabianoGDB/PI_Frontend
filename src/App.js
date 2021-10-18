import { useState } from 'react';
import Alunos from './Alunos';
import './App.css';

function App() {

  const [aluno, setAluno] = useState(
   [
      {
        id: 1,
        nome: "Jonas",
        presenca: { dia: 10, presenca: true}
      },
      {
        id: 2,
        nome: "Jonas1",
        presenca: { dia: 10, presenca: true}
      },{
        id: 3,
        nome: "Jonas2",
        presenca: { dia: 10, presenca: true}
      },{
        id: 4,
        nome: "Jona",
        presenca: { dia: 10, presenca: true}
      },
    ]
  );
  return (
    <div className="App">
      <header className="App-header">
        <div className="container">
          <table className="table">
              <tbody>
                  <tr>
                      <th className="fuu">Dias</th>
                      <th className="foo">22/10</th>
                      <th className="foo">23/10</th>
                      <th className="foo">25/10</th>
                      <th className="foo">26/10</th>
                      <th className="foo">27/10</th>
                      <th className="foo">28/10</th>
                      <th className="foo">29/10</th>
                      <th className="foo">30/10</th>
                      <th className="foo">01/11</th>
                      <th className="foo">02/11</th>
                  </tr>
                <tr>
                    <th className="fuu">-</th>
                    <th className="foo">Seg</th>
                    <th className="foo">Ter</th>
                    <th className="foo">Qua</th>
                    <th className="foo">Qui</th>
                    <th className="foo">Sexta</th>
                    <th className="foo">Seg</th>
                    <th className="foo">Ter</th>
                    <th className="foo">Qua</th>
                    <th className="foo">Qui</th>
                    <th className="foo">Sexta</th>
                </tr>
                <Alunos alunos={aluno}/>
                
              </tbody></table>
            </div>
            <br/>
            <div className="container-comments">
                <h2>Comentário sobre a aula: </h2>
                <input type="text" className="coments" />
            </div>
      </header>
      </ div>
  );
}

export default App;
