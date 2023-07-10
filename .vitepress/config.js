import { defineConfig } from 'vitepress'

export default defineConfig({
  title: "Opcode Explained",
  description: "Documenting bitcoin opcodes",
  themeConfig: {
    nav: [
      { text: "Home", link: "/" },
      { text: "Opcodes", link: "/opcodes/", activeMatch: "/opcodes/" },
      { text: "Overview", link: "/overview/", activeMatch: "/overview" }
    ],

    sidebar: {
      "/opcodes/": [
        { text: "OP_2", link: "/opcodes/OP_2.md" },
        { text: "OP_3", link: "/opcodes/OP_3.md" },
        { text: "OP_4", link: "/opcodes/OP_4.md" },
        { text: "OP_ADD", link: "/opcodes/OP_ADD.md" },
      ],
      
      "/overview/": [
        { text: "General Rules", link: "/overview/general.md" },
      ]
    },
    
    socialLinks: [
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
    ]
  }
})
