<template>
    <main>
        <div class="container is-fluid">
        <div class="row">
            <div class="col-md-4 mt-5">
                <div class="center">
                    <h1 class="is-size-4 is-uppercase has-text-weight-light">
                        <b>Meus Sensores</b>
                    </h1>
                </div>
                    <h1 class="is-size-6 is-uppercase has-text-weight-light pb-2 mt-2 center">
                        AQUI VOCÊ PODE FILTRAR PELOS SENSORES DESEJADOS.
                    </h1>
                <div class="mt-5 ml-3">
                    <b-field label="Propriedade">
                        <b-input placeholder="Identificação do sensor" rounded icon="barn" v-model="property"></b-input>
                    </b-field>

                    <b-field label="Estado">
                        <b-select placeholder="Selecione o estado" expanded rounded icon="home-group" @input="loadMunicipios" v-model="state">
                        <option
                            v-for="estado in estados"
                            :key="estado.id"
                            :value="estado.sigla"
                            >{{ estado.nome }}
                        </option>
                        </b-select>
                    </b-field>

                    <b-field label="Cidade">
                        <b-select placeholder="Selecione a cidade" expanded rounded icon="city" v-model="city" :disabled="!state">
                            <option v-if="!state" value=""
                                >Selecione o estado primeiro
                            </option>
                            <option
                                v-else
                                v-for="municipio in municipios"
                                :key="municipio.id"
                                :value="municipio.nome"
                                >{{ municipio.nome }}
                            </option>
                        </b-select>
                    </b-field>

                    <b-field label="Produção">
                        <b-select placeholder="Tipo de produção" expanded rounded icon="sprout" v-model="typeProduction" >
                            <option value="Arroz">Arroz</option>
                            <option value="Milho">Milho em grão</option>
                            <option value="Soja">Soja</option>
                            <option value="Cana-de-açúcar">Cana-de-açúcar</option>
                            <option value="Café">Café</option>
                            <option value="Algodão">Algodão herbáceo</option>
                            <option value="Mandioca">Mandioca</option>
                            <option value="Laranja">Laranja</option>
                            <option value="Trigo">Trigo</option>
                            <option value="Banana">Banana</option>
                            <option value="Outros">Outros</option>
                        </b-select>
                    </b-field>

                    <b-field label="Status">
                        <b-select placeholder="Selecione o status" expanded rounded icon="sort" v-model="isActive">
                            <option value="0">Inativo</option>
                            <option value="1">Ativo</option>
                            <option value="2">Em Andamento</option>
                        </b-select>
                    </b-field>

                    <div class="buttons is-justify-content-right">
                        <b-button @click="clearFilter" type="is-primary">
                            Limpar
                            <b-icon
                                icon="filter-remove-outline"
                                size="is-small"
                                class="ml-1">
                            </b-icon>
                        </b-button>
                    </div>
                </div>
            </div>
            <div class="col-md-8">
                <div class="col-md-12 mt-3">
                    <b-pagination
                        class="mr-3"
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
                <div class="col-md-12 mt-5" v-if="filteredItems !== null">
                    <div class="row">
                        <div class="card col-md-4" v-for="sensor in filteredItems" :key="sensor.id">
                            <div class="card-header mt-2">
                                <p class="center is-uppercase has-text-weight-bold">{{ sensor.property }}</p>
                            </div>
                            <div class="card-content mt-3">
                                <h1 class="is-size-5"> {{ sensor.lowDescription }}</h1>
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
                                        Detalhes
                                    </b-button>
                                    <b-button type="is-info" tag="router-link" :to="{ path: '/edit-sensor/' + sensor.id }">
                                        Editar
                                    </b-button>
                                    <b-button type="is-danger" @click="confirmCustomDelete(sensor.id)">
                                        Excluir
                                    </b-button>
                                </div>
                                <p class="is-size-7 is-uppercase has-text-weight-light">Atualizado em: {{ sensor.updated_at }}</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-md-12 mt-5" v-else>
                    <div class="center imagem">
                        <img src="../assets/meussensores-null.svg" />
                        <h1 class="is-size-5 center is-uppercase has-text-weight-light">Você não possui nenhum sensor!</h1>
                    </div>
                </div>
                <div class="col-md-12 mt-5">
                    <b-pagination
                        class="mr-3"
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
    </div>
    </main>
</template>

<script>
import { getSensorFromUser, removeSensor } from "../services/api";
import { getEstados, getMunicipios } from "../services/ibge";

export default{
    data () {
        return {
            sensoresData:[],
            total: 200,
            current: 1,
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
            inputDebounce: '',
            property: '',
            state: null,
            city: null,
            estados: [],
            municipios: [],
            isActive: null,
            typeProduction: null,
        };
    },
    computed: {
        filteredItems() {
            if(this.sensoresData === null){
                return null;
            }
            let filterSensors = [];
            filterSensors = this.sensoresData.filter((filterSensor) => {
                return (
                filterSensor.property.toLowerCase().indexOf(this.property.toLowerCase()) > -1 
                );
            });

            filterSensors = filterSensors.filter((filterSensor) => {
            if (this.state == null) return filterSensor;
            return filterSensor.state === this.state;
            });

            filterSensors = filterSensors.filter((filterSensor) => {
            if (this.city == null) return filterSensor;
            return filterSensor.city === this.city;
            });

            filterSensors = filterSensors.filter((filterSensor) => {
            if (this.typeProduction == null) return filterSensor;
            return filterSensor.typeProduction === this.typeProduction;
            });

            filterSensors = filterSensors.filter((filterSensor) => {
            if (this.isActive == null) return filterSensor;
            return filterSensor.isActive == this.isActive;
            });

            return filterSensors;
        },
    },
    mounted(){
        getEstados().then((resp) => {
            this.estados = resp.data;
        });
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
        loadMunicipios() {
            if (this.state) {
                return getMunicipios(this.state).then(
                (resp) => (this.municipios = resp.data)
                );
            } else return [];
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
        clearFilter(){
            this.property = '';
            this.state = null;
            this.city = null;
            this.isActive = null;
            this.typeProduction = null;
        }
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

.card-header{
    color: white;
    background: url("../assets/capa.png"), url("../assets/ruido.png"),
    linear-gradient(110deg, $primary, #7c26f8); 
    width: 100%;
}

.imagem{
  width: 500px;
  height: 500px;
  margin-bottom: 70px;
}

</style>