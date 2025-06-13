<template>
  <form @submit.prevent="$emit('submit')">
    <div>
      <div>
        <label for="name">Полное наименование</label>
      </div>
      <div>
        <input
          type="text"
          id="name"
          :value="$props.organization.name"
          @change="onChange({ name: $event.target.value })"
          required
        />
      </div>
    </div>
    <div>
      <div>
        <label for="short_name">Короткое наименование</label>
      </div>
      <div>
        <input
          type="text"
          id="short_name"
          :value="$props.organization.short_name"
          @change="onChange({ short_name: $event.target.value })"
          required
        />
      </div>
    </div>
    <div>
      <div>
        <label for="description">Описание</label>
      </div>
      <div>
        <textarea
          id="description"
          :value="$props.organization.description"
          @change="onChange({ description: $event.target.value })"
          required
        />
      </div>
    </div>
  </form>
</template>

<script>
export default {
  name: "OrganizationForm",
  props: {
    organization: {
      default: () => ({
        name: "",
        short_name: "",
        description: "",
        is_active: true,
      }),
    },
  },
  emits: ["change", "submit"],
  methods: {
    onChange(changing) {
      this.$emit("change", { ...this.$props.organization, ...changing });
    },
  },
};
</script>
