<template>
  <div class="new-org">
    <h2>Создание Организации</h2>
    <OrgForm
      id="form"
      :org="org"
      @change="onFormChange"
      @submit="onFormSubmit"
    />
    <div class="actions">
      <button type="button" @click="$router.back()">Назад</button>
      <button type="submit" form="form">Создать</button>
    </div>
  </div>
</template>

<script>
import axios from "axios";

import OrgForm from "../components/OrgForm.vue";

export default {
  name: "NewOrgPage",
  components: { OrgForm },
  data() {
    return {
      org: {
        name: "",
        short_name: "",
        description: "",
        is_active: true,
      },
    };
  },
  methods: {
    onFormChange(changed) {
      this.org = changed;
    },
    onFormSubmit() {
      axios
        .post("/organizations/", this.org)
        .then(() => {
          alert("Организация создана!");
          this.$router.back();
        })
        .catch((error) => {
          alert("Что-то пошло не так...");
          console.log(error);
        });
    },
  },
};
</script>

<style scoped>
.new-org {
}
</style>
