import React from 'react';
import { clothsConstellations } from '../apis/cloths-constellations';


class Characters extends React.Component {
  render(){
    return(
      <div className="characters">
          <section className="saints">
            <h2>Saints</h2>
            <table className="cloths">
              <thead>
                <tr>
                  <th>Number</th>
                  <th>cloths</th>
                </tr>
              </thead>
              <tbody>
                {clothsConstellations.map((cloth, index) => {
                  return(
                    <tr key={cloth.id}>
                      <td>{index + 1}</td>
                      <td>{cloth.Name}</td>
                    </tr>
                  )
                })}
              </tbody>
            </table>
        </section>
      </div>
    );
  }
}

export default Characters;