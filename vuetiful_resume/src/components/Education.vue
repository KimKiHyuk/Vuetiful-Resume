<template>
  <v-container>
	<v-timeline>
      <v-timeline-item
        v-for="(edu, i) in educationTable"
        :key="i"
        color="red lighten-2"
        large
      >
      <template v-slot:opposite>
      </template>
      <v-card class="elevation-2">
        <v-card-title class="headline">{{ edu.institute }}</v-card-title>
        <v-card-text>
		  <div>
		    <p>
			  {{ edu.type }}
		    </p>
		    <p>
		      {{ edu.description }}	  
		    </p>
		    <p>
		      {{ edu.period }}	  
		    </p>
	     </div>
         
        </v-card-text>
      </v-card>
    </v-timeline-item>
  </v-timeline>
  </v-container>
</template>

<script>
  export default {
    data: () => ({
      educationTable: [
	    {
	      institute: 'Hallym University',
	      type: '학사과정',
	      description: "설명",
	      period: '2015.03 ~ 현재'
        },
	    {
		  institute: 'Griffith University',
	      type: '교환학생',
	      description: "설명",
	      period: '2017.12 ~ 2018.03'
        },
	    {
	      institute: 'BIGTORY 3기',
	      type: '교육',
	      description: "설명",
	      period: '2017.03 ~ 2017.06'
        },
	    {
	      institute: 'Software Maestro 8기',
	      type: '교육',
	      description: "설명",
	      period: '2017.06 ~ 2017.12'
        }
	  ]
	})
  }
</script>

<style>
</style>