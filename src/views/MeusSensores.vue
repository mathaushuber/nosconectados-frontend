<template>
    <main>
        <div class="columns">
            <div class="column is-one-third mt-5 ml-3">
                <div class="center">
                    <h1 class="is-size-4 is-uppercase has-text-weight-light">
                        <b>Meus Sensores</b>
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
                    <div class="card col-4 mt-1" v-for="sensor in sensoresData" :key="sensor.id">
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
                            <div class="buttons mt-5">
                                <b-button type="is-primary" tag="router-link" :to="{ path: '/detalhes/' + sensor.id }">
                                    Informações
                                </b-button>
                                <b-button type="is-info">
                                    Editar
                                </b-button>
                                <b-button type="is-danger" @click="confirmCustomDelete(sensor.id)">
                                    Excluir
                                </b-button>
                            </div>
                            <p class="is-size-7 rodape is-uppercase has-text-weight-light">Atualizado em: {{ sensor.readAt }}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <b-loading :is-full-page="true" v-model="isLoading"></b-loading>
    </main>
</template>

<script>
import { getSensorFromUser, removeSensor } from "../services/api";

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
            return getSensorFromUser()
                .then((res) => {
                    this.sensoresData = res.data;
                })
                .catch(() => {
                    this.sensoresData = [];
                });
        },
        deleteSensor(id){
            removeSensor(id).then(() => {
                this.loadSensores();
            });
        },
        confirmCustomDelete(id) {
            this.$buefy.dialog.confirm({
                title: 'Remover sensor',
                message: 'Você tem certeza que deseja <b>deletar</b> este sensor? Essa ação não pode ser desfeita.',
                confirmText: 'Remover',
                cancelText: 'Cancelar',
                type: 'is-danger',
                hasIcon: true,
                onConfirm: () => {
                    this.deleteSensor(id);
                    this.$buefy.toast.open({
                        message: 'Sensor removido! Entre em contato com o servidor para qualquer backup.',
                        type: "is-danger",
                    });
                }
            })
        },
    },

};
</script>

<style lang="scss" scoped>
.card-content{
  display: inline-block;
  position: relative;
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