function mainComponent() {
  return (
    <>
      <main className="d-flex justify-content-center my-4">
        <div className="card mycard">
          <img src="../../public/bulbasaur.png" className="card-img-top" alt="" />
          <div className="card-body">
            <h5 className="card-title">Bulbasaur</h5>
            <p className="card-text">Bulbasaur è un Pokémon di doppio tipo Erba/Veleno introdotto in prima generazione.
              Si evolve in Ivysaur a partire dal livello 16 e quindi in Venusaur a partire dal livello 32.
              Insieme a Charmander e Squirtle, Bulbasaur è uno dei tre Pokémon iniziali di Kanto.</p>
            <a href="#" className="btn btn-warning">Leggi di più</a>
          </div>
        </div>
      </main>
    </>
  );
}

export default mainComponent;