# Numbers in Script
## Little endian
Bitcoin script reads numbers in little endian format. For example, when using `OP_PUSHDATA2` and providing 2 following bytes that must be interpreted as an integer for the number of following bytes to push on the stack, the number 400 would be encoded as `9001` (400 in hexadecimal is `0190`, which reversed in little endian becomes `9001`).

## Minimally encoded integers
:::danger 
This section has not been reviewed by bitcoin script experts yet! It was half written by ChatGPT-4 and as far as I can tell it's correct but I would appreciate review. If you can help, [please open an issue or pull request on the repository](https://github.com/thunderbiscuit/opcode-explained).
:::

<br>

Number-related opcodes like `OP_2`, `OP_16`, `OP_1NEGATE`, etc. in Script use _minimally encoded integers_.

The concept of minimally encoded integers is specific to bitcoin's Script system and it's part of an effort to make the system more efficient.

- Integers in Bitcoin Script are represented as little-endian byte arrays (least significant byte first).
- An empty byte array is considered to represent the number 0.
- Otherwise, the most significant byte of an integer should be between 0x01 and 0x80 to represent positive numbers, and between 0x81 and 0x8000 to represent negative numbers. If the most significant byte equals to 0x80 or 0x8000, one more byte is added.
- If the most significant byte is greater than 0x50, to prevent it being interpreted as a negative number (Bitcoin Script uses a format known as "sign-magnitude"), an extra 0x00 is added to the end of the array. This represents a positive number. The analogous applies for negative numbers.
- The least number of bytes possible is used to represent a number. This is the "minimal" part of "minimally-encoded": if a number can be represented using fewer bytes, it must be.
  
Here are some examples:
1. The number `0` is represented as an empty byte array.
2. The number `1` is represented as `0x01`.
3. The number `-1` is represented as `0x81`.
4. The number `127` is represented as `0x7f00`. The `0x00` is added because `0x7f` is greater than `0x50`, and without the `0x00`, it could be interpreted as a negative number.
5. The number `-127` is represented as `0xff00`. The `0x00` is added because `0xff` is greater than `0x80`, and without the `0x00`, it could be interpreted as a positive number.

The main idea here is to save space: by using the fewest number of bytes possible to represent a number, Bitcoin transactions can be smaller, which saves space in blocks and reduces fees for users. It also avoids the ambiguity that can arise when there are multiple valid representations for the same number.
