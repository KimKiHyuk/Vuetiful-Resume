import Vue from 'vue'
import Router from 'vue-router'
import Main from '@/components/Main.vue'
import AboutMe from '@/components/AboutMe.vue'
import Education from '@/components/Education.vue'
import Career from '@/components/Career.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Main',
      component: Main
    },
	{
		path: '/AboutMe',
		name: 'AboutMe',
		component: AboutMe
	},
	{
		path: '/Education',
		name: 'Education',
		component: Education
	},
	{
		path: '/Career',
		name: 'Career',
		component: Career
	}
  ]
})
