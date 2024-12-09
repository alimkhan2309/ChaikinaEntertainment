<template>
  <button :class="styleClass" class="btn">
    {{ text }}
  </button>
</template>

<script>
export default {
  props: {
    text: {
      type: String,
      required: true,
    },
    style: {
      type: String,
      default: "primary", // Default style class
    },
  },
  computed: {
    styleClass() {
      return `btn-${this.style}`; // Dynamically bind style class
    },
  },
};
</script>

<style scoped lang="scss">
    .btn {
        width:fit-content;
        align-items: center;
        justify-content: center;
        padding: 16px 64px;
        border-radius: 64px;
        font-size: 16px;
        padding: 15px 20px;
        background:none;
    }

    @media(max-width:800px) {
        .btn {
            padding:16px 32px;
            font-size:20px;
        }
    }

    @media(max-width:500px) {
        .btn {
            padding:16px 26px;
        }
    }

    .btn-primary {
  color: $yellow;
  border: solid 1px $yellow;
}

.btn-secondary {
  background-color: gray;
  color: white;
}

.btn-primary-small {
  padding: 10px 32px;
}


    
</style>