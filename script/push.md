# Push Operators

## Minimal push operations

Bitcoin's scripting language has several operators for pushing data onto the stack. When there are multiple options for how to push the same byte array, the commonly used standardness rules require that the smallest possible encoding be used:

* Pushing an empty byte array must use `OP_0`.
* Pushing a byte between `0x01` and `0x10` must use `OP_1` to `OP_16`.
* Pushing the byte `0x81` must use `OP_1NEGATE`.
* Pushing any other byte array up to 75 bytes must use the corresponding `OP_PUSHBYTES` opcode.
* Pushing 76 to 255 bytes must use `OP_PUSHDATA1`.
* Pushing 256 to 65535 bytes must use `OP_PUSHDATA2`.
* Pushing 65536 bytes or more must use `OP_PUSHDATA4`.

Note that the largest push allowed by consensus rules is 520 bytes, which means `OP_PUSHDATA4` is never used in practice.
