<template>
    <main>
        <div class="columns">
            <div class="column">
                <div class="container">
                    <div class="card mt-5">
                        <div class="card-content">
                            <h2 class="is-size-4 titulo is-uppercase has-text-weight-light">{{ user.firstName }}, atribua os dados do sensor <strong>{{ sensorData.property }}</strong> com id <strong>{{ sensorData.id }}</strong> a um sensor instalado</h2>
                            <div class="columns">
                                <div class="column">
                                    <b-field class="mt-5">
                                        <b-select placeholder="Selecione o sensor" expanded>
                                            
                                        </b-select>
                                    </b-field>                                    
                                </div>
                                <div class="column">
                                    <b-message type="is-info" has-icon>
                                        Caso você tenha criado as informações para um sensor existente, selecione aqui a sua identificação para atribui-lo. Com isso será possível visualizar os dados do sensor na página de detalhes.
                                    </b-message>
                                </div>
                            </div>

                            <b-field>
                                <b-input
                                grouped
                                expanded
                                v-model="token.token"
                                :value="token.token">
                                </b-input>
                                <b-button
                                type="is-info"
                                @click="loadToken">
                                    Gerar Token!
                                </b-button>
                            </b-field>

                            <div class="columns">
                                <div class="column">
                                    <b-message type="is-warning" class="mt-4" has-icon>
                                        Se você criou as informações do sensor pela plataforma mas ainda não tem um sensor ativo instalado, certifique-se de gerar um token antes de atribuir estes dados ao sensor localizado em campo. Para que o sensor envie dados para a plataforma é necessário a utilização de um token no cabeçalho das requisições. No botão acima é possível gerar um token com as informações deste sensor, certifique-se que o mesmo não será modificado após a sua criação.
                                        Após a geração do token, coloque-o no firmware do sensor, no cabeçalho do protocolo HTTP, no campo Authorization, enviando os dados para a rota <strong>https://nosconectados.herokuapp.com/public/api/v1/sensores/atualiza/{{ sensorData.id}}</strong> através do método <strong>PUT</strong>.
                                    </b-message>
                                </div>
                            </div>
                            <div class="columns">
                                <div class="column">
                                    <div class="buttons is-justify-content-right mt-4">
                                        <b-button
                                        type="is-primary">
                                            <span class="icon is-small">
                                                <i class="fas fa-check"></i>
                                            </span>
                                            <span>Atribuir</span>
                                        </b-button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </main>
</template>
<script>
import { getToken, getDetalheSensor } from "../services/api";
import { mapState } from "vuex";

export default{
    props: ["sensorId"],
    data () {
        return {
            token:[],
            sensorData: [],
        };
    },
    mounted(){
        this.loadSensor();
    },
    methods:{
        loadToken(){
            return getToken()
                .then((res) => {
                    this.token = res.data;
                })
                .catch(() => {
                    this.token = [];
                });
        },
        loadSensor() {
            return getDetalheSensor(this.sensorId)
                .then((res) => {
                this.sensorData = res.data;
            })
                .catch(() => {
                this.sensorData = [];
            });
        },
    },
    computed: {
    ...mapState(["user"]),
    },
};

</script>

<style lang="scss" scoped>
main {
  background: url("../assets/capa.png"), url("../assets/ruido.png"),
    linear-gradient(110deg, $primary, #7c26f8);
  background-attachment: fixed;
  height: 100vh;
}

.card-content{
    margin-top: 35px;
    margin-bottom: 50px;
}

.titulo{
    margin-bottom: 60px;
}
</style>