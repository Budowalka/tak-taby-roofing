export const useMainStore = defineStore('main', () => {
  // State
  const isMenuOpen = ref(false)
  const isLoading = ref(false)
  const currentSection = ref('home')

  // Actions
  const toggleMenu = () => {
    isMenuOpen.value = !isMenuOpen.value
  }

  const closeMenu = () => {
    isMenuOpen.value = false
  }

  const setLoading = (loading: boolean) => {
    isLoading.value = loading
  }

  const setCurrentSection = (section: string) => {
    currentSection.value = section
  }

  return {
    // State
    isMenuOpen,
    isLoading,
    currentSection,
    // Actions
    toggleMenu,
    closeMenu,
    setLoading,
    setCurrentSection
  }
}) 