import { createTheme } from "@mui/material/styles";

// 🎨 Кастомные цвета (можно менять под проект)
const primaryColor = "#1976d2"; // Основной цвет (например, кнопки, ссылки)
const secondaryColor = "#9c27b0"; // Второстепенный цвет (например, акценты)

// 🖋️ Шрифт по умолчанию
const fontFamily = "'Roboto', sans-serif";

const theme = createTheme({
  // 🌈 Палитра цветов
  palette: {
    mode: "light", // можно переключать на "dark"
    primary: {
      main: primaryColor,
    },
    secondary: {
      main: secondaryColor,
    },
    background: {
      default: "#f4f6f8",
    },
  },
  // 📏 Сетки (настройки контейнеров)
  breakpoints: {
    values: {
      xs: 0, // Мобильный
      sm: 600, // Планшет
      md: 900, // Небольшой десктоп
      lg: 1200, // Десктоп
      xl: 1536, // Большие экраны
    },
  },

  // 📝 Типографика (настройки шрифта)
  typography: {
    fontFamily,
    allVariants: {
    color: primaryColor, // теперь ВСЯ типографика по умолчанию будет с этим цветом
  },
  },

  // ⚙️ Переопределение компонентов
  components: {
    // Настройка <Container>
    MuiContainer: {
      defaultProps: {
        maxWidth: false, // 📌 Отключаем стандартную ширину
      },
      styleOverrides: {
        root: ({ theme }) => ({
          width: "100%",              // базово — во всю ширину
          marginLeft: "auto",         // центририрование
          marginRight: "auto",
          paddingLeft: "16px",
          paddingRight: "16px",

          // Мобильный: до 600px
          [theme.breakpoints.up("xs")]: {
            maxWidth: "100%",         // полностью ширина экрана
          },

          // Планшет: от 600px
          [theme.breakpoints.up("sm")]: {
            maxWidth: "540px",
          },

          // Десктоп: от 900px
          [theme.breakpoints.up("md")]: {
            maxWidth: "720px",
          },

          // Большой десктоп: от 1200px
          [theme.breakpoints.up("lg")]: {
            maxWidth: "960px",
          },

          // Очень большой экран: от 1536px
          [theme.breakpoints.up("xl")]: {
            maxWidth: "1140px",
          },
        }),
      },
    },
  },
});

export default theme;




/*
┌─────────────────────────────┬─────────────────────────────────────────────────────────────┐
│        Параметр             │                        Описание                             │
├─────────────────────────────┼─────────────────────────────────────────────────────────────┤
│ primaryColor                │ Основной цвет темы (кнопки, ссылки, заголовки)              │
│ secondaryColor              │ Второстепенный цвет (акценты, дополнительные элементы)      │
│ fontFamily                  │ Шрифт, используемый по умолчанию во всех компонентах        │
│                             │                                                             │
│ palette                     │ Палитра цветов темы                                         │
│  ├ mode                    │ Режим темы: "light" (светлая) или "dark" (тёмная)           │
│  ├ primary.main            │ Основной цвет (primaryColor)                                │
│  ├ secondary.main          │ Второстепенный цвет (secondaryColor)                        │
│  └ background.default      │ Цвет фона приложения                                         │
│                             │                                                             │
│ breakpoints                │ Точки перелома (ширина экрана) для адаптивной верстки       │
│  ├ xs                      │ Мобильные устройства (0px и выше)                           │
│  ├ sm                      │ Планшеты (600px и выше)                                      │
│  ├ md                      │ Небольшие десктопы (900px и выше)                           │
│  ├ lg                      │ Десктопы (1200px и выше)                                    │
│  └ xl                      │ Большие экраны (1536px и выше)                              │
│                             │                                                             │
│ typography                 │ Настройки шрифтов и цвета текста                            │
│  ├ fontFamily              │ Шрифт по умолчанию                                           │
│  └ allVariants.color       │ Цвет текста по умолчанию для всех вариантов Typography      │
│                             │                                                             │
│ components                 │ Переопределение стилей и пропсов компонентов MUI           │
│  └ MuiContainer            │ Настройка компонента <Container>                            │
│     ├ defaultProps.maxWidth│ Отключаем стандартный maxWidth, чтобы задать кастомный      │
│     └ styleOverrides.root  │ Переопределение CSS-стилей корня контейнера:                │
│         ├ width            │ Ширина 100% по умолчанию                                     │
│         ├ marginLeft/Right │ Центрирование контейнера                                     │
│         ├ paddingLeft/Right│ Отступы слева и справа (16px)                               │
│         ├ breakpoints.up(xs)│ maxWidth 100% для мобильных                                  │
│         ├ breakpoints.up(sm)│ maxWidth 540px для планшетов                                 │
│         ├ breakpoints.up(md)│ maxWidth 720px для небольших десктопов                      │
│         ├ breakpoints.up(lg)│ maxWidth 960px для десктопов                                 │
│         └ breakpoints.up(xl)│ maxWidth 1140px для очень больших экранов                   │
└─────────────────────────────┴─────────────────────────────────────────────────────────────┘
*/
