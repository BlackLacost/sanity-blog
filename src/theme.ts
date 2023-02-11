import { buildLegacyTheme } from 'sanity'

export const myColors = {
  '--my-white': '#fff',
  '--my-black': '#1a1a1a',
  '--primary': '#f7ab0a',
  '--my-red': '#db4437',
  '--my-yellow': '#f4b400',
  '--my-green': '#0f9d58',
}

export const myTheme = buildLegacyTheme({
  // Base theme colors
  '--black': myColors['--my-black'],
  '--white': myColors['--my-white'],
  '--gray': '#666',
  '--gray-base': '#666',
  '--component-bg': myColors['--my-black'],
  '--component-text-color': myColors['--my-white'],

  // Brand
  '--brand-primary': myColors['--primary'],

  // Default button
  '--default-button-color': '#666',
  '--default-button-primary-color': myColors['--primary'],
  '--default-button-success-color': myColors['--my-green'],
  '--default-button-warning-color': myColors['--my-yellow'],
  '--default-button-danger-color': myColors['--my-red'],

  // State
  '--state-info-color': myColors['--primary'],
  '--state-success-color': myColors['--my-green'],
  '--state-warning-color': myColors['--my-yellow'],
  '--state-danger-color': myColors['--my-red'],

  // Navbar
  '--main-navigation-color': myColors['--my-black'],
  '--main-navigation-color--inverted': myColors['--my-white'],
  '--focus-color': myColors['--primary'],
})
