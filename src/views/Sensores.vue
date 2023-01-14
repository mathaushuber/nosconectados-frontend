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
                <div class="columns">
                    <div class="card column is-one-third mt-3 ml-3" v-for="sensor in sensoresData" :key="sensor.id">
                        <div class="card-content mt-3">
                            <h1 class="is-size-5">{{ sensor.property }} - {{ sensor.lowDescription }}</h1>
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
                            <b-button type="is-primary" class="info-button mt-2">
                                Informações
                            </b-button>
                            <p class="is-size-7 rodape is-uppercase has-text-weight-light">Atualizado em: {{ sensor.readAt }}</p>
                        </div>
                    </div>
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

.imagem {
  position: absolute;
  max-width: 300px;
  top: -50px;
  right: -50px;
  opacity: 0.1;
}

.info-button{
    margin-left: 100px;
}

.rodape{
    margin-top: 28px;
    margin-bottom: -25px;
}

.card{
    background: url(../assets/sensor.svg);
    background-position: center;
    background-repeat: no-repeat;
    background-size: 250px;
}

</style>