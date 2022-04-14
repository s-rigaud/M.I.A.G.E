<template>
  <div>
    <p class="title" style="display: inline-block">Pitchounous & CO</p>

    <div class="columns" align="left">
      <div class="column is-two-thirds">
        <h1 class="subtitle has-text-weight-bold">{{ $t("history") }}</h1>
        <p>{{ $t("founded") }}</p>

        <h1 class="subtitle has-text-weight-bold">{{ $t("application") }}</h1>
        <p>
          {{ $t("applicationDetail1") }}<br />
          {{ $t("applicationDetail2") }}<br />
          {{ $t("applicationDetail3") }}
        </p>

        <h1 class="subtitle has-text-weight-bold">{{ $t("contact") }}</h1>
        <ul>
          <li>{{ $t("mail") }}&#64;gmail.com</li>
          <span class="icon">
            <i class="fas fa-home"></i>
          </span>
          <li>{{ $t("phone") }}</li>
          <li>{{ $t("address") }}</li>
          <li>{{ $t("city") }}</li>
        </ul>
      </div>
      <div class="column">
        <img :src="image1" alt="Logo de l'entreprise" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "About",
  data() {
    return {
      image1: "/assets/bird.png",
    };
  },
};
</script>