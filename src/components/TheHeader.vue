<template>
    <div v-if="isOneWay">
        <h1 :class="{'title': true, 'title-home': isHome }">
            Vue 3
        </h1>

        <p :class="['text',{ 'text-home': isHome }]">
            One Way data biding
        </p>
        <div v-for="(obj, index) in todos"
            :key="obj.id"
            class="todos-item"
        >
            <img 
            v-if="obj.imgSrc"
            :src="obj.imgSrc" 
            :alt="obj.imgAlt"
        >
            {{ index }} - {{ obj.title }}
        </div>
    </div>

    <div v-if="isTwoWay">
        Two-way data biding
        <br>
        <div>
        <label for="Nome">Nome</label><br>
        <input 
        v-model="name"
        type="text"
        > <br>
        {{ name }}
        </div>
        
        <br><br>

        <div>
            <label for="sports">Sports</label>
            <select v-model="sports">
                <option value="">Escolha</option>
                <option value="futebol">Futebol</option>
                <option value="skate">Skate</option>
                <option value="tenis">Tenis</option>
            </select> <br>
            {{ sports }}
        </div> <br><br>

        <div>
            <label for="Newsletter">Newsletter</label><br>
            <input v-model="newsletter" type="radio" value="sim"> Sim
            <input v-model="newsletter" type="radio" value="nao"> Não
            <br>
            {{  newsletter }}
        </div> <br><br>

        <div>
            <label for="Contrato">Contrato</label><br>
            <input v-model="contract" type="checkbox" value="sim"> Aceita nossos termos...
            <br>
            {{ contract }}
        </div> <br><br>

        <div>
            <label>Cores que você mais gosta</label><br>
            <input 
                v-model="colors" 
                type="checkbox" 
                value="azul"
            > Azul

            <input 
                v-model="colors" 
                type="checkbox" 
                value="amarelo"
            > Amarelo
            <br>
            {{ colors }}
        </div> <br><br>
    </div>
    <div v-if="isEvento">
        <button v-on:click="onClick">
            Enviar
        </button>
        <br>
        <button 
            @mouseover="onMouseOver"
            @mouseout="onMouseOut"
        >
            Mouse over and out
        </button>
    </div>

    <br><br>

    <form 
        action="https://google.com"
        @submit.prevent="onSubmit"
    >
        <input 
            type="text"
            @keyup.enter="onKeyUp"
        >
        <button type="submit" >
            Enviar
        </button>
    </form>

</template>

<script>
export default {
    name: 'App',
    data() {
        return {
            isOneWay: false,
            isHome: true,
            classVar: 'title',
            pClass: 'text',
            todos: [
                {
                    "userId": 1,
                    "id": 1,
                    "title": "delectus aut autem",
                    "completed": false,
                    "imgAlt": "Imagem de teste",
                    "imgSrc": 'https://via.placeholder.com/150',
                },
                {
                    "userId": 1,
                    "id": 2,
                    "title": "quis ut nam facilis et officia qui",
                    "completed": false,
                    "imgAlt": "Imagem de teste",
                    "imgSrc": 'https://via.placeholder.com/150',
                },
                {
                    "userId": 1,
                    "id": 3,
                    "title": "fugiat veniam minus",
                    "completed": false
                },
                {
                    "userId": 1,
                    "id": 4,
                    "title": "et porro tempora",
                    "completed": true
                },
                {
                    "userId": 1,
                    "id": 5,
                    "title": "laboriosam mollitia et enim quasi adipisci quia provident illum",
                    "completed": false
                }
            ],
            isTwoWay: false,
            name: 'Élida',
            sports: 'futebol',
            newsletter: 'nao',
            contract: 'nao',
            colors: [],
            isEvento: true,
        }
    },

    methods: {
        onClick($evt) {
            console.log('click', $evt);
        },
        onMouseOver($evt) {
            console.log('mouse over',$evt);
        },
        onMouseOut($evt) {
            console.log('mouse out',$evt);
        },
        onSubmit($evt) {
            console.log('submit',$evt);
        },
        onKeyUp($evt) {
            console.log('onkeyup',$evt)
        }
    }
}
</script>

<style>
.title {
    font-size: 20px;
    color: blue;
}
.title-home {
    font-size: 40px;
    color: green;
}
.text {
    color: yellow;
}
.text-home {
    color: green;
}
.todos-item {
    background: #000;
    margin: 0 0 5px 0;
    padding: 3px 6px;
    color: #fff;
}
.header {
    background-color: gray;
    color: #fff;
}
</style>