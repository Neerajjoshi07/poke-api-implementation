import Vue from 'vue';
import VueRouter from 'vue-router';
import PokemonList from '../views/PokemonList.vue';
import PokemonDetails from '../views/PokemonDetails.vue';

Vue.use(VueRouter);

const routes = [
  { path: '/', component: PokemonList },
  { path: '/pokemon/:name', name: 'pokemon-details', component: PokemonDetails },
];

const router = new VueRouter({
  routes,
});

export default router;
