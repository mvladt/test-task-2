<template>
  <div class="new-organization">
    <h2>Создание Организации</h2>
    <OrganizationForm
      id="form"
      :organization="organization"
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

import OrganizationForm from "../components/OrganizationForm.vue";

export default {
  name: "NewOrganizationPage",
  components: { OrganizationForm },
  data() {
    return {
      organization: {
        name: "",
        short_name: "",
        description: "",
        is_active: true,
      },
    };
  },
  methods: {
    onFormChange(changedOrganization) {
      this.organization = changedOrganization;
    },
    onFormSubmit() {
      axios
        .post("/organizations/", this.organization)
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
.new-organization {
}
</style>
