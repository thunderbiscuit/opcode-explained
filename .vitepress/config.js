import { defineConfig } from "vitepress"

export default defineConfig({
  title: "Opcode Explained",
  description: "Documenting bitcoin opcodes",
  themeConfig: {
    nav: [
      { text: "Opcodes", link: "/opcodes/", activeMatch: "/opcodes/" },
      { text: "Extras", link: "/overview/", activeMatch: "/overview" }
    ],

    sidebar: {
      "/opcodes/": [
        { text: "OP_0", link: "/opcodes/OP_0.md" },
        { text: "OP_2", link: "/opcodes/OP_2.md" },
        { text: "OP_ADD", link: "/opcodes/OP_ADD.md" },
      ],
      
      "/overview/": [
        { text: "Notes on Script", link: "/overview/notes.md" },
      ]
    },
    
    socialLinks: [
      { icon: "github", link: "https://github.com/thunderbiscuit/opcode-explained" }
    ]
  }
})
