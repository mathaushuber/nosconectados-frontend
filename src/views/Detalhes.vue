<template>
    <main>
        <div class="container is-fluid">
            <div class="columns">
                <div class="column mt-4 is-two-fifths">
                    <p class="title is-2 is-uppercase center">{{ sensorData.property }}</p>
                    <p class="subtitle is-5 is-uppercase center">{{ sensorData.lowDescription }}</p>
                    <p class="is-size-5 is-uppercase has-text-weight-light center"> {{ sensorData.city }}, {{ sensorData.state }}</p>
                    <div class="columns mt-4 center">
                        <div class="column">
                            <p v-if="sensorData.isActive == 0" class="is-size-6 is-uppercase has-text-weight-bold">
                                <b-icon icon="access-point-remove" 
                                type="is-danger" class="mr-1">
                                </b-icon>
                                Inativo
                            </p>
                            <p v-else-if="sensorData.isActive == 1" class="is-size-6 is-uppercase has-text-weight-bold">
                                <b-icon  icon="access-point-check"
                                    type="is-success" class="mr-1">
                                </b-icon>
                                Ativo
                            </p>
                            <p v-else class="is-size-6 is-uppercase has-text-weight-bold">
                                <b-icon icon="access-point-off" 
                                    type="is-warning"
                                    class="mr-1">
                                </b-icon>
                                Pendente
                            </p>
                        </div>
                        <div class="column" id="isPublic">
                            <p v-if="sensorData.isPublic === 0" class="is-size-6 is-uppercase has-text-weight-bold">
                                <b-icon icon="attachment-lock" 
                                type="is-danger" class="mr-1">
                                </b-icon>
                                Privado
                            </p>
                            <p v-else class="is-size-6 is-uppercase has-text-weight-bold">
                                <b-icon icon="attachment" 
                                type="is-success" class="mr-1">
                                </b-icon>
                                Público
                            </p>
                        </div>
                        <div class="column" id="area">
                            <p class="is-size-6 is-uppercase has-text-weight-bold">
                                <b-icon icon="vector-line" 
                                type="is-info" class="mr-1">
                                </b-icon>
                                 Área: {{ sensorData.area }}ha
                            </p>
                        </div>
                        <div class="column" id="producao">
                            <p class="is-size-6 is-uppercase has-text-weight-bold">
                                <b-icon icon="sprout-outline" 
                                type="is-info" class="mr-1">
                                </b-icon> 
                                {{ sensorData.typeProduction }}
                            </p>
                        </div>
                    </div>
                    <div class="columns center">
                        <div class="column" id="latitude">
                            <p class="is-size-6 is-uppercase has-text-weight-bold">
                                <b-icon icon="map-marker-radius" 
                                type="is-info" class="mr-1">
                                </b-icon>
                                Latitude: {{ sensorData.latitude }}
                            </p>
                        </div>
                        <div class="ml-4 column" id="longitude">
                            <p class="is-size-6 is-uppercase has-text-weight-bold">
                                <b-icon icon="map-marker-radius" 
                                type="is-info" class="mr-1">
                                </b-icon>
                                Longitude: {{ sensorData.longitude }}
                            </p>
                        </div>
                    </div>
                    <p class="mb-3 is-size-7 is-uppercase has-text-weight-light center">Lido em: {{ sensorData.readAt }}</p>
                    <div class="columns">
                        <div class="column">
                            <b-field label="Temperatura do solo">
                                <b-input :value="sensorData.temperatureSoil" disabled>
                                </b-input>
                            </b-field>
                        </div>
                        <div class="column">
                            <b-field label="Temperatura do ar">
                                <b-input :value="sensorData.temperatureAir" disabled>
                                </b-input>
                            </b-field>
                        </div>
                    </div>
                    <div class="columns">
                        <div class="column">
                            <b-field label="Luminosidade">
                                <b-input :value="sensorData.luminosity" disabled>
                                </b-input>
                            </b-field>
                        </div>
                        <div class="column">
                            <b-field label="Pluviometro">
                                <b-input :value="sensorData.pluviometer" disabled>
                                </b-input>
                            </b-field>
                        </div>
                    </div>
                    <div class="columns">
                        <div class="column">
                            <b-field label="Ultravioleta">
                                <b-input :value="sensorData.ultraviolet" disabled>
                                </b-input>
                            </b-field>
                        </div>
                        <div class="column">
                            <b-field label="Temperatura do case">
                                <b-input :value="sensorData.temperatureCase" disabled>
                                </b-input>
                            </b-field>
                        </div>
                    </div>
                    <div class="columns">
                        <div class="column">
                            <b-field label="Intensidade da chuva">
                                <b-input :value="sensorData.rainIntensity" disabled>
                                </b-input>
                            </b-field>
                        </div>
                        <div class="column">
                            <b-field label="Direção do vento">
                                <b-input :value="sensorData.windDirection" disabled>
                                </b-input>
                            </b-field>
                        </div>
                    </div>
                    <div class="columns">
                        <div class="column">
                            <b-field label="Velocidade do vento">
                                <b-input :value="sensorData.windSpeed" disabled>
                                </b-input>
                            </b-field>
                        </div>
                        <div class="column">
                            <b-field label="Sensor de gás">
                                <b-input :value="sensorData.gas" disabled>
                                </b-input>
                            </b-field>
                        </div>
                    </div>
                    <div class="columns">
                        <div class="column">
                            <b-field label="Humidade relativa do ar">
                                <b-input :value="sensorData.humidityAirRelative" disabled>
                                </b-input>
                            </b-field>
                        </div>
                        <div class="column">
                            <b-field label="Altitude">
                                <b-input :value="sensorData.altitude" disabled>
                                </b-input>
                            </b-field>
                        </div>
                        <div class="column">
                            <b-field label="Pressão">
                                <b-input :value="sensorData.pressure" disabled>
                                </b-input>
                            </b-field>
                        </div>
                    </div>
                    <b-message>{{ sensorData.description }}</b-message>
                    <div class="columns">
                        <div class="column">
                            <p class="mb-3 is-size-7 is-uppercase has-text-weight-light center">Atualizado em: {{ sensorData.update_at }}</p>
                        </div>
                        <div class="column">
                            <p class="mb-3 is-size-7 is-uppercase has-text-weight-light center">Criado em: {{ sensorData.created_at }}</p>
                        </div>
                    </div>
                </div>
                <div class="column">

                </div>
            </div>
        </div>
    </main>
</template>

<script>
import {getDetalheSensor} from "../services/api";
export default {
    props: ["sensorId"],
    data(){
        return{
            sensorData:[],
        }
    },
    mounted(){
        this.loadSensor();
    },
    methods:{
        loadSensor() {
            return getDetalheSensor(this.sensorId)
                .then((res) => {
                this.sensorData = res.data;
            })
                .catch(() => {
                this.sensorData = [];
            });
        },
    }
}
</script>

<style lang="scss" scoped>

</style>