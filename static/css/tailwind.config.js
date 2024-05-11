/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
      /**
       * HTML. Paths to Django template files that will contain Tailwind CSS classes.
       */

      /*  Templates within theme app (<tailwind_app_name>/templates), e.g. base.html. */
      '../templates/**/*.html',

      /*
       * Main templates directory of the project (BASE_DIR/templates).
       * Adjust the following line to match your project structure.
       */
      '../../templates/**/*.html',

      /*
       * Templates in other django apps (BASE_DIR/<any_app_name>/templates).
       * Adjust the following line to match your project structure.
       */
      '../../**/templates/**/*.html',

      /**
       * JS: If you use Tailwind CSS in JavaScript, uncomment the following lines and make sure
       * patterns match your project structure.
       */
      /* JS 1: Ignore any JavaScript in node_modules folder. */
      // '!../../**/node_modules',
      /* JS 2: Process all JavaScript files in the project. */
      // '../../**/*.js',

      /**
       * Python: If you use Tailwind CSS classes in Python, uncomment the following line
       * and make sure the pattern below matches your project structure.
       */
  ],
  theme: {
    screens: {
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1440px',
    },
    extend: {
      colors: {
        strongCyan: 'hsl(171, 66%, 44%)',
        lightBlue: 'hsl(233, 100%, 69%)',
        shortlyCyan: 'hsl(180, 66%, 49%)',
        cyanLight: 'hsl(180, 66%, 69%)',
        darkGrayishBlue: 'hsl(210, 10%, 33%)',
        darkViolet: 'hsl(257, 27%, 26%)',
        grayishBlue: 'hsl(201, 11%, 66%)',
        shortlyRed: 'hsl(0, 87%, 67%)',
        grayishViolet: 'hsl(257, 7%, 63%)',
        veryDarkViolet: 'hsl(260, 8%, 14%) ',
        softBlue: 'hsl(231, 69%, 60%)',
        softRed: 'hsl(0, 94%, 66%)',
        grayishBlue: 'hsl(229, 8%, 60%)',
        veryDarkBlue: 'hsl(229, 31%, 21%)',
      },
      fontFamily: {
        sans: ['Bai Jamjuree', 'sans-serif'],
        josefin: ['Josefin Sans', 'sans-serif'],
        alata: ['Alata'],
        poppins: ['Poppins', 'sans-serif'],
        rubik: ['Rubik', 'sans-serif'],
      },
      backgroundImage: () => ({
        dots: "url('../clipboard/images/bg-dots.svg')",
      }),
      letterSpacing: {
        widest: '.1em'
      },
      spacing: {
        180: '32rem',
      }
    },
  },
  plugins: [],
}
