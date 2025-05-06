import * as React from 'react'
import {
  BookOpen,
  CarFront,
  ChartPie,
  Frame,
  Map,
  PieChart,
  Settings2,
  Users,
} from 'lucide-react'

import { NavMain } from './nav-main'
import { NavUser } from './nav-user'
import { TeamSwitcher } from './team-switcher'
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarRail,
} from '@/view/components/ui/sidebar'

// This is sample data.
const data = {
  user: {
    name: 'shadcn',
    email: 'm@example.com',
    avatar: '/avatars/shadcn.jpg',
  },
  teams: [
    {
      name: 'Tio Márcio',
      logo: CarFront,
      plan: 'Transporte',
    },
  ],
  navMain: [
    {
      title: 'Dashboard',
      url: '/',
      icon: ChartPie,
      isActive: true,
    },
    {
      title: 'Responsáveis e alunos',
      url: '#',
      icon: Users,
    },
    {
      title: 'Escolas atendidas',
      url: '/schools',
      icon: BookOpen,
    },
    {
      title: 'Configurações',
      url: '#',
      icon: Settings2,
    },
  ],
  projects: [
    {
      name: 'Design Engineering',
      url: '#',
      icon: Frame,
    },
    {
      name: 'Sales & Marketing',
      url: '#',
      icon: PieChart,
    },
    {
      name: 'Travel',
      url: '#',
      icon: Map,
    },
  ],
}

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar collapsible="icon" {...props}>
      <SidebarHeader>
        <TeamSwitcher teams={data.teams} />
      </SidebarHeader>
      <SidebarContent>
        <NavMain items={data.navMain} />
      </SidebarContent>
      <SidebarFooter>
        <NavUser user={data.user} />
      </SidebarFooter>
      <SidebarRail />
    </Sidebar>
  )
}
