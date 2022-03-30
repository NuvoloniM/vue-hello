/*Descrizione:
Stampare a schermo un messaggio all’interno di un h1, utilizzando i data.
Bonus:
Aggiungere alla pagina un’immagine, presa anch’essa da un data.*/

var root = new Vue (
    {
        el: '#root',
        data: {
            message: 'Vuoi sapere come è stato il mio primo incontro con JavaScript? Premi il bottone',
            image: './asset/img/GettyImages-1388085444 Media.png',
            classi: ['d-none']
        },
        methods: {
            show: function() {
                return this.classi = 'd-block';
            }
        }
    }
)