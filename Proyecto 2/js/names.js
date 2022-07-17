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
                video=filtrado[0].trailer.embed_url;
                console.log(filtrado);


                document.getElementById('proyecto').innerHTML = "";

                if(aniofinalización === null){   
                    aniofinalización="--";
                }  

                if(video === null){   
                    video="https://www.youtube.com/embed/JOGp2c7-cKc";
                }  

                //valores de los gráficos
                favoritos=filtrado[0].favorites;
                ranking=filtrado[0].rank;
                publico=filtrado[0].scored_by;
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
                                <h6 class="mb-0">Datos</h6>
                            </div>
                            <div id="salse-revenue"></div>
                        </div>
                    </div>
                    <div class="col-sm-12 col-xl-6">
                        <div id="jupiter" class="bg-secondary text-center rounded p-4">
                            <div><iframe width="540" height="315" src="${video}" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></div>
                        </div>
                    </div>
                    <div class="col-sm-12 col-xl-6">
                        <div id="jupiter" class="bg-secondary text-center rounded p-4">
                            <h6 class="mb-0">Calificación</h6>
                        </div>
                        <div id="general"></div>
                    </div>
                </div>
            </div>`;
                //gráficos
                valor_grafico1=favoritos/100000;
                valor_grafico2=popularidad/10000;
                valor_grafico3=ranking/10000;
                valor_grafico4=publico/10000000;

                plantilla2=`<table id="animations-example-3" class="charts-css bar data-spacing-4 show-labels show-data-on-hover show-primary-axis" style="height: 272px;">
                    <tbody>
                    <tr>
                        <th scope="row"> Favoritos </th> 
                        <td style="--size:${valor_grafico1};">
                            <span class="tooltip">data: ${favoritos}<br>more info</span>
                        </td>
                    </tr> 
                    <tr>
                        <th scope="row"> Fama </th> 
                            <td style="--size:${valor_grafico2};">
                            <span class="tooltip">data: ${popularidad}<br>more info</span>
                        </td>
                    </tr> 
                    <tr>
                        <th scope="row"> Ranking </th>
                        <td style="--size:${valor_grafico3};">
                            <span class="tooltip">data: ${ranking}<br>more info</span>
                        </td>
                    </tr> 
                    <tr>
                        <th scope="row"> Público </th>
                        <td style="--size:${valor_grafico4};">
                            <span class="tooltip">data: ${publico}<br>more info</span>
                        </td>
                    </tr> 
                    </tbody>
                </table>`;


                plantilla3=`<table id="column-example-8" class="charts-css show-data-on-hover column show-labels data-spacing-4">
                <tbody>`;
                start=0.066;
                for(let valores of dataFrases.data){
                titulo="";
                if(filtrado[0].mal_id ==valores.mal_id){
                    titulo=" ⭐\n"+valores.score;}
                size=valores.score/10;
                plantilla3+=`
                <tr>
                    <th scope="row"> ${titulo} </th>
                    <td style="--size:${size};">
                    </td>
                  </tr>`;     
                }
                plantilla3+=`
                </tbody>
                </table>`;
               document.getElementById('proyecto').innerHTML += plantilla;

               document.getElementById('salse-revenue').innerHTML += plantilla2;

               document.getElementById('general').innerHTML += plantilla3;

            
            
            }).catch(console.error);
    
    });

        
}
window.addEventListener('DOMContentLoaded', (event) => {
    cargarDatos();
  });


