import { create } from 'zustand'
import { persist } from 'zustand/middleware'

type Layout = {
  theme: string
  drawerOpen: boolean
}
const initialState: Layout = {
  theme: 'system',
  drawerOpen: false,
}

export const layoutStore = create<Layout>()(
  persist(() => initialState, {
    name: 'Mise en page Magasin',
  })
)

export default function useLayoutService() {
  const { theme, drawerOpen } = layoutStore()

  return {
    theme,
    drawerOpen,
    toggleTheme: () => {
      layoutStore.setState({
        theme: theme === 'Sombre' ? 'Clair' : 'Sombre',
      })
    },
    toggleDrawer: () => {
      layoutStore.setState({
        drawerOpen: !drawerOpen,
      })
    },
  }
}