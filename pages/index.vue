<template>
    <div>
        <HelloMessage :name="name" />
        <p>
            <input type="text" v-model="name" />
        </p>
        <div>
            <v-container>
                <v-row align="center" justify="center">
                    <v-col cols="auto">
                    <v-btn density="compact">sample1</v-btn>
                    </v-col>

                    <v-col cols="auto">
                    <v-btn density="comfortable">sample2</v-btn>
                    </v-col>

                    <v-col cols="auto">
                    <v-btn density="default">sample3</v-btn>
                    </v-col>
                </v-row>
            </v-container>
        </div>
    </div>
    
</template>

<script setup lang="ts">
    import { ref } from "vue";
    const name = ref("World");
</script>