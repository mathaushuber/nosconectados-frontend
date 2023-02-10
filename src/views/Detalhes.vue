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
                            <p v-if="sensorData.isPublic == 0" class="is-size-6 is-uppercase has-text-weight-bold">
                                <b-icon icon="lock" 
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
                    <div class="columns">
                        <div class="column">
                            <div class="buttons">
                                <b-tag class="mr-1 mb-1 is-uppercase" type="is-primary">Administradores: </b-tag> 
                                <div v-for="admin in adminData" :key="admin.id">
                                    <p class="mr-1" v-if="admin.isAdminSensor === 2">{{ admin.firstName }} {{ admin.lastName }} </p>
                                </div>
                            </div>
                        </div>
                        <div class="column">
                            <div class="buttons">
                                <b-tag class="mr-1 mb-1 is-uppercase" type="is-info">Patrocinadores: </b-tag> 
                                <div v-for="admin in adminData" :key="admin.id">
                                    <p class="mr-1" v-if="admin.isAdminSensor === 1">{{ admin.firstName }} {{ admin.lastName }} </p>
                                </div>
                            </div>
                        </div>
                        <div class="column">
                            <div class="buttons">
                                <b-tag class="mr-1 mb-1 is-uppercase" type="is-warning">Visualizadores: </b-tag>
                                <div v-for="admin in adminData" :key="admin.id">
                                    <p class="mr-1" v-if="admin.isAdminSensor === 0">{{ admin.firstName }} {{ admin.lastName }} </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <b-message>{{ sensorData.description }}</b-message>
                    <div class="columns">
                        <div class="column">
                            <p class="mb-3 is-size-7 is-uppercase has-text-weight-light center">Atualizado em: {{ sensorData.updated_at }}</p>
                        </div>
                        <div class="column">
                            <p class="mb-3 is-size-7 is-uppercase has-text-weight-light center">Criado em: {{ sensorData.created_at }}</p>
                        </div>
                    </div>
                </div>
                <div class="column">
                    <div class="columns">
                        <div class="column">
                            <apexcharts class="mt-5" width="500" height="350" type="bar" :options="pluviometerOptions" :series="seriesPluviometer"></apexcharts>
                        </div>
                        <div class="column">
                            <apexcharts class="mt-5" width="500" height="350" type="radar" :options="gasOptions" :series="seriesGas"></apexcharts>
                        </div>
                    </div>
                    <div class="columns">
                        <div class="column">
                            <apexcharts width="1050" height="450" type="area" :options="chartOptions" :series="series"></apexcharts>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </main>
</template>

<script>
import {getDetalheSensor, getData, getAdmins} from "../services/api";
import VueApexCharts from 'vue-apexcharts'

export default {
    props: ["sensorId"],
    components: {
        apexcharts: VueApexCharts,
    },
    data(){
        return{
            sensorData:[],
            seriesData: [],
            adminData: [],
            chartOptions: {
                chart: {
                id: 'basic-bar'
                },
                title: {
                text: 'Temperatura °C',
                align: 'left'
                },
                xaxis: {
                categories: ["2023-01-13", "2023-01-14", "2023-01-15", "2023-01-16", "2023-01-16", "2023-01-17", "2023-01-18", "2023-01-19", "2023-01-20"]
                }
            },
            series: [{
                name: 'Temperatura do ar',
                data: [0, 0, 0, 0, 0, 0, 0, 0]
                },{
                name: 'Temperatura do solo',
                data: [0, 0, 0, 0, 0, 0, 0, 0]
                },
                {
                name: 'Temperatura do case',
                data: [0, 0, 0, 0, 0, 0, 0, 0]
            }],
            pluviometerOptions: {
                chart: {
                id: 'basic-pluviometer'
                },
                title: {
                text: 'Tempo',
                align: 'left'
                },
                xaxis: {
                categories: ["2023-01-13", "2023-01-14", "2023-01-15", "2023-01-16", "2023-01-16", "2023-01-17", "2023-01-18", "2023-01-19", "2023-01-20"]
                }
            },
            seriesPluviometer: [{
                name: 'Pluviômetro (mm)',
                data: [0, 0, 0, 0, 0, 0, 0, 0]
                },
                {
                name: 'Humidade relativa do ar %',
                data: [0, 0, 0, 0, 0, 0, 0, 0]
                }],
            gasOptions: {
                chart: {
                id: 'basic-gas'
                },
                title: {
                text: 'Atmosfera',
                align: 'left'
                },
                xaxis: {
                categories: ["2023-01-13", "2023-01-14", "2023-01-15", "2023-01-16", "2023-01-16", "2023-01-17", "2023-01-18", "2023-01-19", "2023-01-20"]
                }
            },
            seriesGas: [{
                name: 'Gás',
                data: [0, 0, 0, 0, 0, 0, 0, 0]
                },
                {
                name: 'Ultravioleta',
                data: [0, 0, 0, 0, 0, 0, 0, 0]
                },
                {
                name: 'Luminosidade',
                data: [0, 0, 0, 0, 0, 0, 0, 0]
                }],
        }
    },
    mounted(){
        this.loadSensor();
        this.loadSeries();
        this.loadAdmins();
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
        loadAdmins(){
            return getAdmins(this.sensorId)
                .then((res) => {
                this.adminData = res.data;
            })
                .catch(() => {
                this.adminData = [];
            });
        },
        loadSeries(){
            return getData(this.sensorId)
                .then((res) => {
                this.seriesData = res.data;
                this.seriesTemperatureAir(this.seriesData);
                this.seriesDataPluviometer(this.seriesData);
                this.seriesDataGas(this.seriesData)
            })
                .catch(() => {
                this.seriesData = [];
            });
        },
        seriesTemperatureAir(data){
            var dataAr = [];
            var dataSolo = [];
            var dataCase = [];
            for(var i = 0; i < 8; i++){
                dataAr[i] = data[i].temperatureAir;
                dataSolo[i] = data[i].temperatureSoil;
                dataCase[i] = data[i].temperatureCase;
            }
            const newDataAir = dataAr
            const newDataSolo = dataSolo
            const newDataCase = dataCase
            this.updateChart(newDataAir, newDataSolo, newDataCase)
        },
        seriesDataPluviometer(data){
            var dataPl = [];
            var dataHRA = [];
            for(var i = 0; i < 8; i++){
                dataPl[i] = data[i].pluviometer;
                dataHRA[i] = data[i].humidityAirRelative;
            }
            const newDataPluviometer = dataPl
            const newHumidityAirRelative = dataHRA
            this.updateChartPluviometer(newDataPluviometer, newHumidityAirRelative)
        },
        seriesDataGas(data){
            var dataGas = [];
            var dataUltra = [];
            var dataLuminosidade = [];
            for(var i = 0; i < 8; i++){
                dataGas[i] = data[i].gas;
                dataUltra[i] = data[i].ultraviolet;
                dataLuminosidade[i] = data[i].luminosity;
            }
            const newDataGas = dataGas;
            const newDataUltra = dataUltra;
            const newDataLuminosidade = dataLuminosidade;
            this.updateChartGas(newDataGas, newDataUltra, newDataLuminosidade)
        },
        updateChartGas(newDataGas, newDataUltra, newDataLuminosidade){
            this.seriesGas = [{
                data: newDataGas
            },
            {
                data: newDataUltra
            },
            {
                data: newDataLuminosidade
            }]
        },
        updateChartPluviometer(newDataPluviometer, newHumidityAirRelative){
            this.seriesPluviometer = [{
                data: newDataPluviometer
            },
            {
                data: newHumidityAirRelative
            }
        ]
        },
        updateChart(newDataAir, newDataSolo, newDataCase){
            this.series = [{
                data: newDataAir
                },
                {
                data: newDataSolo
                },
                {
                data: newDataCase
                },
            ]; 
        }
    }
}
</script>

<style lang="scss" scoped>

</style>