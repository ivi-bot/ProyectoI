let cargarDatos=() => {
    //Nombres a elegir
    fetch('https://api.jikan.moe/v4/anime?q=haikyuu&sfw')
    .then(response => response.json())
    .then(dataAnime => {
    let arreglo=dataAnime.data;
    for(let anime of arreglo){
        id=anime.mal_id;
        nombre=anime.title;
        let plantilla = `<option class="underTheEarth" value="${id}">${nombre}</option>`;
        document.querySelector('div.input-group > select').innerHTML += plantilla;
    }
    }).catch(console.error);


    //cargar valores
    let etiquetaSelect= document.querySelector('div.input-group > select');

    etiquetaSelect.addEventListener('change', (event) => {
        fetch('https://api.jikan.moe/v4/anime?q=haikyuu&sfw')
        .then(response => response.json())
            .then(dataFrases => {
                /* Id del select escogido*/
                let id=event.target.value;
                var filtrado = dataFrases.data.filter(d => d.mal_id == id);
                imagen=filtrado[0].images.jpg.image_url;
                calificacion=filtrado[0].score;
                aniopublicación=filtrado[0].aired.prop.from.year;
                aniofinalización=filtrado[0].aired.prop.to.year;
                popularidad=filtrado[0].popularity;
                tipo=filtrado[0].type;
                console.log(filtrado);

                /*CORREGIR VALORES NULOOOOOOOOOOOOOOOOOOOS */

                document.getElementById('proyecto').innerHTML = "";

               plantilla=`
               <div class="container-fluid pt-4 px-4">
                    <div class="row g-4">
                        <div class="col-sm-6 col-xl-3">
                            <div class="bg-secondary rounded d-flex align-items-center justify-content-between p-4">
                                <i class="fa fa-chart-line fa-3x text-primary"></i>
                                <div class="ms-3">
                                    <p class="mb-2">Publicado</p>
                                    <h6 class="mb-0">${aniopublicación}</h6>
                                </div>
                            </div>
                        </div>
                        <div class="col-sm-6 col-xl-3">
                            <div class="bg-secondary rounded d-flex align-items-center justify-content-between p-4">
                                <i class="fa fa-chart-bar fa-3x text-primary"></i>
                                <div class="ms-3">
                                    <p class="mb-2">Finalizado</p>
                                    <h6 class="mb-0">${aniofinalización}</h6>
                                </div>
                            </div>
                        </div>
                        <div class="col-sm-6 col-xl-3">
                            <div class="bg-secondary rounded d-flex align-items-center justify-content-between p-4">
                                <i class="fa fa-chart-area fa-3x text-primary"></i>
                                <div class="ms-3">
                                    <p class="mb-2">Calificación</p>
                                    <h6 class="mb-0">${calificacion}</h6>
                                </div>
                            </div>
                        </div>
                        <div class="col-sm-6 col-xl-3">
                            <div class="bg-secondary rounded d-flex align-items-center justify-content-between p-4">
                                <i class="fa fa-chart-pie fa-3x text-primary"></i>
                                <div class="ms-3">
                                    <p class="mb-2">Popularidad</p>
                                    <h6 class="mb-0">${popularidad}</h6>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
           
           
           
           
            <div class="container-fluid pt-4 px-4">
                <div class="row g-4">
                    <div class="col-sm-12 col-xl-6">
                        <div id="jupiter" class="bg-secondary text-center rounded p-4">
                            <img class="animate__animated animate__heartBeat" src="${imagen}">
                        </div>
                    </div>
                    <div class="col-sm-12 col-xl-6">
                        <div id="jupiter" class="bg-secondary text-center rounded p-4">
                            <div class="d-flex align-items-center justify-content-between mb-4">
                                <h6 class="mb-0">Salse & Revenue</h6>
                                <a href="">Show All</a>
                            </div>
                            <canvas id="salse-revenue"></canvas>
                        </div>
                    </div>
                </div>
            </div>`;

               document.getElementById('proyecto').innerHTML += plantilla;

            }).catch(console.error);
    
    });

        
}
window.addEventListener('DOMContentLoaded', (event) => {
    cargarDatos();
  });


