<template>
    <v-sheet class="flex! flex-col">
        <v-toolbar title="LiteWeb">
            <v-btn variant="tonal" :to="items[0].to" prepend-icon="mdi-checkbox-marked-circle">drag</v-btn>
            <v-btn variant="tonal" prepend-icon="mdi-checkbox-marked-circle">按钮</v-btn>
            <v-btn variant="tonal" prepend-icon="mdi-checkbox-marked-circle">按钮</v-btn>
            <v-avatar color="surface-variant"></v-avatar>
        </v-toolbar>
        <v-sheet class="flex-1 h-0 flex! flex-row">
            <v-card class="mx-auto" max-width="300">
                <v-list density="compact" v-model:selected="current">
                    <v-list-subheader>
                        <v-icon icon="mdi-home"></v-icon>
                        菜单
                    </v-list-subheader>

                    <v-list-item v-for="(item, i) in items" :key="i" :to="item.to" :value="item.to" color="primary">
                        <template v-slot:prepend>
                            <v-icon :icon="item.icon"></v-icon>
                        </template>
                        <v-list-item-title v-text="item.text"></v-list-item-title>
                    </v-list-item>
                </v-list>
            </v-card>
            <v-sheet class="flex-1 w-0">
                <slot></slot>
            </v-sheet>
        </v-sheet>
        <!-- <v-sheet class="bg-grey-lighten-1">
            <v-row justify="center" no-gutters>
                <v-btn v-for="link in links" :key="link" color="white" variant="text" class="mx-2" rounded="xl">
                    {{ link }}
                </v-btn>
                <v-col class="text-center mt-4" cols="12">
                    {{ new Date().getFullYear() }} — <strong>Vuetify</strong>
                </v-col>
            </v-row>
        </v-sheet> -->
    </v-sheet>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import {useRoute,useRouter} from 'vue-router'
import {routes} from '@/router'

const route = useRoute();
const router = useRouter();


const items = routes.filter(item=>!item.meta.hidden).map(item=>{
    return {
        text: item.meta.title, 
        icon: item.meta.icon, 
        to:item.path
    }
})

router.beforeEach((to,from,next)=>{
    if(to.path){
        current.value = [to.path]
    }
    next();
})

const current= ref([route.path||items[0].to]);

const links = [
    'Home',
    'About Us',
    'Team',
    'Services',
    'Blog',
    'Contact Us',
]

</script>