import { BadRequestException, Injectable } from '@nestjs/common';
import { createHash } from 'crypto';
import { nanoid } from 'nanoid';

@Injectable()
export class RhmService {
  async generateHash() {
    const hash = createHash('sha256')
      .update(`${nanoid(15)}`)
      .digest('hex');

    await new Promise((resolve) => setTimeout(resolve, 1000)); // Wait for 1 second before generating the hash

    return { hash };
  }

  async verifyLastCharacter(hash: string) {
    let lastChar: string;

    // Verify is the response from endpoint #1 is hash(256) string
    const isHash256 = this.isHash256(hash);

    if (!isHash256)
      throw new BadRequestException(
        'The response provided by Endpoint #1 is not a hash string.',
      );

    // Verify is the last character of hash string
    lastChar = hash.charAt(hash.length - 1);

    if (isNaN(Number(lastChar)))
      return `${hash}\nThe last 1 character are '${lastChar}'. This is a alpabet. Does not Pass.`;

    if (Number(lastChar) % 2 === 0)
      return `${hash}\nThe last 1 character are '${lastChar}'. This is an even number. Does not Pass`;

    return `${hash}\nThe last 1 character are '${lastChar}'. This is a number and odd number. Pass!`;
  }

  private async isHash256(hash: string) {
    const sha256Regex = /^[a-f0-9]{64}$/i;
    const isHash256 = sha256Regex.test(hash);

    if (!isHash256)
      throw new BadRequestException(
        'The response provided by Endpoint #1 is not a hash string.',
      );
  }
}
