<template>
    <div>
        <h1 class="text-center mb-4">Pokemon List</h1>
        <hr>
        <div v-if="loading" class="text-center"><b-spinner variant="primary" label="Spinning"></b-spinner></div>
        <div v-else style="overflow-x: hidden;">
            <b-row >
                <b-col v-for="pokemon in pokemonList" :key="pokemon.name" md="3" sm="12">
                    <b-card class="pokemon-card">
                        <b-card-title>
                            <strong>{{ pokemon.name.toUpperCase() }}</strong>
                        </b-card-title>
                        <b-card-text>
                            <b-link @click="showPokemonDetails(pokemon.name)" 
                            class="pokemon-link">View details</b-link>
                        </b-card-text>
                    </b-card>
                </b-col>
            </b-row>
        </div>
    </div>
</template>
  
<script>
import axios from 'axios';
export default {
    name: 'PokemonList',

    data() {
        return {
            loading: true,
            pokemonList: [],
        };
    },
    mounted() {
        this.fetchPokemonList();
    },
    methods: {
        async fetchPokemonList() {
            try {
                const response = await axios.get('https://pokeapi.co/api/v2/pokemon?limit=100');
                this.pokemonList = response.data.results;
                this.loading = false;
            } catch (error) {
                console.error('Error fetching Pokemon list:', error);
            }
        },
        showPokemonDetails(pokemonName) {
            this.$router.push({ name: 'pokemon-details', params: { name: pokemonName } });
        },
    },
};
</script>
  
<style scoped>
.pokemon-card {
    margin-bottom: 10px;
}

.pokemon-link {
    color: #007bff;
    text-decoration: none;
    font-weight: bold;
}
</style>
  