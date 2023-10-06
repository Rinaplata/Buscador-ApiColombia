import React, { useState, useEffect } from "react";

const BuscadorComponent = () => {
  //asignar los hooks
  const [nativeCommuties, setNativeCommuties] = useState([]);
  const [buscar, setBuscar] = useState("");

  //Traer los datos de la api
  const URL = "https://api-colombia.com/api/v1/NativeCommunity";

  const showDato = async () => {
    const response = await fetch(URL);
    const data = await response.json();
    console.log(data);
    setNativeCommuties(data);
  };

  //Buscador

  const buscador = (e) => {
    setBuscar(e.target.value);
  };

//filtar 
   const resultado = !buscar ? nativeCommuties : nativeCommuties.filter((data) =>
   data.name.toLowerCase().includes(buscar.toLocaleLowerCase()));

  useEffect(() => {
    showDato();
  }, [])

  return (
    <div className="container-table">
      <input
        value={buscar}
        onChange={buscador}
        type="text"
        placeholder="Serch"
        className="form-control"
      />
      <table className="table table-striped table-hover">
        <thead>
          <tr className="table-active ">
            <th scope="col">Id</th>
            <th scope="col">Nombre</th>
            <th scope="col">Lengua</th>
            <th scope="col">Descripcion</th>
          </tr>
        </thead>
        <tbody>
          {resultado.map((nativeCommuties) => (
            <tr key={nativeCommuties.id}>
              <td>{nativeCommuties.id}</td>
              <td>{nativeCommuties.name}</td>
              <td>{nativeCommuties.languages}</td>
              <td>{nativeCommuties.description}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default BuscadorComponent;
