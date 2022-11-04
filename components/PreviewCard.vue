<template>
    <v-card width="350" color="#14253d" elevation="24" rounded="lg" class="ma-3">
        <v-row class="ma-6">
            <v-avatar class="img-container" @mouseenter="imgHover = true" @mouseleave="imgHover = false" rounded="lg"
                size="300" variant="tonal">
                <img class="cover-img" src="../assets/img/image-equilibrium.jpg">
                <div v-show="imgHover" class="view">
                    <ViewIcon />
                </div>
            </v-avatar>
            <v-card-title class="px-0 pt-6">
                <div class="font-weight-black title">Equilibrium #3429</div>
            </v-card-title>
            <v-card-content class="pt-4">
                <div class="text-body-1 font-weight-thick paragraph"> Our Equilibrium
                    collection
                    promotes
                    balance and calm.
                </div>
                <v-row class="py-6" align="center">
                    <v-col class="d-flex align-center">
                        <EthIcon /> <span class="px-2 cost">0.041ETH</span>
                    </v-col>
                    <v-col cols="auto" class="d-flex align-center">
                        <ClockIcon /> <span class="px-2 time">3 days off</span>
                    </v-col>
                </v-row>
                <v-divider color="#2f415b"></v-divider>
                <v-row class="pt-6" align="center">
                    <v-col class="d-flex align-center">
                        <v-avatar size="30" class="creator-avatar"><img class="cover-img"
                                src="../assets/img/image-avatar.png" /></v-avatar>
                        <span class="px-2 text-body-1 font-weight-normal creator">Creation of <span class=" name">Jules
                                Wyvern</span></span>
                    </v-col>
                </v-row>
            </v-card-content>
        </v-row>
    </v-card>
</template>

<script setup>
var imgHover = ref(false)
</script>


<style lang="scss">
.view {
    background: #03fff779;
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    cursor: pointer;
}

.title {
    color: white;
    font-size: 21px;
}

.title:hover {
    color: #03fff8;
    cursor: pointer;
}

.paragraph {
    color: #7b91b0;
    line-height: 1.2rem;
}

.creator {
    color: #7b91b0;
}

.creator-avatar {
    outline: 1px white solid;
}

.cost {
    color: #03fff8;
    font-size: 15px
}

.time {
    color: #8cacd9;
    font-size: 12px
}

.name {
    color: white;
}

.name:hover {
    color: #03fff8;
    cursor: pointer;
}

.cover-img {
    height: 100%;
    object-fit: cover
}

.img-container {
    position: relative;
}
</style>