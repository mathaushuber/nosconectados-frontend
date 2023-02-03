<template>
    <main>
        <div class="columns">
            <div class="column is-one-third mt-5 ml-3">
                <div class="center">
                    <h1 class="is-size-4 is-uppercase has-text-weight-light">
                        <b>Sensores Públicos</b>
                    </h1>
                </div>
                    <h1 class="is-size-6 is-uppercase has-text-weight-light pb-2 mt-2 center">
                        AQUI VOCÊ PODE FILTRAR PELOS SENSORES DESEJADOS.
                    </h1>
                <div class="mt-5">
                    <b-field label="Propriedade">
                        <b-input placeholder="Identificação do sensor" rounded icon="barn"></b-input>
                    </b-field>

                    <b-field label="Estado">
                        <b-select placeholder="Estado" expanded rounded icon="home-group"></b-select>
                    </b-field>

                    <b-field label="Cidade">
                        <b-select placeholder="Cidade" expanded rounded icon="city"></b-select>
                    </b-field>

                    <b-field label="Produção">
                        <b-select placeholder="Tipo de produção" expanded rounded icon="sprout"></b-select>
                    </b-field>

                    <b-field label="Ordenação">
                        <b-select placeholder="Selecione a ordem" expanded rounded icon="sort"></b-select>
                    </b-field>
                    <div class="buttons">
                        <b-button class="is-primary">
                            Buscar
                        </b-button>
                        <b-button>
                            Limpar
                        </b-button>
                    </div>
                </div>
            </div>
            <div class="column mt-5">
                <div class="row">
                    <div class="card col-md-4" v-for="sensor in sensoresData" :key="sensor.id">
                        <div class="card-header mt-2">
                            <p class="center is-uppercase has-text-weight-bold">{{ sensor.property }}</p>
                        </div>
                        <div class="card-content mt-3">
                            <h1 class="is-size-5">{{ sensor.lowDescription }}</h1>
                            <div>
                                <p>{{ sensor.city }}, {{ sensor.state}}</p>
                                <p>Área: {{ sensor.area }}ha</p>
                                <p>Tipo: {{ sensor.typeProduction }}</p>
                                <p>Status: <b-icon v-if="sensor.isActive == 0" icon="access-point-remove" 
                                type="is-danger"></b-icon>
                                <b-icon v-else-if="sensor.isActive == 1"  icon="access-point-check"
                                type="is-success"></b-icon>
                                <b-icon v-else  icon="access-point-off" 
                                type="is-warning"></b-icon></p>
                            </div>
                            <b-button type="is-primary" class="info-button mt-2" tag="router-link" :to="{ path: '/detalhes/' + sensor.id }">
                                Informações
                            </b-button>
                            <p class="is-size-7 is-uppercase has-text-weight-light mb-1 mt-4">Atualizado em: {{ sensor.updated_at }}</p>
                        </div>
                    </div>
                </div>
                <div class="column mt-5">
                    <b-pagination
                        :total="total"
                        v-model="current"
                        :range-before="rangeBefore"
                        :range-after="rangeAfter"
                        :order="order"
                        :size="size"
                        :simple="isSimple"
                        :rounded="isRounded"
                        :per-page="perPage"
                        :icon-prev="prevIcon"
                        :icon-next="nextIcon"
                        aria-next-label="Next page"
                        aria-previous-label="Previous page"
                        aria-page-label="Page"
                        aria-current-label="Current page"
                        :page-input="hasInput"
                        :page-input-position="inputPosition"
                        :debounce-page-input="inputDebounce">
                    </b-pagination>
                </div>
            </div>
        </div>
    </main>
</template>

<script>
import { getSensores } from "../services/api";

export default{
    data () {
        return {
            sensoresData:[],
            total: 200,
            current: 10,
            perPage: 10,
            rangeBefore: 3,
            rangeAfter: 1,
            order: '',
            size: '',
            isSimple: false,
            isRounded: false,
            hasInput: false,
            prevIcon: 'chevron-left',
            nextIcon: 'chevron-right',
            inputPosition: '',
            inputDebounce: ''
        };
    },
    mounted(){
        this.loadSensores();
    },
    methods: {
        loadSensores() {
        return getSensores()
            .then((res) => {
                this.sensoresData = res.data;
            })
            .catch(() => {
                this.sensoresData = [];
            });
        },
    },

};
</script>
<style lang="scss" scoped>
.card-content{
  display: inline-block;
  position: relative;
}

.info-button{
    margin-left: 100px;
}

.card{
    background: url(../assets/sensor.svg);
    background-position: center;
    background-repeat: no-repeat;
    background-size: 250px;
}

.card-header{
    color: white;
    background: url("../assets/capa.png"), url("../assets/ruido.png"),
    linear-gradient(110deg, $primary, #7c26f8); 
    width: 100%;
}
</style>