import { future } from '@theme-ui/presets'

export default {
  ...future,
  styles: {
    root: {
      fontFamily: 'body',
      lineHeight: 'body',
    },
    h1: {
      color: 'primary',
    },
  },
  text: {
    heading: {
      fontFamily: 'heading',
      lineHeight: 'heading',
      fontWeight: 'heading',

      '& > a': {
        color: 'inherit',
      },
    },
  },
}
