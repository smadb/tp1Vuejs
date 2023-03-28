Vue.createApp({

    data() {
        return{
         valeurNom:'Julien',
         valeurAge:'45 ans',
         valeurAgePlus:'55 ans, 10 ans plus tard',
         nbRandom:0,

         valeurDeNom:'',
         valeurDeAge:'',
        };
    },

    methods: { 
        
        changerUtil(){
            this.valeurNom = `${this.valeurDeNom}`;
            this.valeurAge = `${this.valeurDeAge} ans`;
            this.valeurAgePlus = `${parseInt(this.valeurDeAge) + 10} ans, 10 ans plus tard`;
            this.nbRandom=Math.random();
        }
       
    },
    }).mount('#app');