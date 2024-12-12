function mainComponent() {
  return (
    <>
      <main className="d-flex justify-content-center my-5">
        <div className="card mycard">
          <img src="../../public/bulbasaur.png" className="card-img-top" alt="" />
          <div className="card-body">
            <h5 className="card-title">Bulbasaur</h5>
            <p className="card-text">Bulbasaur è un Pokémon di doppio tipo Erba/Veleno.
              Si evolve in Ivysaur e quindi in Venusaur.
              Insieme a Charmander e Squirtle, Bulbasaur è uno dei tre Pokémon iniziali di Kanto.</p>
            <a href="#" className="btn btn-warning">Leggi di più</a>
          </div>
        </div>
      </main>
    </>
  );
}

export default mainComponent;