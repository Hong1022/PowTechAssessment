import { Controller, Get } from '@nestjs/common';
import { RhmService } from './rhm.service';
import axios from 'axios';

@Controller('rhm')
export class RhmController {
  constructor(private rhmService: RhmService) {}

  // Endpoint 1 - To generate hash string
  @Get('/generate-hash')
  async generateHash() {
    const hash = await this.rhmService.generateHash();
    return hash;
  }

  // Endpoint 2 - To verify last character of hash string
  @Get('/hash-last-char-verify')
  async getHash() {
    // Catch the response from endpoint #1
    const createdHash = await axios
      .get(
        `${
          process.env.API_SITE_URL ?? 'http://localhost:3000/'
        }/api/rhm/generate-hash`,
      )
      .then((res) => {
        return res;
      });
    const hash = await createdHash.data?.hash;

    const response = await this.rhmService.verifyLastCharacter(hash);
    return response;
  }
}
