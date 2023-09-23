<template>
    <v-sheet class="d-flex flex-column">
        <v-toolbar title="LiteWeb">
            <v-btn variant="tonal" prepend-icon="mdi-checkbox-marked-circle">按钮</v-btn>
            <v-btn variant="tonal" prepend-icon="mdi-checkbox-marked-circle">按钮</v-btn>
            <v-btn variant="tonal" prepend-icon="mdi-checkbox-marked-circle">按钮</v-btn>
            <v-avatar color="surface-variant"></v-avatar>
        </v-toolbar>
        <v-sheet class="flex-1-1 d-flex flex-row">
            <v-card class="mx-auto" max-width="300">
                <v-list density="compact">
                    <v-list-subheader>
                        <v-icon icon="mdi-home"></v-icon>
                        二级菜单
                    </v-list-subheader>

                    <v-list-item v-for="(item, i) in items" :key="i" :value="item" color="primary">
                        <template v-slot:prepend>
                            <v-icon :icon="item.icon"></v-icon>
                        </template>

                        <v-list-item-title v-text="item.text"></v-list-item-title>
                    </v-list-item>
                </v-list>
            </v-card>
            <v-sheet class="flex-1-1">
                <slot></slot>
            </v-sheet>
        </v-sheet>
        <v-footer class="bg-grey-lighten-1">
            <v-row justify="center" no-gutters>
                <v-btn v-for="link in links" :key="link" color="white" variant="text" class="mx-2" rounded="xl">
                    {{ link }}
                </v-btn>
                <v-col class="text-center mt-4" cols="12">
                    {{ new Date().getFullYear() }} — <strong>Vuetify</strong>
                </v-col>
            </v-row>
        </v-footer>
    </v-sheet>
</template>

<script setup lang="ts">

const items = [
    { text: '菜单一', icon: 'mdi-clock' },
    { text: '菜单二', icon: 'mdi-account' },
    { text: '菜单三', icon: 'mdi-flag' },
]

const links = [
    'Home',
    'About Us',
    'Team',
    'Services',
    'Blog',
    'Contact Us',
]

</script>