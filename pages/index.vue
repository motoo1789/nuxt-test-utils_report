<template>
    <div>
        <p>Docker環境確認2回目</p>
        <HelloMessage :name="name" />
        <p>
            <input type="text" v-model="name" />
        </p>
        <v-card>
            <v-tabs
                v-model="tab"
                align-tabs="center"
                color="indigo-accent-4"
            >
              <v-tab value=0>貸出</v-tab>
              <v-tab value=1>ユーザー登録</v-tab>
              <v-tab value=2>貸出履歴</v-tab>
            </v-tabs>
        
            <v-window v-model="tab">
              <v-window-item
                value=0
              >
                <v-container>
                    <v-row>
                        <v-col cols="6">
                            <v-card
                            class="mx-auto"
                            height="200"
                            image="https://cdn.vuetifyjs.com/images/cards/docks.jpg"
                            max-width="200"
                            theme="dark"
                            title="Card title"
                        ></v-card>
                        </v-col>
                        <v-col  cols="6">
                            <v-card
                            class="mx-auto"
                            height="200"
                            image="https://cdn.vuetifyjs.com/images/cards/docks.jpg"
                            max-width="200"
                            theme="dark"
                            title="Card title"
                        ></v-card>
                        </v-col>
                    </v-row>
                    <v-row>
                        アラート
                    </v-row>
                </v-container>
              </v-window-item>

              <v-window-item
                value=1
              >
              <v-container>
                    <v-row>
                        <v-col
                            cols="12"
                            md="4"
                        >
                            <v-text-field
                                v-model="registName"
                                :counter="10"
                                :rules="nameRules"
                                label="登録名"
                                hide-details
                                required
                                class="d-flex justify-center"
                            ></v-text-field>
                        </v-col>
                    </v-row>   
                    <v-row>
                        アラート
                    </v-row>         
                </v-container>
              </v-window-item>

              <v-window-item
                value=2
              >
                <v-data-table
                    :items="desserts"
                    :headers="headers"
                ></v-data-table>
              </v-window-item>
            </v-window>
          </v-card>
    </div>
    
</template>

<script setup lang="ts">
    import { ref } from "vue";
    const name = ref("World");

    const registName = ref("");

    const desserts = [
        {
            checkout_date: '2024-04-02 00:00:00',
            name: "テストさん",
            key_type: "ドラえもん",
            return_date: '2024-04-03 00:00:00',
        },
        {
            checkout_date: '2024-04-02 00:00:00',
            name: "テストさん2",
            key_type: "ピカチュウ",
            return_date: '2024-04-03 00:00:00',
        },
    ]

    const headers = [
                { title: '貸出日時', value: 'checkout_date', align: 'end' },
                { title: '名前', value: 'name', align: 'end' },
                { title: '鍵種', value: 'key_type', align: 'end' },
                { title: '返却日時', value: 'return_date', align: 'end' },
    ];

    // tabs
    const tab = ref(0);
    const text = "aaaa";
</script>