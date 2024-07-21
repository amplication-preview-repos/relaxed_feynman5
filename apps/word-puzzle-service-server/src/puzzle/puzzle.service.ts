import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { PuzzleServiceBase } from "./base/puzzle.service.base";

@Injectable()
export class PuzzleService extends PuzzleServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
