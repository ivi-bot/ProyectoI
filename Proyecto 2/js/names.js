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
                            <div id="general"></div>
                        </div>
                    </div>
                </div>
            </div>`;
                //gráficos
                
                plantilla2=`<table id="animations-example-3" class="charts-css bar data-spacing-4 show-labels show-data-on-hover show-primary-axis" style="height: 272px;">
                    <caption>Years Compared</caption> 
                    <thead>
                    <tr>
                        <th>Year</th> 
                        <th>Progress</th>
                    </tr></thead> 
                    <tbody>
                    <tr>
                        <th scope="row"> 2016 </th> 
                        <td style="--size:0.2;">
                            <span class="data">20</span> 
                            <span class="tooltip">data: 20<br>more info</span>
                        </td>
                    </tr> 
                    <tr>
                        <th scope="row"> 2017 </th> 
                            <td style="--size:0.4;">
                            <span class="data">40</span> 
                            <span class="tooltip">data: 40<br>more info</span>
                        </td>
                    </tr> 
                    <tr>
                        <th scope="row"> 2018 </th>
                        <td style="--size:0.6;">
                            <span class="data">60</span>
                            <span class="tooltip">data: 60<br>more info</span>
                        </td>
                    </tr> 
                    <tr>
                        <th scope="row"> 2019 </th>
                        <td style="--size:0.8;">
                            <span class="data">80</span> 
                            <span class="tooltip">data: 80<br>more info</span>
                        </td>
                    </tr> 
                    <tr>
                        <th scope="row"> 2020 </th> 
                        <td style="--size:1;">
                            <span class="data">100</span> 
                            <span class="tooltip">data: 100<br>more info</span>
                        </td>
                    </tr>
                    </tbody>
                </table>`;


                plantilla3=`<table class="charts-css area hide-data show-labels show-primary-axis" style="height: 321px;">
                <caption>Years Compared</caption>
                <thead>
                    <tr>
                        <th>Year</th> 
                        <th>Progress</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <th scope="row"> 2016 </th> 
                        <td style="--start:0.2; --size:0.4;">
                            <span class="data"> 40% </span>
                        </td>
                    </tr> 
                    <tr>
                        <th scope="row"> 2017 </th> 
                        <td style="--start:0.4; --size:0.8;">
                            <span class="data"> 80% </span>
                        </td>
                    </tr> 
                    <tr>
                        <th scope="row"> 2018 </th> 
                        <td style="--start:0.8; --size:0.6;">
                            <span class="data"> 60% </span>
                        </td>
                    </tr> 
                    <tr>
                        <th scope="row"> 2019 </th> 
                        <td style="--start:0.6; --size:1;">
                            <span class="data"> 100% </span>
                        </td>
                    </tr> 
                    <tr>
                        <th scope="row"> 2020 </th> 
                        <td style="--start:1; --size:0.3;">
                            <span class="data"> 30% </span>
                        </td>
                    </tr>
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


