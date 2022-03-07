<template>
    <div>
        <p class="title" style="display: inline-block">Pitchounous & CO</p>
        
        <div class="columns" align="left">
            <div class="column is-two-thirds">
                <h1 class="subtitle has-text-weight-bold">Historique</h1>
                <p>Fondée en 2020 par trois étudiants miagistes nantais</p>
                
                <h1 class="subtitle has-text-weight-bold">Application en service</h1    >
                <p>
                    M.I.A.G.E ou Martini Izarra Amaretto Gin Eau de vie<br />
                    L'application qui vous permet de briller en soirée <br />
                    Grâce à elle vous pouvez réaliser un cocktail en toute situation en fonction des boissons que vous possedez
                </p>

                <h1 class="subtitle has-text-weight-bold">Nous contacter</h1>
                <ul>
                    <li> pitchounous&co@gmail.com</li>
                    <span class="icon">
                        <i class="fas fa-home"></i>
                    </span>
                    <li> 06 66 77 88 99 </li>
                    <li> 25 rue de la Grange-au-Loup </li>
                    <li> 44000 Nantes</li>
                </ul>

                <h1 class="subtitle has-text-weight-bold">Nos réseaux sociaux</h1>
                <div>
                    <span class="icon is-large">
                        <ion-icon size = "large" name="logo-linkedin"></ion-icon>
                    </span>
                </div>
            </div>
            <div class="column">
                <img
                    :src="image1" 
                    alt="Logo de l'entreprise"   
                >
            </div>
        </div>
        
    </div>
</template>

<script>
export default {
    name: "About",
    data(){
        return {
            image1: "/assets/bird.png",
        }
    }
}
</script>