import Vue from 'vue'
import Router from 'vue-router'
import AboutMe from '@/view/AboutMe.vue'
import Education from '@/view/Education.vue'
import Career from '@/view/Career.vue'
import Skill from '@/view/Skill.vue'
import Project from '@/view/Project.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: AboutMe
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
    },
    {
      path: '/Skill',
      name: 'Skill',
      component: Skill
    },
    {
      path: '/Project',
      name: 'Project',
      component: Project
    }
  ]
})
