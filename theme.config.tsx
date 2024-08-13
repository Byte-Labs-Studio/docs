import React from 'react'
import { DocsThemeConfig } from 'nextra-theme-docs'

const config: DocsThemeConfig = {
  logo: <div
    style={{
      paddingLeft: '3rem',
      lineHeight: '2rem',
      background: "url('/static/logo.png') no-repeat left",
      backgroundSize: '3rem',
      fontWeight: 500,
    }}
  >
    Byte Labs
  </div>,
  project: {
    link: 'https://github.com/Byte-Labs-Studio',
  },
  chat: {
    link: 'https://discord.gg/R8bjTWPCGy',
  },
  docsRepositoryBase: 'https://github.com/Byte-Labs-Studio/docs',
  footer: {
    text: 'Byte Labs Documentation',
  },
}

export default config
