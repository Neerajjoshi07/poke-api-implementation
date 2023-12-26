<template>
    <div>
        <h1 class="text-center mb-3">Pokemon Details</h1>
        <h2 class="text-center mb-4">{{ pokemonDetails ? pokemonDetails.name.toUpperCase() : "" }}</h2>
        <div v-if="loading" class="text-center"><b-spinner variant="primary" label="Spinning"></b-spinner></div>
        <div v-else>
            <b-container>
                <b-row>
                    <b-col md="6">
                        <b-card title="General Information">
                            <b-list-group flush>
                                <b-list-group-item><strong>ID:</strong> {{ pokemonDetails.id }}</b-list-group-item>
                                <b-list-group-item><strong>Height:</strong> {{ pokemonDetails.height }}</b-list-group-item>
                                <b-list-group-item><strong>Weight:</strong> {{ pokemonDetails.weight }}</b-list-group-item>
                            </b-list-group>
                        </b-card>
                    </b-col>

                    <b-col md="6">
                        <b-card title="Abilities">
                            <b-list-group flush>
                                <b-list-group-item v-for="ability in pokemonDetails.abilities" :key="ability.ability.name">
                                    {{ ability.ability.name }}
                                </b-list-group-item>
                            </b-list-group>
                        </b-card>
                    </b-col>
                </b-row>

                <b-row class="mt-4">
                    <b-col md="6">
                        <b-card title="Types">
                            <b-list-group flush>
                                <b-list-group-item v-for="type in pokemonDetails.types" :key="type.type.name">
                                    {{ type.type.name }}
                                </b-list-group-item>
                            </b-list-group>
                        </b-card>
                    </b-col>

                    <b-col md="6">
                        <b-card title="Moves">
                            <b-list-group flush>
                                <b-list-group-item v-for="move in pokemonDetails.moves" :key="move.move.name">
                                    {{ move.move.name }}
                                </b-list-group-item>
                            </b-list-group>
                        </b-card>
                    </b-col>
                </b-row>
            </b-container>
        </div>
    </div>
</template>
  
<script>
import axios from 'axios';

export default {
    name:'PokemonDetails',
    
    data() {
        return {
            loading: true,
            pokemonDetails: null,
        };
    },
    created() {
        this.fetchPokemonDetails();
    },
    methods: {
        async fetchPokemonDetails() {
            const pokemonName = this.$route.params.name;
            try {
                const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`);
                this.pokemonDetails = response.data;
                // console.warn(response.data)
                this.loading = false;
            } catch (error) {
                console.error('Error fetching Pokemon details:', error);
            }
        },
    },
};
</script>
  