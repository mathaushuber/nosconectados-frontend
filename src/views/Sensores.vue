<template>
    <main>
        <div class="columns">
            <div class="container is-fluid">
                <div class="column is-one-third mt-5 menu">
                    <div class="center">
                        <img src="../assets/sensorespublicos.svg" width="250" height="130">
                    </div>
                    <h1 class="is-size-6 is-uppercase has-text-weight-light pb-2 mt-4 center">
                        AQUI VOCÊ PODE FILTRAR PELOS SENSORES DE DESEJADOS.
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
            </div>
        </div>
    </main>
</template>

<style lang="scss" scoped>

</style>