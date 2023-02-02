<template>
    <main>
        <div class="columns">
            <div class="column is-one-quarter">
                <div class="menu-imagem mt-4">
                    <img src="../assets/nosconectados.svg" width="200" height="130">
                </div>
                <b-menu>
                    <b-menu-list label="Menu">
                    <b-menu-item icon="information-outline" label="Info" @click="info"></b-menu-item>
                    <b-menu-item icon="cog" :active="isActive" expanded>
                        <template #label="props">
                        Administrador
                        <b-icon class="is-pulled-right" :icon="props.expanded ? 'menu-up' : 'menu-down'"></b-icon>
                        </template>
                        <b-menu-item icon="account-multiple"  label="Usuários" @click="users"></b-menu-item>
                        <b-menu-item icon="cellphone-link" label="Sensores" @click="sensoresAll"></b-menu-item>
                        <b-menu-item icon="chart-bell-curve" label="Dados" @click="dados"></b-menu-item>
                        <b-menu-item icon="gesture-spread" label="Atribuições" @click="atrib"></b-menu-item>
                        <b-menu-item icon="card-search" label="Informações" @click="information"></b-menu-item>
                        <b-menu-item icon="map-marker-distance" label="Localização" @click="local"></b-menu-item>
                        <b-menu-item icon="image-multiple" label="Imagens" disabled></b-menu-item>
                    </b-menu-item>
                    <b-menu-item icon="account" label="Minha conta" @click="account">
                    </b-menu-item>
                    </b-menu-list>
                    <b-menu-list>
                    <b-menu-item label="Exportar" @click="download" icon="link"></b-menu-item>
                    </b-menu-list>
                    <b-menu-list label="Actions">
                    <b-menu-item label="Logout" @click="doLogout"></b-menu-item>
                    </b-menu-list>
                </b-menu>
            </div>
            <div class="column" v-if="activeUsers == true">
                <div class="row">
                    <div class="col-md-4 mt-1" v-for="usuario in usuarios" :key="usuario.id">
                        <div class="card">
                            <div class="card-content">
                                <div class="media">
                                <div class="media-left">
                                    <figure class="image is-48x48">
                                    <img src="https://bulma.io/images/placeholders/96x96.png" alt="Placeholder image">
                                    </figure>
                                </div>
                                <div class="media-content">
                                    <p class="title is-4">{{ usuario.firstName }} {{ usuario.lastName }}</p>
                                    <p class="subtitle is-6">{{ usuario.email }}</p>
                                </div>
                                </div>

                                <div class="content">
                                <p>CPF: {{ usuario.document }}  Telefone: {{ usuario.phone }}</p>
                                <b-tag v-if="usuario.isAdmin === 1" type="is-success" icon="account-check">Administrador</b-tag>
                                <b-icon v-if='usuario.gender === "M"' icon="gender-male"></b-icon>
                                <b-icon v-else icon="gender-female"></b-icon>
                                <br>
                                <div class="buttons">
                                    <p class="mt-2">Criado em: {{ usuario.created_at }}</p>
                                    <b-button v-if="usuario.isAdmin !== 1" class="ml-3" type="is-danger"
                                        icon-right="delete" @click="confirmUsuarioDelete(usuario.id)"/> 
                                </div>
                                </div>
                                </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="column" v-if="activeDataSensores == true">
                <div class="row">
                    <div class="col-md-4 mt-2 ml-1" v-for="sensor in sensores" :key="sensor.id">
                        <div class="card">
                            <div class="card-content">
                                <div class="media">
                                <div class="media-left">
                                </div>
                                <div class="media-content">
                                    <p class="title is-4">ID: {{ sensor.id }} </p>
                                </div>
                                </div>

                                <div class="content">
                                TemperatureSoil: {{ sensor.temperatureSoil }} Luminosity: {{ sensor.luminosity }}
                                TemperatureAir: {{ sensor.temperatureAir }} Pluviometer: {{ sensor.pluviometer }}
                                TemperatureCase: {{ sensor.temperatureCase }} gas: {{ sensor.gas }}
                                Altitude: {{ sensor.altitude }} Pressure: {{ sensor.pressure }}
                                Ultraviolet: {{ sensor.ultraviolet }} rainIntensity: {{ sensor.rainIntensity }}
                                WindSpeed: {{ sensor.windSpeed }} WindDirection: {{ sensor.windDirection }}
                                HumidityAirRelative: {{ sensor.humidityAirRelative }}
                                <br>
                                <div class="buttons">
                                    <p class="mt-2">Criado em: {{ sensor.created_at }} </p>
                                    <b-button  class="ml-3" type="is-danger"
                                        icon-right="delete" @click="confirmDadoDelete(sensor.id)"/> 
                                </div>
                                </div>
                                </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="column" v-if="activeSensores == true">
                <div class="row">
                    <div class="col-md-4 mt-2 ml-1" v-for="sensorAll in sensorData" :key="sensorAll.id">
                        <div class="card">
                            <div class="card-content">
                                <div class="media">
                                <div class="media-left">
                                </div>
                                <div class="media-content">
                                    <p class="title is-4">{{ sensorAll.property }} - ID: {{ sensorAll.id }} </p>
                                    <p class="subtitle is-6">{{ sensorAll.lowDescription }} </p>
                                    <p>{{ sensorAll.city }}, {{ sensorAll.state }}</p>
                                    <p v-if="sensorAll.isPublic === 1">Público: <b-icon icon="check" type="is-success"></b-icon></p>
                                    <p v-else>Público: <b-icon icon="remove" type="is-danger"></b-icon></p>
                                    <p>Status: <b-icon v-if="sensorAll.isActive == 0" icon="access-point-remove" 
                                    type="is-danger"></b-icon>
                                    <b-icon v-else-if="sensorAll.isActive == 1"  icon="access-point-check"
                                    type="is-success"></b-icon>
                                    <b-icon v-else  icon="access-point-off" 
                                    type="is-warning"></b-icon></p>
                                    <p>Altitude: {{ sensorAll.altitude }}  Pressão: {{ sensorAll.pressure }}</p>
                                    <p>Temperatura do ar: {{ sensorAll.temperatureAir }}</p>
                                </div>
                                </div>

                                <div class="content">
                                <br>
                                <div class="buttons">
                                    <p class="mt-2">Criado em: {{ sensorAll.created_at }} </p>
                                    <b-button  class="ml-3" type="is-danger"
                                        icon-right="delete" @click="confirmSensorDelete(sensorAll.id)" /> 
                                </div>
                                </div>
                                </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="column" v-if="activeInformation == true">
                <div class="row">
                    <div class="col-md-4 mt-2 ml-1" v-for="sensor in informationData" :key="sensor.id">
                        <div class="card">
                            <div class="card-content">
                                <div class="media">
                                <div class="media-left">
                                </div>
                                <div class="media-content">
                                    <p class="title is-4"> {{ sensor.property }} ID: {{ sensor.id }}</p>
                                    <p class="subtitle is-6">{{ sensor.lowDescription }} </p>
                                    <p>{{ sensor.city }}, {{ sensor.state }}</p>
                                    <p>Latitude {{ sensor.latitude }} Longitude: {{ sensor.longitude }}</p>
                                    <p>Referência(id): {{ sensor.idSensor }} Produção: {{ sensor.typeProduction }}</p>
                                    <p v-if="sensor.isPublic === 1">Público: <b-icon icon="check" type="is-success"></b-icon></p>
                                    <p v-else>Público: <b-icon icon="remove" type="is-danger"></b-icon></p>
                                    <p>Status: <b-icon v-if="sensor.isActive == 0" icon="access-point-remove" 
                                    type="is-danger"></b-icon>
                                    <b-icon v-else-if="sensor.isActive == 1"  icon="access-point-check"
                                    type="is-success"></b-icon>
                                    <b-icon v-else  icon="access-point-off" 
                                    type="is-warning"></b-icon></p>
                                    <p> Área: {{ sensor.area }}</p>
                                    <br />
                                    <p>{{ sensor.description }}</p>
                                </div>
                                </div>

                                <div class="content">
                                <br>
                                <div class="buttons">
                                    <p class="mt-2">Criado em: {{ sensor.created_at }} </p>
                                    <b-button  class="ml-3" type="is-danger"
                                        icon-right="delete" @click="confirmSensorDelete(sensor.id)" /> 
                                </div>
                                </div>
                                </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="column" v-if="activeAtribuicao == true">
                <div class="row">
                    <div class="col-md-4 mt-2" v-for="atribuicaoUse in atribuicao" :key="atribuicaoUse.id">
                        <div class="card">
                            <div class="card-content">
                                <div class="media">
                                <div class="media-left">
                                </div>
                                <div class="media-content">
                                    <p class="title is-4">ID: {{ atribuicaoUse.id }}</p>
                                    <p>idInfoSensor: {{ atribuicaoUse.idInfoSensor }}</p>
                                    <p>idUsuario: {{ atribuicaoUse.idUsuario }}</p>
                                    <b-tag v-if="atribuicaoUse.isAdminSensor === 2" type="is-success">Administrador</b-tag>
                                    <b-tag v-if="atribuicaoUse.isAdminSensor === 1" type="is-info">Patrocinador</b-tag>
                                    <b-tag v-if="atribuicaoUse.isAdminSensor === 0" type="is-warning">Visualizador</b-tag>
                                </div>
                                </div>

                                <div class="content">
                                <br>
                                <div class="buttons">
                                    <p class="mt-2">Criado em: {{ atribuicaoUse.created_at }} </p>
                                    <b-button  class="ml-3" type="is-danger"
                                        icon-right="delete" @click="confirmAtribuicaoDelete(atribuicaoUse.id)"/> 
                                </div>
                                </div>
                                </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="column" v-if="activeLocalizacao == true">
                <div class="row">
                    <div class="col-md-4 mt-2" v-for="localizacao in localizacoesData" :key="localizacao.id">
                        <div class="card">
                            <div class="card-content">
                                <div class="media">
                                <div class="media-left">
                                </div>
                                <div class="media-content">
                                    <p class="title is-4">ID: {{ localizacao.id }}</p>
                                    <p class="subtitle is-6">Usuário: {{ localizacao.idUser }} </p>
                                    <p>Endereço: {{ localizacao.street }} {{ localizacao.numberU }} {{ localizacao.complement }}</p>
                                    <p>{{ localizacao.city }}, {{ localizacao.state }}</p>
                                    <p>CEP: {{ localizacao.zipcode }}</p>
                                    <p>Bairro: {{ localizacao.neighborhood }}</p>
                                </div>
                                </div>

                                <div class="content">
                                <br>
                                <div class="buttons">
                                    <p class="mt-2">Criado em: {{ localizacao.created_at }} </p>
                                    <b-button  class="ml-3" type="is-danger"
                                        icon-right="delete" @click="confirmLocalizacaoDelete(localizacao.id)"/> 
                                </div>
                                </div>
                                </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="column" v-if="activeCardInfo == true">
                <div class="card mt-3">
                    <div class="card-content">
                        <div class="media">
                            <div class="media-center center">
                                <p class="title is-4 is-uppercase">Painel do Administrador</p>
                                <p class="subtitle is-7 is-uppercase">Configure as informações da plataforma</p>
                                <div class="columns mt-4">
                                    <div class="column">
                                        <div class="usuarios">
                                            <h1 class="is-uppercase has-text-weight-bold">Usuários</h1>
                                            <p class="number">{{ usuarios.length }}</p>
                                        </div>
                                    </div>
                                    <div class="column">
                                        <div class="sensores mt-3">
                                            <h1 class="is-uppercase has-text-weight-bold">Sensores</h1>
                                            <p class="number">{{ sensores.length}}</p>
                                        </div>
                                    </div>
                                </div>
                                <div class="columns mt-5">
                                    <div class="column">
                                        <b-message title="Exportação dos dados" aria-close-label="Close message">
                                            Para exportar os dados do banco de dados da aplicação basta clicar no item do menu "Exportar"! 
                                            Será gerado um arquivo .json com todas as informações atualizadas das tabelas.
                                        </b-message>
                                    </div>
                                    <div class="column">
                                        <b-message title="Gerenciando os dados" aria-close-label="Close message">
                                            Pelo painel do administrador é possível gerenciar todos os dados do banco de dados, sem a necessidade de utilizar comandos
                                            SQL via linha de comando. Basta clicar no item "Administrador"!
                                        </b-message>
                                    </div>
                                </div>
                                <div class="columns">
                                    <div class="column">
                                        <b-message title="Minha conta" aria-close-label="Close message">
                                            Como administrador só é possível remover sua conta diretamente no painel, as informações de perfil somente podem editá-las. Não é possível remover outros administradores por aqui!
                                        </b-message>
                                    </div>
                                    <div class="column">
                                        <b-message type="is-warning" title="Atenção!" aria-close-label="Close message">
                                            Tome cuidado ao apagar informações relevantes para a plataforma, atenção ao remover chaves estrangeiras nas tabelas referenciadas, todas as ações aqui requerem cautela!
                                        </b-message>
                                    </div>
                                </div>
                            </div>    
                        </div>
                    </div>
                </div>           
            </div>
            <div class="column" v-if="activeAccount == true">
                <div class="columns">
                    <div class="column">
                        <div class="card mt-3">
                            <div class="card-content">
                                <div class="media">
                                <div class="media-left">
                                </div>
                                <div class="media-content center">
                                    <p class="title is-4">{{ userData.firstName }} {{ userData.lastName }}</p>
                                    <p class="subtitle is-6">{{ userData.email }}</p>
                                </div>
                                </div>

                                <div class="content">
                                    <div class="columns">
                                        <div class="column">
                                            <b-field label="ID">
                                                <b-input disabled :value="userData.id"></b-input>
                                            </b-field>
                                        </div>
                                        <div class="column">
                                            <b-field label="Telefone">
                                                <b-input disabled :value="userData.phone"></b-input>
                                            </b-field>
                                        </div>
                                        <div class="column">
                                            <b-field label="CPF">
                                                <b-input disabled :value="userData.document"></b-input>
                                            </b-field>
                                        </div>
                                    </div>
                                    <div class="column">
                                            <b-field label="Perfil do Facebook">
                                                <b-input disabled :value="userData.facebookProfile"></b-input>
                                            </b-field>
                                    </div>
                                    <div class="columns">
                                        <div class="column">
                                            <b-field label="Estado">
                                                <b-input disabled :value="userData.state"></b-input>
                                            </b-field>
                                        </div>
                                        <div class="column">
                                            <b-field label="Cidade">
                                                <b-input disabled :value="userData.city"></b-input>
                                            </b-field>
                                        </div>
                                    </div>
                                    <div class="columns">
                                        <div class="column">
                                            <b-field label="Rua">
                                                <b-input disabled :value="userData.street"></b-input>
                                            </b-field>
                                        </div>
                                        <div class="column">
                                            <b-field label="Número">
                                                <b-input disabled :value="userData.numberU"></b-input>
                                            </b-field>
                                        </div>
                                    </div>
                                    <div class="columns">
                                        <div class="column">
                                            <b-field label="Bairro">
                                                <b-input disabled :value="userData.neighborhood"></b-input>
                                            </b-field>
                                        </div>
                                        <div class="column">
                                            <b-field label="Complemento">
                                                <b-input disabled :value="userData.complement"></b-input>
                                            </b-field>
                                        </div>
                                        <div class="column">
                                            <b-field label="CEP">
                                                <b-input disabled :value="userData.zipcode"></b-input>
                                            </b-field>
                                        </div>
                                    </div>
                                <br>
                                <p class="is-size-7 center is-uppercase has-text-weight-light mt-2">Criado em: {{ userData.created_at_user }} </p>
                                <div class="buttons">
                                    <div class="buttons">
                                    <b-button  class="ml-3" type="is-danger"
                                        icon-right="delete" @click="confirmAdminDelete(userData.id)">
                                        Excluir
                                    </b-button> 
                                    <b-button  tag="router-link" :to="{ path: '/edit-perfil' }" class="ml-3" type="is-primary"
                                        icon-right="account-edit">
                                        Editar
                                    </b-button> 
                                    </div>
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
import { getUsers, getUser, listaSensores, getAllSensores, getInformationSensors, getAtribuicoes, getLocalizacoes, removeUsuario, removeDadoSensor,
removeSensor, removeAtribuicao, removeLocalizacao} from "../services/api";
import { mapActions } from "vuex";
export default {
  data() {
    return {
      isActive: false,
      activeAccount: false,
      activeUsers: false,
      activeDataSensores: false,
      activeSensores: false,
      activeInformation: false,
      activeAtribuicao: false,
      activeLocalizacao: false,
      activeCardInfo: true,
      usuarios: [],
      userData: [],
      sensores: [],
      sensorData: [],
      informationData: [],
      atribuicao: [],
      localizacoesData: [],
    }
  },
  mounted(){
    this.loadUsers();
    this.loadUser();
    this.loadSensores();
    this.loadAllSensores();
    this.loadAtribuicoes();
    this.loadInformationSensors();
    this.loadLocalizacoes();
  },
  methods:{
    ...mapActions(["logout"]),
    account(){
        this.activeSensores = false;
        this.activeAtribuicao = false;
        this.activeDataSensores = false;
        this.activeUsers = false;
        this.activeInformation = false;
        this.activeLocalizacao = false;
        this.activeCardInfo = false;
        this.activeAccount = true;
    },
    info(){
        this.activeAccount = false;
        this.activeSensores = false;
        this.activeAtribuicao = false;
        this.activeDataSensores = false;
        this.activeUsers = false;
        this.activeInformation = false;
        this.activeLocalizacao = false;
        this.activeCardInfo = true;
    },
    local(){
        this.activeAccount = false;
        this.activeCardInfo = false;
        this.activeSensores = false;
        this.activeAtribuicao = false;
        this.activeDataSensores = false;
        this.activeUsers = false;
        this.activeInformation = false;
        this.activeLocalizacao = true;
    },
    information(){
        this.activeAccount = false;
        this.activeCardInfo = false;
        this.activeLocalizacao = false;
        this.activeSensores = false;
        this.activeAtribuicao = false;
        this.activeDataSensores = false;
        this.activeUsers = false;
        this.activeInformation = true;
    },
    users(){
        this.activeAccount = false;
        this.activeCardInfo = false;
        this.activeLocalizacao = false;
        this.activeAtribuicao = false;
        this.activeInformation = false;
        this.activeSensores = false;
        this.activeDataSensores = false;
        this.activeUsers = true;
    },
    sensoresAll(){
        this.activeAccount = false;
        this.activeCardInfo = false;
        this.activeLocalizacao = false;
        this.activeAtribuicao = false;
        this.activeInformation = false;
        this.activeDataSensores = false;
        this.activeUsers = false;
        this.activeSensores = true;
    },
    dados(){
        this.activeAccount = false;
        this.activeCardInfo = false;
        this.activeLocalizacao = false;
        this.activeAtribuicao = false;
        this.activeInformation = false;
        this.activeUsers = false;
        this.activeSensores = false;
        this.activeDataSensores = true;
    },
    atrib(){
        this.activeAccount = false;
        this.activeCardInfo = false;
        this.activeLocalizacao = false;
        this.activeInformation = false;
        this.activeUsers = false;
        this.activeSensores = false;
        this.activeDataSensores = false;
        this.activeAtribuicao = true;
    },
    doLogout() {
      this.logout();
      this.$router.push("/");
    },
    confirmUsuarioDelete(id) {
        this.$buefy.dialog.confirm({
            title: 'Remover usuário',
            message: 'Você tem certeza que deseja <b>deletar</b> este usuário? Essa ação não pode ser desfeita.',
            confirmText: 'Remover',
            cancelText: 'Cancelar',
            type: 'is-danger',
            hasIcon: true,
            onConfirm: () => {
                this.deleteSensor(id);
                this.$buefy.toast.open({
                    message: 'Sensor removido! Busque nos logs do servidor para qualquer backup.',
                    type: "is-danger",
                });
            }
        })
    },
    deleteUsuario(id){
        removeUsuario(id).then(() => {
            this.loadUsers();
        });
    },
    confirmDadoDelete(id) {
        this.$buefy.dialog.confirm({
            title: 'Remover dados',
            message: 'Você tem certeza que deseja <b>deletar</b> os dados deste sensor? Essa ação não pode ser desfeita.',
            confirmText: 'Remover',
            cancelText: 'Cancelar',
            type: 'is-danger',
            hasIcon: true,
            onConfirm: () => {
                this.deleteDados(id);
                this.$buefy.toast.open({
                    message: 'Dados removido! Busque nos logs do servidor para qualquer backup.',
                    type: "is-danger",
                });
            }
        })
    },
    deleteDados(id){
        removeDadoSensor(id).then(() => {
            this.loadSensores();
        });
    },
    confirmSensorDelete(id) {
        this.$buefy.dialog.confirm({
            title: 'Remover sensor',
            message: 'Você tem certeza que deseja <b>deletar</b> as informações deste sensor? Essa ação não pode ser desfeita.',
            confirmText: 'Remover',
            cancelText: 'Cancelar',
            type: 'is-danger',
            hasIcon: true,
            onConfirm: () => {
                this.deleteSensor(id);
                this.$buefy.toast.open({
                    message: 'Informações removidas! Busque nos logs do servidor para qualquer backup.',
                    type: "is-danger",
                });
            }
        })
    },
    deleteSensor(id){
        removeSensor(id).then(() => {
            this.loadAllSensores();
        });
    },
    confirmAtribuicaoDelete(id) {
        this.$buefy.dialog.confirm({
            title: 'Remover atribuição',
            message: 'Você tem certeza que deseja <b>deletar</b> as atribuições para usuários deste sensor? Essa ação não pode ser desfeita.',
            confirmText: 'Remover',
            cancelText: 'Cancelar',
            type: 'is-danger',
            hasIcon: true,
            onConfirm: () => {
                this.deleteAtribuicao(id);
                this.$buefy.toast.open({
                    message: 'Atribuições removidas! Busque nos logs do servidor para qualquer backup.',
                    type: "is-danger",
                });
            }
        })
    },
    deleteAtribuicao(id){
        removeAtribuicao(id).then(() => {
            this.loadAtribuicoes();
        });
    },
    confirmLocalizacaoDelete(id) {
        this.$buefy.dialog.confirm({
            title: 'Remover localização',
            message: 'Você tem certeza que deseja <b>deletar</b> a localização deste usuário? Essa ação não pode ser desfeita.',
            confirmText: 'Remover',
            cancelText: 'Cancelar',
            type: 'is-danger',
            hasIcon: true,
            onConfirm: () => {
                this.deleteLocalizacao(id);
                this.$buefy.toast.open({
                    message: 'Localização removida! Busque nos logs do servidor para qualquer backup.',
                    type: "is-danger",
                });
            }
        })
    },
    deleteLocalizacao(id){
        removeLocalizacao(id).then(() => {
            this.loadLocalizacoes();
        });
    },
    confirmAdminDelete(id) {
        this.$buefy.dialog.confirm({
            title: 'Remover conta',
            message: 'Você tem certeza que deseja <b>deletar</b> a sua conta? Todo o acesso ao painel será removido, assim como os seus sensores e informações, não será possível criar uma conta do tipo <b>ADMINISTRADOR</b> novamente. Essa ação não pode ser desfeita.',
            confirmText: 'Remover',
            cancelText: 'Cancelar',
            type: 'is-danger',
            hasIcon: true,
            onConfirm: () => {
                this.deleteAdmin(id);
                this.$buefy.toast.open({
                    message: 'Conta removida! Busque nos logs do servidor para qualquer backup.',
                    type: "is-danger",
                });
            }
        })
    },
    deleteAdmin(id){
        removeUsuario(id).then(() => {
            this.logout();
            this.$router.push("/");
        });
    },
    loadUser() {
      return getUser()
        .then((res) => {
          this.userData = res.data;
        })
        .catch(() => {
          this.userData = [];
        });
    },
    loadUsers(){
        return getUsers()
        .then((res) => {
          this.usuarios = res.data;
        })
        .catch(() => {
          this.usuarios = [];
        });
    },
    loadAtribuicoes(){
        return getAtribuicoes()
        .then((res) => {
          this.atribuicao = res.data;
        })
        .catch(() => {
          this.atribuicao = [];
        });
    },
    loadLocalizacoes(){
        return getLocalizacoes()
        .then((res) => {
          this.localizacoesData = res.data;
        })
        .catch(() => {
          this.localizacoesData = [];
        });
    },
    loadSensores(){
        return listaSensores()
        .then((res) => {
          this.sensores = res.data;
        })
        .catch(() => {
          this.sensores = [];
        });
    },
    loadAllSensores(){
        return getAllSensores()
        .then((res) => {
          this.sensorData = res.data;
        })
        .catch(() => {
          this.sensorData = [];
        });
    },
    loadInformationSensors(){
        return getInformationSensors()
        .then((res) => {
          this.informationData = res.data;
        })
        .catch(() => {
          this.informationData = [];
        });
    },
    download() {
        const dataObj = [
            this.usuarios,
            this.sensores,
            this.informationData,
            this.atribuicao,
            this.localizacoesData,
        ];
        let filename = 'data.json';
        let element = document.createElement('a');
        element.setAttribute('href', 'data:application/json;charset=utf-8,' + encodeURIComponent(JSON.stringify(dataObj)));
        element.setAttribute('download', filename);

        element.style.display = 'none';
        document.body.appendChild(element);

        element.click();
        document.body.removeChild(element);     
    },
  }
}
</script>

<style lang="scss" scoped>
.number{
  color: rgb(0, 0, 0);
  font-family: 'Work Sans', sans-serif;
  font-weight: 900;
  font-size: 8vw;
  text-transform: uppercase;
  text-align: center;
  line-height: 1;
}
.menu-imagem{
    margin-left: 120px;
}
</style>