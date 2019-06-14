<template>
  <v-container>
    <v-timeline>
      <v-timeline-item v-for="(career, i) in careerTable" :key="i" :color="career.color" small>
        <template v-slot:opposite>
          <span
            :class="`headline font-weight-bold ${career.color}--text`"
          >{{ career.year }}년 {{ career.month }}월</span>
        </template>
        <div class="py-3">
          <h2 :class="`headline font-weight-bold mb-3 ${career.color}--text`">{{ career.company }}</h2>
          <div>{{ career.experience }}</div>
        </div>
      </v-timeline-item>
    </v-timeline>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      careerTable: [
        {
          color: "cyan",
          year: "1960",
          month: "1",
          company: "google inc",
          experience: "honey sucker"
        },
        {
          color: "green",
          year: "1970",
          month: "2",
          company: "microsoft",
          experience: "아무것도 안함"
        },
        {
          color: "pink",
          year: "1980",
          month: "3",
          company: "naver",
          experience: "월급 축냄"
        },
        {
          color: "amber",
          year: "1990",
          month: "4",
          company: "kakao",
          experience: "업무시간에 잠"
        },
        {
          color: "orange",
          year: "2000",
          month: "5",
          company: "ROKCC",
          experience: "인턴"
        }
      ]
    };
  }
};
</script>

<style>
</style>