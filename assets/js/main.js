
document.getElementById("btn1").addEventListener("click", (e)=>{

    var modelConfig = document.querySelector('#entity-Model-1');

        modelConfig.setAttribute("gltf-model", 'gltf:url(assets/img/Model-3D/Chair.glb)');

        modelConfig.setAttribute('scale', {
                x: 1.30, 
                y: 1.30, 
                z: 1.30
        });

        modelConfig.setAttribute('rotation', {
                x: 4500, 
                y: 2000,
                z: 2000
        });
})

/* ------------------------------------------------------------------------------------------------ */

document.getElementById("btn2").addEventListener("click", (e)=>{

    var modelConfig = document.querySelector('#entity-Model-1');

        modelConfig.setAttribute("gltf-model", 'gltf:url(assets/img/Model-3D/Dragon.glb)');

        modelConfig.setAttribute('scale', {
            x: 0.10, 
            y: 0.10, 
            z: 0.10
        });

        modelConfig.setAttribute('rotation', {
            x: 2500, 
            y: 20,
            z: 2500
        });
})

/* ------------------------------------------------------------------------------------------------ */

document.getElementById("btn3").addEventListener("click", (e)=>{

    var modelConfig = document.querySelector('#entity-Model-1');

        modelConfig.setAttribute("gltf-model", 'gltf:url(assets/img/Model-3D/Rocket.glb)');

        modelConfig.setAttribute('scale', {
            x: 0.20, 
            y: 0.20, 
            z: 0.20
        });

        modelConfig.setAttribute('rotation', {
            x: 3500, 
            y: 20,
            z: 2500
        });
})

/* ------------------------------------------------------------------------------------------------ */

document.getElementById("btn4").addEventListener("click", (e)=>{

    var modelConfig = document.querySelector('#entity-Model-1');

        modelConfig.setAttribute("obj-model", 'obj:url(assets/img/Model-3D/Bone.obj); mtl:url(assets/img/Model-3D/Bone.mtl)');
        modelConfig.setAttribute('scale', {
            x: 0.30, 
            y: 0.30, 
            z: 0.30
        });

        modelConfig.setAttribute('rotation', {
            x: 3500, 
            y: 20,
            z: 2500
        });
})

/* ------------------------------------------------------------------------------------------------ */

document.getElementById("btn5").addEventListener("click", (e)=>{

    var modelConfig = document.querySelector('#entity-Model-1');

        modelConfig.setAttribute("gltf-model", 'gltf:url(assets/img/Model-3D/Unicorn.glb)');
        modelConfig.setAttribute('scale', {
            x: 0.30, 
            y: 0.30, 
            z: 0.30
        });

        modelConfig.setAttribute('rotation', {
            x: 2500, 
            y: 20,
            z: 2500
        });
})

/* ------------------------------------------------------------------------------------------------ */

document.getElementById("btn6").addEventListener("click", (e)=>{

    var modelConfig = document.querySelector('#entity-Model-1');

        modelConfig.setAttribute("obj-model", 'obj:url(assets/img/Model-3D/Virus.obj); mtl:url(assets/img/Model-3D/Virus.mtl)');
        modelConfig.setAttribute('scale', {
            x: 0.80, 
            y: 0.80, 
            z: 0.80
        });

        modelConfig.setAttribute('rotation', {
            x: 4500, 
            y: 20,
            z: 2500
        });
})

/* ------------------------------------------------------------------------------------------------ */

let btnReload = document.getElementById('btn-Reload');

    btnReload.addEventListener('click', _ => {
    location.reload();
        
})

/* ------------------------------------------------------------------------------------------------ */

function downloadImg(){
    axios({
        url:'https://raw.githubusercontent.com/AR-js-org/AR.js/master/data/images/hiro.png',
        method:'GET',
        responseType: 'blob'
    })

    .then((response) => {

        const url = window.URL

        .createObjectURL(new Blob([response.data]));

        const link = document.createElement('a');
        link.href = url;
        link.setAttribute('download', 'hiro.png');
        document.body.appendChild(link);
        link.click();
    })
}

/* ------------------------------------------------------------------------------------------------ */