<template>
    <main>
        <div class="columns">
            <div class="column is-one-quarter">
                <div class="menu-imagem mt-4">
                    <img src="../assets/nosconectados.svg" width="200" height="130">
                </div>
                <b-menu>
                    <b-menu-list label="Menu">
                    <b-menu-item icon="information-outline" label="Info"></b-menu-item>
                    <b-menu-item icon="settings" :active="isActive" expanded>
                        <template #label="props">
                        Administrador
                        <b-icon class="is-pulled-right" :icon="props.expanded ? 'menu-up' : 'menu-down'"></b-icon>
                        </template>
                        <b-menu-item icon="account" @click="users">
                            <template #label>
                                Usuários
                                <b-dropdown aria-role="list" class="is-pulled-right" position="is-bottom-left">
                                    <template #trigger>
                                        <b-icon icon="dots-vertical"></b-icon>
                                    </template>
                                    <b-dropdown-item aria-role="listitem">Informação</b-dropdown-item>
                                    <b-dropdown-item aria-role="listitem">Localização</b-dropdown-item>
                                </b-dropdown>
                            </template>
                        </b-menu-item>
                        
                        <b-menu-item icon="cellphone-link">
                        <template #label>
                            Sensores
                            <b-dropdown aria-role="list" class="is-pulled-right" position="is-bottom-left">
                                <template #trigger>
                                    <b-icon icon="dots-vertical"></b-icon>
                                </template>
                                <b-dropdown-item aria-role="listitem">Informações</b-dropdown-item>
                                <b-dropdown-item aria-role="listitem">Atribuições</b-dropdown-item>
                                <b-dropdown-item aria-role="listitem" @click="dados">Dados</b-dropdown-item>
                            </b-dropdown>
                        </template>
                        </b-menu-item>
                        <b-menu-item icon="cash-multiple" label="Imagens" disabled></b-menu-item>
                    </b-menu-item>
                    <b-menu-item icon="account" label="Minha conta">
                    </b-menu-item>
                    </b-menu-list>
                    <b-menu-list>
                    <b-menu-item label="Exportar" icon="link"></b-menu-item>
                    </b-menu-list>
                    <b-menu-list label="Actions">
                    <b-menu-item label="Logout"></b-menu-item>
                    </b-menu-list>
                </b-menu>
            </div>
            <div class="column" v-if="activeUsers == true">
                <div class="columns">
                    <div class="column is-one-third mt-3 ml-1" v-for="usuario in usuarios" :key="usuario.id">
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
                                        icon-right="delete" /> 
                                </div>
                                </div>
                                </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="column" v-if="activeDataSensores == true">
                <div class="columns">
                    <div class="column is-one-third mt-3 ml-1" v-for="sensor in sensores" :key="sensor.id">
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
                                        icon-right="delete" /> 
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
import { getUsers, listaSensores } from "../services/api";
export default {
  data() {
    return {
      isActive: true,
      activeUsers: false,
      activeDataSensores: false,
      usuarios: [],
      sensores: [],
    }
  },
  mounted(){
    this.loadUsers();
    this.loadSensores();
  },
  methods:{
    users(){
        this.activeDataSensores = false;
        this.activeUsers = true;
    },
    dados(){
        this.activeUsers = false;
        this.activeDataSensores = true;
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
    loadSensores(){
        return listaSensores()
        .then((res) => {
          this.sensores = res.data;
        })
        .catch(() => {
          this.sensores = [];
        });
    }
  }
}
</script>

<style lang="scss" scoped>

.menu-imagem{
    margin-left: 120px;
}
</style>