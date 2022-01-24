import {
  SiCss3,
  SiHtml5,
  SiMarkdown,
  SiReact,
  SiTypescript
} from 'react-icons/si'
import { ExplorerItem } from 'src/types/ExplorerItem'

export const ExplorerData: ExplorerItem[] = [
  {
    title: 'home.tsx',
    path: '/',
    icon: <SiReact />,
    iconColor: '#3096FF'
  },
  {
    title: 'about.html',
    path: '/about',
    icon: <SiHtml5 />,
    iconColor: '#FF5722'
  },
  {
    title: 'contact.css',
    path: '/contact',
    icon: <SiCss3 />,
    iconColor: '#27A0D4'
  },
  {
    title: 'projects.ts',
    path: '/projects',
    icon: <SiTypescript />,
    iconColor: '#0078CF'
  },
  {
    title: 'github.md',
    path: '/github',
    icon: <SiMarkdown />,
    iconColor: '#0061B0'
  }
]
