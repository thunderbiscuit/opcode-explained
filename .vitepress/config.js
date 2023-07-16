import { defineConfig } from "vitepress"

export default defineConfig({
  title: "Opcode Explained",
  description: "Documenting bitcoin opcodes",
  themeConfig: {
    nav: [
      { text: "Opcodes", link: "/opcodes/", activeMatch: "/opcodes/" },
      { text: "Extras", link: "/overview/script-success.md", activeMatch: "/overview" }
    ],

    sidebar: {
      "/opcodes/": [
        { text: "OP_0", link: "/opcodes/OP_0.md" },
        { text: "OP_PUSHBYTES_1", link: "/opcodes/OP_PUSHBYTES_1.md" },
        { text: "OP_PUSHBYTES_2", link: "/opcodes/OP_PUSHBYTES_2.md" },
        { text: "OP_PUSHBYTES_3", link: "/opcodes/OP_PUSHBYTES_3.md" },
        { text: "OP_PUSHBYTES_4", link: "/opcodes/OP_PUSHBYTES_4.md" },
        { text: "OP_PUSHBYTES_5", link: "/opcodes/OP_PUSHBYTES_5.md" },
        { text: "OP_PUSHBYTES_6", link: "/opcodes/OP_PUSHBYTES_6.md" },
        { text: "OP_PUSHBYTES_7", link: "/opcodes/OP_PUSHBYTES_7.md" },
        { text: "OP_PUSHBYTES_8", link: "/opcodes/OP_PUSHBYTES_8.md" },
        { text: "OP_PUSHBYTES_9", link: "/opcodes/OP_PUSHBYTES_9.md" },
        { text: "OP_PUSHBYTES_10", link: "/opcodes/OP_PUSHBYTES_10.md" },
        { text: "OP_PUSHBYTES_11", link: "/opcodes/OP_PUSHBYTES_11.md" },
        { text: "OP_PUSHBYTES_12", link: "/opcodes/OP_PUSHBYTES_12.md" },
        { text: "OP_PUSHBYTES_13", link: "/opcodes/OP_PUSHBYTES_13.md" },
        { text: "OP_PUSHBYTES_14", link: "/opcodes/OP_PUSHBYTES_14.md" },
        { text: "OP_PUSHBYTES_15", link: "/opcodes/OP_PUSHBYTES_15.md" },
        { text: "OP_PUSHBYTES_16", link: "/opcodes/OP_PUSHBYTES_16.md" },
        { text: "OP_PUSHBYTES_17", link: "/opcodes/OP_PUSHBYTES_17.md" },
        { text: "OP_PUSHBYTES_18", link: "/opcodes/OP_PUSHBYTES_18.md" },
        { text: "OP_PUSHBYTES_19", link: "/opcodes/OP_PUSHBYTES_19.md" },
        { text: "OP_PUSHBYTES_20", link: "/opcodes/OP_PUSHBYTES_20.md" },
        { text: "OP_PUSHBYTES_21", link: "/opcodes/OP_PUSHBYTES_21.md" },
        { text: "OP_PUSHBYTES_22", link: "/opcodes/OP_PUSHBYTES_22.md" },
        { text: "OP_2", link: "/opcodes/OP_2.md" },
        { text: "OP_ADD", link: "/opcodes/OP_ADD.md" },
      ],
      
      "/overview/": [
        { text: "Bitcoin Script Success/Failure", link: "/overview/script-success.md" },
        { text: "ASM Representation", link: "/overview/asm.md" },
        { text: "Numbers in Script", link: "/overview/numbers.md" },
      ]
    },
    
    socialLinks: [
      { icon: "github", link: "https://github.com/thunderbiscuit/opcode-explained" }
    ]
  }
})
