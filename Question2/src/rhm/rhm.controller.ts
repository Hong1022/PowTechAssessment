import { Controller, Get } from '@nestjs/common';
import { RhmService } from './rhm.service';

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
    const response = await this.rhmService.verifyLastCharacter();
    return response;
  }
}
