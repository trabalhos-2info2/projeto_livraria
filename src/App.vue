<script setup>

</script>

<template>
    <body>
        <main>
            <header>
                <div class="logo">
                    <h1>IFBooks</h1>
                    <h2>Apreço a leitura</h2>
                </div>
                <div class="pesquisa">
                    <p>Pesquisar</p>
                </div>

                <ul>
                    <li>Termos</li>
                    <li>Equipe</li>
                    <li>Envio</li>
                    <li>Devoluções</li>
                </ul>
            </header>
        </main>
    </body>
</template>

<style scoped>
    header {
        display: flex;
        align-items: center;
        justify-content: space-between;
        margin: 0 10vw;
    }
    header div.logo {
        display: flex;
        align-items: center;
        width: 10%;
    }
    header div.logo h1 {
        font-size: 1rem;
        font-weight: normal;
        color: #231F2D;
        padding: 0 5px 0 0;
        border-right: 2px solid #27AE60;
    }
    header div.logo h2 {
        font-size: 0.8rem;
        color: #27AE60;
        font-weight: normal;
        padding: 0 0 0 5px;
        flex-wrap: wrap;
    }

    header div.pesquisa {
        padding: 0 10vw;
        background-color: #B8B8B8;
    }
    header div.pesquisa p {
        font-size: 1rem;
        text-align: left;
    }

</style>
