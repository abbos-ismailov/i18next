export function setLanguageFromLocaleStorage(value) {
      localStorage.setItem('language', value)
}

export function getLanguageToLocaleStorage() {
      return localStorage.getItem("language")
}